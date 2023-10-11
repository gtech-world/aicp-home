import { Input } from 'antd';
import { useStore } from '../common/context';
import { Fragment } from 'react';
import { Detail } from '@/components/svgr';
export const User = () => {
  const { userData } = useStore();
  const { name, id, organization, role } = userData || {};

  const type = role === 'admin' ? '用户' : role === 'verify' && organization?.type === 'aicp' ? 'AICP' : '第三方验证人';
  const label = [
    { label: '用户名', name: name },
    { label: '用户UID', name: id },
    { label: '所属组织机构', name: organization?.name || '-' },
    { label: '组织机构编码', name: organization?.serialNumber || 'N/A' },
    { label: '组织机构角色类型', name: type },
  ];

  return (
    <Fragment>
      <div className="  bg-[#FFFFFF] ">
        <div className="text-[#000000D9] leading-6 text-[16px] font-semibold  items-center p-5">用户管理</div>
        <div className=" border-b-[1.5px]"></div>
        <div className="flex flex-wrap ">
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
          <div className="flex flex-row items-center mb-2 ml-5">
            <Detail fill="#29953A" className="w-[6.125rem] mb-5" />
            <span className="text-[#BFBFBF] ml-2 mo:text-[11px]">
              请确认用户信息真实、准确。如有组织机构信息更新，请及时联系AICP平台运营管理人员。
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default User;
