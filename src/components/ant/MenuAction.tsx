import { useT } from '@/lib/hooks/useT';
import { useUser } from '../common/context';
import { useNavigate } from '@umijs/max';
import { useMemo } from 'react';
import { MenuProps } from 'antd';
import { FiLogOut } from 'react-icons/fi';
import HeaderDropdown from './HeaderDropdown';
import { AiOutlineMenu } from 'react-icons/ai';

export function MenuAction() {
  const { t } = useT();
  const { setUser } = useUser();
  const push = useNavigate();
  const menuActionItems: MenuProps['items'] = useMemo(
    () => [
      {
        icon: <FiLogOut />,
        label: t('Log Out'),
        key: '1',
        onClick: () => {
          setUser(undefined);
          push('/');
        },
      },
    ],
    [t],
  );
  return (
    <HeaderDropdown menu={{ items: menuActionItems }}>
      <AiOutlineMenu className="text-2xl text-white cursor-pointer" />
    </HeaderDropdown>
  );
}
export default MenuAction;
