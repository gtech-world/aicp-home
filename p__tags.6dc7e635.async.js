"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[1847],{64082:function(D,d,e){var _=e(48651),c=e.n(_),a=e(38046),l=e.n(a),o=e(30541),f=e(33421),s=e(68591),u=e.n(s),g=e(63342),t=["className"];function p(v){var x=v.className,E=l()(v,t),n=(0,f.l)(function(r){var P=r.token;return{".ant-page-header":{padding:"1rem 1.5rem",paddingBlock:"1rem !important",paddingInline:"1.5rem !important",backgroundColor:P.colorBgBase,".ant-breadcrumb":{fontSize:".875rem",paddingBlockStart:"0 !important"},".ant-page-header-heading-title":{fontSize:"1.25rem"}},".ant-pro-grid-content":{padding:"1.5rem",backgroundColor:"transparent",".ant-pro-page-container-children-content":{padding:0,paddingBlock:"0 !important"},".ant-pro-page-container-children-container":{paddingBlock:"0 !important",paddingInline:"0 !important"}}}});return(0,g.jsx)(o._z,c()({className:u()(x,n)},E))}d.Z=p},55207:function(D,d,e){e.d(d,{n:function(){return f}});var _=e(68591),c=e.n(_),a=e(69321),l=e(31196),o=e(63342);function f(s){var u=s.qrText,g=s.className,t=s.qrcodeDisable,p=s.data;return(0,o.jsx)("div",{className:c()("",g),children:(0,o.jsx)("div",{className:"p-1 border-[4px] border-green-2 rounded-[2.25rem]",children:(0,o.jsxs)("div",{className:c()("py-2 px-6 rounded-[1.90rem] border-[1.75px] border-green-2 flex justify-center items-center mo:px-3"),children:[(0,o.jsxs)("div",{className:"border-r-[3px] border-green-4 pr-5 mr-5 flex flex-col items-center justify-between h-full",children:[(0,o.jsx)(l.y,{className:"mb-2 shrink-0"}),(0,o.jsx)("img",{className:"w-[6.875rem]",src:"/earth_1.png",alt:""})]}),(0,o.jsxs)("div",{className:"w-[7.125rem] flex flex-col items-center",children:[(0,o.jsx)("p",{className:"text-[0.6875rem] text-center mb-2 leading-[0.945rem] font-semibold mo:leading-[0.865rem]",children:u||"Product Carbon Footprint Certified"}),t?(0,o.jsx)(l.E3,{width:"92",height:"92"}):(0,o.jsx)(a.ZP,{className:"w-[5.75rem]",size:92,value:p})]})]})})})}},8965:function(D,d,e){e.d(d,{H4:function(){return f},Kv:function(){return o},TW:function(){return x},Tz:function(){return u},We:function(){return s},Y5:function(){return p},cc:function(){return t},cu:function(){return E},e0:function(){return v},uU:function(){return g}});var _=e(97207),c=e.n(_),a=e(94437),l=e(54916);function o(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return(0,a.ZP)("/api/product-system/".concat(n,"/detail"),{refreshInterval:r})}function f(n){return(0,a.ZP)(c().isNil(n)?null:"/api/verifyRecord/".concat(n,"/detail"))}function s(n){return(0,a.ZP)(n?"/api/inventory/all":null)}function u(n){return(0,a.ZP)(n?"/api/verifyRecord/verifiers":null)}function g(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return(0,a.ZP)("/api/product-system/list/?pageNum=".concat(n,"&pageSize=10"),{refreshInterval:r})}function t(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return(0,a.ZP)("/api/inventory/list/?pageNum=".concat(n,"&pageSize=10"),{refreshInterval:r})}function p(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return(0,a.ZP)("/api/verifyRecord/list/?pageNum=".concat(n,"&pageSize=10"),{refreshInterval:r})}function v(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return(0,a.ZP)("/api/sbt/token/list/?pageNum=".concat(n,"&pageSize=999"))}function x(n){return(0,a.ZP)(n?"/api/sbt/token/uuid/".concat(n):null,{fetcher:l.Gh})}function E(n){return(0,a.ZP)(n?"/api/sbt/token/nft/".concat(n):null,{fetcher:l.Gh})}},55781:function(D,d,e){e.r(d),e.d(d,{default:function(){return E}});var _=e(45802),c=e(64082),a=e(55207),l=e(31196),o=e(8965),f=e(81123),s=e(97207),u=e.n(s),g=e(79685),t=e(63342);function p(n){var r=n.data,P=r.title,h=r.icon,i=r.qrcodeDisable,b=r.by,M=r.id,N=r.link,j=r.qrCode;return(0,t.jsxs)("div",{className:"bg-white mr-5 w-[23.25rem] mo:w-full p-5 rounded-lg mb-5 text-base mo:mr-0 clac",children:[(0,t.jsx)(a.n,{qrcodeDisable:i,data:j}),(0,t.jsxs)("div",{className:"flex flex-col mt-5",children:[(0,t.jsx)("h3",{className:"text-xl font-semibold",children:P}),(0,t.jsx)("span",{children:b}),(0,t.jsxs)("span",{children:["\u6807\u7B7EID : ",M]})]}),(0,t.jsx)("div",{className:"flex flex-row text-blue-0 underline mt-2.5 font-semibold",children:N.map(function(m,T){return console.log("href",m.href),(0,t.jsx)(_.a,{target:m.target,className:"mt-2.5 mr-5",to:m.href,children:m.text},"link".concat(T))})})]})}function v(){var n=(0,o.e0)(),r=n.data,P=(0,g.useMemo)(function(){var h=(r==null?void 0:r.records)||[];return(window.origin.includes("localhost")||window.origin.includes("beta"))&&u().size(h)===0&&(h=[{loadName:"\u78B3\u8DB3\u8FF9\u8C08\u6279\u6B21-\u67D0\u67D0\u578B\u53F7\u8F66\u8F86LCA\u793A\u4F8B\u6A21\u578B",orgName:"\u6D4B\u8BD5\u673A\u6784",orgType:"org",proofTime:"2023-10-07 10:41:08",tokenId:7e6,tokenUrl:"ipfs://Qmeb8VfEmqPqd4ZwCmA5ruN26bheupb2yCcM1hegcV4LS5/0.json",uuid:"3e49b334-baa5-4b49-ad8d-43a46cd5a6ac-1696646530",verifyUserName:"v1"},{loadName:"3",orgName:"\u6D4B\u8BD5\u673A\u6784",orgType:"org",proofTime:"2023-09-28 14:55:40",tokenId:5e6,tokenUrl:"ipfs://QmSTPjmmwdZwq7TkrFgYNDPxobEvWxBi1fm1e7cJGCGcqT/0.json",uuid:"24f96502-9e20-4cb1-a060-111255cb2a69-1695884327",verifyUserName:"v1"}]),h.map(function(i){var b=i.loadName,M=i.proofTime,N=i.tokenId,j=i.tokenUrl,m=i.uuid,T=i.verifyUserName;return{title:b,icon:(0,t.jsx)(l.J$,{className:"w-[2.75rem]"}),by:"".concat((0,f.Ux)(M,"YYYY\u5E74MM\u6708DD\u65E5"),"\u7B7E\u53D1 by AIAG"),id:m,qrcodeDisable:!1,link:[{text:"\u6807\u7B7E\u4FE1\u606F",href:"/label?vin=".concat(m)},{text:"\u5728\u533A\u5757\u94FE\u6D4F\u89C8\u5668\u67E5\u770B",href:"/chain?tokenId=".concat(N)}],qrCode:"".concat(window.origin,"/main/tags/label?vin=").concat(m)}})},[r]);return(0,t.jsx)(c.Z,{children:(0,t.jsx)("div",{className:"flex flex-wrap",children:P.map(function(h,i){return(0,t.jsx)(p,{data:h},"tagData".concat(i))})})})}var x=null,E=v}}]);
