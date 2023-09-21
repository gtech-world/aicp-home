import { ProductQrcode } from '@/components/common/productQrcode';
import { Teacher as SvgTeacher } from '@/components/svgr';
import { getCarbonTagList } from '@/lib/services/carbonTag';
import { getCurrentDate } from '@/lib/utils';
import { PageContainer } from '@ant-design/pro-components';
import { Link } from '@umijs/max';
import { useEffect, useState } from 'react';

function Card(p: {
  data: { title: string; icon: any; qrcodeDisable: boolean; by: string; id: string; link: any; qrCode: string };
}) {
  const { title, icon, qrcodeDisable, by, id, link, qrCode } = p.data;
  return (
    <div className="bg-white mr-5 w-[22.875rem] mo:w-full p-5 rounded-lg mb-5 text-base mo:mr-0">
      <ProductQrcode qrcodeDisable={qrcodeDisable} data={qrCode} />
      <div className="flex flex-col mt-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span>{by}</span>
        <span>标签ID : {id}</span>
      </div>
      <div className="flex flex-col text-blue-0 underline mt-2.5 font-semibold">
        {link.map((v: { href: string; text: string; target: string }, i: number) => {
          return (
            <Link key={`link${i}`} target={v.target} className="mt-2.5" to={v.href}>
              {v.text}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function Tag() {
  const [tagList, setTagList] = useState<SbtTokenController.Records>();

  const getTagList = async () => {
    const res = await getCarbonTagList();
    res.records = (res?.records || []).map(({ loadName, proofTime, tokenId, tokenUrl, uuid, verifyUserName }) => {
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
            href: `/main/tags/chain?tokenId=${tokenId}}`,
          },
        ],
        qrCode: ` https://aicp.gtech.world/main/tags/label?vin=${uuid}`,
      };
    }) as any;
    setTagList(res);
  };

  useEffect(() => {
    getTagList();
  }, []);
  return (
    <PageContainer>
      <div className="flex flex-wrap">
        {tagList?.records.map((v: any, i) => {
          return <Card key={`tagData${i}`} data={v} />;
        })}
      </div>
    </PageContainer>
  );
}

export default Tag;
