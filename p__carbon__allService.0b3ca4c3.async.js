"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[1275],{67454:function(y,j,n){n.d(j,{u:function(){return a},z:function(){return r}});var N=n(24047),d=n.n(N),g=n(86378),c=n.n(g),p=n(28488),f=n.n(p),b=n(84875),_=n.n(b),e=n(9751),t=n(11527),l=["children","className"],i=["busy","disabled","className","defStyle","children"];function r(o){var u=o.children,x=o.className,h=f()(o,l);return(0,t.jsx)("button",c()(c()({},h),{},{className:_()(x),children:o.children}))}function a(o){var u,x=o.busy,h=o.disabled,v=o.className,I=o.defStyle,m=I===void 0?"btn-primary":I,C=o.children,U=f()(o,i);return(0,t.jsx)("button",c()(c()({className:_()(v,(u={},d()(u,m,!h),d()(u,"btn-disable",h),u))},U),{},{children:x?(0,t.jsx)(e.fCD,{className:"animate-spin"}):C}))}},16966:function(y,j,n){n.r(j),n.d(j,{default:function(){return a}});var N=n(30577),d=n.n(N),g=n(67454),c=n(14712),p=n(84875),f=n.n(p),b=n(50959),_=n(9751),e=n(11527);function t(o){return(0,e.jsxs)("div",{className:"flex flex-col text-base",children:[(0,e.jsxs)("label",{className:"font-bold leading-[1.75rem]",children:[o.label," :"]}),(0,e.jsx)("span",{className:"text-gray-6 leading-[1.75rem]",children:o.text})]})}function l(o){var u=o.data,x=u.title,h=u.icon,v=u.infos,I=u.btn;return(0,e.jsxs)("div",{className:"flex flex-col justify-between p-5 mt-5 mr-5 bg-white rounded-lg mo:mr-0 box-layout mo:w-full",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"flex items-center",children:[h,(0,e.jsx)("span",{className:"ml-4 text-xl font-semibold",children:x})]}),(0,e.jsx)("div",{className:"mt-5",children:v.map(function(m,C){return(0,e.jsx)(t,{label:m.label,text:m.text},"PartInfo".concat(C))})})]}),(0,e.jsx)("div",{className:"flex mt-5 mo:flex-col",children:I.map(function(m,C){return m.type==="primary"?(0,e.jsx)(g.z,{onClick:function(){return m.onClick&&m.onClick()},className:"ml-5 text-lg bg-green-2 text-white rounded-lg flex-1 min-h-[2.865rem] mo:mt-5 mo:ml-0 hover:bg-green-28",children:m.text},"btn".concat(C)):(0,e.jsx)(g.z,{onClick:function(){return m.onClick&&m.onClick()},className:"bg-green-2/10 text-lg text-green-2 border-2 border-green-2 rounded-lg flex-1 min-h-[2.865rem] hover:bg-green-2/20 ",children:m.text},"btn".concat(C))})})]})}function i(){var o=(0,b.useState)(!0),u=d()(o,2),x=u[0],h=u[1],v=(0,b.useState)(!0),I=d()(v,2),m=I[0],C=I[1],U=(0,b.useState)(!0),S=d()(U,2),M=S[0],T=S[1],O=(0,b.useMemo)(function(){return[{title:"[AT01]\u7CFB\u5217\u57F9\u8BAD-\u4E86\u89E3\u53CC\u78B3\u57FA\u7840A",icon:(0,e.jsx)(c.J$,{className:"w-[3.45rem]"}),infos:[{label:"\u57F9\u8BAD\u5185\u5BB9\u4ECB\u7ECD",text:"AT01\u57F9\u8BAD\u9879\u76EE\u4E3A\u9488\u5BF9\u53CC\u78B3\u4E3B\u9898\u57FA\u7840\u77E5\u8BC6\u7684\u5165\u95E8\u57F9\u8BAD\u3002\u57F9\u8BAD\u5185\u5BB9\u5305\u62EC\u5168\u7403\u5E94\u5BF9\u6C14\u5019\u95EE\u9898\u7684\u73B0\u72B6\u3001\u78B3\u6392\u653E\u7684\u8BA1\u91CF\u4E0E\u62A5\u544A\u3001\u76D1\u7BA1\u6CD5\u89C4\u4E0E\u8D44\u672C\u5E02\u573A\u8981\u6C42\u3001\u5236\u9020\u4E1A\u5982\u4F55\u51CF\u78B3\u2026\u2026\u7B49\u7B49"},{label:"\u57F9\u8BAD\u5F62\u5F0F\u4E0E\u65F6\u957F",text:"\u5728\u7EBFWebinar\u3001\u73B0\u573A\u57F9\u8BAD\u3002\u65F6\u957F4\u5C0F\u65F6\u3002"},{label:"\u5B8C\u6210\u57F9\u8BAD\u8981\u6C42",text:"\u7531\u7528\u6237\u5382\u5546Carbon Champion\u4EBA\u5458\u53C2\u4E0E\u57F9\u8BAD\uFF0C\u5E76\u901A\u8FC7\u8003\u8BD5\u3002"}],btn:[{text:"\u4E86\u89E3\u8BE6\u60C5",onClick:function(){}},{text:"\u53C2\u4E0E\u57F9\u8BAD",type:"primary",onClick:function(){}}]},{title:"[AT04]\u7CFB\u5217\u57F9\u8BAD-\u6570\u5B57\u5316\u4F4E\u78B3",icon:(0,e.jsx)(c.J$,{className:"w-[3.45rem]"}),infos:[{label:"\u57F9\u8BAD\u5185\u5BB9\u4ECB\u7ECD",text:"AT04\u57F9\u8BAD\u9879\u76EE\u4E3A\u9488\u5BF9\u6570\u5B57\u5316\u4F4E\u78B3\u4E3B\u9898\u57FA\u7840\u77E5\u8BC6\u7684\u5165\u95E8\u57F9\u8BAD\u3002\u57F9\u8BAD\u5185\u5BB9\u5305\u62EC\u53CC\u78B3\u6570\u5B57\u5316\u73B0\u72B6\u3001\u6570\u5B57\u5316\u5DE5\u5177\u3001\u53EF\u8FFD\u6EAF\u6027\u8981\u6C42\u3001\u5E94\u5BF9\u53CC\u78B3\u6570\u5B57\u5316\u89C4\u5212\u7B49\u3002"},{label:"\u57F9\u8BAD\u5F62\u5F0F\u4E0E\u65F6\u957F",text:"\u5728\u7EBFWebinar\u3001\u73B0\u573A\u57F9\u8BAD\u3002\u65F6\u957F5\u5C0F\u65F6\u3002"},{label:"\u5B8C\u6210\u57F9\u8BAD\u8981\u6C42",text:"\u7531\u7528\u6237\u5382\u5546Carbon Champion\u4E0EDigital Champion\u4EBA\u5458\u53C2\u4E0E\u57F9\u8BAD\uFF0C\u5E76\u901A\u8FC7\u8003\u8BD5\u3002"}],btn:[{text:"\u4E86\u89E3\u8BE6\u60C5",onClick:function(){}},{text:"\u53C2\u4E0E\u57F9\u8BAD",type:"primary",onClick:function(){}}]},{title:"[AC02]\u54A8\u8BE2\u670D\u52A1-\u8BBE\u5B9A\u79D1\u5B66\u53CC\u78B3\u76EE\u6807",icon:(0,e.jsx)(c.v3,{className:"w-[3.45rem]"}),infos:[{label:"\u670D\u52A1\u5185\u5BB9\u4ECB\u7ECD",text:"\u9488\u5BF9\u4F01\u4E1A\u5E94\u5BF9\u53CC\u78B3\u95EE\u9898\u7684\u73B0\u72B6\u68B3\u7406\u4E0E\u79D1\u5B66\u78B3\u76EE\u6807\u8BBE\u5B9A\u3002\u670D\u52A1\u53EF\u6D89\u53CA\u901A\u7528\u7684\u6C14\u5019\u6CBB\u7406\u67B6\u6784\u3001\u5E94\u5BF9\u53CC\u78B3\u95EE\u9898\u7684\u6218\u7565\u6846\u67B6\u3001\u51CF\u78B3\u76EE\u6807\u3001\u78B3\u4E2D\u548C\u7B49\uFF0C\u4E5F\u53EF\u4E3A\u4F01\u4E1A\u53C2\u4E0E\u5E38\u89C1\u7684\u76EE\u6807\u3001\u627F\u8BFA\u6216\u5021\u8BAE\u6D3B\u52A8\u63D0\u4F9B\u8F85\u5BFC\u4E0E\u652F\u6301\uFF0C\u4F8B\u5982SBTi\u3001RE100\u7B49\u3002"},{label:"\u670D\u52A1\u5F62\u5F0F",text:"\u54A8\u8BE2\u3001\u8BC4\u4F30\u5206\u6790\u3001\u57F9\u8BAD\u7B49\u3002"}],btn:[{text:"\u4E86\u89E3\u8BE6\u60C5",onClick:function(){}}]},{title:"[AC03]\u54A8\u8BE2\u670D\u52A1-\u5176\u4ED6\u53CC\u78B3/\u4F4E\u78B3\u53D1\u5C55\u4E3B\u9898",icon:(0,e.jsx)(c.v3,{className:"w-[3.45rem]"}),infos:[{label:"\u670D\u52A1\u5185\u5BB9\u4ECB\u7ECD",text:"\u9488\u5BF9\u6C7D\u8F66\u884C\u4E1A\u5404\u7C7B\u4F01\u4E1A\u53EF\u80FD\u9700\u8981\u7684\u53CC\u78B3/\u4F4E\u78B3\u53D1\u5C55\u4E3B\u9898\u63D0\u4F9B\u7684\u54A8\u8BE2\u670D\u52A1\u3002\u5305\u62EC\uFF1A\u4F01\u4E1A\u78B3\u51CF\u6392\u65B9\u6848\u3001ISCC\u56FD\u9645\u53EF\u6301\u7EED\u4E0E\u78B3\u8BA4\u8BC1\u3001CDP/GRI\u78B3\u62AB\u9732\u3001\u80FD\u6E90\u7BA1\u7406\u4F53\u7CFB\u3001ESG\u4FE1\u606F\u62AB\u9732\u4E0E\u6838\u67E5\u7B49\u3002"},{label:"\u670D\u52A1\u5F62\u5F0F",text:"\u54A8\u8BE2\u3001\u8BC4\u4F30\u5206\u6790\u3001\u57F9\u8BAD\u3001\u8BA4\u8BC1\u7B49\u3002"}],btn:[{text:"\u4E86\u89E3\u8BE6\u60C5",onClick:function(){}}]}]},[]),A=(0,b.useMemo)(function(){return[{title:"[AI01]\u516C\u53F8\u78B3\u6838\u67E5",icon:(0,e.jsx)(c.wc,{className:"w-[3.45rem]"}),infos:[{label:"\u5B9E\u65BD\u5185\u5BB9",text:"\u5305\u542B\u8303\u56F4\u4E00\u3001\u8303\u56F4\u4E8C\u3001\u8303\u56F4\u4E09\u7684\u516C\u53F8\u7EC4\u7EC7\u5C42\u7EA7\u78B3\u6392\u653E\u6838\u67E5\u3002"},{label:"\u4F9D\u636E\u6807\u51C6",text:"ISO 14064-1:2018"},{label:"\u670D\u52A1\u4EA7\u51FA",text:"\u6E29\u5BA4\u6C14\u4F53\u6838\u67E5\u62A5\u544A\u3001\u6E29\u5BA4\u6C14\u4F53\u6838\u67E5\u58F0\u660E\u3002"},{label:"AICP\u6807\u7B7E",text:"\u57FA\u4E8E\u6570\u5B57\u8BA4\u8BC1\u4EA7\u51FA\u5B8C\u6210\u6838\u67E5\u6807\u7B7E\u3002"}],btn:[{text:"\u4E86\u89E3\u8BE6\u60C5",onClick:function(){}},{text:"\u53D1\u8D77\u78B3\u6838\u67E5",type:"primary",onClick:function(){}}]},{title:"[AI02]\u4EA7\u54C1\u78B3\u8DB3\u8FF9",icon:(0,e.jsx)(c.Sm,{className:"w-[3.45rem]"}),infos:[{label:"\u5B9E\u65BD\u5185\u5BB9",text:"\u8F66\u4F01\u78B3\u8DB3\u8FF9\u6E05\u5355\u3001\u4EA7\u54C1\u78B3\u8DB3\u8FF9\u6A21\u578B(\u4F9D\u636EPCR\u89C4\u5219\u5B9A\u4E49\u56FA\u5316\u6A21\u578B)\u3001\u4EA7\u54C1\u78B3\u8DB3\u8FF9\u6D4B\u7B97\u7B49\u3002"},{label:"\u4F9D\u636E\u6807\u51C6",text:"ISO 14067:2018"},{label:"\u670D\u52A1\u4EA7\u51FA",text:"\u78B3\u8DB3\u8FF9\u76D8\u67E5\u62A5\u544A\u3001\u4EA7\u54C1\u78B3\u8DB3\u8FF9\u8BC1\u4E66"},{label:"AICP\u6807\u7B7E",text:"\u57FA\u4E8E\u6570\u5B57\u8BA4\u8BC1\u4EA7\u51FA\u4EA7\u54C1\u78B3\u8DB3\u8FF9\u6807\u7B7E\u3002"}],btn:[{text:"\u4E86\u89E3\u8BE6\u60C5",onClick:function(){}},{text:"\u53D1\u8D77\u78B3\u8DB3\u8FF9\u6D4B\u7B97",type:"primary",onClick:function(){}}]},{title:"[AI03]\u78B3\u51CF\u6392\u91CF\u6D4B\u7B97\u4E0E\u8BC4\u4F30",icon:(0,e.jsx)(c.TZ,{className:"w-[3.45rem]"}),infos:[{label:"\u5B9E\u65BD\u5185\u5BB9",text:"\u5B9E\u65BD\u4EA7\u54C1\u5C42\u7EA7\u3001\u9879\u76EE\u5C42\u7EA7\u3001\u6280\u672F\u5C42\u7EA7\u7B49\u78B3\u51CF\u6392\u7684\u51CF\u6392\u91CF\u6D4B\u7B97\u3002"},{label:"\u4F9D\u636E\u6807\u51C6",text:"ISO 14064-1:2018, ISO 14064-2:2019\u7B49"},{label:"\u670D\u52A1\u4EA7\u51FA",text:"\u6E29\u5BA4\u6C14\u4F53\u51CF\u6392\u8BC4\u4F30\u62A5\u544A\u3001\u51CF\u78B3\u8BC1\u4E66\u7B49"},{label:"AICP\u6807\u7B7E",text:"\u57FA\u4E8E\u6570\u5B57\u8BA4\u8BC1\u4EA7\u51FA\u51CF\u78B3\u6807\u7B7E\u3002"}],btn:[{text:"\u4E86\u89E3\u8BE6\u60C5",onClick:function(){}}]},{title:"[AI04]\u78B3\u4E2D\u548C",icon:(0,e.jsx)(c.tx,{className:"w-[3.45rem]"}),infos:[{label:"\u5B9E\u65BD\u5185\u5BB9",text:"\u78B3\u4E2D\u548C\u6D4B\u7B97\u5DE5\u5177\u3001\u78B3\u4E2D\u548C\u8DEF\u5F84\u4E0E\u76EE\u6807\u8BC4\u4F30\u7B49\u3002"},{label:"\u4F9D\u636E\u6807\u51C6",text:"PAS 2060, ISO 14068"},{label:"\u670D\u52A1\u4EA7\u51FA",text:"\u78B3\u4E2D\u548C\u8BC4\u4F30\u62A5\u544A\u3001\u78B3\u4E2D\u548C\u8BC1\u4E66\u3002"},{label:"AICP\u6807\u7B7E",text:"\u57FA\u4E8E\u6570\u5B57\u8BA4\u8BC1\u4EA7\u51FA\u78B3\u4E2D\u548C\u6807\u7B7E\u6216\u9636\u6BB5\u6210\u5C31\u6807\u7B7E\u3002"}],btn:[{text:"\u4E86\u89E3\u8BE6\u60C5",onClick:function(){}}]}]},[]),k=(0,b.useMemo)(function(){return[{title:"[AM01]\u7EFF\u8272\u80FD\u6E90\u8F6C\u578B",icon:(0,e.jsx)(c.hz,{className:"w-[3.45rem]"}),infos:[{label:"\u670D\u52A1\u5185\u5BB9",text:"AICP\u6574\u5408\u5168\u65B9\u4F4D\u7684\u7EFF\u8272\u80FD\u6E90\u8F6C\u578B\u65B9\u6848\uFF0C\u5305\u62EC\u7EFF\u8272\u7535\u529B\u63A5\u5165\u3001\u5DE5\u4E1A\u56ED\u533A\u652F\u6301\u3001\u80FD\u6E90\u7BA1\u7406\u7CFB\u7EDF\u65B9\u6848\u7B49\u3002"},{label:"\u670D\u52A1\u5F62\u5F0F",text:"\u54A8\u8BE2\u670D\u52A1\u3001\u7EFF\u8272\u80FD\u6E90\u8F6C\u578B\u65B9\u6848\u4EE5\u53CA\u8D44\u6E90\u5BF9\u63A5\u3002"}],btn:[{text:"\u4E86\u89E3\u8BE6\u60C5",onClick:function(){}}]},{title:"[AM05]\u78B3\u8D44\u4EA7\u5F00\u53D1",icon:(0,e.jsx)(c.vB,{className:"w-[3.45rem]"}),infos:[{label:"\u670D\u52A1\u5185\u5BB9",text:"\u57FA\u4E8E\u51CF\u78B3\u6D3B\u52A8\u4EA7\u751F\u7684\u78B3\u4FE1\u7528(Carbon Credit)\u8D44\u4EA7\u7684\u5F00\u53D1\u7BA1\u7406\u3002\u670D\u52A1\u53EF\u5305\u542B\uFF1A\u524D\u671F\u54A8\u8BE2\u8BC4\u4F30\u3001\u5F00\u53D1\u7BA1\u7406\u3001\u5E02\u573A\u8D44\u6E90\u3002"},{label:"\u670D\u52A1\u5F62\u5F0F",text:"\u54A8\u8BE2\u670D\u52A1\u3001\u8BC4\u4F30\u3001\u5F00\u53D1\u7BA1\u7406\u3001\u8D44\u6E90\u5BF9\u63A5\u7B49\u3002"}],btn:[{text:"\u4E86\u89E3\u8BE6\u60C5",onClick:function(){}}]},{title:"[AM06]\u81EA\u613F\u78B3\u5E02\u573A\u4EA4\u6613\u670D\u52A1",icon:(0,e.jsx)(c.vB,{className:"w-[3.45rem]"}),infos:[{label:"\u670D\u52A1\u5185\u5BB9",text:"\u5E2E\u52A9\u7528\u6237\u5728\u81EA\u613F\u78B3\u5E02\u573A\u8D2D\u4E70\u548C\u4EA4\u6613\u78B3\u4FE1\u7528\u7C7B\u8D44\u4EA7\uFF0C\u5E76\u5B8C\u6210\u78B3\u62B5\u9500(Carbon Offsetting)\u6D3B\u52A8\u3002"},{label:"\u670D\u52A1\u5F62\u5F0F",text:"\u54A8\u8BE2\u670D\u52A1\u3001\u5E02\u573A\u8D44\u6E90\u3001\u8BC4\u4F30\u3001\u8BA4\u8BC1\u3002"}],btn:[{text:"\u4E86\u89E3\u8BE6\u60C5",onClick:function(){}}]}]},[]);return(0,e.jsxs)(b.Fragment,{children:[(0,e.jsxs)("div",{className:"flex flex-col items-start",children:[(0,e.jsxs)("div",{className:"flex flex-wrap items-center cursor-pointer",onClick:function(){return h(!x)},children:[(0,e.jsx)("span",{className:"text-lg font-bold",children:"\u7C7B\u522B-\u57F9\u8BAD\u4E0E\u54A8\u8BE2 (4)"}),(0,e.jsx)(_.sF,{className:f()("ml-2 mt-[-0.45rem] text-2xl",x&&"rotate-180 mb-[-1.2rem]")})]}),x&&(0,e.jsx)("div",{className:"flex flex-wrap mr-[-20px] mo:flex-col mo:mr-0",children:O.map(function(s,E){return(0,e.jsx)(l,{data:s},"inProgress".concat(E))})})]}),(0,e.jsxs)("div",{className:"flex flex-col items-start mt-5",children:[(0,e.jsxs)("div",{className:"flex flex-wrap items-center cursor-pointer",onClick:function(){return C(!m)},children:[(0,e.jsx)("span",{className:"text-lg font-bold",children:"\u7C7B\u522B-\u53CC\u78B3\u5B9E\u65BD (4)"}),(0,e.jsx)(_.sF,{className:f()("ml-2 mt-[-0.45rem] text-2xl",m&&"rotate-180 mb-[-1.2rem]")})]}),m&&(0,e.jsx)("div",{className:"flex flex-wrap mr-[-20px] mo:flex-col  mo:mr-0",children:A.map(function(s,E){return(0,e.jsx)(l,{data:s},"implement".concat(E))})})]}),(0,e.jsxs)("div",{className:"flex flex-col items-start mt-5",children:[(0,e.jsxs)("div",{className:"flex flex-wrap items-center cursor-pointer",onClick:function(){return T(!M)},children:[(0,e.jsx)("span",{className:"text-lg font-bold",children:"\u7C7B\u522B-\u5E02\u573A\u5316\u652F\u6301 (3)"}),(0,e.jsx)(_.sF,{className:f()("ml-2 mt-[-0.45rem] text-2xl",M&&"rotate-180 mb-[-1.2rem]")})]}),M&&(0,e.jsx)("div",{className:"flex flex-wrap mr-[-20px] mo:flex-col  mo:mr-0",children:k.map(function(s,E){return(0,e.jsx)(l,{data:s},"market".concat(E))})})]})]})}var r=null,a=i},34668:function(y,j,n){n.d(j,{w_:function(){return _}});var N=[{id:"ci",name:"Circum Icons",projectUrl:"https://circumicons.com/",license:"MPL-2.0 license",licenseUrl:"https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE"},{id:"fa",name:"Font Awesome 5",projectUrl:"https://fontawesome.com/",license:"CC BY 4.0 License",licenseUrl:"https://creativecommons.org/licenses/by/4.0/"},{id:"fa6",name:"Font Awesome 6",projectUrl:"https://fontawesome.com/",license:"CC BY 4.0 License",licenseUrl:"https://creativecommons.org/licenses/by/4.0/"},{id:"io",name:"Ionicons 4",projectUrl:"https://ionicons.com/",license:"MIT",licenseUrl:"https://github.com/ionic-team/ionicons/blob/master/LICENSE"},{id:"io5",name:"Ionicons 5",projectUrl:"https://ionicons.com/",license:"MIT",licenseUrl:"https://github.com/ionic-team/ionicons/blob/master/LICENSE"},{id:"md",name:"Material Design icons",projectUrl:"http://google.github.io/material-design-icons/",license:"Apache License Version 2.0",licenseUrl:"https://github.com/google/material-design-icons/blob/master/LICENSE"},{id:"ti",name:"Typicons",projectUrl:"http://s-ings.com/typicons/",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/"},{id:"go",name:"Github Octicons icons",projectUrl:"https://octicons.github.com/",license:"MIT",licenseUrl:"https://github.com/primer/octicons/blob/master/LICENSE"},{id:"fi",name:"Feather",projectUrl:"https://feathericons.com/",license:"MIT",licenseUrl:"https://github.com/feathericons/feather/blob/master/LICENSE"},{id:"lu",name:"Lucide",projectUrl:"https://lucide.dev/",license:"ISC",licenseUrl:"https://github.com/lucide-icons/lucide/blob/main/LICENSE"},{id:"gi",name:"Game Icons",projectUrl:"https://game-icons.net/",license:"CC BY 3.0",licenseUrl:"https://creativecommons.org/licenses/by/3.0/"},{id:"wi",name:"Weather Icons",projectUrl:"https://erikflowers.github.io/weather-icons/",license:"SIL OFL 1.1",licenseUrl:"http://scripts.sil.org/OFL"},{id:"di",name:"Devicons",projectUrl:"https://vorillaz.github.io/devicons/",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"ai",name:"Ant Design Icons",projectUrl:"https://github.com/ant-design/ant-design-icons",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"bs",name:"Bootstrap Icons",projectUrl:"https://github.com/twbs/icons",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"ri",name:"Remix Icon",projectUrl:"https://github.com/Remix-Design/RemixIcon",license:"Apache License Version 2.0",licenseUrl:"http://www.apache.org/licenses/"},{id:"fc",name:"Flat Color Icons",projectUrl:"https://github.com/icons8/flat-color-icons",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"gr",name:"Grommet-Icons",projectUrl:"https://github.com/grommet/grommet-icons",license:"Apache License Version 2.0",licenseUrl:"http://www.apache.org/licenses/"},{id:"hi",name:"Heroicons",projectUrl:"https://github.com/tailwindlabs/heroicons",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"hi2",name:"Heroicons 2",projectUrl:"https://github.com/tailwindlabs/heroicons",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"si",name:"Simple Icons",projectUrl:"https://simpleicons.org/",license:"CC0 1.0 Universal",licenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/"},{id:"sl",name:"Simple Line Icons",projectUrl:"https://thesabbir.github.io/simple-line-icons/",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"im",name:"IcoMoon Free",projectUrl:"https://github.com/Keyamoon/IcoMoon-Free",license:"CC BY 4.0 License",licenseUrl:"https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt"},{id:"bi",name:"BoxIcons",projectUrl:"https://github.com/atisawd/boxicons",license:"CC BY 4.0 License",licenseUrl:"https://github.com/atisawd/boxicons/blob/master/LICENSE"},{id:"cg",name:"css.gg",projectUrl:"https://github.com/astrit/css.gg",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"vsc",name:"VS Code Icons",projectUrl:"https://github.com/microsoft/vscode-codicons",license:"CC BY 4.0",licenseUrl:"https://creativecommons.org/licenses/by/4.0/"},{id:"tb",name:"Tabler Icons",projectUrl:"https://github.com/tabler/tabler-icons",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"tfi",name:"Themify Icons",projectUrl:"https://github.com/lykmapipo/themify-icons",license:"MIT",licenseUrl:"https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE"},{id:"rx",name:"Radix Icons",projectUrl:"https://icons.radix-ui.com",license:"MIT",licenseUrl:"https://github.com/radix-ui/icons/blob/master/LICENSE"},{id:"pi",name:"Phosphor Icons",projectUrl:"https://github.com/phosphor-icons/core",license:"MIT",licenseUrl:"https://github.com/phosphor-icons/core/blob/main/LICENSE"},{id:"lia",name:"Icons8 Line Awesome",projectUrl:"https://icons8.com/line-awesome",license:"MIT",licenseUrl:"https://github.com/icons8/line-awesome/blob/master/LICENSE.md"}],d=n(50959),g={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=d.createContext&&d.createContext(g),p=function(){return p=Object.assign||function(t){for(var l,i=1,r=arguments.length;i<r;i++){l=arguments[i];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a])}return t},p.apply(this,arguments)},f=function(t,l){var i={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&l.indexOf(r)<0&&(i[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(t);a<r.length;a++)l.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(i[r[a]]=t[r[a]]);return i};function b(t){return t&&t.map(function(l,i){return d.createElement(l.tag,p({key:i},l.attr),b(l.child))})}function _(t){return function(l){return d.createElement(e,p({attr:p({},t.attr)},l),b(t.child))}}function e(t){var l=function(i){var r=t.attr,a=t.size,o=t.title,u=f(t,["attr","size","title"]),x=a||i.size||"1em",h;return i.className&&(h=i.className),t.className&&(h=(h?h+" ":"")+t.className),d.createElement("svg",p({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,u,{className:h,style:p(p({color:t.color||i.color},i.style),t.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),o&&d.createElement("title",null,o),t.children)};return c!==void 0?d.createElement(c.Consumer,null,function(i){return l(i)}):l(g)}}}]);
