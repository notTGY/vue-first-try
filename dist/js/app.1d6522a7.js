(function(t){function e(e){for(var i,s,c=e[0],r=e[1],l=e[2],d=0,p=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,c=1;c<n.length;c++){var r=n[c];0!==o[r]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},o={app:0},a=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"16ce":function(t,e,n){},"1a6c":function(t,e,n){"use strict";n("16ce")},2267:function(t,e,n){},"28f1":function(t,e,n){"use strict";n("2267")},"2c69":function(t,e,n){"use strict";n("7c24")},3389:function(t,e,n){},"4eb2":function(t,e,n){},"56a3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar",{attrs:{toggleSidebar:t.updateS,setMainWindow:t.setMainWindow}}),n("div",{staticClass:"vertical-align"},[n("Sidebar",{attrs:{shown:this.shown,setMainWindow:t.setMainWindow}}),n("MainWindow",{attrs:{state:t.mainWindowState,api_url:this.API_URL}})],1)],1)},a=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"navbarContainer"},[i("span",{staticClass:"name",on:{click:t.toggleSidebar}},[t._v(" Bug Tracker ")]),i("div",[i("button",{staticClass:"my_button",on:{click:t.clickHandler}},[t._v(" Sign up/Sign in ")]),i("img",{attrs:{alt:"Vue logo",src:n("cf05")}})])])},c=[],r={props:{toggleSidebar:Function,setMainWindow:Function},name:"Navbar",methods:{clickHandler:function(){this.setMainWindow("sign in")}}},l=r,u=(n("67a3"),n("2877")),d=Object(u["a"])(l,s,c,!1,null,"4add8385",null),p=d.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.shown?n("div",{staticClass:"sidebar"},[n("button",{staticClass:"sidebar-element",on:{click:t.myTicketsClickHandler}},[t._v(" My tickets ")]),n("button",{staticClass:"sidebar-element",on:{click:t.sendNewTicketClickHandler}},[t._v(" Send new ticket ")])]):t._e()},f=[],v={props:{shown:Boolean,setMainWindow:Function},name:"Sidebar",methods:{myTicketsClickHandler:function(){this.setMainWindow("my tickets")},myCompanyTicketsClickHandler:function(){this.setMainWindow("my company tickets")},sendNewTicketClickHandler:function(){this.setMainWindow("send new ticket")}}},h=v,k=(n("28f1"),Object(u["a"])(h,m,f,!1,null,"97e87562",null)),g=k.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mainWindowContainer"},["home"===t.state?n("HomeWindow",{attrs:{api_url:this.api_url}}):"my tickets"===t.state?n("MyTicketsWindow",{attrs:{api_url:this.api_url}}):"my company tickets"===t.state?n("MyCompanyTicketsWindow",{attrs:{api_url:this.api_url}}):"send new ticket"===t.state?n("SendNewTicketWindow",{attrs:{api_url:this.api_url}}):"sign in"===t.state?n("SignInWindow",{attrs:{api_url:this.api_url}}):t._e()],1)},_=[],b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Home page")]),n("p",[t._v(" Log in to app to use it to send each other tickets! ")]),n("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")])])}],S={props:{api_url:String},name:"HomeWindow"},x=S,W=Object(u["a"])(x,b,y,!1,null,"776fa101",null),T=W.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("My tickets")]),t.tickets.message?n("div",[n("span",[t._v(t._s(t.tickets.message))])]):this.loaded?n("div",t._l(t.tickets,(function(t,e){return n("div",{key:e},[n("Ticket",{attrs:{ticketData:t}})],1)})),0):n("Loading")],1)},M=[],j=(n("99af"),n("d3b7"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"top"},[n("span",[t._v("type: "+t._s(this.ticketData.type))]),n("span",[t._v("To: "+t._s(this.ticketData.email_to))]),n("span",[t._v("From: "+t._s(this.ticketData.email))])]),n("div",{staticClass:"top-middle"},[t._v(" Files: "+t._s(this.ticketData.filenames)+" ")]),n("div",{staticClass:"middle"},[t._v(" "+t._s(this.ticketData.text)+" ")]),n("div",{staticClass:"bottom"},[this.ticketData.isYours?n("div",[n("button",{on:{click:t.removeTicket}},[t._v("Remove ticket")]),n("button",{on:{click:t.sendBackTicket}},[t._v("Send back ticket")])]):t._e(),n("div",[n("button",{on:{click:t.sendBackTicket}},[t._v("Send back ticket")])])])])}),O=[],D={props:{ticketData:Object},name:"Ticket",methods:{removeTicket:function(){console.log("fine")},sendBackTicket:function(){console.log("fine")}},mounted:function(){console.log(this.ticketData)}},P=D,N=(n("2c69"),Object(u["a"])(P,j,O,!1,null,"560ed35a",null)),$=N.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lds-hourglass"})},I=[],H={name:"Loading"},L=H,F=(n("66c3"),Object(u["a"])(L,E,I,!1,null,"51f30669",null)),U=F.exports,R={props:{api_url:String},data:function(){return{tickets:[],loaded:!1}},mounted:function(){var t=this,e=window.localStorage.getItem("token");fetch("".concat(this.api_url,"/tickets?token=").concat(e)).then((function(t){return t.json()})).then((function(e){t.tickets=e,t.loaded=!0}))},name:"MyTicketsWindow",components:{Ticket:$,Loading:U}},q=R,B=(n("1a6c"),Object(u["a"])(q,C,M,!1,null,"4b916ec2",null)),A=B.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("My company tickets")]),this.loaded?n("div",t._l(t.tickets,(function(t){return n("div",{key:t._id},[n("Ticket",{attrs:{ticketData:t}})],1)})),0):n("Loading")],1)},Y=[],G={props:{api_url:String},data:function(){return{tickets:[],loaded:!1}},mounted:function(){var t=this,e=window.localStorage.getItem("token");fetch("".concat(this.api_url,"/tickets?token=").concat(e),{mode:"no-cors"}).then((function(t){return t.json()})).then((function(e){t.tickets=e,t.loaded=!0}))},name:"MyCompanyTicketsWindow",components:{Ticket:$,Loading:U}},V=G,z=Object(u["a"])(V,J,Y,!1,null,"4d645f62",null),K=z.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Send new ticket")]),n("form",{staticClass:"ticketForm",on:{submit:function(e){return e.preventDefault(),t.addTicket(e)}}},[n("div",{staticClass:"row"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.ticket.filenames,expression:"ticket.filenames"}],attrs:{type:"text"},domProps:{value:t.ticket.filenames},on:{input:function(e){e.target.composing||t.$set(t.ticket,"filenames",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.ticket.type,expression:"ticket.type"}],attrs:{type:"text"},domProps:{value:t.ticket.type},on:{input:function(e){e.target.composing||t.$set(t.ticket,"type",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.ticket.email_to,expression:"ticket.email_to"}],attrs:{type:"text"},domProps:{value:t.ticket.email_to},on:{input:function(e){e.target.composing||t.$set(t.ticket,"email_to",e.target.value)}}})]),n("div",{staticClass:"row"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.ticket.text,expression:"ticket.text"}],attrs:{rows:"3"},domProps:{value:t.ticket.text},on:{input:function(e){e.target.composing||t.$set(t.ticket,"text",e.target.value)}}}),n("button",{attrs:{type:"submit"}},[t._v(" Add ticket ")])])])])},X=[],Z={props:{api_url:String},data:function(){return{ticket:{mail:"",text:"text",type:"type",filenames:"filenames",email_to:"email to"}}},name:"SendNewTicketWindow",methods:{addTicket:function(){var t=window.localStorage.getItem("token"),e=this.ticket;e.token=t,fetch("".concat(this.api_url,"/tickets?token=").concat(t),{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"}}).catch((function(t){console.error(t)})),this.ticket.filenames="filenames",this.ticket.text="text",this.ticket.type="type",this.ticket.email_to="email to"}}},tt=Z,et=(n("ea19"),Object(u["a"])(tt,Q,X,!1,null,"659b00c3",null)),nt=et.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Sign in page")]),this.areWeDone?n("div",[n("h2",[t._v("You are successfully logged in!")])]):n("div",[n("div",{staticClass:"selector"},[n("button",{on:{click:t.showSignIn}},[t._v("Log in")]),n("button",{on:{click:t.showSignUp}},[t._v("Register")])]),"sign in"===this.whatWeDo?n("div",[n("form",{staticClass:"signInForm",on:{submit:function(e){return e.preventDefault(),t.signIn(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("button",{attrs:{type:"submit"}},[t._v("Log in")])])]):t._e(),"sign up"===this.whatWeDo?n("div",[n("form",{staticClass:"signUpForm",on:{submit:function(e){return e.preventDefault(),t.signUp(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("button",{attrs:{type:"submit"}},[t._v("Register")])])]):t._e()])])},ot=[],at={props:{api_url:String},name:"SignInWindow",data:function(){return{email:"",password:"",token:"",whatWeDo:"sign in",areWeDone:!1}},methods:{signIn:function(){var t=this;fetch("".concat(this.api_url,"/users?email=").concat(this.email,"&password=").concat(this.password)).then((function(t){return t.json()})).then((function(e){window.localStorage.setItem("token",e),t.areWeDone=!0}))},showSignIn:function(){this.whatWeDo="sign in"},showSignUp:function(){this.whatWeDo="sign up"},signUp:function(){var t=this;fetch("".concat(this.api_url,"/usersReg?email=").concat(this.email,"&password=").concat(this.password),{method:"GET",mode:"no-cors"}).then((function(t){return t.json()})).then((function(e){t.token=e,t.setToken(t.token)}))}}},st=at,ct=(n("fd49"),Object(u["a"])(st,it,ot,!1,null,"0720a4ea",null)),rt=ct.exports,lt={props:{state:String,api_url:String},name:"MainWindow",components:{HomeWindow:T,MyTicketsWindow:A,MyCompanyTicketsWindow:K,SendNewTicketWindow:nt,SignInWindow:rt}},ut=lt,dt=(n("b014"),Object(u["a"])(ut,w,_,!1,null,null,null)),pt=dt.exports,mt={name:"App",data:function(){return{shown:!1,mainWindowState:"home",API_URL:"https://cors-anywhere.herokuapp.com/https://hello-wo.herokuapp.com/api"}},components:{Navbar:p,Sidebar:g,MainWindow:pt},methods:{updateS:function(){this.shown=!this.shown},setMainWindow:function(t){this.mainWindowState=t,console.log(t)}}},ft=mt,vt=(n("034f"),Object(u["a"])(ft,o,a,!1,null,null,null)),ht=vt.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(ht)}}).$mount("#app")},"66c3":function(t,e,n){"use strict";n("4eb2")},"67a3":function(t,e,n){"use strict";n("56a3")},"7c24":function(t,e,n){},"85ec":function(t,e,n){},b014:function(t,e,n){"use strict";n("3389")},bd3a:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d17e:function(t,e,n){},ea19:function(t,e,n){"use strict";n("d17e")},fd49:function(t,e,n){"use strict";n("bd3a")}});
//# sourceMappingURL=app.1d6522a7.js.map