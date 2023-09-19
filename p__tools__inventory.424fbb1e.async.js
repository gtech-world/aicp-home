"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[9725],{62353:function(je,V,e){e.d(V,{dW:function(){return ne},ub:function(){return pe}});var k=e(86378),u=e.n(k),Q=e(30577),x=e.n(Q),p=e(75974),C=e(84875),c=e.n(C),m=e(50959),ae=e(1950),U=e(99592),A=e(77588),h=e(11527);function ne(f){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=(0,m.useState)(n),D=x()(o,2),y=D[0],S=D[1];return(0,m.useEffect)(function(){S(n)},[f,n]),{onChange:S,items:f,current:y}}function ve(f){var n=f.items,o=f.current,D=f.onChange,y=f.className,S=y===void 0?"bg-white text-black px-5 py-3 text-lg rounded-lg w-[31.25rem] mo:w-full mo:text-sm":y,r=f.currentClassName,P=r===void 0?"flex justify-between items-center":r,L=f.openClassName,z=L===void 0?"max-h-[18rem] bg-white  rounded-lg py-3 ":L,t=n[o]?n[o].text:"",j=(0,U.Z)(!1),E=x()(j,2),X=E[0],Y=E[1],he=(0,m.useCallback)(function(R){o!==R&&D(R)},[o]),b=(0,p.E)("t-side");return(0,A.Z)(b,function(){return X&&Y(!1)}),n.length===0?null:(0,h.jsxs)("div",{ref:b,className:c()("relative cursor-pointer",S),onClick:function(){return Y()},children:[(0,h.jsxs)("div",{className:P,children:[(0,h.jsx)("span",{className:"truncate",children:t}),X?(0,h.jsx)(ae.pzk,{}):(0,h.jsx)(ae._i7,{})]}),X&&(0,h.jsx)("div",{className:c()("absolute z-[100] left-0 w-full overflow-x-hidden overflow-y-auto",z),style:{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.15)",top:"calc(100% + 8px)"},children:(0,h.jsx)("div",{className:"",children:n.map(function(R,K){return(0,h.jsx)("div",{style:{},className:c()("w-full break-all px-5 py-2 text-sm hover:bg-gray-16",{"text-green-2":K===o}),onClick:function(){return he(K)},children:R.text},"select_item_".concat(K))})})})]})}var pe=function(n){return(0,h.jsx)(ve,u()({className:"h-[50px] px-5 items-center bg-stone-50 rounded-lg border border-neutral-200",currentClassName:"h-full flex justify-between items-center"},n))}},10225:function(je,V,e){e.d(V,{d:function(){return pe}});var k=e(86378),u=e.n(k),Q=e(28488),x=e.n(Q),p=e(72121),C=e(50959),c=e(11527);function m(){return(0,c.jsx)("tr",{className:"text-lg font-normal text-center text-black ",children:(0,c.jsx)("td",{colSpan:100,className:"h-[100px] py-5 align-top",children:"\u65E0\u6570\u636E"})})}var ae=function(n){var o=n.header,D=n.data,y=n.empty,S=y===void 0?(0,c.jsx)(m,{}):y,r=n.className,P=r===void 0?"relative min-w-full bg-neutral-200 ":r,L=n.headerClassName,z=L===void 0?"bg-neutral-200 sticky top-0 text-left text-black text-lg font-bold leading-[27px]":L,t=n.headerItemClassName,j=t===void 0?"p-3":t,E=n.tbodyClassName,X=E===void 0?"bg-white ":E,Y=n.rowClassName,he=Y===void 0?"text-black text-sm font-normal whitespace-nowrap":Y,b=n.cellClassName,R=b===void 0?"p-3":b;return(0,c.jsxs)("table",{className:P,children:[(0,c.jsx)("thead",{children:(0,c.jsx)("tr",{className:z,children:o.map(function(K,re){return(0,c.jsx)("th",{scope:"col",className:j,children:K},re)})})}),(0,c.jsxs)("tbody",{className:X,children:[D.map(function(K,re){return(0,c.jsx)("tr",{className:he,children:K.map(function(be,ge){return(0,c.jsx)("td",{className:R,children:be},ge)})},re)}),D.length===0&&S]})]})},U=ae,A=e(89850),h=e(32699),ne=e.n(h),ve=["data","inputData","header"];function pe(f){var n=f.data,o=f.inputData,D=f.header,y=D===void 0?["\u53C2\u6570\u540D","\u8FC7\u7A0B\u540D\u79F0","\u53C2\u8003\u503C","\u8F93\u5165\u503C"]:D,S=x()(f,ve),r=(0,C.useMemo)(function(){var P;if(!n)return[];var L=o?ne().mapKeys(typeof o=="string"?(0,A.OA)(o)||[]:o,function(j){return j.paramName}):{},z=(0,A.OA)(n)||[],t=((P=z[0])===null||P===void 0?void 0:P.parameters)||[];return t.map(function(j){var E;return[j.name,j.context.name,j.value,((E=L[j.name])===null||E===void 0?void 0:E.paramValue)||""]})},[n,o]);return(0,c.jsx)(p.u_,u()(u()({title:"\u5B9E\u666F\u6570\u636E"},S),{},{children:(0,c.jsx)("div",{className:"w-[40rem] px-5 max-h-mc overflow-y-auto",children:(0,c.jsx)(U,{data:r,header:y})})}))}},81609:function(je,V,e){e.d(V,{b:function(){return Q},n:function(){return u}});var k=e(33665);function u(){var x=(0,k.oR)(),p=x.userData,C=x.inited;return C&&(p==null?void 0:p.role)==="verify"}function Q(){var x=(0,k.oR)(),p=x.userData,C=x.inited;return C&&(p==null?void 0:p.role)!=="verify"}},11257:function(je,V,e){e.r(V),e.d(V,{default:function(){return be}});var k=e(86378),u=e.n(k),Q=e(58357),x=e.n(Q),p=e(71977),C=e.n(p),c=e(30577),m=e.n(c),ae=e(24047),U=e.n(ae),A=e(67454),h=e(67747),ne=e(51500),ve=e(98286),pe=e(10225),f=e(81609),n=e(97707),o=e(89850),D=e(35016),y=e(84875),S=e.n(y),r=e(50959),P=e(72121),L=e(62353),z=e(9441),t=e(11527),j=function(B){var v=B.onOpenModal,O=B.realData,g=B.tableData,T=B.realArr,_=(0,r.useState)(g),le=m()(_,2),oe=le[0],se=le[1],ie=(0,z.N)(),q=ie.formatDate,Ne=function(){for(var d,N=(d=document)===null||d===void 0?void 0:d.getElementById("realDataTable"),de=N.getElementsByTagName("tr"),H=[],F=0;F<de.length;F++){for(var ee=[],ce=de[F].getElementsByTagName("input"),G=0;G<ce.length;G++){var J=ce[G].value;ee.push(J)}H.push(ee)}var me=[];me=g==null?void 0:g.map(function(a,l){var i={processId:a.context["@id"],paramValue:H.slice(1)[l][0]||a.value.toString(),paramName:a.name,dateTime:q(Date.now())};return i});var s={lcaParamList:me};typeof v=="function"&&v(),typeof O=="function"&&O(s)};(0,r.useEffect)(function(){var I=g==null?void 0:g.map(function(d,N){return T!=null&&T.length&&T[N].paramName===d.name?u()(u()({},d),{},{inputValue:T[N].paramValue}):u()({},d)});se(I)},[T,g]);var ue=[{title:"\u53C2\u6570\u540D",dataIndex:"name",width:"9rem",render:function(d){return(0,t.jsx)("div",{className:" flex items-center h-[33px] font-normal leading-[21px] text-[14px] ",children:d})}},{title:"\u8FC7\u7A0B\u540D\u79F0",dataIndex:"name",width:"7rem",render:function(d,N){return(0,t.jsx)("div",{className:"flex items-center  h-[33px] font-normal leading-[21px] text-[14px] ",children:N.context.name})}},{title:"\u53C2\u8003\u503C",width:"10rem",dataIndex:"value",render:function(d){return(0,t.jsx)("div",{className:"flex items-center h-[33px] font-normal leading-[21px] text-[14px] ",children:d})}},{title:"\u586B\u5165\u503C",width:"10rem",dataIndex:"createTime",render:function(d,N){return(0,t.jsx)("input",{defaultValue:N.inputValue,type:"number",className:"font-normal  leading-[21px] text-[14px] w-[10rem] h-[33px] "})}}];return(0,t.jsxs)(P.u_,{title:"\u5B9E\u666F\u6570\u636E\u586B\u62A5",containerClassName:"mx-5 max-w-[640px]",titleClassName:"text-[20px] leading-5 font-bold",onClose:typeof v=="function"&&v||void 0,children:[(0,t.jsx)("div",{className:" mx-5 w-[640px] max-h-[400px] overflow-y-auto ",children:(0,t.jsx)(ne.i,{columns:ue,tableId:"realDataTable",data:oe||[],isSetBorder:!0,maxHeight:"calc(100vh - 260px)",headerClassName:{background:"#DDDDDD",position:"sticky",top:"-1px",fontWeight:"700",fontSize:"18px",lineHeight:"30px",height:"50px"}})}),(0,t.jsx)("div",{className:"mx-5 ",children:(0,t.jsxs)("div",{className:"flex flex-row justify-between gap-5 mt-5",children:[(0,t.jsx)(A.u,{onClick:typeof v=="function"&&v||void 0,defStyle:"btn-primary-1",className:"flex-1  font-normal  h-[50px] border-2 text-[18px]",children:"\u53D6\u6D88"}),(0,t.jsx)(A.u,{className:"flex-1 h-[50px]  font-normal  text-[18px]",onClick:Ne,children:"\u786E\u5B9A"})]})})]})},E=j,X={loadName:"",productId:""},Y=function(B){var v,O=B.openResultModal,g=B.getList,T=(0,r.useState)(!1),_=m()(T,2),le=_[0],oe=_[1],se=(0,r.useState)([{name:"",id:""}]),ie=m()(se,2),q=ie[0],Ne=ie[1],ue=(0,r.useState)({lcaParamList:[]}),I=m()(ue,2),d=I[0],N=I[1],de=(0,r.useState)([]),H=m()(de,2),F=H[0],ee=H[1],ce=(0,r.useState)(X),G=m()(ce,2),J=G[0],me=G[1],s=(0,r.useMemo)(function(){return q.map(function(W){return u()(u()({},W),{},{text:W.name})})},[q]),a=(0,L.dW)(s,-1),l=(v=a.items[a.current])===null||v===void 0?void 0:v.id,i=(0,r.useState)(!0),te=m()(i,2),$=te[0],Ce=te[1],ye=(0,z.N)(),Se=ye.formatDate,Ee=function(){(0,n.ev)().then(function(M){Ne(M||{name:"",id:""}),Ce(!1)}).catch(function(M){}).finally()},Te=function(){var M,fe=J.loadName;if(!(!fe||!l)){var Z=F==null?void 0:F.map(function(De){return{processId:De.context["@id"],paramValue:De.value.toString(),paramName:De.name,dateTime:Se(Date.now())}}),xe=(M=d.lcaParamList)!==null&&M!==void 0&&M.length?d:{lcaParamList:Z.length?Z:void 0},w=u()(u()({},xe),{},{loadName:fe,productId:l});(0,n.E)(w).then(function(De){typeof g=="function"&&g()}).catch(function(De){}).finally(function(){typeof O=="function"&&O()})}};(0,r.useEffect)(function(){Ee()},[]);var Ie=function(){l&&oe(!0)},Me=function(M){var fe=M.target,Z=fe.name,xe=fe.value;me(function(w){return u()(u()({},w),{},U()({},Z,xe))})},we=function(){var W=C()(x()().mark(function M(){return x()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:(0,n.NF)(l).then(function(xe){var w=JSON.parse(xe.paramDetail)[0]||[];ee(JSON.stringify(w)==="{}"||!(w!=null&&w.parameters)?[]:w==null?void 0:w.parameters)}).catch(function(xe){}).finally();case 1:case"end":return Z.stop()}},M)}));return function(){return W.apply(this,arguments)}}();return(0,r.useEffect)(function(){l&&we()},[l]),$?null:(0,t.jsxs)(r.Fragment,{children:[(0,t.jsx)(P.u_,{className:"rounded-lg",containerClassName:"mx-5 w-[640px]",titleClassName:"text-[20px] leading-5 font-bold",title:"\u65B0\u5EFA\u78B3\u8DB3\u8FF9\u7ED3\u679C",onClose:O,children:(0,t.jsxs)("div",{className:"mx-5 w-[640px] ",children:[(0,t.jsx)("span",{className:"font-normal leading-6 ",children:"\u78B3\u8DB3\u8FF9\u6279\u6B21\uFF1A"}),(0,t.jsx)("input",{value:J.loadName,onChange:Me,id:"loadName",name:"loadName",maxLength:30,className:"w-full mb-[20px] mt-[10px] px-5 border border-[#DDDDDD]  h-[50px]  bg-[#F8F8F8] rounded-lg"}),(0,t.jsx)("div",{className:"font-normal leading-6  mb-[10px]",children:"\u4EA7\u54C1\u7CFB\u7EDF\uFF1A"}),(0,t.jsx)(L.ub,u()(u()({},a),{},{openClassName:"max-h-[9rem] bg-white  rounded-lg py-3 "})),(0,t.jsx)("div",{className:"mt-5 font-normal leading-6",children:"\u5B9E\u666F\u6570\u636E\u586B\u62A5\uFF1A"}),(0,t.jsx)("div",{onClick:function(){return Ie()},className:" flex cursor-pointer rounded-[4px] leading-4 text-[16px] mt-[10px] bg-[#F1F1F1] w-[84px] h-[24px]  text-center items-center justify-center ",children:"\u524D\u5F80\u586B\u5199"}),(0,t.jsxs)("div",{className:"flex flex-row justify-between gap-5 mt-5",children:[(0,t.jsx)(A.u,{onClick:O,defStyle:"btn-primary-1",className:"flex-1  font-normal  h-[50px] border-2 text-[18px]",children:"\u53D6\u6D88"}),(0,t.jsx)(A.u,{className:"flex-1 h-[50px]  font-normal  text-[18px]",onClick:Te,disabled:!l||!J.loadName,children:"\u8BA1\u7B97\u78B3\u7ED3\u679C"})]})]})}),le&&(0,t.jsx)(E,{realData:N,tableData:F,realArr:d.lcaParamList,onOpenModal:function(){return oe(!1)}})]})},he=Y,b,R=(b={},U()(b,-1,{color:"text-[red]",text:"\u8BA1\u7B97\u5931\u8D25"}),U()(b,0,{color:"text-[#FF9800]",text:"\u7B49\u5F85\u8BA1\u7B97"}),U()(b,1,{color:"text-green-2",text:"\u67E5\u770B\u7ED3\u679C"}),U()(b,2,{color:"text-blue-600",text:"\u6B63\u5728\u8BA1\u7B97"}),b);function K(){var ge=(0,r.useState)(1),B=m()(ge,2),v=B[0],O=B[1],g=(0,r.useState)({}),T=m()(g,2),_=T[0],le=T[1],oe=(0,r.useState)(!1),se=m()(oe,2),ie=se[0],q=se[1],Ne=(0,r.useState)(!1),ue=m()(Ne,2),I=ue[0],d=ue[1],N=(0,r.useRef)({inputData:"",data:""}),de=(0,r.useState)(!0),H=m()(de,2),F=H[0],ee=H[1],ce=function(a){var l=a.param,i=a.paramDetail;N.current={inputData:l,data:i},d(!0)},G=(0,r.useMemo)(function(){return[{title:"\u78B3\u8DB3\u8FF9\u6279\u6B21",dataIndex:"loadName",width:"180px",render:function(a){return(0,t.jsx)("span",{"data-tooltip-id":"tooltip","data-tooltip-place":"top-start","data-tooltip-content":(0,o.iT)(a,9),className:"w-[180px] font-normal  text-lg leading-[27px] truncate inline-block",children:a})}},{title:"\u5B9E\u666F\u6570\u636E",dataIndex:"productName",width:"6rem",render:function(a,l){return(0,t.jsx)("div",{className:"flex justify-center text-lg leading-[27px]  w-[8rem] bg-[#F1F1F1] rounded",onClick:function(){return ce(l)},children:(0,t.jsx)("span",{className:"cursor-pointer ",children:"\u67E5\u770B\u5B9E\u666F\u6570\u636E"})})}},{title:"\u6279\u6B21\u7ED3\u679CID",dataIndex:"loadNumber",width:"8rem",render:function(a){return(0,t.jsx)("span",{"data-tooltip-content":a,"data-tooltip-id":"tooltip",className:" text-lg leading-[27px] w-[13rem]  truncate inline-block",children:(0,o.lS)(a,8,8)})}},{title:"\u4EA7\u54C1\u7CFB\u7EDF\u540D\u79F0",width:"2rem",dataIndex:"productName",render:function(a){return(0,t.jsx)("span",{"data-tooltip-content":(0,o.iT)(a,15),"data-tooltip-id":"tooltip",className:" text-lg  truncate inline-block leading-[27px] max-w-[14rem] ",children:a})}},{title:"\u7CFB\u7EDF\u4EA7\u54C1ID",width:"7rem",dataIndex:"productUuid",render:function(a){return(0,t.jsx)("span",{"data-tooltip-content":a,"data-tooltip-id":"tooltip",className:"w-[13rem] text-lg leading-[27px]  truncate inline-block",children:(0,o.lS)(a,8,8)})}},{title:"\u63CF\u8FF0",dataIndex:"productDescription",width:"18.75rem",render:function(a){return(0,t.jsx)("span",{"data-tooltip-content":(0,o.iT)(a,11),"data-tooltip-id":"tooltip",className:"w-[13rem]  text-lg leading-[27px] truncate inline-block",children:a||"-"})}},{title:"\u64CD\u4F5C\u4EBA",dataIndex:"operator",width:"6.25rem",render:function(a){return(0,t.jsx)("span",{"data-tooltip-content":(0,o.iT)(a,19),"data-tooltip-id":"tooltip",className:" truncate inline-block text-lg leading-[27px] max-w-[14rem] ",children:a})}},{title:"\u751F\u6210\u65F6\u95F4",dataIndex:"calculateSuccessTime",width:"18.625rem",render:function(a){return(0,t.jsx)("span",{className:"max-w-[11rem] text-lg leading-[27px]  truncate inline-block",children:a})}},{title:"\u78B3\u8DB3\u8FF9\u7ED3\u679C",dataIndex:"description",width:"8.125rem",render:function(a,l){var i,te;return(0,t.jsx)("div",{className:S()("flex justify-between ".concat((i=R[l==null?void 0:l.state])===null||i===void 0?void 0:i.color)),children:(0,t.jsx)(D.Link,{className:"cursor-pointer text-lg leading-[27px]",to:l.state===1?"/tools/inventoryResult?id=".concat(l.loadNumber):"",children:(te=R[l==null?void 0:l.state])===null||te===void 0?void 0:te.text})})}},{title:"\u7EC4\u7EC7\u540D\u79F0",dataIndex:"orgName",width:"8.125rem",render:function(a){return(0,t.jsx)("span",{"data-tooltip-content":(0,o.iT)(a,11),"data-tooltip-id":"tooltip",className:"truncate inline-block text-lg leading-[27px] max-w-[14rem] ",children:a})}},{title:"\u7EC4\u7EC7\u7F16\u53F7",dataIndex:"orgSerialNumber",width:"8.125rem",emptyText:"-",render:function(a){return(0,t.jsx)("span",{"data-tooltip-id":"tooltip","data-tooltip-content":(0,o.iT)(a,11),className:"truncate inline-block text-lg leading-[27px] max-w-[14rem] ",children:a})}}]},[]),J=(0,r.useCallback)(C()(x()().mark(function s(){var a;return x()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,(0,n.h4)(v);case 3:a=i.sent,le(a),ee(!1),i.next=11;break;case 8:i.prev=8,i.t0=i.catch(0),console.log("eeee",i.t0);case 11:case"end":return i.stop()}},s,null,[[0,8]])})),[v]);(0,r.useEffect)(function(){var s=!1,a=function(){var l=C()(x()().mark(function i(){return x()().wrap(function($){for(;;)switch($.prev=$.next){case 0:if(!s){$.next=3;break}return $.abrupt("return");case 3:return $.next=5,J();case 5:return $.next=7,(0,o._v)(1e4);case 7:$.next=0;break;case 9:case"end":return $.stop()}},i)}));return function(){return l.apply(this,arguments)}}();return a(),function(){s=!0}},[]);var me=(0,f.b)();return(0,t.jsxs)(ve.m,{isNew:!0,className:"flex flex-col justify-between flex-1 text-black ",canBack:!0,link:{pathName:"/tools/tools",homeTitle:"\u4EA7\u54C1\u78B3\u8DB3\u8FF9\u5DE5\u5177\u96C6",currentTitle:"\u4EA7\u54C1\u78B3\u8DB3\u8FF9\u5B9E\u666F\u6E05\u5355\u5DE5\u5177"},children:[(0,t.jsxs)("div",{className:"",children:[(0,t.jsxs)("h3",{className:"flex items-center justify-between text-2xl font-semibold",children:[(0,t.jsx)("span",{children:"\u6211\u7684\u4EA7\u54C1\u78B3\u8DB3\u8FF9\u7ED3\u679C"}),me&&(0,t.jsx)(A.z,{onClick:function(){return q(!0)},className:S()("w-40 text-lg font-normal text-white rounded-lg bg-green-2 h-11"),children:"\u65B0\u5EFA\u78B3\u8DB3\u8FF9\u7ED3\u679C"})]}),(0,t.jsx)("div",{className:"w-full p-5 mt-5 bg-white rounded-2xl",children:(0,t.jsx)("div",{className:"pb-6 mt-5 overflow-x-auto",children:(0,t.jsx)("div",{className:"text-base leading-[1.625rem] min-w-[62.25rem]",children:(0,t.jsx)(ne.i,{loading:F,columns:G,columnsHeight:"h-[3.125rem] ",mouseHoverKey:"loadNumber",columnsClassName:" cursor-default ",data:(_==null?void 0:_.records)||[],className:"",headerClassName:{background:"#fff",fontWeight:"700",fontSize:"18px",lineHeight:"27px",height:"3.125rem"}})})})})]}),(0,t.jsx)(h.t,{className:"my-8",onChange:function(a,l){O(a),!(a===1||!l)&&(ee(!0),(0,o.k3)())},total:_.total||0,pgSize:10,pgNum:v}),ie&&(0,t.jsx)(he,{openResultModal:function(){return q(!1)},getList:function(){O(1),v===1&&J()}}),I&&(0,t.jsx)(pe.d,u()(u()({},N.current),{},{onClose:function(){return d(!1)}}))]})}var re=K,be=re}}]);