"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[7998],{67454:function(re,B,e){e.d(B,{u:function(){return K},z:function(){return H}});var U=e(24047),f=e.n(U),V=e(86378),b=e.n(V),Z=e(28488),j=e.n(Z),z=e(84875),C=e.n(z),G=e(9751),n=e(11527),O=["children","className"],s=["busy","disabled","className","defStyle","children"];function H(l){var N=l.children,y=l.className,T=j()(l,O);return(0,n.jsx)("button",b()(b()({},T),{},{className:C()(y),children:l.children}))}function K(l){var N,y=l.busy,T=l.disabled,_=l.className,J=l.defStyle,F=J===void 0?"btn-primary":J,u=l.children,r=j()(l,s);return(0,n.jsx)("button",b()(b()({className:C()(_,(N={},f()(N,F,!T),f()(N,"btn-disable",T),N))},r),{},{children:y?(0,n.jsx)(G.fCD,{className:"animate-spin"}):u}))}},53765:function(re,B,e){e.d(B,{DJ:function(){return I},fo:function(){return q},h4:function(){return le},to:function(){return oe}});var U=e(86378),f=e.n(U),V=e(28488),b=e.n(V),Z=e(58357),j=e.n(Z),z=e(71977),C=e.n(z),G=e(30577),n=e.n(G),O=e(14712),s=e(6429),H=e(84875),K=e.n(H),l=e(50959),N=e(9596),y=e(15732),T=e(33665),_=e(1487),J=e(49372),F=e(9441),u=e(89850),r=e(35016),w=e(21262),Q=e(57681),t=e(11527),$=["children","className","tits","showQuery","isManager","nopx","menus"],k=["children","className","tits"];function q(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],c=(0,T.dD)(),v=(0,T.aF)(),i=v.user,m=v.setUser,M=(0,r.useLocation)(),a=M.pathname,h=(0,r.useNavigate)(),R=(0,F.N)(),D=R.t,ee=R.locale,ae=ee;return(0,l.useMemo)(function(){var x=[];return x.push({icon:(0,t.jsx)(w.m6D,{}),text:D("AICP Home"),to:"/"}),x.push({icon:(0,t.jsx)(w.jRj,{}),text:D("AICP Open Query"),to:"/openquery"}),i&&!o.find(function(S){return S.to===a})&&x.push({icon:(0,t.jsx)(Q.Nhi,{}),text:(0,u.Oc)(D("AICP Digital3 Carbon System")),to:J.JK[0].to}),c&&i&&o.map(function(S){return{icon:(0,t.jsx)(S.icon,{}),text:D(S.txt),to:S.to,selected:a===S.to}}).forEach(function(S){return x.push(S)}),x.push({icon:(0,t.jsx)(O.BB,{}),text:D("Document"),to:"https://docs.gtech.world/",onClick:function(){h("https://docs.gtech.world/")}}),x.push({icon:i?(0,t.jsx)(w.xqh,{}):(0,t.jsx)(w._fJ,{}),text:D(i?"Log Out":"Log In"),to:i?void 0:"/login",onClick:function(){h("/"),m(void 0)}}),x},[i,c,a,D,ae])}function oe(){var o=(0,l.useState)(0),c=n()(o,2),v=c[0],i=c[1];return(0,l.useEffect)(function(){var m=function(){var h=C()(j()().mark(function R(){var D,ee;return j()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:D=2e3;case 1:return x.next=4,(0,u._v)(100);case 4:if(D-=100,ee=document.getElementById("app_header"),!ee){x.next=8;break}return x.abrupt("return",ee);case 8:if(!(D<=0)){x.next=10;break}return x.abrupt("return",void 0);case 10:x.next=1;break;case 12:case"end":return x.stop()}},R)}));return function(){return h.apply(this,arguments)}}(),M,a;return m().then(function(h){if(h){var R=function(){h&&i(h.getBoundingClientRect().height)};h&&i(h.clientHeight),h&&(M=new ResizeObserver(R),M.observe(h),R())}}),function(){M&&a&&M.unobserve(a)}},[]),v}function le(o){var c=o.children,v=o.className,i=o.tits,m=o.showQuery,M=o.isManager,a=o.nopx,h=a===void 0?!1:a,R=o.menus,D=b()(o,$),ee=(0,F.N)(),ae=ee.t,x=i||ae("Automotive Industry Carbon Platform")||"",S=(0,l.useMemo)(function(){return(0,u.pT)(x)},[x]),ie=(0,r.useNavigate)(),se=q(R),_e=(0,T.xB)(),pe=_e.last_input_vin,he=_e.setLastInputVin,fe=(0,l.useState)(pe),ve=n()(fe,2),ue=ve[0],xe=ve[1],Ee=(0,l.useCallback)(function(g){xe(g.target.value||""),he(g.target.value)},[]),ge=(0,T.h3)(),Y=(0,l.useState)(0),P=n()(Y,2),L=P[0],A=P[1];(0,l.useEffect)(function(){var g=function(){A(window.innerWidth)};return A(window.innerWidth),window.addEventListener("resize",g),function(){window.removeEventListener("resize",g)}},[]);var W=function(){if(!ue)return ge("Please input VIN Code");ie("pcf?vin=".concat(ue))};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",f()(f()({id:"app_header",className:K()(`w-full relative z-[3] max-w-[90rem] mx-auto  text-white  flex items-center top-0  h-[4.25rem]
          `.concat(!h&&(L>1200&&L<=1280?"px-[3%]":"px-[7.5rem]"),`
          `),v)},D),{},{children:[M?(0,t.jsxs)("div",{className:"flex items-center cursor-pointer ml-[-1rem] mo:ml-0",onClick:function(){return ie("/")},children:[(0,t.jsx)(O.yc,{className:"h-[2.275rem] mo:h-[2rem]"}),(0,t.jsx)(O.lF,{className:"h-[1.5rem] mt-2.5 ml-3 mo:h-[1.1rem] mo:mt-3"})]}):(0,t.jsxs)("div",{onClick:function(){return ie("/")},className:"flex items-center cursor-pointer",children:[(0,t.jsx)(O.yc,{className:"h-9 mo:h-[1.75rem]"}),(0,t.jsx)("div",{className:K()("flex flex-col ml-4 text-base leading-snug mo:text-[.8rem] mo:ml-[.8rem]",{}),children:S.map(function(g,d){return(0,t.jsx)("span",{className:"whitespace-nowrap",dangerouslySetInnerHTML:{__html:(0,u.Oc)(g)}},"tit_".concat(d))})})]}),(0,t.jsx)("div",{className:"flex-1"}),m&&(0,t.jsxs)("div",{className:"relative mr-4 text-lg text-white mo:hidden",children:[(0,t.jsx)("input",{style:{border:"2px solid #fff"},className:"w-[17.5rem] h-[2.25rem] rounded-sm outline-none bg-transparent pl-10 pr-4",value:ue,maxLength:24,onChange:Ee,onKeyDown:function(d){return d.code==="Enter"&&W()}}),(0,t.jsx)(w.jRj,{className:"text-[1.75rem] top-1 left-2 absolute cursor-pointer",onClick:W})]}),(0,t.jsx)(_.R,{menus:se,children:(0,t.jsx)("button",{className:"text-[2rem] mo:text-2xl",children:(0,t.jsx)(N.otZ,{})})})]}))})}function I(o){var c=o.children,v=o.className,i=o.tits,m=i===void 0?["Automotive Industry","Carbon Platform"]:i,M=b()(o,k),a=(0,s.U)(),h=q();return(0,t.jsxs)("div",f()(f()({id:"app_header",className:K()("sticky top-0 z-[3] w-full text-white flex items-center p-4 bg-green-2",v)},M),{},{children:[(0,t.jsx)("button",{className:"text-[2rem]",onClick:a,children:(0,t.jsx)(y.u1R,{})}),(0,t.jsx)("div",{className:"flex-1"}),(0,t.jsx)(O.yc,{className:"h-[1.75rem]"}),(0,t.jsx)("div",{className:"flex-1"}),(0,t.jsx)(_.R,{menus:h,children:(0,t.jsx)("button",{className:"text-2xl",children:(0,t.jsx)(N.otZ,{})})})]}))}},9107:function(re,B,e){e.d(B,{I:function(){return O},g:function(){return n}});var U=e(86378),f=e.n(U),V=e(28488),b=e.n(V),Z=e(84875),j=e.n(Z),z=e(52492),C=e(11527),G=["className","color","size"];function n(s){var H=s.className,K=s.color,l=s.size,N=l===void 0?"":l,y=b()(s,G);return(0,C.jsx)("div",f()(f()({},y),{},{className:j()("text-black w-full h-full flex items-center justify-center",H),children:(0,C.jsx)(z.uur,{color:K,style:N?{fontSize:N}:{},className:"text-[3.125rem] animate-spin"})}))}function O(){return(0,C.jsx)(n,{className:"fixed z-50 left-0 top-0 w-full !h-full bg-black/25"})}},98286:function(re,B,e){e.d(B,{m:function(){return T}});var U=e(28488),f=e.n(U),V=e(86378),b=e.n(V),Z=e(53765),j=e(1487),z=e(14712),C=e(35016),G=e(84875),n=e.n(G),O=e(9596),s=e(11527),H=["children","className","tits","showQuery","isManager"];function K(_){var J=_.children,F=_.className,u=_.tits,r=_.showQuery,w=_.isManager,Q=f()(_,H),t=(0,C.useNavigate)(),$=(0,Z.fo)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",b()(b()({className:n()("w-full relative z-[3] max-w-[90rem] mx-auto text-white flex items-center top-0  h-[4.25rem] justify-between",F)},Q),{},{children:[(0,s.jsxs)("div",{className:"flex items-center cursor-pointer ml-[-1rem] mo:ml-0",onClick:function(){return t("/")},children:[(0,s.jsx)(z.yc,{className:"h-[2.275rem] mo:h-[2rem]"}),(0,s.jsx)(z.lF,{className:"h-[1.5rem] mt-2.5 ml-3 mo:h-[1.1rem] mo:mt-3"})]}),(0,s.jsx)(j.R,{menus:$,children:(0,s.jsx)("button",{className:"text-[2rem] mo:text-2xl",children:(0,s.jsx)(O.otZ,{})})})]}))})}var l=e(21262),N=e(92463),y=["className","canBack","children","link","isNew","containerClassName"];function T(_){var J=_.className,F=_.canBack,u=_.children,r=_.link,w=_.isNew,Q=_.containerClassName,t=f()(_,y),$=(0,C.useNavigate)(),k=(0,N.R)();return(0,s.jsxs)("div",{className:"relative flex flex-col flex-1 w-full h-full min-h-fit bg-gray-16",children:[(0,s.jsx)(K,{showQuery:!0,style:{top:"".concat(k,"px")},className:"!sticky px-[3.125rem] py-4 !max-w-none bg-green-2 mo:px-4 mo:h-[4.25rem]"}),(0,s.jsxs)("div",{className:n()("w-full h-full mx-auto px-[60px] flex flex-col flex-1",Q,{" max-w-[90rem]":!w}),children:[F&&(0,s.jsxs)("div",{className:"flex items-center my-5 text-sm ".concat(r!=null&&r.pathName?"cursor-default":"cursor-pointer"),onClick:function(){return r!=null&&r.pathName?void 0:$("/carbon/service")},children:[!r&&(0,s.jsx)(l.YFh,{className:"text-lg"}),r&&JSON.stringify(r)!=="{}"?(0,s.jsxs)("div",{className:"flex flex-row",children:[(0,s.jsx)("span",{className:"text-[#000000] cursor-pointer font-bold  text-[14px]",onClick:function(){return $(r==null?void 0:r.pathName)},children:r.homeTitle}),(0,s.jsx)("div",{className:"mx-1 ",children:" / "}),(0,s.jsxs)("span",{className:"cu text-[#999999] font-normal text-[14px]",children:[" ",r.currentTitle]})]}):"\u8FD4\u56DE"]}),(0,s.jsx)("div",{className:n()("flex flex-col ",J),children:u})]})]})}},73261:function(re,B,e){e.d(B,{b:function(){return J}});var U=e(30577),f=e.n(U),V=e(58357),b=e.n(V),Z=e(71977),j=e.n(Z),z=e(84875),C=e.n(z),G=e(27846),n=e(50959),O=e(30161),s=e(60904),H=e(72741),K=e.n(H),l=e(11527),N={startOnLoad:!0,theme:"default",logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,flowchart:{htmlLabels:!0},themeVariables:{},sequence:{diagramMarginX:50,diagramMarginY:10,actorMargin:50,width:800,height:200,boxMargin:10,boxTextMargin:5,noteMargin:10,messageMargin:35,mirrorActors:!0,bottomMarginAdj:1,useMaxWidth:!0,rightAngles:!1,showSequenceNumbers:!1,wrapPadding:20},gantt:{titleTopMargin:25,barHeight:16,barGap:4,topPadding:50,leftPadding:75,gridLineStartPadding:35,fontSize:11,numberSectionStyles:4,axisFormat:"%Y-%m-%d"},class:{titleTopMargin:20,defaultRenderer:"dagre-wrapper"},pie:{}},y={count:1};function T(F){var u=F.className,r=F.data,w=r===void 0?"":r,Q=(0,n.useMemo)(function(){return"aicp_mermaid_".concat(y.count++)},[]),t=function(){var le=j()(b()().mark(function I(){var o,c,v,i,m;return b()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,o=document.querySelector("#"+Q),o){a.next=4;break}return a.abrupt("return");case 4:return G.N.initialize(N),a.next=7,G.N.render(Q+"-svg",w);case 7:if(c=a.sent,v=c.svg,i=c.bindFunctions,o.innerHTML=v,i==null||i(o),m=document.getElementById(Q+"-svg"),m){a.next=15;break}return a.abrupt("return");case 15:m.setAttribute("height","100%"),m.style.maxWidth="100%",K()(m,{mouseWheelZoomEnabled:!1,zoomEnabled:!0,controlIconsEnabled:!0}),a.next=23;break;case 20:a.prev=20,a.t0=a.catch(0),console.error(a.t0);case 23:case"end":return a.stop()}},I,null,[[0,20]])}));return function(){return le.apply(this,arguments)}}(),$=(0,O.Z)(),k=f()($,2),q=k[0],oe=k[1].width;return(0,s.Z)(t,300,[oe,w]),(0,l.jsx)("div",{ref:q,id:Q,className:C()("mermaid p-2.5",u)})}var _=T,J=_},6429:function(re,B,e){e.d(B,{U:function(){return f}});var U=e(35016);function f(){return function(){U.history.back()}}},72522:function(re,B,e){e.r(B),e.d(B,{default:function(){return le}});var U=e(58357),f=e.n(U),V=e(71977),b=e.n(V),Z=e(30577),j=e.n(Z),z=e(86378),C=e.n(z),G=e(4349),n=e(11527);function O(I){return(0,n.jsx)(G.Z,C()({opts:{locale:"en"},notMerge:!0,lazyUpdate:!0},I))}var s=e(67454),H=e(9107),K=e(98286),l=e(73261),N=e(97707),y=e(89850),T=e(35016),_=e(84875),J=e.n(_),F=e(32699),u=e.n(F),r=e(50959),w=e(97814),Q=e(99592);function t(I){var o=(0,r.useState)(!0),c=j()(o,2),v=c[0],i=c[1],m=I.text,M=I.onChange;return(0,r.useMemo)(function(){M&&M(v)},[v]),(0,n.jsx)("div",{className:"inline-block font-bold",onClick:function(){return i(!v)},children:(0,n.jsxs)("div",{className:"flex items-center cursor-pointer",children:[(0,n.jsx)("span",{children:m}),(0,n.jsx)(w.Tgc,{height:"7px",className:J()("ml-1",!v&&"rotate-180")})]})})}function $(I){var o=(0,r.useState)(!0),c=j()(o,2),v=c[0],i=c[1],m=I.data,M=[{label:"\u78B3\u8DB3\u8FF9\u6279\u6B21",text:m.loadName},{label:"\u4EA7\u54C1\u7CFB\u7EDF",text:m.productSystemName},{label:"\u76EE\u6807\u4EA7\u54C1",text:m.targetName},{label:"\u76EE\u6807\u4EA7\u54C1\u6570\u91CF",text:m.targetAmount},{label:"Impact Method(\u73AF\u5883\u5F71\u54CD\u8BC4\u4EF7\u65B9\u6CD5)",text:"IPCC 2021"},{label:"Allocation Method(\u5206\u644A\u65B9\u6CD5)",text:"Process Defaults"},{label:"Cutoff",text:"None"},{label:"\u8BA1\u7B97\u7ED3\u679C\u751F\u6210\u65F6\u95F4",text:m.calculateSuccessTime}];return(0,n.jsxs)("div",{children:[(0,n.jsx)(t,{text:"\u4E00\u822C\u4FE1\u606F",onChange:function(h){return i(h)}}),v&&(0,n.jsx)("div",{className:"mt-4",children:M.map(function(a,h){return(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsxs)("label",{className:"",children:[a.label," :"]}),(0,n.jsx)("span",{className:"ml-1 text-gray-6",children:a.text})]},"data-".concat(h))})})]})}function k(I){var o=(0,r.useState)(!0),c=j()(o,2),v=c[0],i=c[1],m=I.data;return(0,n.jsxs)("div",{className:"mt-4",children:[(0,n.jsx)(t,{text:"\u78B3\u8DB3\u8FF9\u7ED3\u679C",onChange:function(a){return i(a)}}),v&&(0,n.jsx)("div",{className:"text-[1.75rem] font-semibold mt-4",children:m})]})}function q(){var I=(0,T.useSearchParams)(),o=j()(I,1),c=o[0],v=(0,r.useState)(!1),i=j()(v,2),m=i[0],M=i[1],a=(0,r.useState)(),h=j()(a,2),R=h[0],D=h[1],ee=(0,r.useState)(!0),ae=j()(ee,2),x=ae[0],S=ae[1],ie=function(){var Y=b()(f()().mark(function P(){var L,A,W;return f()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,(0,N.fF)(c.get("id"));case 2:if(L=d.sent,L){d.next=5;break}return d.abrupt("return");case 5:return d.next=7,(0,N.Yp)(L.modelId);case 7:A=d.sent,W=A.modelBomInfo,D({lca:L,bominfo:W}),S(!1);case 11:case"end":return d.stop()}},P)}));return function(){return Y.apply(this,arguments)}}();(0,r.useEffect)(function(){ie()},[c.get("id")]);var se=(0,r.useMemo)(function(){var Y=[],P="",L="",A="",W={};if(R){var g=R.lca,d=R.bominfo,ne=(0,y.OA)(g.lcaResult);if(ne){var X,je,Me,Ne,be;Y={productSystemName:(X=ne.extra)===null||X===void 0?void 0:X.productSystemName,methodName:(je=ne.extra)===null||je===void 0?void 0:je.methodName,targetAmount:(Me=ne.extra)===null||Me===void 0?void 0:Me.targetAmount,calculateSuccessTime:g.calculateSuccessTime,loadNumber:g.loadNumber,loadName:g.loadName},P=ne.totalImpacts&&((Ne=ne.totalImpacts[0])===null||Ne===void 0?void 0:Ne.impact.referenceUnit)||"";var Re=u().round(ne.totalResult||((be=ne.treeNode)===null||be===void 0?void 0:be.result)||0,2);L="".concat(Re||0," ").concat(P)}var De=(0,y.OA)(d),Te=(0,y.OA)(g.lcaTagResult);if(De&&Te){A="classDiagram";var Pe=u().groupBy(Te,"flowId"),Le=u().groupBy(De,"flowId"),ce={bomIndex:1,stageIndex:1},Ae=function(E){return ce[E.flowId]||(ce[E.flowId]=E.tagType==="STAGE"?ce.stageIndex++:ce.bomIndex++),ce[E.flowId]},Ce=function(E){return E.tagType==="REFERENCE"?"\u76EE\u6807\u4EA7\u54C1":E.tagType+Ae(E)},Ie=u().sortBy(De,function(p){return p.tagType==="BOM"?2:p.tagType==="STAGE"?1:0});Ie.forEach(function(p){p.childFlowIds&&p.childFlowIds.length&&p.childFlowIds.forEach(function(E){var me=u().first(Pe[E]),te=u().first(Le[E]);if(te&&me){var Oe=Ce(p),de=Ce(te);A+=`
 `.concat(Oe," <|-- ").concat(de)}})}),W={padding:20,legend:{top:30,padding:20,type:"scroll",orient:"horizontal",align:"auto"},tooltip:{trigger:"item",formatter:function(E){return`<div>
            `.concat(E.marker,`
            <span>`).concat(E.name," (").concat(E.percent,`%)</span>
            <div style="margin-left: 18px">`).concat(E.value," ").concat(P,`</div>
          </div>`)}},series:{type:"pie",radius:"60%",data:[],center:["50%","56%"],label:{formatter:function(E){return"".concat(E.percent,"%")}}}},Ie.forEach(function(p){var E,me=Ce(p),te=u().first(Pe[p.flowId]),Oe=((te==null?void 0:te.result)||0)-u().sumBy(p.childFlowIds,function(Se){var ye;return((ye=u().first(Pe[Se]))===null||ye===void 0?void 0:ye.result)||0}),de=u().round(Oe,2),Be="".concat(me," : ").concat(p.flowName.replaceAll("(","\uFF08").replaceAll(")","\uFF09"),`
          `).concat(me," : +PCF(").concat(de," ").concat(P,")");(p.tagType!=="REFERENCE"||p.childFlowIds.length>0)&&(A+=`
