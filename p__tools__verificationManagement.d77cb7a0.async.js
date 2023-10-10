"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[2941],{64082:function(ae,M,e){var O=e(48651),u=e.n(O),v=e(38046),d=e.n(v),U=e(30541),P=e(33421),N=e(68591),B=e.n(N),C=e(63342),E=["className"];function L(p){var i=p.className,l=d()(p,E),a=(0,P.l)(function(g){var j=g.token;return{".ant-page-header":{padding:"1rem 1.5rem",paddingBlock:"1rem !important",paddingInline:"1.5rem !important",backgroundColor:j.colorBgBase,".ant-breadcrumb":{fontSize:".875rem",paddingBlockStart:"0 !important"},".ant-page-header-heading-title":{fontSize:"1.25rem"}},".ant-pro-grid-content":{padding:"1.5rem",backgroundColor:"transparent",".ant-pro-page-container-children-content":{padding:0,paddingBlock:"0 !important"},".ant-pro-page-container-children-container":{paddingBlock:"0 !important",paddingInline:"0 !important"}}}});return(0,C.jsx)(U._z,u()({className:B()(i,a)},l))}M.Z=L},18842:function(ae,M,e){e.d(M,{rx:function(){return g},zL:function(){return a}});var O=e(48651),u=e.n(O),v=e(38046),d=e.n(v),U=e(81123),P=e(54695),N=e(33421),B=e(9021),C=e(68591),E=e.n(C),L=e(97207),p=e.n(L),i=e(63342),l=["className","columns"];function a(j){return p().size(j)>=16?(0,i.jsx)(B.Z,{title:j,children:(0,U.lS)(j,8,8)}):j}function g(j){var c=j.className,r=j.columns,s=d()(j,l),S=(0,N.l)(function(I){var ie=I.token;return{".ant-table-container":{borderStartStartRadius:"0 !important",borderStartEndRadius:"0 !important"},".ant-pro-card-body":{paddingInline:"0 !important",paddingBlock:"0 !important"},".ant-table-wrapper .ant-table-container table>thead>tr:first-child >*:first-child":{borderStartStartRadius:"0 !important"},".ant-table-wrapper .ant-table-container table>thead>tr:first-child >*:last-child":{borderStartEndRadius:"0 !important"},".ant-pagination-item, .ant-pagination-prev, .ant-pagination-next":{borderRadius:"2px !important",minWidth:"30px !important",height:"30px !important",lineHeight:"28px !important"},".ant-pagination-total-text":{lineHeight:"30px !important",visibility:"hidden"}}}),R=p().sumBy(r,"width");return(0,i.jsx)(P.Z,u()({bordered:!0,columns:r,scroll:{x:R},search:!1,options:!1,rowKey:"key",className:E()(c,"p-6",S)},s))}M.ZP=g},9991:function(ae,M,e){e.d(M,{u:function(){return i},z:function(){return p}});var O=e(48651),u=e.n(O),v=e(38046),d=e.n(v),U=e(68591),P=e.n(U),N=e(68717),B=e(31887),C=e(63342),E=["children","className"],L=["busy","type","className","defStyle","children"];function p(l){var a=l.children,g=l.className,j=d()(l,E);return(0,C.jsx)("button",u()(u()({},j),{},{className:P()(g),children:l.children}))}function i(l){var a=l.busy,g=l.type,j=g===void 0?"primary":g,c=l.className,r=l.defStyle,s=r===void 0?"btn-primary":r,S=l.children,R=d()(l,L);return(0,C.jsx)(B.ZP,u()(u()({type:s==="btn-primary-1"?"default":j,className:P()(c,"leading-none !shadow-none",{})},R),{},{children:a?(0,C.jsx)(N.fCD,{className:"animate-spin mx-auto"}):S}))}},11e3:function(ae,M,e){e.d(M,{I:function(){return L},g:function(){return E}});var O=e(48651),u=e.n(O),v=e(38046),d=e.n(v),U=e(68591),P=e.n(U),N=e(26082),B=e(63342),C=["className","color","size"];function E(p){var i=p.className,l=p.color,a=p.size,g=a===void 0?"":a,j=d()(p,C);return(0,B.jsx)("div",u()(u()({},j),{},{className:P()("text-black w-full h-full flex items-center justify-center",i),children:(0,B.jsx)(N.uur,{color:l,style:g?{fontSize:g}:{},className:"text-[3.125rem] animate-spin"})}))}function L(){return(0,B.jsx)(E,{className:"fixed z-50 left-0 top-0 w-full !h-full bg-black/25"})}},95968:function(ae,M,e){e.d(M,{u_:function(){return c}});var O=e(48651),u=e.n(O),v=e(86516),d=e.n(v),U=e(38046),P=e.n(U),N=e(97980),B=e(68591),C=e.n(B),E=e(79685),L=e(50374),p=e(22798),i=e(63342),l=["className","title","onClose","outClose","titleClassName","containerClassName","children"],a={current:null};a.current=document.body;function g(r){var s=r.title,S=r.onClose,R=r.titleClassName,I=r.containerClassName;return(0,i.jsxs)("div",{className:C()("flex items-center justify-between pb-6 mb-6 text-xl font-bold border-b mt-2.5 mx-5",I),children:[(0,i.jsx)("span",{className:C()("max-w-[70%] overflow-hidden text-ellipsis whitespace-nowrap",R),children:s}),(0,i.jsx)(p.q5L,{onClick:function(se){se.stopPropagation(),S&&S()},className:"text-2xl cursor-pointer"})]})}function j(){return _jsx("div",{})}function c(r){var s=r.className,S=r.title,R=r.onClose,I=r.outClose,ie=I===void 0?!1:I,se=r.titleClassName,_e=r.containerClassName,he=r.children,ge=P()(r,l),n=(0,E.useRef)(null),x=(0,E.useState)(!0),A=d()(x,2),ee=A[0],fe=A[1],ue=function(){R&&(fe(!0),setTimeout(function(){return R()},300))},ne=(0,N.R)(function(H){H.stopPropagation();var ye=n.current&&n.current!==H.target&&n.current.contains(H.target);!ye&&ie&&ue()});return(0,E.useEffect)(function(){fe(!1)},[]),a.current?(0,L.createPortal)((0,i.jsx)("div",u()(u()({},ge),{},{ref:n,className:C()("fixed left-0  top-0 w-full h-full overflow-auto z-[500] flex justify-center items-center",{"transition-[background_ease_300ms]":!0,"bg-black/0":ee,"bg-black/25":!ee},s),onClick:ne,children:(0,i.jsxs)("div",{id:"mo",className:C()("bg-white rounded p-5 min-w-[20rem] min-h-[150]",{"transition-[all_ease_300ms]":!0,"scale-0":ee,"scale-100":!ee}),children:[(0,i.jsx)(g,{title:S,containerClassName:_e,titleClassName:se,onClose:ue}),he]})})),a.current):null}},6528:function(ae,M,e){e.d(M,{ub:function(){return j},dW:function(){return a}});var O=e(48651),u=e.n(O),v=e(86516),d=e.n(v),U=e(38143),P=e(79685),N={"t-side":function(r,s){return new KeyframeEffect(r,s==="add"?[{transform:"scaleY(0)",transformOrigin:"0 0",opacity:0},{transform:"scaleY(1)",transformOrigin:"0 0",opacity:1}]:s==="remove"?[{transform:"scaleY(1)",transformOrigin:"0 0",opacity:1},{transform:"scaleY(0)",transformOrigin:"0 0",opacity:0}]:[],{duration:300,easing:"ease-in-out"})},"r-side":function(r,s){return new KeyframeEffect(r,s==="add"?[{transform:"scaleX(0)",transformOrigin:"100% 0",opacity:0},{transform:"scaleX(1)",transformOrigin:"100% 0",opacity:1}]:s==="remove"?[{transform:"scaleX(1)",transformOrigin:"100% 0",opacity:1},{transform:"scaleX(0)",transformOrigin:"100% 0",opacity:0}]:[],{duration:300,easing:"ease-in-out"})},scale:function(r,s){return new KeyframeEffect(r,s==="add"?[{transform:"scale(0.8)",opacity:0},{transform:"scale(1)",opacity:1}]:s==="remove"?[{transform:"scale(1)",opacity:1},{transform:"scale(0.8)",opacity:0}]:[],{duration:300,easing:"ease-in-out"})},opacity:function(r,s){return new KeyframeEffect(r,s==="add"?[{opacity:0},{opacity:1}]:s==="remove"?[{opacity:1},{opacity:0}]:[],{duration:200,easing:"ease-in-out"})}};function B(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"scale",r=(0,P.useRef)(null);return(0,P.useEffect)(function(){r.current&&(0,U.ZP)(r.current,typeof c=="string"?N[c]:c)},[r.current]),r}var C=e(68591),E=e.n(C),L=e(30681),p=e(12239),i=e(76852),l=e(63342);function a(c){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=(0,P.useState)(r),S=d()(s,2),R=S[0],I=S[1];return(0,P.useEffect)(function(){I(r)},[c,r]),{onChange:I,items:c,current:R}}function g(c){var r=c.items,s=c.current,S=c.onChange,R=c.className,I=R===void 0?"bg-white text-black px-5 py-3 text-lg rounded-lg w-[31.25rem] mo:w-full mo:text-sm":R,ie=c.currentClassName,se=ie===void 0?"flex justify-between items-center":ie,_e=c.openClassName,he=_e===void 0?"max-h-[18rem] bg-white  rounded-lg py-3 ":_e,ge=r[s]?r[s].text:"",n=(0,p.Z)(!1),x=d()(n,2),A=x[0],ee=x[1],fe=(0,P.useCallback)(function(ne){s!==ne&&S(ne)},[s]),ue=B("t-side");return(0,i.Z)(ue,function(){return A&&ee(!1)}),r.length===0?null:(0,l.jsxs)("div",{ref:ue,className:E()("relative cursor-pointer",I),onClick:function(){return ee()},children:[(0,l.jsxs)("div",{className:se,children:[(0,l.jsx)("span",{className:"truncate",children:ge}),A?(0,l.jsx)(L.pzk,{}):(0,l.jsx)(L._i7,{})]}),A&&(0,l.jsx)("div",{className:E()("absolute z-[100] left-0 w-full overflow-x-hidden overflow-y-auto",he),style:{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.15)",top:"calc(100% + 8px)"},children:(0,l.jsx)("div",{className:"",children:r.map(function(ne,H){return(0,l.jsx)("div",{style:{},className:E()("w-full break-all px-5 py-2 text-sm hover:bg-gray-16",{"text-green-2":H===s}),onClick:function(){return fe(H)},children:ne.text},"select_item_".concat(H))})})})]})}var j=function(r){return(0,l.jsx)(g,u()({className:"h-[50px] px-5 items-center bg-stone-50 rounded-lg border border-neutral-200",currentClassName:"h-full flex justify-between items-center"},r))}},8965:function(ae,M,e){e.d(M,{H4:function(){return P},Kv:function(){return U},TW:function(){return i},Tz:function(){return B},We:function(){return N},Y5:function(){return L},cc:function(){return E},cu:function(){return l},e0:function(){return p},uU:function(){return C}});var O=e(97207),u=e.n(O),v=e(94437),d=e(54916);function U(a){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return(0,v.ZP)("/api/product-system/".concat(a,"/detail"),{refreshInterval:g})}function P(a){return(0,v.ZP)(u().isNil(a)?null:"/api/verifyRecord/".concat(a,"/detail"))}function N(a){return(0,v.ZP)(a?"/api/inventory/all":null)}function B(a){return(0,v.ZP)(a?"/api/verifyRecord/verifiers":null)}function C(a){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return(0,v.ZP)("/api/product-system/list/?pageNum=".concat(a,"&pageSize=10"),{refreshInterval:g})}function E(a){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return(0,v.ZP)("/api/inventory/list/?pageNum=".concat(a,"&pageSize=10"),{refreshInterval:g})}function L(a){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return(0,v.ZP)("/api/verifyRecord/list/?pageNum=".concat(a,"&pageSize=10"),{refreshInterval:g})}function p(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return(0,v.ZP)("/api/sbt/token/list/?pageNum=".concat(a,"&pageSize=999"))}function i(a){return(0,v.ZP)(a?"/api/sbt/token/uuid/".concat(a):null,{fetcher:d.Gh})}function l(a){return(0,v.ZP)(a?"/api/sbt/token/nft/".concat(a):null,{fetcher:d.Gh})}},97980:function(ae,M,e){e.d(M,{R:function(){return u}});var O=e(79685);function u(v){var d=(0,O.useRef)(v);return(0,O.useLayoutEffect)(function(){d.current=v}),(0,O.useCallback)(function(){return d.current&&d.current.apply(d,arguments)},[])}},11187:function(ae,M,e){e.r(M),e.d(M,{default:function(){return Fe}});var O=e(48651),u=e.n(O),v=e(86516),d=e.n(v),U=e(64082),P=e(18842),N=e(9991),B=e(99095),C=e(31196),E=e(8965),L=e(97207),p=e.n(L),i=e(79685),l=e(70300),a=e.n(l),g=e(11e3),j=e(95968),c=e(6528),r=e(22786),s=e.n(r),S=e(46299),R=e.n(S),I=e(54916);function ie(){var de=arguments.length>0&&arguments[0]!==void 0?arguments[0]:5,D=(0,i.useRef)(new AbortController),te=function(K){var T=K,re=function(){if(T.length!==0){var F=T[0];return T=p().drop(T),{file:F,index:K.length-T.length-1}}},k=p().min([de,T.length]),G=p().range(K.length),V=function(){var Q=R()(s()().mark(function F(){var y,$,J,b;return s()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:if(y=re(),!y){m.next=10;break}return $=y.file,J=y.index,m.next=6,(0,I.qM)($,{signal:D.current.signal});case 6:b=m.sent,G[J]=b,m.next=11;break;case 10:return m.abrupt("return");case 11:m.next=0;break;case 13:case"end":return m.stop()}},F)}));return function(){return Q.apply(this,arguments)}}();return Promise.all(p().range(k).map(function(){return V()})).then(function(){return G})};return[te,function(){try{D.current.abort()}catch(Z){console.info("abort upfiles")}}]}var se=e(81123),_e=e(68591),he=e.n(_e),ge=e(98919),n=e(63342),x=function(D){return(0,n.jsxs)("div",{className:"w-full flex flex-col gap-2.5",children:[(0,n.jsxs)("span",{className:"font-normal leading-6 text-[16px]",children:[D.title,"\uFF1A"]}),D.children]})},A=function(D){return(0,n.jsx)("div",{className:"font-normal leading-[21.79px] text-[16px] text-gray-9",children:D.value})},ee=function(D){var te,Z,K,T,re,k,G,V=D.closeModal,Q=D.recordId,F=D.type,y=F===void 0?"new":F,$=(0,i.useRef)(null),J=(0,B.oR)(),b=J.userData,ce=(0,E.H4)(Q),m=ce.isLoading,t=ce.data,oe=(0,E.We)(y==="new"||y==="editor"),X=oe.isLoading,Y=oe.data,Ce=(0,E.Tz)(y==="new"||y==="editor"),De=Ce.isLoading,h=Ce.data,z=m||X||De,W=(0,i.useMemo)(function(){return[(Y||[]).map(function(_){return u()(u()({},_),{},{text:_.loadName})}),p().findIndex(Y,function(_){return _.loadNumber===(t==null?void 0:t.loadNumber)})]},[Y,t]),w=c.dW.apply(void 0,a()(W)),xe=(0,i.useMemo)(function(){return[(h||[]).map(function(_){return u()(u()({},_),{},{text:_.name})}),p().findIndex(h,function(_){var f;return _.id===(t==null||(f=t.verifyUser)===null||f===void 0?void 0:f.id)})]},[h,t]),q=c.dW.apply(void 0,a()(xe)),We=(0,ge.Z)({verifyState:!0}),Me=d()(We,2),o=Me[0],me=Me[1],Ke=ie(),Oe=d()(Ke,2),Pe=Oe[0],ze=Oe[1];(0,i.useEffect)(function(){return ze},[]);var Ee=!o.files||o.files.length===0||o.files.length>20||p().findIndex(o.files,function(_){return _.size>=1024*1024*1024*2||_.name.length>=128})>=0,Ne=!Y||!h||!o.name||w.current<0||q.current<0||Ee,we=(0,i.useState)(!1),Be=d()(we,2),le=Be[0],ve=Be[1],Ve=function(){Ne||le||(ve(!0),Pe(o.files).then(function(f){return(0,I._Q)({name:o.name,loadNumber:Y[w.current].loadNumber,description:o.desc||"",fileList:f,verifyUserId:h[q.current].id}).then(function(){return V(!0)}).catch(console.error).finally(function(){ve(!1)})}))},Ae=!t||!Y||!h||(o.name||t.name)===t.name&&(o.desc||t.description)===t.description&&((te=Y[w.current])===null||te===void 0?void 0:te.loadNumber)===t.loadNumber&&((Z=h[q.current])===null||Z===void 0?void 0:Z.id)===t.verifyUserId&&Ee,$e=function(){if(!(Ae||le)){var f;ve(!0),o.files?f=Pe(o.files).then(function(je){return(0,I.u_)(t.id,{name:o.name||t.name,loadNumber:Y[w.current].loadNumber,description:o.desc||t.description,fileList:je,verifyUserId:h[q.current].id})}):f=(0,I.u_)(t.id,{name:o.name,loadNumber:Y[w.current].loadNumber,description:o.desc,verifyUserId:h[q.current].id}),f.then(function(){return V(!0)}).catch(console.error).finally(function(){ve(!1)})}},Ie=!t||Ee||!o.functionalUnit||!o.evaluationBoundary||!o.evaluationBasis||!o.evaluationExpireTime,Ze=function(){Ie||!o.files||le||(ve(!0),Pe(o.files).then(function(f){return(0,I.A6)(t.id,{fileList:f,state:!0,functionalUnit:o.functionalUnit,evaluationBoundary:o.evaluationBoundary,evaluationBasis:o.evaluationBasis,evaluationExpireTime:o.evaluationExpireTime+" 00:00:00"})}).then(function(){return V(!0)}).catch(console.error).finally(function(){ve(!1)}))},ke={directory:"",webkitdirectory:""},pe="w-full shrink-0 px-5 border border-[#DDDDDD]  h-[50px]  bg-[#F8F8F8] rounded-lg",Le=y==="verify",Xe=(0,i.useMemo)(function(){var _;if(Ee||!o.files)return"\u9A8C\u8BC1\u6587\u4EF6";var f=((_=o.files.item(0))===null||_===void 0?void 0:_.webkitRelativePath.split("/")[0])||"\u9A8C\u8BC1\u6587\u4EF6";return(0,se.lS)(f,10,10)},[o.files,Ee]),Re=function(){return(0,n.jsx)(x,{title:Le?"\u9A8C\u8BC1\u6587\u6863":"\u9644\u4EF6",children:(0,n.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,n.jsx)("input",u()(u()({},ke),{},{ref:$,type:"file",hidden:!0,onChange:function(je){return me({files:je.target.files})}})),(0,n.jsx)(C.SW,{}),(0,n.jsx)(A,{value:Xe}),(0,n.jsx)("div",{onClick:function(je){var be;return!le&&((be=$.current)===null||be===void 0?void 0:be.click())},className:he()("flex  rounded-[4px] leading-4 text-[16px] bg-[#F1F1F1] w-[100px] h-[24px]  text-center items-center justify-center ",le?"cursor-not-allowed":"cursor-pointer"),children:"\u9009\u62E9\u6587\u4EF6\u5939"})]})})};return(0,n.jsx)(i.Fragment,{children:(0,n.jsxs)(j.u_,{className:"rounded-lg",containerClassName:"mx-5 max-w-[640px]",titleClassName:"text-[20px] leading-5 font-bold",title:y==="new"?"\u65B0\u5EFA\u9A8C\u8BC1\u8BB0\u5F55":"\u7F16\u8F91\u9A8C\u8BC1\u8BB0\u5F55",onClose:function(){return V(!1)},children:[(0,n.jsxs)("div",{className:"flex flex-col py-[1px] gap-5 px-5 w-[640px] min-h-[6.25rem] max-h-mc overflow-y-auto",children:[z&&(0,n.jsx)(g.g,{}),!z&&(0,n.jsx)(n.Fragment,{children:Le?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x,{title:"\u9A8C\u8BC1\u8BB0\u5F55",children:(0,n.jsx)(A,{value:t==null?void 0:t.name})}),(0,n.jsx)(x,{title:"\u9A8C\u8BC1\u8BB0\u5F55ID",children:(0,n.jsx)(A,{value:t==null?void 0:t.id})}),(0,n.jsx)(x,{title:"\u53D1\u8D77\u4EBA",children:(0,n.jsx)(A,{value:t==null||(K=t.createUser)===null||K===void 0?void 0:K.name})}),(0,n.jsx)(x,{title:"\u7EC4\u7EC7\u673A\u6784",children:(0,n.jsx)(A,{value:t==null||(T=t.organization)===null||T===void 0?void 0:T.name})}),(0,n.jsx)(x,{title:"\u63CF\u8FF0",children:(0,n.jsx)(A,{value:t==null?void 0:t.description})}),(0,n.jsx)(x,{title:"\u78B3\u8DB3\u8FF9\u6279\u6B21",children:(0,n.jsx)(A,{value:t==null||(re=t.inventory)===null||re===void 0?void 0:re.loadName})}),(0,n.jsx)(x,{title:"\u78B3\u8DB3\u8FF9\u6279\u6B21ID",children:(0,n.jsx)(A,{value:t==null?void 0:t.loadNumber})}),(0,n.jsx)(x,{title:"\u9A8C\u8BC1\u4EBA",children:(0,n.jsx)(A,{value:t==null||(k=t.verifyUser)===null||k===void 0?void 0:k.name})}),Re(),(0,n.jsx)(x,{title:"\u529F\u80FD\u5355\u4F4D",children:(0,n.jsx)("input",{value:o.functionalUnit||(t==null?void 0:t.functionalUnit),onChange:function(f){return me({functionalUnit:f.target.value})},maxLength:30,className:pe})}),(0,n.jsx)(x,{title:"\u8BC4\u4EF7\u8FB9\u754C",children:(0,n.jsx)("input",{value:o.evaluationBoundary||(t==null?void 0:t.evaluationBoundary),onChange:function(f){return me({evaluationBoundary:f.target.value})},maxLength:30,className:pe})}),(0,n.jsx)(x,{title:"\u8BC4\u4EF7\u4F9D\u636E",children:(0,n.jsx)("input",{value:o.evaluationBasis||(t==null?void 0:t.evaluationBasis),onChange:function(f){return me({evaluationBasis:f.target.value})},maxLength:30,className:pe})}),(0,n.jsx)(x,{title:"\u8BC4\u4EF7\u6709\u6548\u671F",children:(0,n.jsx)("input",{value:o.evaluationExpireTime||(t==null?void 0:t.evaluationExpireTime),type:"date",onChange:function(f){console.info("inputTime:",f.target.value),me({evaluationExpireTime:f.target.value})},maxLength:30,className:pe})})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x,{title:"\u9A8C\u8BC1\u8BB0\u5F55",children:(0,n.jsx)("input",{value:o.name||(t==null?void 0:t.name),onChange:function(f){return me({name:f.target.value})},maxLength:30,className:pe})}),(0,n.jsx)(x,{title:"\u78B3\u8DB3\u8FF9\u6279\u6B21",children:(0,n.jsx)(c.ub,u()({},w))}),(0,n.jsx)(x,{title:"\u63CF\u8FF0",children:(0,n.jsx)("input",{value:o.desc||(t==null?void 0:t.description),onChange:function(f){return me({desc:f.target.value})},maxLength:100,className:pe})}),(0,n.jsx)(x,{title:"\u9009\u62E9\u9A8C\u8BC1\u4EBA",children:(0,n.jsx)(c.ub,u()({},q))}),(0,n.jsx)(x,{title:"\u53D1\u8D77\u4EBA",children:(0,n.jsx)(A,{value:b==null?void 0:b.name})}),(0,n.jsx)(x,{title:"\u7EC4\u7EC7\u673A\u6784",children:(0,n.jsx)(A,{value:b==null||(G=b.organization)===null||G===void 0?void 0:G.name})}),Re()]})})]}),!z&&(0,n.jsxs)("div",{className:"flex flex-row justify-between gap-5 mt-5 w-full px-5",children:[y==="new"&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(N.u,{defStyle:"btn-primary-1",className:"flex-1",onClick:function(){return V(!1)},children:"\u53D6\u6D88"}),(0,n.jsx)(N.u,{busy:le,disabled:Ne,defStyle:"btn-primary",className:"flex-1",onClick:Ve,children:"\u786E\u5B9A"})]}),y==="editor"&&(0,n.jsx)(N.u,{busy:le,disabled:Ae,className:"flex-1",onClick:$e,children:"\u63D0\u4EA4\u66F4\u65B0"}),y==="verify"&&(0,n.jsx)(N.u,{busy:le,disabled:Ie,className:"flex-1",onClick:Ze,children:"\u63D0\u4EA4\u9A8C\u8BC1"})]})]})})},fe=ee,ue=e(30905),ne=e.n(ue),H=e(64470),ye=function(D){var te=D.closeModal,Z=D.fileList,K=(0,i.useState)(!1),T=d()(K,2),re=T[0],k=T[1],G=(0,B.h3)(),V=function(){var Q=R()(s()().mark(function F(){var y,$,J,b;return s()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return k(!0),m.prev=1,y=new(ne()),$="",Z.forEach(function(t){$=t.fileName.split("/")[0];var oe=H.default.get(t.downloadUrl,{responseType:"arraybuffer"}).then(function(X){return X.data});y.file(t.fileName,oe)}),m.next=7,y.generateAsync({type:"blob"});case 7:J=m.sent,b=document.createElement("a"),b.href=URL.createObjectURL(J),b.download="".concat($,".zip"),b.click(),URL.revokeObjectURL(b.href),m.next=18;break;case 15:m.prev=15,m.t0=m.catch(1),G("\u6587\u4EF6\u4E0B\u8F7D\u51FA\u9519\uFF01");case 18:return m.prev=18,k(!1),m.finish(18);case 21:case"end":return m.stop()}},F,null,[[1,15,18,21]])}));return function(){return Q.apply(this,arguments)}}();return(0,n.jsx)(i.Fragment,{children:(0,n.jsxs)(j.u_,{onClose:te,title:"\u67E5\u770B\u6587\u4EF6\u5939",children:[(0,n.jsx)("div",{className:"px-5 overflow-y-auto  max-h-[260px]",children:Z.map(function(Q,F){var y=Q.fileName.split("/");return(0,n.jsx)("div",{id:"view",className:"w-[640px] h-[34px] flex items-center ",children:(0,n.jsx)("span",{className:"ml-[10px] leading-5 text-[16px] font-normal",children:y[y.length-1]})},"file_".concat(F))})}),(0,n.jsx)("button",{disabled:re,className:"bg-[#29953A] w-full h-[50px] rounded-lg text-[#FFFFFF] mt-5",onClick:V,children:"\u4E0B\u8F7D"})]})})},Te=ye;function Ue(){var de=(0,B.oR)(),D=de.userData,te=(0,i.useState)(1),Z=d()(te,2),K=Z[0],T=Z[1],re=(0,i.useState)(!1),k=d()(re,2),G=k[0],V=k[1],Q=(0,i.useState)(!1),F=d()(Q,2),y=F[0],$=F[1],J=(0,i.useRef)([]),b=(0,i.useRef)(),ce=function(z){J.current=z,$(!0)},m=(0,i.useCallback)(function(h){V(!0),b.current={type:p().isEmpty(h)?"new":(D==null?void 0:D.role)==="verify"?"verify":"editor",recordId:h.id}},[D]),t=(0,i.useMemo)(function(){return[{title:"\u9A8C\u8BC1\u8BB0\u5F55",dataIndex:"name",width:160,ellipsis:!0},{title:"\u9A8C\u8BC1\u8BB0\u5F55ID",dataIndex:"id",width:160,ellipsis:!0},{title:"\u53D1\u8D77\u4EBA",dataIndex:"_createUserName",width:160,ellipsis:!0},{title:"\u7EC4\u7EC7\u673A\u6784",width:160,ellipsis:!0,dataIndex:"_organizationName"},{title:"\u78B3\u8DB3\u8FF9\u6279\u6B21",dataIndex:"_loadName",width:160,ellipsis:!0},{title:"\u78B3\u8DB3\u8FF9\u6279\u6B21ID",dataIndex:"loadNumber",width:170,renderText:P.zL},{title:"\u9644\u4EF6",width:160,render:function(z,W){return(0,n.jsxs)("div",{onClick:function(){return ce(W.attachmentFileList)},className:"w-[112px] flex flex-row items-center bg-[#F1F1F1] justify-center rounded cursor-pointer",children:[(0,n.jsx)(C.SW,{}),(0,n.jsx)("div",{className:"ml-2 ",children:"\u6587\u4EF6\u5939"})]})}},{title:"\u6700\u540E\u7F16\u8F91",dataIndex:"updateTime",valueType:"dateTime",width:170},{title:"\u9A8C\u8BC1\u4EBA",dataIndex:"_verifyUserName",width:160,ellipsis:!0},{title:"\u9A8C\u8BC1\u6587\u6863",width:130,render:function(z,W){return W.verifyFileList.length?(0,n.jsxs)("div",{onClick:function(){return ce(W.verifyFileList)},className:"w-[112px] flex flex-row items-center bg-[#F1F1F1] justify-center rounded cursor-pointer",children:[(0,n.jsx)(C.SW,{}),(0,n.jsx)("div",{className:"ml-2 ",children:"\u6587\u4EF6\u5939"})]}):null}},{title:"\u9A8C\u8BC1\u72B6\u6001",width:130,render:function(z,W){return(0,n.jsx)("span",{className:"",children:W.state?"\u5DF2\u9A8C\u8BC1":""})}},{title:"\u9A8C\u8BC1\u65F6\u95F4",dataIndex:"proofTime",valueType:"dateTime",width:170},{title:"\u64CD\u4F5C",width:120,valueType:"option",render:function(z,W){return W.state?[]:[(0,n.jsx)("div",{className:"flex justify-between flex-1 text-green-2 break-keep",children:(0,n.jsx)("div",{className:"flex items-center font-normal justify-center cursor-pointer leading-[27px]",onClick:function(){return m(W)},children:"\u7F16\u8F91"})},"edit")]}}]},[m]),oe=(0,E.Y5)(K),X=oe.data,Y=oe.isLoading,Ce=oe.mutate,De=(0,i.useMemo)(function(){return((X==null?void 0:X.records)||[]).map(function(h,z){var W,w,xe,q;return u()(u()({},h),{},{key:"verify_"+z,_createUserName:(W=h.createUser)===null||W===void 0?void 0:W.name,_organizationName:(w=h.organization)===null||w===void 0?void 0:w.name,_loadName:(xe=h.inventory)===null||xe===void 0?void 0:xe.loadName,_verifyUserName:(q=h.verifyUser)===null||q===void 0?void 0:q.name})})},[X]);return(0,n.jsxs)(U.Z,{title:"\u9A8C\u8BC1\u7BA1\u7406\u5217\u8868",extra:(D==null?void 0:D.role)==="admin"?[(0,n.jsx)(N.u,{onClick:function(){return m({})},children:"\u65B0\u5EFA\u9A8C\u8BC1\u8BB0\u5F55"},"key_new_verify")]:[],children:[(0,n.jsx)("div",{className:"bg-white",children:(0,n.jsx)(P.ZP,{columns:t,dataSource:De,loading:Y,scroll:{x:scrollX},pagination:{pageSize:10,total:(X==null?void 0:X.total)||0,current:K,onChange:function(z){T(z)}}})}),G&&b.current&&(0,n.jsx)(fe,{type:b.current.type,recordId:b.current.recordId,closeModal:function(){T(1),K===1&&Ce(),V(!1),b.current=void 0}}),y&&(0,n.jsx)(Te,{fileList:J.current,closeModal:function(){$(!1)}})]})}var Se=Ue,Fe=Se}}]);
