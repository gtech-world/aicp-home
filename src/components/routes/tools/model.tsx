import WrapPageContainer from '@/components/ant/WrapPageContainer';
import { ProTableColumns, WrapProTable, wrapRenderText } from '@/components/ant/WrapProTable';
import { Btn } from '@/components/common/button';
import { Loading } from '@/components/common/loading';
import { Modal } from '@/components/common/modal';
import { Table } from '@/components/common/table';
import { EditorProductSystem } from '@/components/modal/EditorProductSystem';
import { NewProductSystem } from '@/components/modal/NewProductSystem';
import { useProductList } from '@/lib/hooks/useDatas';
import { useUnVerifier } from '@/lib/hooks/useUser';
import { useMemo, useState } from 'react';

export function Model() {
  const [viewReal, setViewReal] = useState<any>(null);
  const [editorProductSystem, setEditorProductSystem] = useState<any>();
  const [opResult, setOpResult] = useState<any>(null);
  const [createProductView, setCreateProductView] = useState<boolean>(false);
  const [pgNum, setPgNum] = useState(1);
  const { data, isLoading, mutate: refresh } = useProductList(pgNum, 10000);
  const tableSource = useMemo<Record<string, any>[]>(
    () => (data?.records || []).map((item, i) => ({ ...item, key: 'pl' + i, optName: item.updateUser.name })),
    [data],
  );
  const realColumns = useMemo(
    () => [
      {
        title: '实景输入项',
        dataIndex: 'context',
        width: '20%',
      },
      {
        title: '过程名称',
        dataIndex: 'parameter',
        width: '30%',
      },
      {
        title: '参考值',
        dataIndex: 'amount',
        width: '20%',
      },
      {
        title: '不确定性',
        dataIndex: 'uncertainty',
        emptyText: '-',
        width: '30%',
      },
    ],
    [],
  );

  const unVerifier = useUnVerifier();

  const onSuccess = () => {
    setPgNum(1);
    if (pgNum === 1) refresh();
  };

  const columns = useMemo<ProTableColumns>(
    () => [
      {
        title: '产品系统',
        dataIndex: 'name',
        ellipsis: true,
        width: 200,
      },
      {
        title: '产品系统ID',
        dataIndex: 'uuid',
        width: 170,
        renderText: wrapRenderText,
      },
      {
        title: '操作人',
        dataIndex: 'optName',
        width: 100,
      },
      {
        title: '描述',
        dataIndex: 'description',
        ellipsis: true,
        width: 200,
      },
      {
        title: '上传时间',
        dataIndex: 'createTime',
        valueType: 'dateTime',
        width: 170,
      },
      {
        title: '操作',
        width: 100,
        valueType: 'option',
        render: (_dom, entity) => [
          <div
            key={'key_look'}
            className="text-green-2 cursor-pointer"
            onClick={() => {
              setEditorProductSystem(entity);
            }}
          >
            查看
          </div>,
        ],
      },
    ],
    [],
  );

  return (
    <WrapPageContainer
      title="我的产品系统"
      extra={
        unVerifier
          ? [
              <Btn key="key_new_ps" onClick={() => setCreateProductView(true)}>
                新建产品系统
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
            onChange: (page) => {
              setPgNum(page);
            },
          }}
        />
      </div>
      {!!viewReal && (
        <Modal title={viewReal.modelName + '模型中的实景输入项'} onClose={() => setViewReal(null)}>
          <div className="flex w-[60rem] min-h-[16rem] flex-col pb-2">
            <ul className="flex mb-1">
              {realColumns.map((v: any, i: number) => {
                return (
                  <li key={`columns${i}`} className="px-3 text-lg font-bold" style={{ width: v.width }}>
                    {v.title}
                  </li>
                );
              })}
            </ul>
            <div className="max-h-[15rem] min-h-[5rem] overflow-y-auto">
              <Table size="big" hiddenHeader={true} columns={realColumns} data={viewReal.paramDetail} />
            </div>
          </div>
        </Modal>
      )}
      {opResult && (
        <Modal title={opResult?.title || '操作'} onClose={() => setOpResult(null)}>
          <div className="pb-2 text-center">{opResult.loading ? <Loading /> : <span>{opResult.resultText}</span>}</div>
        </Modal>
      )}
      {createProductView && (
        <NewProductSystem onClose={() => setCreateProductView(false)} onSuccess={() => onSuccess()} />
      )}
      {editorProductSystem && (
        <EditorProductSystem
          psId={editorProductSystem.id}
          title={editorProductSystem.name}
          onClose={() => setEditorProductSystem(undefined)}
          onSuccess={() => onSuccess()}
        />
      )}
    </WrapPageContainer>
  );
}

export default Model;
