(this.webpackJsonpmessenger=this.webpackJsonpmessenger||[]).push([[0],{36:function(e,t,a){e.exports=a(63)},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(25),o=a.n(r),u=(a(41),a(16)),i=a(4),s=(a(42),a(14)),l=(a(43),a(44),a(6)),m=a(8),E=a.n(m),d=a(17),f=a(11),p=a.n(f),S={USER_LOGIN_REQUEST:"USER_LOGIN_REQUEST",USER_LOGIN_SUCCESS:"USER_LOGIN_SUCCESS",USER_LOGIN_FAILURE:"USER_LOGIN_FAILURE",USER_LOGOUT:"USER_LOGOUT"},O={GET_REALTIMEUSERS:"GET_REALTIMEUSERS",GET_REALTIME_MESSAGES:"GET_REALTIMEMESSAGES"},b=a(3),h=function(e){var t=Object(l.c)((function(e){return e.auth})),a=Object(l.b)();return console.log("HOME"),c.a.createElement("header",{className:"header"},c.a.createElement("div",{style:{display:"flex"}},c.a.createElement("div",{className:"logo"},"Messenger"),t.authenticated?null:c.a.createElement("ul",{className:"leftMenu"},c.a.createElement("li",null,c.a.createElement(u.c,{to:"/login"},"Login")),c.a.createElement("li",null,c.a.createElement(u.c,{to:"/signup"},"Sign up")))),c.a.createElement("div",{style:{margin:"20px 0",color:"#fff",fontWeight:"bold"}},t.authenticated?"Hi ".concat(t.firstName," ").concat(t.lastName):""),c.a.createElement("ul",{className:"menu"},t.authenticated?c.a.createElement("li",null,c.a.createElement(u.b,{to:"#",onClick:function(){var e;a((e=t.uid,function(){var t=Object(d.a)(E.a.mark((function t(a){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"".concat(S.USER_LOGOUT_REQUEST)}),Object(f.firestore)().collection("users").doc(e).update({isOnline:!1}).then((function(){Object(f.auth)().signOut().then((function(){localStorage.clear(),a({type:"".concat(S.USER_LOGOUT,"_SUCCESS")})})).catch((function(e){console.log(e),a({type:"".concat(S.USER_LOGOUT,"_FAILURE"),payload:{error:e}})}))})).catch((function(e){console.log(e)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}},"Logout")):null))},g=function(e){return c.a.createElement("div",null,c.a.createElement(h,null),e.children)},v=function(e){var t=e.user,a=e.onClick;return c.a.createElement("div",{onClick:function(){return a(t)},className:"displayName"},c.a.createElement("div",{className:"displayPic"},c.a.createElement("img",{src:"https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg",alt:""})),c.a.createElement("div",{style:{display:"flex",flex:1,justifyContent:"space-between",margin:"0 10px"}},c.a.createElement("span",{style:{fontWeight:500}},t.firstName,t.lastName),c.a.createElement("span",{className:t.isOnline?"onlineStatus":"onlineStatus off"})))},_=function(e){var t,a=Object(l.b)(),r=Object(l.c)((function(e){return e.auth})),o=Object(l.c)((function(e){return e.user})),u=Object(n.useState)(!1),i=Object(s.a)(u,2),m=i[0],p=i[1],S=Object(n.useState)(""),h=Object(s.a)(S,2),_=h[0],j=h[1],U=Object(n.useState)(""),N=Object(s.a)(U,2),y=N[0],R=N[1],L=Object(n.useState)(null),I=Object(s.a)(L,2),w=I[0],G=I[1];Object(n.useEffect)((function(){var e;t=a((e=r.uid,function(){var t=Object(d.a)(E.a.mark((function t(a){var n,c;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"".concat(O.GET_REALTIMEUSERS,"_REQUEST")}),n=Object(f.firestore)(),c=n.collection("users").onSnapshot((function(t){var n=[];t.forEach((function(t){t.data().uid!==e&&n.push(t.data())})),a({type:"".concat(O.GET_REALTIMEUSERS,"_SUCCESS"),payload:{users:n}})})),t.abrupt("return",c);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())).then((function(e){return e})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){return function(){t.then((function(e){return e()})).catch((function(e){return console.log(e)}))}}),[]);var T=function(e){p(!0),j("".concat(e.firstName," ").concat(e.lastName)),G(e.uid),console.log(e),a(function(e){return function(){var t=Object(d.a)(E.a.mark((function t(a){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Object(f.firestore)().collection("conversations").where("user_uid_1","in",[e.uid_1,e.uid_2]).orderBy("createdAt","asc").onSnapshot((function(t){var n=[];t.forEach((function(t){(t.data().user_uid_1===e.uid_1&&t.data().user_uid_2===e.uid_2||t.data().user_uid_1===e.uid_2&&t.data().user_uid_2===e.uid_1)&&n.push(t.data())})),a({type:O.GET_REALTIMEMESSAGES,payload:{conversations:n}}),console.log(n)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}({uid_1:r.uid,uid_2:e.uid}))};return c.a.createElement(g,null,c.a.createElement("section",{className:"container"},c.a.createElement("div",{className:"listOfUsers"},o.users.length>0?o.users.map((function(e){return c.a.createElement(v,{onClick:T,key:e.uid,user:e})})):null),c.a.createElement("div",{className:"chatArea"},c.a.createElement("div",{className:"chatHeader"},m?_:""),c.a.createElement("div",{className:"messageSections"},m?o.conversations.map((function(e){return c.a.createElement("div",{style:{textAlign:e.user_uid_1===r.uid?"right":"left"}},c.a.createElement("p",{className:"messageStyle"},e.message))})):null),m?c.a.createElement("div",{className:"chatControls"},c.a.createElement("textarea",{value:y,onChange:function(e){return R(e.target.value)},placeholder:"Write Message"}),c.a.createElement("button",{onClick:function(e){var t={user_uid_1:r.uid,user_uid_2:w,message:y};""!==y&&a(function(e){return function(){var t=Object(d.a)(E.a.mark((function t(a){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Object(f.firestore)().collection("conversations").add(Object(b.a)(Object(b.a)({},e),{},{isView:!1,createdAt:new Date})).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t)).then((function(){R("")}))}},"Send")):null)))},j=(a(61),function(e){return c.a.createElement("div",{className:"card"},e.children)}),U=(a(62),function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],o=a[1],u=Object(n.useState)(""),m=Object(s.a)(u,2),p=m[0],O=m[1],b=Object(l.b)();return Object(l.c)((function(e){return e.auth})).authenticated?c.a.createElement(i.a,{to:"/"}):c.a.createElement(g,null,c.a.createElement("div",{className:"loginContainer"},c.a.createElement(j,null,c.a.createElement("form",{onSubmit:function(e){var t;(e.preventDefault(),""!==r)?""!==p?b((t={email:r,password:p},function(){var e=Object(d.a)(E.a.mark((function e(a){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a({type:"".concat(S.USER_LOGIN_REQUEST)}),Object(f.auth)().signInWithEmailAndPassword(t.email,t.password).then((function(e){console.log(e),Object(f.firestore)().collection("users").doc(e.user.uid).update({isOnline:!0}).then((function(){var t=e.user.displayName.split(" "),n={firstName:t[0],lastName:t[1],uid:e.user.uid,email:e.user.email};localStorage.setItem("user",JSON.stringify(n)),a({type:"".concat(S.USER_LOGIN_SUCCESS),payload:{user:n}})})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e),a({type:"".concat(S.USER_LOGIN_FAILURE),payload:{error:e}})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):alert("Password is required"):alert("Email is required")}},c.a.createElement("input",{name:"email",type:"text",value:r,onChange:function(e){return o(e.target.value)},placeholder:"Email"}),c.a.createElement("input",{name:"password",type:"password",value:p,onChange:function(e){return O(e.target.value)},placeholder:"Password"}),c.a.createElement("div",null,c.a.createElement("button",null,"Login"))))))}),N=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],o=a[1],u=Object(n.useState)(""),m=Object(s.a)(u,2),p=m[0],O=m[1],b=Object(n.useState)(""),h=Object(s.a)(b,2),v=h[0],_=h[1],U=Object(n.useState)(""),N=Object(s.a)(U,2),y=N[0],R=N[1],L=Object(l.b)();return Object(l.c)((function(e){return e.auth})).authenticated?c.a.createElement(i.a,{to:"/"}):c.a.createElement(g,null,c.a.createElement("div",{className:"registerContainer"},c.a.createElement(j,null,c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),L(function(e){return function(){var t=Object(d.a)(E.a.mark((function t(a){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=Object(f.firestore)(),a({type:"".concat(S.USER_LOGIN_REQUEST)}),Object(f.auth)().createUserWithEmailAndPassword(e.email,e.password).then((function(t){console.log(t);var c=Object(f.auth)().currentUser,r="".concat(e.firstName," ").concat(e.lastName);c.updateProfile({displayName:r}).then((function(){n.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,uid:t.user.uid,createdAt:new Date,isOnline:!0}).then((function(){var n={firstName:e.firstName,lastName:e.lastName,uid:t.user.uid,email:e.email};localStorage.setItem("user",JSON.stringify(n)),console.log("User logged in successfully...!"),a({type:"".concat(S.USER_LOGIN_SUCCESS),payload:{user:n}})})).catch((function(e){console.log(e),a({type:"".concat(S.USER_LOGIN_FAILURE),payload:{error:e}})}))}))})).catch((function(e){console.log(e)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}({firstName:r,lastName:p,email:v,password:y}))}},c.a.createElement("h3",null,"Sign up"),c.a.createElement("input",{name:"firstName",type:"text",value:r,onChange:function(e){return o(e.target.value)},placeholder:"First Name"}),c.a.createElement("input",{name:"lastName",type:"text",value:p,onChange:function(e){return O(e.target.value)},placeholder:"Last Name"}),c.a.createElement("input",{name:"email",type:"text",value:v,onChange:function(e){return _(e.target.value)},placeholder:"Email"}),c.a.createElement("input",{name:"password",type:"password",value:y,onChange:function(e){return R(e.target.value)},placeholder:"Password"}),c.a.createElement("div",null,c.a.createElement("button",null,"Sign up"))))))},y=a(35),R=function(e){var t=e.component,a=Object(y.a)(e,["component"]);return c.a.createElement(i.b,Object.assign({},a,{component:function(e){return(localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null)?c.a.createElement(t,e):c.a.createElement(i.a,{to:"/login"})}}))};var L=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth}));return Object(n.useEffect)((function(){t.authenticated||e(function(){var e=Object(d.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,t(a?{type:"".concat(S.USER_LOGIN_SUCCESS),payload:{user:a}}:{type:"".concat(S.USER_LOGIN_FAILURE),payload:{error:"Login failed"}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),c.a.createElement("div",{className:"App"},c.a.createElement(u.a,null,c.a.createElement(R,{path:"/",exact:!0,component:_}),c.a.createElement(i.b,{path:"/login",component:U}),c.a.createElement(i.b,{path:"/signup",component:N})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=a(20),w={firstName:"",lastName:"",email:"",authenticating:!1,authenticated:!1,error:null},G={users:[],conversations:[]},T=Object(I.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"".concat(S.USER_LOGIN_REQUEST):e=Object(b.a)(Object(b.a)({},e),{},{authenticating:!0});break;case"".concat(S.USER_LOGIN_SUCCESS):e=Object(b.a)(Object(b.a)(Object(b.a)({},e),t.payload.user),{},{authenticated:!0,authenticating:!1});break;case"".concat(S.USER_LOGIN_FAILURE):e=Object(b.a)(Object(b.a)({},e),{},{authenticated:!1,authenticating:!1,error:t.payload.error});break;case"".concat(S.USER_LOGOUT,"_REQUEST"):break;case"".concat(S.USER_LOGOUT,"_SUCCESS"):e=Object(b.a)({},w);break;case"".concat(S.USER_LOGOUT,"_FAILURE"):e=Object(b.a)(Object(b.a)({},e),{},{error:t.payload.error});break;default:e=Object(b.a)({},e)}return e},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(O.GET_REALTIMEUSERS,"_REQUEST"):break;case"".concat(O.GET_REALTIMEUSERS,"_SUCCESS"):e=Object(b.a)(Object(b.a)({},e),{},{users:t.payload.users});break;case O.GET_REALTIMEMESSAGES:e=Object(b.a)(Object(b.a)({},e),{},{conversations:t.payload.conversations});break;case"".concat(O.GET_REALTIMEMESSAGES,"_FAILURE"):e=Object(b.a)(Object(b.a)({},e),{},{conversations:[]});break;default:e=Object(b.a)({},e)}return e}}),C=a(34),A=Object(I.d)(T,Object(I.a)(C.a));p.a.initializeApp({apiKey:"AIzaSyC-5AiGELf0OwZ5you7ro17Im6YOwhzKtw",authDomain:"messenger-2fd13.firebaseapp.com",databaseURL:"https://messenger-2fd13.firebaseio.com",projectId:"messenger-2fd13",storageBucket:"messenger-2fd13.appspot.com",messagingSenderId:"815285692255",appId:"1:815285692255:web:0de9b66269789bceb138ea",measurementId:"G-Y8RY4RNPV6"}),window.store=A,o.a.render(c.a.createElement(l.a,{store:A},c.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.e6bf2896.chunk.js.map