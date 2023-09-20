"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[7291],{67454:function(Z,T,e){e.d(T,{u:function(){return W},z:function(){return u}});var b=e(24047),f=e.n(b),L=e(86378),d=e.n(L),h=e(28488),E=e.n(h),I=e(84875),x=e.n(I),U=e(9751),P=e(11527),v=["children","className"],n=["busy","disabled","className","defStyle","children"];function u(a){var C=a.children,s=a.className,D=E()(a,v);return(0,P.jsx)("button",d()(d()({},D),{},{className:x()(s),children:a.children}))}function W(a){var C,s=a.busy,D=a.disabled,c=a.className,m=a.defStyle,o=m===void 0?"btn-primary":m,M=a.children,i=E()(a,n);return(0,P.jsx)("button",d()(d()({className:x()(c,(C={},f()(C,o,!D),f()(C,"btn-disable",D),C))},i),{},{children:s?(0,P.jsx)(U.fCD,{className:"animate-spin"}):M}))}},53765:function(Z,T,e){e.d(T,{DJ:function(){return _e},fo:function(){return k},h4:function(){return ie},to:function(){return X}});var b=e(86378),f=e.n(b),L=e(28488),d=e.n(L),h=e(58357),E=e.n(h),I=e(71977),x=e.n(I),U=e(30577),P=e.n(U),v=e(1629),n=e(6429),u=e(84875),W=e.n(u),a=e(50959),C=e(9596),s=e(15732),D=e(33665),c=e(1487),m=e(49372),o=e(9441),M=e(89850),i=e(35016),A=e(21262),S=e(57681),_=e(11527),w=["children","className","tits","showQuery","isManager","nopx","menus"],J=["children","className","tits"];function k(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],$=(0,D.dD)(),Q=(0,D.aF)(),R=Q.user,V=Q.setUser,F=(0,i.useLocation)(),H=F.pathname,N=(0,i.useNavigate)(),z=(0,o.N)(),B=z.t,G=z.locale,Y=G;return(0,a.useMemo)(function(){var r=[];return r.push({icon:(0,_.jsx)(A.m6D,{}),text:B("AICP Home"),to:"/"}),R&&!O.find(function(y){return y.to===H})&&r.push({icon:(0,_.jsx)(S.Nhi,{}),text:(0,M.Oc)(B("AICP Digital3 Carbon System")),to:m.JK[0].to}),$&&R&&O.map(function(y){return{icon:(0,_.jsx)(y.icon,{}),text:B(y.txt),to:y.to,selected:H===y.to}}).forEach(function(y){return r.push(y)}),r.push({icon:(0,_.jsx)(v.BB,{}),text:B("Document"),to:"https://docs.gtech.world/",onClick:function(){N("https://docs.gtech.world/")}}),r.push({icon:R?(0,_.jsx)(A.xqh,{}):(0,_.jsx)(A._fJ,{}),text:B(R?"Log Out":"Log In"),to:R?void 0:"/login",onClick:function(){N("/"),V(void 0)}}),r},[R,$,H,B,Y])}function X(){var O=(0,a.useState)(0),$=P()(O,2),Q=$[0],R=$[1];return(0,a.useEffect)(function(){var V=function(){var N=x()(E()().mark(function z(){var B,G;return E()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:B=2e3;case 1:return r.next=4,(0,M._v)(100);case 4:if(B-=100,G=document.getElementById("app_header"),!G){r.next=8;break}return r.abrupt("return",G);case 8:if(!(B<=0)){r.next=10;break}return r.abrupt("return",void 0);case 10:r.next=1;break;case 12:case"end":return r.stop()}},z)}));return function(){return N.apply(this,arguments)}}(),F,H;return V().then(function(N){if(N){var z=function(){N&&R(N.getBoundingClientRect().height)};N&&R(N.clientHeight),N&&(F=new ResizeObserver(z),F.observe(N),z())}}),function(){F&&H&&F.unobserve(H)}},[]),Q}function ie(O){var $=O.children,Q=O.className,R=O.tits,V=O.showQuery,F=O.isManager,H=O.nopx,N=H===void 0?!1:H,z=O.menus,B=d()(O,w),G=(0,o.N)(),Y=G.t,r=R||Y("Automotive Industry Carbon Platform")||"",y=(0,a.useMemo)(function(){return(0,M.pT)(r)},[r]),ee=(0,i.useNavigate)(),ae=k(z),j=(0,D.xB)(),q=j.last_input_vin,me=j.setLastInputVin,se=(0,a.useState)(q),oe=P()(se,2),ne=oe[0],re=oe[1],ue=(0,a.useCallback)(function(g){re(g.target.value||""),me(g.target.value)},[]),le=(0,D.h3)(),ce=(0,a.useState)(0),t=P()(ce,2),l=t[0],p=t[1];(0,a.useEffect)(function(){var g=function(){p(window.innerWidth)};return p(window.innerWidth),window.addEventListener("resize",g),function(){window.removeEventListener("resize",g)}},[]);var K=function(){if(!ne)return le("Please input VIN Code");ee("pcf?vin=".concat(ne))};return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",f()(f()({id:"app_header",className:W()(`w-full relative z-[3] max-w-[90rem] mx-auto  text-white  flex items-center top-0  h-[4.25rem]
          `.concat(!N&&(l>1200&&l<=1280?"px-[3%]":"px-[7.5rem]"),`
          `),Q)},B),{},{children:[F?(0,_.jsxs)("div",{className:"flex items-center cursor-pointer ml-[-1rem] mo:ml-0",onClick:function(){return ee("/")},children:[(0,_.jsx)(v.yc,{className:"h-[2.275rem] mo:h-[2rem]"}),(0,_.jsx)(v.lF,{className:"h-[1.5rem] mt-2.5 ml-3 mo:h-[1.1rem] mo:mt-3"})]}):(0,_.jsxs)("div",{onClick:function(){return ee("/")},className:"flex items-center cursor-pointer",children:[(0,_.jsx)(v.yc,{className:"h-9 mo:h-[1.75rem]"}),(0,_.jsx)("div",{className:W()("flex flex-col ml-4 text-base leading-snug mo:text-[.8rem] mo:ml-[.8rem]",{}),children:y.map(function(g,te){return(0,_.jsx)("span",{className:"whitespace-nowrap",dangerouslySetInnerHTML:{__html:(0,M.Oc)(g)}},"tit_".concat(te))})})]}),(0,_.jsx)("div",{className:"flex-1"}),V&&(0,_.jsxs)("div",{className:"relative mr-4 text-lg text-white mo:hidden",children:[(0,_.jsx)("input",{style:{border:"2px solid #fff"},className:"w-[17.5rem] h-[2.25rem] rounded-sm outline-none bg-transparent pl-10 pr-4",value:ne,maxLength:24,onChange:ue,onKeyDown:function(te){return te.code==="Enter"&&K()}}),(0,_.jsx)(A.jRj,{className:"text-[1.75rem] top-1 left-2 absolute cursor-pointer",onClick:K})]}),(0,_.jsx)(c.R,{menus:ae,children:(0,_.jsx)("button",{className:"text-[2rem] mo:text-2xl",children:(0,_.jsx)(C.otZ,{})})})]}))})}function _e(O){var $=O.children,Q=O.className,R=O.tits,V=R===void 0?["Automotive Industry","Carbon Platform"]:R,F=d()(O,J),H=(0,n.U)(),N=k();return(0,_.jsxs)("div",f()(f()({id:"app_header",className:W()("sticky top-0 z-[3] w-full text-white flex items-center p-4 bg-green-2",Q)},F),{},{children:[(0,_.jsx)("button",{className:"text-[2rem]",onClick:H,children:(0,_.jsx)(s.u1R,{})}),(0,_.jsx)("div",{className:"flex-1"}),(0,_.jsx)(v.yc,{className:"h-[1.75rem]"}),(0,_.jsx)("div",{className:"flex-1"}),(0,_.jsx)(c.R,{menus:N,children:(0,_.jsx)("button",{className:"text-2xl",children:(0,_.jsx)(C.otZ,{})})})]}))}},9107:function(Z,T,e){e.d(T,{I:function(){return v},g:function(){return P}});var b=e(86378),f=e.n(b),L=e(28488),d=e.n(L),h=e(84875),E=e.n(h),I=e(52492),x=e(11527),U=["className","color","size"];function P(n){var u=n.className,W=n.color,a=n.size,C=a===void 0?"":a,s=d()(n,U);return(0,x.jsx)("div",f()(f()({},s),{},{className:E()("text-black w-full h-full flex items-center justify-center",u),children:(0,x.jsx)(I.uur,{color:W,style:C?{fontSize:C}:{},className:"text-[3.125rem] animate-spin"})}))}function v(){return(0,x.jsx)(P,{className:"fixed z-50 left-0 top-0 w-full !h-full bg-black/25"})}},72121:function(Z,T,e){e.d(T,{SL:function(){return u},u_:function(){return C}});var b=e(86378),f=e.n(b),L=e(28488),d=e.n(L),h=e(1267),E=e(84875),I=e.n(E),x=e(50959),U=e(10422),P=e(21262),v=e(11527),n=["className","title","onClose","outClose","titleClassName","containerClassName","children"],u={current:null};function W(s){var D=s.title,c=s.onClose,m=s.titleClassName,o=s.containerClassName;return(0,v.jsxs)("div",{className:I()("flex items-center justify-between pb-6 mb-6 text-xl font-bold border-b mt-2.5 mx-5",o),children:[(0,v.jsx)("span",{className:I()("max-w-[70%] overflow-hidden text-ellipsis whitespace-nowrap",m),children:D}),(0,v.jsx)(P.q5L,{onClick:function(i){i.stopPropagation(),c&&c()},className:"text-2xl cursor-pointer"})]})}function a(){return _jsx("div",{})}function C(s){var D=s.className,c=s.title,m=s.onClose,o=s.outClose,M=o===void 0?!1:o,i=s.titleClassName,A=s.containerClassName,S=s.children,_=d()(s,n),w=(0,x.useRef)(null),J=(0,h.R)(function(k){k.stopPropagation();var X=w.current&&w.current!==k.target&&w.current.contains(k.target);!X&&M&&m&&m()});return u.current?(0,U.createPortal)((0,v.jsx)("div",f()(f()({},_),{},{ref:w,className:I()("fixed left-0  top-0 w-full h-full overflow-auto z-50 bg-black/25 flex justify-center items-center",D),onClick:J,children:(0,v.jsxs)("div",{id:"mo",ref:w,className:I()("bg-white rounded p-5 min-w-[20rem] min-h-[150] "),children:[(0,v.jsx)(W,{title:c,containerClassName:A,titleClassName:i,onClose:m}),S]})})),u.current):null}},67747:function(Z,T,e){e.d(T,{t:function(){return I}});var b=e(50959),f=e(84875),L=e.n(f),d=e(21262),h=e(11527),E="...";function I(x){var U=function(M,i){var A=[];if(i){for(var S=M;S<i;S++)A.push(S);return A}for(var _=0;_<M;_++)A.push(_);return A},P=x.total,v=x.pgSize,n=x.pgNum,u=x.onChange,W=x.className,a=Math.ceil(P/v),C=(0,b.useMemo)(function(){return a<=1?[]:a<=6?U(a).map(function(o){return{name:"".concat(o+1)}}):n<=3?U(n+1).map(function(o){return{name:"".concat(o+1)}}).concat([{name:E},{name:""+a}]):n>=a-2?[{name:"1"},{name:E}].concat(U(n-2,a).map(function(o){return{name:"".concat(o+1)}})):[{name:"1"},{name:E},{name:n-1+""},{name:n+""},{name:n+1+""},{name:E},{name:a+""}]},[a,n]),s=function(){u&&n<a&&u(n+1,a)},D=function(){n!==1&&u&&u(1,a)},c=function(){u&&n>1&&u(n-1,a)},m=function(){a!==n&&u&&u(a)};return P<=v?null:(0,h.jsx)("div",{className:L()("flex justify-center text-[0.8125rem] text-center leading-8 font-semibold",W),children:(0,h.jsxs)("div",{className:"flex",children:[a>1&&(0,h.jsxs)("div",{className:"flex",children:[(0,h.jsx)("span",{onClick:D,className:"mx-[0.185rem] bg-white flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg",children:(0,h.jsx)(d.JHF,{})}),(0,h.jsx)("span",{onClick:c,className:"mx-[0.185rem] bg-white flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg",children:(0,h.jsx)(d.YFh,{})})]}),C.map(function(o,M){return(0,h.jsx)("div",{className:L()(o.name===""+n?"text-white bg-green-2":"bg-white",{omit:o.name===E},"mx-[0.185rem] flex items-center justify-center min-w-[32px] h-[32px] px-1.5 rounded-lg",o.name!==E&&"border cursor-pointer"),onClick:function(){u&&o.name!==E&&u(+o.name,a)},children:o.name},"key_page_".concat(M))}),a>1&&(0,h.jsxs)("div",{className:"flex",children:[(0,h.jsx)("span",{onClick:s,className:"mx-[0.185rem] bg-white flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg",children:(0,h.jsx)(d.Tfp,{})}),(0,h.jsx)("span",{onClick:m,className:" mx-[0.185rem] bg-white flex justify-center items-center cursor-pointer border min-w-[32px] h-[32px] rounded-lg",children:(0,h.jsx)(d.qhs,{})})]})]})})}},51500:function(Z,T,e){e.d(T,{i:function(){return D}});var b=e(24047),f=e.n(b),L=e(90967),d=e.n(L),h=e(86378),E=e.n(h),I=e(30577),x=e.n(I),U=e(9107),P=e(49372),v=e(84875),n=e.n(v),u=e(50959),W=e(21262),a=e(57681),C=e(77588),s=e(11527),D=function(m){var o=m.columns,M=m.data,i=m.className,A=m.headerClassName,S=m.size,_=S===void 0?"":S,w=m.maxHeight,J=m.loading,k=J===void 0?!1:J,X=m.hiddenHeader,ie=X===void 0?!1:X,_e=m.mouseHoverKey,O=_e===void 0?"":_e,$=m.columnsHeight,Q=$===void 0?"":$,R=m.isSetBorder,V=R===void 0?!1:R,F=m.tableId,H=F===void 0?void 0:F,N=m.columnsClassName,z=m.onChangeColumn,B=z===void 0?function(t){return t}:z,G=(0,u.useState)(M||[]),Y=x()(G,2),r=Y[0],y=Y[1],ee=(0,u.useState)({}),ae=x()(ee,2),j=ae[0],q=ae[1],me=(0,u.useState)({}),se=x()(me,2),oe=se[0],ne=se[1],re=(0,u.useRef)(null);(0,C.Z)(re,function(){for(var t in j)j[t]&&(j[t].isFilterOpen=!1,q(E()({},j)))}),(0,u.useEffect)(function(){y(M)},[M]),(0,u.useEffect)(function(){o.forEach(function(t){if(t.filterOptions){var l;j[t.dataIndex]={isFilterOpen:!1,filterValueIndex:((l=j[t.dataIndex])===null||l===void 0?void 0:l.filterValueIndex)>-1?j[t.dataIndex].filterValueIndex:-1}}}),q(j)},[o]);var ue=function(l){if(r[l].level===void 0&&(r[l].level=0),r[l].children.forEach(function(K){K.level=r[l].level+1}),r[l].open=!r[l].open,r[l].open)y(r.slice(0,l+1).concat(r[l].children).concat(r.slice(l+1)));else{var p=r[l].children.length;r[l].children.forEach(function(K){K.open&&(K.open=!1,p+=K.children.length)}),r.splice(l+1,p),y(d()(r))}},le=function(l,p){Object.assign(j,f()({},l.dataIndex,{filterValueIndex:p,isFilterOpen:!1})),l.onFilterChange&&l.onFilterChange(p>-1?l.filterOptions[p]:null),q(j)},ce=function(l){j[l.dataIndex].isFilterOpen=!j[l.dataIndex].isFilterOpen,q(E()({},j))};return(0,s.jsxs)("div",{className:n()("w-full",i,_==="small"&&"text-xs",_==="big"&&"text-lg mo:text-[.9375rem] "),children:[(0,s.jsxs)("table",{border:1,cellSpacing:0,className:"w-full text-left ",id:H,children:[!ie&&(0,s.jsx)("thead",{className:n()("bg-gray-14 ",{"border bg-[#E5E5E5]":V},i,_==="small"&&"text-sm"),style:A,children:(0,s.jsx)("tr",{className:"px-3",children:o&&o.map(function(t,l){var p;return(0,s.jsxs)("th",{style:{width:t.width?t.width:"auto"},className:n()("px-3 relative break-keep",l===0&&" ".concat(!V&&"rounded-l"||""," overflow-hidden"),l===o.length-1&&"".concat(!V&&"rounded-r"||""," overflow-hidden"),P.NO[_]||"py-2"),children:[!!t.tip&&(0,s.jsx)(a.gL9,{"data-tooltip-id":"tooltip","data-tooltip-content":t.tip,className:"inline-block text-xl mt-[-0.15rem] mr-1"}),(0,s.jsx)("span",{children:t.title}),!!j[t.dataIndex]&&(0,s.jsxs)("div",{className:"inline-block",ref:re,children:[(0,s.jsx)(W.Ihx,{color:((p=j[t.dataIndex])===null||p===void 0?void 0:p.filterValueIndex)>-1?"#29953A":"",onClick:function(){ce(t)},className:"inline-block text-xl mt-[-0.15rem] ml-1 cursor-pointer"}),j[t.dataIndex].isFilterOpen&&(0,s.jsx)("div",{className:"absolute left-0 font-normal top-10",children:(0,s.jsxs)("ul",{className:"bg-white w-[12.375rem] max-h-[14.875rem] overflow-auto text-sm rounded-lg py-3",style:{boxShadow:"0px 5px 15px rgba(0, 0, 0, 0.15)"},children:[(0,s.jsx)("li",{className:n()("py-2.5 px-5 hover:bg-[#F3F3F3] cursor-pointer",j[t.dataIndex].filterValueIndex===-1&&"text-green-2"),onClick:function(){le(t,-1)},children:"All"}),t.filterOptions.map(function(K,g){return(0,s.jsx)("li",{onClick:function(){le(t,g)},className:n()("py-1.5 hover:bg-[#F3F3F3] px-5 break-all cursor-pointer",j[t.dataIndex].filterValueIndex===g?"text-green-2":""),children:K.text},"productList".concat(g))})]})})]})]},"columns".concat(l))})})}),!k&&(0,s.jsx)("tbody",{style:{maxHeight:w},className:"w-full overflow-y-auto ",children:r.map(function(t,l){return(0,s.jsx)("tr",{className:" column-level-".concat(t.level?t.level:0," ").concat(Q," "),children:o.map(function(p,K){return(0,s.jsx)("td",{className:n()(N,"px-3  ",{"bg-[#F3F3F3]":oe[O]===t[O]&&O,border:V},P.NO[_]||"py-2",!!p.tip&&"pl-9"),style:{width:p.width?p.width:"auto"},children:(0,s.jsxs)("div",{onMouseOver:function(){return ne(t)},onClick:function(){return typeof B=="function"?B(t):void 0},className:"flex items-center ",style:{marginLeft:(t.level&&K===0?t.level:0)*1.25+"rem"},children:[!!(t!=null&&t.children)&&(t==null?void 0:t.children.length)>0&&K===0&&(0,s.jsx)(W.Tfp,{onClick:function(){return ue(l)},className:n()("mr-2 cursor-pointer text-gray-9",t.open&&"rotate-[90deg]")}),p.render?p.render(t[p.dataIndex],t):p.emptyText&&!t[p.dataIndex]?"-":t[p.dataIndex]]})},"data_column_".concat(K))})},"table_data_".concat(l))})})]}),k?(0,s.jsx)(U.g,{className:"pt-8"}):!(r&&r.length>0)&&(0,s.jsx)("div",{className:"flex justify-center w-full py-20",children:"\u65E0\u6570\u636E"})]})}},98286:function(Z,T,e){e.d(T,{m:function(){return D}});var b=e(28488),f=e.n(b),L=e(86378),d=e.n(L),h=e(53765),E=e(1487),I=e(1629),x=e(35016),U=e(84875),P=e.n(U),v=e(9596),n=e(11527),u=["children","className","tits","showQuery","isManager"];function W(c){var m=c.children,o=c.className,M=c.tits,i=c.showQuery,A=c.isManager,S=f()(c,u),_=(0,x.useNavigate)(),w=(0,h.fo)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",d()(d()({className:P()("w-full relative z-[3] max-w-[90rem] mx-auto text-white flex items-center top-0  h-[4.25rem] justify-between",o)},S),{},{children:[(0,n.jsxs)("div",{className:"flex items-center cursor-pointer ml-[-1rem] mo:ml-0",onClick:function(){return _("/")},children:[(0,n.jsx)(I.yc,{className:"h-[2.275rem] mo:h-[2rem]"}),(0,n.jsx)(I.lF,{className:"h-[1.5rem] mt-2.5 ml-3 mo:h-[1.1rem] mo:mt-3"})]}),(0,n.jsx)(E.R,{menus:w,children:(0,n.jsx)("button",{className:"text-[2rem] mo:text-2xl",children:(0,n.jsx)(v.otZ,{})})})]}))})}var a=e(21262),C=e(92463),s=["className","canBack","children","link","isNew","containerClassName"];function D(c){var m=c.className,o=c.canBack,M=c.children,i=c.link,A=c.isNew,S=c.containerClassName,_=f()(c,s),w=(0,x.useNavigate)(),J=(0,C.R)();return(0,n.jsxs)("div",{className:"relative flex flex-col flex-1 w-full h-full min-h-fit bg-gray-16",children:[(0,n.jsx)(W,{showQuery:!0,style:{top:"".concat(J,"px")},className:"!sticky px-[3.125rem] py-4 !max-w-none bg-green-2 mo:px-4 mo:h-[4.25rem]"}),(0,n.jsxs)("div",{className:P()("w-full h-full mx-auto px-[60px] flex flex-col flex-1",S,{" max-w-[90rem]":!A}),children:[o&&(0,n.jsxs)("div",{className:"flex items-center my-5 text-sm ".concat(i!=null&&i.pathName?"cursor-default":"cursor-pointer"),onClick:function(){return i!=null&&i.pathName?void 0:w("/carbon/service")},children:[!i&&(0,n.jsx)(a.YFh,{className:"text-lg"}),i&&JSON.stringify(i)!=="{}"?(0,n.jsxs)("div",{className:"flex flex-row",children:[(0,n.jsx)("span",{className:"text-[#000000] cursor-pointer font-bold  text-[14px]",onClick:function(){return w(i==null?void 0:i.pathName)},children:i.homeTitle}),(0,n.jsx)("div",{className:"mx-1 ",children:" / "}),(0,n.jsxs)("span",{className:"cu text-[#999999] font-normal text-[14px]",children:[" ",i.currentTitle]})]}):"\u8FD4\u56DE"]}),(0,n.jsx)("div",{className:P()("flex flex-col ",m),children:M})]})]})}},6429:function(Z,T,e){e.d(T,{U:function(){return f}});var b=e(35016);function f(){return function(){b.history.back()}}},1267:function(Z,T,e){e.d(T,{R:function(){return f}});var b=e(50959);function f(L){var d=(0,b.useRef)(L);return(0,b.useLayoutEffect)(function(){d.current=L}),(0,b.useCallback)(function(){return d.current&&d.current.apply(d,arguments)},[])}}}]);