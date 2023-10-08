import { useT } from '@/lib/hooks/useT';
import { useUser } from '../common/context';
import { useNavigate } from '@umijs/max';
import { useMemo } from 'react';
import { MenuProps } from 'antd';
import { FiHome, FiLogOut } from 'react-icons/fi';
import HeaderDropdown from './HeaderDropdown';
import { AiOutlineMenu } from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';
import { Document } from '../svgr';
import { Link } from 'react-router-dom';

export function MenuAction() {
  const { t } = useT();
  const { user, setUser } = useUser();
  const push = useNavigate();
  const menuActionItems: MenuProps['items'] = useMemo(() => {
    const menus: MenuProps['items'] = [];
    menus.push({
      key: 'home',
      icon: <FiHome />,
      label: <Link to="/">{t('AICP Home')}</Link>,
    });
    user &&
      menus.push({
        key: 'main',
        icon: <VscAccount />,
        label: <Link to="/main">{t('AICP Digital3 Carbon System')}</Link>,
      });
    menus.push({
      key: 'doc',
      icon: <Document />,
      label: t('Document'),
      onClick: () => {
        open('https://docs.gtech.world/', '_blank');
      },
    });
    user &&
      menus.push({
        icon: <FiLogOut />,
        label: t('Log Out'),
        key: '1',
        onClick: () => {
          setUser(undefined);
          push('/');
        },
      });
    return menus;
  }, [t, user]);
  return (
    <HeaderDropdown menu={{ items: menuActionItems }} placement="bottomRight" trigger={['click']}>
      <AiOutlineMenu className="text-2xl cursor-pointer" />
    </HeaderDropdown>
  );
}
export default MenuAction;
