import { useStore } from '@/components/common/context';
import { Loading } from '@/components/common/loading';
import { Modal, ModalProps } from '@/components/common/modal';
import { useProductSystem } from '@/lib/hooks/useDatas';
import { useIsVerifier } from '@/lib/hooks/useUser';
import { shortStr, tryParse } from '@/lib/utils';
import classNames from 'classnames';
import _ from 'lodash';
import {
  ChangeEvent,
  ChangeEventHandler,
  InputHTMLAttributes,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useToggle } from 'react-use';
import { RealData } from './RealData';
import ViewBomInfoModal from './ViewBomInfoModal';
import { ViewProductSystem } from './ViewProductSystem';
import Descriptions, { DescriptionsItemProps } from '../common/Descriptions';
import { ProTableColumns } from '../ant/WrapProTable';

export function PsStatus(p: { status?: number }) {
  const { status } = p;
  if (_.isNil(status)) return <div className="text-base font-normal leading-none text-neutral-400">草稿</div>;
  return (
    <div
      className={classNames(
        'w-min whitespace-nowrap h-6 px-2.5 py-1 bg-opacity-10 rounded justify-start items-center gap-2.5 inline-flex',
        {
          'bg-rose-500': status !== 1,
          'bg-green-600': status === 1,
        },
      )}
    >
      <div
        className={classNames('text-green-600 text-base font-normal leading-none', {
          'text-rose-500': status !== 1,
          'text-green-600': status === 1,
        })}
      >
        {status === 1 ? '当前使用' : '过去版本'}
      </div>
    </div>
  );
}

export function ActionBtn(p: {
  action: string;
  className?: any;
  onClick?: undefined | MouseEventHandler<HTMLDivElement>;
  to?: string;
}) {
  const { action, onClick, to, className } = p;
  if (to) {
    return (
      <div
        className={classNames(
          className,
          ' w-min hover:border-[#29953A] mt-[-10px] hover:text-[#29953A] border text-[#000000] whitespace-nowrap h-6 px-2.5 py-1 bg-zinc-100 rounded-sm justify-start items-center gap-2.5 inline-flex cursor-pointer',
        )}
      >
        <a href={to}>{action}</a>
      </div>
    );
  }
  return (
    <div
      className={classNames(
        className,
        '   w-min whitespace-nowrap mt-[-10px] hover:border-[#29953A] border text-[#000000]  h-6 px-2.5 py-1  rounded-sm justify-start items-center gap-2.5 inline-flex cursor-pointer',
      )}
      onClick={onClick}
    >
      <div className="text-sm font-normal leading-none hover:text-[#29953A]   text-[#000000]">{action}</div>
    </div>
  );
}

export function LcaActionInfo(p: {
  psId?: string;
  modelId?: number;
  isNew?: boolean;
  isRead?: boolean;
  modelStatus?: number;
  disableSelectFile?: boolean;
  hiddenUpdate?: boolean;
  file?: File;
  openNewTab?: boolean;
  btnText?: string;
  className?: string;
  onFileChange?: ChangeEventHandler<HTMLInputElement>;
}) {
  const {
    psId,
    disableSelectFile = false,
    openNewTab = false,
    hiddenUpdate,
    modelId,
    isNew,
    isRead,
    modelStatus,
    file,
    onFileChange,
    className,
    btnText = '上传模型',
  } = p;
  const inputFileRef = useRef<HTMLInputElement>(null);
  const renderLook = () => {
    if (modelStatus !== 1) return <div className="text-base font-normal leading-none text-amber-500">等待解析</div>;
    return (
      <ActionBtn
        onClick={() => (openNewTab ? window.open(`/model?id=${modelId}`, '_blank') : undefined)}
        to={!openNewTab ? `/model?id=${modelId}` : undefined}
        action="在线查看"
      />
    );
  };
  const onClickUp = (e: MouseEvent<HTMLDivElement>) => {
    !disableSelectFile && inputFileRef.current?.click();
  };
  return (
    <div className="text-neutral-400 text-base font-normal leading-none flex items-center gap-2.5">
      <input ref={inputFileRef} type="file" hidden accept=".zip" onChange={onFileChange} />
      {!isRead && shortStr(file?.name, 10, 10)}
      {isRead ? (
        renderLook()
      ) : isNew ? (
        <>
          <ActionBtn action={btnText} onClick={onClickUp} className={className} />
        </>
      ) : (
        <>{!file && renderLook()}</>
      )}
    </div>
  );
}

export function PairInfo(p: { tit: string; value: ReactNode }) {
  const isStr = typeof p.value === 'string' || typeof p.value === 'number';
  return (
    <div className="flex flex-col gap-2.5">
      <div className="text-sm font-normal leading-normal text-black ">{p.tit}: </div>
      {isStr ? <div className="text-base font-normal leading-none text-neutral-400">{p.value}</div> : p.value}
    </div>
  );
}

