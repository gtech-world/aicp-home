"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[6285],{66285:function(Re,Xt,Y){Y.d(Xt,{diagram:function(){return Ve}});var Zt=Y(46411),M=Y(50510),qt=Y(70517),Gt=Y(25653),Qt=Y(60603),C=Y(2709),x=Y(54511),Ye=Y(9836),yt=function(){var t=function(b,l,o,f){for(o=o||{},f=b.length;f--;o[b[f]]=l);return o},c=[1,3],n=[1,5],i=[7,9,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,31,33,34,36,43,48],r=[1,32],h=[1,33],d=[1,34],O=[1,35],L=[1,36],et=[1,37],W=[1,38],P=[1,15],K=[1,16],j=[1,17],V=[1,18],_=[1,19],rt=[1,20],at=[1,21],ct=[1,22],lt=[1,24],ot=[1,25],ut=[1,26],dt=[1,27],ft=[1,28],m=[1,30],v=[1,39],g=[1,42],y=[5,7,9,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,31,33,34,36,43,48],k={trace:function(){},yy:{},symbols_:{error:2,start:3,directive:4,gantt:5,document:6,EOF:7,line:8,SPACE:9,statement:10,NL:11,weekday:12,weekday_monday:13,weekday_tuesday:14,weekday_wednesday:15,weekday_thursday:16,weekday_friday:17,weekday_saturday:18,weekday_sunday:19,dateFormat:20,inclusiveEndDates:21,topAxis:22,axisFormat:23,tickInterval:24,excludes:25,includes:26,todayMarker:27,title:28,acc_title:29,acc_title_value:30,acc_descr:31,acc_descr_value:32,acc_descr_multiline_value:33,section:34,clickStatement:35,taskTxt:36,taskData:37,openDirective:38,typeDirective:39,closeDirective:40,":":41,argDirective:42,click:43,callbackname:44,callbackargs:45,href:46,clickStatementDebug:47,open_directive:48,type_directive:49,arg_directive:50,close_directive:51,$accept:0,$end:1},terminals_:{2:"error",5:"gantt",7:"EOF",9:"SPACE",11:"NL",13:"weekday_monday",14:"weekday_tuesday",15:"weekday_wednesday",16:"weekday_thursday",17:"weekday_friday",18:"weekday_saturday",19:"weekday_sunday",20:"dateFormat",21:"inclusiveEndDates",22:"topAxis",23:"axisFormat",24:"tickInterval",25:"excludes",26:"includes",27:"todayMarker",28:"title",29:"acc_title",30:"acc_title_value",31:"acc_descr",32:"acc_descr_value",33:"acc_descr_multiline_value",34:"section",36:"taskTxt",37:"taskData",41:":",43:"click",44:"callbackname",45:"callbackargs",46:"href",48:"open_directive",49:"type_directive",50:"arg_directive",51:"close_directive"},productions_:[0,[3,2],[3,3],[6,0],[6,2],[8,2],[8,1],[8,1],[8,1],[12,1],[12,1],[12,1],[12,1],[12,1],[12,1],[12,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,2],[10,2],[10,1],[10,1],[10,1],[10,2],[10,1],[4,4],[4,6],[35,2],[35,3],[35,3],[35,4],[35,3],[35,4],[35,2],[47,2],[47,3],[47,3],[47,4],[47,3],[47,4],[47,2],[38,1],[39,1],[42,1],[40,1]],performAction:function(l,o,f,u,a,e,w){var s=e.length-1;switch(a){case 2:return e[s-1];case 3:this.$=[];break;case 4:e[s-1].push(e[s]),this.$=e[s-1];break;case 5:case 6:this.$=e[s];break;case 7:case 8:this.$=[];break;case 9:u.setWeekday("monday");break;case 10:u.setWeekday("tuesday");break;case 11:u.setWeekday("wednesday");break;case 12:u.setWeekday("thursday");break;case 13:u.setWeekday("friday");break;case 14:u.setWeekday("saturday");break;case 15:u.setWeekday("sunday");break;case 16:u.setDateFormat(e[s].substr(11)),this.$=e[s].substr(11);break;case 17:u.enableInclusiveEndDates(),this.$=e[s].substr(18);break;case 18:u.TopAxis(),this.$=e[s].substr(8);break;case 19:u.setAxisFormat(e[s].substr(11)),this.$=e[s].substr(11);break;case 20:u.setTickInterval(e[s].substr(13)),this.$=e[s].substr(13);break;case 21:u.setExcludes(e[s].substr(9)),this.$=e[s].substr(9);break;case 22:u.setIncludes(e[s].substr(9)),this.$=e[s].substr(9);break;case 23:u.setTodayMarker(e[s].substr(12)),this.$=e[s].substr(12);break;case 25:u.setDiagramTitle(e[s].substr(6)),this.$=e[s].substr(6);break;case 26:this.$=e[s].trim(),u.setAccTitle(this.$);break;case 27:case 28:this.$=e[s].trim(),u.setAccDescription(this.$);break;case 29:u.addSection(e[s].substr(8)),this.$=e[s].substr(8);break;case 31:u.addTask(e[s-1],e[s]),this.$="task";break;case 35:this.$=e[s-1],u.setClickEvent(e[s-1],e[s],null);break;case 36:this.$=e[s-2],u.setClickEvent(e[s-2],e[s-1],e[s]);break;case 37:this.$=e[s-2],u.setClickEvent(e[s-2],e[s-1],null),u.setLink(e[s-2],e[s]);break;case 38:this.$=e[s-3],u.setClickEvent(e[s-3],e[s-2],e[s-1]),u.setLink(e[s-3],e[s]);break;case 39:this.$=e[s-2],u.setClickEvent(e[s-2],e[s],null),u.setLink(e[s-2],e[s-1]);break;case 40:this.$=e[s-3],u.setClickEvent(e[s-3],e[s-1],e[s]),u.setLink(e[s-3],e[s-2]);break;case 41:this.$=e[s-1],u.setLink(e[s-1],e[s]);break;case 42:case 48:this.$=e[s-1]+" "+e[s];break;case 43:case 44:case 46:this.$=e[s-2]+" "+e[s-1]+" "+e[s];break;case 45:case 47:this.$=e[s-3]+" "+e[s-2]+" "+e[s-1]+" "+e[s];break;case 49:u.parseDirective("%%{","open_directive");break;case 50:u.parseDirective(e[s],"type_directive");break;case 51:e[s]=e[s].trim().replace(/'/g,'"'),u.parseDirective(e[s],"arg_directive");break;case 52:u.parseDirective("}%%","close_directive","gantt");break}},table:[{3:1,4:2,5:c,38:4,48:n},{1:[3]},{3:6,4:2,5:c,38:4,48:n},t(i,[2,3],{6:7}),{39:8,49:[1,9]},{49:[2,49]},{1:[2,1]},{4:31,7:[1,10],8:11,9:[1,12],10:13,11:[1,14],12:23,13:r,14:h,15:d,16:O,17:L,18:et,19:W,20:P,21:K,22:j,23:V,24:_,25:rt,26:at,27:ct,28:lt,29:ot,31:ut,33:dt,34:ft,35:29,36:m,38:4,43:v,48:n},{40:40,41:[1,41],51:g},t([41,51],[2,50]),t(i,[2,8],{1:[2,2]}),t(i,[2,4]),{4:31,10:43,12:23,13:r,14:h,15:d,16:O,17:L,18:et,19:W,20:P,21:K,22:j,23:V,24:_,25:rt,26:at,27:ct,28:lt,29:ot,31:ut,33:dt,34:ft,35:29,36:m,38:4,43:v,48:n},t(i,[2,6]),t(i,[2,7]),t(i,[2,16]),t(i,[2,17]),t(i,[2,18]),t(i,[2,19]),t(i,[2,20]),t(i,[2,21]),t(i,[2,22]),t(i,[2,23]),t(i,[2,24]),t(i,[2,25]),{30:[1,44]},{32:[1,45]},t(i,[2,28]),t(i,[2,29]),t(i,[2,30]),{37:[1,46]},t(i,[2,32]),t(i,[2,9]),t(i,[2,10]),t(i,[2,11]),t(i,[2,12]),t(i,[2,13]),t(i,[2,14]),t(i,[2,15]),{44:[1,47],46:[1,48]},{11:[1,49]},{42:50,50:[1,51]},{11:[2,52]},t(i,[2,5]),t(i,[2,26]),t(i,[2,27]),t(i,[2,31]),t(i,[2,35],{45:[1,52],46:[1,53]}),t(i,[2,41],{44:[1,54]}),t(y,[2,33]),{40:55,51:g},{51:[2,51]},t(i,[2,36],{46:[1,56]}),t(i,[2,37]),t(i,[2,39],{45:[1,57]}),{11:[1,58]},t(i,[2,38]),t(i,[2,40]),t(y,[2,34])],defaultActions:{5:[2,49],6:[2,1],42:[2,52],51:[2,51]},parseError:function(l,o){if(o.recoverable)this.trace(l);else{var f=new Error(l);throw f.hash=o,f}},parse:function(l){var o=this,f=[0],u=[],a=[null],e=[],w=this.table,s="",p=0,A=0,D=2,ht=1,It=e.slice.call(arguments,1),I=Object.create(this.lexer),X={yy:{}};for(var At in this.yy)Object.prototype.hasOwnProperty.call(this.yy,At)&&(X.yy[At]=this.yy[At]);I.setInput(l,X.yy),X.yy.lexer=I,X.yy.parser=this,typeof I.yylloc=="undefined"&&(I.yylloc={});var Lt=I.yylloc;e.push(Lt);var Be=I.options&&I.options.ranges;typeof X.yy.parseError=="function"?this.parseError=X.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function We(){var U;return U=u.pop()||I.lex()||ht,typeof U!="number"&&(U instanceof Array&&(u=U,U=u.pop()),U=o.symbols_[U]||U),U}for(var F,Z,B,Ft,H={},kt,N,Kt,mt;;){if(Z=f[f.length-1],this.defaultActions[Z]?B=this.defaultActions[Z]:((F===null||typeof F=="undefined")&&(F=We()),B=w[Z]&&w[Z][F]),typeof B=="undefined"||!B.length||!B[0]){var Mt="";mt=[];for(kt in w[Z])this.terminals_[kt]&&kt>D&&mt.push("'"+this.terminals_[kt]+"'");I.showPosition?Mt="Parse error on line "+(p+1)+`:
`+I.showPosition()+`
Expecting `+mt.join(", ")+", got '"+(this.terminals_[F]||F)+"'":Mt="Parse error on line "+(p+1)+": Unexpected "+(F==ht?"end of input":"'"+(this.terminals_[F]||F)+"'"),this.parseError(Mt,{text:I.match,token:this.terminals_[F]||F,line:I.yylineno,loc:Lt,expected:mt})}if(B[0]instanceof Array&&B.length>1)throw new Error("Parse Error: multiple actions possible at state: "+Z+", token: "+F);switch(B[0]){case 1:f.push(F),a.push(I.yytext),e.push(I.yylloc),f.push(B[1]),F=null,A=I.yyleng,s=I.yytext,p=I.yylineno,Lt=I.yylloc;break;case 2:if(N=this.productions_[B[1]][1],H.$=a[a.length-N],H._$={first_line:e[e.length-(N||1)].first_line,last_line:e[e.length-1].last_line,first_column:e[e.length-(N||1)].first_column,last_column:e[e.length-1].last_column},Be&&(H._$.range=[e[e.length-(N||1)].range[0],e[e.length-1].range[1]]),Ft=this.performAction.apply(H,[s,A,p,X.yy,B[1],a,e].concat(It)),typeof Ft!="undefined")return Ft;N&&(f=f.slice(0,-1*N*2),a=a.slice(0,-1*N),e=e.slice(0,-1*N)),f.push(this.productions_[B[1]][0]),a.push(H.$),e.push(H._$),Kt=w[f[f.length-2]][f[f.length-1]],f.push(Kt);break;case 3:return!0}}return!0}},E=function(){var b={EOF:1,parseError:function(o,f){if(this.yy.parser)this.yy.parser.parseError(o,f);else throw new Error(o)},setInput:function(l,o){return this.yy=o||this.yy||{},this._input=l,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var l=this._input[0];this.yytext+=l,this.yyleng++,this.offset++,this.match+=l,this.matched+=l;var o=l.match(/(?:\r\n?|\n).*/g);return o?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),l},unput:function(l){var o=l.length,f=l.split(/(?:\r\n?|\n)/g);this._input=l+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-o),this.offset-=o;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),f.length-1&&(this.yylineno-=f.length-1);var a=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:f?(f.length===u.length?this.yylloc.first_column:0)+u[u.length-f.length].length-f[0].length:this.yylloc.first_column-o},this.options.ranges&&(this.yylloc.range=[a[0],a[0]+this.yyleng-o]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(l){this.unput(this.match.slice(l))},pastInput:function(){var l=this.matched.substr(0,this.matched.length-this.match.length);return(l.length>20?"...":"")+l.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var l=this.match;return l.length<20&&(l+=this._input.substr(0,20-l.length)),(l.substr(0,20)+(l.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var l=this.pastInput(),o=new Array(l.length+1).join("-");return l+this.upcomingInput()+`
`+o+"^"},test_match:function(l,o){var f,u,a;if(this.options.backtrack_lexer&&(a={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(a.yylloc.range=this.yylloc.range.slice(0))),u=l[0].match(/(?:\r\n?|\n).*/g),u&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+l[0].length},this.yytext+=l[0],this.match+=l[0],this.matches=l,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(l[0].length),this.matched+=l[0],f=this.performAction.call(this,this.yy,this,o,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),f)return f;if(this._backtrack){for(var e in a)this[e]=a[e];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var l,o,f,u;this._more||(this.yytext="",this.match="");for(var a=this._currentRules(),e=0;e<a.length;e++)if(f=this._input.match(this.rules[a[e]]),f&&(!o||f[0].length>o[0].length)){if(o=f,u=e,this.options.backtrack_lexer){if(l=this.test_match(f,a[e]),l!==!1)return l;if(this._backtrack){o=!1;continue}else return!1}else if(!this.options.flex)break}return o?(l=this.test_match(o,a[u]),l!==!1?l:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var o=this.next();return o||this.lex()},begin:function(o){this.conditionStack.push(o)},popState:function(){var o=this.conditionStack.length-1;return o>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(o){return o=this.conditionStack.length-1-Math.abs(o||0),o>=0?this.conditionStack[o]:"INITIAL"},pushState:function(o){this.begin(o)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(o,f,u,a){switch(u){case 0:return this.begin("open_directive"),48;case 1:return this.begin("type_directive"),49;case 2:return this.popState(),this.begin("arg_directive"),41;case 3:return this.popState(),this.popState(),51;case 4:return 50;case 5:return this.begin("acc_title"),29;case 6:return this.popState(),"acc_title_value";case 7:return this.begin("acc_descr"),31;case 8:return this.popState(),"acc_descr_value";case 9:this.begin("acc_descr_multiline");break;case 10:this.popState();break;case 11:return"acc_descr_multiline_value";case 12:break;case 13:break;case 14:break;case 15:return 11;case 16:break;case 17:break;case 18:break;case 19:this.begin("href");break;case 20:this.popState();break;case 21:return 46;case 22:this.begin("callbackname");break;case 23:this.popState();break;case 24:this.popState(),this.begin("callbackargs");break;case 25:return 44;case 26:this.popState();break;case 27:return 45;case 28:this.begin("click");break;case 29:this.popState();break;case 30:return 43;case 31:return 5;case 32:return 20;case 33:return 21;case 34:return 22;case 35:return 23;case 36:return 24;case 37:return 26;case 38:return 25;case 39:return 27;case 40:return 13;case 41:return 14;case 42:return 15;case 43:return 16;case 44:return 17;case 45:return 18;case 46:return 19;case 47:return"date";case 48:return 28;case 49:return"accDescription";case 50:return 34;case 51:return 36;case 52:return 37;case 53:return 41;case 54:return 7;case 55:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[10,11],inclusive:!1},acc_descr:{rules:[8],inclusive:!1},acc_title:{rules:[6],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},callbackargs:{rules:[26,27],inclusive:!1},callbackname:{rules:[23,24,25],inclusive:!1},href:{rules:[20,21],inclusive:!1},click:{rules:[29,30],inclusive:!1},INITIAL:{rules:[0,5,7,9,12,13,14,15,16,17,18,19,22,28,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55],inclusive:!0}}};return b}();k.lexer=E;function T(){this.yy={}}return T.prototype=k,k.Parser=T,new T}();yt.parser=yt;const Ht=yt;M.extend(qt),M.extend(Gt),M.extend(Qt);let R="",gt="",pt,vt="",J=[],$=[],bt={},Tt=[],it=[],q="",xt="";const Ot=["active","done","crit","milestone"];let _t=[],tt=!1,wt=!1,Et="sunday",Dt=0;const Jt=function(t,c,n){C.m.parseDirective(this,t,c,n)},$t=function(){Tt=[],it=[],q="",_t=[],st=0,St=void 0,nt=void 0,S=[],R="",gt="",xt="",pt=void 0,vt="",J=[],$=[],tt=!1,wt=!1,Dt=0,bt={},(0,C.v)(),Et="sunday"},te=function(t){gt=t},ee=function(){return gt},ie=function(t){pt=t},se=function(){return pt},ne=function(t){vt=t},re=function(){return vt},ae=function(t){R=t},ce=function(){tt=!0},le=function(){return tt},oe=function(){wt=!0},ue=function(){return wt},de=function(t){xt=t},fe=function(){return xt},he=function(){return R},ke=function(t){J=t.toLowerCase().split(/[\s,]+/)},me=function(){return J},ye=function(t){$=t.toLowerCase().split(/[\s,]+/)},ge=function(){return $},pe=function(){return bt},ve=function(t){q=t,Tt.push(t)},be=function(){return Tt},Te=function(){let t=Yt();const c=10;let n=0;for(;!t&&n<c;)t=Yt(),n++;return it=S,it},Pt=function(t,c,n,i){return i.includes(t.format(c.trim()))?!1:t.isoWeekday()>=6&&n.includes("weekends")||n.includes(t.format("dddd").toLowerCase())?!0:n.includes(t.format(c.trim()))},xe=function(t){Et=t},_e=function(){return Et},Vt=function(t,c,n,i){if(!n.length||t.manualEndTime)return;let r;t.startTime instanceof Date?r=M(t.startTime):r=M(t.startTime,c,!0),r=r.add(1,"d");let h;t.endTime instanceof Date?h=M(t.endTime):h=M(t.endTime,c,!0);const[d,O]=we(r,h,c,n,i);t.endTime=d.toDate(),t.renderEndTime=O},we=function(t,c,n,i,r){let h=!1,d=null;for(;t<=c;)h||(d=c.toDate()),h=Pt(t,n,i,r),h&&(c=c.add(1,"d")),t=t.add(1,"d");return[c,d]},Ct=function(t,c,n){n=n.trim();const r=/^after\s+([\d\w- ]+)/.exec(n.trim());if(r!==null){let d=null;if(r[1].split(" ").forEach(function(O){let L=Q(O);L!==void 0&&(d?L.endTime>d.endTime&&(d=L):d=L)}),d)return d.endTime;{const O=new Date;return O.setHours(0,0,0,0),O}}let h=M(n,c.trim(),!0);if(h.isValid())return h.toDate();{C.l.debug("Invalid date:"+n),C.l.debug("With date format:"+c.trim());const d=new Date(n);if(d===void 0||isNaN(d.getTime())||d.getFullYear()<-1e4||d.getFullYear()>1e4)throw new Error("Invalid date:"+n);return d}},Bt=function(t){const c=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return c!==null?[Number.parseFloat(c[1]),c[2]]:[NaN,"ms"]},Wt=function(t,c,n,i=!1){n=n.trim();let r=M(n,c.trim(),!0);if(r.isValid())return i&&(r=r.add(1,"d")),r.toDate();let h=M(t);const[d,O]=Bt(n);if(!Number.isNaN(d)){const L=h.add(d,O);L.isValid()&&(h=L)}return h.toDate()};let st=0;const G=function(t){return t===void 0?(st=st+1,"task"+st):t},Ee=function(t,c){let n;c.substr(0,1)===":"?n=c.substr(1,c.length):n=c;const i=n.split(","),r={};Ut(i,r,Ot);for(let d=0;d<i.length;d++)i[d]=i[d].trim();let h="";switch(i.length){case 1:r.id=G(),r.startTime=t.endTime,h=i[0];break;case 2:r.id=G(),r.startTime=Ct(void 0,R,i[0]),h=i[1];break;case 3:r.id=G(i[0]),r.startTime=Ct(void 0,R,i[1]),h=i[2];break}return h&&(r.endTime=Wt(r.startTime,R,h,tt),r.manualEndTime=M(h,"YYYY-MM-DD",!0).isValid(),Vt(r,R,$,J)),r},De=function(t,c){let n;c.substr(0,1)===":"?n=c.substr(1,c.length):n=c;const i=n.split(","),r={};Ut(i,r,Ot);for(let h=0;h<i.length;h++)i[h]=i[h].trim();switch(i.length){case 1:r.id=G(),r.startTime={type:"prevTaskEnd",id:t},r.endTime={data:i[0]};break;case 2:r.id=G(),r.startTime={type:"getStartDate",startData:i[0]},r.endTime={data:i[1]};break;case 3:r.id=G(i[0]),r.startTime={type:"getStartDate",startData:i[1]},r.endTime={data:i[2]};break}return r};let St,nt,S=[];const Rt={},Ce=function(t,c){const n={section:q,type:q,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:c},task:t,classes:[]},i=De(nt,c);n.raw.startTime=i.startTime,n.raw.endTime=i.endTime,n.id=i.id,n.prevTaskId=nt,n.active=i.active,n.done=i.done,n.crit=i.crit,n.milestone=i.milestone,n.order=Dt,Dt++;const r=S.push(n);nt=n.id,Rt[n.id]=r-1},Q=function(t){const c=Rt[t];return S[c]},Se=function(t,c){const n={section:q,type:q,description:t,task:t,classes:[]},i=Ee(St,c);n.startTime=i.startTime,n.endTime=i.endTime,n.id=i.id,n.active=i.active,n.done=i.done,n.crit=i.crit,n.milestone=i.milestone,St=n,it.push(n)},Yt=function(){const t=function(n){const i=S[n];let r="";switch(S[n].raw.startTime.type){case"prevTaskEnd":{const h=Q(i.prevTaskId);i.startTime=h.endTime;break}case"getStartDate":r=Ct(void 0,R,S[n].raw.startTime.startData),r&&(S[n].startTime=r);break}return S[n].startTime&&(S[n].endTime=Wt(S[n].startTime,R,S[n].raw.endTime.data,tt),S[n].endTime&&(S[n].processed=!0,S[n].manualEndTime=M(S[n].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),Vt(S[n],R,$,J))),S[n].processed};let c=!0;for(const[n,i]of S.entries())t(n),c=c&&i.processed;return c},Ie=function(t,c){let n=c;(0,C.c)().securityLevel!=="loose"&&(n=(0,Zt.Nm)(c)),t.split(",").forEach(function(i){Q(i)!==void 0&&(Nt(i,()=>{window.open(n,"_self")}),bt[i]=n)}),zt(t,"clickable")},zt=function(t,c){t.split(",").forEach(function(n){let i=Q(n);i!==void 0&&i.classes.push(c)})},Ae=function(t,c,n){if((0,C.c)().securityLevel!=="loose"||c===void 0)return;let i=[];if(typeof n=="string"){i=n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let h=0;h<i.length;h++){let d=i[h].trim();d.charAt(0)==='"'&&d.charAt(d.length-1)==='"'&&(d=d.substr(1,d.length-2)),i[h]=d}}i.length===0&&i.push(t),Q(t)!==void 0&&Nt(t,()=>{C.u.runFunc(c,...i)})},Nt=function(t,c){_t.push(function(){const n=document.querySelector(`[id="${t}"]`);n!==null&&n.addEventListener("click",function(){c()})},function(){const n=document.querySelector(`[id="${t}-text"]`);n!==null&&n.addEventListener("click",function(){c()})})},Le=function(t,c,n){t.split(",").forEach(function(i){Ae(i,c,n)}),zt(t,"clickable")},Fe=function(t){_t.forEach(function(c){c(t)})},Me={parseDirective:Jt,getConfig:()=>(0,C.c)().gantt,clear:$t,setDateFormat:ae,getDateFormat:he,enableInclusiveEndDates:ce,endDatesAreInclusive:le,enableTopAxis:oe,topAxisEnabled:ue,setAxisFormat:te,getAxisFormat:ee,setTickInterval:ie,getTickInterval:se,setTodayMarker:ne,getTodayMarker:re,setAccTitle:C.s,getAccTitle:C.g,setDiagramTitle:C.r,getDiagramTitle:C.t,setDisplayMode:de,getDisplayMode:fe,setAccDescription:C.b,getAccDescription:C.a,addSection:ve,getSections:be,getTasks:Te,addTask:Ce,findTaskById:Q,addTaskOrg:Se,setIncludes:ke,getIncludes:me,setExcludes:ye,getExcludes:ge,setClickEvent:Le,setLink:Ie,getLinks:pe,bindFunctions:Fe,parseDuration:Bt,isInvalidDate:Pt,setWeekday:xe,getWeekday:_e};function Ut(t,c,n){let i=!0;for(;i;)i=!1,n.forEach(function(r){const h="^\\s*"+r+"\\s*$",d=new RegExp(h);t[0].match(d)&&(c[r]=!0,t.shift(1),i=!0)})}const Oe=function(){C.l.debug("Something is calling, setConf, remove the call")},jt={monday:x.Ox9,tuesday:x.YDX,wednesday:x.EFj,thursday:x.Igq,friday:x.y2j,saturday:x.LqH,sunday:x.Zyz},Pe=(t,c)=>{let n=[...t].map(()=>-1/0),i=[...t].sort((h,d)=>h.startTime-d.startTime||h.order-d.order),r=0;for(const h of i)for(let d=0;d<n.length;d++)if(h.startTime>=n[d]){n[d]=h.endTime,h.order=d+c,d>r&&(r=d);break}return r};let z;const Ve={parser:Ht,db:Me,renderer:{setConf:Oe,draw:function(t,c,n,i){const r=(0,C.c)().gantt,h=(0,C.c)().securityLevel;let d;h==="sandbox"&&(d=(0,x.Ys)("#i"+c));const O=h==="sandbox"?(0,x.Ys)(d.nodes()[0].contentDocument.body):(0,x.Ys)("body"),L=h==="sandbox"?d.nodes()[0].contentDocument:document,et=L.getElementById(c);z=et.parentElement.offsetWidth,z===void 0&&(z=1200),r.useWidth!==void 0&&(z=r.useWidth);const W=i.db.getTasks();let P=[];for(const m of W)P.push(m.type);P=ft(P);const K={};let j=2*r.topPadding;if(i.db.getDisplayMode()==="compact"||r.displayMode==="compact"){const m={};for(const g of W)m[g.section]===void 0?m[g.section]=[g]:m[g.section].push(g);let v=0;for(const g of Object.keys(m)){const y=Pe(m[g],v)+1;v+=y,j+=y*(r.barHeight+r.barGap),K[g]=y}}else{j+=W.length*(r.barHeight+r.barGap);for(const m of P)K[m]=W.filter(v=>v.type===m).length}et.setAttribute("viewBox","0 0 "+z+" "+j);const V=O.select(`[id="${c}"]`),_=(0,x.Xf)().domain([(0,x.VV$)(W,function(m){return m.startTime}),(0,x.Fp7)(W,function(m){return m.endTime})]).rangeRound([0,z-r.leftPadding-r.rightPadding]);function rt(m,v){const g=m.startTime,y=v.startTime;let k=0;return g>y?k=1:g<y&&(k=-1),k}W.sort(rt),at(W,z,j),(0,C.i)(V,j,z,r.useMaxWidth),V.append("text").text(i.db.getDiagramTitle()).attr("x",z/2).attr("y",r.titleTopMargin).attr("class","titleText");function at(m,v,g){const y=r.barHeight,k=y+r.barGap,E=r.topPadding,T=r.leftPadding,b=(0,x.BYU)().domain([0,P.length]).range(["#00B9FA","#F95002"]).interpolate(x.JHv);lt(k,E,T,v,g,m,i.db.getExcludes(),i.db.getIncludes()),ot(T,E,v,g),ct(m,k,E,T,y,b,v),ut(k,E),dt(T,E,v,g)}function ct(m,v,g,y,k,E,T){const l=[...new Set(m.map(a=>a.order))].map(a=>m.find(e=>e.order===a));V.append("g").selectAll("rect").data(l).enter().append("rect").attr("x",0).attr("y",function(a,e){return e=a.order,e*v+g-2}).attr("width",function(){return T-r.rightPadding/2}).attr("height",v).attr("class",function(a){for(const[e,w]of P.entries())if(a.type===w)return"section section"+e%r.numberSectionStyles;return"section section0"});const o=V.append("g").selectAll("rect").data(m).enter(),f=i.db.getLinks();if(o.append("rect").attr("id",function(a){return a.id}).attr("rx",3).attr("ry",3).attr("x",function(a){return a.milestone?_(a.startTime)+y+.5*(_(a.endTime)-_(a.startTime))-.5*k:_(a.startTime)+y}).attr("y",function(a,e){return e=a.order,e*v+g}).attr("width",function(a){return a.milestone?k:_(a.renderEndTime||a.endTime)-_(a.startTime)}).attr("height",k).attr("transform-origin",function(a,e){return e=a.order,(_(a.startTime)+y+.5*(_(a.endTime)-_(a.startTime))).toString()+"px "+(e*v+g+.5*k).toString()+"px"}).attr("class",function(a){const e="task";let w="";a.classes.length>0&&(w=a.classes.join(" "));let s=0;for(const[A,D]of P.entries())a.type===D&&(s=A%r.numberSectionStyles);let p="";return a.active?a.crit?p+=" activeCrit":p=" active":a.done?a.crit?p=" doneCrit":p=" done":a.crit&&(p+=" crit"),p.length===0&&(p=" task"),a.milestone&&(p=" milestone "+p),p+=s,p+=" "+w,e+p}),o.append("text").attr("id",function(a){return a.id+"-text"}).text(function(a){return a.task}).attr("font-size",r.fontSize).attr("x",function(a){let e=_(a.startTime),w=_(a.renderEndTime||a.endTime);a.milestone&&(e+=.5*(_(a.endTime)-_(a.startTime))-.5*k),a.milestone&&(w=e+k);const s=this.getBBox().width;return s>w-e?w+s+1.5*r.leftPadding>T?e+y-5:w+y+5:(w-e)/2+e+y}).attr("y",function(a,e){return e=a.order,e*v+r.barHeight/2+(r.fontSize/2-2)+g}).attr("text-height",k).attr("class",function(a){const e=_(a.startTime);let w=_(a.endTime);a.milestone&&(w=e+k);const s=this.getBBox().width;let p="";a.classes.length>0&&(p=a.classes.join(" "));let A=0;for(const[ht,It]of P.entries())a.type===It&&(A=ht%r.numberSectionStyles);let D="";return a.active&&(a.crit?D="activeCritText"+A:D="activeText"+A),a.done?a.crit?D=D+" doneCritText"+A:D=D+" doneText"+A:a.crit&&(D=D+" critText"+A),a.milestone&&(D+=" milestoneText"),s>w-e?w+s+1.5*r.leftPadding>T?p+" taskTextOutsideLeft taskTextOutside"+A+" "+D:p+" taskTextOutsideRight taskTextOutside"+A+" "+D+" width-"+s:p+" taskText taskText"+A+" "+D+" width-"+s}),(0,C.c)().securityLevel==="sandbox"){let a;a=(0,x.Ys)("#i"+c);const e=a.nodes()[0].contentDocument;o.filter(function(w){return f[w.id]!==void 0}).each(function(w){var s=e.querySelector("#"+w.id),p=e.querySelector("#"+w.id+"-text");const A=s.parentNode;var D=e.createElement("a");D.setAttribute("xlink:href",f[w.id]),D.setAttribute("target","_top"),A.appendChild(D),D.appendChild(s),D.appendChild(p)})}}function lt(m,v,g,y,k,E,T,b){const l=E.reduce((s,{startTime:p})=>s?Math.min(s,p):p,0),o=E.reduce((s,{endTime:p})=>s?Math.max(s,p):p,0),f=i.db.getDateFormat();if(!l||!o)return;const u=[];let a=null,e=M(l);for(;e.valueOf()<=o;)i.db.isInvalidDate(e,f,T,b)?a?a.end=e:a={start:e,end:e}:a&&(u.push(a),a=null),e=e.add(1,"d");V.append("g").selectAll("rect").data(u).enter().append("rect").attr("id",function(s){return"exclude-"+s.start.format("YYYY-MM-DD")}).attr("x",function(s){return _(s.start)+g}).attr("y",r.gridLineStartPadding).attr("width",function(s){const p=s.end.add(1,"day");return _(p)-_(s.start)}).attr("height",k-v-r.gridLineStartPadding).attr("transform-origin",function(s,p){return(_(s.start)+g+.5*(_(s.end)-_(s.start))).toString()+"px "+(p*m+.5*k).toString()+"px"}).attr("class","exclude-range")}function ot(m,v,g,y){let k=(0,x.LLu)(_).tickSize(-y+v+r.gridLineStartPadding).tickFormat((0,x.i$Z)(i.db.getAxisFormat()||r.axisFormat||"%Y-%m-%d"));const T=/^([1-9]\d*)(minute|hour|day|week|month)$/.exec(i.db.getTickInterval()||r.tickInterval);if(T!==null){const b=T[1],l=T[2],o=i.db.getWeekday()||r.weekday;switch(l){case"minute":k.ticks(x.Z_i.every(b));break;case"hour":k.ticks(x.WQD.every(b));break;case"day":k.ticks(x.rr1.every(b));break;case"week":k.ticks(jt[o].every(b));break;case"month":k.ticks(x.F0B.every(b));break}}if(V.append("g").attr("class","grid").attr("transform","translate("+m+", "+(y-50)+")").call(k).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),i.db.topAxisEnabled()||r.topAxis){let b=(0,x.F5q)(_).tickSize(-y+v+r.gridLineStartPadding).tickFormat((0,x.i$Z)(i.db.getAxisFormat()||r.axisFormat||"%Y-%m-%d"));if(T!==null){const l=T[1],o=T[2],f=i.db.getWeekday()||r.weekday;switch(o){case"minute":b.ticks(x.Z_i.every(l));break;case"hour":b.ticks(x.WQD.every(l));break;case"day":b.ticks(x.rr1.every(l));break;case"week":b.ticks(jt[f].every(l));break;case"month":b.ticks(x.F0B.every(l));break}}V.append("g").attr("class","grid").attr("transform","translate("+m+", "+v+")").call(b).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}function ut(m,v){let g=0;const y=Object.keys(K).map(k=>[k,K[k]]);V.append("g").selectAll("text").data(y).enter().append(function(k){const E=k[0].split(C.e.lineBreakRegex),T=-(E.length-1)/2,b=L.createElementNS("http://www.w3.org/2000/svg","text");b.setAttribute("dy",T+"em");for(const[l,o]of E.entries()){const f=L.createElementNS("http://www.w3.org/2000/svg","tspan");f.setAttribute("alignment-baseline","central"),f.setAttribute("x","10"),l>0&&f.setAttribute("dy","1em"),f.textContent=o,b.appendChild(f)}return b}).attr("x",10).attr("y",function(k,E){if(E>0)for(let T=0;T<E;T++)return g+=y[E-1][1],k[1]*m/2+g*m+v;else return k[1]*m/2+v}).attr("font-size",r.sectionFontSize).attr("class",function(k){for(const[E,T]of P.entries())if(k[0]===T)return"sectionTitle sectionTitle"+E%r.numberSectionStyles;return"sectionTitle"})}function dt(m,v,g,y){const k=i.db.getTodayMarker();if(k==="off")return;const E=V.append("g").attr("class","today"),T=new Date,b=E.append("line");b.attr("x1",_(T)+m).attr("x2",_(T)+m).attr("y1",r.titleTopMargin).attr("y2",y-r.titleTopMargin).attr("class","today"),k!==""&&b.attr("style",k.replace(/,/g,";"))}function ft(m){const v={},g=[];for(let y=0,k=m.length;y<k;++y)Object.prototype.hasOwnProperty.call(v,m[y])||(v[m[y]]=!0,g.push(m[y]));return g}}},styles:t=>`
  .mermaid-main-font {
    font-family: "trebuchet ms", verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    // font-size: ${t.ganttFontSize};
    // text-height: 14px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
    text {
      font-family: ${t.fontFamily};
      fill: ${t.textColor};
    }
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }

  // .taskText:not([font-size]) {
  //   font-size: ${t.ganttFontSize};
  // }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    // font-size: ${t.ganttFontSize};
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
    // font-size: ${t.ganttFontSize};
  }

  /* Special case clickable */
  .task.clickable {
    cursor: pointer;
  }
  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor}    ;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
`}}}]);
