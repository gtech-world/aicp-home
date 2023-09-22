import { PageContainer, PageContainerProps } from '@ant-design/pro-components';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import classNames from 'classnames';

export function WrapPageContainer(p: PageContainerProps) {
  const { className, ...props } = p;
  const pageCss = useEmotionCss(({ token }) => ({
    '.ant-page-header': {
      padding: '1rem 1.5rem',
      backgroundColor: token.colorBgBase,
      '.ant-breadcrumb': {
        fontSize: '.875rem',
        marginBottom: '0.5rem',
      },
      '.ant-page-header-heading-title': {
        fontSize: '1.25rem',
      },
    },
    '.ant-pro-grid-content': {
      padding: '1.5rem',
      backgroundColor: 'transparent',
      '.ant-pro-page-container-children-content': {
        padding: 0,
        paddingBlock: '0 !important',
      },
      '.ant-pro-page-container-children-container': {
        paddingBlock: '0 !important',
        paddingInline: '0 !important',
      },
    },
  }));
  return <PageContainer className={classNames(className, pageCss)} {...props} />;
}

export default WrapPageContainer;
