import Footer from '@/components/Footer';
import { MenuOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';
import { history, useNavigate } from '@umijs/max';
import { ReactNode, useMemo } from 'react';
import defaultSettings from '../config/defaultSettings';
import { Aicp, Co2, Digital3 } from './components/svgr';
import App from './layout/_app';
import { errorConfig } from './requestErrorConfig';
import HeaderDropdown from './components/HeaderDropdown';
import { MenuProps } from 'antd/es/menu';
import { FiLogOut } from 'react-icons/fi';
import { useStore, useUser } from './components/common/context';
import { useT } from './lib/hooks/useT';
const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/login';

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    return undefined;
  };
  // 如果不是登录页面，执行
  const { location } = history;
  if (location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: defaultSettings as Partial<LayoutSettings>,
    };
  }
  return {
    fetchUserInfo,
    settings: defaultSettings as Partial<LayoutSettings>,
  };
}

function MenuAction() {
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
      <MenuOutlined className="text-2xl text-white" />
    </HeaderDropdown>
  );
}

const menuicons: { [k: string]: ReactNode } = {
  '/main/tools': <UnorderedListOutlined />,
  '/main/tags': <Co2 />,
  '/user': <UserOutlined />,
};
// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    // actionsRender: () => [<Question key="doc" />, <SelectLang key="SelectLang" />],
    actionsRender: () => [<MenuAction key="menu" />],
    logo: (
      <div className="flex gap-3 items-end text-white">
        <Aicp height="24" />
        <Digital3 height="16" />
      </div>
    ),
    footerRender: () => <Footer />,
    onPageChange: () => {},
    layoutBgImgList: [],
    links: [],
    menuDataRender: (menuData) => {
      menuData.forEach((item) => {
        item.path && (item.icon = menuicons[item.path]);
      });
      return menuData;
    },
    menuHeaderRender: undefined,
    childrenRender: (children) => {
      if (!useStore.getState().userData) {
        history.push('/login');
        return null;
      }
      return <App>{children}</App>;
    },
    ...initialState?.settings,
  };
};

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request = {
  ...errorConfig,
};
