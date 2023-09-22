!(function(){"use strict";var F=(w,L,r)=>new Promise((a,R)=>{var h=_=>{try{b(r.next(_))}catch(O){R(O)}},i=_=>{try{b(r.throw(_))}catch(O){R(O)}},b=_=>_.done?a(_.value):Promise.resolve(_.value).then(h,i);b((r=r.apply(w,L)).next())});(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8460],{78460:function(w,L,r){r.d(L,{diagram:function(){return ut}});var a=r(2153),R=r(13414),h=r(54511),i=r(62905),b=r(46714),_=r(50510),O=r(46411),ht=r(9836),bt=r(67411),pt=r(22899);const M="rect",$="rectWithTitle",m="start",q="end",tt="divider",et="roundedWithTitle",st="note",ot="noteGroup",A="statediagram",nt=`${A}-state`,U="transition",ct="note",it=`${U} note-edge`,rt=`${A}-${ct}`,lt=`${A}-cluster`,at=`${A}-cluster-alt`,W="parent",k="note",dt="state",G="----",_t=`${G}${k}`,H=`${G}${W}`,K="fill:none",j="fill: #333",V="c",Y="text",z="normal";let x={},E=0;const Et=function(t){const n=Object.keys(t);for(const e of n)t[e]},St=function(t,n){return n.db.extract(n.db.getRootDocV2()),n.db.getClasses()};function Tt(t){return t==null?"":t.classes?t.classes.join(" "):""}function v(t="",n=0,e="",c=G){const l=e!==null&&e.length>0?`${c}${e}`:"";return`${dt}-${t}${l}-${n}`}const p=(t,n,e,c,l,d)=>{const s=e.id,y=Tt(c[s]);if(s!=="root"){let u=M;e.start===!0&&(u=m),e.start===!1&&(u=q),e.type!==a.D&&(u=e.type),x[s]||(x[s]={id:s,shape:u,description:i.e.sanitizeText(s,(0,i.c)()),classes:`${y} ${nt}`});const o=x[s];e.description&&(Array.isArray(o.description)?(o.shape=$,o.description.push(e.description)):o.description.length>0?(o.shape=$,o.description===s?o.description=[e.description]:o.description=[o.description,e.description]):(o.shape=M,o.description=e.description),o.description=i.e.sanitizeTextOrArray(o.description,(0,i.c)())),o.description.length===1&&o.shape===$&&(o.shape=M),!o.type&&e.doc&&(i.l.info("Setting cluster for ",s,B(e)),o.type="group",o.dir=B(e),o.shape=e.type===a.a?tt:et,o.classes=o.classes+" "+lt+" "+(d?at:""));const f={labelStyle:"",shape:o.shape,labelText:o.description,classes:o.classes,style:"",id:s,dir:o.dir,domId:v(s,E),type:o.type,padding:15};if(f.centerLabel=!0,e.note){const S={labelStyle:"",shape:st,labelText:e.note.text,classes:rt,style:"",id:s+_t+"-"+E,domId:v(s,E,k),type:o.type,padding:15},T={labelStyle:"",shape:ot,labelText:e.note.text,classes:o.classes,style:"",id:s+H,domId:v(s,E,W),type:"group",padding:0};E++;const C=s+H;t.setNode(C,T),t.setNode(S.id,S),t.setNode(s,f),t.setParent(s,C),t.setParent(S.id,C);let D=s,g=S.id;e.note.position==="left of"&&(D=S.id,g=s),t.setEdge(D,g,{arrowhead:"none",arrowType:"",style:K,labelStyle:"",classes:it,arrowheadStyle:j,labelpos:V,labelType:Y,thickness:z})}else t.setNode(s,f)}n&&n.id!=="root"&&(i.l.trace("Setting node ",s," to be child of its parent ",n.id),t.setParent(s,n.id)),e.doc&&(i.l.trace("Adding nodes children "),Dt(t,e,e.doc,c,l,!d))},Dt=(t,n,e,c,l,d)=>{i.l.trace("items",e),e.forEach(s=>{switch(s.stmt){case a.b:p(t,n,s,c,l,d);break;case a.D:p(t,n,s,c,l,d);break;case a.S:{p(t,n,s.state1,c,l,d),p(t,n,s.state2,c,l,d);const y={id:"edge"+E,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:K,labelStyle:"",label:i.e.sanitizeText(s.description,(0,i.c)()),arrowheadStyle:j,labelpos:V,labelType:Y,thickness:z,classes:U};t.setEdge(s.state1.id,s.state2.id,y,E),E++}break}})},B=(t,n=a.c)=>{let e=n;if(t.doc)for(let c=0;c<t.doc.length;c++){const l=t.doc[c];l.stmt==="dir"&&(e=l.value)}return e},At={setConf:Et,getClasses:St,draw:function(t,n,e,c){return F(this,null,function*(){i.l.info("Drawing state diagram (v2)",n),x={},c.db.getDirection();const{securityLevel:l,state:d}=(0,i.c)(),s=d.nodeSpacing||50,y=d.rankSpacing||50;i.l.info(c.db.getRootDocV2()),c.db.extract(c.db.getRootDocV2()),i.l.info(c.db.getRootDocV2());const u=c.db.getStates(),o=new R.k({multigraph:!0,compound:!0}).setGraph({rankdir:B(c.db.getRootDocV2()),nodesep:s,ranksep:y,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});p(o,void 0,c.db.getRootDocV2(),u,c.db,!0);let f;l==="sandbox"&&(f=(0,h.Ys)("#i"+n));const S=l==="sandbox"?(0,h.Ys)(f.nodes()[0].contentDocument.body):(0,h.Ys)("body"),T=S.select(`[id="${n}"]`),C=S.select("#"+n+" g");yield(0,b.r)(C,o,["barb"],A,n);const D=8;i.u.insertTitle(T,"statediagramTitleText",d.titleTopMargin,c.db.getDiagramTitle());const g=T.node().getBBox(),I=g.width+D*2,J=g.height+D*2;T.attr("class",A);const Q=T.node().getBBox();(0,i.i)(T,J,I,d.useMaxWidth);const X=`${Q.x-D} ${Q.y-D} ${I} ${J}`;i.l.debug(`viewBox ${X}`),T.attr("viewBox",X);const ft=document.querySelectorAll('[id="'+n+'"] .edgeLabel .label');for(const N of ft){const Z=N.getBBox(),P=document.createElementNS("http://www.w3.org/2000/svg",M);P.setAttribute("rx",0),P.setAttribute("ry",0),P.setAttribute("width",Z.width),P.setAttribute("height",Z.height),N.insertBefore(P,N.firstChild)}})}},ut={parser:a.p,db:a.d,renderer:At,styles:a.s,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,a.d.clear()}}}}]);
}());