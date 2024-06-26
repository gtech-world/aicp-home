import { useIsMobile } from '@/components/common/context';
import { ProductQrcode } from '@/components/common/productQrcode';
import { Table } from '@/components/common/table';
import { Aicp as SVGAICP, GGX as SvgGgx } from '@/components/svgr';
import { useSBT } from '@/lib/hooks/useDatas';
import { useT } from '@/lib/hooks/useT';
import { autoFormaterRealTime, genScanUrl, shortStr, wrapPath } from '@/lib/utils';
import { useSearchParams } from '@umijs/max';
import classNames from 'classnames';
import { now } from 'lodash';
import { useEffect, useState } from 'react';
import { VscQuestion, VscVerified } from 'react-icons/vsc';
import { WrapLink } from '../ant/Link';
import WrapPageContainer from '../ant/WrapPageContainer';
import { HeaderLayout } from '../common/headerLayout';
import { Tooltip } from 'antd';

function ItemInfo(p: { label: string; text: string; link?: string; tip?: any; className?: string }) {
  return (
    <div
      className={classNames(
        'w-full  text-base whitespace-normal leading-[1.8rem] mo:text-[.9375rem] mo:leading-[1.6875rem] relative',
        {
          'text-green-2': p.link,
          'text-gray-6': !p.link,
        },
        p.className,
      )}
    >
      {!!p.tip && (
        <Tooltip title={p.tip}>
          <VscQuestion className="absolute text-black left-[-1.6rem] text-xl top-[0.29rem]" />
        </Tooltip>
      )}
      <span className="font-bold text-black">{p.label}:</span>{' '}
      {p.link ? (
        <a href={p.link} target="_blank" rel="noreferrer">
          {p.text}
        </a>
      ) : (
        p.text
      )}
    </div>
  );
}
// interface LabelDetail {
//   data: {
//     sbtTokenId: string;
//     labelNumber: string;
//     productName: string;
//     ownerAddress: string;
//     metadata: string;
//     labelPrintDate: number;
//   };
// }
function CardInfo(p: any) {
  const {
    tokenId = '',
    uuid = '',
    productName = '',
    ownerAddress = '',
    orgName = '',
    labelPrintDate = '',
    loadNumber = '',
    pcfResult = '',
    labelCredential = '',
    proofTime = '',
  } = p?.data || {};

  const { t } = useT();
  return (
    <div className="break-all">
      <ItemInfo
        label={t('SBT Token ID')}
        text={tokenId}
        link={genScanUrl('address', '0x7BC6afe0cDc6DE9191dfC6d68A3bad45E270F695')}
        tip={t(
          'SBTs are non-transferable and immutable digital credentials representing the vehicle’s carbon footprint label. Every SBT has a unique token ID.',
        )}
      />
      <ItemInfo label={t('Label No.')} text={uuid} />
      <ItemInfo label={t('Label Type')} text={'PCF'} />
      <ItemInfo
        label={t('Label Owner')}
        text={orgName}
        link={genScanUrl('address', ownerAddress)}
        tip={t(
          'Trust Labels are minted by their owners. Owner Addresses stand for verified identity credentials for the label owners.',
        )}
      />
      <ItemInfo label={t('Product Model')} text={productName} />
      <ItemInfo
        className="mo:flex mo:flex-col"
        label={t('Product UUID')}
        text={loadNumber}
        tip={t('The unique identifier number or code for the labelled product, typically a VIN code for the vehicle.')}
      />
      <ItemInfo label={t('Carbon Emission')} text={pcfResult} />
      <ItemInfo label={t('Certified Documents')} text={labelCredential} />
      <ItemInfo label={t('Label Print Date')} text={proofTime} />
    </div>
  );
}

