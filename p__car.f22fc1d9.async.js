"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[1154],{53765:function(ae,T,s){s.d(T,{DJ:function(){return re},fo:function(){return J},h4:function(){return Y},to:function(){return W}});var K=s(86378),h=s.n(K),m=s(28488),A=s.n(m),z=s(58357),x=s.n(z),I=s(71977),p=s.n(I),v=s(30577),i=s.n(v),f=s(1629),e=s(6429),Q=s(84875),S=s.n(Q),P=s(50959),Z=s(9596),u=s(15732),b=s(33665),w=s(1487),L=s(49372),B=s(9441),N=s(89850),E=s(35016),y=s(21262),H=s(57681),l=s(11527),ne=["children","className","tits","showQuery","isManager","nopx","menus"],G=["children","className","tits"];function J(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],R=(0,b.dD)(),U=(0,b.aF)(),j=U.user,F=U.setUser,C=(0,E.useLocation)(),M=C.pathname,a=(0,E.useNavigate)(),t=(0,B.N)(),r=t.t,n=t.locale,c=n;return(0,P.useMemo)(function(){var o=[];return o.push({icon:(0,l.jsx)(y.m6D,{}),text:r("AICP Home"),to:"/"}),j&&!d.find(function(_){return _.to===M})&&o.push({icon:(0,l.jsx)(H.Nhi,{}),text:(0,N.Oc)(r("AICP Digital3 Carbon System")),to:L.JK[0].to}),R&&j&&d.map(function(_){return{icon:(0,l.jsx)(_.icon,{}),text:r(_.txt),to:_.to,selected:M===_.to}}).forEach(function(_){return o.push(_)}),o.push({icon:(0,l.jsx)(f.BB,{}),text:r("Document"),to:"https://docs.gtech.world/",onClick:function(){a("https://docs.gtech.world/")}}),o.push({icon:j?(0,l.jsx)(y.xqh,{}):(0,l.jsx)(y._fJ,{}),text:r(j?"Log Out":"Log In"),to:j?void 0:"/login",onClick:function(){a("/"),F(void 0)}}),o},[j,R,M,r,c])}function W(){var d=(0,P.useState)(0),R=i()(d,2),U=R[0],j=R[1];return(0,P.useEffect)(function(){var F=function(){var a=p()(x()().mark(function t(){var r,n;return x()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:r=2e3;case 1:return o.next=4,(0,N._v)(100);case 4:if(r-=100,n=document.getElementById("app_header"),!n){o.next=8;break}return o.abrupt("return",n);case 8:if(!(r<=0)){o.next=10;break}return o.abrupt("return",void 0);case 10:o.next=1;break;case 12:case"end":return o.stop()}},t)}));return function(){return a.apply(this,arguments)}}(),C,M;return F().then(function(a){if(a){var t=function(){a&&j(a.getBoundingClientRect().height)};a&&j(a.clientHeight),a&&(C=new ResizeObserver(t),C.observe(a),t())}}),function(){C&&M&&C.unobserve(M)}},[]),U}function Y(d){var R=d.children,U=d.className,j=d.tits,F=d.showQuery,C=d.isManager,M=d.nopx,a=M===void 0?!1:M,t=d.menus,r=A()(d,ne),n=(0,B.N)(),c=n.t,o=j||c("Automotive Industry Carbon Platform")||"",_=(0,P.useMemo)(function(){return(0,N.pT)(o)},[o]),D=(0,E.useNavigate)(),k=J(t),V=(0,b.xB)(),$=V.last_input_vin,ie=V.setLastInputVin,le=(0,P.useState)($),ee=i()(le,2),X=ee[0],se=ee[1],te=(0,P.useCallback)(function(O){se(O.target.value||""),ie(O.target.value)},[]),q=(0,b.h3)(),g=(0,P.useState)(0),me=i()(g,2),ce=me[0],de=me[1];(0,P.useEffect)(function(){var O=function(){de(window.innerWidth)};return de(window.innerWidth),window.addEventListener("resize",O),function(){window.removeEventListener("resize",O)}},[]);var ue=function(){if(!X)return q("Please input VIN Code");D("pcf?vin=".concat(X))};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",h()(h()({id:"app_header",className:S()(`w-full relative z-[3] max-w-[90rem] mx-auto  text-white  flex items-center top-0  h-[4.25rem]
          `.concat(!a&&(ce>1200&&ce<=1280?"px-[3%]":"px-[7.5rem]"),`
          `),U)},r),{},{children:[C?(0,l.jsxs)("div",{className:"flex items-center cursor-pointer ml-[-1rem] mo:ml-0",onClick:function(){return D("/")},children:[(0,l.jsx)(f.yc,{className:"h-[2.275rem] mo:h-[2rem]"}),(0,l.jsx)(f.lF,{className:"h-[1.5rem] mt-2.5 ml-3 mo:h-[1.1rem] mo:mt-3"})]}):(0,l.jsxs)("div",{onClick:function(){return D("/")},className:"flex items-center cursor-pointer",children:[(0,l.jsx)(f.yc,{className:"h-9 mo:h-[1.75rem]"}),(0,l.jsx)("div",{className:S()("flex flex-col ml-4 text-base leading-snug mo:text-[.8rem] mo:ml-[.8rem]",{}),children:_.map(function(O,oe){return(0,l.jsx)("span",{className:"whitespace-nowrap",dangerouslySetInnerHTML:{__html:(0,N.Oc)(O)}},"tit_".concat(oe))})})]}),(0,l.jsx)("div",{className:"flex-1"}),F&&(0,l.jsxs)("div",{className:"relative mr-4 text-lg text-white mo:hidden",children:[(0,l.jsx)("input",{style:{border:"2px solid #fff"},className:"w-[17.5rem] h-[2.25rem] rounded-sm outline-none bg-transparent pl-10 pr-4",value:X,maxLength:24,onChange:te,onKeyDown:function(oe){return oe.code==="Enter"&&ue()}}),(0,l.jsx)(y.jRj,{className:"text-[1.75rem] top-1 left-2 absolute cursor-pointer",onClick:ue})]}),(0,l.jsx)(w.R,{menus:k,children:(0,l.jsx)("button",{className:"text-[2rem] mo:text-2xl",children:(0,l.jsx)(Z.otZ,{})})})]}))})}function re(d){var R=d.children,U=d.className,j=d.tits,F=j===void 0?["Automotive Industry","Carbon Platform"]:j,C=A()(d,G),M=(0,e.U)(),a=J();return(0,l.jsxs)("div",h()(h()({id:"app_header",className:S()("sticky top-0 z-[3] w-full text-white flex items-center p-4 bg-green-2",U)},C),{},{children:[(0,l.jsx)("button",{className:"text-[2rem]",onClick:M,children:(0,l.jsx)(u.u1R,{})}),(0,l.jsx)("div",{className:"flex-1"}),(0,l.jsx)(f.yc,{className:"h-[1.75rem]"}),(0,l.jsx)("div",{className:"flex-1"}),(0,l.jsx)(w.R,{menus:a,children:(0,l.jsx)("button",{className:"text-2xl",children:(0,l.jsx)(Z.otZ,{})})})]}))}},27564:function(ae,T,s){s.d(T,{T$:function(){return P},T8:function(){return S}});var K=s(86378),h=s.n(K),m=s(28488),A=s.n(m),z=s(84875),x=s.n(z),I=s(33665),p=s(53765),v=s(92463),i=s(11527),f=["className","children"],e=["className","tits","isManager","nopx","children"],Q=null;function S(u){var b=u.className,w=u.children,L=A()(u,f),B=(0,I.dD)();return(0,i.jsxs)("div",{className:"relative flex flex-col flex-1 w-full min-h-fit bg-gray-16 ",children:[B?(0,i.jsxs)("div",{className:"absolute z-0 top-0 w-full h-[43rem] overflow-hidden bg-green-2 ",children:[(0,i.jsx)("img",{className:"absolute bottom-0 right-0 object-cover w-full",src:"/home-bg-r.jpg"}),(0,i.jsx)("div",{className:"w-full h-full absolute ssm:top-[calc(21.5rem_-_75vw)]",style:{background:"linear-gradient(180deg, #29953A 48.84%, rgba(34, 122, 48, 0) 96.76%)"}})]}):(0,i.jsxs)("div",{className:"absolute z-0 top-0 w-full h-[48.75rem] bg-green-2 overflow-hidden ",children:[(0,i.jsx)("img",{className:"absolute top-0 right-0 object-cover h-full",src:"/home-bg-r.jpg"}),(0,i.jsx)("div",{className:"w-full h-full absolute lg:left-[calc(50%_-_45rem)]",style:{background:"linear-gradient(182.16deg, #000000 -4.66%, rgba(0, 0, 0, 0) 17.13%)",transform:"matrix(-1, 0, 0, 1, 0, 0)"}}),(0,i.jsx)("div",{className:"w-full h-full absolute lg:left-[calc(50%_-_45rem)]",style:{background:"linear-gradient(270deg, #29953A 38.28%, rgba(34, 122, 48, 0) 77.8%)",transform:"matrix(-1, 0, 0, 1, 0, 0)"}})]}),(0,i.jsx)(p.h4,{className:"h-[6.75rem] mo:h-[4.25rem] mo:sticky mo:bg-white mo:text-green-2 mo:p-4"}),(0,i.jsx)("div",h()(h()({className:x()("z-[2] flex-1 relative w-full mx-auto mo:mx-0 mo:flex mo:flex-col",b)},L),{},{children:w}))]})}function P(u){var b=u.className,w=u.tits,L=u.isManager,B=u.nopx,N=u.children,E=A()(u,e),y=(0,I.dD)(),H=(0,v.R)();return(0,i.jsxs)("div",{className:"relative flex flex-col flex-1 w-full min-h-fit",children:[y?(0,i.jsx)(p.DJ,{}):(0,i.jsx)(p.h4,{nopx:B,tits:w,isManager:L,style:{top:"".concat(H,"px")},className:"!sticky px-[3.125rem] py-4 !max-w-none bg-green-2"}),(0,i.jsx)("div",h()(h()({className:x()("z-[2] flex-1 relative w-full py-6 px-[3.125rem] mx-auto mo:px-5",b)},E),{},{children:N}))]})}function Z(u){var b=u.className,w=u.children,L=u.showQuery,B=L===void 0?!0:L,N=u.menus,E=N===void 0?[]:N,y=_objectWithoutProperties(u,Q),H=useHeaderTipHeight();return _jsxs("div",{className:"relative flex flex-col flex-1 w-full min-h-fit bg-gray-16",children:[_jsx(Header,{menus:E,isManager:!0,showQuery:B,style:{top:"".concat(H,"px")},className:"!sticky px-[3.125rem] py-4 !max-w-none bg-green-2 mo:px-4 mo:h-[4.25rem]"}),_jsx("div",_objectSpread(_objectSpread({className:classNames("z-[2] flex-1 w-full",b)},y),{},{children:w}))]})}},33875:function(ae,T,s){s.d(T,{E:function(){return A},K:function(){return z}});var K=s(84875),h=s.n(K),m=s(11527);function A(x){var I=x.value,p=x.bg,v=p===void 0?"#dddddd":p,i=x.color,f=i===void 0?"#29953A":i,e=x.className;return(0,m.jsx)("div",{className:h()(e,"w-full h-[10px]"),style:{background:v},children:(0,m.jsx)("div",{style:{width:"".concat(I,"%"),transition:"width 200ms ease",background:f},className:"h-full"})})}function z(x){var I=x.index,p=x.full,v=x.bg,i=v===void 0?"#dddddd":v,f=x.color,e=f===void 0?"#29953A":f,Q=x.className;return(0,m.jsx)("div",{className:h()(Q,"w-full h-[10px]"),style:{background:i},children:(0,m.jsx)("div",{style:{marginLeft:p?"0":"".concat(I*25,"%"),width:p?"100%":"25%",background:e},className:"h-full"})})}},6429:function(ae,T,s){s.d(T,{U:function(){return h}});var K=s(35016);function h(){return function(){K.history.back()}}},57725:function(ae,T,s){s.r(T),s.d(T,{default:function(){return M}});var K=s(30577),h=s.n(K),m=s(1629),A=s(33665),z=s(86378),x=s.n(z),I=s(28488),p=s.n(I),v=s(9441),i=s(84875),f=s.n(i),e=s(11527),Q=["className","children"];function S(a){var t=a.className,r=a.children,n=r===void 0?"Data not available for this input.":r,c=p()(a,Q),o=(0,v.N)(),_=o.t,D=typeof n=="string"?_(n):n;return(0,e.jsxs)("div",x()(x()({},c),{},{className:f()(t,"w-full h-full text-center text-lg text-black flex flex-col items-center"),children:[(0,e.jsx)("div",{className:"flex-1"}),D,(0,e.jsx)("div",{className:"flex-[2]"})]}))}var P=s(27564),Z=s(9107),u=s(33875),b=s(49372),w=s(81349),L=s(75974),B=s(6429),N=s(16369),E=s(89850),y=s(50959),H=s(1950),l=s(99592),ne=s(35016);function G(a){return(0,e.jsxs)("div",{className:f()("w-full text-base whitespace-normal leading-[1.8rem] mo:text-[.9375rem] mo:leading-[1.6875rem]",{"text-green-2":a.link,"text-gray-6":!a.link}),children:[(0,e.jsxs)("span",{className:"font-bold text-black",children:[a.label,":"]})," ",a.link?(0,e.jsx)(ne.Link,{to:a.link,target:"_blank",rel:"noreferrer",children:a.text}):a.text]})}function J(a){var t=a.data.sbt,r=(0,v.N)(),n=r.t;return(0,e.jsxs)("div",{className:"w-full",children:[(0,e.jsx)(G,{label:n("Label No."),text:t.sbtTokenId}),(0,e.jsx)(G,{label:n("Vehicle Identifier Number(VIN)"),text:t.serialNumber}),(0,e.jsx)(G,{label:n("Vehicle Model"),text:t.productName}),(0,e.jsx)(G,{label:n("Label Printed Date"),text:(0,E.HE)(t.sbtMintTimestamp)}),(0,e.jsx)(G,{label:n("Label Certified by"),text:n("AIAG Automotive Carbon Advisory Commmitee"),link:"https://aiag.org.cn/ACAC/Automotive-Carbon-Advisory-Committee"}),(0,e.jsx)(G,{label:n("Label SBT Address"),text:n("View on blockchain explorer"),link:"/blockchain?tokenId="+t.sbtTokenId})]})}function W(a){var t=a.icon,r=a.value,n=a.sub;return(0,e.jsxs)("div",{className:"flex flex-col items-center w-[9.125rem] mo:w-[8.75rem]",children:[(0,e.jsx)("div",{className:"text-green-2 h-[2.825rem]",children:t}),(0,e.jsx)("div",{className:"text-2xl font-bold leading-normal",children:r}),(0,e.jsx)("div",{className:"text-base text-center whitespace-pre-wrap leading-normal mo:text-[.9375rem]",children:n})]})}function Y(a){var t=a.data,r=a.index,n=(0,v.N)(),c=n.t;return(0,e.jsxs)("div",{className:f()("flex flex-col w-0 flex-1 h-[11.5rem] p-5 bg-white rounded-lg text-black mo:h-auto mo:w-full mo:mt-5"),children:[(0,e.jsx)(u.K,{index:r,className:"flex-shrink-0 mb-5"}),(0,e.jsx)("div",{className:"w-full text-base font-bold whitespace-normal",children:c(t.name)}),(0,e.jsx)("div",{className:"w-full whitespace-nowrap text-sm mt-[.625rem]",children:"".concat((0,E.HN)(t.carbon_emission)," / ").concat(t.progress,"%")}),(0,e.jsx)("div",{className:"flex-1"}),(0,e.jsx)("div",{className:"flex items-center mt-3",children:t.verified?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(H.GcF,{className:"mr-3 text-2xl"}),(0,e.jsx)("div",{className:"text-sm text-green-2",children:c("verified")})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(H.qCw,{className:"mr-3 text-2xl"}),(0,e.jsx)("div",{className:"text-sm text-orange-169",children:c("estimated")})]})})]})}function re(a){var t=(0,A.dD)(),r=a.data;return(0,e.jsxs)("div",{className:"flex items-center w-full h-auto mt-5 bg-white rounded-lg mo:flex-col mo:mt-0 mo:bg-transparent",children:[(0,e.jsx)(Y,{data:r[0],index:0}),!t&&(0,e.jsx)(m.ol,{className:"text-green-2 text-[1.875rem] mx-[.9375rem] flex-shrink-0"}),(0,e.jsx)(Y,{data:r[1],index:1}),!t&&(0,e.jsx)(m.ol,{className:"text-green-2 text-[1.875rem] mx-[.9375rem] flex-shrink-0"}),(0,e.jsx)(Y,{data:r[2],index:2}),!t&&(0,e.jsx)(m.ol,{className:"text-green-2 text-[1.875rem] mx-[.9375rem] flex-shrink-0"}),(0,e.jsx)(Y,{data:r[3],index:3})]})}function d(a){var t=a.type,r=a.sbt,n=(0,v.N)(),c=n.t,o=(0,y.useMemo)(function(){return t===1?(0,E.Oc)(c("The AIAG Digital3 Carbon Trust Label is an industry-level certification framework for every vehicle produced under {{value}}. The Trust Label guarantees that any raw data behind the label is verified and recorded in an immutable manner for the ultimate transparency and traceability for the vehicle\u2019s carbon performance.").replace("{{value}}",'<a class="text-green-2 cursor-pointer" target="_blank" href="https://aiag.org.cn/ACAC/Automotive-Carbon-Advisory-Committee" rel="noreferrer">'.concat(c("AIAG\u2019s carbon reduction / Net Zero 2050 initiatives"),"</a>"))):t===2?c("AICP is the global, industry-level platform for long-term carbon performance traceability and visibility under the 2050 Net Zero commitment. The data on this label is supported by the Automotive Industry Carbon Platform. Click {{value}} to query information about this vehicle.").replace("{{value}}",'<a class="text-green-2 cursor-pointer"  href="/openquery" rel="noreferrer">'.concat(c("here"),"</a>")):c("A Soul-bounded Token (a special type of NFT that is not allowed to transfer after created) has been generated on blockchain to make sure the information in this label is immutable and will be maintain for traceability forever. Check {{value}} to verify the SBT on blockchain explorer.").replace("{{value}}",'<a class="text-green-2 cursor-pointer" target="_blank" href="/blockchain?tokenId=1000000" rel="noreferrer">'.concat(c("here"),"</a>"))},[t,r,c]);return(0,e.jsxs)("div",{className:"flex-1 w-0 p-5 bg-white rounded-lg flex flex-col items-center [&:nth-child(n+2)]:ml-5 mo:!ml-0 mo:w-full mo:mt-5",children:[t===1?(0,e.jsx)(m.M6,{className:"text-[5.375rem] w-[5.375rem] mt-[.625rem] mb-[1.875rem]"}):t===2?(0,e.jsx)(m.S8,{className:"text-[5.375rem] w-[5.375rem] mt-[.625rem] mb-[1.875rem]"}):(0,e.jsx)("img",{src:"/nft.png",className:"w-[5.8125rem] mt-[.375rem] mb-[1.625rem]"}),(0,e.jsx)("div",{className:"text-lg font-bold mb-[.9375rem]",dangerouslySetInnerHTML:{__html:(0,E.Oc)(c(t===1?"What is AIAG Digital3 Carbon Trust Label?":t===2?"The Raw Data Behind Trust Label":"Immutability and Traceability"))}}),(0,e.jsx)("div",{className:"text-[.9375rem] font-medium text-center",dangerouslySetInnerHTML:{__html:o}})]})}function R(a){var t=a.sbt;return(0,e.jsxs)("div",{className:"flex w-full mt-5 mo:block mo:mt-0",children:[(0,e.jsx)(d,{type:1,sbt:t}),(0,e.jsx)(d,{type:3,sbt:t})]})}function U(a){var t=(0,v.N)(),r=t.t,n=a.data,c=(0,l.Z)(!1),o=h()(c,2),_=o[0],D=o[1],k=(0,L.E)(),V=(0,y.useCallback)(function(){var $;D(!0),($=k.current)===null||$===void 0||$.scrollIntoView({block:"start"})},[]);return(0,e.jsxs)("div",{className:"w-full p-5",ref:k,children:[(0,e.jsxs)("div",{className:"flex px-[.9375rem] mt-5 py-5 rounded-lg bg-white",onClick:function(){return D(!1)},children:[(0,e.jsx)(m.M6,{className:"mr-[.625rem] max-w-[5.3rem] text-[5.375rem]"}),(0,e.jsxs)("div",{className:"flex flex-col flex-1 leading-normal",children:[(0,e.jsx)("div",{className:"w-full text-lg font-bold",children:r("Product Carbon Footprint Certified")}),(0,e.jsx)("span",{className:"text-sm font-medium",children:r("by AIAG")})]})]}),_?(0,e.jsxs)("div",{className:"w-full",children:[(0,e.jsxs)("div",{className:"w-full p-5 mt-5 bg-white rounded-lg",children:[(0,e.jsx)("div",{className:"text-lg font-bold mb-[.9375rem]",children:r("Label Information")}),(0,e.jsx)(J,{data:n})]}),(0,e.jsx)(R,{sbt:n.sbt})]}):(0,e.jsxs)("div",{className:"w-full",children:[(0,e.jsxs)("div",{className:"flex items-center w-full p-4 mt-5 bg-white rounded-lg",children:[(0,e.jsx)("img",{className:"object-contain w-[8.75rem]",src:n.sbt.imageUrl||b.ES}),(0,e.jsxs)("div",{className:"flex-1 w-0 ml-5 whitespace-normal",children:[(0,e.jsx)("div",{className:"text-lg font-semibold",style:{WebkitLineClamp:2,display:"-webkit-box",WebkitBoxOrient:"vertical"},children:n.sbt.productName}),(0,e.jsx)("div",{className:"text-base",children:"VIN #111923789123"}),(0,e.jsx)("button",{className:"mt-[.625rem] text-green-2 text-base font-semibold",onClick:V,children:r("Check Details")})]})]}),(0,e.jsxs)("div",{className:"grid p-5 mt-5 bg-white rounded-lg gap-y-8",style:{gridTemplateColumns:"repeat(5, 1fr)"},children:[(0,e.jsx)("div",{}),(0,e.jsx)(W,{icon:(0,e.jsx)(m.mc,{className:"text-[2.9644rem]"}),value:n.tonnes,sub:r("tonnes of CO2e Cradle-to-Gate emission")}),(0,e.jsx)("div",{}),(0,e.jsx)(W,{icon:(0,e.jsx)(m.hn,{className:"text-[2.9506rem] my-[4px]"}),value:n.trees,sub:r("trees (8-yr old) to absorbe for one year")}),(0,e.jsx)("div",{}),(0,e.jsx)("div",{}),(0,e.jsx)(W,{icon:(0,e.jsx)(m.Yw,{className:"text-[2.8213rem] mt-[4px]"}),value:n.recyclable,sub:r("of the materials used in this vehicle is recyclable")}),(0,e.jsx)("div",{}),(0,e.jsx)(W,{icon:(0,e.jsx)(m.lG,{className:"text-[3.51rem] my-[4px]"}),value:n.use,sub:r("tonnes of CO2e emission estimated from use")}),(0,e.jsx)("div",{})]}),(0,e.jsx)(re,{data:n.sbtPhase}),(0,e.jsx)("div",{className:"text-green-2 cursor-pointer text-[.9375rem] my-6 mb-3 text-center",onClick:V,dangerouslySetInnerHTML:{__html:(0,E.Oc)(r("Learn More about AIAG\u2019s Digital3 Carbon Trust Label"))}})]})]})}function j(a){var t=a.data,r=(0,v.N)(),n=r.t;return(0,e.jsxs)("div",{className:"w-full p-5 max-w-[1480px] mx-auto",children:[(0,e.jsxs)("div",{className:"text-2xl font-bold leading-normal ",children:[n("Product Carbon Footprint Certified")," ",(0,e.jsx)("span",{className:"text-base font-medium",children:n("by AIAG")})]}),(0,e.jsxs)("div",{className:"flex",children:[(0,e.jsxs)("div",{className:"flex items-center flex-1 w-0 p-5 mt-5 mr-5 bg-white rounded-lg",children:[(0,e.jsx)("img",{className:"object-contain w-[16.25rem] h-[12.375rem] mr-5 rounded-lg border-black border border-solid",src:t.sbt.imageUrl||b.ES}),(0,e.jsx)("div",{className:"flex-1 w-0",children:(0,e.jsx)(J,{data:t})})]}),(0,e.jsxs)("div",{className:"flex justify-between flex-1 w-0 p-5 pt-12 mt-5 bg-white rounded-lg",children:[(0,e.jsx)(W,{icon:(0,e.jsx)(m.mc,{className:"text-[2.9644rem]"}),value:t.tonnes,sub:n("tonnes of CO2e Cradle-to-Gate emission")}),(0,e.jsx)(W,{icon:(0,e.jsx)(m.hn,{className:"text-[2.9506rem] my-1"}),value:t.trees,sub:n("trees (8-yr old) to absorbe for one year")}),(0,e.jsx)(W,{icon:(0,e.jsx)(m.Yw,{className:"text-[2.8213rem] my-[1px]"}),value:t.recyclable,sub:n("of the materials used in this vehicle is recyclable")}),(0,e.jsx)(W,{icon:(0,e.jsx)(m.lG,{className:"text-[3.51rem] my-1"}),value:t.use,sub:n("tonnes of CO2e emission estimated from use")})]})]}),(0,e.jsx)(re,{data:t.sbtPhase}),(0,e.jsx)(R,{sbt:t.sbt})]})}function F(){var a=(0,ne.useSearchParams)(),t=h()(a,1),r=t[0],n=r.get("vin"),c=(0,A.dD)(),o=(0,w.k)((0,N.Pf)(function(){return Promise.all([(0,N.Xg)(n),(0,N.aA)(n)])},[n]),[n]),_=o.value,D=o.loading,k=(0,y.useMemo)(function(){if(_){var le=h()(_,2),ee=le[0],X=le[1];if(!(!ee||!X)){var se=(0,b.GF)(),te={};se.forEach(function(g){return te[g.name]=g});var q=0;return X.forEach(function(g){te[g.phase]&&(te[g.phase].carbon_emission+=g.ghgEmission,q+=g.ghgEmission)}),se.forEach(function(g){g.progress=q>0?Math.round(g.carbon_emission/q*100):0,g.verified=g.carbon_emission>0&&g.name!==b.RG[b.RG.length-1]}),{sbt:ee,sbtPhase:se,totalEmission:q,tonnes:"19.33",trees:"773",recyclable:"35%",use:"12.9"}}}},[_]),V=(0,B.U)(),$=(0,v.N)(),ie=$.t;return(0,e.jsx)("div",{className:"flex flex-col flex-1 w-full text-black bg-gray-16 min-h-fit",children:c?(0,e.jsx)(e.Fragment,{children:D?(0,e.jsx)(Z.g,{}):(0,e.jsx)(e.Fragment,{children:k?(0,e.jsx)(U,{data:k}):n?(0,e.jsx)(S,{}):null})}):(0,e.jsx)(P.T$,{className:"!px-7",children:D?(0,e.jsx)(Z.g,{}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"w-full px-5 max-w-[1480px] mx-auto",children:(0,e.jsx)("button",{onClick:V,className:"self-start ml-1",children:"< ".concat(ie("Back"))})}),k?(0,e.jsx)(j,{data:k}):n?(0,e.jsx)(S,{}):null]})})})}var C=null,M=F}}]);