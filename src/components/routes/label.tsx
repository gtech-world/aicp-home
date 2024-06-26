import { Carbon3 as SVGCarbon3 } from '@/components/svgr';

import { useTagInfo } from '@/lib/hooks/useDatas';
import { useT } from '@/lib/hooks/useT';
import { genScanUrl, handleCarbonStr, wrapPath } from '@/lib/utils';
import { useSearchParams } from '@umijs/max';
import { Fragment } from 'react';
import WrapPageContainer from '../ant/WrapPageContainer';
import DivText from '../common/DivText';
import { HeaderLayout } from '../common/headerLayout';

export function Label() {
  const [sq] = useSearchParams();
  const vin: string = sq.get('vin') as string;
  const { data: tagInfo, isLoading } = useTagInfo(vin);
  const { t } = useT();

  const {
    evaluationAgency = '-',
    evaluationExpireTime = '-',
    evaluationType = '-',
    loadNumber = '-',
    orgName = ' ',
    productName = '-',
    tokenId = '-',
    uuid = '-',
    functionalUnit = '-',
    evaluationBoundary = '-',
    evaluationBasis = '-',
    pcfResult = '-',
    certificateNumber = t('0000001'),
  } = tagInfo || {};

  const productInfo = [
    { text: t('Label Number'), value: uuid },
    { text: t('Product System'), value: productName },
    { text: t('Product UID'), value: loadNumber },
    { text: t('Label Applicant'), value: orgName },
  ];

  const productTagInfo = [
    { text: t('Evaluation'), value: evaluationType !== 'aicp' ? t('Third-party Certification') : 'AICP平台审核' },
    { text: t('Certification Number'), value: certificateNumber },
    { text: t('Functional Unit'), value: functionalUnit },
    { text: t('Assessment Boundary'), value: evaluationBoundary },
    { text: t('Reference Standard'), value: evaluationBasis },
    { text: t('Evaluation by'), value: evaluationAgency },
    { text: t('Effective Date'), value: evaluationExpireTime },
    {
      text: t('Blockchain SBT Number'),
      value: tokenId,
      link: genScanUrl('address', '0x7BC6afe0cDc6DE9191dfC6d68A3bad45E270F695'),
    },
  ];

  const splitArranyText = pcfResult.split(' ');

  const text1 = splitArranyText[0] || '';
  const text2 = splitArranyText[1] || '';
  const text3 = splitArranyText[2] || '';

  const noHeader = () => {
    return (
      <Fragment>
        <div className="flex w-full gap-5 mo:flex-none mo:flex-col ">
          <div className="w-[420px] max-h-[480px] p-5 mo:h-auto  bg-[#FFFFFF] text-center  flex justify-center mo:justify-start   mo:flex-row mo:w-full flex-col items-center rounded-lg ">
            <img src="label.jpg" className="text-[5.375rem] w-[5.375rem] mt-[.625rem] mb-5 mo:mb-2  shrink-0" />
            <div className="mo:ml-[2.5rem] mo:flex-1 ">
              <div className="text-[#29953A] text-[1.75rem] leading-8 font-semibold max-w-full break-all mo:hidden">
                {pcfResult}
              </div>
              <div className="flex flex-col ms:hidden text-[#29953A] text-[1.75rem] leading-8 font-semibold max-w-full break-all ">
                <div>{text1}</div>
                <div>
                  {text2} {text3}
                </div>
              </div>
              <div className="font-[1.75rem] leading-8   ">{t('Cradle-to-Grave Footprint')}</div>
            </div>
          </div>
          <div className="w-[420px]  mo:w-full  max-h-[480px] bg-[#FFFFFF] mo:max-h-[350px] rounded-lg">
            <div className="mx-5 mt-5 mb-5 mmd:mt-10">
              <div className="mb-5 mo:mb-[15px]  md:text-[18px]   font-bold mo:text-[18px] text-[20px] leading-7">
                {t('Product Info')}
              </div>
              <DivText textArray={productInfo} />
            </div>
          </div>
          <div className="w-[420px]  mo:w-full  max-h-[480px] bg-[#FFFFFF] mo:max-h-[370px] rounded-lg">
            <div className="mx-5 mt-5 mb-5 mmd:mt-10">
              <div className="mb-5 mo:mb-[15px] md:text-[18px]   font-bold mo:text-[18px] text-[20px] leading-7">
                {t('Product Carbon Footprint')}
              </div>
              <DivText textArray={productTagInfo} />
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-5 mo:flex-none mo:flex-col ">
          <div className="w-[640px] py-5 mo:pt-[1.875rem] mo:w-full bg-[#FFFFFF] flex flex-col items-center rounded-lg gap-5 mo:gap-[.9375rem]">
            {/* <SVGCarbon3 className="text-[5.375rem] w-[5.375rem]" /> */}
            <img src="label.jpg" className="text-[5.375rem] w-[5.375rem]" />
            <div
              className="text-lg font-bold mo:mx-5 "
              dangerouslySetInnerHTML={{
                __html: handleCarbonStr(t('What is AIAG Digital3 Carbon Trust Label?')),
              }}
            ></div>
            <div
              className="text-[.9375rem] font-normal text-center mx-5"
              dangerouslySetInnerHTML={{
                __html: handleCarbonStr(
                  t(
                    'An AIAG EPD/CFP Label stands for an EPD/CFP declaration that is registered on the AIAG EPD Platform and recognized by AIAG and IAOB.',
                  ).replace(
                    '{{value}}',
                    `<a class="text-green-2 cursor-pointer" target="_blank" href="https://aiag.org.cn/ACAC/Automotive-Carbon-Advisory-Committee" rel="noreferrer">${t(
                      'AIAG’s carbon reduction / Net Zero 2050 initiatives',
                    )}</a>`,
                  ),
                ),
              }}
            />
          </div>

          <div className="w-[640px] py-5 mo:pt-[1.875rem] mo:w-full bg-[#FFFFFF] flex flex-col items-center rounded-lg gap-5 mo:gap-[.9375rem]">
            <img src="/nft.png" className="text-[5.375rem] w-[5.375rem] h-[5.375rem]" />
            <div className="text-lg font-bold"> {t('Immutability and Traceability')}</div>
            <div
              className="text-[.9375rem] font-normal text-center mx-5"
              dangerouslySetInnerHTML={{
                __html: t(
                  'Every AIAG EPD/CFP Label is backed by an dedicated NFT on blockchain to guarantee long term immutability and traceability on the underlying data. Check {{value}} to view NFT information from the blockchain explorer.',
                ).replace(
                  '{{value}}',
                  `<a class="text-green-2 cursor-pointer" href="${wrapPath(
                    '/chain',
                  )}?tokenId=${tokenId}" rel="noreferrer">${t('here')}</a>`,
                ),
              }}
            />
          </div>
        </div>
      </Fragment>
    );
  };

  const noData = () => {
    return (
      <div className="flex items-center justify-center w-full h-40">{t('Data not available for this imput.')}</div>
    );
  };

  return (
    <HeaderLayout>
      <WrapPageContainer loading={isLoading}>
        <div className="w-full max-w-[1300px] mx-auto ">
          {!tagInfo ? (
            noData()
          ) : (
            <Fragment>
              <div className="mb-5 text-2xl font-bold leading-normal">
                {t('CFP Label')} <span className="text-base font-medium">{t('Recognized by AIAG & IAOB')}</span>
              </div>
              {noHeader()}
            </Fragment>
          )}
        </div>
      </WrapPageContainer>
    </HeaderLayout>
  );
}

export default Label;
