webpackJsonp([1],{"+ZAU":function(t,e){},"+drZ":function(t,e){},0:function(t,e,n){n("j1ja"),t.exports=n("NHnr")},"4/4i":function(t,e){},"9n10":function(t,e){},"9ymZ":function(t,e){},C5s3:function(t,e,n){t.exports=n.p+"static/img/nezha.e55cde6.png"},Fs8J:function(t,e){},GKNs:function(t,e){},Hhiq:function(t,e){},M6Sr:function(t,e){},MWOX:function(t,e,n){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"home"}},[e("p",[this._v("Home组件")]),this._v(" "),e("router-view"),this._v(" "),e("ul",{staticClass:"menu"},[e("li",[e("router-link",{attrs:{to:"/home/list"}},[this._v("笔记列表")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:{name:"homeuser"}}},[this._v("个人中心")])],1)])],1)},staticRenderFns:[]};e.a=s},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),a=n("NYxO");s.a.use(a.a);var o=new a.a.Store({state:{count:0,click_item_num:0,status:!1,list:[],note_username:"",note_password:""},mutations:{upp:function(){o.state.count++},clearAll:function(){o.state.count=0,o.state.list=[],o.state.click_item_num=0,localStorage.clear(),console.log(o.state.list)},register1:function(t,e){o.state.note_username=e.regname,o.state.note_password=e.regpass},changeStatus:function(t){t.status=!t.status},addItem:function(t,e){""===e.note_title||""===e.note_content?alert("请补全内容"):(t.list.unshift(e),console.log(t.list))},updateItem:function(t,e){t.list[t.click_item_num]=e,console.log(t.list)}},actions:{}}),i=o,r=n("/ocq"),l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"helloworld"}},[n("p",[t._v("helloworld组件")]),t._v(" "),n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var u=n("VU/8")({name:"HelloWorld组件",data:function(){return{msg:"Welcome to Your Vue.js App"}}},l,!1,function(t){n("TVe/")},"data-v-0c586f84",null).exports;function c(t){var e=t;return null==e||e.length<6?(alert("不能为空，且至少6位！"),!1):new RegExp(/^[0-9A-Za-z]+$/).test(e)?!!new RegExp(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/).test(e)||(alert("需要 同时包含字母和数字！"),!1):(alert("不能 含有特殊符号！"),!1)}var m={name:"login组件",data:function(){return{isReg:null,reg_username:null,reg_password:null,username:null,password:null}},created:function(){return""===i.state.note_username||""===i.state.note_password?this.isReg=!0:this.isReg=!1,this.isReg},methods:{register:function(){c(this.reg_username)&&c(this.reg_password)&&(i.commit("register1",{regname:this.reg_username,regpass:this.reg_password}),this.isReg=!1)},login:function(){c(this.username)&&c(this.password)&&(i.state.note_username===this.username&&i.state.note_password===this.password?(i.commit("changeStatus"),this.$router.push("/home/list")):alert("用户名或密码有误"))}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isReg?n("div",{attrs:{id:"register"}},[n("div",{staticClass:"account-login"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.reg_username,expression:"reg_username"}],attrs:{id:"username-reg",type:"text",name:"",placeholder:"用户名"},domProps:{value:t.reg_username},on:{input:function(e){e.target.composing||(t.reg_username=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.reg_password,expression:"reg_password"}],attrs:{id:"password-reg",type:"text",name:"",placeholder:"密码"},domProps:{value:t.reg_password},on:{input:function(e){e.target.composing||(t.reg_password=e.target.value)}}}),t._v(" "),n("p",{staticClass:"tips"},[t._v("提示：须同时包含字母和数字，无特殊符号，且至少6位")])]),t._v(" "),n("p",{staticClass:"add-list-item"},[n("button",{on:{click:t.register}},[t._v("注册")])])]):n("div",{attrs:{id:"login"}},[n("p",[t._v("login组件")]),t._v(" "),n("div",{staticClass:"account-login"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{id:"username",type:"text",name:"",placeholder:"用户名"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{id:"password",type:"text",name:"",placeholder:"密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),n("p",{staticClass:"tips"},[t._v("提示：须同时包含字母和数字，无特殊符号，且至少6位")])]),t._v(" "),n("p",{staticClass:"add-list-item"},[n("button",{on:{click:t.login}},[t._v("登录")])])])])},staticRenderFns:[]};var v=n("VU/8")(m,d,!1,function(t){n("syBV")},"data-v-e0916234",null).exports,p=n("lO7g");var _={name:"add组件",data:function(){return{note_title:"",note_content:""}},methods:{submitNote:function(){var t,e,n,s,a;i.commit("addItem",{note_title:this.note_title,note_content:this.note_content,note_time:(t=new Date,e=t.getMonth()+1,n=t.getDate(),s=t.getHours(),a=t.getMinutes(),e>=1&&e<=9&&(e="0"+e),n>=0&&n<=9&&(n="0"+n),s<=9&&(s="0"+s),a<=9&&(a="0"+a),t.getFullYear().toString()+"-"+e+"-"+n+" "+s+":"+a)})}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"add"}},[n("p",[t._v("Add组件")]),t._v(" "),n("p",{staticClass:"back"},[n("span",{staticClass:"back-btn",on:{click:function(e){return t.$router.back()}}},[t._v("👈")])]),t._v(" "),n("div",[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.note_title,expression:"note_title"}],attrs:{id:"note-title",type:"text",name:"",placeholder:"请输入标题"},domProps:{value:t.note_title},on:{input:function(e){e.target.composing||(t.note_title=e.target.value)}}})]),t._v(" "),n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note_content,expression:"note_content"}],attrs:{id:"note-content",name:"",placeholder:"请输入内容"},domProps:{value:t.note_content},on:{input:function(e){e.target.composing||(t.note_content=e.target.value)}}})]),t._v(" "),n("p",{staticClass:"add-list-item"},[n("button",{on:{click:t.submitNote}},[t._v("提交")])])])])},staticRenderFns:[]};var g=n("VU/8")(_,h,!1,function(t){n("Hhiq")},"data-v-5928e281",null).exports;var f={name:"update组件",data:function(){return{note_title:i.state.list[i.state.click_item_num].note_title,note_content:i.state.list[i.state.click_item_num].note_content,note_time:i.state.list[i.state.click_item_num].note_time}},methods:{submitNote:function(){var t,e,n,s,a;window.confirm("是否要保存为 最新时间？")?this.note_time=(t=new Date,e=t.getMonth()+1,n=t.getDate(),s=t.getHours(),a=t.getMinutes(),e>=1&&e<=9&&(e="0"+e),n>=0&&n<=9&&(n="0"+n),s<=9&&(s="0"+s),a<=9&&(a="0"+a),t.getFullYear().toString()+"-"+e+"-"+n+" "+s+":"+a):alert("再见啦！"),i.commit("updateItem",{note_title:this.note_title,note_content:this.note_content,note_time:this.note_time})}}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"update"}},[n("p",[t._v("Update组件")]),t._v(" "),n("p",{staticClass:"back"},[n("span",{staticClass:"back-btn",on:{click:function(e){return t.$router.back()}}},[t._v("👈")])]),t._v(" "),n("div",[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.note_title,expression:"note_title"}],attrs:{id:"note-title",type:"text",name:"",placeholder:"请输入标题"},domProps:{value:t.note_title},on:{input:function(e){e.target.composing||(t.note_title=e.target.value)}}})]),t._v(" "),n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note_content,expression:"note_content"}],attrs:{id:"note-content",name:"",placeholder:"请输入内容"},domProps:{value:t.note_content},on:{input:function(e){e.target.composing||(t.note_content=e.target.value)}}})]),t._v(" "),n("p",{staticClass:"add-list-item"},[n("button",{on:{click:t.submitNote}},[t._v("保存修改")])])])])},staticRenderFns:[]};var b=n("VU/8")(f,w,!1,function(t){n("9ymZ")},"data-v-31087fda",null).exports,k={name:"HomeList组件",data:function(){return{current:-1,last:null,oo:!1}},computed:{pageList:function(){return i.state.list}},methods:{clickItem:function(){i.state.click_item_index=this.indexber,this.$router.push("/update")},deleteItem:function(t){window.confirm("删除该条目？")&&(i.state.list.splice(t,1),alert("已删除该条目"),this.current=-1),console.log(i.state.list)},leftMove:function(t){if(this.last===t){if(this.oo=!this.oo,this.oo)return this.current=-1,!1;this.current=t,this.last=t}this.current=t,this.last=t}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home-list"}},[n("p",[t._v("HomeList组件")]),t._v(" "),n("ul",{staticClass:"list"},t._l(t.pageList,function(e,s){return n("v-touch",{key:s,class:["list-item",{"left-move":s===t.current}],attrs:{tag:"li",oo:s},on:{press:function(e){return t.leftMove(s)}}},[n("div",{staticClass:"list-item-left"},[n("p",[t._v(t._s(e.note_title))]),t._v(" "),n("p",[n("span",{staticClass:"note-time"},[t._v(t._s(e.note_time))]),t._v(" "),n("span",{staticClass:"more-content",on:{click:t.clickItem}},[t._v("»")])])]),t._v(" "),n("div",{staticClass:"list-item-right"},[n("p",{on:{click:function(e){return t.deleteItem(s)}}},[t._v("删除")])])])}),1),t._v(" "),n("p",{staticClass:"add-list-item"},[n("router-link",{attrs:{to:"/add"}},[t._v("添加笔记")])],1)])},staticRenderFns:[]};var C=n("VU/8")(k,x,!1,function(t){n("4/4i")},"data-v-375f9b22",null).exports,$={name:"home组件",data:function(){return{msg:i.state.count}},methods:{deleteAll:function(){i.commit("clearAll")},quit:function(){i.commit("changeStatus"),this.$router.push("/")}}},S={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"home-user"}},[s("p",[t._v("HomeUser组件")]),t._v(" "),s("img",{attrs:{src:n("C5s3")}}),t._v(" "),s("p",[t._v("切换组件后，组建之中的数据会及时更新")]),t._v(" "),s("p",[t._v(t._s(t.msg))]),t._v(" "),s("p",{staticClass:"add-list-item"},[s("button",{on:{click:t.deleteAll}},[t._v("先清除store，再清除localS")]),t._v(" "),s("button",{on:{click:t.quit}},[t._v("退出登录")])])])},staticRenderFns:[]};var E=n("VU/8")($,S,!1,function(t){n("+ZAU")},"data-v-8d7ce8b4",null).exports,A={data:function(){return{info:0}},methods:{add:function(){console.log(this.info++),this.$store.commit("upp"),i.commit("upp")}}},N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"about"}},[e("p",[this._v(this._s(this.info))]),this._v(" "),e("button",{on:{click:this.add}},[this._v("点击")])])},staticRenderFns:[]};var R=n("VU/8")(A,N,!1,function(t){n("wUx/")},"data-v-5b8a2ff9",null).exports,y=new s.a;s.a.component("c1",{template:"<div>{{msg}}</div>",data:function(){return{msg:"Hello World!"}},created:function(){var t=this;y.$on("setMsg",function(e){t.msg=e})}}),s.a.component("c2",{template:'<button @click="sendEvent">Say Hi</button>',methods:{sendEvent:function(){y.$emit("setMsg","Hi Vue!")}}});var U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("c1"),this._v(" "),e("c2")],1)},staticRenderFns:[]},V=n("VU/8")({},U,!1,null,null,null).exports;s.a.use(r.a);var F=new r.a({routes:[{path:"/",component:v,meta:{requiresAuth:!0}},{path:"/home",redirect:"/home/list",component:p.default,children:[{path:"list",component:C,meta:{requiresAuth:!0}},{path:"user",name:"homeuser",component:E,meta:{requiresAuth:!0}}]},{path:"/hello",component:u},{path:"/about",name:"ab",component:R},{path:"/bus",component:V},{path:"/add",component:g,meta:{requiresAuth:!0}},{path:"/update",component:b,meta:{requiresAuth:!0}}]}),H=(n("9n10"),n("M6Sr"),n("mvHQ")),I=n.n(H),M=n("woOf"),j=n.n(M),q=n("I95x"),P=n.n(q),Z={name:"app组件",created:function(){var t=this;window.Storage&&window.localStorage&&window.localStorage instanceof Storage?(localStorage.getItem("store")&&this.$store.replaceState(j()({},this.$store.state,JSON.parse(localStorage.getItem("store")))),setInterval(function(){localStorage.setItem("store",I()(t.$store.state)),console.log("saved")},1e4),window.addEventListener("beforeunload",function(){localStorage.setItem("store",I()(t.$store.state))})):alert("您的浏览器 不支持localStorage，将会影响使用！")},methods:{full:function(){P.a.toggle()}}},O={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("h1",[this._v("Cecile'Note😏")]),this._v(" "),e("p",[this._v("App组件")]),this._v(" "),e("div",{on:{click:this.full}},[this._v("adhahsdhk")]),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var D=n("VU/8")(Z,O,!1,function(t){n("+drZ")},null,null).exports;s.a.config.productionTip=!1;var L=n("I0MY");L.registerCustomEvent("doubletap",{type:"tap",taps:2}),s.a.use(L,{name:"v-touch"}),new s.a({el:"#app",router:F,store:i,components:{App:D},template:"<App/>"}),F.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.requiresAuth})?i.state.status||"/"===t.path?i.state.status&&"/"===t.path?(n("/home/list"),console.log("22"+i.state.status+t.path)):(console.log("33"+i.state.status+t.path),n()):(n("/"),console.log("11"+i.state.status)):(console.log("44"),n())})},"TVe/":function(t,e){},lO7g:function(t,e,n){"use strict";var s=n("Fs8J"),a=n.n(s),o=n("MWOX");var i=function(t){n("GKNs")},r=n("VU/8")(a.a,o.a,!1,i,"data-v-5b9a5d44",null);e.default=r.exports},syBV:function(t,e){},"wUx/":function(t,e){}},[0]);
//# sourceMappingURL=app.6408a9c21d4acf28eb86.js.map