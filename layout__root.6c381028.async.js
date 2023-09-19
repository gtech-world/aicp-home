"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[6429],{33665:function(J,g,n){n.d(g,{Fm:function(){return z},N2:function(){return U},aF:function(){return b},dD:function(){return K},g3:function(){return O},h3:function(){return P},is:function(){return S},oR:function(){return C},pm:function(){return H},xB:function(){return F}});var p=n(86378),f=n.n(p),T=n(30577),m=n.n(T),L=n(72294),D=n.n(L),E=n(9441),M=n(89850),v=n(35016),u=n(50959),a=n(11527),B={inited:!1,last_input_vin:"",isMobile:!1,show_header_tip:!1};function S(){var r=localStorage.getItem("user-data");if(r)try{return JSON.parse(r)}catch(s){return}}var I=(0,u.createContext)({});function C(){return(0,u.useContext)(I)}var N=["/dashboard","/product","/activities","/pcf","/carbon","/tools","/model"],l=function(s,i){if(!i)return!1;var c=D()(s),e;try{for(c.s();!(e=c.n()).done;){var t=e.value;if(i===t||i.startsWith(t+"/"))return!0}}catch(o){c.e(o)}finally{c.f()}return!1};function j(r){var s=(0,v.useLocation)(),i=s.pathname,c=(0,v.useNavigate)(),e=C(),t=e.userData,o=e.inited,_=(0,u.useMemo)(function(){return o&&!t&&l(N,i)},[o,t,i]);return _?(c("/login",{replace:!0}),null):(0,a.jsx)(a.Fragment,{children:r.children})}function O(r){var s=(0,u.useState)(r.init||{}),i=m()(s,2),c=i[0],e=i[1],t=(0,u.useRef)(!1);(0,u.useEffect)(function(){t.current&&e(function(d){return f()(f()({},d),r.init)}),t.current=!0},[r.init]);var o=(0,u.useCallback)(function(d){e(function(W){return f()(f()({},W),d)})},[]),_=(0,u.useMemo)(function(){return f()(f()({},c),{},{update:o})},[c]);return(0,u.useEffect)(function(){var d=function(){return o({isMobile:window.innerWidth<=900})};return window.addEventListener("resize",d),function(){window.removeEventListener("resize",d)}},[]),(0,a.jsx)(I.Provider,{value:_,children:(0,a.jsx)(j,{children:r.children})})}function U(){var r={inited:!0,isMobile:window.innerWidth<=900,last_input_vin:sessionStorage.getItem("last_input_vin")||"",show_header_tip:!localStorage.getItem("hidden_header_tip")},s=S();return s&&new Date().getTime()-s.loginTime<1e3*60*60*24&&(r.userData=s),r}function K(){var r=C(),s=r.isMobile;return s}function H(){var r=C(),s=r.toast,i=r.update,c=(0,u.useCallback)(function(e){i({toast:e})},[i]);return{current:s,toast:c}}function P(){var r=H(),s=r.toast,i=(0,E.N)(),c=i.t;return(0,u.useCallback)(function(e){s({type:"error",msg:c((0,M.az)(e))})},[c,s])}function b(){var r=C(),s=r.userData,i=r.update,c=(0,u.useCallback)(function(e,t){e&&t&&(e.loginTime=new Date().getTime()),i({userData:e}),localStorage.setItem("user-data",e?JSON.stringify(e):"")},[]);return{user:s,setUser:c}}function F(){var r=C(),s=r.last_input_vin,i=r.update,c=(0,u.useCallback)(function(e){i({last_input_vin:e}),e==="1500101202311001"&&sessionStorage.setItem("last_input_vin",e)},[i]);return{last_input_vin:s,setLastInputVin:c}}function z(){var r=C(),s=r.show_header_tip,i=r.update,c=(0,u.useCallback)(function(e){i({show_header_tip:e}),localStorage.setItem("hidden_header_tip",e?"":"1")},[i]);return{show_header_tip:s,setShowHeaderTip:c}}},92463:function(J,g,n){n.d(g,{R:function(){return M},X:function(){return v}});var p=n(30577),f=n.n(p),T=n(9441),m=n(50959),L=n(21262),D=n(33665),E=n(11527);function M(){var u=(0,D.Fm)(),a=u.show_header_tip,B=(0,D.dD)(),S=(0,m.useState)(0),I=f()(S,2),C=I[0],N=I[1];return(0,m.useEffect)(function(){var l=document.getElementById("header-tip"),j=function(){l&&N(l.getBoundingClientRect().height)},O;return!B&&a&&l&&(N(l.clientHeight),O=new ResizeObserver(j),O.observe(l),j()),function(){O&&l&&O.unobserve(l)}},[B,a]),B||!a?0:C}function v(){var u=(0,D.Fm)(),a=u.show_header_tip,B=u.setShowHeaderTip,S=(0,T.N)(),I=S.t,C=(0,D.dD)();return a?(0,E.jsxs)("div",{id:"header-tip",style:{boxShadow:C?"0px -3px 15px rgba(0, 0, 0, 0.1)":"none",top:C?"unset":"0px"},className:"w-full sticky h-[4.25rem] z-50 flex p-6 bg-white text-black mo:px-5 mo:pt-[.625rem] mo:pb-8 mo:flex mo:flex-col-reverse mo:h-auto mo:fixed mo:bottom-0",children:[(0,E.jsx)("div",{className:"flex-1"}),(0,E.jsx)("div",{className:"text-base mo:text-center mo:px-5",dangerouslySetInnerHTML:{__html:I("The AICP site is under development. This version is for demonstration purpose only and the data is not real. For more information, please contract email hi@gtech.world.").replace("hi@gtech.world",'<a class="underline" target="_blank" href="mailto:hi@gtech.world">hi@gtech.world</a>')}}),(0,E.jsx)("div",{className:"flex-1"}),(0,E.jsx)(L.q5L,{className:"text-xl cursor-pointer flex-shrink-0 mo:self-end mo:text-2xl mo:mb-[.875rem]",onClick:function(){return B(!1)}})]}):null}},72121:function(J,g,n){n.d(g,{SL:function(){return S},u_:function(){return N}});var p=n(86378),f=n.n(p),T=n(28488),m=n.n(T),L=n(1267),D=n(84875),E=n.n(D),M=n(50959),v=n(10422),u=n(21262),a=n(11527),B=["className","title","onClose","outClose","titleClassName","containerClassName","children"],S={current:null};function I(l){var j=l.title,O=l.onClose,U=l.titleClassName,K=l.containerClassName;return(0,a.jsxs)("div",{className:E()("flex items-center justify-between pb-6 mb-6 text-xl font-bold border-b mt-2.5 mx-5",K),children:[(0,a.jsx)("span",{className:E()("max-w-[70%] overflow-hidden text-ellipsis whitespace-nowrap",U),children:j}),(0,a.jsx)(u.q5L,{onClick:function(P){P.stopPropagation(),O&&O()},className:"text-2xl cursor-pointer"})]})}function C(){return _jsx("div",{})}function N(l){var j=l.className,O=l.title,U=l.onClose,K=l.outClose,H=K===void 0?!1:K,P=l.titleClassName,b=l.containerClassName,F=l.children,z=m()(l,B),r=(0,M.useRef)(null),s=(0,L.R)(function(i){i.stopPropagation();var c=r.current&&r.current!==i.target&&r.current.contains(i.target);!c&&H&&U&&U()});return S.current?(0,v.createPortal)((0,a.jsx)("div",f()(f()({},z),{},{ref:r,className:E()("fixed left-0  top-0 w-full h-full overflow-auto z-50 bg-black/25 flex justify-center items-center",j),onClick:s,children:(0,a.jsxs)("div",{id:"mo",ref:r,className:E()("bg-white rounded p-5 min-w-[20rem] min-h-[150] "),children:[(0,a.jsx)(I,{title:O,containerClassName:b,titleClassName:P,onClose:U}),F]})})),S.current):null}},3453:function(J,g,n){n.r(g),n.d(g,{default:function(){return H}});var p=n(35016),f=n(30577),T=n.n(f),m=n(33665),L=n(92463),D=n(72121),E=n(84875),M=n.n(E),v=n(50959),u=n(83033),a=n(11527);function B(){var P=(0,m.pm)(),b=P.current,F=P.toast;if((0,v.useEffect)(function(){if(!b)return function(){};var r=setTimeout(function(){F()},5e3);return function(){clearTimeout(r)}},[b]),!b)return null;var z=b.type==="info"?u.mny:u.LHV;return(0,a.jsx)("div",{className:M()("fixed right-5 top-20 z-[60] "),children:(0,a.jsxs)("div",{className:M()("flex items-center text-sm text-black rounded-lg border-1 py-4 w-full px-5 mo:mx-auto",b.type==="info"?"border-[#32CB9D] bg-green-50":"border-[#EF4C56] bg-rose-50"),children:[(0,a.jsx)(z,{className:M()("text-xl mr-3",b.type==="info"?"text-[#32CB9D]":"text-[#EF4C56]")}),(0,a.jsx)("span",{children:b.msg})]})})}var S=n(75632),I=n(97707),C=n(87595),N=n(6480),l=n(21931),j=n(6610);function O(P){var b=(0,v.useState)((0,m.N2)()),F=T()(b,1),z=F[0];return(0,v.useEffect)(function(){D.SL.current=document.body},[]),(0,a.jsx)(j.J$,{value:{revalidateOnFocus:!1,errorRetryCount:3,fetcher:I.k8},children:(0,a.jsx)(m.g3,{init:z,children:P.children})})}function U(){return(0,a.jsx)(N.u,{className:"z-[999999]  break-all shadow-[0_10px_10px_0_rgba(0,0,0,0.3)] border border-[#eee] max-w-[22.5rem]",style:{backgroundColor:"rgb(255, 255, 255,1)",color:"#222"},id:"tooltip",opacity:1,closeOnScroll:!0,closeOnResize:!0,delayHide:100})}function K(P){return(0,a.jsxs)("div",{suppressHydrationWarning:!0,id:"__app",className:M()("App font-OpenSans relative"),children:[(0,a.jsxs)(O,{children:[(0,a.jsx)(L.X,{}),P.children,(0,a.jsx)(B,{})]}),(0,a.jsx)(U,{})]})}var H=function(){return(0,a.jsx)(K,{children:(0,a.jsx)(p.Outlet,{})})}},75632:function(J,g,n){n.d(g,{IW:function(){return m},Sg:function(){return p},eY:function(){return f}});var p={NODE_ENV:"production",PUBLIC_PATH:"/"}.API_BASE||"https://pre-api.gtech.world",f={NODE_ENV:"production",PUBLIC_PATH:"/"}.SCAN_BASE||"https://www.oklink.com/cn/polygon",T={NODE_ENV:"production",PUBLIC_PATH:"/"}.AICP_SOLUTIONS||"https://gtech.world/solutions/automotive",m={NODE_ENV:"production",PUBLIC_PATH:"/"}.LABEL_CONTRACT||"0x7BC6afe0cDc6DE9191dfC6d68A3bad45E270F695"},1267:function(J,g,n){n.d(g,{R:function(){return f}});var p=n(50959);function f(T){var m=(0,p.useRef)(T);return(0,p.useLayoutEffect)(function(){m.current=T}),(0,p.useCallback)(function(){return m.current&&m.current.apply(m,arguments)},[])}},9441:function(J,g,n){n.d(g,{N:function(){return m}});var p=n(86378),f=n.n(p),T=n(35016);function m(){var L=(0,T.useIntl)(),D=function(M,v){return L.formatMessage({id:M,defaultMessage:M},v)};return f()({t:D},L)}},89850:function(J,g,n){n.d(g,{HE:function(){return I},HN:function(){return l},OA:function(){return r},Oc:function(){return H},Qs:function(){return K},UF:function(){return C},X3:function(){return c},_v:function(){return O},az:function(){return a},dP:function(){return P},iT:function(){return i},k3:function(){return s},lS:function(){return U},pT:function(){return j},pv:function(){return z},tV:function(){return F},vu:function(){return N}});var p=n(30577),f=n.n(p),T=n(31077),m=n.n(T),L=n(72294),D=n.n(L),E=n(32536),M=n(32699),v=n.n(M),u=n(75632);function a(e){if(!e)return"Unkown Error";if(typeof e=="string")return e;if(e instanceof E.d7){var t,o,_,d;return((t=e.response)===null||t===void 0||(o=t.data)===null||o===void 0?void 0:o.msg)||((_=e.response)===null||_===void 0||(d=_.data)===null||d===void 0?void 0:d.message)||e.message||"Unkown Error"}return e.message||"Unkown Error"}function B(e){return new Date(e.includes("GMT")?e:"".concat(e," GMT")).toLocaleString().replaceAll("/","-")}function S(e){return Date.parse(e.includes("GMT")?e:"".concat(e," GMT"))}function I(e){return new Date(e*1e3).toLocaleString().replaceAll("/","-")}function C(e,t){return"".concat(u.eY,"/").concat(e,"/").concat(t)}function N(e){return"".concat(u.eY,"/token/").concat(u.IW,"?a=").concat(e)}function l(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return e==="-"?e:"".concat(e).concat(t?" ":"","kg")}function j(e){if(e.includes(" ")){var t=Math.round(e.length/2),o=e.split(" "),_=Math.round(o.length/2),d=0;return o.forEach(function(h,A){var w=d;d=h.length+d+1,d>t&&(d-t<=t-w?_=A:_=A-1)}),[o.slice(0,_).join(" "),o.slice(_).join(" ")]}if(e.length<2)return[e];for(var W=0,G=0;G<e.length;G++)W+=e.charCodeAt(G)>255?2:1;for(var y=Math.round(e.length/2),x=0,R=0;R<e.length;R++)if(x+=e.charCodeAt(R)>255?2:1,x>W/2){y=R;break}return[e.slice(0,y),e.slice(y)]}function O(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return new Promise(function(t){setTimeout(function(){return t(void 0)},e)})}function U(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:6;if(!e)return"";if(e.length<=t+o)return e;var _=(e==null?void 0:e.substring(0,t))||"",d=(e==null?void 0:e.substring(e.length-o))||"";return"".concat(_,"...").concat(d)}function K(e){return e.slice(0,1).toUpperCase()+e.slice(1).toLowerCase()}function H(e){return e.replace("Digital3","Digital<sup>3</sup>")}var P=function(t){if(t){var o=document.getElementById(t);o&&o.scrollIntoView({behavior:"smooth"})}},b=function(t,o){var _=t;return o.split(".").forEach(function(d){_=_[d]}),_},F=function(t){var o=v().cloneDeep(t),_={},d=function y(x){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],h=x.replaceAll("[",".").replaceAll("]","").replace("$.","");if(h==="..")return R[R.length-2];if(h==="../..")return R[R.length-3];if(!h||h==="$")return o;if(_[h])return _[h];var A=v().get(o,h);if(A){if(A.$ref){var w=v().dropRight(h.split(".")),k=[o].concat(w.map(function(X,Y){return v().get(o,w.slice(0,Y+1).join("."))}));A=y(A.$ref,k)}return _[h]=A,A}var V=h.split(".");return V.length===1?(console.info("parseRefJSON: Error:cacheGetRef:",V[0]),{}):(A=y(V.slice(0,V.length-1).join("."),R)[V[V.length-1]],_[h]=A,_[h])},W=new Map,G=function y(x){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];W.set(x,!0);var h=D()(v().keys(x)),A;try{for(h.s();!(A=h.n()).done;){var w=A.value,k=x[w];if(m()(k)==="object"&&k.$ref&&typeof k.$ref=="string"){var V=k.$ref;x[w]=d(V,R.concat([x]))}m()(x[w])==="object"&&!W.has(x[w])&&y(x[w],R.concat([x]))}}catch(X){h.e(X)}finally{h.f()}};return G(o),o};function z(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new Date().getTime(),t=typeof e=="string"?(0,M.toInteger)(e):e;return new Date(t).toLocaleString().replaceAll("/","-")}function r(e){try{return JSON.parse(e)}catch(t){return}}var s=function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},i=function(t,o){return t.length>o?t:""},c=function(t,o){var _=Math.abs(Math.floor(o/1e3)),d=_<60*60?["minutes",Math.floor(_/60)]:_<60*60*24?["hours",Math.floor(_/60/60)]:_<60*60*24*30?["days",Math.floor(_/60/60/24)]:_<60*60*24*30*12?["months",Math.floor(_/60/60/24/30)]:["years",Math.floor(_/60/60/24/30/12)],W=f()(d,2),G=W[0],y=W[1];return t(o>0?y:-y,G)}}}]);
