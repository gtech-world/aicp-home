import { useIsMobile, useUser } from '@/components/common/context';
import { HomeHeaderLayout } from '@/components/common/headerLayout';
import { ProductQrcode } from '@/components/common/productQrcode';
import {
  CTag as SvgCTag,
  Market as SvgMarket,
  Pentagon as SvgPentagon,
  SignIn as SvgSignIn,
  Teacher as SvgTeacher,
} from '@/components/svgr';
import { useT } from '@/lib/hooks/useT';
import { scrollToAnchor } from '@/lib/utils';
import classNames from 'classnames';
import { Fragment, useEffect, useState } from 'react';
import { WrapLink } from '../ant/Link';
import { Btn } from '../common/button';
import { setLocale, useNavigate } from '@umijs/max';

function Card() {
  const { user } = useUser();
  const { t, locale } = useT();
  const push = useNavigate();
  const onClick = (to: string) => {
    if (!to) return;
    if (to.startsWith('/')) push(to);
    else open(to, '_blank');
  };

  const tabsList = [
    {
      icon: <SvgSignIn className="h-[5.875rem]" />,
      to: user ? '/main/tools' : '/login',
      children: (
        <div
          className="mx-3"
          dangerouslySetInnerHTML={{
            __html: t('{{value}} with authenticated account*').replace(
              '{{value}}',
              `<span class="font-bold">${t('Sign in')}</span>`,
            ),
          }}
        />
      ),
      btText: t('Enter'),
    },

    {
      icon: <img src="/earth.png" className="w-[6.25rem]" />,
      to: 'https://aiag.org.cn/ACAC/Automotive-Carbon-Advisory-Committee',
      btText: t('了解更多'),
      children: '与AIAG一起建筑零碳未来',
    },
  ];
  return (
    <Fragment>
      <div className="flex justify-center w-full bg-white">
        <div className="flex text-lg mo:text-base flex-shrink-0 max-w-[75rem] px-5 mo:max-w-auto pt-10 pb-5  flex-col w-full mo:flex-col  mo:mb-0">
          <ul className="flex justify-between w-full pb-6 mo:flex-col mo:pb-0">
            {tabsList.map((v, i) => {
              return (
                <li key={`tabsList${i}`} className={classNames('mr-5 flex flex-1 last:mr-0 mo:mr-0 mo:flex-col')}>
                  <div
                    className={classNames(
                      ' pt-10 mo:pt-[3.125rem] w-full relative flex flex-col justify-between p-5 rounded-2xl h-[23.25rem] mo:mb-5 border-solid border-black border-[3px] ',
                    )}
                  >
                    <div className="flex flex-col items-center justify-center">{v.icon}</div>

                    <div className="text-black mt-16 text-2xl text-center mo:text-lg mo:mt-[3.125rem]">
                      {v.children}
                    </div>
                    <div className="flex-1 mo:hidden" />
                    <Btn
                      className="!text-2xl !h-[50px]"
                      onClick={() => onClick(v.to)}
                      size="large"
                      children={v.btText}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="flex justify-center w-full bg-white ">
        <div className="w-full px-5 max-w-[75rem] text-base  mo:pt-0 pb-11 mo:flex-col flex-shrink-0 mo:flex">
          <div className="flex mo:mb-10">
            <span>*</span>
            <span className="mo:ml-2">
              专业账户面向汽车供应链内的企业级用户。了解更多关于专业账户，请联系GTech（邮箱：hi@gtech.world）。
            </span>
          </div>
          <div className="flex justify-between w-full pt-4 mt-16 text-sm border-t border-black mo:flex-col mo:mt-3">
            <div>
              <a rel="noreferrer" href="https://beian.miit.gov.cn/" target="_blank">
                沪ICP备2023021387号-1
              </a>
            </div>
            <span
              onClick={() =>
                window.open(
                  locale === 'zh-CN' ? 'https://gtech.world/zhstatement' : 'https://gtech.world/enstatement',
                  '_blank',
                )
              }
              className="cursor-pointer mo:mt-5 link-hover"
            >
              网站使用有关Cookie及隐私政策的声明
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

function CardTabsItem1() {
  const data = [
    {
      title: '双碳与数字化培训',
      text: '在AICP平台获取关于双碳以及数字化减碳的系列培训，提升您的碳管理技能，为后续双碳行动打下基础。完成培训并通过考试，您将被授予数字化证书以及对应标签。',
    },
    {
      title: '目标设定与实施规划',
      text: '在行业专家的帮助下完成个性化的、符合企业现状的双碳目标设定，以及明确未来如何实施相关的减碳行动。我们也鼓励您参与受全球认可的碳目标框架，如SBTi。',
    },
    {
      title: '双碳解决方案&咨询',
      text: '减碳是高度专业性且复杂的工作，需要企业内外部的长期协作与努力。在AICP获取可靠的解决方案支持：双碳实施与认证、碳信息报告与披露、数字化减碳、管理战略咨询等。',
    },
  ];
  return (
    <ul className="p-8 bg-white rounded-2xl">
      {data.map((v, i) => {
        return (
          <li key={`cardTabsItem1${i}`} className="mb-6 last:mb-0">
            <h5 className="mb-3 text-2xl font-semibold mo:text-xl">{v.title}</h5>
            <p>{v.text}</p>
          </li>
        );
      })}
    </ul>
  );
}
function CardTabsItem2() {
  const data = [
    {
      title: '公司碳核查',
      listText: '范围一类别排放、范围二类别排放、范围三类别排放',
      resultText: '核查报告、温室气体核查声明',
      bgColor: '#DAE3F3',
    },
    {
      title: '产品碳足迹',
      listText: '碳足迹清单、碳足迹模型、碳足迹测算',
      resultText: '产品碳足迹盘查报告、产品碳足迹证书',
      bgColor: '#B4C7E7',
    },
    {
      title: '碳减排',
      listText: '减碳量测算 - 产品级、减碳量测算 - 项目级、减碳量测算 - 技术级',
      resultText: '减排评估报告、减碳证书',
      bgColor: '#8FAADC',
    },
    {
      title: '碳中和',
      listText: '碳中和路径规划、碳中和测算工具',
      resultText: '碳中和评估报告、碳中和证书',
      bgColor: '#2F5597',
      color: '#fff',
    },
  ];
  return (
    <div className="bg-white px-8 pt-8 pb-5 rounded-2xl h-[25.75rem] mo:h-auto">
      <div className="pb-8 md:overflow-x-auto">
        <div className="min-w-[60rem] ">
          <div
            style={{ width: 'calc(100% - 15px) ' }}
            className="bg-gradient-to-r  from-[#FFF2CC] relative to-[#FFE184] font-semibold mb-5 h-10 w-full bg-contain flex justify-center items-center"
          >
            <span>实施清单</span>
            <span className="ml-[20rem]">输出结果</span>
            <div className="triangle"></div>
          </div>
          <div className="">
            {data.map((v, i) => {
              return (
                <div key={`cardTabsItem2${i}`} className="flex items-center justify-between mb-4 last:mb-0">
                  <div className="h-[3.75rem] relative flex items-center justify-center w-[7.25rem]">
                    <div style={{ color: v.color }} className={classNames('z-10 relative font-semibold mb-3')}>
                      {v.title}
                    </div>
                    <SvgPentagon className="absolute top-0 left-0 w-full" fill={v.bgColor} />
                  </div>
                  <div className="w-[21.25rem] mt">{v.listText}</div>
                  <div className="w-[18.375rem] mt">{v.resultText}</div>
                  <div className="h-[3.375rem] scale-[0.3] mt-[-2.55rem] mr-[-5rem] ml-[-8rem]">
                    <ProductQrcode qrcodeDisable={true} className="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
function CardTabsItem3() {
  const data = [
    {
      title: '绿色能源转型',
      text: '使用绿色能源是企业和产品减碳效应最强、也是最为直接和根本的方式。AICP整合全方位的绿色能源转型方案，包括绿色电力接入、工业园区支持、能源管理方案等。',
    },
    {
      title: '绿色金融',
      text: '基于您的减碳活动与行为，尤其是那些经由AICP平台完成并受认证的项目，您有机会享受特定的绿色金融支持。AICP计划与金融机构持续合作，发挥平台优势以引入更多适合汽车行业的绿金资源。',
    },
    {
      title: '碳信用资产与交易',
      text: '碳信用（Carbon Credit）资产及其交易作为全球应对气候变化各类框架中的核心市场机制，目前已经形成一个规模巨大的市场，未来还会继续扩大。购买碳信用来实现碳抵销是实现碳中和的重要手段之一。您的减碳活动也可在满足条件时被认定为一项碳资产。',
    },
  ];
  return (
    <div>
      <div></div>
      <ul className="p-8 bg-white rounded-2xl">
        {data.map((v, i) => {
          return (
            <li key={`cardTabsItem3${i}`} className="mb-6 last:mb-0">
              <h5 className="mb-3 text-2xl font-semibold mo:text-xl">{v.title}</h5>
              <p>{v.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function CardTabs() {
  const [selected, setSelected] = useState(-1);
  const tabsItemComponent = [
    <CardTabsItem1 key={`CardTabsItem1`} />,
    <CardTabsItem2 key={`CardTabsItem2`} />,
    <CardTabsItem3 key={`CardTabsItem3`} />,
  ];

  const isMobile = useIsMobile();
  const tabsList = [
    {
      title: '培训与解决方案',
      icon: <SvgTeacher className="w-[5rem] mo:h-[3.75rem]" />,
      text: 'AICP组织行业领域内的专家，帮助用户在着手实施双碳活动之前解决疑难、明确方向。',
      items: [{ text: '双碳与数字化培训' }, { text: '目标设定与实施规划' }, { text: '双碳解决方案&咨询' }],
    },
    {
      title: '双碳实施与碳标签',
      icon: <SvgCTag className="w-[5rem] mo:h-[3.75rem]" />,
      text: '从碳核查到碳中和，AICP提供明确的双碳路径等待您行动。AIAG碳标签将见证您的努力。',
      items: [{ text: '公司碳核查' }, { text: '产品碳足迹' }, { text: '碳减排' }, { text: '碳中和' }],
    },
    {
      title: '市场化双碳',
      icon: <SvgMarket className="w-[5rem] mo:h-[3.75rem]" />,
      text: 'AICP的另一大职责是帮助汽车行业的用户寻找和匹配其双碳活动的市场化资源，并积极提供相关支持方案。',
      items: [{ text: '绿色能源转型' }, { text: '绿色金融' }, { text: '碳信用资产与交易' }],
    },
  ];

  return (
    <div className="flex justify-center w-full mo:px-5">
      <a href="#" id="secondView" />
      <div
        className={`flex text-lg mo:text-base flex-shrink-0 max-w-[75rem] mo:max-w-auto mo:px-0 pt-10 pb-5 px-5  flex-col w-full mo:flex-col mo:mt-11 mo:mb-0`}
      >
        <ul className="flex justify-between w-full gap-5 pb-8 mo:flex-col mo:pb-0">
          {tabsList.map((v, i) => {
            return (
              <li key={`tabsList${i}`} className={classNames('w-0 flex-1 flex mo:w-full mo:flex-col')}>
                <div
                  className={classNames(
                    ' mo:w-full relative flex flex-col justify-between bg-white p-5 rounded-2xl border-2',
                    i === selected ? 'border-green-2' : 'border-transparent',
                  )}
                >
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      {/*<div className="w-[5rem] h-[5rem] border border-green-2">*/}
                      {/*</div>*/}
                      {v.icon}
                      <span className="flex-1 pl-5 mt-1 text-2xl font-semibold mo:text-xl">{v.title}</span>
                    </div>
                    <p className="mt-5 h-[5rem]">{v.text}</p>
                    <div className="flex flex-col items-start mt-6 font-semibold">
                      {v.items.map((item, itemIndex) => {
                        return (
                          <div key={`items${itemIndex}`} className="pb-1 mb-5 border-b-2 border-green-2 last:mb-0">
                            {item.text}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <a href="#" id={`item${i}`} />
                  <Btn
                    className="!text-2xl !h-[50px] mt-8"
                    onClick={() => {
                      setSelected(i);
                      setTimeout(() => scrollToAnchor(`item${i}`), 100);
                    }}
                    size="large"
                    children="了解更多"
                  />
                  {i === selected && (
                    <div className="h-5 w-5 bg-white border-b-2 border-r-2 border-green-2 absolute bottom-[-0.71rem] left-[50%] ml-[-0.625rem] rotate-45"></div>
                  )}
                </div>
                {isMobile && selected === i && <div className="mb-10 mo:mb-5">{tabsItemComponent[selected]}</div>}
              </li>
            );
          })}
        </ul>
        {!isMobile && selected > -1 && <div className="mb-10 mo:mb-5">{tabsItemComponent[selected]}</div>}
      </div>
    </div>
  );
}

export function Home() {
  const { user } = useUser();

  useEffect(() => {
    setLocale('zh-CN');
  }, []);
  return (
    <HomeHeaderLayout>
      <div className={`flex flex-col flex-shrink-0 mo:items-center mo:h-[37.25rem] w-full `}>
        <div className={`max-w-[75rem] h-[42.875rem] px-5 w-full mx-auto`}>
          <div className="text-[2rem] text-white font-semibold w-[37.25rem] mt-36 mo:text-[1.75rem] mo:leading-normal mo:text-center mo:w-full mo:mt-[5.375rem]">
            {/*{t(*/}
            {/*  "AICP is the global, industry-level platform for OEMs and suppliers to manage, track and display their carbon footprint data under the AIAG Carbon Initiative."*/}
            {/*)}*/}
            AICP是全球性的行业级碳服务平台，帮助主机厂与供应商在AIAG碳倡议框架下管理双碳活动、展示减碳成果。
          </div>
          <button
            onClick={() => scrollToAnchor('secondView')}
            className="mt-[3.75rem] w-[13.75rem] rounded-lg bg-white whitespace-nowrap text-green-2 text-2xl font-medium px-[1.9375rem] py-3 mo:mt-[8.0625rem] mo:text-lg mo:px-[3.125rem]  mo:w-full"
          >
            {/*{`${t("Learn More")} >`}*/}
            了解AICP服务
          </button>
          <WrapLink
            to={user ? '/main/tools' : '/login'}
            reloadDocument={false}
            className=" inline-block ml-5 mo:ml-0 mt-[3.75rem] text-center w-[13.75rem] rounded-lg bg-white whitespace-nowrap text-green-2 text-2xl font-medium px-[1.9375rem] py-3 mo:mt-5 mo:text-lg mo:px-[3.125rem] mo:w-full"
            children={'登入AICP账户'}
          />
        </div>
      </div>
      <CardTabs />
      <Card />
    </HomeHeaderLayout>
  );
}

export default Home;
