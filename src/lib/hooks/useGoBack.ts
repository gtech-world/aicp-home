import { history } from '@umijs/max';

export function useGoBack() {
  return () => {
    history.back();
  };
}
