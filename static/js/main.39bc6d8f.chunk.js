(this["webpackJsonptwitter-clone"]=this["webpackJsonptwitter-clone"]||[]).push([[0],{32:function(e,t,a){e.exports=a(52)},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),l=a.n(c),u=a(5),o=a(16),i=a(2),s=a(3),m=a.n(s),p=a(10),f=a(18);a(38),a(40),a(42),a(53);f.initializeApp({apiKey:"AIzaSyAUvKPI-ZMQTl2aDudrYdqaFck4kCZdo_M",authDomain:"twitter-clone-c7c03.firebaseapp.com",databaseURL:"https://twitter-clone-c7c03.firebaseio.com",projectId:"twitter-clone-c7c03",storageBucket:"twitter-clone-c7c03.appspot.com",messagingSenderId:"282534596876",appId:"1:282534596876:web:d18bf7c39f47e2826d3929",measurementId:"G-C4CRD04ZRX"});var d=f,b=f.auth(),E=f.firestore(),h=f.storage(),v=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(u.a)(l,2),i=o[0],s=o[1],f=Object(n.useState)(""),d=Object(u.a)(f,2),E=d[0],h=d[1],v=Object(n.useState)(!0),g=Object(u.a)(v,2),w=g[0],y=g[1],O=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?s(n):"password"===a&&h(n)},j=function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!w){e.next=8;break}return e.next=5,b.createUserWithEmailAndPassword(i,E);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,b.signInWithEmailAndPassword(i,E);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),c(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:j,className:"container"},r.a.createElement("input",{name:"email",type:"text",placeholder:"email",required:!0,value:i,onChange:O,className:"authInput"}),r.a.createElement("input",{name:"password",type:"password",placeholder:"password",required:!0,value:E,onChange:O,className:"authInput"}),r.a.createElement("input",{type:"submit",className:"authInput authSubmit",value:w?"Create New Account":"Log In"}),a&&r.a.createElement("span",{className:"authError"},a)),r.a.createElement("span",{onClick:function(){return y((function(e){return!e}))},className:"authSwitch"},w?"Log In":"Create Account"))},g=a(6),w=a(17),y=function(){var e=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new d.auth.GoogleAuthProvider:"github"===a&&(n=new d.auth.GithubAuthProvider),e.next=4,b.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"authContainer"},r.a.createElement(g.a,{icon:w.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),r.a.createElement(v,null),r.a.createElement("div",{className:"authBtns"},r.a.createElement("button",{name:"google",onClick:e,className:"authBtn"},"Continue with Google ",r.a.createElement(g.a,{icon:w.b})),r.a.createElement("button",{name:"github",onClick:e,className:"authBtn"},"Continue with Github ",r.a.createElement(g.a,{icon:w.a}))))},O=a(31),j=a(13),x=function(e){var t=e.tweetObj,a=e.isOwner,c=Object(n.useState)(!1),l=Object(u.a)(c,2),o=l[0],i=l[1],s=Object(n.useState)(t.text),f=Object(u.a)(s,2),d=f[0],b=f[1],v=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want delete this tweet?")){e.next=6;break}return e.next=4,E.doc("/tweets/".concat(t.id)).delete();case 4:return e.next=6,h.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){return i((function(e){return!e}))},y=function(){var e=Object(p.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,E.doc("tweets/".concat(t.id)).update({text:d});case 3:i(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"tweet"},o?r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:y,className:"container tweetEdit"},r.a.createElement("input",{type:"text",placeholder:"Edit Your Tweet!",value:d,onChange:function(e){var t=e.target.value;b(t)},required:!0,autoFocus:!0,className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Tweet",className:"formBtn"})),r.a.createElement("span",{onClick:w,className:"formBtn cancelBtn"},"Cancel"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,t.text),t.attachmentUrl&&r.a.createElement("img",{src:t.attachmentUrl}),a&&r.a.createElement("div",{class:"tweet__actions"},r.a.createElement("span",{onClick:v},r.a.createElement(g.a,{icon:j.d})),r.a.createElement("span",{onClick:w},r.a.createElement(g.a,{icon:j.a})))))},N=a(55),k=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(u.a)(a,2),l=c[0],o=c[1],i=Object(n.useState)(""),s=Object(u.a)(i,2),f=s[0],d=s[1],b=function(){var e=Object(p.a)(m.a.mark((function e(a){var n,r,c,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==l){e.next=2;break}return e.abrupt("return");case 2:if(a.preventDefault(),n="",""==f){e.next=12;break}return r=h.ref().child("".concat(t.uid,"/").concat(Object(N.a)())),e.next=8,r.putString(f,"data_url");case 8:return c=e.sent,e.next=11,c.ref.getDownloadURL();case 11:n=e.sent;case 12:return u={text:l,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n},e.next=15,E.collection("tweets").add(u);case 15:o(""),d("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:b,className:"factoryForm"},r.a.createElement("div",{className:"factoryInput__container"},r.a.createElement("input",{className:"factoryInput__input",value:l,onChange:function(e){var t=e.target.value;o(t)},type:"text",placeholder:"What`s on your maind?",maxLength:120}),r.a.createElement("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})),r.a.createElement("label",{for:"attach-file",className:"factoryInput__label"},r.a.createElement("sapn",null,"Add photos"),r.a.createElement(g.a,{icon:j.b})),r.a.createElement("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;d(t)},a.readAsDataURL(t)},style:{opacity:0}}),f&&r.a.createElement("div",{className:"factoryForm__attachment"},r.a.createElement("img",{src:f,style:{backgroundImage:f}}),r.a.createElement("div",{className:"factoryForm"},r.a.createElement("span",null,"Remove"),r.a.createElement(g.a,{icon:j.c})),r.a.createElement("button",{onClick:function(){return d("")}},"Clear"))))},I=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(u.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){E.collection("tweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(O.a)({id:e.id},e.data())}));o(t)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(k,{userObj:t}),r.a.createElement("div",{style:{marginTop:30}},l.map((function(e){return r.a.createElement(x,{key:e.id,tweetObj:e,isOwner:e.creatorId===t.uid})}))))},C=function(e){var t=e.userObj;return r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",justifyContent:"center",marginTop:50}},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/",style:{marginRight:10}},r.a.createElement(g.a,{icon:w.c,color:"#04AAFF",size:"2x"}))),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12}},r.a.createElement(g.a,{icon:j.e,color:"#04AAFF",size:"2x"}),r.a.createElement("span",{style:{marginTop:10}},t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile")))))},S=function(e){var t=e.refreshUser,a=e.userObj,c=Object(i.g)(),l=Object(n.useState)(a.displayName),o=Object(u.a)(l,2),s=o[0],f=o[1],d=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.collection("tweets").where("creatorId","==",a.uid).orderBy("createdAt").get();case 2:t=e.sent,console.log(t.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){d()}),[]);var h=function(){var e=Object(p.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.displayName===s){e.next=5;break}return e.next=4,a.updateProfile({displayName:s});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:h,className:"profileForm"},r.a.createElement("input",{className:"formInput",onChange:function(e){var t=e.target.value;f(t)},type:"input",autoFocus:!0,placeholder:"Display Name",value:s}),r.a.createElement("input",{className:"formBtn",type:"submit",value:"Update Profile",style:{marginTop:10}})),r.a.createElement("span",{className:"formBtn cancelBtn logOut",onClick:function(){b.signOut(),c.push("/")}},"Log Out"))},F=function(e){var t=e.refreshUser,a=e.isLoggedIn,n=e.userObj;return r.a.createElement(o.a,null,a&&r.a.createElement(C,{userObj:n}),r.a.createElement(i.d,null,a?r.a.createElement("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"}},r.a.createElement(i.b,{exact:!0,path:"/"},r.a.createElement(I,{userObj:n})),r.a.createElement(i.b,{exact:!0,path:"/profile"},r.a.createElement(S,{refreshUser:t,userObj:n})),r.a.createElement(i.a,{from:"*",to:"/"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{exact:!0,path:"/"}," ",r.a.createElement(y,null)," "),r.a.createElement(i.a,{from:"*",to:"/"}))))};var A=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),o=Object(u.a)(l,2),i=o[0],s=o[1];return Object(n.useEffect)((function(){b.onAuthStateChanged((function(e){s(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement(F,{isLoggedIn:Boolean(i),userObj:i,refreshUser:function(){var e=b.currentUser;s({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})}}):"Initializing...")};a(51);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.39bc6d8f.chunk.js.map