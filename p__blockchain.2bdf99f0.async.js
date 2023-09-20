"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[9182],{33665:function($,N,n){n.d(N,{Fm:function(){return R},N2:function(){return E},aF:function(){return T},dD:function(){return V},g3:function(){return K},h3:function(){return Z},is:function(){return A},oR:function(){return S},pm:function(){return Q},xB:function(){return M}});var y=n(86378),x=n.n(y),L=n(30577),p=n.n(L),U=n(72294),O=n.n(U),k=n(9441),j=n(89850),D=n(35016),c=n(50959),z=n(11527),H={inited:!1,last_input_vin:"",isMobile:!1,show_header_tip:!1};function A(){var i=localStorage.getItem("user-data");if(i)try{return JSON.parse(i)}catch(o){return}}var J=(0,c.createContext)({});function S(){return(0,c.useContext)(J)}var Y=["/dashboard","/product","/activities","/pcf","/carbon","/tools","/model"],_=function(o,r){if(!r)return!1;var f=O()(o),e;try{for(f.s();!(e=f.n()).done;){var a=e.value;if(r===a||r.startsWith(a+"/"))return!0}}catch(l){f.e(l)}finally{f.f()}return!1};function t(i){var o=(0,D.useLocation)(),r=o.pathname,f=(0,D.useNavigate)(),e=S(),a=e.userData,l=e.inited,u=(0,c.useMemo)(function(){return l&&!a&&_(Y,r)},[l,a,r]);return u?(f("/login",{replace:!0}),null):(0,z.jsx)(z.Fragment,{children:i.children})}function K(i){var o=(0,c.useState)(i.init||{}),r=p()(o,2),f=r[0],e=r[1],a=(0,c.useRef)(!1);(0,c.useEffect)(function(){a.current&&e(function(h){return x()(x()({},h),i.init)}),a.current=!0},[i.init]);var l=(0,c.useCallback)(function(h){e(function(B){return x()(x()({},B),h)})},[]),u=(0,c.useMemo)(function(){return x()(x()({},f),{},{update:l})},[f]);return(0,c.useEffect)(function(){var h=function(){return l({isMobile:window.innerWidth<=900})};return window.addEventListener("resize",h),function(){window.removeEventListener("resize",h)}},[]),(0,z.jsx)(J.Provider,{value:u,children:(0,z.jsx)(t,{children:i.children})})}function E(){var i={inited:!0,isMobile:window.innerWidth<=900,last_input_vin:sessionStorage.getItem("last_input_vin")||"",show_header_tip:!localStorage.getItem("hidden_header_tip")},o=A();return o&&new Date().getTime()-o.loginTime<1e3*60*60*24&&(i.userData=o),i}function V(){var i=S(),o=i.isMobile;return o}function Q(){var i=S(),o=i.toast,r=i.update,f=(0,c.useCallback)(function(e){r({toast:e})},[r]);return{current:o,toast:f}}function Z(){var i=Q(),o=i.toast,r=(0,k.N)(),f=r.t;return(0,c.useCallback)(function(e){o({type:"error",msg:f((0,j.az)(e))})},[f,o])}function T(){var i=S(),o=i.userData,r=i.update,f=(0,c.useCallback)(function(e,a){e&&a&&(e.loginTime=new Date().getTime()),r({userData:e}),localStorage.setItem("user-data",e?JSON.stringify(e):"")},[]);return{user:o,setUser:f}}function M(){var i=S(),o=i.last_input_vin,r=i.update,f=(0,c.useCallback)(function(e){r({last_input_vin:e}),e==="1500101202311001"&&sessionStorage.setItem("last_input_vin",e)},[r]);return{last_input_vin:o,setLastInputVin:f}}function R(){var i=S(),o=i.show_header_tip,r=i.update,f=(0,c.useCallback)(function(e){r({show_header_tip:e}),localStorage.setItem("hidden_header_tip",e?"":"1")},[r]);return{show_header_tip:o,setShowHeaderTip:f}}},74167:function($,N,n){n.d(N,{n:function(){return U}});var y=n(84875),x=n.n(y),L=n(1629),p=n(11527);function U(O){var k=O.qrText,j=O.className,D=O.qrcodeDisable;return(0,p.jsx)("div",{className:x()("",j),children:(0,p.jsx)("div",{className:"p-1 border-[4px] border-green-2 rounded-[2.25rem]",children:(0,p.jsxs)("div",{className:x()("py-2 px-6 rounded-[1.90rem] border-[1.75px] border-green-2 flex justify-center items-center mo:px-3"),children:[(0,p.jsxs)("div",{className:"border-r-[3px] border-green-4 pr-5 mr-5 flex flex-col justify-between h-full",children:[(0,p.jsx)(L.y,{className:"mb-2"}),(0,p.jsx)("img",{className:"w-[6.875rem]",src:"/earth_1.png",alt:""})]}),(0,p.jsxs)("div",{className:"w-[7.125rem] flex flex-col items-center",children:[(0,p.jsx)("p",{className:"text-[0.6875rem] text-center mb-2 leading-[0.945rem] font-semibold mo:leading-[0.865rem]",children:k||"Product Carbon Footprint Certified by AIAG"}),D?(0,p.jsx)(L.E3,{className:"w-[5.75rem]"}):(0,p.jsx)(L.GE,{className:"w-[5.75rem]"})]})]})})})}},51500:function($,N,n){n.d(N,{i:function(){return t}});var y=n(24047),x=n.n(y),L=n(90967),p=n.n(L),U=n(86378),O=n.n(U),k=n(30577),j=n.n(k),D=n(9107),c=n(49372),z=n(84875),H=n.n(z),A=n(50959),J=n(21262),S=n(57681),Y=n(77588),_=n(11527),t=function(E){var V=E.columns,Q=E.data,Z=E.className,T=E.headerClassName,M=E.size,R=M===void 0?"":M,i=E.maxHeight,o=E.loading,r=o===void 0?!1:o,f=E.hiddenHeader,e=f===void 0?!1:f,a=E.mouseHoverKey,l=a===void 0?"":a,u=E.columnsHeight,h=u===void 0?"":u,B=E.isSetBorder,W=B===void 0?!1:B,g=E.tableId,d=g===void 0?void 0:g,w=E.columnsClassName,b=E.onChangeColumn,I=b===void 0?function(s){return s}:b,G=(0,A.useState)(Q||[]),X=j()(G,2),v=X[0],q=X[1],te=(0,A.useState)({}),re=j()(te,2),C=re[0],ne=re[1],se=(0,A.useState)({}),ae=j()(se,2),ie=ae[0],ue=ae[1],oe=(0,A.useRef)(null);(0,Y.Z)(oe,function(){for(var s in C)C[s]&&(C[s].isFilterOpen=!1,ne(O()({},C)))}),(0,A.useEffect)(function(){q(Q)},[Q]),(0,A.useEffect)(function(){V.forEach(function(s){if(s.filterOptions){var m;C[s.dataIndex]={isFilterOpen:!1,filterValueIndex:((m=C[s.dataIndex])===null||m===void 0?void 0:m.filterValueIndex)>-1?C[s.dataIndex].filterValueIndex:-1}}}),ne(C)},[V]);var ce=function(m){if(v[m].level===void 0&&(v[m].level=0),v[m].children.forEach(function(F){F.level=v[m].level+1}),v[m].open=!v[m].open,v[m].open)q(v.slice(0,m+1).concat(v[m].children).concat(v.slice(m+1)));else{var P=v[m].children.length;v[m].children.forEach(function(F){F.open&&(F.open=!1,P+=F.children.length)}),v.splice(m+1,P),q(p()(v))}},le=function(m,P){Object.assign(C,x()({},m.dataIndex,{filterValueIndex:P,isFilterOpen:!1})),m.onFilterChange&&m.onFilterChange(P>-1?m.filterOptions[P]:null),ne(C)},_e=function(m){C[m.dataIndex].isFilterOpen=!C[m.dataIndex].isFilterOpen,ne(O()({},C))};return(0,_.jsxs)("div",{className:H()("w-full",Z,R==="small"&&"text-xs",R==="big"&&"text-lg mo:text-[.9375rem] "),children:[(0,_.jsxs)("table",{border:1,cellSpacing:0,className:"w-full text-left ",id:d,children:[!e&&(0,_.jsx)("thead",{className:H()("bg-gray-14 ",{"border bg-[#E5E5E5]":W},Z,R==="small"&&"text-sm"),style:T,children:(0,_.jsx)("tr",{className:"px-3",children:V&&V.map(function(s,m){var P;return(0,_.jsxs)("th",{style:{width:s.width?s.width:"auto"},className:H()("px-3 relative break-keep",m===0&&" ".concat(!W&&"rounded-l"||""," overflow-hidden"),m===V.length-1&&"".concat(!W&&"rounded-r"||""," overflow-hidden"),c.NO[R]||"py-2"),children:[!!s.tip&&(0,_.jsx)(S.gL9,{"data-tooltip-id":"tooltip","data-tooltip-content":s.tip,className:"inline-block text-xl mt-[-0.15rem] mr-1"}),(0,_.jsx)("span",{children:s.title}),!!C[s.dataIndex]&&(0,_.jsxs)("div",{className:"inline-block",ref:oe,children:[(0,_.jsx)(J.Ihx,{color:((P=C[s.dataIndex])===null||P===void 0?void 0:P.filterValueIndex)>-1?"#29953A":"",onClick:function(){_e(s)},className:"inline-block text-xl mt-[-0.15rem] ml-1 cursor-pointer"}),C[s.dataIndex].isFilterOpen&&(0,_.jsx)("div",{className:"absolute left-0 font-normal top-10",children:(0,_.jsxs)("ul",{className:"bg-white w-[12.375rem] max-h-[14.875rem] overflow-auto text-sm rounded-lg py-3",style:{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.15)"},children:[(0,_.jsx)("li",{className:H()("py-2.5 px-5 hover:bg-[#F3F3F3] cursor-pointer",C[s.dataIndex].filterValueIndex===-1&&"text-green-2"),onClick:function(){le(s,-1)},children:"All"}),s.filterOptions.map(function(F,ee){return(0,_.jsx)("li",{onClick:function(){le(s,ee)},className:H()("py-1.5 hover:bg-[#F3F3F3] px-5 break-all cursor-pointer",C[s.dataIndex].filterValueIndex===ee?"text-green-2":""),children:F.text},"productList".concat(ee))})]})})]})]},"columns".concat(m))})})}),!r&&(0,_.jsx)("tbody",{style:{maxHeight:i},className:"w-full overflow-y-auto ",children:v.map(function(s,m){return(0,_.jsx)("tr",{className:" column-level-".concat(s.level?s.level:0," ").concat(h," "),children:V.map(function(P,F){return(0,_.jsx)("td",{className:H()(w,"px-3  ",{"bg-[#F3F3F3]":ie[l]===s[l]&&l,border:W},c.NO[R]||"py-2",!!P.tip&&"pl-9"),style:{width:P.width?P.width:"auto"},children:(0,_.jsxs)("div",{onMouseOver:function(){return ue(s)},onClick:function(){return typeof I=="function"?I(s):void 0},className:"flex items-center ",style:{marginLeft:(s.level&&F===0?s.level:0)*1.25+"rem"},children:[!!(s!=null&&s.children)&&(s==null?void 0:s.children.length)>0&&F===0&&(0,_.jsx)(J.Tfp,{onClick:function(){return ce(m)},className:H()("mr-2 cursor-pointer text-gray-9",s.open&&"rotate-[90deg]")}),P.render?P.render(s[P.dataIndex],s):P.emptyText&&!s[P.dataIndex]?"-":s[P.dataIndex]]})},"data_column_".concat(F))})},"table_data_".concat(m))})})]}),r?(0,_.jsx)(D.g,{className:"pt-8"}):!(v&&v.length>0)&&(0,_.jsx)("div",{className:"flex justify-center w-full py-20",children:"\u65E0\u6570\u636E"})]})}},49372:function($,N,n){n.d(N,{ES:function(){return c},GF:function(){return D},JK:function(){return S},NO:function(){return Y},RG:function(){return O}});var y=n(83033),x=n(21262),L=n(1950),p=n(52492),U=n(1629),O=["Sourcing & Pre-treatment","Production","Distribution","Use & Disposal"];function k(){return O.map(function(_){return{name:_,processList:[],progress:0,carbon_emission:0}})}function j(){return O.map(function(_){return{name:_,processList:[]}})}function D(){return O.map(function(_){return{name:_,progress:0,carbon_emission:0,verified:!1}})}var c="/car.png",z="/org.png",H=null,A={"en-US":"English","zh-CN":"\u7B80\u4F53\u4E2D\u6587"},J=[{icon:y.nf1,txt:"User Dashboard",to:"/tools/dashboard"},{icon:L.Sx5,txt:"Product Definition",to:"/tools/product"},{icon:U.mc,txt:"Carbon Activities",to:"/tools/activities"},{icon:p.C4h,txt:"PCF Inventories",to:"/tools/pcf"}],S=[{icon:x.yG,txt:"\u5168\u90E8\u78B3\u670D\u52A1",to:"/carbon/allService"},{icon:y.nf1,txt:"\u6211\u7684\u78B3\u670D\u52A1",to:"/carbon/service"},{icon:U.mc,txt:"\u6211\u7684\u78B3\u6807\u7B7E",to:"/carbon/tag"},{icon:x.NOg,txt:"\u6211\u7684\u78B3\u6587\u6863",to:"/carbon/document"},{icon:p.C4h,txt:"\u6211\u7684\u78B3\u8D44\u4EA7",to:""},{icon:x.nbt,txt:"\u7528\u6237\u7BA1\u7406\u4E0E\u8BBE\u5B9A",to:""}],Y={small:"py-1",big:"py-3"}},75632:function($,N,n){n.d(N,{IW:function(){return p},Sg:function(){return y},eY:function(){return x}});var y={NODE_ENV:"production",PUBLIC_PATH:"/"}.API_BASE||"https://pre-api.gtech.world",x={NODE_ENV:"production",PUBLIC_PATH:"/"}.SCAN_BASE||"https://www.oklink.com/cn/polygon",L={NODE_ENV:"production",PUBLIC_PATH:"/"}.AICP_SOLUTIONS||"https://gtech.world/solutions/automotive",p={NODE_ENV:"production",PUBLIC_PATH:"/"}.LABEL_CONTRACT||"0x7BC6afe0cDc6DE9191dfC6d68A3bad45E270F695"},9441:function($,N,n){n.d(N,{N:function(){return p}});var y=n(86378),x=n.n(y),L=n(35016);function p(){var U=(0,L.useIntl)(),O=function(j,D){return U.formatMessage({id:j,defaultMessage:j},D)};return x()({t:O},U)}},89850:function($,N,n){n.d(N,{HE:function(){return J},HN:function(){return _},OA:function(){return i},Oc:function(){return Q},Qs:function(){return V},UF:function(){return S},X3:function(){return f},_v:function(){return K},az:function(){return z},dP:function(){return Z},iT:function(){return r},k3:function(){return o},lS:function(){return E},pT:function(){return t},pv:function(){return R},tV:function(){return M},vu:function(){return Y}});var y=n(30577),x=n.n(y),L=n(31077),p=n.n(L),U=n(72294),O=n.n(U),k=n(32536),j=n(32699),D=n.n(j),c=n(75632);function z(e){if(!e)return"Unkown Error";if(typeof e=="string")return e;if(e instanceof k.d7){var a,l,u,h;return((a=e.response)===null||a===void 0||(l=a.data)===null||l===void 0?void 0:l.msg)||((u=e.response)===null||u===void 0||(h=u.data)===null||h===void 0?void 0:h.message)||e.message||"Unkown Error"}return e.message||"Unkown Error"}function H(e){return new Date(e.includes("GMT")?e:"".concat(e," GMT")).toLocaleString().replaceAll("/","-")}function A(e){return Date.parse(e.includes("GMT")?e:"".concat(e," GMT"))}function J(e){return new Date(e*1e3).toLocaleString().replaceAll("/","-")}function S(e,a){return"".concat(c.eY,"/").concat(e,"/").concat(a)}function Y(e){return"".concat(c.eY,"/token/").concat(c.IW,"?a=").concat(e)}function _(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return e==="-"?e:"".concat(e).concat(a?" ":"","kg")}function t(e){if(e.includes(" ")){var a=Math.round(e.length/2),l=e.split(" "),u=Math.round(l.length/2),h=0;return l.forEach(function(b,I){var G=h;h=b.length+h+1,h>a&&(h-a<=a-G?u=I:u=I-1)}),[l.slice(0,u).join(" "),l.slice(u).join(" ")]}if(e.length<2)return[e];for(var B=0,W=0;W<e.length;W++)B+=e.charCodeAt(W)>255?2:1;for(var g=Math.round(e.length/2),d=0,w=0;w<e.length;w++)if(d+=e.charCodeAt(w)>255?2:1,d>B/2){g=w;break}return[e.slice(0,g),e.slice(g)]}function K(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return new Promise(function(a){setTimeout(function(){return a(void 0)},e)})}function E(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:6;if(!e)return"";if(e.length<=a+l)return e;var u=(e==null?void 0:e.substring(0,a))||"",h=(e==null?void 0:e.substring(e.length-l))||"";return"".concat(u,"...").concat(h)}function V(e){return e.slice(0,1).toUpperCase()+e.slice(1).toLowerCase()}function Q(e){return e.replace("Digital3","Digital<sup>3</sup>")}var Z=function(a){if(a){var l=document.getElementById(a);l&&l.scrollIntoView({behavior:"smooth"})}},T=function(a,l){var u=a;return l.split(".").forEach(function(h){u=u[h]}),u},M=function(a){var l=D().cloneDeep(a),u={},h=function g(d){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],b=d.replaceAll("[",".").replaceAll("]","").replace("$.","");if(b==="..")return w[w.length-2];if(b==="../..")return w[w.length-3];if(!b||b==="$")return l;if(u[b])return u[b];var I=D().get(l,b);if(I){if(I.$ref){var G=D().dropRight(b.split(".")),X=[l].concat(G.map(function(q,te){return D().get(l,G.slice(0,te+1).join("."))}));I=g(I.$ref,X)}return u[b]=I,I}var v=b.split(".");return v.length===1?(console.info("parseRefJSON: Error:cacheGetRef:",v[0]),{}):(I=g(v.slice(0,v.length-1).join("."),w)[v[v.length-1]],u[b]=I,u[b])},B=new Map,W=function g(d){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];B.set(d,!0);var b=O()(D().keys(d)),I;try{for(b.s();!(I=b.n()).done;){var G=I.value,X=d[G];if(p()(X)==="object"&&X.$ref&&typeof X.$ref=="string"){var v=X.$ref;d[G]=h(v,w.concat([d]))}p()(d[G])==="object"&&!B.has(d[G])&&g(d[G],w.concat([d]))}}catch(q){b.e(q)}finally{b.f()}};return W(l),l};function R(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new Date().getTime(),a=typeof e=="string"?(0,j.toInteger)(e):e;return new Date(a).toLocaleString().replaceAll("/","-")}function i(e){try{return JSON.parse(e)}catch(a){return}}var o=function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},r=function(a,l){return a.length>l?a:""},f=function(a,l){var u=Math.abs(Math.floor(l/1e3)),h=u<60*60?["minutes",Math.floor(u/60)]:u<60*60*24?["hours",Math.floor(u/60/60)]:u<60*60*24*30?["days",Math.floor(u/60/60/24)]:u<60*60*24*30*12?["months",Math.floor(u/60/60/24/30)]:["years",Math.floor(u/60/60/24/30/12)],B=x()(h,2),W=B[0],g=B[1];return a(l>0?g:-g,W)}},41453:function($,N,n){n.r(N),n.d(N,{default:function(){return Z}});var y=n(30577),x=n.n(y),L=n(33665),p=n(9107),U=n(74167),O=n(75632),k=n(81349),j=n(9441),D=n(16369),c=n(89850),z=n(84875),H=n.n(z),A=n(35016),J=n(50959),S=n(57681),Y=n(1629),_=n(51500),t=n(11527);function K(T){return(0,t.jsxs)("div",{className:H()("w-full  text-base whitespace-normal leading-[1.8rem] mo:text-[.9375rem] mo:leading-[1.6875rem] relative",{"text-green-2":T.link,"text-gray-6":!T.link},T.className),children:[!!T.tip&&(0,t.jsx)(S.gL9,{"data-tooltip-id":"tooltip","data-tooltip-content":T.tip,className:"absolute text-black left-[-1.6rem] text-xl top-[0.29rem]"}),(0,t.jsxs)("span",{className:"font-bold text-black",children:[T.label,":"]})," ",T.link?(0,t.jsx)("a",{href:T.link,target:"_blank",rel:"noreferrer",children:T.text}):T.text]})}function E(T){var M=T.data,R=(0,J.useMemo)(function(){var f,e=(f=JSON.parse(M.metadata))===null||f===void 0?void 0:f.attributes,a={};return e&&e.forEach(function(l){a[l.trait_type]=l.value}),a},[M.metadata]),i=(0,j.N)(),o=i.t,r=i.formatDate;return(0,t.jsxs)("div",{className:"break-all",children:[(0,t.jsx)(K,{label:o("SBT Token ID"),text:M.sbtTokenId,link:(0,c.vu)(M.sbtTokenId),tip:o("SBTs are non-transferable and immutable digital credentials representing the vehicle\u2019s carbon footprint label. Every SBT has a unique token ID.")}),(0,t.jsx)(K,{label:o("Label No."),text:M.labelNumber}),(0,t.jsx)(K,{label:o("Label Owner"),text:M.productName}),(0,t.jsx)(K,{className:"mo:flex mo:flex-col",label:o("Owner Address"),text:M.ownerAddress,link:(0,c.UF)("address",M.ownerAddress),tip:o("Trust Labels are minted by their owners. Owner Addresses stand for verified identity credentials for the label owners.")}),(0,t.jsx)(K,{label:o("Product Model"),text:R["Product Model"]}),(0,t.jsx)(K,{className:"mo:flex mo:flex-col",label:o("Product Unique Identifier"),text:R.VIN,link:"/car?vin=".concat(R.VIN),tip:o("The unique identifier number or code for the labelled product, typically a VIN code for the vehicle.")}),(0,t.jsx)(K,{label:o("Label Type"),text:R["Label Type"],tip:o("PCF Type stands for Product Carbon Footprint.")}),(0,t.jsx)(K,{label:o("Data Scope"),text:"Cradle-to-Grave",tip:o("The life cycle scope that the PCF data covers, typically Cradle-to-Grave (full-life-cycle) or Cradle-to-Gate.")}),(0,t.jsx)(K,{label:o("Print Timestamp"),text:r(M.labelPrintDate*1e3)})]})}function V(){var T=(0,A.useSearchParams)(),M=x()(T,1),R=M[0],i=R.get("tokenId"),o=(0,j.N)(),r=o.t,f=o.formatRelativeTime,e=(0,L.dD)(),a=(0,k.k)((0,D.Pf)(function(){return(0,D.Cd)(i)},[i]),[i]),l=a.value,u=a.loading,h=(0,J.useMemo)(function(){var g={activityList:[],metadata:"{}"};return Object.assign(g,l)},[l]),B=[{title:r("Activity Hash"),dataIndex:"txHash",tip:r("The cryptographic hash of an on-chain activity can be used to identify and verify the transaction information on the blockchain."),render:function(d){return(0,t.jsx)(A.Link,{className:"text-green-2",target:"_blank",to:(0,c.UF)("tx",d),children:(0,c.lS)(d)})}},{title:r("Action"),dataIndex:"action",tip:r("The business implication of the on-chain activity"),render:function(d){return d?r((0,c.Qs)(d)):""}},{title:r("Age"),dataIndex:"blockTimestamp",render:function(d){return(0,c.X3)(f,d*1e3-Date.now())}},{title:r("Blockchain"),dataIndex:"chain",tip:r("The name of the blockchain and the code for its network or version"),render:function(d){return(0,t.jsx)("span",{className:"whitespace-nowrap",children:d})}},{title:r("From"),dataIndex:"fromAddress",render:function(d){return(0,t.jsx)(A.Link,{className:"text-green-2",target:"_blank",to:(0,c.UF)("address",d),children:(0,c.lS)(d)})}},{title:r("To"),dataIndex:"toAddress",render:function(d){return(0,t.jsx)(A.Link,{className:"text-green-2",target:"_blank",to:(0,c.UF)("address",d),children:(0,c.lS)(d)})}}],W=r("You can also view raw data on the Polygon Blockchain via {{value}}. Notice polygonscan\u2019s service may not be accessible from certain countries or regions.").replace("{{value}}",'<a href="'.concat(O.eY,'" target="_blank" rel="noreferrer" class="text-green-2">polygonscan</a>'));return(0,t.jsxs)("div",{className:"flex flex-col flex-1 w-full text-black bg-gray-16 min-h-fit",children:[(0,t.jsxs)("header",{className:"bg-green-2 text-white flex items-center h-[4.25rem] px-[4.375rem] w-full",children:[(0,t.jsx)(Y.yc,{fill:"#29953A",className:"h-[2.25rem] mo:h-[1.75rem] fill-white ml-[3.125rem] mo:ml-4"}),(0,t.jsx)("div",{className:"w-[5.9rem] mo:w-[4.5rem] ml-4 mo:ml-3 text-base mo:text-[0.8rem] mo:leading-[1.125rem]",children:r("Trust Label NFT Viewer")})]}),u?(0,t.jsx)(p.g,{}):(0,t.jsxs)("div",{className:"w-full py-5 px-[3.125rem] max-w-[1480px] mx-auto mo:p-5",children:[(0,t.jsxs)("div",{className:"flex mo:flex-col",children:[(0,t.jsx)("div",{className:"bg-white flex justify-center px-10 items-center rounded-lg mo:h-[21rem] mo:px-0",children:(0,t.jsx)(U.n,{className:""})}),(0,t.jsxs)("div",{className:"flex flex-col flex-1 ml-5 mo:ml-0 mo:mt-5",children:[(0,t.jsxs)("div",{className:"flex mb-5",children:[(0,t.jsx)(S.KRR,{className:"text-3xl mr-2 mo:mt-[-0.45rem] mo:text-[2.8rem]"}),(0,t.jsxs)("div",{className:"flex text-lg mo:flex-col",children:[(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsxs)("span",{className:"w-full font-bold",children:[r("Automotive Carbon Footprint Trust Label"),e&&(0,t.jsx)("span",{className:"ml-3 font-medium",children:"#1940327340"})]}),!e&&(0,t.jsx)("p",{children:"#1940327340"})]}),(0,t.jsx)("span",{className:"text-sm ml-3 mo:ml-0 mt-[0.3rem] mo:mt-2 mo:text-gray-6",children:r("Certified by AIAG")})]})]}),(0,t.jsxs)("div",{className:"px-12 py-5 bg-white rounded-lg mo:pl-10 mo:pr-3",children:[(0,t.jsx)("h5",{className:"text-xl mb-3.5 font-bold mo:text-lg",children:r("Label Details")}),(0,t.jsx)(E,{data:h})]})]})]}),(0,t.jsxs)("div",{className:"px-8 py-5 mt-5 bg-white rounded-lg mo:px-4",children:[(0,t.jsx)("h3",{className:"font-bold",children:r("Item Activity on Blockchain")}),(0,t.jsx)("div",{className:"w-full overflow-hidden overflow-x-auto mo:pb-5",children:(0,t.jsx)(_.i,{className:"mt-5 mo:w-[52rem]",columns:B,data:h.activityList})})]}),(0,t.jsxs)("div",{className:"bg-white mt-5 px-8 py-5 rounded-lg leading-[1.8rem] mo:leading-[1.6875rem] mo:px-4 mo:text-[.9375rem]",children:[(0,t.jsx)(Y.yc,{fill:"#29953A",className:"w-[6.125rem] mb-5"}),(0,t.jsx)("p",{className:"font-bold",children:r("Platform powered by:")}),(0,t.jsx)("p",{className:"text-green-2",children:(0,t.jsx)(A.Link,{to:"https://aicp.gtech-cn.co/",target:"_blank",children:r("Automotive Industry Carbon Platform")})}),(0,t.jsx)("p",{children:r("AICP is the global, industry-level platform designed for long-term carbon emission performance traceability and visibility under the AIAG Carbon Initiative. AICP offers public view mode and supply chain view mode.")})]}),(0,t.jsxs)("div",{className:"bg-white mt-5 px-8 py-5 rounded-lg leading-[1.8rem] mo:leading-[1.6875rem] mo:px-4 mo:text-[.9375rem]",children:[(0,t.jsx)(Y.mg,{className:"mb-5"}),(0,t.jsx)("p",{className:"font-bold",children:r("Blockchain powered by:")}),(0,t.jsx)("p",{className:"text-green-2",children:r("Polygon Blockchain")}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:W}})]})]})]})}var Q=null,Z=V}}]);