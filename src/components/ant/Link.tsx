import { Link } from '@umijs/max';
import { Typography } from 'antd';

export const LinkT = Typography.Link;

export function WrapLink(p: Parameters<typeof Link>['0']) {
  const { reloadDocument, to, type, ...props } = p;
  const isExLink = reloadDocument || (to && typeof to === 'string' && to.startsWith('http')) || to === '#';
  if (isExLink) return <LinkT {...props} href={to as string} />;
  return <Link {...props} to={to} type={type} />;
}
