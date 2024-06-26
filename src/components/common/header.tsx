import { Aicp } from '@/components/svgr';
import { SelectLang, useIntl } from '@umijs/max';
import classNames from 'classnames';
import { HTMLAttributes } from 'react';
import { useTitle } from 'react-use';
import { WrapLink } from '../ant/Link';
import MenuAction from '../ant/MenuAction';
import { useIsMobile } from './context';
import { HEADER_HEIGHT } from '../../../config/defaultSettings';
import { LngList, LngsText } from '../const';
import { Button } from './button';

export function HeaderTitle() {
  const { locale } = useIntl();
  if (locale === 'zh-CN') {
    return (
      <div className="flex flex-col text-sm">
        <span>汽车行业</span>
        <span>碳服务平台</span>
      </div>
    );
  }
  return (
    <div className="flex flex-col text-sm">
      <span>Automotive Industry</span>
      <span>Carbon Platform</span>
    </div>
  );
}

export function Header(p: HTMLAttributes<HTMLDivElement>) {
  const { className, ...props } = p;
  const isMobile = useIsMobile();

  return (
    <div
      {...props}
      style={{ height: HEADER_HEIGHT }}
      className={classNames('px-5 w-full flex justify-between items-center text-white bg-green-2')}
    >
      <WrapLink to={isMobile ? '#' : '/'} className="flex gap-3 items-center !text-white">
        <Aicp height="30" />
      </WrapLink>

      <div className="flex items-center gap-5">
        {/* <SelectLang postLocalesData={() => LngList} reload={false} /> */}

        {!isMobile && <MenuAction key="menu" />}
      </div>
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
      <WrapLink to="/" className="flex items-center gap-3">
        <Aicp height="32" />
        <HeaderTitle />
      </WrapLink>
      <MenuAction key="menu" />
    </div>
  );
}
