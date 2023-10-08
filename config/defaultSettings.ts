import { ProLayoutProps } from '@ant-design/pro-components';
import { ThemeConfig } from 'antd';

export const HEADER_HEIGHT = 56;
export const DefTheme: ThemeConfig = {
  token: {
    // color
    colorPrimary: '#29953A',
    colorPrimaryHover: '#4CAF50',
    colorHighlight: '#29953A',
    colorLink: '#29953A',
    colorLinkHover: '#4CAF50',
    // size
    borderRadius: 4,

    // other
    // boxShadow: 'none',
    // boxShadowSecondary: 'none',
    // boxShadowTertiary: 'none',
  },
};
/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,

  fixSiderbar: true,
  siderWidth: 228,
  colorWeak: false,
  title: false,
  pwa: true,
  iconfontUrl: '',

  colorPrimary: DefTheme.token?.colorPrimary,
  token: {
    // 参见ts声明，demo 见文档，通过token 修改样式
    //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
    colorPrimary: DefTheme.token?.colorPrimary,

    sider: {
      colorTextMenuSelected: DefTheme.token?.colorPrimary,
    },
    header: {
      heightLayoutHeader: HEADER_HEIGHT,
      colorBgScrollHeader: DefTheme.token?.colorPrimary,
      colorBgHeader: DefTheme.token?.colorPrimary,
    },
  },
};
export default Settings;
