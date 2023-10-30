import AButton from '@/components/common/AButton';
import Descriptions from '@/components/common/Descriptions';
import { Btn } from '@/components/common/button';
import { useStore } from '@/components/common/context';
import { Loading } from '@/components/common/loading';
import { Modal } from '@/components/common/modal';
import { Select2, useSelectState } from '@/components/common/select';
import { VectorIcon } from '@/components/svgr';
import { useInventoryLiteAll, useVerifiers, useVerifyRecord } from '@/lib/hooks/useDatas';
import { useUpFiles } from '@/lib/hooks/useUpFiles';
import { createVerifyRecord, updateVerifyRecord, verifyVerifyRecord } from '@/lib/http';
import { convertArr, shortStr } from '@/lib/utils';
import { DatePicker, Input, InputNumber, Select } from 'antd';
import classNames from 'classnames';
import dayjs from 'dayjs';
import _ from 'lodash';
import { FC, Fragment, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { useSetState } from 'react-use';

const TextDiv = (p: { value?: string }) => {
  return <div className="font-normal leading-[21.79px] text-[14px] text-gray-9">{p.value}</div>;
};

const AddOrEditVerification: FC<ApiModel.VerificationManagementModal> = ({ closeModal, recordId, type = 'new' }) => {
  const FileRef = useRef<HTMLInputElement>(null);
  const { userData } = useStore();
  const { isLoading: loadingVerifyRecode, data: verifyRecord } = useVerifyRecord(recordId);
  const { isLoading: loadingInvetoryLiteAll, data: inventoryLiteAll } = useInventoryLiteAll(
    type === 'new' || type === 'editor',
  );
  const { isLoading: loadingVerifiers, data: verifiers } = useVerifiers(type === 'new' || type === 'editor');
  const isLoading = loadingVerifyRecode || loadingInvetoryLiteAll || loadingVerifiers;
  const [state, setState] = useSetState<{
    name?: string;
    desc?: string;
    loadNumber?: string;
    verifierId?: number;
    files?: FileList;
    verifyState: boolean;
    carbonNum: string;
    functionalUnit?: string;
    evaluationBoundary?: string;
    evaluationBasis?: string;
    evaluationExpireTime?: string;
    verifyName?: number;
    certificateNumber?: string;
  }>({ verifyState: true, carbonNum: '' });
  const [upFiles, upAbort] = useUpFiles();
  useEffect(() => upAbort, []);
  const disableFiles =
    !state.files ||
    state.files.length === 0 ||
    state.files.length > 20 ||
    _.findIndex(
      state.files as unknown as File[],
      (item) => item.size >= 1024 * 1024 * 1024 * 2 || item.name.length >= 128,
    ) >= 0;
  const disableCreate =
    !inventoryLiteAll || !verifiers || !state.name || !state.carbonNum || !state.verifyName || disableFiles;
  const [busy, setBusy] = useState(false);
  const onCreate = () => {
    if (disableCreate || busy) return;
    setBusy(true);
    upFiles(state.files as any).then((ids) =>
      createVerifyRecord({
        name: state.name as string,
        loadNumber: state.carbonNum || verifyRecord.loadNumber,
        description: state.desc || '',
        fileList: ids,
        verifyUserId: state.verifyName || verifyRecord?.verifyUser?.id,
      })
        .then(() => closeModal(true))
        .catch(console.error)
        .finally(() => {
          setBusy(false);
        }),
    );
  };

  const disableUpdate =
    !verifyRecord ||
    !inventoryLiteAll ||
    !verifiers ||
    ((state.name || verifyRecord.name) === verifyRecord.name &&
      (state.desc || verifyRecord.description) === verifyRecord.description &&
      disableFiles);
  const doUpdate = () => {
    if (disableUpdate || busy) return;
    let task: Promise<any>;
    setBusy(true);
    if (state.files) {
      task = upFiles(state.files).then((ids) =>
        updateVerifyRecord(verifyRecord.id, {
          name: state.name || verifyRecord.name,
          loadNumber: state.carbonNum || verifyRecord.loadNumber,
          description: state.desc || verifyRecord.description,
          fileList: ids,
          verifyUserId: state.verifyName || verifyRecord?.verifyUser?.id,
        }),
      );
    } else {
      task = updateVerifyRecord(verifyRecord.id, {
        name: state.name,
        loadNumber: state.carbonNum || verifyRecord.loadNumber,
        description: state.desc,
        verifyUserId: state.verifyName || verifyRecord?.verifyUser?.id,
      });
    }
    task
      .then(() => closeModal(true))
      .catch(console.error)
      .finally(() => {
        setBusy(false);
      });
  };
  const disableVerify =
    !verifyRecord ||
    disableFiles ||
    !state.functionalUnit ||
    !state.evaluationBoundary ||
    !state.evaluationBasis ||
    !state.evaluationExpireTime;
  const doVerify = () => {
    if (disableVerify || !state.files || busy) return;
    setBusy(true);
    upFiles(state.files)
      .then((ids) =>
        verifyVerifyRecord(verifyRecord.id, {
          fileList: ids,
          state: true,
          functionalUnit: state.functionalUnit,
          evaluationBoundary: state.evaluationBoundary,
          evaluationBasis: state.evaluationBasis,
          certificateNumber: state.certificateNumber,
          evaluationExpireTime: state.evaluationExpireTime + ' 00:00:00',
        }),
      )
      .then(() => closeModal(true))
      .catch(console.error)
      .finally(() => {
        setBusy(false);
      });
  };
  const otherAtt = { directory: '', webkitdirectory: '' };
  const inputClassName = 'w-full  shrink-0 px-5 border border-[#DDDDDD]  h-[40px]  bg-[#F8F8F8] rounded-lg';
  const isVerify = type === 'verify';
  const folderName = useMemo(() => {
    if (disableFiles || !state.files) return '验证文件';
    const name = state.files.item(0)?.webkitRelativePath.split('/')[0] || '验证文件';
    return shortStr(name, 10, 10);
  }, [state.files, disableFiles]);

  const dealFiles = (event: any) => {
    const selectedFiles = event.target.files;
    const filteredFiles: any = Array.from(selectedFiles).filter((file: any) => {
      return !file.name.startsWith('.');
    });
    const dataTransfer = new DataTransfer();
    filteredFiles.forEach((file: File) => {
      dataTransfer.items.add(file);
    });
    const fileList = dataTransfer.files;

    setState({ files: fileList });
  };

  const renderInputVerifyFiles = {
    label: isVerify ? '验证文档' : '附件',
    dataIndex: 'verifyDoc',
    render: () => (
      <Fragment>
        <div className="flex flex-row items-center gap-2 mt-[-15px]">
          <input {...otherAtt} ref={FileRef} type="file" hidden onChange={(e) => dealFiles(e)} />
          <VectorIcon />
          <TextDiv value={folderName} />
          <AButton onClick={(e) => !busy && FileRef.current?.click()} busy={busy} btnText={' 选择文件夹'} />
        </div>
      </Fragment>
    ),
  };

  const data = {
    verifyRecord: verifyRecord?.name,
    carbonNum: verifyRecord?.loadNumber,
    description: state.desc || verifyRecord?.description,
    verifyName: 'verifyName',
    createName: userData?.name,
    organizationName: userData?.organization?.name,
  };

  const verifyData = {
    verifyName: verifyRecord?.name,
    verifyId: verifyRecord?.id,
    createUser: verifyRecord?.createUser?.name,
    organizationName: verifyRecord?.organization?.name,
    description: verifyRecord?.description,
    loadName: verifyRecord?.inventory?.loadName,
    loadNumber: verifyRecord?.loadNumber,
    verifyUser: verifyRecord?.verifyUser?.name,
    verifyDoc: '',
    functionalUnit: state.functionalUnit || verifyRecord?.functionalUnit,
    evaluationBoundary: state.evaluationBoundary || verifyRecord?.evaluationBoundary,
    evaluationBasis: state.evaluationBasis || verifyRecord?.evaluationBasis,
    evaluationExpireTime: state.evaluationExpireTime || verifyRecord?.evaluationExpireTime,
  };

  const divText = (data: string) => {
    return <div className=" mt-[-15px]">{data}</div>;
  };

  const verifyOptions: any[] = [
    {
      label: '验证记录',
      dataIndex: 'verifyName',
      render: () => divText(verifyRecord?.name),
    },
    {
      label: '验证记录ID',
      dataIndex: 'verifyId',
      render: () => divText(verifyRecord?.id),
    },
    {
      label: '发起人',
      dataIndex: 'createUser',
      render: () => divText(verifyRecord?.createUser?.name),
    },
    {
      label: '组织机构',
      dataIndex: 'organizationName',
      render: () => divText(verifyRecord?.organization?.name),
    },
    {
      label: '描述',
      dataIndex: 'description',
      render: () => divText(verifyRecord?.description),
    },
    {
      label: '碳足迹批次',
      dataIndex: 'loadName',
      render: () => divText(verifyRecord?.inventory?.loadName),
    },
    {
      label: '碳足迹批次ID',
      dataIndex: 'loadNumber',
      render: () => divText(verifyRecord?.loadNumber),
    },
    {
      label: '验证人',
      dataIndex: 'verifyUser',
      render: () => divText(verifyRecord?.verifyUser?.name),
    },
    renderInputVerifyFiles,
    {
      label: '证书编号',
      dataIndex: 'certificateNumber',
      render: () => (
        <Input
          style={{ marginTop: '-15px' }}
          value={state.certificateNumber || verifyRecord?.certificateNumber}
          onChange={(e) => setState({ certificateNumber: e.target.value })}
          maxLength={30}
          className={inputClassName}
        />
      ),
    },
    {
      label: '功能单位',
      dataIndex: 'functionalUnit',
      render: () => (
        <Input
          style={{ marginTop: '-15px' }}
          value={state.functionalUnit || verifyRecord?.functionalUnit}
          onChange={(e) => setState({ functionalUnit: e.target.value })}
          maxLength={30}
          className={inputClassName}
        />
      ),
    },
    {
      label: '评价边界',
      dataIndex: 'evaluationBoundary',
      render: () => (
        <Input
          style={{ marginTop: '-15px' }}
          value={state.evaluationBoundary || verifyRecord?.evaluationBoundary}
          onChange={(e) => setState({ evaluationBoundary: e.target.value })}
          maxLength={30}
          className={inputClassName}
        />
      ),
    },
    {
      label: '评价依据',
      dataIndex: 'evaluationBasis',
      render: () => (
        <Input
          style={{ marginTop: '-15px' }}
          value={state.evaluationBasis || verifyRecord?.evaluationBasis}
          onChange={(e) => setState({ evaluationBasis: e.target.value })}
          maxLength={30}
          className={inputClassName}
        />
      ),
    },
    {
      label: '评价有效期',
      dataIndex: 'evaluationExpireTime',
      render: () => (
        <DatePicker
          style={{ marginTop: '-15px' }}
          defaultValue={
            state.evaluationExpireTime ||
            (verifyRecord?.evaluationExpireTime &&
              dayjs(state.evaluationExpireTime || verifyRecord?.evaluationExpireTime))
          }
          onChange={(e, dateString) => {
            setState({ evaluationExpireTime: dateString });
          }}
          className={inputClassName}
        />
      ),
    },
  ];

  const options: any[] = [
    {
      label: '验证记录',
      dataIndex: 'verifyRecord',
      render: () => (
        <Input
          value={state.name || verifyRecord?.name}
          onChange={(e) => setState({ name: e.target.value })}
          maxLength={30}
          style={{ marginTop: '-15px' }}
          className={inputClassName}
        />
      ),
    },
    {
      label: '碳足迹批次',
      dataIndex: 'carbonNum',
      render: () => (
        <Select
          value={state.carbonNum || verifyRecord?.loadNumber}
          style={{
            height: '40px',
            width: '100%',
            marginTop: '-15px',
          }}
          onChange={(e) => setState({ carbonNum: e })}
          options={convertArr('loadName', 'loadNumber', inventoryLiteAll)}
        />
      ),
    },
    {
      label: '描述',
      dataIndex: 'description',
      render: () => (
        <Input
          style={{ marginTop: '-15px' }}
          value={state.desc || verifyRecord?.description}
          onChange={(e) => setState({ desc: e.target.value })}
          maxLength={100}
          className={inputClassName}
        />
      ),
    },
    {
      label: '选择验证人',
      dataIndex: 'verifyName',
      render: () => (
        <Select
          value={state.verifyName || verifyRecord?.verifyUser?.id}
          style={{
            marginTop: '-15px',
            height: '40px',
            borderColor: '#DDDDDD',
            backgroundColor: '#F8F8F8',
            width: '100%',
          }}
          onChange={(e) => setState({ verifyName: e })}
          options={convertArr('name', 'id', verifiers)}
        />
      ),
    },
    {
      label: '发起人',
      dataIndex: 'createName',
      render: () => <div className=" mt-[-15px]">{userData?.name}</div>,
    },
    {
      label: '组织机构',
      dataIndex: 'organizationName',
      render: () => <div className=" mt-[-15px]">{userData?.organization?.name}</div>,
    },
    renderInputVerifyFiles,
  ];

  return (
    <Fragment>
      <Modal
        className="rounded-lg"
        containerClassName={'mx-5 max-w-[640px]'}
        titleClassName={'text-[16px] leading-5 font-bold'}
        title={type === 'new' ? '新建验证记录' : '编辑验证记录'}
        line={true}
        bottomBtn={
          !isLoading && (
            <div className={`flex flex-row justify-between gap-5  w-full `}>
              {type === 'new' && (
                <>
                  <Btn size="large" defStyle="btn-primary-1" className="flex-1" onClick={() => closeModal(false)}>
                    取消
                  </Btn>
                  <Btn
                    size="large"
                    busy={busy}
                    disabled={disableCreate}
                    defStyle="btn-primary"
                    className="flex-1"
                    onClick={onCreate}
                  >
                    确定
                  </Btn>
                </>
              )}
              {type === 'editor' && (
                <Btn
                  busy={busy}
                  size="large"
                  type="primary"
                  disabled={disableUpdate}
                  className="flex-1"
                  onClick={doUpdate}
                >
                  提交更新
                </Btn>
              )}
              {type === 'verify' && (
                <Btn
                  busy={busy}
                  size="large"
                  type="primary"
                  disabled={disableVerify}
                  className="flex-1"
                  onClick={doVerify}
                >
                  提交验证
                </Btn>
              )}
            </div>
          )
        }
        onClose={() => closeModal(false)}
      >
        <div className="flex flex-col py-[1px] gap-5 px-5 w-[640px] min-h-[6.25rem] max-h-mc overflow-y-auto">
          {isLoading && <Loading />}
          {!isLoading && (
            <>
              {isVerify ? (
                <>
                  <Descriptions
                    options={verifyOptions}
                    data={verifyData}
                    optionEmptyText="-"
                    layout="vertical"
                    column={1}
                    contentStyle={{ color: '#999999', fontWeight: '400', fontSize: '14px' }}
                    labelStyle={{ color: '#000000', fontWeight: '400', fontSize: '14px', marginTop: '-5px' }}
                  />
                </>
              ) : (
                <>
                  <Descriptions
                    options={options}
                    data={data}
                    optionEmptyText="-"
                    layout="vertical"
                    column={1}
                    contentStyle={{ color: '#999999', fontWeight: '400', fontSize: '14px' }}
                    labelStyle={{ color: '#000000', fontWeight: '400', fontSize: '15px', marginTop: '-5px' }}
                  />
                </>
              )}
            </>
          )}
        </div>
      </Modal>
    </Fragment>
  );
};

export default AddOrEditVerification;
