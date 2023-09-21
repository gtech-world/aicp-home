import { ProTable, ProTableProps, ParamsType } from '@ant-design/pro-components';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import classNames from 'classnames';

export function WrapProTable<
  DataType extends Record<string, any>,
  Params extends ParamsType = ParamsType,
  ValueType = 'text',
>(p: ProTableProps<DataType, Params, ValueType>) {
  const { className, ...other } = p;
  const tableCss = useEmotionCss(({ token }) => ({
    '.ant-pro-card-body': {
      paddingInline: 0,
      paddingBlock: 0,
    },
  }));
  return (
    <ProTable
      search={false}
      options={false}
      rowKey={'key'}
      className={classNames(className, 'p-6', tableCss)}
      {...other}
    />
  );
}

export default WrapProTable;
