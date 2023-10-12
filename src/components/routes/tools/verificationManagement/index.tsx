import WrapPageContainer from '@/components/ant/WrapPageContainer';
import WrapProTable, { ProTableColumns, wrapRenderText } from '@/components/ant/WrapProTable';
import { Btn } from '@/components/common/button';
import { useStore } from '@/components/common/context';
import { VectorIcon } from '@/components/svgr';
import { useVerificationList } from '@/lib/hooks/useDatas';
import _ from 'lodash';
import { useCallback, useMemo, useRef, useState } from 'react';
import AddVerification from './components/AddOrEditVerification';
import ViewVerification from './components/ViewVerification';

export function VerificationManagementList() {
  const { userData } = useStore();
  const [pgNum, setPgNum] = useState(1);
  const [openAddOrEditVerificationModal, setOpenAddOrEditVerificationModal] = useState<boolean>(false);
  const [openViewFileModal, setOpenViewFileModal] = useState<boolean>(false);
  const viewFileRef = useRef<ApiModel.AttachmentFileList[]>([]);
  const editInfoDataRef = useRef<{
    type: ApiModel.VerificationManagementModal['type'];
    recordId?: number;
  }>();

  const onViewFile = (data: any) => {
    viewFileRef.current = data;
    setOpenViewFileModal(true);
  };
  const onOpenModal = useCallback(
    (record?: any) => {
      setOpenAddOrEditVerificationModal(true);
      editInfoDataRef.current = {
        type: _.isEmpty(record) ? 'new' : userData?.role === 'verify' ? 'verify' : 'editor',
        recordId: record.id,
      };
    },
    [userData],
  );
  const columns = useMemo<ProTableColumns>(
    () => [
      {
        title: '验证记录',
        dataIndex: 'name',
        width: 160,
        ellipsis: true,
      },
      {
        title: '验证记录ID',
        dataIndex: 'id',
        width: 160,
        ellipsis: true,
      },
      {
        title: '发起人',
        dataIndex: '_createUserName',
        width: 160,
        ellipsis: true,
      },
      {
        title: '组织机构',
        width: 160,
        ellipsis: true,
        dataIndex: '_organizationName',
      },
      {
        title: '碳足迹批次',
        dataIndex: '_loadName',
        width: 160,
        ellipsis: true,
      },
      {
        title: '碳足迹批次ID',
        dataIndex: 'loadNumber',
        width: 170,
        renderText: wrapRenderText,
      },
      {
        title: '附件',
        width: 160,
        render: (_dom, record) => {
          return (
            <div
              onClick={() => onViewFile(record.attachmentFileList)}
              className="w-[112px] flex flex-row items-center bg-[#F1F1F1] justify-center rounded cursor-pointer"
            >
              <VectorIcon width="14" />
              <div className="ml-2 ">文件夹</div>
            </div>
          );
        },
      },
      {
        title: '最后编辑',
        dataIndex: 'updateTime',
        valueType: 'dateTime',
        width: 170,
      },
      {
        title: '验证人',
        dataIndex: '_verifyUserName',
        width: 160,
        ellipsis: true,
      },
      {
        title: '验证文档',
        width: 130,
        render: (_bom, record) => {
          return record.verifyFileList.length ? (
            <div
              onClick={() => onViewFile(record.verifyFileList)}
              className="w-[112px] flex flex-row items-center bg-[#F1F1F1] justify-center rounded cursor-pointer"
            >
              <VectorIcon width="14" />
              <div className="ml-2 ">文件夹</div>
            </div>
          ) : null;
        },
      },
      {
        title: '验证状态',
        width: 130,
        render: (_dom, record) => <span className="">{record.state ? '已验证' : ''}</span>,
      },
      {
        title: '验证时间',
        dataIndex: 'proofTime',
        valueType: 'dateTime',
        width: 170,
      },
      {
        title: '操作',
        width: 120,
        valueType: 'option',
        render: (_dom, record) => {
          return !record.state
            ? [
                <div key="edit" className="flex justify-between flex-1 text-green-2 break-keep">
                  <div
                    className="flex items-center font-normal justify-center cursor-pointer leading-[27px]"
                    onClick={() => onOpenModal(record)}
                  >
                    编辑
                  </div>
                </div>,
              ]
            : [];
        },
      },
    ],
    [onOpenModal],
  );
  const { data, isLoading, mutate: refresh } = useVerificationList(pgNum);
  const tableSource = useMemo(
    () =>
      (data?.records || []).map((item, i) => ({
        ...item,
        key: 'verify_' + i,
        _createUserName: item.createUser?.name,
        _organizationName: item.organization?.name,
        _loadName: item.inventory?.loadName,
        _verifyUserName: item.verifyUser?.name,
      })),
    [data],
  );

  return (
    <WrapPageContainer
      title="验证管理列表"
      extra={
        userData?.role === 'admin'
          ? [
              <Btn key="key_new_verify" onClick={() => onOpenModal({})}>
                新建验证记录
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
          scroll={{ x: scrollX }}
          pagination={{
            pageSize: 10,
            total: data?.total || 0,
            current: pgNum,
            onChange: (page) => {
              setPgNum(page);
            },
          }}
        />
      </div>
      {openAddOrEditVerificationModal && editInfoDataRef.current && (
        <AddVerification
          type={editInfoDataRef.current.type}
          recordId={editInfoDataRef.current.recordId}
          closeModal={() => {
            setPgNum(1);
            if (pgNum === 1) {
              refresh();
            }
            setOpenAddOrEditVerificationModal(false);
            editInfoDataRef.current = undefined;
          }}
        />
      )}
      {openViewFileModal && (
        <ViewVerification
          fileList={viewFileRef.current}
          closeModal={() => {
            setOpenViewFileModal(false);
          }}
        />
      )}
    </WrapPageContainer>
  );
}

export default VerificationManagementList;
