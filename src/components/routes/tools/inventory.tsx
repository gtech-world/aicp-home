import WrapPageContainer from '@/components/ant/WrapPageContainer';
import WrapProTable, { ProTableColumns, wrapRenderText } from '@/components/ant/WrapProTable';
import { Btn } from '@/components/common/button';
import { RealData } from '@/components/modal/RealData';
import { useInventoryList } from '@/lib/hooks/useDatas';
import { useUnVerifier } from '@/lib/hooks/useUser';
import { history } from '@umijs/max';
import classNames from 'classnames';
import { useMemo, useRef, useState } from 'react';
import InventoryResultModal from './inventoryResultModal';
import { scrollToTop, tryParse } from '@/lib/utils';

const colorText: any = {
  [-1]: { color: 'text-[red]', text: '计算失败' },
  0: { color: 'text-[#FF9800]', text: '等待计算' },
  1: { color: 'text-green-2', text: '查看结果' },
  2: { color: 'text-blue-600', text: '正在计算' },
};

type RealDataType = Pick<ApiModel.InventoryInfo, 'param' | 'paramDetail'>;
export function Inventory() {
  const [pgNum, setPgNum] = useState(1);
  const [openResultModal, setOpenResultModal] = useState<boolean>(false);
  const [openViewRealDataModal, setOpenViewRealDataModal] = useState<boolean>(false);
  const paramDetailRef = useRef<ApiModel.ParamDetailType>({ inputData: '', data: '' });
  const onViewRealDataModal = (data: RealDataType) => {
    const { param, paramDetail } = data;
    paramDetailRef.current = { inputData: param, data: paramDetail };
    setOpenViewRealDataModal(true);
  };

  const columns = useMemo<ProTableColumns>(
    () => [
      {
        title: '碳足迹批次',
        dataIndex: 'loadName',
        width: 180,
        ellipsis: true,
      },
      {
        title: '实景数据',
        valueType: 'option',
        width: 120,
        render: (_dom, entity: any) => [
          <div
            key="key_look_real"
            className="flex justify-center whitespace-nowrap px-2.5 bg-[#F1F1F1] rounded"
            onClick={() => onViewRealDataModal(entity)}
          >
            <span className="cursor-pointer">查看实景数据</span>
          </div>,
        ],
      },
      {
        title: '批次结果ID',
        dataIndex: 'loadNumber',
        width: 170,
        renderText: wrapRenderText,
      },

      {
        title: '产品系统名称',
        width: 128,
        dataIndex: 'productName',
        ellipsis: true,
      },
      {
        title: '系统产品ID',
        dataIndex: 'productUuid',
        width: 170,
        renderText: wrapRenderText,
      },
      {
        title: '描述',
        dataIndex: 'productDescription',
        width: 200,
        ellipsis: true,
      },
      {
        title: '操作人',
        dataIndex: 'operator',
        width: 100,
        ellipsis: true,
      },
      {
        title: '生成时间',
        dataIndex: 'calculateSuccessTime',
        valueType: 'dateTime',
        width: 180,
      },
      {
        title: '碳足迹结果',
        dataIndex: 'state',
        width: 130,
        render: (_dom, entity) => (
          <div
            className={classNames({ 'cursor-pointer': entity.state === 1 }, colorText[entity.state]?.color)}
            onClick={() => {
              entity.state === 1 && history.push(`/main/tools/inventory/result?id=${entity.loadNumber}`);
            }}
          >
            {colorText[entity.state]?.text}
          </div>
        ),
      },
      {
        title: '组织名称',
        dataIndex: 'orgName',
        width: 130,
        ellipsis: true,
      },
      {
        title: '组织编号',
        dataIndex: 'orgSerialNumber',
        width: 130,
        ellipsis: true,
      },
    ],
    [],
  );

  const { data, isLoading, mutate: refresh } = useInventoryList(pgNum, 10000);
  const tableSource = useMemo(
    () => (data?.records || []).map((item, i) => ({ ...item, key: 'key_inventory_' + i })),
    [data],
  );
  const unVerifier = useUnVerifier();

  const realDataColumns = useMemo<ProTableColumns>(
    () => [
      {
        title: '参数名',
        dataIndex: 'name',
        ellipsis: true,
        width: 200,
      },
      {
        title: '过程名称',
        dataIndex: 'uuid',
        width: 170,
      },
      {
        title: '参考值',
        dataIndex: 'optName',
        width: 100,
      },
      {
        title: '输入值',
        dataIndex: 'inputData',
        width: 100,
      },
    ],
    [],
  );
  const tableData = useMemo(() => {
    if (!paramDetailRef.current) return [];

    const params = tryParse<any[]>(paramDetailRef.current.data) || [];

    const inputData = paramDetailRef.current.inputData;
    const inputMap = paramDetailRef.current.inputData
      ? _.mapKeys(
          typeof inputData === 'string' ? tryParse<ApiModel.LcaParamList[]>(inputData) || [] : inputData,
          (item) => item.paramName,
        )
      : ({} as _.Dictionary<ApiModel.LcaParamList>);
    const bases = (params[0]?.parameters || []) as any[];
    return bases
      .map((item) => [item.name, item.context.name, item.value, inputMap[item.name]?.paramValue])
      .map(([name, uuid, optName, inputData]) => ({
        name,
        uuid,
        optName: optName.toString(),
        inputData,
      }));
  }, [paramDetailRef.current]);

  return (
    <WrapPageContainer
      title="我的产品碳足迹结果"
      extra={
        unVerifier
          ? [
              <Btn key="new_inventory" onClick={() => setOpenResultModal(true)}>
                新建碳足迹结果
              </Btn>,
            ]
          : []
      }
    >
      <div className="bg-white">
        <WrapProTable
          columns={columns}
          dataSource={tableSource}
          loading={isLoading}
          pagination={{
            pageSize: 10,
            total: data?.total || 0,
            current: pgNum,
            onChange: (page) => {
              setPgNum(page);
              scrollToTop();
            },
          }}
        />
      </div>
      {openResultModal && (
        <InventoryResultModal
          openResultModal={() => setOpenResultModal(false)}
          getList={() => {
            setPgNum(1);
            if (pgNum === 1) {
              refresh();
            }
          }}
        />
      )}
      {openViewRealDataModal && (
        <RealData isShow header={realDataColumns} data={tableData} onClose={() => setOpenViewRealDataModal(false)} />
      )}
    </WrapPageContainer>
  );
}

export default Inventory;
