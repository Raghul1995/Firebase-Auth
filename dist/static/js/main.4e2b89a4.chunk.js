(this.webpackJsonpfirebase=this.webpackJsonpfirebase||[]).push([[0],{213:function(e,t,a){e.exports=a(404)},218:function(e,t,a){},404:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(209),i=a.n(c),l=(a(218),a(22)),o=a(23),s=a(25),u=a(24),m=a(6),d=a(3),h=a(28),p=a(8),E=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(h.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))))}}]),a}(n.Component),f=Object(p.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCESS"})})).catch((function(t){e({type:"LOGIN_FAILED",err:t})}))}));var a}}}))(E),b=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",firstName:"",lastName:""},e.handleChange=function(t){e.setState(Object(h.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign Up"),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null," ",a):null))))}}]),a}(n.Component),g=Object(p.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),l=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return l.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_FAILED",err:e})}))}}(t))}}}))(b);var v=function(e){var t=e.project;return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,"Posted by  ",t.authorFirstName," ",t.authorLastName),r.a.createElement("p",{className:"grey-text"},t.createdAt.toDate().toDateString())))};var N=function(e){var t=e.projRedData;return r.a.createElement("div",{className:"project-list section"},t&&t.map((function(e){return r.a.createElement(m.b,{to:"/Project/"+e.id,key:e.id},r.a.createElement(v,{project:e}))})))},j=a(211),O=a.n(j);var y=function(e){var t=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",null,t&&t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"pink-text"},e.user," "),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text note-date"},O()(e.time.toDate()).fromNow()))}))))))},C=a(27),S=a(16),w=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(N,{projRedData:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(y,{notifications:n})))):r.a.createElement(d.a,{to:"/signin"})}}]),a}(n.Component),F=Object(S.d)(Object(p.b)((function(e){return{projects:e.firestore.ordered.proj,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(C.firestoreConnect)([{collection:"proj",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(w);var I=Object(p.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return console.log(e),r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(m.c,{to:"/createproj"},"New Project")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement(m.c,{to:"/",className:"btn btn-floating pink lighten-1"},e.profile.initials)))}));var k=function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(m.c,{to:"/signup"},"Sign Up")),r.a.createElement("li",null,r.a.createElement(m.c,{to:"/signin"},"Login"))))};var P=Object(p.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(I,{profile:a}):r.a.createElement(k,null);return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(m.b,{to:"/",className:"brand-logo left"},"Home"),n))})),x=a(17),A=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={Title:"",Content:""},e.handleChange=function(t){e.setState(Object(h.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.creatingProject(e.state),e.props.history.push("/")},e}return Object(o.a)(a,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"Content"},"Content"),r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create")))):r.a.createElement(d.a,{to:"/signin"})}}]),a}(n.Component),L=Object(p.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{creatingProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,i=a().firebase.auth.uid;r.collection("proj").add(Object(x.a)(Object(x.a)({},e),{},{authorFirstName:c.firstName,authorLastName:c.lastName,authorID:i,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))(A);var R=Object(S.d)(Object(p.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.proj;return{Project:n?n[a]:null,auth:e.firebase.auth}})),Object(C.firestoreConnect)([{collection:"proj"}]))((function(e){var t=e.Project;return e.auth.uid?t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0 "},r.a.createElement("div",{className:"card-content "},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",t.authorLastName," ",t.authorFirstName),r.a.createElement("div",null,t.createdAt.toDate().toDateString())))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading Project...")):r.a.createElement(d.a,{to:"/signin"})})),U=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(P,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:F}),r.a.createElement(d.b,{path:"/Project/:id",component:R}),r.a.createElement(d.b,{path:"/signin",component:f}),r.a.createElement(d.b,{path:"/signup",component:g}),r.a.createElement(d.b,{path:"/createproj",component:L}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D={authError:null},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_FAILED":return Object(x.a)(Object(x.a)({},e),{},{authError:"Login failed"});case"LOGIN_SUCCESS":return Object(x.a)(Object(x.a)({},e),{},{authError:null});case"SIGNOUT_SUCCESS":return console.log("signOut success"),e;case"SIGNUP_SUCCESS":return console.log("signUp success"),Object(x.a)(Object(x.a)({},e),{},{authError:null});case"SIGNUP_FAILED":return Object(x.a)(Object(x.a)({},e),{},{authError:t.err.message});default:return e}},G={elements:[{id:1,title:"fish",content:"blue beh blah"},{id:2,title:"fisnappingh",content:"blue beh blah"},{id:3,title:"bootknitting",content:"blue beh blah"}]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("created project",t.error),e;default:return e}},z=a(58),J=Object(S.c)({auth:_,proj:T,firestore:z.firestoreReducer,firebase:C.firebaseReducer}),B=a(212),W=a(45),H=a.n(W);a(399),a(402);H.a.initializeApp({apiKey:"AIzaSyAn9mLLfIl3hLuJX7SL2ja_JkO_9UYMHmQ",authDomain:"project-authentication-1995.firebaseapp.com",databaseURL:"https://project-authentication-1995.firebaseio.com",projectId:"project-authentication-1995",storageBucket:"project-authentication-1995.appspot.com",messagingSenderId:"617077217882",appId:"1:617077217882:web:13eeed51683ef069b7d663",measurementId:"G-517D3SG6D9"}),H.a.firestore();var K=H.a,M=Object(S.e)(J,Object(S.d)(Object(S.a)(B.a.withExtraArgument({getFirebase:C.getFirebase,getFirestore:z.getFirestore})),Object(z.reduxFirestore)(H.a,K),Object(C.reactReduxFirebase)(K,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));M.firebaseAuthIsReady.then((function(){i.a.render(r.a.createElement(p.a,{store:M},r.a.createElement(U,null)),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[213,1,2]]]);
//# sourceMappingURL=main.4e2b89a4.chunk.js.map