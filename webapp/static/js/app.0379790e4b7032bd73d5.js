webpackJsonp([1],{"0+TE":function(t,e){},"2hMI":function(t,e,n){"use strict";var s=function(t){return""+t};e.a={userOwner:"/v3/admin/userOwner",routeList:"/v6/admin/index/menuTree",menuList:s("/wec-cpdaily-admin-frame/menu/list"),userInfo:s("/wec-cpdaily-admin-frame/user/info")}},"4kzw":function(t,e){},Cda8:function(t,e){},EuEE:function(t,e,n){"use strict";var s=n("3cXf"),i=n.n(s),o=function(t){if(!t||"0"!==t.code&&0!==t.code){if("1201"===t.code)return t;throw t}return t};function r(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n+"="+t[n]);return e}axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",axios.interceptors.response.use(function(t){if(t&&t.data&&"1201"===t.data.code&&"unauthorized"===t.data.message){var e=window.location.href;return window.location.href=e.substring(0,e.lastIndexOf("#")+2)+"login",t}return t}),e.a={httpGet:function(t,e,n){var s={};return e&&!0===e.noCredentials&&(s.noCredentials=!0),axios.get(t,s).then(function(t){return n&&"function"==typeof n?n(t.data):t.data})},httpGetQuery:function(t,e,n,s){var i={};n&&!0===n.noCredentials&&(i.noCredentials=!0);var o=r(e);return o.length>0&&(t+="?"+o.join("&")),axios.get(t,i).then(function(t){return s&&"function"==typeof s?s(t.data):t.data})},httpPost:function(t,e,n){return axios.post(t,e,{withCredentials:!0}).then(function(t){return n&&"function"==typeof n?n(t.data):t.data}).catch(function(t){throw console.error("-- AXIOS POST 异常 START --"),t.response?(console.log(t.response.data),console.log(t.response.status),console.log(t.response.headers)):console.log("error",t.message),console.log("请求配置："),console.log(t.config),console.error("-- AXIOS POST 异常 END --"),t})},httpPostQuery:function(t,e,n,s){var i=r(e);return i.length>0&&(t+="?"+i.join("&")),axios.post(t,n,{}).then(function(t){return s&&"function"==typeof s?s(t.data):t.data}).catch(function(t){throw console.error("-- AXIOS POST 异常 START --"),t.response?(console.log(t.response.data),console.log(t.response.status),console.log(t.response.headers)):console.log("error",t.message),console.log("请求配置："),console.log(t.config),console.error("-- AXIOS POST 异常 END --"),t})},errorHandle:function(t){var e=$.extend(!0,{},t);throw e.message=t.message,sessionStorage.setItem("error",i()(e)),location.href=location.href.replace(/\/\w*$/,"/error"),t},getQueryParam:function(t){var e;return location.search.replace(/\?/g,"").split("&").forEach(function(n){if(n&&"string"==typeof n){var s=n.split("=");s.length>1&&s[0]===t&&(e=s[1])}}),e},getAllQueryParams:function(){var t={};return location.search.replace(/\?/g,"").split("&").forEach(function(e){if(e&&"string"==typeof e){var n=e.split("=");n.length>0&&(t[n[0]]=n[1])}}),t},handler:{CODE:o,ROWS:function(t){return(t=o(t))&&t.datas&&t.datas.rows?t.datas.rows:[]},DATAS:function(t){return(t=o(t))&&void 0!==t.datas?t.datas:[]},FIRST_ROW:function(t){return(t=o(t))&&t.datas&&t.datas.rows?t.datas.rows[0]:null}},log:function(t){console.log(t)}}},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-main",attrs:{id:"main"}},[e("router-view")],1)},staticRenderFns:[]};var i=n("C7Lr")({},s,!1,function(t){n("obdL")},null,null).exports,o=n("4YfN"),r=n.n(o),a=n("EuEE"),l=n("2hMI"),c={data:function(){return{}},computed:r()({},Vuex.mapState({index:function(t){return t.index}})),mounted:function(){console.log(location.href,"hello")},methods:{initQRCode:function(){this.$route.path;var t={id:"qrcode",clientId:"10000000000000007",self_redirect:!1,redirectUri:window.location.origin+l.a.login,topRedirect:!0};cpdailyLogin(t)},loginSucc:function(){this.$router.push("/manage")},freshWin:function(){window.location.href=window.location.origin+l.a.logout}}},u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrap",staticStyle:{"background-image":"url('static/login-bg.png')"}},[e("div",{staticClass:"qrcode-box"},[e("div",{staticClass:"slogan"},[e("img",{attrs:{src:"static/login-logo.png",alt:""}})]),this._v(" "),e("div",[e("span",{staticClass:"top"},[this._v("请使用今日校园")]),this._v(" "),e("span",{staticClass:"top"},[this._v('首页右上方 "扫一扫" 登录')]),this._v(" "),e("div",{staticClass:"qrcode",attrs:{id:"qrcode"}})])])])}]};var h=n("C7Lr")(c,u,!1,function(t){n("4kzw")},"data-v-6763d939",null).exports,f={name:"notfound",data:function(){return{time:5,timer:null,fromPath:""}},beforeRouteEnter:function(t,e,n){n(function(t){return t.$nextTick(function(){t.fromPath=e.path})})},created:function(){this.setIntervalTime()},methods:{setIntervalTime:function(){var t=this;t.timer=setInterval(function(){t.time>0?t.time--:t.goBack()},1e3)},goBack:function(){clearInterval(this.timer),this.$router.replace(this.fromPath)}},computed:{},beforeDestroy:function(){clearInterval(this.timer)}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{background:"#f0f2f5",height:"100%"}},[n("div",{staticClass:"wscn-http404"},[n("div",{staticClass:"bullshit"},[t._m(0),t._v(" "),n("div",{staticClass:"bullshit__404"},[t._v("404")]),t._v(" "),n("div",{staticClass:"bullshit__info"},[t._v("您访问的页面不存在, 请检查您输入的网址是否正确")]),t._v(" "),n("div",{staticClass:"bullshit__info"},[t._v(t._s(t.time)+" 秒后返回上一页 "),n("Button",{staticClass:"bullshit__return-home",attrs:{type:"text",replace:""},on:{click:t.goBack}},[t._v("立即返回")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bullshit__headline"},[e("img",{attrs:{src:"http://next.wisedu.com:8013/uag/error/img/404.png"}})])}]};var m=n("C7Lr")(f,d,!1,function(t){n("kZ+b")},"data-v-333b84f1",null).exports,p=new VueRouter({routes:[{path:"/login",name:"login",component:h},{path:"/",redirect:"/login"}]}),g=[{path:"/manage",name:"manage",component:n("eYrN").default,meta:{requiresAuth:!0,title:"后台管理"},children:[]},{path:"*",component:m}],v=n("9rMa"),y={state:{menuTheme:"dark"},mutations:{}},w={state:{},mutations:{}},_=n("3cXf"),S=n.n(_),x=n("TVG1");var k={state:{userToken:"",menuList:[],router:[]},getters:{},mutations:{updateState:function(t,e){t.menuList=e},updateRoute:function(t,e){t.router=e},Login:function(t,e){""===e?x.a.delCookie("adminSessionToken"):x.a.setCookie("adminSessionToken",e),t.userToken=e}},actions:{setMenuList:function(t){a.a.httpGet(l.a.routeList,{},{}).then(function(e){if(e&&"0"==e.code){var s=function(t){var e=[];return[].concat(JSON.parse(S()(t))).map(function(t,n){var s={name:t.menuId,title:t.menuName,icon:"ios-settings",children:[]};t.subMenus.map(function(t,e){s.children.push({name:t.menuId,title:t.menuName,icon:"ios-paper",path:t.menuUrl})}),e.push(s)}),e}(e.datas);t.commit("updateState",s);var i=g.find(function(t){return"/manage"===t.path}),o=i.children.concat((r=e.datas,a=[],r.map(function(t,e){t.subMenus.length<=0?a.push({path:"/manage/"+t.menuId,name:t.menuId,meta:{title:t.menuName,path:t.menuUrl},component:n("PLF0").default}):t.subMenus.map(function(t,e){a.push({path:"/manage/"+t.menuId,name:t.menuId,meta:{title:t.menuName,path:t.menuUrl},component:n("PLF0").default})})}),a));i.children=o,p.addRoutes(g),t.commit("updateRoute",g)}else t.commit("Login","");var r,a}).catch(function(e){p.addRoutes(g),t.commit("Login","")})}}};Vue.use(v.a);var O=new v.a.Store({state:{},mutations:{},actions:{},modules:{app:y,user:w,menu:k}});Vue.config.productionTip=!1,p.beforeEach(function(t,e,n){t.meta.title&&(document.title=t.meta.title),O.state.menu.menuList.length<=0&&O.dispatch("setMenuList"),n()}),new Vue({el:"#app",router:p,store:O,components:{App:i},template:"<App/>"})},PLF0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={components:{},data:function(){return{src:"",isLoading:!1}},computed:{},watch:{$route:function(t,e){this.src=t.meta.path}},updated:function(){this.isLoading=!0},created:function(){this.src=this.$route.meta.path,this.isLoading=!0},methods:{onload:function(){this.isLoading=!1;window.addEventListener("message",function(t){})}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%"}},[t.isLoading?n("div",{key:"loading",staticClass:"demo-spin-col"},[n("Spin",{attrs:{fix:"",size:"large"}},[n("Icon",{staticClass:"demo-spin-icon-load",attrs:{type:"ios-loading",size:"30"}}),t._v(" "),n("div",[t._v("Loading")])],1)],1):t._e(),t._v(" "),n("transition-group",{attrs:{name:"taglist-moving-animation",mode:"out-in"}},[n("iframe",{key:t.src,staticStyle:{border:"0",width:"100%",height:"100%"},attrs:{src:t.src},on:{load:t.onload}})])],1)},staticRenderFns:[]};var o=n("C7Lr")(s,i,!1,function(t){n("0+TE")},"data-v-9cde750a",null);e.default=o.exports},TVG1:function(t,e,n){"use strict";function s(t){var e,n=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return(e=document.cookie.match(n))?unescape(e[2]):""}e.a={getCookie:s,setCookie:function(t,e){var n=new Date;n.setTime(n.getTime()+2592e6),document.cookie=t+"="+escape(e)+";expires="+n.toGMTString()},delCookie:function(t){var e=new Date;e.setTime(e.getTime()-1);var n=s(t);null!=n&&(document.cookie=t+"="+n+";expires="+e.toGMTString())},inOf:function(t,e){var n=!0;return t.forEach(function(t){e.indexOf(t)<0&&(n=!1)}),n},oneOf:function(t,e){return e.indexOf(t)>=0}}},eYrN:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("hRKE"),i=n.n(s),o={name:"sidebarMenu",props:{menuList:Array,iconSize:Number,menuTheme:{type:String,default:"dark"},openNames:{type:Array}},methods:{changeMenu:function(t){this.$emit("on-change",t)},itemTitle:function(t){return"object"===i()(t.title)?this.$t(t.title.i18n):t.title}},updated:function(){var t=this;this.$nextTick(function(){t.$refs.sideMenu&&t.$refs.sideMenu.updateOpened()})}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Menu",{ref:"sideMenu",attrs:{accordion:"","active-name":t.$route.name,"open-names":t.openNames,theme:t.menuTheme,width:"auto",z:""},on:{"on-select":t.changeMenu}},[t._l(t.menuList,function(e){return[e.children.length<=0?n("MenuItem",{key:"menuitem"+e.name,attrs:{name:e.name}},[n("Icon",{key:"menuicon"+e.name,attrs:{type:e.icon||e.icon,size:t.iconSize}}),t._v(" "),n("span",{key:"title"+e.name,staticClass:"layout-text"},[t._v(t._s(t.itemTitle(e)))])],1):t._e(),t._v(" "),e.children.length>0?n("Submenu",{key:e.name,attrs:{name:e.name}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:e.icon,size:t.iconSize}}),t._v(" "),n("span",{staticClass:"layout-text"},[t._v(t._s(t.itemTitle(e)))])],1),t._v(" "),t._l(e.children,function(e){return[n("MenuItem",{key:"menuitem"+e.name,attrs:{name:e.name}},[n("Icon",{key:"icon"+e.name,attrs:{type:e.icon,size:t.iconSize}}),t._v(" "),n("span",{key:"title"+e.name,staticClass:"layout-text"},[t._v(t._s(t.itemTitle(e)))])],1)]})],2):t._e()]})],2)},staticRenderFns:[]};var a=n("C7Lr")(o,r,!1,function(t){n("ui77")},null,null).exports,l={name:"sidebarMenuShrink",props:{menuList:{type:Array},iconColor:{type:String,default:"white"},menuTheme:{type:String,default:"darck"}},methods:{changeMenu:function(t){this.$emit("on-change",t)},itemTitle:function(t){return"object"===i()(t.title)?this.$t(t.title.i18n):t.title}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.menuList,function(e,s){return[n("div",{key:s,staticStyle:{"text-align":"center"}},[e.children.length>0?n("Dropdown",{key:s,attrs:{transfer:"",placement:"right-start"},on:{"on-click":t.changeMenu}},[n("Button",{staticStyle:{width:"70px","margin-left":"-5px",padding:"10px 0"},attrs:{type:"text",ghost:""}},[n("Icon",{attrs:{size:20,color:t.iconColor,type:e.icon}}),t._v(" "),n("Icon",{staticStyle:{position:"absolute",top:"50%",transform:"translateY(-50%)"},attrs:{color:t.iconColor,type:"ios-arrow-forward"}})],1),t._v(" "),n("DropdownMenu",{staticStyle:{width:"200px"},attrs:{slot:"list"},slot:"list"},[t._l(e.children,function(e,s){return[n("DropdownItem",{key:s,attrs:{name:e.name}},[n("Icon",{attrs:{type:e.icon}}),t._v(" "),n("span",{staticStyle:{"padding-left":"10px"}},[t._v(t._s(t.itemTitle(e)))])],1)]})],2)],1):n("Dropdown",{key:s,attrs:{transfer:"",placement:"right-start"},on:{"on-click":t.changeMenu}},[n("Button",{staticStyle:{width:"70px","margin-left":"-5px",padding:"10px 0"},attrs:{type:"text",ghost:""},on:{click:function(n){t.changeMenu(e.name)}}},[n("Icon",{attrs:{size:20,color:t.iconColor,type:e.icon}})],1),t._v(" "),n("DropdownMenu",{staticStyle:{width:"200px"},attrs:{slot:"list"},slot:"list"},[n("DropdownItem",{key:"d"+s,attrs:{name:e.name}},[n("Icon",{attrs:{type:e.icon}}),t._v(" "),n("span",{staticStyle:{"padding-left":"10px"}},[t._v(t._s(t.itemTitle(e)))])],1)],1)],1)],1)]})],2)},staticRenderFns:[]},u=n("C7Lr")(l,c,!1,null,null,null).exports,h=n("TVG1"),f={name:"shrinkableMenu",components:{sidebarMenu:a,sidebarMenuShrink:u},props:{shrink:{type:Boolean,default:!1},menuList:{type:Array,required:!0},theme:{type:String,default:"dark",validator:function(t){return h.a.oneOf(t,["dark","light"])}},beforePush:{type:Function},openNames:{type:Array}},computed:{bgColor:function(){return"dark"===this.theme?"#495060":"#fff"},shrinkIconColor:function(){return"dark"===this.theme?"#fff":"#495060"}},methods:{handleChange:function(t){var e=!0;void 0!==this.beforePush&&(this.beforePush(t)||(e=!1)),e&&this.$router.push({name:t}),this.$emit("on-change",t)}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ivu-shrinkable-menu",style:{background:t.bgColor}},[t._t("top"),t._v(" "),n("sidebar-menu",{directives:[{name:"show",rawName:"v-show",value:!t.shrink,expression:"!shrink"}],attrs:{"menu-theme":t.theme,"menu-list":t.menuList,"open-names":t.openNames},on:{"on-change":t.handleChange}}),t._v(" "),n("sidebar-menu-shrink",{directives:[{name:"show",rawName:"v-show",value:t.shrink,expression:"shrink"}],attrs:{"menu-theme":t.theme,"menu-list":t.menuList,"icon-color":t.shrinkIconColor},on:{"on-change":t.handleChange}})],2)},staticRenderFns:[]};var m=n("C7Lr")(f,d,!1,function(t){n("Cda8")},null,null).exports,p={name:"breadcrumbNav",props:{currentPath:Array},methods:{itemTitle:function(t){return"object"===i()(t.title)?this.$t(t.title.i18n):t.title}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Breadcrumb",t._l(t.currentPath,function(e){return n("BreadcrumbItem",{key:e.name,attrs:{href:e.path}},[t._v(t._s(t.itemTitle(e)))])}))},staticRenderFns:[]},v=n("C7Lr")(p,g,!1,null,null,null).exports,y=n("aA9S"),w=n.n(y),_={name:"scrollBar",props:{speed:{type:Number,default:20},scrollXStyle:{type:Object,default:function(){return{}}},disScrollX:{type:Boolean,default:!1},disScrollY:{type:Boolean,default:!1},scrollYStyle:{type:Object,default:function(){return{}}},scrollXType:{type:String,default:"cover"},scrollYType:{type:String,default:"cover"},showAll:{type:Boolean,default:!1}},data:function(){return{prefix:"vue-scroller-bars",scrollOffsetX:0,scrollOffsetY:0,contentSize:{width:0,height:0},wraperSize:{width:0,height:0},initY:0,initOffsetY:0,initX:0,initOffsetX:0}},computed:{wraperClasses:function(){return[this.prefix+"-wraper",this.showAll?"":"show-when-hover"]},contentStyles:function(){return{transform:"translate3d(-"+this.scrollOffsetX+"px, -"+this.scrollOffsetY+"px, 0px)",width:this.disScrollX?"100%":"auto",height:this.disScrollY?"100%":"auto"}},percentY:function(){return this.wraperSize.height/this.contentSize.height},scrollYStyles:function(){return w()(this.scrollYStyle,{height:this.percentX<1?"calc(100% - 14px)":"100%"})},scrollBarYHeight:function(){return this.percentY*(this.wraperSize.height-2)},scrollBarYStyles:function(){var t=this.scrollBarYHeight;return{transform:"translate3d(0px, "+this.scrollOffsetY*(t/this.wraperSize.height)+"px, 0px)",height:t+"px"}},scrollYClasses:function(){return[this.prefix+"-scroll",this.prefix+"-scroll-y","cover"===this.scrollYType?"scroll-y-cover":""]},gapY:function(){return this.contentSize.height-this.wraperSize.height},percentX:function(){return this.wraperSize.width/this.contentSize.width},scrollXStyles:function(){return w()(this.scrollXStyle,{width:this.percentY<1?"calc(100% - 14px)":"100%"})},scrollBarXWidth:function(){return this.percentX*(this.wraperSize.width-2)},scrollBarXStyles:function(){var t=this.scrollBarXWidth;return{transform:"translate3d("+this.scrollOffsetX*(t/this.wraperSize.width)+"px, 0px, 0px)",width:t+"px"}},scrollXClasses:function(){return[this.prefix+"-scroll",this.prefix+"-scroll-x","cover"===this.scrollXType?"scroll-x-cover":""]},gapX:function(){return this.contentSize.width-this.wraperSize.width}},methods:{resize:function(){var t=this;this.$nextTick(function(){var e=t.$refs.wraper.getBoundingClientRect(),n=t.$refs.content.getBoundingClientRect();t.contentSize={width:n.width,height:n.height};var s=e.width/n.width<1,i=e.height/n.height<1,o=s&&i?14:0;t.wraperSize={width:e.width-o,height:e.height-o},t.contentSize.height<=t.wraperSize.height&&(t.scrollOffsetY=0),e.bottom>n.bottom&&t.scrollOffsetY>0&&(t.scrollOffsetY+=n.bottom-e.bottom)})},handleMouseWheel:function(t){this.scrollOffsetY+=this.percentY<1?t.deltaY:0,this.scrollOffsetX+=this.percentX<1?t.deltaX:0,this.percentY<1&&(this.scrollOffsetY>=this.gapY?this.scrollOffsetY=Math.min(this.gapY,this.scrollOffsetY):this.scrollOffsetY<=0&&(this.scrollOffsetY=Math.max(this.scrollOffsetY,0))),this.percentX<1&&(this.scrollOffsetX>=this.gapX?this.scrollOffsetX=Math.min(this.gapX,this.scrollOffsetX):this.scrollOffsetX<=0&&(this.scrollOffsetX=Math.max(this.scrollOffsetX,0)))},handleDOMMouseWheel:function(t){this.scrollOffsetY+=16*t.detail,this.scrollOffsetY>=this.gapY?this.scrollOffsetY=Math.min(this.gapY,this.scrollOffsetY):this.scrollOffsetY<=0&&(this.scrollOffsetY=Math.max(this.scrollOffsetY,0))},handleMousemoveY:function(t){var e=t.pageY-this.initY;this.scrollOffsetY=this.initOffsetY+e/((this.wraperSize.height-2-this.scrollBarYHeight)/(this.contentSize.height-this.wraperSize.height)),this.scrollOffsetY>=this.gapY?this.scrollOffsetY=Math.min(this.gapY,this.scrollOffsetY):this.scrollOffsetY<=0&&(this.scrollOffsetY=Math.max(this.scrollOffsetY,0)),t.preventDefault()},handleMousedownScrollBarY:function(t){this.initY=t.pageY,this.initOffsetY=this.scrollOffsetY,document.addEventListener("mousemove",this.handleMousemoveY),document.addEventListener("mouseup",this.handleMouseup)},handleMousemoveX:function(t){var e=t.pageX-this.initX;this.scrollOffsetX=this.initOffsetX+e/((this.wraperSize.width-2-this.scrollBarXWidth)/(this.contentSize.width-this.wraperSize.width)),this.scrollOffsetX>=this.gapX?this.scrollOffsetX=Math.min(this.gapX,this.scrollOffsetX):this.scrollOffsetX<=0&&(this.scrollOffsetX=Math.max(this.scrollOffsetX,0)),t.preventDefault()},handleMousedownScrollBarX:function(t){this.initX=t.pageX,this.initOffsetX=this.scrollOffsetX,document.addEventListener("mousemove",this.handleMousemoveX),document.addEventListener("mouseup",this.handleMouseup)},handleMouseup:function(t){document.removeEventListener("mousemove",this.handleMousemoveY),document.removeEventListener("mousemove",this.handleMousemoveX),document.removeEventListener("mousemove",this.handleMouseup)}},mounted:function(){this.resize()}},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"wraper",class:t.wraperClasses,on:{DOMMouseScroll:t.handleDOMMouseWheel,mousewheel:t.handleMouseWheel}},[n("div",{ref:"content",class:t.prefix+"-content",style:t.contentStyles},[t._t("default")],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.percentY<1&&!t.disScrollY,expression:"percentY < 1 && !disScrollY"}],class:t.scrollYClasses,style:t.scrollYStyles},[n("div",{class:[t.prefix+"-scroll-bar",t.prefix+"-scroll-bar-y"],style:t.scrollBarYStyles,on:{mousedown:t.handleMousedownScrollBarY}})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.percentX<1&&!t.disScrollX,expression:"percentX < 1 && !disScrollX"}],class:t.scrollXClasses,style:t.scrollXStyles},[n("div",{class:[t.prefix+"-scroll-bar",t.prefix+"-scroll-bar-x"],style:t.scrollBarXStyles,on:{mousedown:t.handleMousedownScrollBarX}})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.percentX<1&&t.percentY<1,expression:"percentX < 1 && percentY < 1"}],class:t.prefix+"-place-holder"})])},staticRenderFns:[]};var x=n("C7Lr")(_,S,!1,function(t){n("fEyX")},null,null).exports,k=n("3cXf"),O=n.n(k),C=(n("IvJb"),{name:"tagsPageOpened",data:function(){return{currentPageName:this.$route.name,tagBodyLeft:0,refsTag:[],tagsCount:1}},props:{pageTagsList:Array,beforePush:{type:Function,default:function(t){return!0}}},computed:{title:function(){return this.$store.state.app.currentTitle},tagsList:function(){return this.$store.state.app.pageOpenedList}},methods:{itemTitle:function(t){return t.title},closePage:function(t,e){var n=this.$store.state.app.pageOpenedList,s=n[0];if(this.currentPageName===e){for(var i=n.length,o=1;o<i;o++)if(n[o].name===e){s=o<i-1?n[o+1]:n[o-1];break}}else{var r=t.target.parentNode.offsetWidth;this.tagBodyLeft=Math.min(this.tagBodyLeft+r,0)}this.$store.commit("removeTag",e),this.$store.commit("closePage",e),n=this.$store.state.app.pageOpenedList,localStorage.pageOpenedList=O()(n),this.currentPageName===e&&this.linkTo(s)},linkTo:function(t){var e={};e.name=t.name,t.argu&&(e.params=t.argu),t.query&&(e.query=t.query),this.beforePush(t)&&this.$router.push(e)},handlescroll:function(t){var e=t.type,n=0;"DOMMouseScroll"!==e&&"mousewheel"!==e||(n=t.wheelDelta?t.wheelDelta:40*-(t.detail||0));var s=0;n>0?s=Math.min(0,this.tagBodyLeft+n):this.$refs.scrollCon.offsetWidth-100<this.$refs.scrollBody.offsetWidth?s=this.tagBodyLeft<-(this.$refs.scrollBody.offsetWidth-this.$refs.scrollCon.offsetWidth+100)?this.tagBodyLeft:Math.max(this.tagBodyLeft+n,this.$refs.scrollCon.offsetWidth-this.$refs.scrollBody.offsetWidth-100):this.tagBodyLeft=0,this.tagBodyLeft=s},handleTagsOption:function(t){"clearAll"===t?(this.$store.commit("clearAllTags"),this.$router.push({name:"home_index"})):this.$store.commit("clearOtherTags",this),this.tagBodyLeft=0},moveToView:function(t){t.offsetLeft<-this.tagBodyLeft?this.tagBodyLeft=10-t.offsetLeft:t.offsetLeft+10>-this.tagBodyLeft&&t.offsetLeft+t.offsetWidth<-this.tagBodyLeft+this.$refs.scrollCon.offsetWidth-100?this.tagBodyLeft=Math.min(0,this.$refs.scrollCon.offsetWidth-100-t.offsetWidth-t.offsetLeft-20):this.tagBodyLeft=-(t.offsetLeft-(this.$refs.scrollCon.offsetWidth-100-t.offsetWidth)+20)}},mounted:function(){var t=this;this.refsTag=this.$refs.tagsPageOpened,setTimeout(function(){t.refsTag.forEach(function(e,n){if(t.$route.name===e.name){var s=t.refsTag[n].$el;t.moveToView(s)}})},1),this.tagsCount=this.tagsList.length},watch:{$route:function(t){var e=this;this.currentPageName=t.name,this.$nextTick(function(){e.refsTag.forEach(function(n,s){if(t.name===n.name){var i=e.refsTag[s].$el;e.moveToView(i)}})}),this.tagsCount=this.tagsList.length}}}),b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"scrollCon",staticClass:"tags-outer-scroll-con",on:{DOMMouseScroll:t.handlescroll,mousewheel:t.handlescroll}},[n("div",{staticClass:"close-all-tag-con"},[n("Dropdown",{attrs:{transfer:""},on:{"on-click":t.handleTagsOption}},[n("Button",{attrs:{size:"small",type:"primary"}},[t._v("\n                标签选项\n                "),n("Icon",{attrs:{type:"arrow-down-b"}})],1),t._v(" "),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[n("DropdownItem",{attrs:{name:"clearAll"}},[t._v("关闭所有")]),t._v(" "),n("DropdownItem",{attrs:{name:"clearOthers"}},[t._v("关闭其他")])],1)],1)],1),t._v(" "),n("div",{ref:"scrollBody",staticClass:"tags-inner-scroll-body",style:{left:t.tagBodyLeft+"px"}},[n("transition-group",{attrs:{name:"taglist-moving-animation"}},t._l(t.pageTagsList,function(e,s){return n("Tag",{key:e.name,ref:"tagsPageOpened",refInFor:!0,attrs:{type:"dot",name:e.name,closable:"home_index"!==e.name,color:e.children?e.children[0].name===t.currentPageName?"blue":"default":e.name===t.currentPageName?"blue":"default"},on:{"on-close":t.closePage},nativeOn:{click:function(n){t.linkTo(e)}}},[t._v(t._s(t.itemTitle(e)))])}))],1)])},staticRenderFns:[]};var L=n("C7Lr")(C,b,!1,function(t){n("yTs3")},null,null).exports,T=n("2hMI"),Y=n("EuEE"),M={components:{shrinkableMenu:m,breadcrumbNav:v,scrollBar:x,tagsPageOpened:L},data:function(){return{count:this.$store.state.menu.count,shrink:!1,userName:"",openedSubmenuArr:[this.$route.params.module],avatorPath:"",currentPath:[{title:"首页",path:"",name:"home"}],pageTagsList:[]}},computed:{menuTheme:function(){return this.$store.state.app.menuTheme},menuList:function(){return this.$store.state.menu.menuList}},methods:{toggleClick:function(){this.shrink=!this.shrink},handleSubmenuChange:function(t){this.$router.push({path:"/manage/"+t})},beforePush:function(t){return!1},scrollBarResize:function(){this.$refs.scrollBar.resize()},getMenuList:function(){this.$store.dispatch("setMenuList",this)},getUserInfo:function(){Y.a.httpPost(T.a.userInfo,{},{}).then(function(t){console.log(t)})},logout:function(t){h.a.delCookie("adminSessionToken"),this.$router.replace({path:"/login"})}},mounted:function(){window.addEventListener("resize",this.scrollBarResize)},created:function(){},dispatch:function(){window.removeEventListener("resize",this.scrollBarResize)}},X={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main",class:{"main-hide-text":t.shrink}},[n("div",{staticClass:"sidebar-menu-con",style:{width:t.shrink?"60px":"200px",overflow:t.shrink?"visible":"auto"}},[n("scroll-bar",{ref:"scrollBar"},[n("shrinkable-menu",{attrs:{shrink:t.shrink,theme:t.menuTheme,"before-push":t.beforePush,"open-names":t.openedSubmenuArr,"menu-list":t.menuList},on:{"on-change":t.handleSubmenuChange}},[n("div",{staticClass:"logo-con",attrs:{slot:"top"},slot:"top"},[n("img",{directives:[{name:"show",rawName:"v-show",value:!t.shrink,expression:"!shrink"}],key:"max-logo",attrs:{src:"static/logo.jpg"}}),t._v(" "),n("img",{directives:[{name:"show",rawName:"v-show",value:t.shrink,expression:"shrink"}],key:"min-logo",attrs:{src:"static/logo-min.jpg"}})])])],1)],1),t._v(" "),n("div",{staticClass:"main-header-con",style:{paddingLeft:t.shrink?"60px":"200px"}},[n("div",{staticClass:"main-header"},[n("div",{staticClass:"navicon-con"},[n("span",{style:{transform:"rotateZ("+(this.shrink?"-90":"0")+"deg)",display:"inline-block"},attrs:{type:"text"},on:{click:t.toggleClick}},[n("Icon",{attrs:{type:"ios-menu",size:"32"}})],1)]),t._v(" "),n("div",{staticClass:"header-middle-con"},[n("div",{staticClass:"main-breadcrumb"},[n("breadcrumb-nav",{attrs:{currentPath:t.currentPath}})],1)]),t._v(" "),n("div",{staticClass:"header-avator-con"},[n("div",{staticClass:"user-dropdown-menu-con"},[n("Row",{staticClass:"user-dropdown-innercon",attrs:{type:"flex",justify:"end",align:"middle"}},[n("span",{staticStyle:{margin:"0 10px"}},[t._v("李小泽")]),t._v(" "),n("Dropdown",{attrs:{trigger:"click"},on:{"on-click":t.logout}},[n("a",{staticStyle:{color:"#515a6e"},attrs:{href:"javascript:void(0)"}},[n("Avatar",{attrs:{icon:"ios-person"}}),t._v(" "),n("Icon",{attrs:{type:"md-arrow-dropdown"}})],1),t._v(" "),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[n("DropdownItem",{attrs:{name:"logout"}},[n("Icon",{attrs:{type:"ios-log-out"}}),t._v("\n                                    退出登录\n                                ")],1)],1)],1)],1)],1)])]),t._v(" "),t._e()]),t._v(" "),n("div",{staticClass:"single-page-con",style:{left:t.shrink?"60px":"200px"}},[n("div",{staticClass:"single-page"},[n("keep-alive",[n("router-view")],1)],1)])])},staticRenderFns:[]};var $=n("C7Lr")(M,X,!1,function(t){n("gJYP")},null,null);e.default=$.exports},fEyX:function(t,e){},gJYP:function(t,e){},"kZ+b":function(t,e){},obdL:function(t,e){},ui77:function(t,e){},yTs3:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0379790e4b7032bd73d5.js.map