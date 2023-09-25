"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[9916],{89916:function(at,A,_){_.d(A,{diagram:function(){return et}});var b=_(2153),k=_(54511),C=_(67411),W=_(13414),t=_(62905),nt=_(50510),it=_(46411),st=_(9836);const N={},R=(e,n)=>{N[e]=n},U=e=>N[e],L=()=>Object.keys(N),v={get:U,set:R,keys:L,size:()=>L().length},D=e=>e.append("circle").attr("class","start-state").attr("r",(0,t.c)().state.sizeUnit).attr("cx",(0,t.c)().state.padding+(0,t.c)().state.sizeUnit).attr("cy",(0,t.c)().state.padding+(0,t.c)().state.sizeUnit),I=e=>e.append("line").style("stroke","grey").style("stroke-dasharray","3").attr("x1",(0,t.c)().state.textHeight).attr("class","divider").attr("x2",(0,t.c)().state.textHeight*2).attr("y1",0).attr("y2",0),G=(e,n)=>{const r=e.append("text").attr("x",2*(0,t.c)().state.padding).attr("y",(0,t.c)().state.textHeight+2*(0,t.c)().state.padding).attr("font-size",(0,t.c)().state.fontSize).attr("class","state-title").text(n.id),o=r.node().getBBox();return e.insert("rect",":first-child").attr("x",(0,t.c)().state.padding).attr("y",(0,t.c)().state.padding).attr("width",o.width+2*(0,t.c)().state.padding).attr("height",o.height+2*(0,t.c)().state.padding).attr("rx",(0,t.c)().state.radius),r},K=(e,n)=>{const r=function(l,B,w){const M=l.append("tspan").attr("x",2*(0,t.c)().state.padding).text(B);w||M.attr("dy",(0,t.c)().state.textHeight)},s=e.append("text").attr("x",2*(0,t.c)().state.padding).attr("y",(0,t.c)().state.textHeight+1.3*(0,t.c)().state.padding).attr("font-size",(0,t.c)().state.fontSize).attr("class","state-title").text(n.descriptions[0]).node().getBBox(),g=s.height,p=e.append("text").attr("x",(0,t.c)().state.padding).attr("y",g+(0,t.c)().state.padding*.4+(0,t.c)().state.dividerMargin+(0,t.c)().state.textHeight).attr("class","state-description");let a=!0,d=!0;n.descriptions.forEach(function(l){a||(r(p,l,d),d=!1),a=!1});const y=e.append("line").attr("x1",(0,t.c)().state.padding).attr("y1",(0,t.c)().state.padding+g+(0,t.c)().state.dividerMargin/2).attr("y2",(0,t.c)().state.padding+g+(0,t.c)().state.dividerMargin/2).attr("class","descr-divider"),x=p.node().getBBox(),c=Math.max(x.width,s.width);return y.attr("x2",c+3*(0,t.c)().state.padding),e.insert("rect",":first-child").attr("x",(0,t.c)().state.padding).attr("y",(0,t.c)().state.padding).attr("width",c+2*(0,t.c)().state.padding).attr("height",x.height+g+2*(0,t.c)().state.padding).attr("rx",(0,t.c)().state.radius),e},F=(e,n,r)=>{const o=(0,t.c)().state.padding,s=2*(0,t.c)().state.padding,g=e.node().getBBox(),p=g.width,a=g.x,d=e.append("text").attr("x",0).attr("y",(0,t.c)().state.titleShift).attr("font-size",(0,t.c)().state.fontSize).attr("class","state-title").text(n.id),x=d.node().getBBox().width+s;let c=Math.max(x,p);c===p&&(c=c+s);let l;const B=e.node().getBBox();n.doc,l=a-o,x>p&&(l=(p-c)/2+o),Math.abs(a-B.x)<o&&x>p&&(l=a-(x-p)/2);const w=1-(0,t.c)().state.textHeight;return e.insert("rect",":first-child").attr("x",l).attr("y",w).attr("class",r?"alt-composit":"composit").attr("width",c).attr("height",B.height+(0,t.c)().state.textHeight+(0,t.c)().state.titleShift+1).attr("rx","0"),d.attr("x",l+o),x<=p&&d.attr("x",a+(c-s)/2-x/2+o),e.insert("rect",":first-child").attr("x",l).attr("y",(0,t.c)().state.titleShift-(0,t.c)().state.textHeight-(0,t.c)().state.padding).attr("width",c).attr("height",(0,t.c)().state.textHeight*3).attr("rx",(0,t.c)().state.radius),e.insert("rect",":first-child").attr("x",l).attr("y",(0,t.c)().state.titleShift-(0,t.c)().state.textHeight-(0,t.c)().state.padding).attr("width",c).attr("height",B.height+3+2*(0,t.c)().state.textHeight).attr("rx",(0,t.c)().state.radius),e},Y=e=>(e.append("circle").attr("class","end-state-outer").attr("r",(0,t.c)().state.sizeUnit+(0,t.c)().state.miniPadding).attr("cx",(0,t.c)().state.padding+(0,t.c)().state.sizeUnit+(0,t.c)().state.miniPadding).attr("cy",(0,t.c)().state.padding+(0,t.c)().state.sizeUnit+(0,t.c)().state.miniPadding),e.append("circle").attr("class","end-state-inner").attr("r",(0,t.c)().state.sizeUnit).attr("cx",(0,t.c)().state.padding+(0,t.c)().state.sizeUnit+2).attr("cy",(0,t.c)().state.padding+(0,t.c)().state.sizeUnit+2)),j=(e,n)=>{let r=(0,t.c)().state.forkWidth,o=(0,t.c)().state.forkHeight;if(n.parentId){let s=r;r=o,o=s}return e.append("rect").style("stroke","black").style("fill","black").attr("width",r).attr("height",o).attr("x",(0,t.c)().state.padding).attr("y",(0,t.c)().state.padding)},X=(e,n,r,o)=>{let s=0;const g=o.append("text");g.style("text-anchor","start"),g.attr("class","noteText");let p=e.replace(/\r\n/g,"<br/>");p=p.replace(/\n/g,"<br/>");const a=p.split(t.e.lineBreakRegex);let d=1.25*(0,t.c)().state.noteMargin;for(const y of a){const x=y.trim();if(x.length>0){const c=g.append("tspan");if(c.text(x),d===0){const l=c.node().getBBox();d+=l.height}s+=d,c.attr("x",n+(0,t.c)().state.noteMargin),c.attr("y",r+s+1.25*(0,t.c)().state.noteMargin)}}return{textWidth:g.node().getBBox().width,textHeight:s}},$=(e,n)=>{n.attr("class","state-note");const r=n.append("rect").attr("x",0).attr("y",(0,t.c)().state.padding),o=n.append("g"),{textWidth:s,textHeight:g}=X(e,0,0,o);return r.attr("height",g+2*(0,t.c)().state.noteMargin),r.attr("width",s+(0,t.c)().state.noteMargin*2),r},O=function(e,n){const r=n.id,o={id:r,label:n.id,width:0,height:0},s=e.append("g").attr("id",r).attr("class","stateGroup");n.type==="start"&&D(s),n.type==="end"&&Y(s),(n.type==="fork"||n.type==="join")&&j(s,n),n.type==="note"&&$(n.note.text,s),n.type==="divider"&&I(s),n.type==="default"&&n.descriptions.length===0&&G(s,n),n.type==="default"&&n.descriptions.length>0&&K(s,n);const g=s.node().getBBox();return o.width=g.width+2*(0,t.c)().state.padding,o.height=g.height+2*(0,t.c)().state.padding,v.set(r,o),o};let H=0;const J=function(e,n,r){const o=function(d){switch(d){case b.d.relationType.AGGREGATION:return"aggregation";case b.d.relationType.EXTENSION:return"extension";case b.d.relationType.COMPOSITION:return"composition";case b.d.relationType.DEPENDENCY:return"dependency"}};n.points=n.points.filter(d=>!Number.isNaN(d.y));const s=n.points,g=(0,k.jvg)().x(function(d){return d.x}).y(function(d){return d.y}).curve(k.$0Z),p=e.append("path").attr("d",g(s)).attr("id","edge"+H).attr("class","transition");let a="";if((0,t.c)().state.arrowMarkerAbsolute&&(a=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,a=a.replace(/\(/g,"\\("),a=a.replace(/\)/g,"\\)")),p.attr("marker-end","url("+a+"#"+o(b.d.relationType.DEPENDENCY)+"End)"),r.title!==void 0){const d=e.append("g").attr("class","stateLabel"),{x:y,y:x}=t.u.calcLabelPosition(n.points),c=t.e.getRows(r.title);let l=0;const B=[];let w=0,M=0;for(let u=0;u<=c.length;u++){const h=d.append("text").attr("text-anchor","middle").text(c[u]).attr("x",y).attr("y",x+l),f=h.node().getBBox();w=Math.max(w,f.width),M=Math.min(M,f.x),t.l.info(f.x,y,x+l),l===0&&(l=h.node().getBBox().height,t.l.info("Title height",l,x)),B.push(h)}let S=l*c.length;if(c.length>1){const u=(c.length-1)*l*.5;B.forEach((h,f)=>h.attr("y",x+f*l-u)),S=l*c.length}const i=d.node().getBBox();d.insert("rect",":first-child").attr("class","box").attr("x",y-w/2-(0,t.c)().state.padding/2).attr("y",x-S/2-(0,t.c)().state.padding/2-3.5).attr("width",w+(0,t.c)().state.padding).attr("height",S+(0,t.c)().state.padding),t.l.info(i)}H++};let E;const T={},Z=function(){},Q=function(e){e.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},V=function(e,n,r,o){E=(0,t.c)().state;const s=(0,t.c)().securityLevel;let g;s==="sandbox"&&(g=(0,k.Ys)("#i"+n));const p=s==="sandbox"?(0,k.Ys)(g.nodes()[0].contentDocument.body):(0,k.Ys)("body"),a=s==="sandbox"?g.nodes()[0].contentDocument:document;t.l.debug("Rendering diagram "+e);const d=p.select(`[id='${n}']`);Q(d);const y=o.db.getRootDoc();z(y,d,void 0,!1,p,a,o);const x=E.padding,c=d.node().getBBox(),l=c.width+x*2,B=c.height+x*2,w=l*1.75;(0,t.i)(d,B,w,E.useMaxWidth),d.attr("viewBox",`${c.x-E.padding}  ${c.y-E.padding} `+l+" "+B)},q=e=>e?e.length*E.fontSizeFactor:1,z=(e,n,r,o,s,g,p)=>{const a=new W.k({compound:!0,multigraph:!0});let d,y=!0;for(d=0;d<e.length;d++)if(e[d].stmt==="relation"){y=!1;break}r?a.setGraph({rankdir:"LR",multigraph:!0,compound:!0,ranker:"tight-tree",ranksep:y?1:E.edgeLengthFactor,nodeSep:y?1:50,isMultiGraph:!0}):a.setGraph({rankdir:"TB",multigraph:!0,compound:!0,ranksep:y?1:E.edgeLengthFactor,nodeSep:y?1:50,ranker:"tight-tree",isMultiGraph:!0}),a.setDefaultEdgeLabel(function(){return{}}),p.db.extract(e);const x=p.db.getStates(),c=p.db.getRelations(),l=Object.keys(x);for(const i of l){const u=x[i];r&&(u.parentId=r);let h;if(u.doc){let f=n.append("g").attr("id",u.id).attr("class","stateGroup");h=z(u.doc,f,u.id,!o,s,g,p);{f=F(f,u,o);let m=f.node().getBBox();h.width=m.width,h.height=m.height+E.padding/2,T[u.id]={y:E.compositTitleSize}}}else h=O(n,u);if(u.note){const f={descriptions:[],id:u.id+"-note",note:u.note,type:"note"},m=O(n,f);u.note.position==="left of"?(a.setNode(h.id+"-note",m),a.setNode(h.id,h)):(a.setNode(h.id,h),a.setNode(h.id+"-note",m)),a.setParent(h.id,h.id+"-group"),a.setParent(h.id+"-note",h.id+"-group")}else a.setNode(h.id,h)}t.l.debug("Count=",a.nodeCount(),a);let B=0;c.forEach(function(i){B++,t.l.debug("Setting edge",i),a.setEdge(i.id1,i.id2,{relation:i,width:q(i.title),height:E.labelHeight*t.e.getRows(i.title).length,labelpos:"c"},"id"+B)}),(0,C.bK)(a),t.l.debug("Graph after layout",a.nodes());const w=n.node();a.nodes().forEach(function(i){i!==void 0&&a.node(i)!==void 0?(t.l.warn("Node "+i+": "+JSON.stringify(a.node(i))),s.select("#"+w.id+" #"+i).attr("transform","translate("+(a.node(i).x-a.node(i).width/2)+","+(a.node(i).y+(T[i]?T[i].y:0)-a.node(i).height/2)+" )"),s.select("#"+w.id+" #"+i).attr("data-x-shift",a.node(i).x-a.node(i).width/2),g.querySelectorAll("#"+w.id+" #"+i+" .divider").forEach(h=>{const f=h.parentElement;let m=0,P=0;f&&(f.parentElement&&(m=f.parentElement.getBBox().width),P=parseInt(f.getAttribute("data-x-shift"),10),Number.isNaN(P)&&(P=0)),h.setAttribute("x1",0-P+8),h.setAttribute("x2",m-P-8)})):t.l.debug("No Node "+i+": "+JSON.stringify(a.node(i)))});let M=w.getBBox();a.edges().forEach(function(i){i!==void 0&&a.edge(i)!==void 0&&(t.l.debug("Edge "+i.v+" -> "+i.w+": "+JSON.stringify(a.edge(i))),J(n,a.edge(i),a.edge(i).relation))}),M=w.getBBox();const S={id:r||"root",label:r||"root",width:0,height:0};return S.width=M.width+2*E.padding,S.height=M.height+2*E.padding,t.l.debug("Doc rendered",S,a),S},tt={setConf:Z,draw:V},et={parser:b.p,db:b.d,renderer:tt,styles:b.s,init:e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,b.d.clear()}}}}]);