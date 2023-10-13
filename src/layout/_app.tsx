import { Toast } from '@/components/common/toast';
import '@/lib/env';
import classNames from 'classnames';

import { authGetResData } from '@/lib/http';
import React, { FC, ReactNode } from 'react';
import 'react-tippy/dist/tippy.css';
import 'react-tooltip/dist/react-tooltip.css';
import { SWRConfig } from 'swr/_internal';

function InitProvider(p: { children: React.ReactNode }) {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        errorRetryCount: 3,
        fetcher: authGetResData,
      }}
    >
      {p.children}
    </SWRConfig>
  );
}

function App(p: { children?: ReactNode }) {
  return (
    <div suppressHydrationWarning id="__app" className={classNames('App font-OpenSans relative')}>
      <InitProvider>
        {p.children}
        <Toast />
      </InitProvider>
    </div>
  );
}

export function withApp(RN: FC) {
  return function () {
    return (
      <App>
        <RN />
      </App>
    );
  };
}

export default App;