export function Blockchain() {
  const [sq] = useSearchParams();
  const tokenId = sq.get('tokenId');
  const name = sq.get('name');
  const { t, formatRelativeTime } = useT();
  const isMobile = useIsMobile();
  const [current, setCurrent] = useState('');
  const action: { [key: number]: string } = {
    0: 'transfer',
    1: 'mint',
    [-1]: 'burn',
  };
  const { data: sbtTagList, isLoading: loading } = useSBT(tokenId as string);
  useEffect(() => {
    setCurrent(window?.location?.origin);
  }, []);

  const columns = [
    {
      title: t('Activity Hash'),
      dataIndex: 'txHash',
      tip: t(
        'The cryptographic hash of an on-chain activity can be used to identify and verify the transaction information on the blockchain.',
      ),
      render: (text: string) => {
        return (
          <WrapLink className="text-green-2 !text-base" target="_blank" to={genScanUrl('tx', text)}>
            {shortStr(text)}
          </WrapLink>
        );
      },
    },
    {
      title: t('Action'),
      dataIndex: 'action',
      tip: t('The business implication of the on-chain activity'),
      render: (text: string, record: any) => {
        return action[record.eventType];
      },
    },
    {
      title: t('Age'),
      dataIndex: 'blockTimestamp',
      render: (text: number) => {
        return (
          <span className="whitespace-nowrap"> {autoFormaterRealTime(formatRelativeTime, text * 1000 - now())}</span>
        );
      },
    },
    {
      title: t('Blockchain'),
      dataIndex: 'chain',
      tip: t('The name of the blockchain and the code for its network or version'),
      render: (text: string) => {
        return <span className="whitespace-nowrap">GTech Green-chain</span>;
      },
    },
    {
      title: t('From'),
      dataIndex: 'fromAddress',
      render: (text: string) => {
        return (
          <WrapLink className="text-green-2 !text-base" target="_blank" to={genScanUrl('address', text)}>
            {shortStr(text)}
          </WrapLink>
        );
      },
    },
    {
      title: t('To'),
      dataIndex: 'toAddress',
      render: (text: string) => {
        return (
          <WrapLink className="text-green-2 !text-base" target="_blank" to={genScanUrl('address', text)}>
            {shortStr(text)}
          </WrapLink>
        );
      },
    },
  ];
  const polygonscanDesc = t(
    'GGX (GTech Green Chain) is a shared digital space for the automotive industry. GGX offers 3T (Transparency, Traceability, Trust) featured data as a solid foundation for cross-boundary collaboration between automotive value chain players.',
  );

  return (
    <HeaderLayout>
      <WrapPageContainer loading={loading} className="flex flex-col flex-1 w-full text-black bg-gray-16 min-h-fit">
        <div className="w-full max-w-[1480px] mx-auto">
          <div className="flex mo:flex-col">
            <div className="bg-white flex justify-center px-10 items-center rounded-lg mo:h-[21rem] mo:px-0">
              <ProductQrcode
                className=""
                name={name}
                data={`${current || 'https://aicp.gtech.world'}${wrapPath('/label')}?vin=${sbtTagList?.uuid}`}
              />
            </div>
            <div className="flex flex-col flex-1 ml-5 mo:ml-0 mo:mt-5">
              <div className="flex mb-5">
                <VscVerified className="text-3xl mr-2 mo:mt-[-0.45rem] mo:text-[2.8rem]" />
                <div className="flex text-lg mo:flex-col">
                  <div className="flex flex-col">
                    <span className="w-full font-bold">
                      {t('Automotive Carbon Footprint Trust Label')}
                      {isMobile && <span className="ml-3 font-medium">#{tokenId}</span>}
                    </span>
                    {!isMobile && <p>#{tokenId}</p>}
                  </div>
                  <span className="text-sm ml-3 mo:ml-0 mt-[0.3rem] mo:mt-2 mo:text-gray-6">
                    {t('Recognized by AIAG & IAOB')}
                  </span>
                </div>
              </div>
              <div className="px-12 py-5 bg-white rounded-lg mo:pl-10 mo:pr-3">
                <h5 className="mb-3.5 font-bold text-lg">{t('Label Details')}</h5>
                <CardInfo data={sbtTagList} />
              </div>
            </div>
          </div>

          <div className="px-8 py-5 mt-5 bg-white rounded-lg mo:px-4">
            <h3 className="text-lg font-bold">{t('Item Activity on Blockchain')}</h3>
            <div className="w-full overflow-hidden overflow-x-auto mo:pb-5">
              <Table className="mt-5 mo:w-[52rem]" columns={columns} data={sbtTagList?.transferEvents || []} />
            </div>
          </div>
          <div className="bg-white mt-5 px-8 py-5 rounded-lg leading-[1.8rem] mo:leading-[1.6875rem] mo:px-4 mo:text-[.9375rem]">
            <SVGAICP fill="#29953A" className="w-[6.125rem] mb-5" />
            <p className="font-bold">{t('Platform powered by:')}</p>
            <p className="text-green-2">
              <WrapLink className="!text-base" to="https://aicp.gtech.world/">
                {t('Automotive Industry Carbon Platform')}
              </WrapLink>
            </p>
            <p>
              {t(
                'AICP is the global, industry-level platform designed for long-term carbon emission performance traceability and visibility under the AIAG Carbon Initiative. AICP offers public view mode and supply chain view mode.',
              )}
            </p>
          </div>
          <div className="bg-white mt-5 px-8 py-5 rounded-lg leading-[1.8rem] mo:leading-[1.6875rem] mo:px-4 mo:text-[.9375rem]">
            <SvgGgx className="mb-5" />
            <p className="font-bold">{t('Blockchain powered by:')}</p>
            <p className="text-green-2">
              <WrapLink className="!text-base" to={`https://explorer.gtech.world`} target="_blank">
                {t('GGX Blockchain')}
              </WrapLink>
            </p>
            <p dangerouslySetInnerHTML={{ __html: polygonscanDesc }}></p>
          </div>
        </div>
      </WrapPageContainer>
    </HeaderLayout>
  );
}

export default Blockchain;
