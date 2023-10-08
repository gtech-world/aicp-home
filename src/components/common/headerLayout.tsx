import classNames from 'classnames';
import { HTMLAttributes } from 'react';
import { useIsMobile } from './context';
import { Header, HomeHeader } from './header';

export function HomeHeaderLayout(p: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...props } = p;
  const isMobile = useIsMobile();

  return (
    <div className="relative flex flex-col flex-1 w-full min-h-fit bg-gray-16 ">
      {isMobile ? (
        <div className="absolute z-0 top-0 w-full h-[43rem] overflow-hidden bg-green-2 ">
          <img className="absolute bottom-0 right-0 object-cover w-full" src="/home-bg-r.jpg" />
          <div
            className="w-full h-full absolute ssm:top-[calc(21.5rem_-_75vw)]"
            style={{
              background: 'linear-gradient(180deg, #29953A 48.84%, rgba(34, 122, 48, 0) 96.76%)',
            }}
          />
        </div>
      ) : (
        <div className="absolute z-0 top-0 w-full h-[48.75rem] bg-green-2 overflow-hidden ">
          <img className="absolute top-0 right-0 object-cover h-full" src="/home-bg-r.jpg" />
          <div
            className="w-full h-full absolute lg:left-[calc(50%_-_45rem)]"
            style={{
              background: 'linear-gradient(182.16deg, #000000 -4.66%, rgba(0, 0, 0, 0) 17.13%)',
              transform: 'matrix(-1, 0, 0, 1, 0, 0)',
            }}
          />
          <div
            className="w-full h-full absolute lg:left-[calc(50%_-_45rem)]"
            style={{
              background: 'linear-gradient(270deg, #29953A 38.28%, rgba(34, 122, 48, 0) 77.8%)',
              transform: 'matrix(-1, 0, 0, 1, 0, 0)',
            }}
          />
        </div>
      )}
      <HomeHeader />
      <div
        className={classNames('z-[2] flex-1 relative w-full mx-auto mo:mx-0 mo:flex mo:flex-col', className)}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

export function HeaderLayout(p: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...props } = p;
  return (
    <div {...props} className={classNames('relative flex flex-col flex-1 w-full min-h-fit', className)}>
      <Header />
      {children}
    </div>
  );
}
