import { ToolsLayout } from '@/components/common/toolsLayout';
import { Outlet } from '@umijs/max';

export default () => (
  <ToolsLayout>
    <Outlet />
  </ToolsLayout>
);
