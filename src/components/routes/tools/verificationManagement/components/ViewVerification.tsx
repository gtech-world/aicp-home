import { Modal } from '@/components/common/modal';
import { FC, Fragment, useState } from 'react';
import JSZip from 'jszip';
import { useOnError } from '@/components/common/context';
import axios from 'axios';
import { Btn, Button } from '@/components/common/button';

const ViewVerification: FC<ApiModel.ViewVerificationManagementModal> = ({ closeModal, fileList }) => {
  const [loading, setLoading] = useState(false);
  const onError = useOnError();

  const handleDownloadClick = async () => {
    setLoading(true);
    try {
      const zip = new JSZip();
      let folderName = '';

      fileList.forEach((file) => {
        folderName = file.fileName.split('/')[0];
        const getFile = axios.get(file.downloadUrl, { responseType: 'arraybuffer' }).then((res) => res.data);
        zip.file(file.fileName, getFile);
      });
      const content = await zip.generateAsync({ type: 'blob' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(content);
      link.download = `${folderName}.zip`;
      link.click();
      URL.revokeObjectURL(link.href);
    } catch (e) {
      onError('文件下载出错！');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <Modal
        onClose={closeModal}
        title="查看文件夹"
        line={true}
        bottomBtn={
          <Btn
            size="large"
            disabled={loading}
            className="bg-[#29953A] w-full h-[50px] rounded-lg text-[#FFFFFF] "
            onClick={handleDownloadClick}
          >
            下载
          </Btn>
        }
      >
        <div className="px-5 overflow-y-auto  max-h-[260px]">
          {fileList.map((e, i) => {
            const parts = e.fileName.split('/');
            return (
              <div key={`file_${i}`} id="view" className="w-[640px] h-[34px] flex items-center ">
                <span className="ml-[10px] leading-5 text-[16px] font-normal">{parts[parts.length - 1]}</span>
              </div>
            );
          })}
        </div>
      </Modal>
    </Fragment>
  );
};

export default ViewVerification;
