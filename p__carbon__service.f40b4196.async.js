"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[1851],{67454:function(O,j,t){t.d(j,{u:function(){return r},z:function(){return o}});var M=t(24047),h=t.n(M),_=t(86378),c=t.n(_),p=t(28488),C=t.n(p),g=t(84875),b=t.n(g),I=t(9751),e=t(11527),s=["children","className"],n=["busy","disabled","className","defStyle","children"];function o(l){var u=l.children,a=l.className,i=C()(l,s);return(0,e.jsx)("button",c()(c()({},i),{},{className:b()(a),children:l.children}))}function r(l){var u,a=l.busy,i=l.disabled,N=l.className,v=l.defStyle,E=v===void 0?"btn-primary":v,x=l.children,U=C()(l,n);return(0,e.jsx)("button",c()(c()({className:b()(N,(u={},h()(u,E,!i),h()(u,"btn-disable",i),u))},U),{},{children:a?(0,e.jsx)(I.fCD,{className:"animate-spin"}):x}))}},36555:function(O,j,t){t.r(j),t.d(j,{default:function(){return l}});var M=t(30577),h=t.n(M),_=t(67454),c=t(1629),p=t(35016),C=t(84875),g=t.n(C),b=t(50959),I=t(9751),e=t(11527);function s(u){return(0,e.jsxs)("div",{className:"flex flex-col text-base",children:[(0,e.jsxs)("label",{className:"font-bold leading-[1.75rem]",children:[u.label," :"]}),(0,e.jsx)("span",{className:"text-gray-6 leading-[1.75rem]",children:u.text})]})}function n(u){var a=u.data,i=a.title,N=a.icon,v=a.infos,E=a.btn,x=a.tools,U=x===void 0?[]:x;return(0,e.jsxs)("div",{className:"flex flex-col justify-between p-5 mt-5 mr-5 bg-white rounded-lg mo:mr-0 box-layout mo:w-full",children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"flex items-center",children:[N,(0,e.jsx)("span",{className:"ml-4 text-xl font-semibold",children:i})]}),(0,e.jsx)("div",{className:"mt-5",children:v.map(function(m,f){return(0,e.jsx)(s,{label:m.label,text:m.text},"PartInfo".concat(f))})})]}),(0,e.jsxs)("div",{className:"flex flex-col",children:[(0,e.jsx)("div",{children:!!U.length&&U.map(function(m,f){return(0,e.jsxs)("div",{className:"flex items-center cursor-pointer",children:[m.icon,(0,e.jsx)("span",{className:"text-blue-0 font-semibold ml-2.5 underline",children:m.text})]},"tools".concat(f))})}),(0,e.jsx)("div",{className:"flex mt-5 mo:flex-col",children:E.map(function(m,f){return m.type==="primary"?(0,e.jsx)(_.z,{onClick:function(){return m.onClick&&m.onClick()},className:"ml-5 mo:ml-0 text-lg bg-green-2 text-white rounded-lg flex-1 min-h-[2.865rem] mo:mt-5 hover:bg-green-28",children:m.text},"btn".concat(f)):(0,e.jsx)(_.z,{onClick:function(){return m.onClick&&m.onClick()},className:"bg-green-2/10 text-lg text-green-2 hover:bg-green-2/20 border-2 border-green-2 rounded-lg flex-1 min-h-[2.865rem]",children:m.text},"btn".concat(f))})})]})]})}function o(){var u=(0,b.useState)(!0),a=h()(u,2),i=a[0],N=a[1],v=(0,b.useState)(!0),E=h()(v,2),x=E[0],U=E[1],m=(0,p.useNavigate)(),f=(0,b.useMemo)(function(){return[{title:(0,e.jsxs)("span",{children:["[AT04]",(0,e.jsx)("span",{className:"text-green-2",children:"[2023030491]"}),"\u7CFB\u5217\u57F9\u8BAD-\u6570\u5B57\u5316\u4F4E\u78B3"]}),icon:(0,e.jsx)(c.J$,{className:"w-[3.45rem]"}),infos:[{label:"\u57F9\u8BAD\u5185\u5BB9\u4ECB\u7ECD",text:"AT04\u57F9\u8BAD\u9879\u76EE\u4E3A\u9488\u5BF9\u53CC\u78B3\u4E3B\u9898\u57FA\u7840\u77E5\u8BC6\u7684\u5165\u95E8\u57F9\u8BAD\u3002\u57F9\u8BAD\u5185\u5BB9\u5305\u62EC\u5168\u7403\u5E94\u5BF9\u6C14\u5019\u95EE\u9898\u7684\u73B0\u72B6\u3001\u78B3\u6392\u653E\u7684\u8BA1\u91CF\u4E0E\u62A5\u544A\u3001\u76D1\u7BA1\u6CD5\u89C4\u4E0E\u8D44\u672C\u5E02\u573A\u8981\u6C42\u3001\u5236\u9020\u4E1A\u5982\u4F55\u51CF\u78B3\u2026\u2026\u7B49\u7B49"},{label:"\u57F9\u8BAD\u5F62\u5F0F\u4E0E\u65F6\u957F",text:"\u5728\u7EBFWebinar\u3001\u73B0\u573A\u57F9\u8BAD\u3002\u65F6\u957F4\u5C0F\u65F6\u3002"},{label:"\u5B8C\u6210\u57F9\u8BAD\u8981\u6C42",text:"\u7531\u7528\u6237\u5382\u5546Carbon Champion\u4EBA\u5458\u53C2\u4E0E\u57F9\u8BAD\uFF0C\u5E76\u901A\u8FC7\u8003\u8BD5\u3002"}],btn:[{text:"\u67E5\u770B\u8BE6\u60C5",onClick:function(){}},{text:"\u7EE7\u7EED\u8BFE\u7A0B",type:"primary",onClick:function(){}}]},{title:(0,e.jsxs)("span",{children:["[AI08]",(0,e.jsx)("span",{className:"text-green-2",children:"[20235017701]"}),"\u4EA7\u54C1\u78B3\u8DB3\u8FF9-Sample Model"]}),icon:(0,e.jsx)(c.Sm,{className:"w-[3.45rem]"}),infos:[{label:"\u4EA7\u54C1\u53F7",text:"Sample Model - \u6574\u8F66\u7C7B\u578B"},{label:"\u5B9E\u65BD\u4F9D\u636E",text:"ISO 14067, ISO 14040"},{label:"\u5B9E\u65BD\u5185\u5BB9",text:"\u4EA7\u54C1\u78B3\u8DB3\u8FF9\u6A21\u578B\uFF0C\u4EA7\u54C1\u78B3\u8DB3\u8FF9\u6D4B\u7B97"}],tools:[{icon:(0,e.jsx)(c.w1,{}),text:"PCF\u6570\u5B57\u5316\u5DE5\u5177",onClick:function(){}}],btn:[{text:"\u67E5\u770B\u8BE6\u60C5",onClick:function(){}},{text:"\u8FDB\u5165\u5DE5\u5177\u9875\u9762",type:"primary",onClick:function(){return m("/tools/tools")}}]},{title:(0,e.jsxs)("span",{children:["[AC02]",(0,e.jsx)("span",{className:"text-green-2",children:"[20234401]"}),"\u54A8\u8BE2\u670D\u52A1-\u8BBE\u5B9A\u79D1\u5B66\u53CC\u78B3\u76EE\u6807"]}),icon:(0,e.jsx)(c.v3,{className:"w-[3.45rem]"}),infos:[{label:"\u670D\u52A1\u5185\u5BB9\u4ECB\u7ECD",text:"\u9488\u5BF9\u4F01\u4E1A\u5E94\u5BF9\u53CC\u78B3\u95EE\u9898\u7684\u73B0\u72B6\u68B3\u7406\u4E0E\u79D1\u5B66\u78B3\u76EE\u6807\u8BBE\u5B9A\u3002\u670D\u52A1\u53EF\u6D89\u53CA\u901A\u7528\u7684\u6C14\u5019\u6CBB\u7406\u67B6\u6784\u3001\u5E94\u5BF9\u53CC\u78B3\u95EE\u9898\u7684\u6218\u7565\u6846\u67B6\u3001\u51CF\u78B3\u76EE\u6807\u3001\u78B3\u4E2D\u548C\u7B49\uFF0C\u4E5F\u53EF\u4E3A\u4F01\u4E1A\u53C2\u4E0E\u5E38\u89C1\u7684\u76EE\u6807\u3001\u627F\u8BFA\u6216\u5021\u8BAE\u6D3B\u52A8\u63D0\u4F9B\u8F85\u5BFC\u4E0E\u652F\u6301\uFF0C\u4F8B\u5982SBTi\u3001RE100\u7B49\u3002"},{label:"\u670D\u52A1\u4F9B\u5E94\u5546",text:"YYY"}],btn:[{text:"\u67E5\u770B\u8BE6\u60C5",onClick:function(){}}]},{title:(0,e.jsxs)("span",{children:["[AM01]",(0,e.jsx)("span",{className:"text-green-2",children:"[20230029391]"}),"\u7EFF\u8272\u80FD\u6E90\u8F6C\u578B"]}),icon:(0,e.jsx)(c.hz,{className:"w-[3.45rem]"}),infos:[{label:"\u670D\u52A1\u5185\u5BB9",text:"AICP\u6574\u5408\u5168\u65B9\u4F4D\u7684\u7EFF\u8272\u80FD\u6E90\u8F6C\u578B\u65B9\u6848\uFF0C\u5305\u62EC\u7EFF\u8272\u7535\u529B\u63A5\u5165\u3001\u5DE5\u4E1A\u56ED\u533A\u652F\u6301\u3001\u80FD\u6E90\u7BA1\u7406\u7CFB\u7EDF\u65B9\u6848\u7B49\u3002"},{label:"\u670D\u52A1\u4F9B\u5E94\u5546",text:"ZZZ"}],btn:[{text:"\u67E5\u770B\u8BE6\u60C5",onClick:function(){}}]}]},[]),y=(0,b.useMemo)(function(){return[{title:(0,e.jsxs)("span",{children:["[AI01]",(0,e.jsx)("span",{className:"text-green-2",children:"[202303444101]"}),"\u516C\u53F8\u78B3\u6838\u67E5"]}),icon:(0,e.jsx)(c.wc,{className:"w-[3.45rem]"}),infos:[{label:"\u5B9E\u65BD\u5185\u5BB9",text:"\u8303\u56F4\u4E00\u78B3\u6392\u653E\u6838\u67E5\uFF0C\u516C\u53F8\u7EC4\u7EC7\u5C42\u7EA7\u3002"},{label:"\u4F9D\u636E\u6807\u51C6",text:"ISO 14064:2018"},{label:"\u670D\u52A1\u4EA7\u51FA",text:"\u6E29\u5BA4\u6C14\u4F53\u6838\u67E5\u62A5\u544A\u3001\u6E29\u5BA4\u6C14\u4F53\u6838\u67E5\u58F0\u660E\u3002"},{label:"AICP\u6807\u7B7E",text:"\u57FA\u4E8E\u6570\u5B57\u8BA4\u8BC1\u4EA7\u51FA\u6807\u7B7E\u3002"}],btn:[{text:"\u67E5\u770B\u8BE6\u60C5",onClick:function(){}}]},{title:(0,e.jsxs)("span",{children:["[AI01]",(0,e.jsx)("span",{className:"text-green-2",children:"[202303443042]"}),"\u516C\u53F8\u78B3\u6838\u67E5"]}),icon:(0,e.jsx)(c.wc,{className:"w-[3.45rem]"}),infos:[{label:"\u5B9E\u65BD\u5185\u5BB9",text:"\u8303\u56F4\u4E8C\u78B3\u6392\u653E\u6838\u67E5\uFF0C\u516C\u53F8\u7EC4\u7EC7\u5C42\u7EA7\u3002"},{label:"\u4F9D\u636E\u6807\u51C6",text:"ISO 14064:2018"},{label:"\u670D\u52A1\u4EA7\u51FA",text:"\u6E29\u5BA4\u6C14\u4F53\u6838\u67E5\u62A5\u544A\u3001\u6E29\u5BA4\u6C14\u4F53\u6838\u67E5\u58F0\u660E\u3002"},{label:"AICP\u6807\u7B7E",text:"\u57FA\u4E8E\u6570\u5B57\u8BA4\u8BC1\u4EA7\u51FA\u6807\u7B7E\u3002"}],btn:[{text:"\u67E5\u770B\u8BE6\u60C5",onClick:function(){}}]}]},[]);return(0,e.jsxs)(b.Fragment,{children:[(0,e.jsxs)("div",{className:"flex flex-col items-start",children:[(0,e.jsxs)("div",{className:"flex flex-wrap items-center cursor-pointer",onClick:function(){return N(!i)},children:[(0,e.jsx)("span",{className:"text-lg font-bold",children:"\u8FDB\u884C\u4E2D/\u5B9E\u65BD\u4E2D (4)"}),(0,e.jsx)(I.sF,{className:g()("ml-2 mt-[-0.45rem] text-2xl",i&&"rotate-180 mb-[-1.2rem]")})]}),i&&(0,e.jsx)("div",{className:"flex flex-wrap mr-[-20px] mo:flex-col  mo:mr-0",children:f.map(function(d,T){return(0,e.jsx)(n,{data:d},"inProgress".concat(T))})})]}),(0,e.jsxs)("div",{className:"flex flex-col items-start mt-5",children:[(0,e.jsxs)("div",{className:"flex flex-wrap items-center cursor-pointer",onClick:function(){return U(!x)},children:[(0,e.jsx)("span",{className:"text-lg font-bold",children:"\u5DF2\u5B8C\u6210 (2)"}),(0,e.jsx)(I.sF,{className:g()("ml-2 mt-[-0.45rem] text-2xl",x&&"rotate-180 mb-[-1.2rem]")})]}),x&&(0,e.jsx)("div",{className:"flex w-full flex-wrap mr-[-20px] mo:flex-col  mo:mr-0",children:y.map(function(d,T){return(0,e.jsx)(n,{data:d},"inProgress".concat(T))})})]})]})}var r=null,l=o},34668:function(O,j,t){t.d(j,{w_:function(){return b}});var M=[{id:"ci",name:"Circum Icons",projectUrl:"https://circumicons.com/",license:"MPL-2.0 license",licenseUrl:"https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE"},{id:"fa",name:"Font Awesome 5",projectUrl:"https://fontawesome.com/",license:"CC BY 4.0 License",licenseUrl:"https://creativecommons.org/licenses/by/4.0/"},{id:"fa6",name:"Font Awesome 6",projectUrl:"https://fontawesome.com/",license:"CC BY 4.0 License",licenseUrl:"https://creativecommons.org/licenses/by/4.0/"},{id:"io",name:"Ionicons 4",projectUrl:"https://ionicons.com/",license:"MIT",licenseUrl:"https://github.com/ionic-team/ionicons/blob/master/LICENSE"},{id:"io5",name:"Ionicons 5",projectUrl:"https://ionicons.com/",license:"MIT",licenseUrl:"https://github.com/ionic-team/ionicons/blob/master/LICENSE"},{id:"md",name:"Material Design icons",projectUrl:"http://google.github.io/material-design-icons/",license:"Apache License Version 2.0",licenseUrl:"https://github.com/google/material-design-icons/blob/master/LICENSE"},{id:"ti",name:"Typicons",projectUrl:"http://s-ings.com/typicons/",license:"CC BY-SA 3.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/3.0/"},{id:"go",name:"Github Octicons icons",projectUrl:"https://octicons.github.com/",license:"MIT",licenseUrl:"https://github.com/primer/octicons/blob/master/LICENSE"},{id:"fi",name:"Feather",projectUrl:"https://feathericons.com/",license:"MIT",licenseUrl:"https://github.com/feathericons/feather/blob/master/LICENSE"},{id:"lu",name:"Lucide",projectUrl:"https://lucide.dev/",license:"ISC",licenseUrl:"https://github.com/lucide-icons/lucide/blob/main/LICENSE"},{id:"gi",name:"Game Icons",projectUrl:"https://game-icons.net/",license:"CC BY 3.0",licenseUrl:"https://creativecommons.org/licenses/by/3.0/"},{id:"wi",name:"Weather Icons",projectUrl:"https://erikflowers.github.io/weather-icons/",license:"SIL OFL 1.1",licenseUrl:"http://scripts.sil.org/OFL"},{id:"di",name:"Devicons",projectUrl:"https://vorillaz.github.io/devicons/",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"ai",name:"Ant Design Icons",projectUrl:"https://github.com/ant-design/ant-design-icons",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"bs",name:"Bootstrap Icons",projectUrl:"https://github.com/twbs/icons",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"ri",name:"Remix Icon",projectUrl:"https://github.com/Remix-Design/RemixIcon",license:"Apache License Version 2.0",licenseUrl:"http://www.apache.org/licenses/"},{id:"fc",name:"Flat Color Icons",projectUrl:"https://github.com/icons8/flat-color-icons",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"gr",name:"Grommet-Icons",projectUrl:"https://github.com/grommet/grommet-icons",license:"Apache License Version 2.0",licenseUrl:"http://www.apache.org/licenses/"},{id:"hi",name:"Heroicons",projectUrl:"https://github.com/tailwindlabs/heroicons",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"hi2",name:"Heroicons 2",projectUrl:"https://github.com/tailwindlabs/heroicons",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"si",name:"Simple Icons",projectUrl:"https://simpleicons.org/",license:"CC0 1.0 Universal",licenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/"},{id:"sl",name:"Simple Line Icons",projectUrl:"https://thesabbir.github.io/simple-line-icons/",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"im",name:"IcoMoon Free",projectUrl:"https://github.com/Keyamoon/IcoMoon-Free",license:"CC BY 4.0 License",licenseUrl:"https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt"},{id:"bi",name:"BoxIcons",projectUrl:"https://github.com/atisawd/boxicons",license:"CC BY 4.0 License",licenseUrl:"https://github.com/atisawd/boxicons/blob/master/LICENSE"},{id:"cg",name:"css.gg",projectUrl:"https://github.com/astrit/css.gg",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"vsc",name:"VS Code Icons",projectUrl:"https://github.com/microsoft/vscode-codicons",license:"CC BY 4.0",licenseUrl:"https://creativecommons.org/licenses/by/4.0/"},{id:"tb",name:"Tabler Icons",projectUrl:"https://github.com/tabler/tabler-icons",license:"MIT",licenseUrl:"https://opensource.org/licenses/MIT"},{id:"tfi",name:"Themify Icons",projectUrl:"https://github.com/lykmapipo/themify-icons",license:"MIT",licenseUrl:"https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE"},{id:"rx",name:"Radix Icons",projectUrl:"https://icons.radix-ui.com",license:"MIT",licenseUrl:"https://github.com/radix-ui/icons/blob/master/LICENSE"},{id:"pi",name:"Phosphor Icons",projectUrl:"https://github.com/phosphor-icons/core",license:"MIT",licenseUrl:"https://github.com/phosphor-icons/core/blob/main/LICENSE"},{id:"lia",name:"Icons8 Line Awesome",projectUrl:"https://icons8.com/line-awesome",license:"MIT",licenseUrl:"https://github.com/icons8/line-awesome/blob/master/LICENSE.md"}],h=t(50959),_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=h.createContext&&h.createContext(_),p=function(){return p=Object.assign||function(e){for(var s,n=1,o=arguments.length;n<o;n++){s=arguments[n];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},p.apply(this,arguments)},C=function(e,s){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&s.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)s.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};function g(e){return e&&e.map(function(s,n){return h.createElement(s.tag,p({key:n},s.attr),g(s.child))})}function b(e){return function(s){return h.createElement(I,p({attr:p({},e.attr)},s),g(e.child))}}function I(e){var s=function(n){var o=e.attr,r=e.size,l=e.title,u=C(e,["attr","size","title"]),a=r||n.size||"1em",i;return n.className&&(i=n.className),e.className&&(i=(i?i+" ":"")+e.className),h.createElement("svg",p({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,u,{className:i,style:p(p({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),l&&h.createElement("title",null,l),e.children)};return c!==void 0?h.createElement(c.Consumer,null,function(n){return s(n)}):s(_)}}}]);
