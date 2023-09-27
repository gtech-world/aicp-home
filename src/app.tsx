import { UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig, RuntimeConfig } from '@umijs/max';
import { Link, history } from '@umijs/max';
import { ReactNode } from 'react';
import defaultSettings from '../config/defaultSettings';
import MenuAction from './components/ant/MenuAction';
import { useStore } from './components/common/context';
import { Aicp, Co2, Digital3 } from './components/svgr';
import App from './layout/_app';
import { UserData } from './lib/@types/type';
import { errorConfig } from './requestErrorConfig';

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: UserData;
  loading?: boolean;
  fetchUserInfo?: () => Promise<UserData | undefined>;
}> {
  const fetchUserInfo = async () => {
    return useStore.getState().userData;
  };
  return {
    fetchUserInfo,
    currentUser: useStore.getState().userData,
    settings: defaultSettings as Partial<LayoutSettings>,
  };
}

const menuicons: { [k: string]: ReactNode } = {
  '/main/tools': <UnorderedListOutlined rev />,
  '/main/tags': <Co2 />,
  '/user': <UserOutlined rev />,
};

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    actionsRender: () => [<MenuAction key="menu" />],
    logo: (
      <div className="flex gap-3 items-end text-white">
        <Aicp height="24" />
        <Digital3 height="16" />
      </div>
    ),
    footerRender: false,
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

/**
 * locale
 *
 * react-intl
 *
 */

export const locale: RuntimeConfig['locale'] = {
  textComponent: 'span',
  onError: () => {
    console.log('error handler...');
  },
  // locale: string
  // formats: CustomFormats
  // messages: Record<string, string> | Record<string, MessageFormatElement[]>
  // defaultLocale: string
  formats: {},
  defaultFormats: {
    date: {
      long: { dateStyle: 'long' },
    },
  },
  // timeZone?: string
  // textComponent?: React.ComponentType | keyof React.ReactHTML
  // wrapRichTextChunksInFragment?: boolean
  // defaultRichTextElements?: Record<string, FormatXMLElementFn<React.ReactNode>>
  // onError(err: string): void
};
