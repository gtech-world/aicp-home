import WrapPageContainer from '@/components/ant/WrapPageContainer';
import { ProductQrcode } from '@/components/common/productQrcode';
import { Teacher as SvgTeacher } from '@/components/svgr';
import { useTags } from '@/lib/hooks/useDatas';
import { getCarbonTagList } from '@/lib/services/carbonTag';
import { getCurrentDate } from '@/lib/utils';
import { PageContainer } from '@ant-design/pro-components';
import { Link } from '@umijs/max';
import _ from 'lodash';
import { useEffect, useMemo, useState } from 'react';

function Card(p: {
  data: { title: string; icon: any; qrcodeDisable: boolean; by: string; id: string; link: any; qrCode: string };
}) {
  const { title, icon, qrcodeDisable, by, id, link, qrCode } = p.data;
  return (
    <div className="bg-white mr-5 w-[23.25rem] mo:w-full p-5 rounded-lg mb-5 text-base mo:mr-0 clac">
      <ProductQrcode qrcodeDisable={qrcodeDisable} data={qrCode} />
      <div className="flex flex-col mt-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span>{by}</span>
        <span>标签ID : {id}</span>
      </div>
      <div className="flex flex-row text-blue-0 underline mt-2.5 font-semibold">
        {link.map((v: { href: string; text: string; target: string }, i: number) => {
          console.log('href', v.href);

          return (
            <Link key={`link${i}`} target={v.target} className="mt-2.5 mr-5" to={v.href}>
              {v.text}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function Tag() {
  // const [tagList, setTagList] = useState<SbtTokenController.Records>();
  const { data } = useTags();
  const tagList = useMemo(() => {
    let records = data?.records || [];
    if ((window.origin.includes('localhost') || window.origin.includes('beta')) && _.size(records) === 0)
      records = [
        {
          loadName: '碳足迹谈批次-某某型号车辆LCA示例模型',
          orgName: '测试机构',
          orgType: 'org',
          proofTime: '2023-10-07 10:41:08',
          tokenId: 7000000,
          tokenUrl: 'ipfs://Qmeb8VfEmqPqd4ZwCmA5ruN26bheupb2yCcM1hegcV4LS5/0.json',
          uuid: '3e49b334-baa5-4b49-ad8d-43a46cd5a6ac-1696646530',
          verifyUserName: 'v1',
        },
        {
          loadName: '3',
          orgName: '测试机构',
          orgType: 'org',
          proofTime: '2023-09-28 14:55:40',
          tokenId: 5000000,
          tokenUrl: 'ipfs://QmSTPjmmwdZwq7TkrFgYNDPxobEvWxBi1fm1e7cJGCGcqT/0.json',
          uuid: '24f96502-9e20-4cb1-a060-111255cb2a69-1695884327',
          verifyUserName: 'v1',
        },
      ];
    return records.map(({ loadName, proofTime, tokenId, tokenUrl, uuid, verifyUserName }) => {
      return {
        title: loadName,
        icon: <SvgTeacher className="w-[2.75rem]" />,
        by: `${getCurrentDate(proofTime, 'YYYY年MM月DD日')}签发 by AIAG`,
        id: uuid,
        qrcodeDisable: false,
        link: [
          { text: '标签信息', href: `/main/tags/label?vin=${uuid}` },
          {
            text: '在区块链浏览器查看',
            target: '_blank',
            href: `/main/tags/chain?tokenId=${tokenId}`,
          },
        ],
        qrCode: `${window.origin}/main/tags/label?vin=${uuid}`,
      };
    });
  }, [data]);

  return (
    <WrapPageContainer>
      <div className="flex flex-wrap">
        {tagList.map((v: any, i) => {
          return <Card key={`tagData${i}`} data={v} />;
        })}
      </div>
    </WrapPageContainer>
  );
}

export default Tag;
