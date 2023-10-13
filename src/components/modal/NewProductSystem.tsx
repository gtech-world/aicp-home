import { Modal, ModalProps } from '@/components/common/modal';
import { ChangeEvent, Fragment, useCallback, useMemo, useRef, useState } from 'react';
import { ActionBtn, EditorText, LcaActionInfo, PairInfo } from './EditorProductSystem';
import { Btn } from '@/components/common/button';
import { useOn } from '@/lib/hooks/useOn';
import { upsertLcaProduct, uploadLcaModel, getLcaProductDetailList } from '@/lib/http';
import { Progress } from '@/components/common/progress';
import ViewBomInfoModal from './ViewBomInfoModal';
import { RealData } from './RealData';
import { sleep, tryParse } from '@/lib/utils';
import { useSafe } from '@/lib/hooks/useSafe';
import classNames from 'classnames';
import Descriptions from '../common/Descriptions';
import { ProTableColumns } from '../ant/WrapProTable';
import { Input } from 'antd';

export function NewProductSystem(p: ModalProps & { onSuccess?: () => void }) {
  const { onSuccess, onClose: _onClose, ...props } = p;
  const [desc, setDesc] = useState('');
  const [isProgress, setIsProgress] = useState(false);
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState<File | undefined | null>(null);
  const [type, setType] = useState('upload');
  const disabledOk = !file;
  const [uploadingText, setUploadingText] = useState<string>('');
  const [resultList, setResultList] = useState<{
    modelBomInfo: string;
    modelName: string;
    paramDetail: string;
    id: number;
  }>({ id: 0, modelBomInfo: '', paramDetail: '', modelName: '' });
  const [viewBomInfo, setViewBomInfo] = useState(false);
  const [viewRealDataList, setViewRealDataList] = useState(false);
  const onFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.item(0));
  }, []);
  const acRef = useRef<AbortController>();
  const onClose = useCallback(() => {
    acRef.current?.abort();
    _onClose && _onClose();
  }, [_onClose]);

  const resetState = () => {
    setIsProgress(false);
    setProgress(0);
    setUploadingText('');
  };

  const safe = useSafe();
  const loopGetDetail = async (modelId: number) => {
    setUploadingText('模型解析中......');
    while (true) {
      await sleep(5000);
      if (!safe.current) return;
      const res = await getLcaProductDetailList(modelId).catch(() => undefined);
      setProgress((p) => Math.min(p + 10, 100));
      if (res && res.state === 1 && res.modelBomInfo) {
        return res;
      }
    }
  };

  const upload = () => {
    setUploadingText('正在上传......');
    const form = new FormData();
    form.append('file', file as any);
    acRef.current = new AbortController();
    uploadLcaModel(form, {
      signal: acRef.current.signal,
      onUploadProgress: (e) => {
        setProgress(Math.min(Math.round((e.progress || 0) * 100), 60));
      },
    })
      .then(loopGetDetail)
      .then((res) => {
        if (res) {
          setResultList(res);
          setType('add');
          resetState();
        }
      })
      .catch(() => {
        resetState();
      });
  };

  const onOk = useOn(() => {
    if (disabledOk) return;
    if (type === 'upload') {
      if (isProgress) return;
      setIsProgress(true);
      upload();
    } else {
      upsertLcaProduct({ name: resultList.modelName, description: desc, modelId: resultList.id })
        .then(() => {
          onSuccess && onSuccess();
          onClose();
        })
        .catch((e) => {
          console.log('err', e);
        });
    }
  });

  const data = {
    modelName: resultList?.modelName,
    bom: '',
    realData: '',
    lca: '',
    desc: '',
  };

  const options: any[] = [
    {
      label: '产品系统名称',
      dataIndex: 'modelName',
      render: () => <div className="mt-[-10px]">{resultList?.modelName}</div>,
    },
    {
      label: 'BOM信息',
      dataIndex: 'bom',
      render: () => <ActionBtn action="查看" onClick={() => setViewBomInfo(true)} />,
    },
    {
      label: '实景参数列表',
      dataIndex: 'realData',
      render: () => <ActionBtn action="查看" onClick={() => setViewRealDataList(true)} />,
    },
    {
      label: '产品系统LCA文件',
      dataIndex: 'lca',
      render: () => (
        <LcaActionInfo
          modelStatus={!isProgress ? 1 : 0}
          modelId={resultList.id}
          openNewTab={true}
          onFileChange={onFileChange}
        />
      ),
    },
    {
      label: '描述',
      dataIndex: 'desc',
      render: () => (
        <Input maxLength={100} value={desc} onChange={(e) => setDesc(e.target.value)} className="h-[40px]" />
      ),
    },
  ];

  const columns = useMemo<ProTableColumns>(
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
    ],
    [],
  );

  const tableData = useMemo(() => {
    if (!data) return [];
    const params = tryParse<any[]>(resultList?.paramDetail) || [];
    const bases = (params[0]?.parameters || []) as any[];
    return bases
      .map((item) => [item.name, item.context.name, item.value])
      .map(([name, uuid, optName]) => ({
        name,
        uuid,
        optName: optName.toString(),
      }));
  }, [data]);

  return (
    <Fragment>
      <Modal
        {...props}
        title={'新建产品系统'}
        onClose={() => {
          onClose();
          resetState();
        }}
        line={!uploadingText}
        bottomBtn={
          <div className="flex flex-shrink-0 w-full gap-5">
            {!isProgress && (
              <Fragment>
                <Btn
                  type="default"
                  size="large"
                  className="flex-1"
                  onClick={() => {
                    onClose();
                    resetState();
                  }}
                >
                  取消
                </Btn>

                <Btn size="large" type="primary" className="flex-1" onClick={onOk} disabled={disabledOk}>
                  {type === 'upload' ? '上传' : '确定'}
                </Btn>
              </Fragment>
            )}
          </div>
        }
      >
        <div className="flex flex-col gap-5 w-full min-w-[40rem] overflow-hidden">
          <div
            className={classNames(
              `flex flex-col w-full flex-1  max-h-mc px-5 py-[1px] overflow-y-auto ${isProgress ? 'gap-0' : 'gap-5'}`,
            )}
          >
            {isProgress ? (
              <Fragment>
                <div className="flex justify-center w-full text-sm">{uploadingText}</div>
                <Progress value={progress} className="my-5 overflow-hidden rounded-lg" />
              </Fragment>
            ) : type === 'upload' ? (
              <PairInfo
                tit="产品系统LCA文件"
                value={
                  <LcaActionInfo
                    isNew={true}
                    className={'!mt-[2px]'}
                    disableSelectFile={isProgress}
                    file={file as any}
                    onFileChange={onFileChange}
                    btnText="选择模型"
                  />
                }
              />
            ) : (
              <div className="flex flex-col gap-5  w-[600px] min-w-[20rem] py-[1px] max-h-mc overflow-y-auto ">
                <Descriptions
                  options={options}
                  data={data}
                  optionEmptyText="-"
                  layout="vertical"
                  column={1}
                  size="small"
                  contentStyle={{ color: '#999999', fontWeight: '400' }}
                  labelStyle={{ color: '#000000', fontWeight: '400' }}
                />
              </div>
            )}
          </div>
        </div>
      </Modal>
      {viewRealDataList && (
        <RealData isShow header={columns} data={tableData} onClose={() => setViewRealDataList(false)} />
      )}
      {viewBomInfo && <ViewBomInfoModal {...resultList} onClose={() => setViewBomInfo(false)} />}
    </Fragment>
  );
}