export function EditorText(p: InputHTMLAttributes<HTMLInputElement>) {
  const { defaultValue, ...props } = p;
  return (
    <input
      type="text"
      className="w-full px-5 py-[15px] bg-gray-28 rounded-lg border border-neutral-200 justify-start items-start gap-2.5 inline-flex text-black text-base font-normal leading-none"
      {...props}
    />
  );
}

export function OrganizationInfo(p: { organization?: ApiModel.Organization }) {
  const { userData } = useStore();
  const org = p.organization || userData?.organization;
  return (
    <>
      <PairInfo tit="组织名称" value={org?.name || '-'} />
      <PairInfo tit="组织编号" value={org?.serialNumber || '-'} />
    </>
  );
}

export function EditorProductSystem(p: ModalProps & { psId: number; onSuccess?: () => void }) {
  const { psId, onSuccess, ...props } = p;
  const { data: ps, isLoading, error } = useProductSystem(psId, 60000);
  const [inputDesc, setInputDesc] = useState('');
  const firstRef = useRef(true);
  useEffect(() => {
    if (ps && firstRef.current) {
      setInputDesc(ps.description || '');
      firstRef.current = false;
    }
  }, [ps]);
  useEffect(() => {
    error && props.onClose && props.onClose();
  }, [error]);
  const [busy, setBusy] = useState(false);
  const [file, setFile] = useState<File | undefined | null>(null);
  const [bomDataModal, setBomDataModal] = useState(false);
  const onFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.item(0));
  }, []);

  const [realModal, toggleRealModal] = useToggle(false);
  const [oldPs, setOldPs] = useState<ApiModel.ListRecords>();
  const isVerifier = useIsVerifier();

  const { userData } = useStore();
  //  const org = .organization || userData?.organization;

  const org = ps?.org || userData?.organization;

  const options: any[] = [
    {
      label: '产品系统ID',
      dataIndex: 'uuid',
      render: () => <div className="mt-[-10px]">{ps?.uuid || '-'}</div>,
    },
    {
      label: '描述',
      dataIndex: 'inputDesc',
      render: () => <div className="mt-[-10px]">{ps?.description || '-'}</div>,
    },
    {
      label: '操作人',
      dataIndex: 'updateUser',
      render: () => <div className="mt-[-10px]">{ps?.updateUser.name || '-'}</div>,
    },
    {
      label: 'BOM信息',
      dataIndex: 'bom',
      render: () => <ActionBtn action="查看" onClick={() => setBomDataModal(true)} />,
    },
    {
      label: '实景参数列表',
      dataIndex: 'real',
      render: () => <ActionBtn action="查看" onClick={() => toggleRealModal(true)} />,
    },
    {
      label: '产品系统LCA文件',
      dataIndex: 'lca',
      render: () => (
        <LcaActionInfo
          openNewTab={true}
          modelId={ps?.model?.id}
          disableSelectFile={busy}
          modelStatus={ps?.model?.state}
          hiddenUpdate={isVerifier}
          file={file as any}
          onFileChange={onFileChange}
        />
      ),
    },
    {
      label: '组织名称',
      dataIndex: 'name',
      render: () => <div className="mt-[-10px]">{org?.name || '-'}</div>,
    },
    {
      label: '组织编号',
      dataIndex: 'serialNumber',
      render: () => <div className="mt-[-10px]">{org?.serialNumber || '-'}</div>,
    },
  ];

  const data = {
    uuid: ps?.uuid || '-',
    inputDesc: ps?.description || '-',
    updateUser: ps?.updateUser.name || '-',
    name: org?.name || '-',
    serialNumber: org?.serialNumber || '-',
  };

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
    const params = tryParse<any[]>(ps?.model?.paramDetail) || [];
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
    <Modal {...props} line={false} containerClassName=" w-[600px] bf ">
      {isLoading && !ps && <Loading className="min-h-[100px]" />}
      {ps && (
        <div className="flex flex-col gap-5  w-[600px] min-w-[20rem] ml-5 max-h-mc overflow-y-auto mb-5 ">
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
      {realModal && <RealData isShow header={columns} data={tableData} onClose={() => toggleRealModal(false)} />}
      {oldPs && <ViewProductSystem onClose={() => setOldPs(undefined)} ps={oldPs} />}
      {bomDataModal && (
        <ViewBomInfoModal modelBomInfo={ps?.model?.modelBomInfo} onClose={() => setBomDataModal(false)} />
      )}
    </Modal>
  );
}
