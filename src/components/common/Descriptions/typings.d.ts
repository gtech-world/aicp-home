import type { DescriptionsItemProps as ItemProps } from 'antd/es/descriptions/Item';
import type { DescriptionsProps as DescriptionsCompProps } from 'antd/es/descriptions';
import type { ReactNode } from 'react';

export type DescriptionsItemProps<T = Record<string, any>> = Omit<ItemProps, 'children'> & {
  dataIndex: string;
  show?: boolean; // 是否展示
  render?: (text: any, data: T) => ReactNode;
};

export type DescriptionsProps<T = Record<string, any>> = DescriptionsCompProps & {
  options: DescriptionsItemProps<T>[];
  optionEmptyText?: string | false;
  data: T;
  hideIfEmpty?: boolean; // 是否数据是空的时候隐藏
};
