"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[4953],{14950:function(A,c,t){t.d(c,{T:function(){return b},W:function(){return p}});var x=t(48651),i=t.n(x),r=t(38046),u=t.n(r),v=t(68591),o=t.n(v),h=t(99095),m=t(83048),_=t(19890),e=t(63342),g=["className","children"],d=["className","children"];function p(a){var n=a.className,N=a.children,f=u()(a,g),j=(0,h.dD)();return(0,e.jsxs)("div",{className:"relative flex flex-col flex-1 w-full min-h-fit bg-gray-16 ",children:[j?(0,e.jsxs)("div",{className:"absolute z-0 top-0 w-full h-[43rem] overflow-hidden bg-green-2 ",children:[(0,e.jsx)("img",{className:"absolute bottom-0 right-0 object-cover w-full",src:"/home-bg-r.jpg"}),(0,e.jsx)("div",{className:"w-full h-full absolute ssm:top-[calc(21.5rem_-_75vw)]",style:{background:"linear-gradient(180deg, #29953A 48.84%, rgba(34, 122, 48, 0) 96.76%)"}})]}):(0,e.jsxs)("div",{className:"absolute z-0 top-0 w-full h-[48.75rem] bg-green-2 overflow-hidden ",children:[(0,e.jsx)("img",{className:"absolute top-0 right-0 object-cover h-full",src:"/home-bg-r.jpg"}),(0,e.jsx)("div",{className:"w-full h-full absolute lg:left-[calc(50%_-_45rem)]",style:{background:"linear-gradient(182.16deg, #000000 -4.66%, rgba(0, 0, 0, 0) 17.13%)",transform:"matrix(-1, 0, 0, 1, 0, 0)"}}),(0,e.jsx)("div",{className:"w-full h-full absolute lg:left-[calc(50%_-_45rem)]",style:{background:"linear-gradient(270deg, #29953A 38.28%, rgba(34, 122, 48, 0) 77.8%)",transform:"matrix(-1, 0, 0, 1, 0, 0)"}})]}),(0,e.jsx)(m.uN,{}),(0,e.jsx)("div",i()(i()({className:o()("z-[2] flex-1 relative w-full mx-auto mo:mx-0 mo:flex mo:flex-col",n)},f),{},{children:N}))]})}function b(a){var n=a.className,N=a.children,f=u()(a,d);return(0,_.Z)("AICP",{restoreOnUnmount:!0}),(0,e.jsxs)("div",i()(i()({},f),{},{className:o()("relative flex flex-col flex-1 w-full min-h-fit",n),children:[(0,e.jsx)(m.h4,{}),N]}))}},8965:function(A,c,t){t.d(c,{H4:function(){return o},Kv:function(){return v},TW:function(){return p},Tz:function(){return m},We:function(){return h},Y5:function(){return g},cc:function(){return e},cu:function(){return b},e0:function(){return d},uU:function(){return _}});var x=t(97207),i=t.n(x),r=t(94437),u=t(54916);function v(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return(0,r.ZP)("/api/product-system/".concat(a,"/detail"),{refreshInterval:n})}function o(a){return(0,r.ZP)(i().isNil(a)?null:"/api/verifyRecord/".concat(a,"/detail"))}function h(a){return(0,r.ZP)(a?"/api/inventory/all":null)}function m(a){return(0,r.ZP)(a?"/api/verifyRecord/verifiers":null)}function _(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return(0,r.ZP)("/api/product-system/list/?pageNum=".concat(a,"&pageSize=10"),{refreshInterval:n})}function e(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return(0,r.ZP)("/api/inventory/list/?pageNum=".concat(a,"&pageSize=10"),{refreshInterval:n})}function g(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return(0,r.ZP)("/api/verifyRecord/list/?pageNum=".concat(a,"&pageSize=10"),{refreshInterval:n})}function d(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return(0,r.ZP)("/api/sbt/token/list/?pageNum=".concat(a,"&pageSize=999"))}function p(a){return(0,r.ZP)(a?"/api/sbt/token/uuid/".concat(a):null,{fetcher:u.Gh})}function b(a){return(0,r.ZP)(a?"/api/sbt/token/nft/".concat(a):null,{fetcher:u.Gh})}},1130:function(A,c,t){t.r(c),t.d(c,{default:function(){return N}});var x=t(86516),i=t.n(x),r=t(10555),u=t(8965),v=t(24220),o=t(81123),h=t(12564),m=t(79685),_=t(89372),e=t(63342),g=function(j){var E=j.textArray,P=E===void 0?[]:E;return(0,e.jsx)("div",{children:P.length&&P.map(function(y,T){return(0,e.jsxs)("div",{className:"break-all ",children:[(0,e.jsxs)("span",{className:" font-bold leading-7 text-[#000000] mo:text-[15px]",children:[y.text,"\uFF1A"]}),(0,e.jsx)("span",{className:" font-normal text-[#666666] text-[15px]  mo:text-[15px]",children:y.value})]},"text_".concat(T))})})},d=g,p=t(14950);function b(){var f=(0,h.useSearchParams)(),j=i()(f,1),E=j[0],P=E.get("vin"),y=(0,u.TW)(P),T=y.data,$=y.isLoading,l=T||{},F=l.evaluationAgency,Z=F===void 0?"-":F,D=l.evaluationExpireTime,H=D===void 0?"-":D,I=l.evaluationType,z=I===void 0?"-":I,C=l.loadNumber,G=C===void 0?"-":C,M=l.orgName,k=M===void 0?" ":M,O=l.productName,V=O===void 0?"-":O,L=l.tokenId,B=L===void 0?"-":L,W=l.uuid,Y=W===void 0?"-":W,R=l.functionalUnit,J=R===void 0?"-":R,U=l.evaluationBoundary,Q=U===void 0?"-":U,w=l.evaluationBasis,X=w===void 0?"-":w,S=l.pcfResult,q=S===void 0?"-":S,K=l.certificateNumber,ee=K===void 0?"\u5F53\u524D\u65E0\u8BC1\u4E66":K,te=[{text:"\u6807\u7B7E\u7F16\u53F7",value:Y},{text:"\u4EA7\u54C1\u578B\u53F7",value:V},{text:"\u4EA7\u54C1\u552F\u4E00\u6807\u8BC6\u7B26",value:G},{text:"\u6807\u7B7E\u7533\u8BF7\u4E3B\u4F53",value:k}],ae=[{text:"\u8BC4\u4EF7\u7C7B\u578B",value:z!=="aicp"?"\u7B2C\u4E09\u65B9\u8BA4\u8BC1":"AICP\u5E73\u53F0\u5BA1\u6838"},{text:"\u8BC1\u4E66\u7F16\u53F7",value:ee},{text:"\u529F\u80FD\u5355\u4F4D",value:J},{text:"\u8BC4\u4EF7\u8FB9\u754C",value:Q},{text:"\u8BC4\u4EF7\u4F9D\u636E",value:X},{text:"\u8BC4\u4EF7\u673A\u6784",value:Z},{text:"\u8BC4\u4EF7\u6709\u6548\u671F",value:H},{text:"\u533A\u5757\u94FESBT\u8BC1\u4E66\u7F16\u53F7",value:B,link:(0,o.UF)("address","0x7BC6afe0cDc6DE9191dfC6d68A3bad45E270F695")}],re=(0,v.N)(),s=re.t,ne=function(){return(0,e.jsxs)(m.Fragment,{children:[(0,e.jsxs)("div",{className:"flex w-full gap-5 mo:flex-none mo:flex-col ",children:[(0,e.jsxs)("div",{className:"w-[420px] max-h-[450px] p-5 mo:h-auto  bg-[#FFFFFF] text-center  flex justify-center mo:justify-start   mo:flex-row mo:w-full flex-col items-center rounded-lg ",children:[(0,e.jsx)(r.M6,{className:"text-[5.375rem] w-[5.375rem] mt-[.625rem] mb-5 mo:mb-2  shrink-0"}),(0,e.jsxs)("div",{className:"mo:ml-[2.5rem] mo:flex-1 ",children:[(0,e.jsx)("div",{className:"text-[#29953A] text-[1.75rem] leading-8 font-semibold max-w-full break-all",children:q}),(0,e.jsx)("div",{className:"font-[1.75rem] leading-8   ",children:"\u4E8C\u6C27\u5316\u78B3\u7B49\u6548\u6392\u653E"})]})]}),(0,e.jsx)("div",{className:"w-[420px]  mo:w-full  max-h-[450px] bg-[#FFFFFF] mo:max-h-[350px] rounded-lg",children:(0,e.jsxs)("div",{className:"mx-5 mt-5 mb-5 mmd:mt-10",children:[(0,e.jsx)("div",{className:"mb-5 mo:mb-[15px]  md:text-[18px]   font-bold mo:text-[18px] text-[20px] leading-7",children:"\u4EA7\u54C1\u4FE1\u606F"}),(0,e.jsx)(d,{textArray:te})]})}),(0,e.jsx)("div",{className:"w-[420px]  mo:w-full  max-h-[450px] bg-[#FFFFFF] mo:max-h-[370px] rounded-lg",children:(0,e.jsxs)("div",{className:"mx-5 mt-5 mb-5 mmd:mt-10",children:[(0,e.jsx)("div",{className:"mb-5 mo:mb-[15px] md:text-[18px]   font-bold mo:text-[18px] text-[20px] leading-7",children:"\u4EA7\u54C1\u78B3\u8DB3\u8FF9\u8BC4\u4EF7\u4FE1\u606F"}),(0,e.jsx)(d,{textArray:ae})]})})]}),(0,e.jsxs)("div",{className:"flex gap-5 mt-5 mo:flex-none mo:flex-col ",children:[(0,e.jsxs)("div",{className:"w-[640px] py-5 mo:pt-[1.875rem] mo:w-full bg-[#FFFFFF] flex flex-col items-center rounded-lg gap-5 mo:gap-[.9375rem]",children:[(0,e.jsx)(r.M6,{className:"text-[5.375rem] w-[5.375rem]"}),(0,e.jsx)("div",{className:"text-lg font-bold mo:mx-5 ",dangerouslySetInnerHTML:{__html:(0,o.Oc)(s("What is AIAG Digital3 Carbon Trust Label?"))}}),(0,e.jsx)("div",{className:"text-[.9375rem] font-normal text-center mx-5",dangerouslySetInnerHTML:{__html:(0,o.Oc)(s("The AIAG Digital3 Carbon Trust Label is an industry-level certification framework for every vehicle produced under {{value}}. The Trust Label guarantees that any raw data behind the label is verified and recorded in an immutable manner for the ultimate transparency and traceability for the vehicle\u2019s carbon performance.").replace("{{value}}",'<a class="text-green-2 cursor-pointer" target="_blank" href="https://aiag.org.cn/ACAC/Automotive-Carbon-Advisory-Committee" rel="noreferrer">'.concat(s("AIAG\u2019s carbon reduction / Net Zero 2050 initiatives"),"</a>")))}})]}),(0,e.jsxs)("div",{className:"w-[640px] py-5 mo:pt-[1.875rem] mo:w-full bg-[#FFFFFF] flex flex-col items-center rounded-lg gap-5 mo:gap-[.9375rem]",children:[(0,e.jsx)("img",{src:"/nft.png",className:"text-[5.375rem] w-[5.375rem] h-[5.375rem]"}),(0,e.jsxs)("div",{className:"text-lg font-bold",children:[" ",s("Immutability and Traceability")]}),(0,e.jsx)("div",{className:"text-[.9375rem] font-normal text-center mx-5",dangerouslySetInnerHTML:{__html:s("A Soul-bounded Token (a special type of NFT that is not allowed to transfer after created) has been generated on blockchain to make sure the information in this label is immutable and will be maintain for traceability forever. Check {{value}} to verify the SBT on blockchain explorer.").replace("{{value}}",'<a class="text-green-2 cursor-pointer" href="'.concat((0,o.kG)("/chain"),"?tokenId=").concat(B,'" rel="noreferrer">').concat(s("here"),"</a>"))}})]})]})]})},le=function(){return(0,e.jsx)("div",{className:"flex items-center justify-center w-full h-40",children:s("Data not available for this imput.")})};return(0,e.jsx)(p.T,{children:(0,e.jsx)(_.Z,{loading:$,children:(0,e.jsx)("div",{className:"w-full max-w-[1300px] mx-auto ",children:T?(0,e.jsxs)(m.Fragment,{children:[(0,e.jsxs)("div",{className:"mb-5 text-2xl font-bold leading-normal",children:[s("Product Carbon Footprint Certified")," ",(0,e.jsx)("span",{className:"text-base font-medium",children:s("by AIAG")})]}),ne()]}):le()})})})}var a=b,n=t(65273),N=(0,n.t)(a)}}]);
