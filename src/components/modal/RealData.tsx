import { Modal, ModalProps } from '@/components/common/modal';
import { tryParse } from '@/lib/utils';
import _ from 'lodash';
import { useMemo } from 'react';
import WrapProTable from '../ant/WrapProTable';

export function RealData(
  p: ModalProps & { data: any; isShow?: boolean; header?: any; inputData?: ApiModel.LcaParamList[] | string },
) {
  const { data, inputData, isShow, header = ['参数名', '过程名称', '参考值', '输入值'], ...props } = p;
  const tableData = useMemo(() => {
    if (!data) return [];
    const inputMap = inputData
      ? _.mapKeys(
          typeof inputData === 'string' ? tryParse<ApiModel.LcaParamList[]>(inputData) || [] : inputData,
          (item) => item.paramName,
        )
      : ({} as _.Dictionary<ApiModel.LcaParamList>);
    const params = tryParse<any[]>(data) || [];
    const bases = (params[0]?.parameters || []) as any[];

    return bases.map((item) => [item.name, item.context.name, item.value, inputMap[item.name]?.paramValue || '']);
  }, [data, inputData]);

  return (
    <Modal title="实景数据" {...props} chilrenClassName={'mt-0'}>
      <div className="w-[40rem] mo:w-full  mb-5 ">
        <WrapProTable
          scroll={{ y: 440 }}
          columns={header}
          dataSource={isShow ? data : tableData}
          pagination={false}
          rootClassName=""
          className="h-full !p-0 mx-5 mt-5 "
        />
      </div>
    </Modal>
  );
}
