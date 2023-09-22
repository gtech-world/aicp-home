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
    '.ant-table-container': {
      borderStartStartRadius: '0 !important',
      borderStartEndRadius: '0 !important',
    },
    '.ant-pro-card-body': {
      paddingInline: 0,
      paddingBlock: 0,
    },
    '.ant-table-wrapper .ant-table-container table>thead>tr:first-child >*:first-child': {
      borderStartStartRadius: '0 !important',
    },
    '.ant-table-wrapper .ant-table-container table>thead>tr:first-child >*:last-child': {
      borderStartEndRadius: '0 !important',
    },
    // '.ant-table-wrapper .ant-table.ant-table-middle tfoot>tr>th, .ant-table-wrapper .ant-table.ant-table-middle tfoot>tr>td':
    //   {
    //     padding: '1rem 1rem !important',
    //   },

    // pagination
    '.ant-pagination-item, .ant-pagination-prev, .ant-pagination-next': {
      borderRadius: '2px !important',
      minWidth: '30px !important',
      height: '30px !important',
      lineHeight: '28px !important',
    },
    '.ant-pagination-total-text': {
      lineHeight: '30px !important',
      visibility: 'hidden',
    },
  }));
  return (
    <ProTable
      bordered
      search={false}
      options={false}
      rowKey={'key'}
      className={classNames(className, 'p-6', tableCss)}
      {...other}
    />
  );
}

export default WrapProTable;
