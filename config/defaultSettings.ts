import { ProLayoutProps } from '@ant-design/pro-components';

const Colors = {
  primary: '#29953A',
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
  title: '',
  pwa: true,
  iconfontUrl: '',
  colorPrimary: Colors.primary,
  token: {
    // 参见ts声明，demo 见文档，通过token 修改样式
    //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
    colorPrimary: Colors.primary,
    sider: {
      colorTextMenuSelected: Colors.primary,
    },
    header: {
      colorBgHeader: Colors.primary,
    },
  },
};
export default Settings;
