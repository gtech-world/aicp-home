import { Input } from 'antd';
import { useStore } from '../common/context';
import { Fragment } from 'react';
import { Detail } from '@/components/svgr';
export const User = () => {
  const {
    userData: { name, id, organization, role },
  } = useStore();

  const type = role === 'admin' ? '用户' : role === 'verify' && organization.type === 'aicp' ? 'AICP' : '第三方验证人';
  const label = [
    { label: '用户名', name: name },
    { label: '用户UID', name: id },
    { label: '所属组织机构', name: organization.name },
    { label: '组织机构编码', name: organization.serialNumber },
    { label: '组织机构角色类型', name: type },
  ];

  return (
    <>
      <div className="flex flex-wrap bg-[#FFFFFF]">
        <Fragment>
          {label.map((e, i) => {
            return (
              <div className="w-1/3 p-4" key={`user_${i}`}>
                {e.label}
                <div className="mt-2">
                  <Input className=" w-[360px]" value={e.name} disabled />
                </div>
              </div>
            );
          })}
        </Fragment>
        <div className="flex flex-row items-center ml-5">
          <Detail fill="#29953A" className="w-[6.125rem] mb-5" />
          <span className="text-[#BFBFBF] ml-2 mo:text-[11px]">
            请确认用户信息真实、准确。如有组织机构信息更新，请及时联系AICP平台运营管理人员。
          </span>
        </div>
      </div>
    </>
  );
};
export default User;
