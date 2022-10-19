"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[472],{6472:function(e,n,s){s.r(n),s.d(n,{default:function(){return T}});var t=s(2791),i=s(7571),a=s(8937),r=s(4165),c=s(5861),o=s(9439),d=s(419),l=s(2882),u=s(6106),m=s(914),p=s(9451),h=s(4964),x=s(6443),j=s(1413),v=s(3110),Z=s(4195),b=s(2703),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]},name:"menu",theme:"outlined"},y=s(2683),g=function(e,n){return t.createElement(y.Z,Object.assign({},e,{ref:n,icon:f}))};g.displayName="MenuOutlined";var w=t.forwardRef(g),N=s(184),C=v.ZP.useBreakpoint,k=function(e){var n=e.sideContent,s=e.sideContentWidth,t=void 0===s?250:s,i=e.border;return(0,N.jsx)("div",{className:"side-content ".concat(i?"with-border":""),style:{width:"".concat(t,"px")},children:n})},P=function(e){var n=e.sideContent,s=e.visible,t=e.onSideContentClose;return(0,N.jsx)(Z.Z,{width:320,placement:"left",closable:!1,onClose:t,visible:s,bodyStyle:{paddingLeft:0,paddingRight:0},children:(0,N.jsx)("div",{className:"h-100",children:n})})},I=function(e){var n=e.mainContent,s=e.pageHeader,i=e.sideContentGutter,a=void 0===i||i,r=!b.Z.getBreakPoint(C()).includes("lg"),c=(0,t.useState)(!1),d=(0,o.Z)(c,2),l=d[0],u=d[1];return(0,N.jsxs)("div",{className:"inner-app-layout",children:[r?(0,N.jsx)(P,(0,j.Z)({visible:l,onSideContentClose:function(e){u(!1)}},e)):(0,N.jsx)(k,(0,j.Z)({},e)),(0,N.jsxs)("div",{className:"main-content ".concat(s?"has-page-header":""," ").concat(a?"gutter":"no-gutter"),children:[r?(0,N.jsx)("div",{className:"font-size-lg mb-3 ".concat(a?"":"pt-3 px-3"),children:(0,N.jsx)(w,{onClick:function(){u(!0)}})}):null,n]})]})},z=s(9305),S=function(e){var n,s,t,a,j=(0,o.Z)(e.userInfo,1)[0],v=(0,i.k6)(),Z={name:j.name,email:j.email,userName:j.username,phoneNumber:j.phone,website:j.website,address:"".concat(null===(n=j.address)||void 0===n?void 0:n.street,", ").concat(null===(s=j.address)||void 0===s?void 0:s.suite),city:null===(t=j.address)||void 0===t?void 0:t.city,postcode:null===(a=j.address)||void 0===a?void 0:a.zipcode},b=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(n){var s,t,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=new Headers).append("Content-Type","application/json"),s.append("Accept","application/json"),t=JSON.stringify({id:j.id,name:Z.name,username:Z.userName,email:Z.email,address:{street:Z.address.split(",")[0],suite:Z.address.split(",")[1],city:Z.city,zipcode:Z.postcode,geo:j.geo},phone:Z.phoneNumber,website:Z.website,company:j.company}),i={method:"PUT",headers:s,body:t,redirect:"follow"},e.prev=5,e.next=8,fetch("".concat(z.CT,"/users/").concat(n),i);case 8:e.sent.ok&&console.log("User info successfully updated!"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(n){var s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="updatable",d.ZP.loading({content:"Updating...",key:s}),Z={name:n.name,email:n.email,userName:n.userName,phoneNumber:n.phoneNumber,website:n.website,address:n.address,city:n.city,postcode:n.postcode},e.next=5,b(j.id);case 5:setTimeout((function(){d.ZP.success({content:"Done!",key:s,duration:2}),v.push("user-list")}),1e3);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),y=Z,g=y.name,w=y.email,C=y.userName,k=y.phoneNumber,P=y.website,I=y.address,S=y.city,H=y.postcode;return(0,N.jsx)("div",{children:(0,N.jsx)("div",{className:"mt-4",children:(0,N.jsx)(l.Z,{name:"basicInformation",layout:"vertical",initialValues:{name:g,email:w,username:C,phoneNumber:k,website:P,address:I,city:S,postcode:H},onFinish:f,onFinishFailed:function(e){console.log("Failed:",e)},children:(0,N.jsx)(u.Z,{children:(0,N.jsxs)(m.Z,{xs:24,sm:24,md:24,lg:16,children:[(0,N.jsxs)(u.Z,{gutter:x.KP,children:[(0,N.jsx)(m.Z,{xs:24,sm:24,md:12,children:(0,N.jsx)(l.Z.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your name!"}],children:(0,N.jsx)(p.Z,{})})}),(0,N.jsx)(m.Z,{xs:24,sm:24,md:12,children:(0,N.jsx)(l.Z.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:(0,N.jsx)(p.Z,{})})}),(0,N.jsx)(m.Z,{xs:24,sm:24,md:12,children:(0,N.jsx)(l.Z.Item,{label:"Email",name:"email",rules:[{required:!0,type:"email",message:"Please enter a valid email!"}],children:(0,N.jsx)(p.Z,{})})}),(0,N.jsx)(m.Z,{xs:24,sm:24,md:12,children:(0,N.jsx)(l.Z.Item,{label:"Phone Number",name:"phoneNumber",children:(0,N.jsx)(p.Z,{})})}),(0,N.jsx)(m.Z,{xs:24,sm:24,md:12,children:(0,N.jsx)(l.Z.Item,{label:"Website",name:"website",children:(0,N.jsx)(p.Z,{})})}),(0,N.jsx)(m.Z,{xs:24,sm:24,md:24,children:(0,N.jsx)(l.Z.Item,{label:"Address",name:"address",children:(0,N.jsx)(p.Z,{})})}),(0,N.jsx)(m.Z,{xs:24,sm:24,md:12,children:(0,N.jsx)(l.Z.Item,{label:"City",name:"city",children:(0,N.jsx)(p.Z,{})})}),(0,N.jsx)(m.Z,{xs:24,sm:24,md:12,children:(0,N.jsx)(l.Z.Item,{label:"Post code",name:"postcode",children:(0,N.jsx)(p.Z,{})})})]}),(0,N.jsx)(h.Z,{type:"primary",htmlType:"submit",children:"Save Change"})]})})})})})},H=function(e){var n=e.location.state.user;return(0,N.jsx)(I,{mainContent:(0,N.jsx)(S,{userInfo:n})})},T=function(e){var n=e.match;return(0,N.jsx)(t.Suspense,{fallback:(0,N.jsx)(a.Z,{cover:"content"}),children:(0,N.jsxs)(i.rs,{children:[(0,N.jsx)(i.AW,{path:"".concat(n.url,"/user-list"),component:(0,t.lazy)((function(){return Promise.all([s.e(871),s.e(258),s.e(62),s.e(821)]).then(s.bind(s,4821))}))}),(0,N.jsx)(i.AW,{path:"".concat(n.url,"/edit-profile"),component:H})]})})}}}]);
//# sourceMappingURL=472.6ca6349c.chunk.js.map