import { Aicp, Digital3 } from '@/components/svgr';

import classNames from 'classnames';
import { HTMLAttributes } from 'react';
import { useTitle } from 'react-use';
import { WrapLink } from '../ant/Link';
import MenuAction from '../ant/MenuAction';

export function Header(p: HTMLAttributes<HTMLDivElement>) {
  const { className, ...props } = p;
  useTitle('AICP');
  return (
    <div
      {...props}
      className={classNames('h-[56px] px-5 w-full flex justify-between items-center text-white bg-green-2')}
    >
      <WrapLink to="/" className="flex gap-3 items-end !text-white">
        <Aicp height="24" />
        <Digital3 height="16" />
      </WrapLink>
      <MenuAction key="menu" />
    </div>
  );
}

export function HomeHeader(p: HTMLAttributes<HTMLDivElement>) {
  const { ...props } = p;
  useTitle('AICP');
  return (
    <div
      {...props}
      className={classNames(
        'h-[6.75rem] z-50 max-w-[75rem] mx-auto bg-transparent w-full text-white flex justify-between items-center px-5 mo:h-[56px] mo:sticky mo:top-0 mo:bg-white mo:text-green-2',
      )}
    >
      <WrapLink to="/" className="flex gap-3 items-end">
        <Aicp height="24" />
        <Digital3 height="16" />
      </WrapLink>
      <MenuAction key="menu" />
    </div>
  );
}
