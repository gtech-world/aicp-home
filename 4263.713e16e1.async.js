"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[4263],{14263:function(kt,X,I){I.r(X),I.d(X,{diagram:function(){return Bt}});var w=I(27846),N=I(52015),B=I(24674),at=I(67006),ct=I(91088),ot=I(65165),U=function(){var t=function(v,s,a,h){for(a=a||{},h=v.length;h--;a[v[h]]=s);return a},e=[1,2],n=[1,5],r=[6,9,11,17,18,20,22,23,24,26],i=[1,15],l=[1,16],c=[1,17],d=[1,18],y=[1,19],k=[1,20],_=[1,24],m=[4,6,9,11,17,18,20,22,23,24,26],f={trace:function(){},yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,directive:7,line:8,SPACE:9,statement:10,NEWLINE:11,openDirective:12,typeDirective:13,closeDirective:14,":":15,argDirective:16,title:17,acc_title:18,acc_title_value:19,acc_descr:20,acc_descr_value:21,acc_descr_multiline_value:22,section:23,taskName:24,taskData:25,open_directive:26,type_directive:27,arg_directive:28,close_directive:29,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",9:"SPACE",11:"NEWLINE",15:":",17:"title",18:"acc_title",19:"acc_title_value",20:"acc_descr",21:"acc_descr_value",22:"acc_descr_multiline_value",23:"section",24:"taskName",25:"taskData",26:"open_directive",27:"type_directive",28:"arg_directive",29:"close_directive"},productions_:[0,[3,3],[3,2],[5,0],[5,2],[8,2],[8,1],[8,1],[8,1],[7,4],[7,6],[10,1],[10,2],[10,2],[10,1],[10,1],[10,2],[10,1],[12,1],[13,1],[16,1],[14,1]],performAction:function(s,a,h,p,x,o,G){var b=o.length-1;switch(x){case 1:return o[b-1];case 3:this.$=[];break;case 4:o[b-1].push(o[b]),this.$=o[b-1];break;case 5:case 6:this.$=o[b];break;case 7:case 8:this.$=[];break;case 11:p.setDiagramTitle(o[b].substr(6)),this.$=o[b].substr(6);break;case 12:this.$=o[b].trim(),p.setAccTitle(this.$);break;case 13:case 14:this.$=o[b].trim(),p.setAccDescription(this.$);break;case 15:p.addSection(o[b].substr(8)),this.$=o[b].substr(8);break;case 16:p.addTask(o[b-1],o[b]),this.$="task";break;case 18:p.parseDirective("%%{","open_directive");break;case 19:p.parseDirective(o[b],"type_directive");break;case 20:o[b]=o[b].trim().replace(/'/g,'"'),p.parseDirective(o[b],"arg_directive");break;case 21:p.parseDirective("}%%","close_directive","journey");break}},table:[{3:1,4:e,7:3,12:4,26:n},{1:[3]},t(r,[2,3],{5:6}),{3:7,4:e,7:3,12:4,26:n},{13:8,27:[1,9]},{27:[2,18]},{6:[1,10],7:21,8:11,9:[1,12],10:13,11:[1,14],12:4,17:i,18:l,20:c,22:d,23:y,24:k,26:n},{1:[2,2]},{14:22,15:[1,23],29:_},t([15,29],[2,19]),t(r,[2,8],{1:[2,1]}),t(r,[2,4]),{7:21,10:25,12:4,17:i,18:l,20:c,22:d,23:y,24:k,26:n},t(r,[2,6]),t(r,[2,7]),t(r,[2,11]),{19:[1,26]},{21:[1,27]},t(r,[2,14]),t(r,[2,15]),{25:[1,28]},t(r,[2,17]),{11:[1,29]},{16:30,28:[1,31]},{11:[2,21]},t(r,[2,5]),t(r,[2,12]),t(r,[2,13]),t(r,[2,16]),t(m,[2,9]),{14:32,29:_},{29:[2,20]},{11:[1,33]},t(m,[2,10])],defaultActions:{5:[2,18],7:[2,2],24:[2,21],31:[2,20]},parseError:function(s,a){if(a.recoverable)this.trace(s);else{var h=new Error(s);throw h.hash=a,h}},parse:function(s){var a=this,h=[0],p=[],x=[null],o=[],G=this.table,b="",J=0,mt=0,Ft=2,_t=1,Nt=o.slice.call(arguments,1),M=Object.create(this.lexer),z={yy:{}};for(var it in this.yy)Object.prototype.hasOwnProperty.call(this.yy,it)&&(z.yy[it]=this.yy[it]);M.setInput(s,z.yy),z.yy.lexer=M,z.yy.parser=this,typeof M.yylloc=="undefined"&&(M.yylloc={});var nt=M.yylloc;o.push(nt);var jt=M.options&&M.options.ranges;typeof z.yy.parseError=="function"?this.parseError=z.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function zt(){var O;return O=p.pop()||M.lex()||_t,typeof O!="number"&&(O instanceof Array&&(p=O,O=p.pop()),O=a.symbols_[O]||O),O}for(var S,W,V,st,Y={},Z,R,xt,Q;;){if(W=h[h.length-1],this.defaultActions[W]?V=this.defaultActions[W]:((S===null||typeof S=="undefined")&&(S=zt()),V=G[W]&&G[W][S]),typeof V=="undefined"||!V.length||!V[0]){var rt="";Q=[];for(Z in G[W])this.terminals_[Z]&&Z>Ft&&Q.push("'"+this.terminals_[Z]+"'");M.showPosition?rt="Parse error on line "+(J+1)+`:
`+M.showPosition()+`
Expecting `+Q.join(", ")+", got '"+(this.terminals_[S]||S)+"'":rt="Parse error on line "+(J+1)+": Unexpected "+(S==_t?"end of input":"'"+(this.terminals_[S]||S)+"'"),this.parseError(rt,{text:M.match,token:this.terminals_[S]||S,line:M.yylineno,loc:nt,expected:Q})}if(V[0]instanceof Array&&V.length>1)throw new Error("Parse Error: multiple actions possible at state: "+W+", token: "+S);switch(V[0]){case 1:h.push(S),x.push(M.yytext),o.push(M.yylloc),h.push(V[1]),S=null,mt=M.yyleng,b=M.yytext,J=M.yylineno,nt=M.yylloc;break;case 2:if(R=this.productions_[V[1]][1],Y.$=x[x.length-R],Y._$={first_line:o[o.length-(R||1)].first_line,last_line:o[o.length-1].last_line,first_column:o[o.length-(R||1)].first_column,last_column:o[o.length-1].last_column},jt&&(Y._$.range=[o[o.length-(R||1)].range[0],o[o.length-1].range[1]]),st=this.performAction.apply(Y,[b,mt,J,z.yy,V[1],x,o].concat(Nt)),typeof st!="undefined")return st;R&&(h=h.slice(0,-1*R*2),x=x.slice(0,-1*R),o=o.slice(0,-1*R)),h.push(this.productions_[V[1]][0]),x.push(Y.$),o.push(Y._$),xt=G[h[h.length-2]][h[h.length-1]],h.push(xt);break;case 3:return!0}}return!0}},$=function(){var v={EOF:1,parseError:function(a,h){if(this.yy.parser)this.yy.parser.parseError(a,h);else throw new Error(a)},setInput:function(s,a){return this.yy=a||this.yy||{},this._input=s,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var s=this._input[0];this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s;var a=s.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},unput:function(s){var a=s.length,h=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a),this.offset-=a;var p=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),h.length-1&&(this.yylineno-=h.length-1);var x=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:h?(h.length===p.length?this.yylloc.first_column:0)+p[p.length-h.length].length-h[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[x[0],x[0]+this.yyleng-a]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(s){this.unput(this.match.slice(s))},pastInput:function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var s=this.pastInput(),a=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+a+"^"},test_match:function(s,a){var h,p,x;if(this.options.backtrack_lexer&&(x={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(x.yylloc.range=this.yylloc.range.slice(0))),p=s[0].match(/(?:\r\n?|\n).*/g),p&&(this.yylineno+=p.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:p?p[p.length-1].length-p[p.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length},this.yytext+=s[0],this.match+=s[0],this.matches=s,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(s[0].length),this.matched+=s[0],h=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),h)return h;if(this._backtrack){for(var o in x)this[o]=x[o];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,a,h,p;this._more||(this.yytext="",this.match="");for(var x=this._currentRules(),o=0;o<x.length;o++)if(h=this._input.match(this.rules[x[o]]),h&&(!a||h[0].length>a[0].length)){if(a=h,p=o,this.options.backtrack_lexer){if(s=this.test_match(h,x[o]),s!==!1)return s;if(this._backtrack){a=!1;continue}else return!1}else if(!this.options.flex)break}return a?(s=this.test_match(a,x[p]),s!==!1?s:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return a||this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){var a=this.conditionStack.length-1;return a>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(a){return a=this.conditionStack.length-1-Math.abs(a||0),a>=0?this.conditionStack[a]:"INITIAL"},pushState:function(a){this.begin(a)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(a,h,p,x){switch(p){case 0:return this.begin("open_directive"),26;case 1:return this.begin("type_directive"),27;case 2:return this.popState(),this.begin("arg_directive"),15;case 3:return this.popState(),this.popState(),29;case 4:return 28;case 5:break;case 6:break;case 7:return 11;case 8:break;case 9:break;case 10:return 4;case 11:return 17;case 12:return this.begin("acc_title"),18;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),20;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:return 23;case 20:return 24;case 21:return 25;case 22:return 15;case 23:return 6;case 24:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{open_directive:{rules:[1],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,11,12,14,16,19,20,21,22,23,24],inclusive:!0}}};return v}();f.lexer=$;function E(){this.yy={}}return E.prototype=f,f.Parser=E,new E}();U.parser=U;const q=U;let F="";const P=[],u=[],g=[],T=function(t,e,n){w.m.parseDirective(this,t,e,n)},C=function(){P.length=0,u.length=0,F="",g.length=0,(0,w.v)()},K=function(t){F=t,P.push(t)},vt=function(){return P},bt=function(){let t=lt();const e=100;let n=0;for(;!t&&n<e;)t=lt(),n++;return u.push(...g),u},wt=function(){const t=[];return u.forEach(n=>{n.people&&t.push(...n.people)}),[...new Set(t)].sort()},Et=function(t,e){const n=e.substr(1).split(":");let r=0,i=[];n.length===1?(r=Number(n[0]),i=[]):(r=Number(n[0]),i=n[1].split(","));const l=i.map(d=>d.trim()),c={section:F,type:F,people:l,task:t,score:r};g.push(c)},Mt=function(t){const e={section:F,type:F,description:t,task:t,classes:[]};u.push(e)},lt=function(){const t=function(n){return g[n].processed};let e=!0;for(const[n,r]of g.entries())t(n),e=e&&r.processed;return e},Tt=function(){return wt()},ht={parseDirective:T,getConfig:()=>(0,w.c)().journey,clear:C,setDiagramTitle:w.r,getDiagramTitle:w.t,setAccTitle:w.s,getAccTitle:w.g,setAccDescription:w.b,getAccDescription:w.a,addSection:K,getSections:vt,getTasks:bt,addTask:Et,addTaskOrg:Mt,getActors:Tt},Pt=t=>`.label {
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    color: ${t.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${t.textColor}
  }

  .legend {
    fill: ${t.textColor};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${t.textColor}
  }

  .face {
    ${t.faceColor?`fill: ${t.faceColor}`:"fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${t.fillType0?`fill: ${t.fillType0}`:""};
  }
  .task-type-1, .section-type-1  {
    ${t.fillType0?`fill: ${t.fillType1}`:""};
  }
  .task-type-2, .section-type-2  {
    ${t.fillType0?`fill: ${t.fillType2}`:""};
  }
  .task-type-3, .section-type-3  {
    ${t.fillType0?`fill: ${t.fillType3}`:""};
  }
  .task-type-4, .section-type-4  {
    ${t.fillType0?`fill: ${t.fillType4}`:""};
  }
  .task-type-5, .section-type-5  {
    ${t.fillType0?`fill: ${t.fillType5}`:""};
  }
  .task-type-6, .section-type-6  {
    ${t.fillType0?`fill: ${t.fillType6}`:""};
  }
  .task-type-7, .section-type-7  {
    ${t.fillType0?`fill: ${t.fillType7}`:""};
  }

  .actor-0 {
    ${t.actor0?`fill: ${t.actor0}`:""};
  }
  .actor-1 {
    ${t.actor1?`fill: ${t.actor1}`:""};
  }
  .actor-2 {
    ${t.actor2?`fill: ${t.actor2}`:""};
  }
  .actor-3 {
    ${t.actor3?`fill: ${t.actor3}`:""};
  }
  .actor-4 {
    ${t.actor4?`fill: ${t.actor4}`:""};
  }
  .actor-5 {
    ${t.actor5?`fill: ${t.actor5}`:""};
  }
`,tt=function(t,e){return(0,B.d)(t,e)},St=function(t,e){const r=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),i=t.append("g");i.append("circle").attr("cx",e.cx-15/3).attr("cy",e.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),i.append("circle").attr("cx",e.cx+15/3).attr("cy",e.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666");function l(y){const k=(0,N.Nb1)().startAngle(Math.PI/2).endAngle(3*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);y.append("path").attr("class","mouth").attr("d",k).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}function c(y){const k=(0,N.Nb1)().startAngle(3*Math.PI/2).endAngle(5*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);y.append("path").attr("class","mouth").attr("d",k).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}function d(y){y.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return e.score>3?l(i):e.score<3?c(i):d(i),r},ut=function(t,e){const n=t.append("circle");return n.attr("cx",e.cx),n.attr("cy",e.cy),n.attr("class","actor-"+e.pos),n.attr("fill",e.fill),n.attr("stroke",e.stroke),n.attr("r",e.r),n.class!==void 0&&n.attr("class",n.class),e.title!==void 0&&n.append("title").text(e.title),n},yt=function(t,e){return(0,B.f)(t,e)},$t=function(t,e){function n(i,l,c,d,y){return i+","+l+" "+(i+c)+","+l+" "+(i+c)+","+(l+d-y)+" "+(i+c-y*1.2)+","+(l+d)+" "+i+","+(l+d)}const r=t.append("polygon");r.attr("points",n(e.x,e.y,50,20,7)),r.attr("class","labelBox"),e.y=e.y+e.labelMargin,e.x=e.x+.5*e.labelMargin,yt(t,e)},It=function(t,e,n){const r=t.append("g"),i=(0,B.g)();i.x=e.x,i.y=e.y,i.fill=e.fill,i.width=n.width*e.taskCount+n.diagramMarginX*(e.taskCount-1),i.height=n.height,i.class="journey-section section-type-"+e.num,i.rx=3,i.ry=3,tt(r,i),ft(n)(e.text,r,i.x,i.y,i.width,i.height,{class:"journey-section section-type-"+e.num},n,e.colour)};let dt=-1;const Ct=function(t,e,n){const r=e.x+n.width/2,i=t.append("g");dt++;const l=300+5*30;i.append("line").attr("id","task"+dt).attr("x1",r).attr("y1",e.y).attr("x2",r).attr("y2",l).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),St(i,{cx:r,cy:300+(5-e.score)*30,score:e.score});const c=(0,B.g)();c.x=e.x,c.y=e.y,c.fill=e.fill,c.width=n.width,c.height=n.height,c.class="task task-type-"+e.num,c.rx=3,c.ry=3,tt(i,c);let d=e.x+14;e.people.forEach(y=>{const k=e.actors[y].color,_={cx:d,cy:e.y,r:7,fill:k,stroke:"#000",title:y,pos:e.actors[y].position};ut(i,_),d+=10}),ft(n)(e.task,i,c.x,c.y,c.width,c.height,{class:"task"},n,e.colour)},At=function(t,e){(0,B.a)(t,e)},ft=function(){function t(i,l,c,d,y,k,_,m){const f=l.append("text").attr("x",c+y/2).attr("y",d+k/2+5).style("font-color",m).style("text-anchor","middle").text(i);r(f,_)}function e(i,l,c,d,y,k,_,m,f){const{taskFontSize:$,taskFontFamily:E}=m,v=i.split(/<br\s*\/?>/gi);for(let s=0;s<v.length;s++){const a=s*$-$*(v.length-1)/2,h=l.append("text").attr("x",c+y/2).attr("y",d).attr("fill",f).style("text-anchor","middle").style("font-size",$).style("font-family",E);h.append("tspan").attr("x",c+y/2).attr("dy",a).text(v[s]),h.attr("y",d+k/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),r(h,_)}}function n(i,l,c,d,y,k,_,m){const f=l.append("switch"),E=f.append("foreignObject").attr("x",c).attr("y",d).attr("width",y).attr("height",k).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");E.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(i),e(i,f,c,d,y,k,_,m),r(E,_)}function r(i,l){for(const c in l)c in l&&i.attr(c,l[c])}return function(i){return i.textPlacement==="fo"?n:i.textPlacement==="old"?t:e}}(),D={drawRect:tt,drawCircle:ut,drawSection:It,drawText:yt,drawLabel:$t,drawTask:Ct,drawBackgroundRect:At,initGraphics:function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")}},Vt=function(t){Object.keys(t).forEach(function(n){H[n]=t[n]})},L={};function Lt(t){const e=(0,w.c)().journey;let n=60;Object.keys(L).forEach(r=>{const i=L[r].color,l={cx:20,cy:n,r:7,fill:i,stroke:"#000",pos:L[r].position};D.drawCircle(t,l);const c={x:40,y:n+7,fill:"#666",text:r,textMargin:e.boxTextMargin|5};D.drawText(t,c),n+=20})}const H=(0,w.c)().journey,j=H.leftMargin,Rt=function(t,e,n,r){const i=(0,w.c)().journey,l=(0,w.c)().securityLevel;let c;l==="sandbox"&&(c=(0,N.Ys)("#i"+e));const d=l==="sandbox"?(0,N.Ys)(c.nodes()[0].contentDocument.body):(0,N.Ys)("body");A.init();const y=d.select("#"+e);D.initGraphics(y);const k=r.db.getTasks(),_=r.db.getDiagramTitle(),m=r.db.getActors();for(const a in L)delete L[a];let f=0;m.forEach(a=>{L[a]={color:i.actorColours[f%i.actorColours.length],position:f},f++}),Lt(y),A.insert(0,0,j,Object.keys(L).length*50),Ot(y,k,0);const $=A.getBounds();_&&y.append("text").text(_).attr("x",j).attr("font-size","4ex").attr("font-weight","bold").attr("y",25);const E=$.stopy-$.starty+2*i.diagramMarginY,v=j+$.stopx+2*i.diagramMarginX;(0,w.i)(y,E,v,i.useMaxWidth),y.append("line").attr("x1",j).attr("y1",i.height*4).attr("x2",v-j-4).attr("y2",i.height*4).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)");const s=_?70:0;y.attr("viewBox",`${$.startx} -25 ${v} ${E+s}`),y.attr("preserveAspectRatio","xMinYMin meet"),y.attr("height",E+s+25)},A={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},updateVal:function(t,e,n,r){t[e]===void 0?t[e]=n:t[e]=r(n,t[e])},updateBounds:function(t,e,n,r){const i=(0,w.c)().journey,l=this;let c=0;function d(y){return function(_){c++;const m=l.sequenceItems.length-c+1;l.updateVal(_,"starty",e-m*i.boxMargin,Math.min),l.updateVal(_,"stopy",r+m*i.boxMargin,Math.max),l.updateVal(A.data,"startx",t-m*i.boxMargin,Math.min),l.updateVal(A.data,"stopx",n+m*i.boxMargin,Math.max),y!=="activation"&&(l.updateVal(_,"startx",t-m*i.boxMargin,Math.min),l.updateVal(_,"stopx",n+m*i.boxMargin,Math.max),l.updateVal(A.data,"starty",e-m*i.boxMargin,Math.min),l.updateVal(A.data,"stopy",r+m*i.boxMargin,Math.max))}}this.sequenceItems.forEach(d())},insert:function(t,e,n,r){const i=Math.min(t,n),l=Math.max(t,n),c=Math.min(e,r),d=Math.max(e,r);this.updateVal(A.data,"startx",i,Math.min),this.updateVal(A.data,"starty",c,Math.min),this.updateVal(A.data,"stopx",l,Math.max),this.updateVal(A.data,"stopy",d,Math.max),this.updateBounds(i,c,l,d)},bumpVerticalPos:function(t){this.verticalPos=this.verticalPos+t,this.data.stopy=this.verticalPos},getVerticalPos:function(){return this.verticalPos},getBounds:function(){return this.data}},et=H.sectionFills,pt=H.sectionColours,Ot=function(t,e,n){const r=(0,w.c)().journey;let i="";const l=r.height*2+r.diagramMarginY,c=n+l;let d=0,y="#CCC",k="black",_=0;for(const[m,f]of e.entries()){if(i!==f.section){y=et[d%et.length],_=d%et.length,k=pt[d%pt.length];let E=0;const v=f.section;for(let a=m;a<e.length&&e[a].section==v;a++)E=E+1;const s={x:m*r.taskMargin+m*r.width+j,y:50,text:f.section,fill:y,num:_,colour:k,taskCount:E};D.drawSection(t,s,r),i=f.section,d++}const $=f.people.reduce((E,v)=>(L[v]&&(E[v]=L[v]),E),{});f.x=m*r.taskMargin+m*r.width+j,f.y=c,f.width=r.diagramMarginX,f.height=r.diagramMarginY,f.colour=k,f.fill=y,f.num=_,f.actors=$,D.drawTask(t,f,r),A.insert(f.x,f.y,f.x+f.width+r.taskMargin,300+5*30)}},gt={setConf:Vt,draw:Rt},Bt={parser:q,db:ht,renderer:gt,styles:Pt,init:t=>{gt.setConf(t.journey),ht.clear()}}},24674:function(kt,X,I){I.d(X,{a:function(){return at},b:function(){return U},c:function(){return ot},d:function(){return B},e:function(){return F},f:function(){return ct},g:function(){return q}});var w=I(91088),N=I(27846);const B=(P,u)=>{const g=P.append("rect");if(g.attr("x",u.x),g.attr("y",u.y),g.attr("fill",u.fill),g.attr("stroke",u.stroke),g.attr("width",u.width),g.attr("height",u.height),u.rx!==void 0&&g.attr("rx",u.rx),u.ry!==void 0&&g.attr("ry",u.ry),u.attrs!==void 0)for(const T in u.attrs)g.attr(T,u.attrs[T]);return u.class!==void 0&&g.attr("class",u.class),g},at=(P,u)=>{const g={x:u.startx,y:u.starty,width:u.stopx-u.startx,height:u.stopy-u.starty,fill:u.fill,stroke:u.stroke,class:"rect"};B(P,g).lower()},ct=(P,u)=>{const g=u.text.replace(N.J," "),T=P.append("text");T.attr("x",u.x),T.attr("y",u.y),T.attr("class","legend"),T.style("text-anchor",u.anchor),u.class!==void 0&&T.attr("class",u.class);const C=T.append("tspan");return C.attr("x",u.x+u.textMargin*2),C.text(g),T},ot=(P,u,g,T)=>{const C=P.append("image");C.attr("x",u),C.attr("y",g);const K=(0,w.Nm)(T);C.attr("xlink:href",K)},U=(P,u,g,T)=>{const C=P.append("use");C.attr("x",u),C.attr("y",g);const K=(0,w.Nm)(T);C.attr("xlink:href",`#${K}`)},q=()=>({x:0,y:0,width:100,height:100,fill:"#EDF2AE",stroke:"#666",anchor:"start",rx:0,ry:0}),F=()=>({x:0,y:0,width:100,height:100,"text-anchor":"start",style:"#666",textMargin:0,rx:0,ry:0,tspan:!0})}}]);
