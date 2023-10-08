import { useT } from '@/lib/hooks/useT';
import { useNavigate } from '@umijs/max';
import { MenuProps } from 'antd';
import { useMemo } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiHome, FiLogOut } from 'react-icons/fi';
import { VscAccount } from 'react-icons/vsc';
import { useUser } from '../common/context';
import { Document } from '../svgr';
import HeaderDropdown from './HeaderDropdown';
import { WrapLink } from './Link';

export function MenuAction() {
  const { t } = useT();
  const { user, setUser } = useUser();
  const push = useNavigate();
  const menuActionItems: MenuProps['items'] = useMemo(() => {
    const menus: MenuProps['items'] = [];
    menus.push({
      key: 'home',
      icon: <FiHome />,
      label: <WrapLink to="/">{t('AICP Home')}</WrapLink>,
    });
    user &&
      menus.push({
        key: 'main',
        icon: <VscAccount />,
        label: <WrapLink to="/main/tools">{t('AICP Digital3 Carbon System')}</WrapLink>,
      });
    menus.push({
      key: 'doc',
      icon: <Document />,
      label: (
        <WrapLink to="https://docs.gtech.world/" target="_blank">
          {t('Document')}
        </WrapLink>
      ),
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