`.concat(Be)),p.tagType==="REFERENCE"&&(W.title={text:p.flowName,left:"center",top:10},Y.targetName=p.flowName,A+=`
`.concat(me," : Total(").concat(u().round((te==null?void 0:te.result)||0,2)," ").concat(P,")")),de>0&&((E=W.series.data)===null||E===void 0||E.push({name:p.flowName,value:de}))})}}return{generalInfo:Y,carbonResult:L,graphData:A,pieData:W}},[R]),_e=se.generalInfo,pe=se.carbonResult,he=se.graphData,fe=se.pieData,ve=function(){var Y=b()(f()().mark(function P(){var L,A,W,g,d;return f()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:if(c.get("id")){X.next=2;break}return X.abrupt("return",!1);case 2:return M(!0),X.next=5,(0,N.LW)(c.get("id"));case 5:L=X.sent,L.headers&&(A=L.headers.get("content-disposition"),A&&(W=A.match(/filename=(.+)/),W&&(M(!1),g=new Blob([L.data]),d=document.createElement("a"),d.download=W[1],d.style.display="none",d.href=URL.createObjectURL(g),document.body.appendChild(d),d.click(),URL.revokeObjectURL(d.href),document.body.removeChild(d))));case 7:case"end":return X.stop()}},P)}));return function(){return Y.apply(this,arguments)}}(),ue=(0,Q.Z)(!0),xe=j()(ue,2),Ee=xe[0],ge=xe[1];return(0,n.jsx)(K.m,{className:"text-lg text-black",children:x?(0,n.jsx)("div",{className:"h-[100vh] w-full items-center",children:(0,n.jsx)(H.g,{})}):(0,n.jsxs)("div",{className:"mo:break-all",children:[(0,n.jsx)("h3",{className:"my-5 text-2xl font-semibold",children:"\u78B3\u8DB3\u8FF9\u7ED3\u679C"}),(0,n.jsxs)("div",{className:"p-5 bg-white rounded-2xl",children:[(0,n.jsx)($,{data:_e}),(0,n.jsx)(k,{data:pe}),!u().isEmpty(he)&&!u().isEmpty(fe)&&(0,n.jsxs)("div",{className:"w-full mt-4",children:[(0,n.jsx)(t,{text:"BOM/STAGE\u7684\u660E\u7EC6\u7ED3\u679C",onChange:function(P){return ge(P)}}),Ee&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.b,{className:"w-full h-[360px] bg-[#F1F1F1] mt-4",data:he}),(0,n.jsx)(O,{className:"w-full !h-[320px] bg-[#F1F1F1] mt-4",option:fe})]})]})]}),(0,n.jsx)("div",{className:"flex justify-center w-full mt-5 mb-10",children:(0,n.jsx)(s.z,{onClick:function(){return!m&&ve()},className:"mt-5 text-lg bg-green-2 w-[26.875rem] text-white rounded-lg  h-14 flex items-center justify-center hover:bg-green-28",children:m?(0,n.jsx)("div",{children:(0,n.jsx)(H.g,{size:"2rem",color:"#fff"})}):(0,n.jsx)("span",{children:"\u5BFC\u51FAExcel"})})})]})})}var oe=q,le=oe}}]);
