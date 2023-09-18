import { CarbonLayout } from '@/components/common/carbonLayout';
import { Outlet } from '@umijs/max';

export default () => {
  return <CarbonLayout className="bg-gray-16" children={<Outlet />} />;
};
