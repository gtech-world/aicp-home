import WrapProTable, { ProTableColumns } from '@/components/ant/WrapProTable';
import { Btn } from '@/components/common/button';
import { Modal } from '@/components/common/modal';
import { Table } from '@/components/common/table';
import { formatDate } from '@/lib/utils';
import { FC, useEffect, useMemo, useState } from 'react';

const InventoryAddRealDataModal: FC<ApiModel.InventoryAddRealDataModalProps> = ({
  onOpenModal,
  realData,
  tableData,
  realArr,
}) => {
  const [allTableData, setAllTableData] = useState<ApiModel.InventoryRealDataList[]>(tableData);
  const onSubmit = () => {
    const table = document?.getElementById('realDataTable') as HTMLTableElement;
    const rows = table.getElementsByTagName('tr');
    const values: string[][] = [];

    for (let i = 0; i < rows.length; i++) {
      const rowValues = [];
      const inputs = rows[i].getElementsByTagName('input');

      for (let j = 0; j < inputs.length; j++) {
        const inputValue = inputs[j].value;
        rowValues.push(inputValue);
      }
      values.push(rowValues);
    }

    let lcaParamList = [];
    lcaParamList = tableData?.map((e, i) => {
      const newArr = {
        processId: e.context['@id'],
        paramValue: values.slice(2)[i][0] || e.value.toString(),
        paramName: e.name,
        dateTime: formatDate(),
      };
      return newArr;
    });

    const result = {
      lcaParamList,
    };
    typeof onOpenModal === 'function' && onOpenModal();
    typeof realData === 'function' && realData(result);
  };

  useEffect(() => {
    const newTableData = tableData?.map((item, index) => {
      return realArr?.length && realArr[index]?.paramName === item.name
        ? { ...item, inputValue: realArr[index].paramValue }
        : { ...item };
    });
    setAllTableData(newTableData);
  }, [realArr, tableData]);

  type columnsList = ApiModel.InventoryRealDataList;
  const columns = useMemo<ProTableColumns>(
    () => [
      {
        title: '参数名',
        dataIndex: 'name',
        width: '9rem',
        render: (text) => (
          <div className=" flex items-center h-[33px] font-normal leading-[21px] text-[14px] ">{text}</div>
        ),
      },
      {
        title: '过程名称',
        dataIndex: 'name',
        width: '7rem',
        render: (text, record) => (
          <div className="flex items-center  h-[33px] font-normal leading-[21px] text-[14px] ">
            {record.context.name}
          </div>
        ),
      },
      {
        title: '参考值',
        width: '10rem',
        dataIndex: 'value',
        render: (text) => (
          <div className="flex items-center h-[33px] font-normal leading-[21px] text-[14px] ">{text}</div>
        ),
      },
      {
        title: '填入值',
        width: '10rem',
        dataIndex: 'createTime',
        render: (text, record) => (
          <input
            defaultValue={record.inputValue}
            type="number"
            className="font-normal  leading-[21px] text-[14px] w-[10rem] h-[33px] "
          />
        ),
      },
    ],
    [],
  );

  return (
    <Modal
      title="实景数据填报"
      containerClassName={'mx-5 max-w-[640px]'}
      titleClassName={'text-[16px] leading-5 font-bold'}
      onClose={(typeof onOpenModal === 'function' && onOpenModal) || undefined}
      line={true}
      bottomBtn={
        <div className="mx-5 ">
          <div className="flex flex-row justify-between gap-5 ">
            <Btn
              size="large"
              onClick={(typeof onOpenModal === 'function' && onOpenModal) || undefined}
              defStyle="btn-primary-1"
              className="flex-1  font-normal  h-[50px] border-2 text-[18px]"
            >
              取消
            </Btn>
            <Btn size="large" className="flex-1 h-[50px]  font-normal  text-[18px]" onClick={onSubmit}>
              确定
            </Btn>
          </div>
        </div>
      }
    >
      <div className=" w-[640px] max-h-[400px] ">
        <WrapProTable
          scroll={{ y: 330 }}
          columns={columns}
          id="realDataTable"
          dataSource={allTableData || []}
          pagination={false}
          className="h-full !p-0 mx-5 mt-5 "
        />
      </div>
    </Modal>
  );
};

export default InventoryAddRealDataModal;
