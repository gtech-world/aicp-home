"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8866],{53765:function(Q,N,e){e.d(N,{DJ:function(){return V},fo:function(){return P},h4:function(){return k},to:function(){return w}});var E=e(86378),u=e.n(E),_=e(28488),a=e.n(_),W=e(58357),O=e.n(W),h=e(71977),v=e.n(h),B=e(30577),n=e.n(B),x=e(1629),z=e(6429),t=e(84875),K=e.n(t),A=e(50959),H=e(9596),r=e(15732),b=e(33665),C=e(1487),j=e(49372),d=e(9441),c=e(89850),o=e(35016),l=e(21262),f=e(57681),s=e(11527),T=["children","className","tits","showQuery","isManager","nopx","menus"],I=["children","className","tits"];function P(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],m=(0,b.dD)(),D=(0,b.aF)(),g=D.user,$=D.setUser,F=(0,o.useLocation)(),R=F.pathname,M=(0,o.useNavigate)(),S=(0,d.N)(),y=S.t,G=S.locale,J=G;return(0,A.useMemo)(function(){var p=[];return p.push({icon:(0,s.jsx)(l.m6D,{}),text:y("AICP Home"),to:"/"}),g&&!i.find(function(L){return L.to===R})&&p.push({icon:(0,s.jsx)(f.Nhi,{}),text:(0,c.Oc)(y("AICP Digital3 Carbon System")),to:j.JK[0].to}),m&&g&&i.map(function(L){return{icon:(0,s.jsx)(L.icon,{}),text:y(L.txt),to:L.to,selected:R===L.to}}).forEach(function(L){return p.push(L)}),p.push({icon:(0,s.jsx)(x.BB,{}),text:y("Document"),to:"https://docs.gtech.world/",onClick:function(){M("https://docs.gtech.world/")}}),p.push({icon:g?(0,s.jsx)(l.xqh,{}):(0,s.jsx)(l._fJ,{}),text:y(g?"Log Out":"Log In"),to:g?void 0:"/login",onClick:function(){M("/"),$(void 0)}}),p},[g,m,R,y,J])}function w(){var i=(0,A.useState)(0),m=n()(i,2),D=m[0],g=m[1];return(0,A.useEffect)(function(){var $=function(){var M=v()(O()().mark(function S(){var y,G;return O()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:y=2e3;case 1:return p.next=4,(0,c._v)(100);case 4:if(y-=100,G=document.getElementById("app_header"),!G){p.next=8;break}return p.abrupt("return",G);case 8:if(!(y<=0)){p.next=10;break}return p.abrupt("return",void 0);case 10:p.next=1;break;case 12:case"end":return p.stop()}},S)}));return function(){return M.apply(this,arguments)}}(),F,R;return $().then(function(M){if(M){var S=function(){M&&g(M.getBoundingClientRect().height)};M&&g(M.clientHeight),M&&(F=new ResizeObserver(S),F.observe(M),S())}}),function(){F&&R&&F.unobserve(R)}},[]),D}function k(i){var m=i.children,D=i.className,g=i.tits,$=i.showQuery,F=i.isManager,R=i.nopx,M=R===void 0?!1:R,S=i.menus,y=a()(i,T),G=(0,d.N)(),J=G.t,p=g||J("Automotive Industry Carbon Platform")||"",L=(0,A.useMemo)(function(){return(0,c.pT)(p)},[p]),X=(0,o.useNavigate)(),le=P(S),q=(0,b.xB)(),ae=q.last_input_vin,oe=q.setLastInputVin,ie=(0,A.useState)(ae),ee=n()(ie,2),Y=ee[0],me=ee[1],ue=(0,A.useCallback)(function(U){me(U.target.value||""),oe(U.target.value)},[]),ce=(0,b.h3)(),de=(0,A.useState)(0),te=n()(de,2),se=te[0],ne=te[1];(0,A.useEffect)(function(){var U=function(){ne(window.innerWidth)};return ne(window.innerWidth),window.addEventListener("resize",U),function(){window.removeEventListener("resize",U)}},[]);var re=function(){if(!Y)return ce("Please input VIN Code");X("pcf?vin=".concat(Y))};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",u()(u()({id:"app_header",className:K()(`w-full relative z-[3] max-w-[90rem] mx-auto  text-white  flex items-center top-0  h-[4.25rem]
          `.concat(!M&&(se>1200&&se<=1280?"px-[3%]":"px-[7.5rem]"),`
          `),D)},y),{},{children:[F?(0,s.jsxs)("div",{className:"flex items-center cursor-pointer ml-[-1rem] mo:ml-0",onClick:function(){return X("/")},children:[(0,s.jsx)(x.yc,{className:"h-[2.275rem] mo:h-[2rem]"}),(0,s.jsx)(x.lF,{className:"h-[1.5rem] mt-2.5 ml-3 mo:h-[1.1rem] mo:mt-3"})]}):(0,s.jsxs)("div",{onClick:function(){return X("/")},className:"flex items-center cursor-pointer",children:[(0,s.jsx)(x.yc,{className:"h-9 mo:h-[1.75rem]"}),(0,s.jsx)("div",{className:K()("flex flex-col ml-4 text-base leading-snug mo:text-[.8rem] mo:ml-[.8rem]",{}),children:L.map(function(U,Z){return(0,s.jsx)("span",{className:"whitespace-nowrap",dangerouslySetInnerHTML:{__html:(0,c.Oc)(U)}},"tit_".concat(Z))})})]}),(0,s.jsx)("div",{className:"flex-1"}),$&&(0,s.jsxs)("div",{className:"relative mr-4 text-lg text-white mo:hidden",children:[(0,s.jsx)("input",{style:{border:"2px solid #fff"},className:"w-[17.5rem] h-[2.25rem] rounded-sm outline-none bg-transparent pl-10 pr-4",value:Y,maxLength:24,onChange:ue,onKeyDown:function(Z){return Z.code==="Enter"&&re()}}),(0,s.jsx)(l.jRj,{className:"text-[1.75rem] top-1 left-2 absolute cursor-pointer",onClick:re})]}),(0,s.jsx)(C.R,{menus:le,children:(0,s.jsx)("button",{className:"text-[2rem] mo:text-2xl",children:(0,s.jsx)(H.otZ,{})})})]}))})}function V(i){var m=i.children,D=i.className,g=i.tits,$=g===void 0?["Automotive Industry","Carbon Platform"]:g,F=a()(i,I),R=(0,z.U)(),M=P();return(0,s.jsxs)("div",u()(u()({id:"app_header",className:K()("sticky top-0 z-[3] w-full text-white flex items-center p-4 bg-green-2",D)},F),{},{children:[(0,s.jsx)("button",{className:"text-[2rem]",onClick:R,children:(0,s.jsx)(r.u1R,{})}),(0,s.jsx)("div",{className:"flex-1"}),(0,s.jsx)(x.yc,{className:"h-[1.75rem]"}),(0,s.jsx)("div",{className:"flex-1"}),(0,s.jsx)(C.R,{menus:M,children:(0,s.jsx)("button",{className:"text-2xl",children:(0,s.jsx)(H.otZ,{})})})]}))}},27564:function(Q,N,e){e.d(N,{T$:function(){return A},T8:function(){return K}});var E=e(86378),u=e.n(E),_=e(28488),a=e.n(_),W=e(84875),O=e.n(W),h=e(33665),v=e(53765),B=e(92463),n=e(11527),x=["className","children"],z=["className","tits","isManager","nopx","children"],t=null;function K(r){var b=r.className,C=r.children,j=a()(r,x),d=(0,h.dD)();return(0,n.jsxs)("div",{className:"relative flex flex-col flex-1 w-full min-h-fit bg-gray-16 ",children:[d?(0,n.jsxs)("div",{className:"absolute z-0 top-0 w-full h-[43rem] overflow-hidden bg-green-2 ",children:[(0,n.jsx)("img",{className:"absolute bottom-0 right-0 object-cover w-full",src:"/home-bg-r.jpg"}),(0,n.jsx)("div",{className:"w-full h-full absolute ssm:top-[calc(21.5rem_-_75vw)]",style:{background:"linear-gradient(180deg, #29953A 48.84%, rgba(34, 122, 48, 0) 96.76%)"}})]}):(0,n.jsxs)("div",{className:"absolute z-0 top-0 w-full h-[48.75rem] bg-green-2 overflow-hidden ",children:[(0,n.jsx)("img",{className:"absolute top-0 right-0 object-cover h-full",src:"/home-bg-r.jpg"}),(0,n.jsx)("div",{className:"w-full h-full absolute lg:left-[calc(50%_-_45rem)]",style:{background:"linear-gradient(182.16deg, #000000 -4.66%, rgba(0, 0, 0, 0) 17.13%)",transform:"matrix(-1, 0, 0, 1, 0, 0)"}}),(0,n.jsx)("div",{className:"w-full h-full absolute lg:left-[calc(50%_-_45rem)]",style:{background:"linear-gradient(270deg, #29953A 38.28%, rgba(34, 122, 48, 0) 77.8%)",transform:"matrix(-1, 0, 0, 1, 0, 0)"}})]}),(0,n.jsx)(v.h4,{className:"h-[6.75rem] mo:h-[4.25rem] mo:sticky mo:bg-white mo:text-green-2 mo:p-4"}),(0,n.jsx)("div",u()(u()({className:O()("z-[2] flex-1 relative w-full mx-auto mo:mx-0 mo:flex mo:flex-col",b)},j),{},{children:C}))]})}function A(r){var b=r.className,C=r.tits,j=r.isManager,d=r.nopx,c=r.children,o=a()(r,z),l=(0,h.dD)(),f=(0,B.R)();return(0,n.jsxs)("div",{className:"relative flex flex-col flex-1 w-full min-h-fit",children:[l?(0,n.jsx)(v.DJ,{}):(0,n.jsx)(v.h4,{nopx:d,tits:C,isManager:j,style:{top:"".concat(f,"px")},className:"!sticky px-[3.125rem] py-4 !max-w-none bg-green-2"}),(0,n.jsx)("div",u()(u()({className:O()("z-[2] flex-1 relative w-full py-6 px-[3.125rem] mx-auto mo:px-5",b)},o),{},{children:c}))]})}function H(r){var b=r.className,C=r.children,j=r.showQuery,d=j===void 0?!0:j,c=r.menus,o=c===void 0?[]:c,l=_objectWithoutProperties(r,t),f=useHeaderTipHeight();return _jsxs("div",{className:"relative flex flex-col flex-1 w-full min-h-fit bg-gray-16",children:[_jsx(Header,{menus:o,isManager:!0,showQuery:d,style:{top:"".concat(f,"px")},className:"!sticky px-[3.125rem] py-4 !max-w-none bg-green-2 mo:px-4 mo:h-[4.25rem]"}),_jsx("div",_objectSpread(_objectSpread({className:classNames("z-[2] flex-1 w-full",b)},l),{},{children:C}))]})}},72121:function(Q,N,e){e.d(N,{SL:function(){return t},u_:function(){return H}});var E=e(86378),u=e.n(E),_=e(28488),a=e.n(_),W=e(1267),O=e(84875),h=e.n(O),v=e(50959),B=e(10422),n=e(21262),x=e(11527),z=["className","title","onClose","outClose","titleClassName","containerClassName","children"],t={current:null};function K(r){var b=r.title,C=r.onClose,j=r.titleClassName,d=r.containerClassName;return(0,x.jsxs)("div",{className:h()("flex items-center justify-between pb-6 mb-6 text-xl font-bold border-b mt-2.5 mx-5",d),children:[(0,x.jsx)("span",{className:h()("max-w-[70%] overflow-hidden text-ellipsis whitespace-nowrap",j),children:b}),(0,x.jsx)(n.q5L,{onClick:function(o){o.stopPropagation(),C&&C()},className:"text-2xl cursor-pointer"})]})}function A(){return _jsx("div",{})}function H(r){var b=r.className,C=r.title,j=r.onClose,d=r.outClose,c=d===void 0?!1:d,o=r.titleClassName,l=r.containerClassName,f=r.children,s=a()(r,z),T=(0,v.useRef)(null),I=(0,W.R)(function(P){P.stopPropagation();var w=T.current&&T.current!==P.target&&T.current.contains(P.target);!w&&c&&j&&j()});return t.current?(0,B.createPortal)((0,x.jsx)("div",u()(u()({},s),{},{ref:T,className:h()("fixed left-0  top-0 w-full h-full overflow-auto z-50 bg-black/25 flex justify-center items-center",b),onClick:I,children:(0,x.jsxs)("div",{id:"mo",ref:T,className:h()("bg-white rounded p-5 min-w-[20rem] min-h-[150] "),children:[(0,x.jsx)(K,{title:C,containerClassName:l,titleClassName:o,onClose:j}),f]})})),t.current):null}},74167:function(Q,N,e){e.d(N,{n:function(){return W}});var E=e(84875),u=e.n(E),_=e(1629),a=e(11527);function W(O){var h=O.qrText,v=O.className,B=O.qrcodeDisable;return(0,a.jsx)("div",{className:u()("",v),children:(0,a.jsx)("div",{className:"p-1 border-[4px] border-green-2 rounded-[2.25rem]",children:(0,a.jsxs)("div",{className:u()("py-2 px-6 rounded-[1.90rem] border-[1.75px] border-green-2 flex justify-center items-center mo:px-3"),children:[(0,a.jsxs)("div",{className:"border-r-[3px] border-green-4 pr-5 mr-5 flex flex-col justify-between h-full",children:[(0,a.jsx)(_.y,{className:"mb-2"}),(0,a.jsx)("img",{className:"w-[6.875rem]",src:"/earth_1.png",alt:""})]}),(0,a.jsxs)("div",{className:"w-[7.125rem] flex flex-col items-center",children:[(0,a.jsx)("p",{className:"text-[0.6875rem] text-center mb-2 leading-[0.945rem] font-semibold mo:leading-[0.865rem]",children:h||"Product Carbon Footprint Certified by AIAG"}),B?(0,a.jsx)(_.E3,{className:"w-[5.75rem]"}):(0,a.jsx)(_.GE,{className:"w-[5.75rem]"})]})]})})})}},91003:function(Q,N,e){e.d(N,{Z:function(){return j}});var E=e(30577),u=e.n(E),_=e(33665),a=e(92463),W=e(72121),O=e(84875),h=e.n(O),v=e(50959),B=e(83033),n=e(11527);function x(){var d=(0,_.pm)(),c=d.current,o=d.toast;if((0,v.useEffect)(function(){if(!c)return function(){};var f=setTimeout(function(){o()},5e3);return function(){clearTimeout(f)}},[c]),!c)return null;var l=c.type==="info"?B.mny:B.LHV;return(0,n.jsx)("div",{className:h()("fixed right-5 top-20 z-[60] "),children:(0,n.jsxs)("div",{className:h()("flex items-center text-sm text-black rounded-lg border-1 py-4 w-full px-5 mo:mx-auto",c.type==="info"?"border-[#32CB9D] bg-green-50":"border-[#EF4C56] bg-rose-50"),children:[(0,n.jsx)(l,{className:h()("text-xl mr-3",c.type==="info"?"text-[#32CB9D]":"text-[#EF4C56]")}),(0,n.jsx)("span",{children:c.msg})]})})}var z=e(75632),t=e(97707),K=e(87595),A=e(6480),H=e(21931),r=e(6610);function b(d){var c=(0,v.useState)((0,_.N2)()),o=u()(c,1),l=o[0];return(0,v.useEffect)(function(){W.SL.current=document.body},[]),(0,n.jsx)(r.J$,{value:{revalidateOnFocus:!1,errorRetryCount:3,fetcher:t.k8},children:(0,n.jsx)(_.g3,{init:l,children:d.children})})}function C(){return(0,n.jsx)(A.u,{className:"z-[999999]  break-all shadow-[0_10px_10px_0_rgba(0,0,0,0.3)] border border-[#eee] max-w-[22.5rem]",style:{backgroundColor:"rgb(255, 255, 255,1)",color:"#222"},id:"tooltip",opacity:1,closeOnScroll:!0,closeOnResize:!0,delayHide:100})}function j(d){return(0,n.jsxs)("div",{suppressHydrationWarning:!0,id:"__app",className:h()("App font-OpenSans relative"),children:[(0,n.jsxs)(b,{children:[(0,n.jsx)(a.X,{}),d.children,(0,n.jsx)(x,{})]}),(0,n.jsx)(C,{})]})}},6429:function(Q,N,e){e.d(N,{U:function(){return u}});var E=e(35016);function u(){return function(){E.history.back()}}},1267:function(Q,N,e){e.d(N,{R:function(){return u}});var E=e(50959);function u(_){var a=(0,E.useRef)(_);return(0,E.useLayoutEffect)(function(){a.current=_}),(0,E.useCallback)(function(){return a.current&&a.current.apply(a,arguments)},[])}},20342:function(Q,N,e){e.r(N),e.d(N,{default:function(){return c}});var E=e(30577),u=e.n(E),_=e(33665),a=e(27564),W=e(74167),O=e(9441),h=e(89850),v=e(1629),B=e(84875),n=e.n(B),x=e(50959),z=e(35016),t=e(11527),K=function(l){var f=l.windowWidth,s=(0,_.aF)(),T=s.user,I=(0,_.dD)(),P=(0,O.N)(),w=P.t,k=P.locale,V=function(D){return D&&D.startsWith("/")},i=[{icon:(0,t.jsx)(v.cL,{className:"h-[5.875rem]"}),to:T?"/carbon/allService":"/login",children:(0,t.jsx)("div",{className:"mx-3",dangerouslySetInnerHTML:{__html:w("{{value}} with authenticated account*").replace("{{value}}",'<span class="font-bold">'.concat(w("Sign in"),"</span>"))}}),btText:w("Enter")},{icon:(0,t.jsx)("img",{src:"/earth.png",className:"w-[6.25rem]"}),to:"https://aiag.org.cn/ACAC/Automotive-Carbon-Advisory-Committee",btText:w("\u4E86\u89E3\u66F4\u591A"),children:"\u4E0EAIAG\u4E00\u8D77\u5EFA\u7B51\u96F6\u78B3\u672A\u6765"}];return(0,t.jsxs)(x.Fragment,{children:[(0,t.jsx)("div",{className:"flex justify-center w-full bg-white",children:(0,t.jsx)("div",{className:"flex text-lg mo:text-base flex-shrink-0 max-w-[90rem] px-[7.5rem] mo:px-5 mo:max-w-auto pt-10 pb-5  flex-col w-full mo:flex-col mo:mt-11 mo:mb-0",children:(0,t.jsx)("ul",{className:"flex justify-between w-full pb-6 mo:flex-col mo:pb-0",children:i.map(function(m,D){return(0,t.jsx)("li",{className:n()("mr-5 flex flex-1 last:mr-0 mo:mr-0 mo:flex-col"),children:(0,t.jsxs)("div",{className:n()(" pt-10 mo:pt-[3.125rem] w-full relative flex flex-col justify-between p-5 rounded-2xl h-[23.25rem] mo:mb-5 border-solid border-black border-[3px] "),children:[(0,t.jsx)("div",{className:"flex flex-col items-center justify-center",children:m.icon}),(0,t.jsx)("div",{className:"text-black mt-16 text-2xl text-center mo:text-lg mo:mt-[3.125rem]",children:m.children}),(0,t.jsx)("div",{className:"flex-1 mo:hidden"}),(0,t.jsx)(z.Link,{to:V(m.to)?m.to:"#",onClick:function(){return!V(m.to)&&window.open(m.to,"_blank")},className:"w-full bg-green-2 rounded-lg text-white text-2xl py-3 mo:mt-[3.75rem] mo:text-lg flex justify-center",children:m.btText})]})},"tabsList".concat(D))})})})}),(0,t.jsx)("div",{className:"flex justify-center w-full bg-white ",children:(0,t.jsxs)("div",{className:"w-full px-[7.5rem] mo:px-5 max-w-[90rem] text-base  mo:pt-0 pb-11 mo:flex-col flex-shrink-0 mo:flex",children:[(0,t.jsxs)("div",{className:"flex mo:mb-10",children:[(0,t.jsx)("span",{children:"*"}),(0,t.jsx)("span",{className:"mo:ml-2",children:"\u4E13\u4E1A\u8D26\u6237\u9762\u5411\u6C7D\u8F66\u4F9B\u5E94\u94FE\u5185\u7684\u4F01\u4E1A\u7EA7\u7528\u6237\u3002\u4E86\u89E3\u66F4\u591A\u5173\u4E8E\u4E13\u4E1A\u8D26\u6237\uFF0C\u8BF7\u8054\u7CFBGTech\uFF08\u90AE\u7BB1\uFF1Ahi@gtech.world\uFF09\u3002"})]}),(0,t.jsxs)("div",{className:"flex justify-between w-full pt-4 mt-16 text-sm border-t border-black mo:flex-col mo:mt-3",children:[(0,t.jsx)("div",{children:(0,t.jsx)("a",{rel:"noreferrer",href:"https://beian.miit.gov.cn/",target:"_blank",children:"\u6CAAICP\u59072023021387\u53F7-1"})}),(0,t.jsx)("span",{onClick:function(){return window.open(k==="zh-CN"?"https://gtech-cn.co/zhstatement":"https://gtech-cn.co/enstatement","_blank")},className:"cursor-pointer mo:mt-5 link-hover",children:"\u7F51\u7AD9\u4F7F\u7528\u6709\u5173Cookie\u53CA\u9690\u79C1\u653F\u7B56\u7684\u58F0\u660E"})]})]})})]})};function A(){var o=[{title:"\u53CC\u78B3\u4E0E\u6570\u5B57\u5316\u57F9\u8BAD",text:"\u5728AICP\u5E73\u53F0\u83B7\u53D6\u5173\u4E8E\u53CC\u78B3\u4EE5\u53CA\u6570\u5B57\u5316\u51CF\u78B3\u7684\u7CFB\u5217\u57F9\u8BAD\uFF0C\u63D0\u5347\u60A8\u7684\u78B3\u7BA1\u7406\u6280\u80FD\uFF0C\u4E3A\u540E\u7EED\u53CC\u78B3\u884C\u52A8\u6253\u4E0B\u57FA\u7840\u3002\u5B8C\u6210\u57F9\u8BAD\u5E76\u901A\u8FC7\u8003\u8BD5\uFF0C\u60A8\u5C06\u88AB\u6388\u4E88\u6570\u5B57\u5316\u8BC1\u4E66\u4EE5\u53CA\u5BF9\u5E94\u6807\u7B7E\u3002"},{title:"\u76EE\u6807\u8BBE\u5B9A\u4E0E\u5B9E\u65BD\u89C4\u5212",text:"\u5728\u884C\u4E1A\u4E13\u5BB6\u7684\u5E2E\u52A9\u4E0B\u5B8C\u6210\u4E2A\u6027\u5316\u7684\u3001\u7B26\u5408\u4F01\u4E1A\u73B0\u72B6\u7684\u53CC\u78B3\u76EE\u6807\u8BBE\u5B9A\uFF0C\u4EE5\u53CA\u660E\u786E\u672A\u6765\u5982\u4F55\u5B9E\u65BD\u76F8\u5173\u7684\u51CF\u78B3\u884C\u52A8\u3002\u6211\u4EEC\u4E5F\u9F13\u52B1\u60A8\u53C2\u4E0E\u53D7\u5168\u7403\u8BA4\u53EF\u7684\u78B3\u76EE\u6807\u6846\u67B6\uFF0C\u5982SBTi\u3002"},{title:"\u53CC\u78B3\u89E3\u51B3\u65B9\u6848&\u54A8\u8BE2",text:"\u51CF\u78B3\u662F\u9AD8\u5EA6\u4E13\u4E1A\u6027\u4E14\u590D\u6742\u7684\u5DE5\u4F5C\uFF0C\u9700\u8981\u4F01\u4E1A\u5185\u5916\u90E8\u7684\u957F\u671F\u534F\u4F5C\u4E0E\u52AA\u529B\u3002\u5728AICP\u83B7\u53D6\u53EF\u9760\u7684\u89E3\u51B3\u65B9\u6848\u652F\u6301\uFF1A\u53CC\u78B3\u5B9E\u65BD\u4E0E\u8BA4\u8BC1\u3001\u78B3\u4FE1\u606F\u62A5\u544A\u4E0E\u62AB\u9732\u3001\u6570\u5B57\u5316\u51CF\u78B3\u3001\u7BA1\u7406\u6218\u7565\u54A8\u8BE2\u7B49\u3002"}];return(0,t.jsx)("ul",{className:"p-8 bg-white rounded-2xl",children:o.map(function(l,f){return(0,t.jsxs)("li",{className:"mb-6 last:mb-0",children:[(0,t.jsx)("h5",{className:"mb-3 text-2xl font-semibold mo:text-xl",children:l.title}),(0,t.jsx)("p",{children:l.text})]},"cardTabsItem1".concat(f))})})}function H(){var o=[{title:"\u516C\u53F8\u78B3\u6838\u67E5",listText:"\u8303\u56F4\u4E00\u7C7B\u522B\u6392\u653E\u3001\u8303\u56F4\u4E8C\u7C7B\u522B\u6392\u653E\u3001\u8303\u56F4\u4E09\u7C7B\u522B\u6392\u653E",resultText:"\u6838\u67E5\u62A5\u544A\u3001\u6E29\u5BA4\u6C14\u4F53\u6838\u67E5\u58F0\u660E",bgColor:"#DAE3F3"},{title:"\u4EA7\u54C1\u78B3\u8DB3\u8FF9",listText:"\u78B3\u8DB3\u8FF9\u6E05\u5355\u3001\u78B3\u8DB3\u8FF9\u6A21\u578B\u3001\u78B3\u8DB3\u8FF9\u6D4B\u7B97",resultText:"\u4EA7\u54C1\u78B3\u8DB3\u8FF9\u76D8\u67E5\u62A5\u544A\u3001\u4EA7\u54C1\u78B3\u8DB3\u8FF9\u8BC1\u4E66",bgColor:"#B4C7E7"},{title:"\u78B3\u51CF\u6392",listText:"\u51CF\u78B3\u91CF\u6D4B\u7B97 - \u4EA7\u54C1\u7EA7\u3001\u51CF\u78B3\u91CF\u6D4B\u7B97 - \u9879\u76EE\u7EA7\u3001\u51CF\u78B3\u91CF\u6D4B\u7B97 - \u6280\u672F\u7EA7",resultText:"\u51CF\u6392\u8BC4\u4F30\u62A5\u544A\u3001\u51CF\u78B3\u8BC1\u4E66",bgColor:"#8FAADC"},{title:"\u78B3\u4E2D\u548C",listText:"\u78B3\u4E2D\u548C\u8DEF\u5F84\u89C4\u5212\u3001\u78B3\u4E2D\u548C\u6D4B\u7B97\u5DE5\u5177",resultText:"\u78B3\u4E2D\u548C\u8BC4\u4F30\u62A5\u544A\u3001\u78B3\u4E2D\u548C\u8BC1\u4E66",bgColor:"#2F5597",color:"#fff"}];return(0,t.jsx)("div",{className:"bg-white px-8 pt-8 pb-5 rounded-2xl h-[25.75rem] mo:h-auto",children:(0,t.jsx)("div",{className:"pb-8 md:overflow-x-auto",children:(0,t.jsxs)("div",{className:"min-w-[60rem] ",children:[(0,t.jsxs)("div",{style:{width:"calc(100% - 15px) "},className:"bg-gradient-to-r  from-[#FFF2CC] relative to-[#FFE184] font-semibold mb-5 h-10 w-full bg-contain flex justify-center items-center",children:[(0,t.jsx)("span",{children:"\u5B9E\u65BD\u6E05\u5355"}),(0,t.jsx)("span",{className:"ml-[20rem]",children:"\u8F93\u51FA\u7ED3\u679C"}),(0,t.jsx)("div",{className:"triangle"})]}),(0,t.jsx)("div",{className:"",children:o.map(function(l,f){return(0,t.jsxs)("div",{className:"flex items-center justify-between mb-4 last:mb-0",children:[(0,t.jsxs)("div",{className:"h-[3.75rem] relative flex items-center justify-center w-[7.25rem]",children:[(0,t.jsx)("div",{style:{color:l.color},className:n()("z-10 relative font-semibold mb-3"),children:l.title}),(0,t.jsx)(v.SS,{className:"absolute top-0 left-0 w-full",fill:l.bgColor})]}),(0,t.jsx)("div",{className:"w-[21.25rem] mt",children:l.listText}),(0,t.jsx)("div",{className:"w-[18.375rem] mt",children:l.resultText}),(0,t.jsx)("div",{className:"h-[3.375rem] scale-[0.3] mt-[-2.55rem] mr-[-5rem] ml-[-8rem]",children:(0,t.jsx)(W.n,{qrcodeDisable:!0,className:""})})]},"cardTabsItem2".concat(f))})})]})})})}function r(){var o=[{title:"\u7EFF\u8272\u80FD\u6E90\u8F6C\u578B",text:"\u4F7F\u7528\u7EFF\u8272\u80FD\u6E90\u662F\u4F01\u4E1A\u548C\u4EA7\u54C1\u51CF\u78B3\u6548\u5E94\u6700\u5F3A\u3001\u4E5F\u662F\u6700\u4E3A\u76F4\u63A5\u548C\u6839\u672C\u7684\u65B9\u5F0F\u3002AICP\u6574\u5408\u5168\u65B9\u4F4D\u7684\u7EFF\u8272\u80FD\u6E90\u8F6C\u578B\u65B9\u6848\uFF0C\u5305\u62EC\u7EFF\u8272\u7535\u529B\u63A5\u5165\u3001\u5DE5\u4E1A\u56ED\u533A\u652F\u6301\u3001\u80FD\u6E90\u7BA1\u7406\u65B9\u6848\u7B49\u3002"},{title:"\u7EFF\u8272\u91D1\u878D",text:"\u57FA\u4E8E\u60A8\u7684\u51CF\u78B3\u6D3B\u52A8\u4E0E\u884C\u4E3A\uFF0C\u5C24\u5176\u662F\u90A3\u4E9B\u7ECF\u7531AICP\u5E73\u53F0\u5B8C\u6210\u5E76\u53D7\u8BA4\u8BC1\u7684\u9879\u76EE\uFF0C\u60A8\u6709\u673A\u4F1A\u4EAB\u53D7\u7279\u5B9A\u7684\u7EFF\u8272\u91D1\u878D\u652F\u6301\u3002AICP\u8BA1\u5212\u4E0E\u91D1\u878D\u673A\u6784\u6301\u7EED\u5408\u4F5C\uFF0C\u53D1\u6325\u5E73\u53F0\u4F18\u52BF\u4EE5\u5F15\u5165\u66F4\u591A\u9002\u5408\u6C7D\u8F66\u884C\u4E1A\u7684\u7EFF\u91D1\u8D44\u6E90\u3002"},{title:"\u78B3\u4FE1\u7528\u8D44\u4EA7\u4E0E\u4EA4\u6613",text:"\u78B3\u4FE1\u7528\uFF08Carbon Credit\uFF09\u8D44\u4EA7\u53CA\u5176\u4EA4\u6613\u4F5C\u4E3A\u5168\u7403\u5E94\u5BF9\u6C14\u5019\u53D8\u5316\u5404\u7C7B\u6846\u67B6\u4E2D\u7684\u6838\u5FC3\u5E02\u573A\u673A\u5236\uFF0C\u76EE\u524D\u5DF2\u7ECF\u5F62\u6210\u4E00\u4E2A\u89C4\u6A21\u5DE8\u5927\u7684\u5E02\u573A\uFF0C\u672A\u6765\u8FD8\u4F1A\u7EE7\u7EED\u6269\u5927\u3002\u8D2D\u4E70\u78B3\u4FE1\u7528\u6765\u5B9E\u73B0\u78B3\u62B5\u9500\u662F\u5B9E\u73B0\u78B3\u4E2D\u548C\u7684\u91CD\u8981\u624B\u6BB5\u4E4B\u4E00\u3002\u60A8\u7684\u51CF\u78B3\u6D3B\u52A8\u4E5F\u53EF\u5728\u6EE1\u8DB3\u6761\u4EF6\u65F6\u88AB\u8BA4\u5B9A\u4E3A\u4E00\u9879\u78B3\u8D44\u4EA7\u3002"}];return(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{}),(0,t.jsx)("ul",{className:"p-8 bg-white rounded-2xl",children:o.map(function(l,f){return(0,t.jsxs)("li",{className:"mb-6 last:mb-0",children:[(0,t.jsx)("h5",{className:"mb-3 text-2xl font-semibold mo:text-xl",children:l.title}),(0,t.jsx)("p",{children:l.text})]},"cardTabsItem3".concat(f))})})]})}var b=function(l){var f=l.windowWidth,s=(0,x.useState)(-1),T=u()(s,2),I=T[0],P=T[1],w=[(0,t.jsx)(A,{},"CardTabsItem1"),(0,t.jsx)(H,{},"CardTabsItem2"),(0,t.jsx)(r,{},"CardTabsItem3")],k=(0,_.dD)(),V=[{title:"\u57F9\u8BAD\u4E0E\u89E3\u51B3\u65B9\u6848",icon:(0,t.jsx)(v.J$,{className:"w-[5rem] mo:h-[3.75rem]"}),text:"AICP\u7EC4\u7EC7\u884C\u4E1A\u9886\u57DF\u5185\u7684\u4E13\u5BB6\uFF0C\u5E2E\u52A9\u7528\u6237\u5728\u7740\u624B\u5B9E\u65BD\u53CC\u78B3\u6D3B\u52A8\u4E4B\u524D\u89E3\u51B3\u7591\u96BE\u3001\u660E\u786E\u65B9\u5411\u3002",items:[{text:"\u53CC\u78B3\u4E0E\u6570\u5B57\u5316\u57F9\u8BAD"},{text:"\u76EE\u6807\u8BBE\u5B9A\u4E0E\u5B9E\u65BD\u89C4\u5212"},{text:"\u53CC\u78B3\u89E3\u51B3\u65B9\u6848&\u54A8\u8BE2"}]},{title:"\u53CC\u78B3\u5B9E\u65BD\u4E0E\u78B3\u6807\u7B7E",icon:(0,t.jsx)(v.wc,{className:"w-[5rem] mo:h-[3.75rem]"}),text:"\u4ECE\u78B3\u6838\u67E5\u5230\u78B3\u4E2D\u548C\uFF0CAICP\u63D0\u4F9B\u660E\u786E\u7684\u53CC\u78B3\u8DEF\u5F84\u7B49\u5F85\u60A8\u884C\u52A8\u3002AIAG\u78B3\u6807\u7B7E\u5C06\u89C1\u8BC1\u60A8\u7684\u52AA\u529B\u3002",items:[{text:"\u516C\u53F8\u78B3\u6838\u67E5"},{text:"\u4EA7\u54C1\u78B3\u8DB3\u8FF9"},{text:"\u78B3\u51CF\u6392"},{text:"\u78B3\u4E2D\u548C"}]},{title:"\u5E02\u573A\u5316\u53CC\u78B3",icon:(0,t.jsx)(v.IY,{className:"w-[5rem] mo:h-[3.75rem]"}),text:"AICP\u7684\u53E6\u4E00\u5927\u804C\u8D23\u662F\u5E2E\u52A9\u6C7D\u8F66\u884C\u4E1A\u7684\u7528\u6237\u5BFB\u627E\u548C\u5339\u914D\u5176\u53CC\u78B3\u6D3B\u52A8\u7684\u5E02\u573A\u5316\u8D44\u6E90\uFF0C\u5E76\u79EF\u6781\u63D0\u4F9B\u76F8\u5173\u652F\u6301\u65B9\u6848\u3002",items:[{text:"\u7EFF\u8272\u80FD\u6E90\u8F6C\u578B"},{text:"\u7EFF\u8272\u91D1\u878D"},{text:"\u78B3\u4FE1\u7528\u8D44\u4EA7\u4E0E\u4EA4\u6613"}]}];return(0,t.jsxs)("div",{className:"flex justify-center w-full mo:px-5",children:[(0,t.jsx)("a",{href:"#",id:"secondView"}),(0,t.jsxs)("div",{className:` flex text-lg mo:text-base flex-shrink-0 max-w-[90rem] mo:max-w-auto pt-10 pb-5  flex-col
        mo:px-0  `.concat(f?"px-[3%]":"px-[7.5rem]",`
       w-full mo:flex-col mo:mt-11 mo:mb-0`),children:[(0,t.jsx)("ul",{className:"flex justify-between w-full pb-8 mo:flex-col mo:pb-0",children:V.map(function(i,m){return(0,t.jsxs)("li",{className:n()("  mr-3 flex last:mr-0 mo:mr-0 mo:flex-col"),children:[(0,t.jsxs)("div",{className:n()(" w-[22.5rem] mo:w-full relative flex flex-col justify-between bg-white p-5 rounded-2xl border-2 mo:mb-5",m===I?"border-green-2":"border-transparent"),children:[(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsxs)("div",{className:"flex items-center",children:[i.icon,(0,t.jsx)("span",{className:"flex-1 pl-5 mt-1 text-2xl font-semibold mo:text-xl",children:i.title})]}),(0,t.jsx)("p",{className:"mt-5 h-[5rem]",children:i.text}),(0,t.jsx)("div",{className:"flex flex-col items-start mt-6 font-semibold",children:i.items.map(function(D,g){return(0,t.jsx)("div",{className:"pb-1 mb-5 border-b-2 border-green-2 last:mb-0",children:D.text},"items".concat(g))})})]}),(0,t.jsx)("a",{href:"#",id:"item".concat(m)}),(0,t.jsx)("button",{className:"w-full mt-8 text-2xl text-white rounded-lg hover:bg-green-28 h-14 mo:h-12 bg-green-2 mo:text-lg",onClick:function(){P(m),setTimeout(function(){return(0,h.dP)("item".concat(m))},100)},children:"\u4E86\u89E3\u66F4\u591A"}),m===I&&(0,t.jsx)("div",{className:"h-5 w-5 bg-white border-b-2 border-r-2 border-green-2 absolute bottom-[-0.71rem] left-[50%] ml-[-0.625rem] rotate-45"})]}),k&&I===m&&(0,t.jsx)("div",{className:"mb-10 mo:mb-5",children:w[I]})]},"tabsList".concat(m))})}),!k&&I>-1&&(0,t.jsx)("div",{className:"mb-10 mo:mb-5",children:w[I]})]})]})};function C(){var o=(0,_.aF)(),l=o.user,f=(0,x.useState)(0),s=u()(f,2),T=s[0],I=s[1];(0,x.useEffect)(function(){var w=function(){I(window.innerWidth)};return I(window.innerWidth),window.addEventListener("resize",w),function(){window.removeEventListener("resize",w)}},[]);var P=T>1200&&T<=1280;return(0,t.jsxs)(a.T8,{children:[(0,t.jsx)("div",{className:"flex flex-col flex-shrink-0 mo:items-center mo:h-[37.25rem] w-full ",children:(0,t.jsxs)("div",{className:"max-w-[90rem] h-[42.875rem]  mo:px-10 w-full mx-auto  ".concat(P?"px-[3%]":"px-[7.5rem]"),children:[(0,t.jsx)("div",{className:"text-[2rem] text-white font-semibold w-[37.25rem] mt-36 mo:text-[1.75rem] mo:leading-normal mo:text-center mo:w-full mo:mt-[5.375rem]",children:"AICP\u662F\u5168\u7403\u6027\u7684\u884C\u4E1A\u7EA7\u78B3\u670D\u52A1\u5E73\u53F0\uFF0C\u5E2E\u52A9\u4E3B\u673A\u5382\u4E0E\u4F9B\u5E94\u5546\u5728AIAG\u78B3\u5021\u8BAE\u6846\u67B6\u4E0B\u7BA1\u7406\u53CC\u78B3\u6D3B\u52A8\u3001\u5C55\u793A\u51CF\u78B3\u6210\u679C\u3002"}),(0,t.jsx)("button",{onClick:function(){return(0,h.dP)("secondView")},className:"mt-[3.75rem] w-[13.75rem] rounded-lg bg-white whitespace-nowrap text-green-2 text-2xl font-medium px-[1.9375rem] py-3 mo:mt-[8.0625rem] mo:text-lg mo:px-[3.125rem]  mo:w-full",children:"\u4E86\u89E3AICP\u670D\u52A1"}),(0,t.jsx)(z.Link,{to:l?"/carbon/allService":"/login",className:" inline-block ml-5 mo:ml-0 mt-[3.75rem] text-center w-[13.75rem] rounded-lg bg-white whitespace-nowrap text-green-2 text-2xl font-medium px-[1.9375rem] py-3 mo:mt-5 mo:text-lg mo:px-[3.125rem] mo:w-full",children:"\u767B\u5165AICP\u8D26\u6237"})]})}),(0,t.jsx)(b,{windowWidth:P}),(0,t.jsx)(K,{windowWidth:P})]})}var j=C,d=e(91003),c=function(){return(0,t.jsx)(d.Z,{children:(0,t.jsx)(j,{})})}}}]);
