import { initStore, Store, StoreProvider } from '@/components/common/context';
import { HeaderTip } from '@/components/common/headerTip';
import { modalRootRef } from '@/components/common/modal';
import { Toast } from '@/components/common/toast';
import '@/lib/env';
import classNames from 'classnames';

import { authGetResData } from '@/lib/http';
import React, { ReactNode, useEffect, useState } from 'react';
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { SWRConfig } from 'swr/_internal';

function InitProvider(p: { children: React.ReactNode }) {
  const [_store] = useState<Store>(initStore());
  useEffect(() => {
    modalRootRef.current = document.body as any;
  }, []);
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        errorRetryCount: 3,
        fetcher: authGetResData,
      }}
    >
      <StoreProvider init={_store}>{p.children}</StoreProvider>
    </SWRConfig>
  );
}

function InitToolTip() {
  return (
    <Tooltip
      className="z-[999999]  break-all shadow-[0_10px_10px_0_rgba(0,0,0,0.3)] border border-[#eee] max-w-[22.5rem]"
      style={{ backgroundColor: 'rgb(255, 255, 255,1)', color: '#222' }}
      id="tooltip"
      opacity={1}
      closeOnScroll={true}
      closeOnResize={true}
      delayHide={100}
    />
  );
}
export default function App(p: { children?: ReactNode }) {
  return (
    <div suppressHydrationWarning id="__app" className={classNames('App font-OpenSans relative')}>
      {/* <head>
        <title>AICP</title>
        <meta name="description" content="AICP Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
        <link rel="icon" href="/favicon.ico" />
      </head> */}
      <InitProvider>
        <HeaderTip />
        {p.children}
        <Toast />
      </InitProvider>
      <InitToolTip />
    </div>
  );
}
