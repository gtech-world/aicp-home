import { Btn } from '@/components/common/button';
import { Modal } from '@/components/common/modal';
import { getAddRealDataList, getProductSystemAllList, uploadResult } from '@/lib/http';
import { convertArr, formatDate } from '@/lib/utils';
import { FC, Fragment, useEffect, useMemo, useState } from 'react';
import InventoryAddRealDataModal from './inventoryAddRealDataModal';
import Descriptions from '@/components/common/Descriptions';
import { Input, Select } from 'antd';

type formDataType = { [key: string]: string };
type realDataType = Pick<ApiModel.uploadResult, 'lcaParamList'>;

const init = {
  loadName: '',
  productId: '',
};
const InventoryResultModal: FC<ApiModel.InventoryResultModalProps> = ({ openResultModal, getList }) => {
  const [openAddInfoModal, setOpenAddInfoModal] = useState<boolean>(false);
  const [productList, setProduceList] = useState<ApiModel.InventoryProductSystemList[]>([{ name: '', id: '' }]);
  const [realData, setRealData] = useState<Partial<realDataType>>({ lcaParamList: [] });
  const [tableData, setTableData] = useState<ApiModel.InventoryRealDataList[]>([]);
  const [formData, setFormData] = useState<formDataType>(init);
  const [loading, setLoading] = useState<boolean>(true);
  const getProductSystemList = () => {
    getProductSystemAllList()
      .then((res) => {
        setProduceList(res || { name: '', id: '' });
        setLoading(false);
      })
      .catch((e) => {})
      .finally();
  };

  const onCalculate = () => {
    const { loadName, productId } = formData;
    if (!loadName || !productId) return;

    let lcaParamList = tableData?.map((e) => {
      return {
        processId: e.context['@id'],
        paramValue: e.value.toString(),
        paramName: e.name,
        dateTime: formatDate(),
      };
    });

    let data = realData.lcaParamList?.length
      ? realData
      : { lcaParamList: lcaParamList.length ? lcaParamList : undefined };
    const result = { ...data, loadName, productId };
    uploadResult(result)
      .then((res) => {
        typeof getList === 'function' && getList();
      })
      .catch((e) => {})
      .finally(() => {
        typeof openResultModal === 'function' && openResultModal();
      });
  };

  useEffect(() => {
    getProductSystemList();
  }, []);

  const onAddInfo = () => {
    if (!formData.productId) {
      return;
    }
    setOpenAddInfoModal(true);
  };

  const handleChange = (event: any, field: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: event,
    }));
  };

  const getRealDataList = async () => {
    getAddRealDataList(formData.productId)
      .then((res) => {
        const newData = JSON.parse(res.paramDetail)[0] || [];
        setTableData(JSON.stringify(newData) === '{}' || !newData?.parameters ? [] : newData?.parameters);
      })
      .catch((e) => {})
      .finally();
  };

  useEffect(() => {
    if (formData.productId) {
      getRealDataList();
    }
  }, [formData.productId]);

  const data = {
    loadName: '',
    productId: '',
    realDataInput: '',
  };

  const options: any[] = [
    {
      label: '碳足迹批次',
      dataIndex: 'loadName',
      render: () => (
        <Input
          value={formData.loadName}
          onChange={(e) => handleChange(e.target.value, 'loadName')}
          id="loadName"
          name="loadName"
          maxLength={30}
          className="w-full mb-[20px] mt-[10px] px-5 border border-[#DDDDDD]  h-[40px]  bg-[#F8F8F8] rounded-lg"
        />
      ),
    },
    {
      label: '产品系统',
      dataIndex: 'productId',
      render: () => (
        <Select
          value={formData.productId}
          style={{
            height: '40px',
            borderColor: '#DDDDDD',
            backgroundColor: '#F8F8F8',
            width: '100%',
          }}
          onChange={(e) => handleChange(e, 'productId')}
          options={convertArr('name', 'id', productList)}
        />
      ),
    },
    {
      label: '实景数据填报',
      dataIndex: 'realDataInput',
      render: () => (
        <div
          onClick={() => onAddInfo()}
          className=" flex cursor-pointer rounded-[4px] leading-4 text-[16px] mt-[10px] bg-[#F1F1F1] w-[84px] h-[24px]  text-center items-center justify-center "
        >
          前往填写
        </div>
      ),
    },
  ];

  return !loading ? (
    <Fragment>
      <Modal
        className="rounded-lg"
        containerClassName={'mx-5 w-[640px]'}
        titleClassName={'text-[20px] leading-5 font-bold'}
        title={'新建碳足迹结果'}
        onClose={openResultModal}
        line={true}
        bottomBtn={
          <div className="flex flex-row justify-between gap-5 ">
            <Btn
              size="large"
              onClick={openResultModal}
              defStyle="btn-primary-1"
              className="flex-1  font-normal  h-[50px] border-2 text-[18px]"
            >
              取消
            </Btn>
            <Btn
              size="large"
              className="flex-1 h-[50px]  font-normal  text-[18px]"
              onClick={onCalculate}
              disabled={!formData.productId || !formData.loadName}
            >
              计算碳结果
            </Btn>
          </div>
        }
      >
        <div className="mx-5 w-[640px] ">
          <Descriptions
            size="small"
            options={options}
            data={data}
            optionEmptyText="-"
            layout="vertical"
            column={1}
            contentStyle={{ color: '#999999', fontWeight: '400' }}
            labelStyle={{ color: '#000000', fontWeight: '400' }}
          />
        </div>
      </Modal>
      {openAddInfoModal && (
        <InventoryAddRealDataModal
          realData={setRealData}
          tableData={tableData}
          realArr={realData.lcaParamList}
          onOpenModal={() => setOpenAddInfoModal(false)}
        />
      )}
    </Fragment>
  ) : null;
};

export default InventoryResultModal;
