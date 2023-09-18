import { useMenus } from '@/components/common/header';
import { PoperMenu } from '@/components/common/poper';
import { Aicp, Digital3 } from '@/components/svgr';
import { useNavigate } from '@umijs/max';
import classNames from 'classnames';
import { HTMLAttributes } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';

export function ToolsHeader(
  p: HTMLAttributes<HTMLDivElement> & {
    tits?: string | null;
    showQuery?: boolean;
    isManager?: boolean;
  },
) {
  const { children, className, tits, showQuery, isManager, ...other } = p;
  const push = useNavigate();
  const currentMenus = useMenus();
  return (
    <>
      <div
        className={classNames(
          'w-full relative z-[3] max-w-[90rem] mx-auto text-white flex items-center top-0  h-[4.25rem] justify-between',
          className,
        )}
        {...other}
      >
        {
          <div className="flex items-center cursor-pointer ml-[-1rem] mo:ml-0" onClick={() => push('/')}>
            <Aicp className="h-[2.275rem] mo:h-[2rem]" />
            <Digital3 className="h-[1.5rem] mt-2.5 ml-3 mo:h-[1.1rem] mo:mt-3" />
          </div>
        }
        <PoperMenu menus={currentMenus}>
          <button className="text-[2rem] mo:text-2xl">
            <HiOutlineMenu />
          </button>
        </PoperMenu>
      </div>
    </>
  );
}
