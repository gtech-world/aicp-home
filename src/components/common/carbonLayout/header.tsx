import { CARBON_PAGES } from '@/components/const';
import { useMenus } from '@/lib/hooks/useMenus';
import { Aicp, Digital3 } from '@/components/svgr';
import classNames from 'classnames';
import { HTMLAttributes } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { PoperMenu } from '../poper';
import { useNavigate } from '@umijs/max';

export function CarbonHeader(p: HTMLAttributes<HTMLDivElement>) {
  const { children, className, ...other } = p;
  const push = useNavigate();
  const currentMenus = useMenus(CARBON_PAGES);
  return (
    <>
      <div
        className={classNames(
          'w-full relative z-[3] max-w-[90rem] mx-auto text-white flex items-center top-0  h-[4.25rem]',
          className,
        )}
        {...other}
      >
        <div className="flex items-center cursor-pointer ml-[-1rem] mo:ml-0" onClick={() => push('/')}>
          <Aicp className="h-[2.275rem] mo:h-[2rem]" />
          <Digital3 className="h-[1.5rem] mt-2.5 ml-3 mo:h-[1.1rem] mo:mt-3" />
        </div>
        <div className="flex-1" />
        <PoperMenu menus={currentMenus}>
          <button className="text-[2rem] mo:text-2xl">
            <HiOutlineMenu />
          </button>
        </PoperMenu>
      </div>
    </>
  );
}
