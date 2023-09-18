(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[6041],{63926:function(zt){(function(X,O){zt.exports=O()})(this,function(){"use strict";var X="day";return function(O,_t,A){var ot=function(b){return b.add(4-b.isoWeekday(),X)},Z=_t.prototype;Z.isoWeekYear=function(){return ot(this).year()},Z.isoWeek=function(b){if(!this.$utils().u(b))return this.add(7*(b-this.isoWeek()),X);var m,H,z,it,P=ot(this),st=(m=this.isoWeekYear(),H=this.$u,z=(H?A.utc:A)().year(m).startOf("year"),it=4-z.isoWeekday(),z.isoWeekday()>4&&(it+=7),z.add(it,X));return P.diff(st,"week")+1},Z.isoWeekday=function(b){return this.$utils().u(b)?this.day()||7:this.day(this.day()%7?b:b-7)};var wt=Z.startOf;Z.startOf=function(b,m){var H=this.$utils(),z=!!H.u(m)||m;return H.p(b)==="isoweek"?z?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):wt.bind(this)(b,m)}}})},6041:function(zt,X,O){"use strict";O.r(X),O.d(X,{diagram:function(){return Be}});var _t=O(91088),A=O(74637),ot=O(63926),Z=O(49645),wt=O(70602),b=O(27846),m=O(52015),H=O(65165),z=function(){var t=function(x,o,l,f){for(l=l||{},f=x.length;f--;l[x[f]]=o);return l},c=[1,3],n=[1,5],i=[7,9,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,31,33,34,36,43,48],r=[1,32],h=[1,33],d=[1,34],W=[1,35],F=[1,36],ct=[1,37],R=[1,38],V=[1,15],q=[1,16],K=[1,17],B=[1,18],w=[1,19],ft=[1,20],ht=[1,21],kt=[1,22],yt=[1,24],mt=[1,25],gt=[1,26],pt=[1,27],vt=[1,28],y=[1,30],T=[1,39],p=[1,42],g=[5,7,9,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,31,33,34,36,43,48],k={trace:function(){},yy:{},symbols_:{error:2,start:3,directive:4,gantt:5,document:6,EOF:7,line:8,SPACE:9,statement:10,NL:11,weekday:12,weekday_monday:13,weekday_tuesday:14,weekday_wednesday:15,weekday_thursday:16,weekday_friday:17,weekday_saturday:18,weekday_sunday:19,dateFormat:20,inclusiveEndDates:21,topAxis:22,axisFormat:23,tickInterval:24,excludes:25,includes:26,todayMarker:27,title:28,acc_title:29,acc_title_value:30,acc_descr:31,acc_descr_value:32,acc_descr_multiline_value:33,section:34,clickStatement:35,taskTxt:36,taskData:37,openDirective:38,typeDirective:39,closeDirective:40,":":41,argDirective:42,click:43,callbackname:44,callbackargs:45,href:46,clickStatementDebug:47,open_directive:48,type_directive:49,arg_directive:50,close_directive:51,$accept:0,$end:1},terminals_:{2:"error",5:"gantt",7:"EOF",9:"SPACE",11:"NL",13:"weekday_monday",14:"weekday_tuesday",15:"weekday_wednesday",16:"weekday_thursday",17:"weekday_friday",18:"weekday_saturday",19:"weekday_sunday",20:"dateFormat",21:"inclusiveEndDates",22:"topAxis",23:"axisFormat",24:"tickInterval",25:"excludes",26:"includes",27:"todayMarker",28:"title",29:"acc_title",30:"acc_title_value",31:"acc_descr",32:"acc_descr_value",33:"acc_descr_multiline_value",34:"section",36:"taskTxt",37:"taskData",41:":",43:"click",44:"callbackname",45:"callbackargs",46:"href",48:"open_directive",49:"type_directive",50:"arg_directive",51:"close_directive"},productions_:[0,[3,2],[3,3],[6,0],[6,2],[8,2],[8,1],[8,1],[8,1],[12,1],[12,1],[12,1],[12,1],[12,1],[12,1],[12,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,2],[10,2],[10,1],[10,1],[10,1],[10,2],[10,1],[4,4],[4,6],[35,2],[35,3],[35,3],[35,4],[35,3],[35,4],[35,2],[47,2],[47,3],[47,3],[47,4],[47,3],[47,4],[47,2],[38,1],[39,1],[42,1],[40,1]],performAction:function(o,l,f,u,a,e,E){var s=e.length-1;switch(a){case 2:return e[s-1];case 3:this.$=[];break;case 4:e[s-1].push(e[s]),this.$=e[s-1];break;case 5:case 6:this.$=e[s];break;case 7:case 8:this.$=[];break;case 9:u.setWeekday("monday");break;case 10:u.setWeekday("tuesday");break;case 11:u.setWeekday("wednesday");break;case 12:u.setWeekday("thursday");break;case 13:u.setWeekday("friday");break;case 14:u.setWeekday("saturday");break;case 15:u.setWeekday("sunday");break;case 16:u.setDateFormat(e[s].substr(11)),this.$=e[s].substr(11);break;case 17:u.enableInclusiveEndDates(),this.$=e[s].substr(18);break;case 18:u.TopAxis(),this.$=e[s].substr(8);break;case 19:u.setAxisFormat(e[s].substr(11)),this.$=e[s].substr(11);break;case 20:u.setTickInterval(e[s].substr(13)),this.$=e[s].substr(13);break;case 21:u.setExcludes(e[s].substr(9)),this.$=e[s].substr(9);break;case 22:u.setIncludes(e[s].substr(9)),this.$=e[s].substr(9);break;case 23:u.setTodayMarker(e[s].substr(12)),this.$=e[s].substr(12);break;case 25:u.setDiagramTitle(e[s].substr(6)),this.$=e[s].substr(6);break;case 26:this.$=e[s].trim(),u.setAccTitle(this.$);break;case 27:case 28:this.$=e[s].trim(),u.setAccDescription(this.$);break;case 29:u.addSection(e[s].substr(8)),this.$=e[s].substr(8);break;case 31:u.addTask(e[s-1],e[s]),this.$="task";break;case 35:this.$=e[s-1],u.setClickEvent(e[s-1],e[s],null);break;case 36:this.$=e[s-2],u.setClickEvent(e[s-2],e[s-1],e[s]);break;case 37:this.$=e[s-2],u.setClickEvent(e[s-2],e[s-1],null),u.setLink(e[s-2],e[s]);break;case 38:this.$=e[s-3],u.setClickEvent(e[s-3],e[s-2],e[s-1]),u.setLink(e[s-3],e[s]);break;case 39:this.$=e[s-2],u.setClickEvent(e[s-2],e[s],null),u.setLink(e[s-2],e[s-1]);break;case 40:this.$=e[s-3],u.setClickEvent(e[s-3],e[s-1],e[s]),u.setLink(e[s-3],e[s-2]);break;case 41:this.$=e[s-1],u.setLink(e[s-1],e[s]);break;case 42:case 48:this.$=e[s-1]+" "+e[s];break;case 43:case 44:case 46:this.$=e[s-2]+" "+e[s-1]+" "+e[s];break;case 45:case 47:this.$=e[s-3]+" "+e[s-2]+" "+e[s-1]+" "+e[s];break;case 49:u.parseDirective("%%{","open_directive");break;case 50:u.parseDirective(e[s],"type_directive");break;case 51:e[s]=e[s].trim().replace(/'/g,'"'),u.parseDirective(e[s],"arg_directive");break;case 52:u.parseDirective("}%%","close_directive","gantt");break}},table:[{3:1,4:2,5:c,38:4,48:n},{1:[3]},{3:6,4:2,5:c,38:4,48:n},t(i,[2,3],{6:7}),{39:8,49:[1,9]},{49:[2,49]},{1:[2,1]},{4:31,7:[1,10],8:11,9:[1,12],10:13,11:[1,14],12:23,13:r,14:h,15:d,16:W,17:F,18:ct,19:R,20:V,21:q,22:K,23:B,24:w,25:ft,26:ht,27:kt,28:yt,29:mt,31:gt,33:pt,34:vt,35:29,36:y,38:4,43:T,48:n},{40:40,41:[1,41],51:p},t([41,51],[2,50]),t(i,[2,8],{1:[2,2]}),t(i,[2,4]),{4:31,10:43,12:23,13:r,14:h,15:d,16:W,17:F,18:ct,19:R,20:V,21:q,22:K,23:B,24:w,25:ft,26:ht,27:kt,28:yt,29:mt,31:gt,33:pt,34:vt,35:29,36:y,38:4,43:T,48:n},t(i,[2,6]),t(i,[2,7]),t(i,[2,16]),t(i,[2,17]),t(i,[2,18]),t(i,[2,19]),t(i,[2,20]),t(i,[2,21]),t(i,[2,22]),t(i,[2,23]),t(i,[2,24]),t(i,[2,25]),{30:[1,44]},{32:[1,45]},t(i,[2,28]),t(i,[2,29]),t(i,[2,30]),{37:[1,46]},t(i,[2,32]),t(i,[2,9]),t(i,[2,10]),t(i,[2,11]),t(i,[2,12]),t(i,[2,13]),t(i,[2,14]),t(i,[2,15]),{44:[1,47],46:[1,48]},{11:[1,49]},{42:50,50:[1,51]},{11:[2,52]},t(i,[2,5]),t(i,[2,26]),t(i,[2,27]),t(i,[2,31]),t(i,[2,35],{45:[1,52],46:[1,53]}),t(i,[2,41],{44:[1,54]}),t(g,[2,33]),{40:55,51:p},{51:[2,51]},t(i,[2,36],{46:[1,56]}),t(i,[2,37]),t(i,[2,39],{45:[1,57]}),{11:[1,58]},t(i,[2,38]),t(i,[2,40]),t(g,[2,34])],defaultActions:{5:[2,49],6:[2,1],42:[2,52],51:[2,51]},parseError:function(o,l){if(l.recoverable)this.trace(o);else{var f=new Error(o);throw f.hash=l,f}},parse:function(o){var l=this,f=[0],u=[],a=[null],e=[],E=this.table,s="",v=0,L=0,C=2,bt=1,Pt=e.slice.call(arguments,1),I=Object.create(this.lexer),G={yy:{}};for(var Vt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,Vt)&&(G.yy[Vt]=this.yy[Vt]);I.setInput(o,G.yy),G.yy.lexer=I,G.yy.parser=this,typeof I.yylloc=="undefined"&&(I.yylloc={});var Bt=I.yylloc;e.push(Bt);var Ye=I.options&&I.options.ranges;typeof G.yy.parseError=="function"?this.parseError=G.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Re(){var j;return j=u.pop()||I.lex()||bt,typeof j!="number"&&(j instanceof Array&&(u=j,j=u.pop()),j=l.symbols_[j]||j),j}for(var M,Q,Y,Yt,et={},Tt,U,$t,xt;;){if(Q=f[f.length-1],this.defaultActions[Q]?Y=this.defaultActions[Q]:((M===null||typeof M=="undefined")&&(M=Re()),Y=E[Q]&&E[Q][M]),typeof Y=="undefined"||!Y.length||!Y[0]){var Rt="";xt=[];for(Tt in E[Q])this.terminals_[Tt]&&Tt>C&&xt.push("'"+this.terminals_[Tt]+"'");I.showPosition?Rt="Parse error on line "+(v+1)+`:
`+I.showPosition()+`
Expecting `+xt.join(", ")+", got '"+(this.terminals_[M]||M)+"'":Rt="Parse error on line "+(v+1)+": Unexpected "+(M==bt?"end of input":"'"+(this.terminals_[M]||M)+"'"),this.parseError(Rt,{text:I.match,token:this.terminals_[M]||M,line:I.yylineno,loc:Bt,expected:xt})}if(Y[0]instanceof Array&&Y.length>1)throw new Error("Parse Error: multiple actions possible at state: "+Q+", token: "+M);switch(Y[0]){case 1:f.push(M),a.push(I.yytext),e.push(I.yylloc),f.push(Y[1]),M=null,L=I.yyleng,s=I.yytext,v=I.yylineno,Bt=I.yylloc;break;case 2:if(U=this.productions_[Y[1]][1],et.$=a[a.length-U],et._$={first_line:e[e.length-(U||1)].first_line,last_line:e[e.length-1].last_line,first_column:e[e.length-(U||1)].first_column,last_column:e[e.length-1].last_column},Ye&&(et._$.range=[e[e.length-(U||1)].range[0],e[e.length-1].range[1]]),Yt=this.performAction.apply(et,[s,L,v,G.yy,Y[1],a,e].concat(Pt)),typeof Yt!="undefined")return Yt;U&&(f=f.slice(0,-1*U*2),a=a.slice(0,-1*U),e=e.slice(0,-1*U)),f.push(this.productions_[Y[1]][0]),a.push(et.$),e.push(et._$),$t=E[f[f.length-2]][f[f.length-1]],f.push($t);break;case 3:return!0}}return!0}},D=function(){var x={EOF:1,parseError:function(l,f){if(this.yy.parser)this.yy.parser.parseError(l,f);else throw new Error(l)},setInput:function(o,l){return this.yy=l||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var o=this._input[0];this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o;var l=o.match(/(?:\r\n?|\n).*/g);return l?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},unput:function(o){var l=o.length,f=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-l),this.offset-=l;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),f.length-1&&(this.yylineno-=f.length-1);var a=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:f?(f.length===u.length?this.yylloc.first_column:0)+u[u.length-f.length].length-f[0].length:this.yylloc.first_column-l},this.options.ranges&&(this.yylloc.range=[a[0],a[0]+this.yyleng-l]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(o){this.unput(this.match.slice(o))},pastInput:function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var o=this.pastInput(),l=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+l+"^"},test_match:function(o,l){var f,u,a;if(this.options.backtrack_lexer&&(a={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(a.yylloc.range=this.yylloc.range.slice(0))),u=o[0].match(/(?:\r\n?|\n).*/g),u&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],f=this.performAction.call(this,this.yy,this,l,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),f)return f;if(this._backtrack){for(var e in a)this[e]=a[e];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,l,f,u;this._more||(this.yytext="",this.match="");for(var a=this._currentRules(),e=0;e<a.length;e++)if(f=this._input.match(this.rules[a[e]]),f&&(!l||f[0].length>l[0].length)){if(l=f,u=e,this.options.backtrack_lexer){if(o=this.test_match(f,a[e]),o!==!1)return o;if(this._backtrack){l=!1;continue}else return!1}else if(!this.options.flex)break}return l?(o=this.test_match(l,a[u]),o!==!1?o:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var l=this.next();return l||this.lex()},begin:function(l){this.conditionStack.push(l)},popState:function(){var l=this.conditionStack.length-1;return l>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(l){return l=this.conditionStack.length-1-Math.abs(l||0),l>=0?this.conditionStack[l]:"INITIAL"},pushState:function(l){this.begin(l)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(l,f,u,a){switch(u){case 0:return this.begin("open_directive"),48;case 1:return this.begin("type_directive"),49;case 2:return this.popState(),this.begin("arg_directive"),41;case 3:return this.popState(),this.popState(),51;case 4:return 50;case 5:return this.begin("acc_title"),29;case 6:return this.popState(),"acc_title_value";case 7:return this.begin("acc_descr"),31;case 8:return this.popState(),"acc_descr_value";case 9:this.begin("acc_descr_multiline");break;case 10:this.popState();break;case 11:return"acc_descr_multiline_value";case 12:break;case 13:break;case 14:break;case 15:return 11;case 16:break;case 17:break;case 18:break;case 19:this.begin("href");break;case 20:this.popState();break;case 21:return 46;case 22:this.begin("callbackname");break;case 23:this.popState();break;case 24:this.popState(),this.begin("callbackargs");break;case 25:return 44;case 26:this.popState();break;case 27:return 45;case 28:this.begin("click");break;case 29:this.popState();break;case 30:return 43;case 31:return 5;case 32:return 20;case 33:return 21;case 34:return 22;case 35:return 23;case 36:return 24;case 37:return 26;case 38:return 25;case 39:return 27;case 40:return 13;case 41:return 14;case 42:return 15;case 43:return 16;case 44:return 17;case 45:return 18;case 46:return 19;case 47:return"date";case 48:return 28;case 49:return"accDescription";case 50:return 34;case 51:return 36;case 52:return 37;case 53:return 41;case 54:return 7;case 55:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[10,11],inclusive:!1},acc_descr:{rules:[8],inclusive:!1},acc_title:{rules:[6],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},callbackargs:{rules:[26,27],inclusive:!1},callbackname:{rules:[23,24,25],inclusive:!1},href:{rules:[20,21],inclusive:!1},click:{rules:[29,30],inclusive:!1},INITIAL:{rules:[0,5,7,9,12,13,14,15,16,17,18,19,22,28,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55],inclusive:!0}}};return x}();k.lexer=D;function _(){this.yy={}}return _.prototype=k,k.Parser=_,new _}();z.parser=z;const it=z;A.extend(ot),A.extend(Z),A.extend(wt);let P="",st="",Et,Dt="",nt=[],rt=[],Ct={},St=[],lt=[],J="",It="";const Nt=["active","done","crit","milestone"];let At=[],at=!1,Lt=!1,Ft="sunday",Mt=0;const te=function(t,c,n){b.m.parseDirective(this,t,c,n)},ee=function(){St=[],lt=[],J="",At=[],ut=0,Wt=void 0,dt=void 0,S=[],P="",st="",It="",Et=void 0,Dt="",nt=[],rt=[],at=!1,Lt=!1,Mt=0,Ct={},(0,b.v)(),Ft="sunday"},ie=function(t){st=t},se=function(){return st},ne=function(t){Et=t},re=function(){return Et},ae=function(t){Dt=t},ce=function(){return Dt},oe=function(t){P=t},le=function(){at=!0},ue=function(){return at},de=function(){Lt=!0},fe=function(){return Lt},he=function(t){It=t},ke=function(){return It},ye=function(){return P},me=function(t){nt=t.toLowerCase().split(/[\s,]+/)},ge=function(){return nt},pe=function(t){rt=t.toLowerCase().split(/[\s,]+/)},ve=function(){return rt},be=function(){return Ct},Te=function(t){J=t,St.push(t)},xe=function(){return St},_e=function(){let t=qt();const c=10;let n=0;for(;!t&&n<c;)t=qt(),n++;return lt=S,lt},Ut=function(t,c,n,i){return i.includes(t.format(c.trim()))?!1:t.isoWeekday()>=6&&n.includes("weekends")||n.includes(t.format("dddd").toLowerCase())?!0:n.includes(t.format(c.trim()))},we=function(t){Ft=t},Ee=function(){return Ft},jt=function(t,c,n,i){if(!n.length||t.manualEndTime)return;let r;t.startTime instanceof Date?r=A(t.startTime):r=A(t.startTime,c,!0),r=r.add(1,"d");let h;t.endTime instanceof Date?h=A(t.endTime):h=A(t.endTime,c,!0);const[d,W]=De(r,h,c,n,i);t.endTime=d.toDate(),t.renderEndTime=W},De=function(t,c,n,i,r){let h=!1,d=null;for(;t<=c;)h||(d=c.toDate()),h=Ut(t,n,i,r),h&&(c=c.add(1,"d")),t=t.add(1,"d");return[c,d]},Ot=function(t,c,n){n=n.trim();const r=/^after\s+([\d\w- ]+)/.exec(n.trim());if(r!==null){let d=null;if(r[1].split(" ").forEach(function(W){let F=tt(W);F!==void 0&&(d?F.endTime>d.endTime&&(d=F):d=F)}),d)return d.endTime;{const W=new Date;return W.setHours(0,0,0,0),W}}let h=A(n,c.trim(),!0);if(h.isValid())return h.toDate();{b.l.debug("Invalid date:"+n),b.l.debug("With date format:"+c.trim());const d=new Date(n);if(d===void 0||isNaN(d.getTime())||d.getFullYear()<-1e4||d.getFullYear()>1e4)throw new Error("Invalid date:"+n);return d}},Kt=function(t){const c=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return c!==null?[Number.parseFloat(c[1]),c[2]]:[NaN,"ms"]},Xt=function(t,c,n,i=!1){n=n.trim();let r=A(n,c.trim(),!0);if(r.isValid())return i&&(r=r.add(1,"d")),r.toDate();let h=A(t);const[d,W]=Kt(n);if(!Number.isNaN(d)){const F=h.add(d,W);F.isValid()&&(h=F)}return h.toDate()};let ut=0;const $=function(t){return t===void 0?(ut=ut+1,"task"+ut):t},Ce=function(t,c){let n;c.substr(0,1)===":"?n=c.substr(1,c.length):n=c;const i=n.split(","),r={};Ht(i,r,Nt);for(let d=0;d<i.length;d++)i[d]=i[d].trim();let h="";switch(i.length){case 1:r.id=$(),r.startTime=t.endTime,h=i[0];break;case 2:r.id=$(),r.startTime=Ot(void 0,P,i[0]),h=i[1];break;case 3:r.id=$(i[0]),r.startTime=Ot(void 0,P,i[1]),h=i[2];break}return h&&(r.endTime=Xt(r.startTime,P,h,at),r.manualEndTime=A(h,"YYYY-MM-DD",!0).isValid(),jt(r,P,rt,nt)),r},Se=function(t,c){let n;c.substr(0,1)===":"?n=c.substr(1,c.length):n=c;const i=n.split(","),r={};Ht(i,r,Nt);for(let h=0;h<i.length;h++)i[h]=i[h].trim();switch(i.length){case 1:r.id=$(),r.startTime={type:"prevTaskEnd",id:t},r.endTime={data:i[0]};break;case 2:r.id=$(),r.startTime={type:"getStartDate",startData:i[0]},r.endTime={data:i[1]};break;case 3:r.id=$(i[0]),r.startTime={type:"getStartDate",startData:i[1]},r.endTime={data:i[2]};break}return r};let Wt,dt,S=[];const Zt={},Ie=function(t,c){const n={section:J,type:J,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:c},task:t,classes:[]},i=Se(dt,c);n.raw.startTime=i.startTime,n.raw.endTime=i.endTime,n.id=i.id,n.prevTaskId=dt,n.active=i.active,n.done=i.done,n.crit=i.crit,n.milestone=i.milestone,n.order=Mt,Mt++;const r=S.push(n);dt=n.id,Zt[n.id]=r-1},tt=function(t){const c=Zt[t];return S[c]},Ae=function(t,c){const n={section:J,type:J,description:t,task:t,classes:[]},i=Ce(Wt,c);n.startTime=i.startTime,n.endTime=i.endTime,n.id=i.id,n.active=i.active,n.done=i.done,n.crit=i.crit,n.milestone=i.milestone,Wt=n,lt.push(n)},qt=function(){const t=function(n){const i=S[n];let r="";switch(S[n].raw.startTime.type){case"prevTaskEnd":{const h=tt(i.prevTaskId);i.startTime=h.endTime;break}case"getStartDate":r=Ot(void 0,P,S[n].raw.startTime.startData),r&&(S[n].startTime=r);break}return S[n].startTime&&(S[n].endTime=Xt(S[n].startTime,P,S[n].raw.endTime.data,at),S[n].endTime&&(S[n].processed=!0,S[n].manualEndTime=A(S[n].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),jt(S[n],P,rt,nt))),S[n].processed};let c=!0;for(const[n,i]of S.entries())t(n),c=c&&i.processed;return c},Le=function(t,c){let n=c;(0,b.c)().securityLevel!=="loose"&&(n=(0,_t.Nm)(c)),t.split(",").forEach(function(i){tt(i)!==void 0&&(Qt(i,()=>{window.open(n,"_self")}),Ct[i]=n)}),Gt(t,"clickable")},Gt=function(t,c){t.split(",").forEach(function(n){let i=tt(n);i!==void 0&&i.classes.push(c)})},Fe=function(t,c,n){if((0,b.c)().securityLevel!=="loose"||c===void 0)return;let i=[];if(typeof n=="string"){i=n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let h=0;h<i.length;h++){let d=i[h].trim();d.charAt(0)==='"'&&d.charAt(d.length-1)==='"'&&(d=d.substr(1,d.length-2)),i[h]=d}}i.length===0&&i.push(t),tt(t)!==void 0&&Qt(t,()=>{b.u.runFunc(c,...i)})},Qt=function(t,c){At.push(function(){const n=document.querySelector(`[id="${t}"]`);n!==null&&n.addEventListener("click",function(){c()})},function(){const n=document.querySelector(`[id="${t}-text"]`);n!==null&&n.addEventListener("click",function(){c()})})},Me=function(t,c,n){t.split(",").forEach(function(i){Fe(i,c,n)}),Gt(t,"clickable")},Oe=function(t){At.forEach(function(c){c(t)})},We={parseDirective:te,getConfig:()=>(0,b.c)().gantt,clear:ee,setDateFormat:oe,getDateFormat:ye,enableInclusiveEndDates:le,endDatesAreInclusive:ue,enableTopAxis:de,topAxisEnabled:fe,setAxisFormat:ie,getAxisFormat:se,setTickInterval:ne,getTickInterval:re,setTodayMarker:ae,getTodayMarker:ce,setAccTitle:b.s,getAccTitle:b.g,setDiagramTitle:b.r,getDiagramTitle:b.t,setDisplayMode:he,getDisplayMode:ke,setAccDescription:b.b,getAccDescription:b.a,addSection:Te,getSections:xe,getTasks:_e,addTask:Ie,findTaskById:tt,addTaskOrg:Ae,setIncludes:me,getIncludes:ge,setExcludes:pe,getExcludes:ve,setClickEvent:Me,setLink:Le,getLinks:be,bindFunctions:Oe,parseDuration:Kt,isInvalidDate:Ut,setWeekday:we,getWeekday:Ee};function Ht(t,c,n){let i=!0;for(;i;)i=!1,n.forEach(function(r){const h="^\\s*"+r+"\\s*$",d=new RegExp(h);t[0].match(d)&&(c[r]=!0,t.shift(1),i=!0)})}const Pe=function(){b.l.debug("Something is calling, setConf, remove the call")},Jt={monday:m.Ox9,tuesday:m.YDX,wednesday:m.EFj,thursday:m.Igq,friday:m.y2j,saturday:m.LqH,sunday:m.Zyz},Ve=(t,c)=>{let n=[...t].map(()=>-1/0),i=[...t].sort((h,d)=>h.startTime-d.startTime||h.order-d.order),r=0;for(const h of i)for(let d=0;d<n.length;d++)if(h.startTime>=n[d]){n[d]=h.endTime,h.order=d+c,d>r&&(r=d);break}return r};let N;const Be={parser:it,db:We,renderer:{setConf:Pe,draw:function(t,c,n,i){const r=(0,b.c)().gantt,h=(0,b.c)().securityLevel;let d;h==="sandbox"&&(d=(0,m.Ys)("#i"+c));const W=h==="sandbox"?(0,m.Ys)(d.nodes()[0].contentDocument.body):(0,m.Ys)("body"),F=h==="sandbox"?d.nodes()[0].contentDocument:document,ct=F.getElementById(c);N=ct.parentElement.offsetWidth,N===void 0&&(N=1200),r.useWidth!==void 0&&(N=r.useWidth);const R=i.db.getTasks();let V=[];for(const y of R)V.push(y.type);V=vt(V);const q={};let K=2*r.topPadding;if(i.db.getDisplayMode()==="compact"||r.displayMode==="compact"){const y={};for(const p of R)y[p.section]===void 0?y[p.section]=[p]:y[p.section].push(p);let T=0;for(const p of Object.keys(y)){const g=Ve(y[p],T)+1;T+=g,K+=g*(r.barHeight+r.barGap),q[p]=g}}else{K+=R.length*(r.barHeight+r.barGap);for(const y of V)q[y]=R.filter(T=>T.type===y).length}ct.setAttribute("viewBox","0 0 "+N+" "+K);const B=W.select(`[id="${c}"]`),w=(0,m.Xf)().domain([(0,m.VV$)(R,function(y){return y.startTime}),(0,m.Fp7)(R,function(y){return y.endTime})]).rangeRound([0,N-r.leftPadding-r.rightPadding]);function ft(y,T){const p=y.startTime,g=T.startTime;let k=0;return p>g?k=1:p<g&&(k=-1),k}R.sort(ft),ht(R,N,K),(0,b.i)(B,K,N,r.useMaxWidth),B.append("text").text(i.db.getDiagramTitle()).attr("x",N/2).attr("y",r.titleTopMargin).attr("class","titleText");function ht(y,T,p){const g=r.barHeight,k=g+r.barGap,D=r.topPadding,_=r.leftPadding,x=(0,m.BYU)().domain([0,V.length]).range(["#00B9FA","#F95002"]).interpolate(m.JHv);yt(k,D,_,T,p,y,i.db.getExcludes(),i.db.getIncludes()),mt(_,D,T,p),kt(y,k,D,_,g,x,T),gt(k,D),pt(_,D,T,p)}function kt(y,T,p,g,k,D,_){const o=[...new Set(y.map(a=>a.order))].map(a=>y.find(e=>e.order===a));B.append("g").selectAll("rect").data(o).enter().append("rect").attr("x",0).attr("y",function(a,e){return e=a.order,e*T+p-2}).attr("width",function(){return _-r.rightPadding/2}).attr("height",T).attr("class",function(a){for(const[e,E]of V.entries())if(a.type===E)return"section section"+e%r.numberSectionStyles;return"section section0"});const l=B.append("g").selectAll("rect").data(y).enter(),f=i.db.getLinks();if(l.append("rect").attr("id",function(a){return a.id}).attr("rx",3).attr("ry",3).attr("x",function(a){return a.milestone?w(a.startTime)+g+.5*(w(a.endTime)-w(a.startTime))-.5*k:w(a.startTime)+g}).attr("y",function(a,e){return e=a.order,e*T+p}).attr("width",function(a){return a.milestone?k:w(a.renderEndTime||a.endTime)-w(a.startTime)}).attr("height",k).attr("transform-origin",function(a,e){return e=a.order,(w(a.startTime)+g+.5*(w(a.endTime)-w(a.startTime))).toString()+"px "+(e*T+p+.5*k).toString()+"px"}).attr("class",function(a){const e="task";let E="";a.classes.length>0&&(E=a.classes.join(" "));let s=0;for(const[L,C]of V.entries())a.type===C&&(s=L%r.numberSectionStyles);let v="";return a.active?a.crit?v+=" activeCrit":v=" active":a.done?a.crit?v=" doneCrit":v=" done":a.crit&&(v+=" crit"),v.length===0&&(v=" task"),a.milestone&&(v=" milestone "+v),v+=s,v+=" "+E,e+v}),l.append("text").attr("id",function(a){return a.id+"-text"}).text(function(a){return a.task}).attr("font-size",r.fontSize).attr("x",function(a){let e=w(a.startTime),E=w(a.renderEndTime||a.endTime);a.milestone&&(e+=.5*(w(a.endTime)-w(a.startTime))-.5*k),a.milestone&&(E=e+k);const s=this.getBBox().width;return s>E-e?E+s+1.5*r.leftPadding>_?e+g-5:E+g+5:(E-e)/2+e+g}).attr("y",function(a,e){return e=a.order,e*T+r.barHeight/2+(r.fontSize/2-2)+p}).attr("text-height",k).attr("class",function(a){const e=w(a.startTime);let E=w(a.endTime);a.milestone&&(E=e+k);const s=this.getBBox().width;let v="";a.classes.length>0&&(v=a.classes.join(" "));let L=0;for(const[bt,Pt]of V.entries())a.type===Pt&&(L=bt%r.numberSectionStyles);let C="";return a.active&&(a.crit?C="activeCritText"+L:C="activeText"+L),a.done?a.crit?C=C+" doneCritText"+L:C=C+" doneText"+L:a.crit&&(C=C+" critText"+L),a.milestone&&(C+=" milestoneText"),s>E-e?E+s+1.5*r.leftPadding>_?v+" taskTextOutsideLeft taskTextOutside"+L+" "+C:v+" taskTextOutsideRight taskTextOutside"+L+" "+C+" width-"+s:v+" taskText taskText"+L+" "+C+" width-"+s}),(0,b.c)().securityLevel==="sandbox"){let a;a=(0,m.Ys)("#i"+c);const e=a.nodes()[0].contentDocument;l.filter(function(E){return f[E.id]!==void 0}).each(function(E){var s=e.querySelector("#"+E.id),v=e.querySelector("#"+E.id+"-text");const L=s.parentNode;var C=e.createElement("a");C.setAttribute("xlink:href",f[E.id]),C.setAttribute("target","_top"),L.appendChild(C),C.appendChild(s),C.appendChild(v)})}}function yt(y,T,p,g,k,D,_,x){const o=D.reduce((s,{startTime:v})=>s?Math.min(s,v):v,0),l=D.reduce((s,{endTime:v})=>s?Math.max(s,v):v,0),f=i.db.getDateFormat();if(!o||!l)return;const u=[];let a=null,e=A(o);for(;e.valueOf()<=l;)i.db.isInvalidDate(e,f,_,x)?a?a.end=e:a={start:e,end:e}:a&&(u.push(a),a=null),e=e.add(1,"d");B.append("g").selectAll("rect").data(u).enter().append("rect").attr("id",function(s){return"exclude-"+s.start.format("YYYY-MM-DD")}).attr("x",function(s){return w(s.start)+p}).attr("y",r.gridLineStartPadding).attr("width",function(s){const v=s.end.add(1,"day");return w(v)-w(s.start)}).attr("height",k-T-r.gridLineStartPadding).attr("transform-origin",function(s,v){return(w(s.start)+p+.5*(w(s.end)-w(s.start))).toString()+"px "+(v*y+.5*k).toString()+"px"}).attr("class","exclude-range")}function mt(y,T,p,g){let k=(0,m.LLu)(w).tickSize(-g+T+r.gridLineStartPadding).tickFormat((0,m.i$Z)(i.db.getAxisFormat()||r.axisFormat||"%Y-%m-%d"));const _=/^([1-9]\d*)(minute|hour|day|week|month)$/.exec(i.db.getTickInterval()||r.tickInterval);if(_!==null){const x=_[1],o=_[2],l=i.db.getWeekday()||r.weekday;switch(o){case"minute":k.ticks(m.Z_i.every(x));break;case"hour":k.ticks(m.WQD.every(x));break;case"day":k.ticks(m.rr1.every(x));break;case"week":k.ticks(Jt[l].every(x));break;case"month":k.ticks(m.F0B.every(x));break}}if(B.append("g").attr("class","grid").attr("transform","translate("+y+", "+(g-50)+")").call(k).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),i.db.topAxisEnabled()||r.topAxis){let x=(0,m.F5q)(w).tickSize(-g+T+r.gridLineStartPadding).tickFormat((0,m.i$Z)(i.db.getAxisFormat()||r.axisFormat||"%Y-%m-%d"));if(_!==null){const o=_[1],l=_[2],f=i.db.getWeekday()||r.weekday;switch(l){case"minute":x.ticks(m.Z_i.every(o));break;case"hour":x.ticks(m.WQD.every(o));break;case"day":x.ticks(m.rr1.every(o));break;case"week":x.ticks(Jt[f].every(o));break;case"month":x.ticks(m.F0B.every(o));break}}B.append("g").attr("class","grid").attr("transform","translate("+y+", "+T+")").call(x).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}function gt(y,T){let p=0;const g=Object.keys(q).map(k=>[k,q[k]]);B.append("g").selectAll("text").data(g).enter().append(function(k){const D=k[0].split(b.e.lineBreakRegex),_=-(D.length-1)/2,x=F.createElementNS("http://www.w3.org/2000/svg","text");x.setAttribute("dy",_+"em");for(const[o,l]of D.entries()){const f=F.createElementNS("http://www.w3.org/2000/svg","tspan");f.setAttribute("alignment-baseline","central"),f.setAttribute("x","10"),o>0&&f.setAttribute("dy","1em"),f.textContent=l,x.appendChild(f)}return x}).attr("x",10).attr("y",function(k,D){if(D>0)for(let _=0;_<D;_++)return p+=g[D-1][1],k[1]*y/2+p*y+T;else return k[1]*y/2+T}).attr("font-size",r.sectionFontSize).attr("class",function(k){for(const[D,_]of V.entries())if(k[0]===_)return"sectionTitle sectionTitle"+D%r.numberSectionStyles;return"sectionTitle"})}function pt(y,T,p,g){const k=i.db.getTodayMarker();if(k==="off")return;const D=B.append("g").attr("class","today"),_=new Date,x=D.append("line");x.attr("x1",w(_)+y).attr("x2",w(_)+y).attr("y1",r.titleTopMargin).attr("y2",g-r.titleTopMargin).attr("class","today"),k!==""&&x.attr("style",k.replace(/,/g,";"))}function vt(y){const T={},p=[];for(let g=0,k=y.length;g<k;++g)Object.prototype.hasOwnProperty.call(T,y[g])||(T[y[g]]=!0,p.push(y[g]));return p}}},styles:t=>`
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
