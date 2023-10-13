"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[3942],{81920:function(De,Q,a){a.d(Q,{o:function(){return g}});var q=a(79685);function g(){var V=(0,q.useRef)(!0);return(0,q.useEffect)(function(){return V.current=!0,function(){V.current=!1}},[]),V}},2042:function(De,Q,a){a.d(Q,{n:function(){return m},s:function(){return V}});var q=a(97207),g=a.n(q);function V(oe){var z=g().groupBy(oe,"flowId"),Z=function _($){$.forEach(function(k){if(k._child||(k._child=(k.childFlowIds||[]).map(function(ee){return z[ee][0]}),_(k._child)),k._child.length===0)k._depth=0;else{var se;k._depth=(((se=g().maxBy(k._child,"_depth"))===null||se===void 0?void 0:se._depth)||0)+1}})};Z(oe)}var m=function(z,Z){var _=typeof z=="string"?[z]:z;return!!g().find(_,function($){return $.startsWith(Z)})}},83529:function(De,Q,a){a.r(Q),a.d(Q,{default:function(){return gt}});var q=a(48651),g=a.n(q),V=a(86516),m=a.n(V),oe=a(64082),z=a(18842),Z=a(9991),_=a(11e3),$=a(95968),k=a(48294),se=a(38046),ee=a.n(se),Me=a(99095),Te=a(8965),Be=a(76222),te=a(81123),Oe=a(68591),ie=a.n(Oe),Ue=a(97207),ze=a.n(Ue),r=a(79685),Pe=a(12239),Ce=a(5053),We=a(70300),Ve=a.n(We),Ze=a(22786),ve=a.n(Ze),Ge=a(46299),Re=a.n(Ge),Ae=a(62905),Ke=a(58020),He=a(11209),Ye=a(62370),Je=a.n(Ye),e=a(63342),Xe={startOnLoad:!0,theme:"default",logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,flowchart:{htmlLabels:!0},themeVariables:{},sequence:{diagramMarginX:50,diagramMarginY:10,actorMargin:50,width:800,height:200,boxMargin:10,boxTextMargin:5,noteMargin:10,messageMargin:35,mirrorActors:!0,bottomMarginAdj:1,useMaxWidth:!0,rightAngles:!1,showSequenceNumbers:!1,wrapPadding:20},gantt:{titleTopMargin:25,barHeight:16,barGap:4,topPadding:50,leftPadding:75,gridLineStartPadding:35,fontSize:11,numberSectionStyles:4,axisFormat:"%Y-%m-%d"},class:{titleTopMargin:20,defaultRenderer:"dagre-wrapper"},pie:{}},Qe={count:1};function qe(t){var l=t.className,o=t.data,i=o===void 0?"":o,d=(0,r.useMemo)(function(){return"aicp_mermaid_".concat(Qe.count++)},[]),s=function(){var c=Re()(ve()().mark(function y(){var F,f,C,v,p;return ve()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(u.prev=0,F=document.querySelector("#"+d),F){u.next=4;break}return u.abrupt("return");case 4:return Ae.N.initialize(Xe),u.next=7,Ae.N.render(d+"-svg",i);case 7:if(f=u.sent,C=f.svg,v=f.bindFunctions,F.innerHTML=C,v==null||v(F),p=document.getElementById(d+"-svg"),p){u.next=15;break}return u.abrupt("return");case 15:p.setAttribute("height","100%"),p.style.maxWidth="100%",Je()(p,{mouseWheelZoomEnabled:!1,zoomEnabled:!0,controlIconsEnabled:!0}),u.next=23;break;case 20:u.prev=20,u.t0=u.catch(0),console.error(u.t0);case 23:case"end":return u.stop()}},y,null,[[0,20]])}));return function(){return c.apply(this,arguments)}}(),n=(0,Ke.Z)(),S=m()(n,2),N=S[0],j=S[1].width;return(0,He.Z)(s,300,[j,i]),(0,e.jsx)("div",{ref:N,id:d,className:ie()("mermaid p-2.5",l)})}var _e=qe,et=_e,Le=a(2042),tt=["onClose"],at=function(l){var o=l.onClose,i=ee()(l,tt),d=i.modelBomInfo,s=d===void 0?"":d,n=s&&JSON.parse(s),S=function(C,v){var p=(0,Le.n)(C.tagType,"REFERENCE"),E=(0,Le.n)(v.tagType,"REFERENCE");return p&&!E?-1:!p&&E?1:0},N=(n||[]).sort(S),j=[],c=`graph TD
`;(N||[]).forEach(function(f,C){var v=f.flowName,p=f.childFlowIds;c+="".concat(C+1,'["').concat(v,`"]
`),j.push("style ".concat(C+1,` color:black,fill:#F1F1F1,stroke:black
`)),p&&p.length>0&&p.forEach(function(E){var u=N.findIndex(function(A){return A.flowId===E});u!==-1&&(c+="".concat(u+1," --> ").concat(C+1,`
`),j.push("style ".concat(u+1,` color:black,fill:#F1F1F1,stroke:black
`)))})});var y=Ve()(new Set(j||[])).toString().replace(/,style/g," style"),F="".concat(c,`
`).concat(y);return(0,e.jsx)($.u_,g()(g()({},i),{},{title:"\u67E5\u770BBOM\u4FE1\u606F",titleClassName:"text-[16px]",onClose:o,children:(0,e.jsx)("div",{className:"flex flex-col gap-5 w-full min-w-[40rem] overflow-hidden mb-5",children:(0,e.jsxs)("div",{className:"flex flex-col gap-5 w-full flex-1 max-h-mc px-5 py-[1px] overflow-y-auto",children:[(0,e.jsx)(B,{tit:"BOM\u7ED3\u6784",value:(0,e.jsx)(et,{data:F,className:"flex justify-center w-[800px] h-[200px] bg-[#F1F1F1]"})}),(0,e.jsx)(B,{tit:"Part Number\u4FE1\u606F",value:null}),(N||[]).map(function(f,C){return(0,e.jsxs)("div",{className:"flex flex-row gap-10 p-0",children:[(0,e.jsx)("div",{className:"w-[200px] text-sm text-[#666666] ",children:f.flowName}),(0,e.jsx)("div",{className:"flex flex-wrap flex-shrink w-[30rem] items-center",children:((f==null?void 0:f.partNumbers)||[]).map(function(v,p){return(0,e.jsx)("div",{className:"flex max-w-lg items-center bg-[#F1F1F1] h-6 mb-[10px] rounded ml-5",children:(0,e.jsxs)("div",{className:" w-full text-sm mx-[10px] items-center font-normal","data-tooltip-id":"tooltip","data-tooltip-content":(0,te.iT)(v,10),children:["PN : ",(0,te.lS)(v,8,8)]})},"value_".concat(p))})})]},"info_".concat(C))})]})})}))},$e=at,nt=["ps"];function rt(t){var l,o,i,d,s=t.ps,n=ee()(t,nt),S=(0,Pe.Z)(!1),N=m()(S,2),j=N[0],c=N[1];return(0,e.jsxs)($.u_,g()(g()({title:s.name},n),{},{children:[(0,e.jsxs)("div",{className:"flex flex-col gap-5 w-full min-w-[40rem] px-5 py-[1px] max-h-mc overflow-y-auto",children:[(0,e.jsx)(B,{tit:"UID",value:s.uuid||"-"}),(0,e.jsx)(B,{tit:"\u7248\u672C",value:s.version||"-"}),(0,e.jsx)(B,{tit:"\u63CF\u8FF0",value:s.description||"-"}),(0,e.jsx)(B,{tit:"\u72B6\u6001",value:(0,e.jsx)(st,{status:s.state})}),(0,e.jsx)(B,{tit:"\u53D8\u66F4\u4EBA",value:((l=s.updateUser)===null||l===void 0?void 0:l.name)||"-"}),(0,e.jsx)(B,{tit:"\u4EA7\u54C1\u7CFB\u7EDFLCA\u6587\u4EF6",value:(0,e.jsx)(xe,{modelId:(o=s.model)===null||o===void 0?void 0:o.id,modelStatus:(i=s.model)===null||i===void 0?void 0:i.state,isRead:!0})}),(0,e.jsx)(B,{tit:"\u5B9E\u666F\u53C2\u6570\u5217\u8868",value:(0,e.jsx)(G,{action:"\u67E5\u770B",onClick:function(){return c(!0)}})}),(0,e.jsx)(it,{organization:s.org})]}),j&&(0,e.jsx)(Ce.d,{data:(d=s.model)===null||d===void 0?void 0:d.paramDetail,onClose:function(){return c(!1)}})]}))}var ke=a(46284),lt=null,ot=["psId","onSuccess"];function st(t){var l=t.status;return ze().isNil(l)?(0,e.jsx)("div",{className:"text-base font-normal leading-none text-neutral-400",children:"\u8349\u7A3F"}):(0,e.jsx)("div",{className:ie()("w-min whitespace-nowrap h-6 px-2.5 py-1 bg-opacity-10 rounded justify-start items-center gap-2.5 inline-flex",{"bg-rose-500":l!==1,"bg-green-600":l===1}),children:(0,e.jsx)("div",{className:ie()("text-green-600 text-base font-normal leading-none",{"text-rose-500":l!==1,"text-green-600":l===1}),children:l===1?"\u5F53\u524D\u4F7F\u7528":"\u8FC7\u53BB\u7248\u672C"})})}function G(t){var l=t.action,o=t.onClick,i=t.to;return i?(0,e.jsx)("div",{className:"w-min hover:border-[#29953A] mt-[-10px] hover:text-[#29953A] border text-[#000000] whitespace-nowrap h-6 px-2.5 py-1 bg-zinc-100 rounded-sm justify-start items-center gap-2.5 inline-flex cursor-pointer",children:(0,e.jsx)("a",{href:i,children:l})}):(0,e.jsx)("div",{className:"   w-min whitespace-nowrap mt-[-10px] hover:border-[#29953A] border text-[#000000]  h-6 px-2.5 py-1  rounded-sm justify-start items-center gap-2.5 inline-flex cursor-pointer",onClick:o,children:(0,e.jsx)("div",{className:"text-sm font-normal leading-none hover:text-[#29953A]   text-[#000000]",children:l})})}function xe(t){var l=t.psId,o=t.disableSelectFile,i=o===void 0?!1:o,d=t.openNewTab,s=d===void 0?!1:d,n=t.hiddenUpdate,S=t.modelId,N=t.isNew,j=t.isRead,c=t.modelStatus,y=t.file,F=t.onFileChange,f=t.btnText,C=f===void 0?"\u4E0A\u4F20\u6A21\u578B":f,v=(0,r.useRef)(null),p=function(){return c!==1?(0,e.jsx)("div",{className:"text-base font-normal leading-none text-amber-500",children:"\u7B49\u5F85\u89E3\u6790"}):(0,e.jsx)(G,{onClick:function(){return s?window.open("/model?id=".concat(S),"_blank"):void 0},to:s?void 0:"/model?id=".concat(S),action:"\u5728\u7EBF\u67E5\u770B"})},E=function(A){var L;!i&&((L=v.current)===null||L===void 0||L.click())};return(0,e.jsxs)("div",{className:"text-neutral-400 text-base font-normal leading-none flex items-center gap-2.5",children:[(0,e.jsx)("input",{ref:v,type:"file",hidden:!0,accept:".zip",onChange:F}),!j&&(0,te.lS)(y==null?void 0:y.name,10,10),j?p():N?(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(G,{action:C,onClick:E})}):(0,e.jsx)(e.Fragment,{children:!y&&p()})]})}function B(t){var l=typeof t.value=="string"||typeof t.value=="number";return(0,e.jsxs)("div",{className:"flex flex-col gap-2.5",children:[(0,e.jsxs)("div",{className:"text-sm font-normal leading-normal text-black ",children:[t.tit,": "]}),l?(0,e.jsx)("div",{className:"text-base font-normal leading-none text-neutral-400",children:t.value}):t.value]})}function Ct(t){var l=t.defaultValue,o=_objectWithoutProperties(t,lt);return _jsx("input",_objectSpread({type:"text",className:"w-full px-5 py-[15px] bg-gray-28 rounded-lg border border-neutral-200 justify-start items-start gap-2.5 inline-flex text-black text-base font-normal leading-none"},o))}function it(t){var l=(0,Me.oR)(),o=l.userData,i=t.organization||(o==null?void 0:o.organization);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(B,{tit:"\u7EC4\u7EC7\u540D\u79F0",value:(i==null?void 0:i.name)||"-"}),(0,e.jsx)(B,{tit:"\u7EC4\u7EC7\u7F16\u53F7",value:(i==null?void 0:i.serialNumber)||"-"})]})}function ut(t){var l,o=t.psId,i=t.onSuccess,d=ee()(t,ot),s=(0,Te.Kv)(o,6e4),n=s.data,S=s.isLoading,N=s.error,j=(0,r.useState)(""),c=m()(j,2),y=c[0],F=c[1],f=(0,r.useRef)(!0);(0,r.useEffect)(function(){n&&f.current&&(F(n.description||""),f.current=!1)},[n]),(0,r.useEffect)(function(){N&&d.onClose&&d.onClose()},[N]);var C=(0,r.useState)(!1),v=m()(C,2),p=v[0],E=v[1],u=(0,r.useState)(null),A=m()(u,2),L=A[0],P=A[1],K=(0,r.useState)(!1),ae=m()(K,2),ne=ae[0],H=ae[1],re=(0,r.useCallback)(function(I){var b;P((b=I.target.files)===null||b===void 0?void 0:b.item(0))},[]),Y=(0,Pe.Z)(!1),W=m()(Y,2),h=W[0],R=W[1],w=(0,r.useState)(),ue=m()(w,2),pe=ue[0],he=ue[1],Ne=(0,Be.n)(),ge=(0,Me.oR)(),de=ge.userData,U=(n==null?void 0:n.org)||(de==null?void 0:de.organization),ye=[{label:"\u4EA7\u54C1\u7CFB\u7EDFID",dataIndex:"uuid"},{label:"\u63CF\u8FF0",dataIndex:"inputDesc"},{label:"\u64CD\u4F5C\u4EBA",dataIndex:"updateUser"},{label:"BOM\u4FE1\u606F",dataIndex:"bom",render:function(){return(0,e.jsx)(G,{action:"\u67E5\u770B",onClick:function(){return H(!0)}})}},{label:"\u5B9E\u666F\u53C2\u6570\u5217\u8868",dataIndex:"real",render:function(){return(0,e.jsx)(G,{action:"\u67E5\u770B",onClick:function(){return R(!0)}})}},{label:"\u4EA7\u54C1\u7CFB\u7EDFLCA\u6587\u4EF6",dataIndex:"lca",render:function(){var b,J;return(0,e.jsx)(xe,{openNewTab:!0,modelId:n==null||(b=n.model)===null||b===void 0?void 0:b.id,disableSelectFile:p,modelStatus:n==null||(J=n.model)===null||J===void 0?void 0:J.state,hiddenUpdate:Ne,file:L,onFileChange:re})}},{label:"\u7EC4\u7EC7\u540D\u79F0",dataIndex:"name"},{label:"\u7EC4\u7EC7\u7F16\u53F7",dataIndex:"serialNumber"}],le={uuid:(n==null?void 0:n.uuid)||"-",inputDesc:(n==null?void 0:n.description)||"-",updateUser:(n==null?void 0:n.updateUser.name)||"-",name:(U==null?void 0:U.name)||"-",serialNumber:(U==null?void 0:U.serialNumber)||"-"},Se=(0,r.useMemo)(function(){return[{title:"\u53C2\u6570\u540D",dataIndex:"name",ellipsis:!0,width:200},{title:"\u8FC7\u7A0B\u540D\u79F0",dataIndex:"uuid",width:170},{title:"\u53C2\u8003\u503C",dataIndex:"optName",width:100}]},[]),ce=(0,r.useMemo)(function(){var I,b;if(!le)return[];var J=(0,te.OA)(n==null||(I=n.model)===null||I===void 0?void 0:I.paramDetail)||[],we=((b=J[0])===null||b===void 0?void 0:b.parameters)||[];return we.map(function(X){return[X.name,X.context.name,X.value]}).map(function(X){var me=m()(X,3),fe=me[0],Ie=me[1],Fe=me[2];return{name:fe,uuid:Ie,optName:Fe.toString()}})},[le]);return(0,e.jsxs)($.u_,g()(g()({},d),{},{line:!1,containerClassName:" w-[600px] bf ",children:[S&&!n&&(0,e.jsx)(_.g,{className:"min-h-[100px]"}),n&&(0,e.jsx)("div",{className:"flex flex-col gap-5  w-[600px] min-w-[20rem] ml-5 max-h-mc overflow-y-auto mb-5 ",children:(0,e.jsx)(ke.Z,{options:ye,data:le,optionEmptyText:"-",layout:"vertical",column:1,size:"small",contentStyle:{color:"#999999",fontWeight:"400"},labelStyle:{color:"#000000",fontWeight:"400"}})}),h&&(0,e.jsx)(Ce.d,{isShow:!0,header:Se,data:ce,onClose:function(){return R(!1)}}),pe&&(0,e.jsx)(rt,{onClose:function(){return he(void 0)},ps:pe}),ne&&(0,e.jsx)($e,{modelBomInfo:n==null||(l=n.model)===null||l===void 0?void 0:l.modelBomInfo,onClose:function(){return H(!1)}})]}))}var dt=a(97980),be=a(54916);function ct(t){var l=t.value,o=t.bg,i=o===void 0?"#dddddd":o,d=t.color,s=d===void 0?"#29953A":d,n=t.className;return(0,e.jsx)("div",{className:ie()(n,"w-full h-[10px]"),style:{background:i},children:(0,e.jsx)("div",{style:{width:"".concat(l,"%"),transition:"width 200ms ease",background:s},className:"h-full"})})}function bt(t){var l=t.index,o=t.full,i=t.bg,d=i===void 0?"#dddddd":i,s=t.color,n=s===void 0?"#29953A":s,S=t.className;return _jsx("div",{className:classNames(S,"w-full h-[10px]"),style:{background:d},children:_jsx("div",{style:{marginLeft:o?"0":"".concat(l*25,"%"),width:o?"100%":"25%",background:n},className:"h-full"})})}var mt=a(81920),ft=a(3826),vt=["onSuccess","onClose"];function xt(t){var l=t.onSuccess,o=t.onClose,i=ee()(t,vt),d=(0,r.useState)(""),s=m()(d,2),n=s[0],S=s[1],N=(0,r.useState)(!1),j=m()(N,2),c=j[0],y=j[1],F=(0,r.useState)(0),f=m()(F,2),C=f[0],v=f[1],p=(0,r.useState)(null),E=m()(p,2),u=E[0],A=E[1],L=(0,r.useState)("upload"),P=m()(L,2),K=P[0],ae=P[1],ne=!u,H=(0,r.useState)(""),re=m()(H,2),Y=re[0],W=re[1],h=(0,r.useState)({id:0,modelBomInfo:"",paramDetail:"",modelName:""}),R=m()(h,2),w=R[0],ue=R[1],pe=(0,r.useState)(!1),he=m()(pe,2),Ne=he[0],ge=he[1],de=(0,r.useState)(!1),U=m()(de,2),ye=U[0],le=U[1],Se=(0,r.useCallback)(function(x){var D;A((D=x.target.files)===null||D===void 0?void 0:D.item(0))},[]),ce=(0,r.useRef)(),I=(0,r.useCallback)(function(){var x;(x=ce.current)===null||x===void 0||x.abort(),o&&o()},[o]),b=function(){y(!1),v(0),W("")},J=(0,mt.o)(),we=function(){var x=Re()(ve()().mark(function D(O){var M;return ve()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:W("\u6A21\u578B\u89E3\u6790\u4E2D......");case 1:return T.next=4,(0,te._v)(5e3);case 4:if(J.current){T.next=6;break}return T.abrupt("return");case 6:return T.next=8,(0,be.Yp)(O).catch(function(){});case 8:if(M=T.sent,v(function(Ee){return Math.min(Ee+10,100)}),!(M&&M.state===1&&M.modelBomInfo)){T.next=12;break}return T.abrupt("return",M);case 12:T.next=1;break;case 14:case"end":return T.stop()}},D)}));return function(O){return x.apply(this,arguments)}}(),X=function(){W("\u6B63\u5728\u4E0A\u4F20......");var D=new FormData;D.append("file",u),ce.current=new AbortController,(0,be.av)(D,{signal:ce.current.signal,onUploadProgress:function(M){v(Math.min(Math.round((M.progress||0)*100),60))}}).then(we).then(function(O){O&&(ue(O),ae("add"),b())}).catch(function(){b()})},me=(0,dt.R)(function(){if(!ne)if(K==="upload"){if(c)return;y(!0),X()}else(0,be.bc)({name:w.modelName,description:n,modelId:w.id}).then(function(){l&&l(),I()}).catch(function(x){console.log("err",x)})}),fe={modelName:w==null?void 0:w.modelName,bom:"",realData:"",lca:"",desc:""},Ie=[{label:"\u4EA7\u54C1\u7CFB\u7EDF\u540D\u79F0",dataIndex:"modelName",render:function(){return(0,e.jsx)("div",{className:"mt-[-10px]",children:w==null?void 0:w.modelName})}},{label:"BOM\u4FE1\u606F",dataIndex:"bom",render:function(){return(0,e.jsx)(G,{action:"\u67E5\u770B",onClick:function(){return ge(!0)}})}},{label:"\u5B9E\u666F\u53C2\u6570\u5217\u8868",dataIndex:"realData",render:function(){return(0,e.jsx)(G,{action:"\u67E5\u770B",onClick:function(){return le(!0)}})}},{label:"\u4EA7\u54C1\u7CFB\u7EDFLCA\u6587\u4EF6",dataIndex:"lca",render:function(){return(0,e.jsx)(xe,{modelStatus:c?0:1,modelId:w.id,openNewTab:!0,onFileChange:Se})}},{label:"\u63CF\u8FF0",dataIndex:"desc",render:function(){return(0,e.jsx)(ft.Z,{maxLength:100,value:n,onChange:function(O){return S(O.target.value)},className:"h-[40px]"})}}],Fe=(0,r.useMemo)(function(){return[{title:"\u53C2\u6570\u540D",dataIndex:"name",ellipsis:!0,width:200},{title:"\u8FC7\u7A0B\u540D\u79F0",dataIndex:"uuid",width:170},{title:"\u53C2\u8003\u503C",dataIndex:"optName",width:100}]},[]),St=(0,r.useMemo)(function(){var x;if(!fe)return[];var D=(0,te.OA)(w==null?void 0:w.paramDetail)||[],O=((x=D[0])===null||x===void 0?void 0:x.parameters)||[];return O.map(function(M){return[M.name,M.context.name,M.value]}).map(function(M){var je=m()(M,3),T=je[0],Ee=je[1],jt=je[2];return{name:T,uuid:Ee,optName:jt.toString()}})},[fe]);return(0,e.jsxs)(r.Fragment,{children:[(0,e.jsx)($.u_,g()(g()({},i),{},{title:"\u65B0\u5EFA\u4EA7\u54C1\u7CFB\u7EDF",onClose:function(){I(),b()},line:!Y,bottomBtn:(0,e.jsx)("div",{className:"flex flex-shrink-0 w-full gap-5",children:!c&&(0,e.jsxs)(r.Fragment,{children:[(0,e.jsx)(Z.u,{type:"default",size:"large",className:"flex-1",onClick:function(){I(),b()},children:"\u53D6\u6D88"}),(0,e.jsx)(Z.u,{size:"large",type:"primary",className:"flex-1",onClick:me,disabled:ne,children:K==="upload"?"\u4E0A\u4F20":"\u786E\u5B9A"})]})}),children:(0,e.jsx)("div",{className:"flex flex-col gap-5 w-full min-w-[40rem] overflow-hidden",children:(0,e.jsx)("div",{className:ie()("flex flex-col w-full flex-1  max-h-mc px-5 py-[1px] overflow-y-auto ".concat(c?"gap-0":"gap-5")),children:c?(0,e.jsxs)(r.Fragment,{children:[(0,e.jsx)("div",{className:"flex justify-center w-full text-sm",children:Y}),(0,e.jsx)(ct,{value:C,className:"my-5 overflow-hidden rounded-lg"})]}):K==="upload"?(0,e.jsx)(B,{tit:"\u4EA7\u54C1\u7CFB\u7EDFLCA\u6587\u4EF6",value:(0,e.jsx)(xe,{isNew:!0,disableSelectFile:c,file:u,onFileChange:Se,btnText:"\u9009\u62E9\u6A21\u578B"})}):(0,e.jsx)("div",{className:"flex flex-col gap-5  w-[600px] min-w-[20rem] py-[1px] max-h-mc overflow-y-auto ",children:(0,e.jsx)(ke.Z,{options:Ie,data:fe,optionEmptyText:"-",layout:"vertical",column:1,size:"small",contentStyle:{color:"#999999",fontWeight:"400"},labelStyle:{color:"#000000",fontWeight:"400"}})})})})})),ye&&(0,e.jsx)(Ce.d,{isShow:!0,header:Fe,data:St,onClose:function(){return le(!1)}}),Ne&&(0,e.jsx)($e,g()(g()({},w),{},{onClose:function(){return ge(!1)}}))]})}function pt(){var t=(0,r.useState)(null),l=m()(t,2),o=l[0],i=l[1],d=(0,r.useState)(),s=m()(d,2),n=s[0],S=s[1],N=(0,r.useState)(null),j=m()(N,2),c=j[0],y=j[1],F=(0,r.useState)(!1),f=m()(F,2),C=f[0],v=f[1],p=(0,r.useState)(1),E=m()(p,2),u=E[0],A=E[1],L=(0,Te.uU)(u,1e4),P=L.data,K=L.isLoading,ae=L.mutate,ne=(0,r.useMemo)(function(){return((P==null?void 0:P.records)||[]).map(function(h,R){return g()(g()({},h),{},{key:"pl"+R,optName:h.updateUser.name})})},[P]),H=(0,r.useMemo)(function(){return[{title:"\u5B9E\u666F\u8F93\u5165\u9879",dataIndex:"context",width:"20%"},{title:"\u8FC7\u7A0B\u540D\u79F0",dataIndex:"parameter",width:"30%"},{title:"\u53C2\u8003\u503C",dataIndex:"amount",width:"20%"},{title:"\u4E0D\u786E\u5B9A\u6027",dataIndex:"uncertainty",emptyText:"-",width:"30%"}]},[]),re=(0,Be.b)(),Y=function(){A(1),u===1&&ae()},W=(0,r.useMemo)(function(){return[{title:"\u4EA7\u54C1\u7CFB\u7EDF",dataIndex:"name",ellipsis:!0,width:200},{title:"\u4EA7\u54C1\u7CFB\u7EDFID",dataIndex:"uuid",width:170,renderText:z.zL},{title:"\u64CD\u4F5C\u4EBA",dataIndex:"optName",width:100},{title:"\u63CF\u8FF0",dataIndex:"description",ellipsis:!0,width:200},{title:"\u4E0A\u4F20\u65F6\u95F4",dataIndex:"createTime",valueType:"dateTime",width:170},{title:"\u64CD\u4F5C",width:100,valueType:"option",render:function(R,w){return[(0,e.jsx)("div",{className:"cursor-pointer text-green-2",onClick:function(){S(w)},children:"\u67E5\u770B"},"key_look")]}}]},[]);return(0,e.jsxs)(oe.Z,{title:"\u6211\u7684\u4EA7\u54C1\u7CFB\u7EDF",extra:re?[(0,e.jsx)(Z.u,{onClick:function(){return v(!0)},children:"\u65B0\u5EFA\u4EA7\u54C1\u7CFB\u7EDF"},"key_new_ps")]:[],children:[(0,e.jsx)("div",{className:"bg-white",children:(0,e.jsx)(z.rx,{columns:W,dataSource:ne,loading:K,pagination:{pageSize:10,total:(P==null?void 0:P.total)||0,current:u,onChange:function(R){A(R)}}})}),!!o&&(0,e.jsx)($.u_,{title:o.modelName+"\u6A21\u578B\u4E2D\u7684\u5B9E\u666F\u8F93\u5165\u9879",onClose:function(){return i(null)},children:(0,e.jsxs)("div",{className:"flex w-[60rem] min-h-[16rem] flex-col pb-2",children:[(0,e.jsx)("ul",{className:"flex mb-1",children:H.map(function(h,R){return(0,e.jsx)("li",{className:"px-3 text-lg font-bold",style:{width:h.width},children:h.title},"columns".concat(R))})}),(0,e.jsx)("div",{className:"max-h-[15rem] min-h-[5rem] overflow-y-auto",children:(0,e.jsx)(k.i,{size:"big",hiddenHeader:!0,columns:H,data:o.paramDetail})})]})}),c&&(0,e.jsx)($.u_,{title:(c==null?void 0:c.title)||"\u64CD\u4F5C",onClose:function(){return y(null)},children:(0,e.jsx)("div",{className:"pb-2 text-center",children:c.loading?(0,e.jsx)(_.g,{}):(0,e.jsx)("span",{children:c.resultText})})}),C&&(0,e.jsx)(xt,{onClose:function(){return v(!1)},onSuccess:function(){return Y()}}),n&&(0,e.jsx)(ut,{psId:n.id,title:n.name,onClose:function(){return S(void 0)},onSuccess:function(){return Y()}})]})}var ht=pt,gt=ht}}]);
