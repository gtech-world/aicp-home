import classNames from 'classnames';
import QRCode from 'qrcode.react';
import { Border, Carbon3Name, DisableQrcode } from '../svgr';
import { Fragment } from 'react';

export function ProductQrcode(p: any) {
  const { qrText, className, qrcodeDisable, data, name = 'Certified' } = p;
  return (
    <div className={classNames('', className)}>
      <div className="p-1 border-[4px] border-green-2 rounded-[2.25rem]">
        <div
          className={classNames(
            'py-2 px-6 rounded-[1.90rem] border-[1.75px] border-green-2 flex justify-center items-center mo:px-3',
          )}
        >
          <div className="border-r-[3px] border-green-4 pr-5 mr-5 flex flex-col items-center justify-between h-full">
            <Carbon3Name className="my-2 shrink-0" />
            <img className="w-[6.875rem]" src="/earth_1.png" alt="" />
          </div>
          <div className="w-[7.125rem] flex flex-col items-center">
            <p className="text-[0.6875rem] text-center mb-2 leading-[0.945rem] font-semibold mo:leading-[0.865rem]">
              {qrText ? qrText : `Product Carbon Footprint ${name}`}
            </p>

            <Border className={'relative z-100'} />
            {qrcodeDisable ? (
              <DisableQrcode className="" width="77" height="77" />
            ) : (
              <>
                <QRCode className="w-[5.75rem] absolute z-1000 mo:mt-12 md:mt-13 mt-[50px]" size={76} value={data} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
