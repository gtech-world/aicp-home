import { useIntl } from '@umijs/max';

export function useT() {
  const intl = useIntl();
  const t = (id: string, opt?: Record<string, string>) => {
    return intl.formatMessage({ id, defaultMessage: id }, opt);
  };
  const formateDate = (id: string, opt?: Record<string, string>) => {
    return intl.formatMessage({ id, defaultMessage: id }, opt);
  };
  return { t, ...intl };
}
