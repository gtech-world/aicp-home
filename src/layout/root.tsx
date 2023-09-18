import { Outlet } from '@umijs/max';
import App from './_app';

export default () => {
  return (
    <App>
      <Outlet />
    </App>
  );
};
