"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[9725],{75631:function(Rt,J,e){e.r(J),e.d(J,{default:function(){return yt}});var k=e(48651),p=e.n(k),q=e(86516),g=e.n(q),_=e(5677),B=e.n(_),tt=e(64082),Z=e(18842),P=e(9991),et=e(5053),at=e(8965),nt=e(76222),G=e(12564),rt=e(68591),lt=e.n(rt),n=e(79685),ot=e(22786),U=e.n(ot),ut=e(46299),dt=e.n(ut),K=e(95968),H=e(54916),Q=e(81123),it=e(48294),t=e(63342),st=function(i){var l=i.onOpenModal,S=i.realData,c=i.tableData,m=i.realArr,O=(0,n.useState)(c),I=g()(O,2),V=I[0],T=I[1],b=function(){for(var r,o=(r=document)===null||r===void 0?void 0:r.getElementById("realDataTable"),C=o.getElementsByTagName("tr"),v=[],j=0;j<C.length;j++){for(var D=[],E=C[j].getElementsByTagName("input"),F=0;F<E.length;F++){var u=E[F].value;D.push(u)}v.push(D)}var a=[];a=c==null?void 0:c.map(function(f,M){var z={processId:f.context["@id"],paramValue:v.slice(1)[M][0]||f.value.toString(),paramName:f.name,dateTime:(0,Q.p6)()};return z});var s={lcaParamList:a};typeof l=="function"&&l(),typeof S=="function"&&S(s)};(0,n.useEffect)(function(){var h=c==null?void 0:c.map(function(r,o){return m!=null&&m.length&&m[o].paramName===r.name?p()(p()({},r),{},{inputValue:m[o].paramValue}):p()({},r)});T(h)},[m,c]);var A=[{title:"\u53C2\u6570\u540D",dataIndex:"name",width:"9rem",render:function(r){return(0,t.jsx)("div",{className:" flex items-center h-[33px] font-normal leading-[21px] text-[14px] ",children:r})}},{title:"\u8FC7\u7A0B\u540D\u79F0",dataIndex:"name",width:"7rem",render:function(r,o){return(0,t.jsx)("div",{className:"flex items-center  h-[33px] font-normal leading-[21px] text-[14px] ",children:o.context.name})}},{title:"\u53C2\u8003\u503C",width:"10rem",dataIndex:"value",render:function(r){return(0,t.jsx)("div",{className:"flex items-center h-[33px] font-normal leading-[21px] text-[14px] ",children:r})}},{title:"\u586B\u5165\u503C",width:"10rem",dataIndex:"createTime",render:function(r,o){return(0,t.jsx)("input",{defaultValue:o.inputValue,type:"number",className:"font-normal  leading-[21px] text-[14px] w-[10rem] h-[33px] "})}}];return(0,t.jsxs)(K.u_,{title:"\u5B9E\u666F\u6570\u636E\u586B\u62A5",containerClassName:"mx-5 max-w-[640px]",titleClassName:"text-[20px] leading-5 font-bold",onClose:typeof l=="function"&&l||void 0,children:[(0,t.jsx)("div",{className:" mx-5 w-[640px] max-h-[400px] overflow-y-auto ",children:(0,t.jsx)(it.i,{columns:A,tableId:"realDataTable",data:V||[],isSetBorder:!0,maxHeight:"calc(100vh - 260px)",headerClassName:{background:"#DDDDDD",position:"sticky",top:"-1px",fontWeight:"700",fontSize:"18px",lineHeight:"30px",height:"50px"}})}),(0,t.jsx)("div",{className:"mx-5 ",children:(0,t.jsxs)("div",{className:"flex flex-row justify-between gap-5 mt-5",children:[(0,t.jsx)(P.u,{onClick:typeof l=="function"&&l||void 0,defStyle:"btn-primary-1",className:"flex-1  font-normal  h-[50px] border-2 text-[18px]",children:"\u53D6\u6D88"}),(0,t.jsx)(P.u,{className:"flex-1 h-[50px]  font-normal  text-[18px]",onClick:b,children:"\u786E\u5B9A"})]})})]})},ct=st,mt=e(46284),vt=e(3826),ft=e(7698),xt={loadName:"",productId:""},pt=function(i){var l=i.openResultModal,S=i.getList,c=(0,n.useState)(!1),m=g()(c,2),O=m[0],I=m[1],V=(0,n.useState)([{name:"",id:""}]),T=g()(V,2),b=T[0],A=T[1],h=(0,n.useState)({lcaParamList:[]}),r=g()(h,2),o=r[0],C=r[1],v=(0,n.useState)([]),j=g()(v,2),D=j[0],E=j[1],F=(0,n.useState)(xt),u=g()(F,2),a=u[0],s=u[1],f=(0,n.useMemo)(function(){return b.map(function(x){return{value:x.id,label:x.name}})},[b]),M=(0,n.useState)(!0),z=g()(M,2),Nt=z[0],St=z[1],It=function(){(0,H.ev)().then(function(d){A(d||{name:"",id:""}),St(!1)}).catch(function(d){}).finally()},Ct=function(){var d,y=a.loadName,L=a.productId;if(!(!y||!L)){var $=D==null?void 0:D.map(function(W){return{processId:W.context["@id"],paramValue:W.value.toString(),paramName:W.name,dateTime:(0,Q.p6)()}}),N=(d=o.lcaParamList)!==null&&d!==void 0&&d.length?o:{lcaParamList:$.length?$:void 0},Mt=p()(p()({},N),{},{loadName:y,productId:L});(0,H.E)(Mt).then(function(W){typeof S=="function"&&S()}).catch(function(W){}).finally(function(){typeof l=="function"&&l()})}};(0,n.useEffect)(function(){It()},[]);var jt=function(){a.productId&&I(!0)},Y=function(d,y){s(function(L){return p()(p()({},L),{},B()({},y,d))})},Lt=function(){var x=dt()(U()().mark(function d(){return U()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:(0,H.NF)(a.productId).then(function($){var N=JSON.parse($.paramDetail)[0]||[];E(JSON.stringify(N)==="{}"||!(N!=null&&N.parameters)?[]:N==null?void 0:N.parameters)}).catch(function($){}).finally();case 1:case"end":return L.stop()}},d)}));return function(){return x.apply(this,arguments)}}();(0,n.useEffect)(function(){a.productId&&Lt()},[a.productId]);var Tt={loadName:"",productId:"",realDataInput:""},Ft=[{label:"\u78B3\u8DB3\u8FF9\u6279\u6B21",dataIndex:"loadName",render:function(){return(0,t.jsx)(vt.Z,{value:a.loadName,onChange:function(y){return Y(y.target.value,"loadName")},id:"loadName",name:"loadName",maxLength:30,className:"w-full mb-[20px] mt-[10px] px-5 border border-[#DDDDDD]  h-[50px]  bg-[#F8F8F8] rounded-lg"})}},{label:"\u4EA7\u54C1\u7CFB\u7EDF",dataIndex:"productId",render:function(){return(0,t.jsx)(ft.default,{value:a.productId,style:{height:"50px",borderColor:"#DDDDDD",backgroundColor:"#F8F8F8",width:"100%"},onChange:function(y){return Y(y,"productId")},options:f})}},{label:"\u5B9E\u666F\u6570\u636E\u586B\u62A5",dataIndex:"realDataInput",render:function(){return(0,t.jsx)("div",{onClick:function(){return jt()},className:" flex cursor-pointer rounded-[4px] leading-4 text-[16px] mt-[10px] bg-[#F1F1F1] w-[84px] h-[24px]  text-center items-center justify-center ",children:"\u524D\u5F80\u586B\u5199"})}}];return Nt?null:(0,t.jsxs)(n.Fragment,{children:[(0,t.jsxs)(K.u_,{className:"rounded-lg",containerClassName:"mx-5 w-[640px]",titleClassName:"text-[20px] leading-5 font-bold",title:"\u65B0\u5EFA\u78B3\u8DB3\u8FF9\u7ED3\u679C",onClose:l,children:[(0,t.jsx)("div",{className:"mx-5 w-[640px] ",children:(0,t.jsx)(mt.Z,{options:Ft,data:Tt,optionEmptyText:"-",layout:"vertical",column:1,contentStyle:{color:"#999999",fontWeight:"400"},labelStyle:{color:"#000000",fontWeight:"400"}})}),(0,t.jsxs)("div",{className:"flex flex-row justify-between gap-5 px-5 mt-5",children:[(0,t.jsx)(P.u,{size:"large",onClick:l,defStyle:"btn-primary-1",className:"flex-1  font-normal  h-[50px] border-2 text-[18px]",children:"\u53D6\u6D88"}),(0,t.jsx)(P.u,{size:"large",className:"flex-1 h-[50px]  font-normal  text-[18px]",onClick:Ct,disabled:!a.productId||!a.loadName,children:"\u8BA1\u7B97\u78B3\u7ED3\u679C"})]})]}),O&&(0,t.jsx)(ct,{realData:C,tableData:D,realArr:o.lcaParamList,onOpenModal:function(){return I(!1)}})]})},ht=pt,R,X=(R={},B()(R,-1,{color:"text-[red]",text:"\u8BA1\u7B97\u5931\u8D25"}),B()(R,0,{color:"text-[#FF9800]",text:"\u7B49\u5F85\u8BA1\u7B97"}),B()(R,1,{color:"text-green-2",text:"\u67E5\u770B\u7ED3\u679C"}),B()(R,2,{color:"text-blue-600",text:"\u6B63\u5728\u8BA1\u7B97"}),R);function gt(){var w=(0,n.useState)(1),i=g()(w,2),l=i[0],S=i[1],c=(0,n.useState)(!1),m=g()(c,2),O=m[0],I=m[1],V=(0,n.useState)(!1),T=g()(V,2),b=T[0],A=T[1],h=(0,n.useRef)({inputData:"",data:""}),r=function(a){var s=a.param,f=a.paramDetail;h.current={inputData:s,data:f},A(!0)},o=(0,n.useMemo)(function(){return[{title:"\u78B3\u8DB3\u8FF9\u6279\u6B21",dataIndex:"loadName",width:180,ellipsis:!0},{title:"\u5B9E\u666F\u6570\u636E",valueType:"option",width:120,render:function(a,s){return[(0,t.jsx)("div",{className:"flex justify-center whitespace-nowrap px-2.5 bg-[#F1F1F1] rounded",onClick:function(){return r(s)},children:(0,t.jsx)("span",{className:"cursor-pointer",children:"\u67E5\u770B\u5B9E\u666F\u6570\u636E"})},"key_look_real")]}},{title:"\u6279\u6B21\u7ED3\u679CID",dataIndex:"loadNumber",width:170,renderText:Z.zL},{title:"\u4EA7\u54C1\u7CFB\u7EDF\u540D\u79F0",width:128,dataIndex:"productName",ellipsis:!0},{title:"\u7CFB\u7EDF\u4EA7\u54C1ID",dataIndex:"productUuid",width:170,renderText:Z.zL},{title:"\u63CF\u8FF0",dataIndex:"productDescription",width:300,ellipsis:!0},{title:"\u64CD\u4F5C\u4EBA",dataIndex:"operator",width:100,ellipsis:!0},{title:"\u751F\u6210\u65F6\u95F4",dataIndex:"calculateSuccessTime",valueType:"dateTime",width:180},{title:"\u78B3\u8DB3\u8FF9\u7ED3\u679C",dataIndex:"state",width:130,render:function(a,s){var f,M;return(0,t.jsx)("div",{className:lt()({"cursor-pointer":s.state===1},(f=X[s.state])===null||f===void 0?void 0:f.color),onClick:function(){s.state===1&&G.history.push("/main/tools/inventory/result?id=".concat(s.loadNumber))},children:(M=X[s.state])===null||M===void 0?void 0:M.text})}},{title:"\u7EC4\u7EC7\u540D\u79F0",dataIndex:"orgName",width:130,ellipsis:!0},{title:"\u7EC4\u7EC7\u7F16\u53F7",dataIndex:"orgSerialNumber",width:130,ellipsis:!0}]},[]),C=(0,at.cc)(l,1e4),v=C.data,j=C.isLoading,D=C.mutate,E=(0,n.useMemo)(function(){return((v==null?void 0:v.records)||[]).map(function(u,a){return p()(p()({},u),{},{key:"key_inventory_"+a})})},[v]),F=(0,nt.b)();return(0,t.jsxs)(tt.Z,{title:"\u6211\u7684\u4EA7\u54C1\u78B3\u8DB3\u8FF9\u7ED3\u679C",extra:F?[(0,t.jsx)(P.u,{onClick:function(){return I(!0)},children:"\u65B0\u5EFA\u78B3\u8DB3\u8FF9\u7ED3\u679C"},"new_inventory")]:[],children:[(0,t.jsx)("div",{className:"bg-white",children:(0,t.jsx)(Z.ZP,{columns:o,dataSource:E,loading:j,pagination:{pageSize:10,total:(v==null?void 0:v.total)||0,current:l,onChange:function(a){S(a)}}})}),O&&(0,t.jsx)(ht,{openResultModal:function(){return I(!1)},getList:function(){S(1),l===1&&D()}}),b&&(0,t.jsx)(et.d,p()(p()({},h.current),{},{onClose:function(){return A(!1)}}))]})}var Dt=gt,yt=function(){var w=(0,G.useLocation)(),i=w.pathname;return console.info("inventoryPage:",i),i!=="/main/tools/inventory"?(0,t.jsx)(G.Outlet,{}):(0,t.jsx)(Dt,{})}}}]);
