"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[472],{6472:function(e,s,n){n.r(s),n.d(s,{default:function(){return S}});var t=n(2791),i=n(7571),a=n(8937),r=n(9439),l=n(419),d=n(2882),c=n(6106),o=n(914),m=n(9451),u=n(4964),h=n(6443),x=n(1413),j=n(3110),p=n(4195),v=n(2703),Z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]},name:"menu",theme:"outlined"},b=n(2683),f=function(e,s){return t.createElement(b.Z,Object.assign({},e,{ref:s,icon:Z}))};f.displayName="MenuOutlined";var g=t.forwardRef(f),y=n(184),N=j.ZP.useBreakpoint,C=function(e){var s=e.sideContent,n=e.sideContentWidth,t=void 0===n?250:n,i=e.border;return(0,y.jsx)("div",{className:"side-content ".concat(i?"with-border":""),style:{width:"".concat(t,"px")},children:s})},w=function(e){var s=e.sideContent,n=e.visible,t=e.onSideContentClose;return(0,y.jsx)(p.Z,{width:320,placement:"left",closable:!1,onClose:t,visible:n,bodyStyle:{paddingLeft:0,paddingRight:0},children:(0,y.jsx)("div",{className:"h-100",children:s})})},k=function(e){var s=e.mainContent,n=e.pageHeader,i=e.sideContentGutter,a=void 0===i||i,l=!v.Z.getBreakPoint(N()).includes("lg"),d=(0,t.useState)(!1),c=(0,r.Z)(d,2),o=c[0],m=c[1];return(0,y.jsxs)("div",{className:"inner-app-layout",children:[l?(0,y.jsx)(w,(0,x.Z)({visible:o,onSideContentClose:function(e){m(!1)}},e)):(0,y.jsx)(C,(0,x.Z)({},e)),(0,y.jsxs)("div",{className:"main-content ".concat(n?"has-page-header":""," ").concat(a?"gutter":"no-gutter"),children:[l?(0,y.jsx)("div",{className:"font-size-lg mb-3 ".concat(a?"":"pt-3 px-3"),children:(0,y.jsx)(g,{onClick:function(){m(!0)}})}):null,s]})]})},I=function(e){var s,n,a,x,j=(0,r.Z)(e.userInfo,1)[0],p=(0,i.k6)(),v=(0,t.useState)({name:j.name,email:j.email,userName:j.username,phoneNumber:j.phone,website:j.website,address:"".concat(null===(s=j.address)||void 0===s?void 0:s.street,", ").concat(null===(n=j.address)||void 0===n?void 0:n.suite),city:null===(a=j.address)||void 0===a?void 0:a.city,postcode:null===(x=j.address)||void 0===x?void 0:x.zipcode}),Z=(0,r.Z)(v,2),b=Z[0],f=Z[1],g=b.name,N=b.email,C=b.userName,w=b.phoneNumber,k=b.website,I=b.address,P=b.city,S=b.postcode;return(0,y.jsx)("div",{children:(0,y.jsx)("div",{className:"mt-4",children:(0,y.jsx)(d.Z,{name:"basicInformation",layout:"vertical",initialValues:{name:g,email:N,username:C,phoneNumber:w,website:k,address:I,city:P,postcode:S},onFinish:function(e){var s="updatable";l.ZP.loading({content:"Updating...",key:s}),f({name:e.name,email:e.email,userName:e.userName,phoneNumber:e.phoneNumber,website:e.website,address:e.address,city:e.city,postcode:e.postcode}),setTimeout((function(){l.ZP.success({content:"Done!",key:s,duration:2}),p.push("user-list")}),1e3)},onFinishFailed:function(e){console.log("Failed:",e)},children:(0,y.jsx)(c.Z,{children:(0,y.jsxs)(o.Z,{xs:24,sm:24,md:24,lg:16,children:[(0,y.jsxs)(c.Z,{gutter:h.KP,children:[(0,y.jsx)(o.Z,{xs:24,sm:24,md:12,children:(0,y.jsx)(d.Z.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your name!"}],children:(0,y.jsx)(m.Z,{})})}),(0,y.jsx)(o.Z,{xs:24,sm:24,md:12,children:(0,y.jsx)(d.Z.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:(0,y.jsx)(m.Z,{})})}),(0,y.jsx)(o.Z,{xs:24,sm:24,md:12,children:(0,y.jsx)(d.Z.Item,{label:"Email",name:"email",rules:[{required:!0,type:"email",message:"Please enter a valid email!"}],children:(0,y.jsx)(m.Z,{})})}),(0,y.jsx)(o.Z,{xs:24,sm:24,md:12,children:(0,y.jsx)(d.Z.Item,{label:"Phone Number",name:"phoneNumber",children:(0,y.jsx)(m.Z,{})})}),(0,y.jsx)(o.Z,{xs:24,sm:24,md:12,children:(0,y.jsx)(d.Z.Item,{label:"Website",name:"website",children:(0,y.jsx)(m.Z,{})})}),(0,y.jsx)(o.Z,{xs:24,sm:24,md:24,children:(0,y.jsx)(d.Z.Item,{label:"Address",name:"address",children:(0,y.jsx)(m.Z,{})})}),(0,y.jsx)(o.Z,{xs:24,sm:24,md:12,children:(0,y.jsx)(d.Z.Item,{label:"City",name:"city",children:(0,y.jsx)(m.Z,{})})}),(0,y.jsx)(o.Z,{xs:24,sm:24,md:12,children:(0,y.jsx)(d.Z.Item,{label:"Post code",name:"postcode",children:(0,y.jsx)(m.Z,{})})})]}),(0,y.jsx)(u.Z,{type:"primary",htmlType:"submit",children:"Save Change"})]})})})})})},P=function(e){var s=e.location.state.user;return(0,y.jsx)(k,{mainContent:(0,y.jsx)(I,{userInfo:s})})},S=function(e){var s=e.match;return(0,y.jsx)(t.Suspense,{fallback:(0,y.jsx)(a.Z,{cover:"content"}),children:(0,y.jsxs)(i.rs,{children:[(0,y.jsx)(i.AW,{path:"".concat(s.url,"/user-list"),component:(0,t.lazy)((function(){return Promise.all([n.e(871),n.e(270),n.e(821)]).then(n.bind(n,4821))}))}),(0,y.jsx)(i.AW,{path:"".concat(s.url,"/edit-profile"),component:P})]})})}}}]);
//# sourceMappingURL=472.287a146e.chunk.js.map