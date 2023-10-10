import { Carbon3 as SVGCarbon3 } from '@/components/svgr';

import { useTagInfo } from '@/lib/hooks/useDatas';
import { useT } from '@/lib/hooks/useT';
import { genScanUrl, handleCarbonStr } from '@/lib/utils';
import { useSearchParams } from '@umijs/max';
import { Fragment } from 'react';
import WrapPageContainer from '../ant/WrapPageContainer';
import DivText from '../common/DivText';
import { HeaderLayout } from '../common/headerLayout';

export function Label() {
  const [sq] = useSearchParams();
  const vin: string = sq.get('vin') as string;
  const { data: tagInfo, isLoading } = useTagInfo(vin);
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
  } = tagInfo || {};
  const productInfo = [
    { text: '标签编号', value: uuid },
    { text: '产品型号', value: productName },
    { text: '产品唯一标识符', value: loadNumber },
    { text: '标签申请主体', value: orgName },
  ];

  const productTagInfo = [
    { text: '评价类型', value: evaluationType !== 'aicp' ? '第三方认证' : 'AICP平台审核' },
    { text: '功能单位', value: functionalUnit },
    { text: '评价边界', value: evaluationBoundary },
    { text: '评价依据', value: evaluationBasis },
    { text: '评价机构', value: evaluationAgency },
    { text: '评价有效期', value: evaluationExpireTime },
    {
      text: '区块链SBT证书编号',
      value: tokenId,
      link: genScanUrl('address', '0x7BC6afe0cDc6DE9191dfC6d68A3bad45E270F695'),
    },
  ];

  const { t } = useT();

  const noHeader = () => {
    return (
      <Fragment>
        <div className="flex w-full gap-5 mo:flex-none mo:flex-col ">
          <div className="w-[420px] max-h-[450px] p-5 mo:h-auto  bg-[#FFFFFF] text-center  flex justify-center mo:justify-start   mo:flex-row mo:w-full flex-col items-center rounded-lg ">
            <SVGCarbon3 className="text-[5.375rem] w-[5.375rem] mt-[.625rem] mb-5 mo:mb-2  shrink-0" />
            <div className="mo:ml-[2.5rem] mo:flex-1 ">
              <div className="text-[#29953A] text-[1.75rem] leading-8 font-semibold max-w-full break-all">
                {pcfResult}
              </div>
              <div className="font-[1.75rem] leading-8   ">二氧化碳等效排放</div>
            </div>
          </div>
          <div className="w-[420px]  mo:w-full  max-h-[450px] bg-[#FFFFFF] mo:max-h-[350px] rounded-lg">
            <div className="mx-5 mt-5 mb-5 mmd:mt-10">
              <div className="mb-5 mo:mb-[15px]  md:text-[18px]   font-bold mo:text-[18px] text-[20px] leading-7">
                产品信息
              </div>
              <DivText textArray={productInfo} />
            </div>
          </div>
          <div className="w-[420px]  mo:w-full  max-h-[450px] bg-[#FFFFFF] mo:max-h-[350px] rounded-lg">
            <div className="mx-5 mt-5 mb-5 mmd:mt-10">
              <div className="mb-5 mo:mb-[15px] md:text-[18px]   font-bold mo:text-[18px] text-[20px] leading-7">
                产品碳足迹评价信息
              </div>
              <DivText textArray={productTagInfo} />
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-5 mo:flex-none mo:flex-col ">
          <div className="w-[640px] py-5 mo:pt-[1.875rem] mo:w-full bg-[#FFFFFF] flex flex-col items-center rounded-lg gap-5 mo:gap-[.9375rem]">
            <SVGCarbon3 className="text-[5.375rem] w-[5.375rem]" />
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
                    'The AIAG Digital3 Carbon Trust Label is an industry-level certification framework for every vehicle produced under {{value}}. The Trust Label guarantees that any raw data behind the label is verified and recorded in an immutable manner for the ultimate transparency and traceability for the vehicle’s carbon performance.',
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
                  'A Soul-bounded Token (a special type of NFT that is not allowed to transfer after created) has been generated on blockchain to make sure the information in this label is immutable and will be maintain for traceability forever. Check {{value}} to verify the SBT on blockchain explorer.',
                ).replace(
                  '{{value}}',
                  `<a class="text-green-2 cursor-pointer" href="/chain?tokenId=${tokenId}" rel="noreferrer">${t(
                    'here',
                  )}</a>`,
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
              <div className="text-2xl font-bold leading-normal mb-5">
                {t('Product Carbon Footprint Certified')} <span className="text-base font-medium">{t('by AIAG')}</span>
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
