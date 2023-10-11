import { useT } from '@/lib/hooks/useT';
import { getErrorMsg } from '@/lib/utils';
import { useCallback } from 'react';
import { create } from 'zustand';
export interface Toast {
  type: 'info' | 'error';
  msg: string;
}
export interface Store {
  inited: boolean;
  userData?: ApiModel.UserData;
  toast?: Toast;
  last_input_vin: string;
  isMobile: boolean;
  show_header_tip: boolean;
}
export const defStore: Store = {
  inited: false,
  last_input_vin: '',
  isMobile: false,
  show_header_tip: false,
};

export function getUserData() {
  const ud = localStorage.getItem('user-data');
  if (!ud) return undefined;
  try {
    return JSON.parse(ud) as ApiModel.UserData;
  } catch (error) {
    return undefined;
  }
}

export interface UpStore extends Store {
  update: (data: Partial<Store>) => void;
}
export function initStore() {
  const store: Store = {
    inited: true,
    isMobile: window.innerWidth <= 900,
    last_input_vin: sessionStorage.getItem('last_input_vin') || '',
    show_header_tip: !localStorage.getItem('hidden_header_tip'),
  };
  const ud = getUserData();
  if (ud && new Date().getTime() - ud.loginTime < 1000 * 60 * 60 * 24) store.userData = ud;
  return store;
}

export const useStore = create<UpStore>((set) => ({
  ...initStore(),
  update: (data = {}) => set(data),
}));

window.addEventListener('resize', () => {
  const isMobile = window.innerWidth <= 900;
  if (useStore.getState().isMobile !== isMobile) {
    useStore.setState({ isMobile });
  }
});

export function useIsMobile() {
  const { isMobile } = useStore();
  return isMobile;
}

export function useToast() {
  const { toast: current, update } = useStore();
  const toast = useCallback(
    (t?: Toast) => {
      update({ toast: t });
    },
    [update],
  );
  return { current, toast };
}

export function useOnError() {
  const { toast } = useToast();
  const { t } = useT();
  return useCallback(
    (err: any) => {
      toast({ type: 'error', msg: t(getErrorMsg(err)) });
    },
    [t, toast],
  );
}

export function useUser() {
  const { userData, update }: any = useStore();
  const setUser = useCallback((user?: ApiModel.UserData, login?: boolean) => {
    if (user && login) user.loginTime = new Date().getTime();
    update({ userData: user });
    localStorage.setItem('user-data', user ? JSON.stringify(user) : '');
  }, []);
  return { user: userData, setUser };
}

export function useLastInputVin() {
  const { last_input_vin, update } = useStore();
  const setLastInputVin = useCallback(
    (vin: string) => {
      update({ last_input_vin: vin });
      vin === '1500101202311001' && sessionStorage.setItem('last_input_vin', vin);
    },
    [update],
  );
  return { last_input_vin, setLastInputVin };
}

export function useShowHeadTip() {
  const { show_header_tip, update } = useStore();
  const setShowHeaderTip = useCallback(
    (show: boolean) => {
      update({ show_header_tip: show });
      localStorage.setItem('hidden_header_tip', show ? '' : '1');
    },
    [update],
  );
  return { show_header_tip, setShowHeaderTip };
}
