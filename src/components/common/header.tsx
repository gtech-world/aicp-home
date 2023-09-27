import { Aicp, Digital3, Document } from '@/components/svgr';
import { useGoBack } from '@/lib/hooks/useGoBack';
import classNames from 'classnames';
import { ChangeEvent, HTMLAttributes, useCallback, useEffect, useMemo, useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { IoIosArrowBack } from 'react-icons/io';
import { useIsMobile, useLastInputVin, useOnError, useUser } from './context';
import { MenuItem, PoperMenu } from './poper';

import { useT } from '@/lib/hooks/useT';
import { handleCarbonStr, sleep, textTo2 } from '@/lib/utils';
import { useLocation, useNavigate } from '@umijs/max';
import { FiHome, FiLogIn, FiLogOut, FiSearch } from 'react-icons/fi';
import { VscAccount } from 'react-icons/vsc';

export function useMenus(data: any[] = []) {
  const isMobile = useIsMobile();
  const { user, setUser } = useUser();
  const { pathname } = useLocation();
  const push = useNavigate();
  const { t, locale } = useT();
  const lng = locale;
  return useMemo(() => {
    const menus: MenuItem[] = [];
    menus.push({ icon: <FiHome />, text: t('AICP Home'), to: '/' });
    // menus.push({
    //   icon: <FiSearch />,
    //   text: t('AICP Open Query'),
    //   to: '/openquery',
    // });
    if (user && !data.find((item) => item.to === pathname)) {
      menus.push({
        icon: <VscAccount />,
        text: handleCarbonStr(t('AICP Digital3 Carbon System')),
        to: '/main',
      });
    }
    if (isMobile && user) {
      data
        .map<MenuItem>((item) => ({
          icon: <item.icon />,
          text: t(item.txt),
          to: item.to,
          selected: pathname === item.to,
        }))
        .forEach((item) => menus.push(item));
    }
    menus.push({
      icon: <Document />,
      text: t('Document'),
      to: 'https://docs.gtech.world/',
      onClick: () => {
        open('https://docs.gtech.world/', '_blank');
      },
    });
    menus.push({
      icon: user ? <FiLogOut /> : <FiLogIn />,
      text: user ? t('Log Out') : t('Log In'),
      to: user ? undefined : '/login',
      onClick: () => {
        push('/');
        setUser(undefined);
      },
    });
    return menus;
  }, [user, isMobile, pathname, t, lng]);
}

export function useHeaderHeight() {
  const [h, setH] = useState(0);
  useEffect(() => {
    const getHead = async () => {
      let timeout = 2000;
      while (true) {
        await sleep(100);
        timeout -= 100;
        const el = document.getElementById('app_header');
        if (el) return el;
        if (timeout <= 0) return undefined;
      }
    };
    let obs: ResizeObserver;
    let head: HTMLDivElement;
    getHead().then((head) => {
      if (head) {
        const onResize = () => {
          head && setH(head.getBoundingClientRect().height);
        };
        head && setH(head.clientHeight);
        if (head) {
          obs = new ResizeObserver(onResize);
          obs.observe(head);
          onResize();
        }
      }
    });
    return () => {
      obs && head && obs.unobserve(head);
    };
  }, []);
  return h;
}

export function Header(
  p: HTMLAttributes<HTMLDivElement> & {
    tits?: string | null;
    showQuery?: boolean;
    isManager?: boolean;
    menus?: any;
    nopx?: boolean;
  },
) {
  const { children, className, tits, showQuery, isManager, nopx = false, menus, ...other } = p;
  const { t } = useT();
  const mTit = tits || t('Automotive Industry Carbon Platform') || '';
  const mTits = useMemo(() => textTo2(mTit), [mTit]);
  const push = useNavigate();
  const currentMenus = useMenus(menus);
  const { last_input_vin, setLastInputVin } = useLastInputVin();
  const [vin, setVin] = useState(last_input_vin);
  const onVinChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setVin(e.target.value || '');
    setLastInputVin(e.target.value);
  }, []);
  const onError = useOnError();

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const onQuery = () => {
    if (!vin) return onError('Please input VIN Code');
    push(`pcf?vin=${vin}`);
  };

  return (
    <>
      <div
        id="app_header"
        className={classNames(
          `w-full relative z-[3] max-w-[90rem] mx-auto  text-white  flex items-center top-0  h-[4.25rem]
          ${!nopx && (windowWidth > 1200 && windowWidth <= 1280 ? 'px-[3%]' : 'px-[7.5rem]')}
          `,
          className,
        )}
        {...other}
      >
        {isManager ? (
          <div className="flex items-center cursor-pointer ml-[-1rem] mo:ml-0" onClick={() => push('/')}>
            <Aicp className="h-[2.275rem] mo:h-[2rem]" />
            <Digital3 className="h-[1.5rem] mt-2.5 ml-3 mo:h-[1.1rem] mo:mt-3" />
          </div>
        ) : (
          <div onClick={() => push('/')} className="flex items-center cursor-pointer">
            <Aicp className="h-9 mo:h-[1.75rem]" />
            <div className={classNames('flex flex-col ml-4 text-base leading-snug mo:text-[.8rem] mo:ml-[.8rem]', {})}>
              {mTits.map((tit, i) => (
                <span
                  className="whitespace-nowrap"
                  key={`tit_${i}`}
                  dangerouslySetInnerHTML={{ __html: handleCarbonStr(tit) }}
                ></span>
              ))}
            </div>
          </div>
        )}

        <div className="flex-1" />
        {showQuery && (
          <div className="relative mr-4 text-lg text-white mo:hidden">
            <input
              style={{ border: '2px solid #fff' }}
              className="w-[17.5rem] h-[2.25rem] rounded-sm outline-none bg-transparent pl-10 pr-4"
              value={vin}
              maxLength={24}
              onChange={onVinChange}
              onKeyDown={(e) => e.code === 'Enter' && onQuery()}
            />
            <FiSearch className="text-[1.75rem] top-1 left-2 absolute cursor-pointer" onClick={onQuery} />
          </div>
        )}
        <PoperMenu menus={currentMenus}>
          <button className="text-[2rem] mo:text-2xl">
            <HiOutlineMenu />
          </button>
        </PoperMenu>
      </div>
    </>
  );
}

export function MobileHeader(p: HTMLAttributes<HTMLDivElement> & { tits?: [string, string] }) {
  const { children, className, tits = ['Automotive Industry', 'Carbon Platform'], ...other } = p;
  const goBack = useGoBack();
  const menus = useMenus();
  return (
    <div
      id="app_header"
      className={classNames('sticky top-0 z-[3] w-full text-white flex items-center p-4 bg-green-2', className)}
      {...other}
    >
      <button className="text-[2rem]" onClick={goBack}>
        <IoIosArrowBack />
      </button>
      <div className="flex-1" />
      <Aicp className="h-[1.75rem]" />
      <div className="flex-1" />
      <PoperMenu menus={menus}>
        <button className="text-2xl">
          <HiOutlineMenu />
        </button>
      </PoperMenu>
    </div>
  );
}
