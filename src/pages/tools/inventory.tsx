import Inventory from '@/components/routes/tools/inventory';
import { Outlet, useLocation } from '@umijs/max';

export default () => {
  const { pathname } = useLocation();
  console.info('inventoryPage:', pathname);
  if (pathname !== '/main/tools/inventory') return <Outlet />;
  return <Inventory />;
};
