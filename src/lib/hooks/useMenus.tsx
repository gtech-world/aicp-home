import { useIsMobile, useUser } from '@/components/common/context';
import { MenuItem } from '@/components/common/poper';
import { CARBON_PAGES } from '@/components/const';
import { handleCarbonStr } from '@/lib/utils';
import { useLocation, useNavigate } from '@umijs/max';
import { useMemo } from 'react';
import { FiHome, FiLogIn, FiLogOut } from 'react-icons/fi';
import { VscAccount } from 'react-icons/vsc';
import { useT } from './useT';

export function useMenus(data: any[] = []) {
  const isMobile = useIsMobile();
  const { user, setUser } = useUser();
  const { pathname } = useLocation();
  const push = useNavigate();
  const { t, locale } = useT();
  const lng = locale;
  return useMemo(() => {
    const menus: MenuItem[] = [];
    menus.push({ icon: <FiHome />, text: t('AICP Home'), to: '/' });
    // menus.push({
    //   icon: <FiSearch />,
    //   text: t('AICP Open Query'),
    //   to: '/openquery',
    // });
    if (user && !data.find((item) => item.to === pathname)) {
      menus.push({
        icon: <VscAccount />,
        text: handleCarbonStr(t('AICP Digital3 Carbon System')),
        to: CARBON_PAGES[0].to,
      });
    }
    if (isMobile && user) {
      data
        .map<MenuItem>((item) => ({
          icon: <item.icon />,
          text: t(item.txt),
          to: item.to,
          selected: pathname === item.to,
        }))
        .forEach((item) => menus.push(item));
    }
    menus.push({
      icon: user ? <FiLogOut /> : <FiLogIn />,
      text: user ? t('Log Out') : t('Log In'),
      to: user ? undefined : '/login',
      onClick: () => {
        push('/');
        setUser(undefined);
      },
    });
    return menus;
  }, [user, isMobile, pathname, t, lng]);
}
