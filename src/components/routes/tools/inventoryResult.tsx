import Chart from '@/components/common/Chart';
import { Button } from '@/components/common/button';
import { Loading } from '@/components/common/loading';
import { ToolsLayout } from '@/components/common/toolsLayout';
import { Wrapmermaid } from '@/components/common/wrapmermaid';
import { exportLcaResultExcel, getLcaProductDetailList, getLcaResultDetail } from '@/lib/http';
import { tryParse } from '@/lib/utils';
import { useSearchParams } from '@umijs/max';
import classNames from 'classnames';
import { EChartsOption, PieSeriesOption } from 'echarts';
import _ from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import { BsCaretUpFill } from 'react-icons/bs';
import { useToggle } from 'react-use';

function Expand(p: { text: string; onChange: (open: boolean) => void }) {
  const [open, setOpen] = useState(true);
  const { text, onChange } = p;
  useMemo(() => {
    onChange && onChange(open);
  }, [open]);
  return (
    <div className="inline-block font-bold" onClick={() => setOpen(!open)}>
      <div className="flex items-center cursor-pointer">
        <span>{text}</span>
        <BsCaretUpFill height="7px" className={classNames('ml-1', !open && 'rotate-180')} />
      </div>
    </div>
  );
}

function GeneralInfo(p: { data: any }) {
  const [open, setOpen] = useState(true);
  const { data } = p;
  const list = [
    { label: '碳足迹批次', text: data.loadName },
    { label: '产品系统', text: data.productSystemName },
    { label: '目标产品', text: data.targetName },
    { label: '目标产品数量', text: data.targetAmount },
    { label: 'Impact Method(环境影响评价方法)', text: 'IPCC 2021' },
    { label: 'Allocation Method(分摊方法)', text: 'Process Defaults' },
    { label: 'Cutoff', text: 'None' },
    { label: '计算结果生成时间', text: data.calculateSuccessTime },
  ];
  return (
    <div>
      <Expand text="一般信息" onChange={(v: boolean) => setOpen(v)} />
      {open && (
        <div className="mt-4">
          {list.map((v: any, i: number) => {
            return (
              <div className="flex" key={`data-${i}`}>
                <label className="">{v.label} :</label>
                <span className="ml-1 text-gray-6">{v.text}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
function Result(p: { data: any }) {
  const [open, setOpen] = useState(true);
  const { data } = p;
  return (
    <div className="mt-4">
      <Expand text="碳足迹结果" onChange={(v: boolean) => setOpen(v)} />
      {open && <div className="text-[1.75rem] font-semibold mt-4">{data}</div>}
    </div>
  );
}

export function InventoryResult() {
  const [sq] = useSearchParams();
  const [exportLoading, setExportLoading] = useState(false);
  const [value, setValue] = useState<{
    lca: InventoryController.InventoryDetail;
    bominfo: string;
  }>();
  const [loading, setLoading] = useState<any>(true);

  const getList = async () => {
    const res = await getLcaResultDetail(sq.get('id'));
    if (!res) return;
    const { modelBomInfo } = await getLcaProductDetailList(res.modelId);
    setValue({ lca: res, bominfo: modelBomInfo });
    setLoading(false);
  };

  useEffect(() => {
    getList();
  }, [sq.get('id')]);

  const { generalInfo, carbonResult, graphData, pieData } = useMemo(() => {
    let generalInfo: any = [];
    let referenceUnit = '';
    let carbonResult: any = '';
    let graphData = '';
    let pieData: EChartsOption = {};
    if (value) {
      // general infos
      const { lca, bominfo } = value;
      const val = tryParse<any>(lca.lcaResult);
      // console.info("val::", val);
      if (val) {
        generalInfo = {
          productSystemName: val.extra?.productSystemName,
          methodName: val.extra?.methodName,
          targetAmount: val.extra?.targetAmount,
          calculateSuccessTime: lca.calculateSuccessTime,
          loadNumber: lca.loadNumber,
          loadName: lca.loadName,
        };
        referenceUnit = (val.totalImpacts && val.totalImpacts[0]?.impact.referenceUnit) || '';
        const total = _.round(val.totalResult || val.treeNode?.result || 0, 2);
        carbonResult = `${total || 0} ${referenceUnit}`;
      }

      type BomNode = {
        flowId: string;
        tagType: string;
        flowName: string;
        processId: string;
        partNumbers: string[];
        childFlowIds: string[];
      };
      // mermaid data
      const boms = tryParse<BomNode[]>(bominfo);
      const tagResult = tryParse<{ result: number; processId: string; flowId: string }[]>(lca.lcaTagResult);
      // console.info("booms:", boms);
      // console.info("tagRes:", tagResult);
      if (boms && tagResult) {
        graphData = 'classDiagram';
        const mapTagResult = _.groupBy(tagResult, 'flowId');
        const mapBoms = _.groupBy(boms, 'flowId');
        const indexMap: {
          bomIndex: number;
          stageIndex: number;
          [k: string]: number;
        } = {
          bomIndex: 1,
          stageIndex: 1,
        };
        const getIndex = (item: BomNode) => {
          if (!indexMap[item.flowId]) {
            indexMap[item.flowId] = item.tagType === 'STAGE' ? indexMap.stageIndex++ : indexMap.bomIndex++;
          }
          return indexMap[item.flowId];
        };
        const itemTit = (item: BomNode) => {
          return item.tagType === 'REFERENCE' ? '目标产品' : item.tagType + getIndex(item);
        };
        const sortBoms = _.sortBy(boms, (item) => (item.tagType === 'BOM' ? 2 : item.tagType === 'STAGE' ? 1 : 0));
        // links
        sortBoms.forEach((item) => {
          if (item.childFlowIds && item.childFlowIds.length) {
            item.childFlowIds.forEach((flowId) => {
              const flowRes = _.first(mapTagResult[flowId]);
              const flowBom = _.first(mapBoms[flowId]);
              if (flowBom && flowRes) {
                const p = itemTit(item);
                const c = itemTit(flowBom);
                graphData += `\n ${p} <|-- ${c}`;
              }
            });
          }
        });
        pieData = {
          padding: 20,
          legend: {
            top: 30,
            padding: 20,
            type: 'scroll',
            orient: 'horizontal',
            align: 'auto',
          },
          tooltip: {
            trigger: 'item',
            formatter: (item: any) => {
              return `<div>
            ${(item as any).marker}
            <span>${(item as any).name} (${item.percent}%)</span>
            <div style="margin-left: 18px">${(item as any).value} ${referenceUnit}</div>
          </div>`;
            },
          },
          series: {
            type: 'pie',
            radius: '60%',
            data: [],
            center: ['50%', '56%'],
            label: {
              formatter: (item) => {
                return `${item.percent}%`;
              },
            },
          },
        };
        // contents
        sortBoms.forEach((item) => {
          const p = itemTit(item);
          const v = _.first(mapTagResult[item.flowId]);
          // const value =
          //   item.tagType === "REFERENCE"
          //     ? v?.result || 0
          //     : (v?.result || 0) - _.sumBy(item.childFlowIds, (flowId) => _.first(mapTagResult[flowId])?.result || 0);
          const value =
            (v?.result || 0) - _.sumBy(item.childFlowIds, (flowId) => _.first(mapTagResult[flowId])?.result || 0);
          const ftmValue = _.round(value, 2);
          const content = `${p} : ${item.flowName.replaceAll('(', '（').replaceAll(')', '）')}
          ${p} : +PCF(${ftmValue} ${referenceUnit})`;
          if (item.tagType !== 'REFERENCE' || item.childFlowIds.length > 0) graphData += `\n${content}`;
          if (item.tagType === 'REFERENCE') {
            pieData.title = { text: item.flowName, left: 'center', top: 10 };
            generalInfo.targetName = item.flowName;
            graphData += `\n${p} : Total(${_.round(v?.result || 0, 2)} ${referenceUnit})`;
          }
          if (ftmValue > 0) (pieData.series as PieSeriesOption).data?.push({ name: item.flowName, value: ftmValue });
        });
      }
    }

    // console.info("gD:", graphData);
    return {
      generalInfo,
      carbonResult,
      graphData,
      pieData,
    };
  }, [value]);

  const doExport = async () => {
    if (!sq.get('id')) return false;
    setExportLoading(true);
    const res: any = await exportLcaResultExcel(sq.get('id'));
    if (res.headers) {
      const contentDisposition = res.headers.get('content-disposition');
      if (contentDisposition) {
        const filenameMatch = contentDisposition.match(/filename=(.+)/);
        if (filenameMatch) {
          setExportLoading(false);
          const blob = new Blob([res.data]); //处理文档流
          const eLink = document.createElement('a');
          eLink.download = filenameMatch[1];
          eLink.style.display = 'none';
          eLink.href = URL.createObjectURL(blob);
          document.body.appendChild(eLink);
          eLink.click();
          URL.revokeObjectURL(eLink.href); // 释放URL 对象
          document.body.removeChild(eLink);
        }
      }
    }
  };
  const [showBoms, toggleBom] = useToggle(true);

  return (
    <ToolsLayout className="text-lg text-black">
      {loading ? (
        <div className="h-[100vh] w-full items-center">
          <Loading />
        </div>
      ) : (
        <div className="mo:break-all">
          <h3 className="my-5 text-2xl font-semibold">碳足迹结果</h3>
          <div className="p-5 bg-white rounded-2xl">
            <GeneralInfo data={generalInfo} />
            <Result data={carbonResult} />
            {!_.isEmpty(graphData) && !_.isEmpty(pieData) && (
              <div className="w-full mt-4">
                <Expand text="BOM/STAGE的明细结果" onChange={(v: boolean) => toggleBom(v)} />
                {showBoms && (
                  <>
                    <Wrapmermaid className="w-full h-[360px] bg-[#F1F1F1] mt-4" data={graphData} />
                    <Chart className="w-full !h-[320px] bg-[#F1F1F1] mt-4" option={pieData} />
                  </>
                )}
              </div>
            )}
          </div>
          <div className="flex justify-center w-full mt-5 mb-10">
            <Button
              onClick={() => !exportLoading && doExport()}
              className="mt-5 text-lg bg-green-2 w-[26.875rem] text-white rounded-lg  h-14 flex items-center justify-center hover:bg-green-28"
            >
              {exportLoading ? (
                <div>
                  <Loading size="2rem" color={'#fff'} />
                </div>
              ) : (
                <span>导出Excel</span>
              )}
            </Button>
          </div>
        </div>
      )}
    </ToolsLayout>
  );
}

export default InventoryResult;
