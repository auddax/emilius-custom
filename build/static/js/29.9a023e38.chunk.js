"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[29],{4955:function(e,a,t){var n=t(1413),r=(t(2791),t(7734)),s=t(184),i=function(e){return(0,s.jsx)(r.C,(0,n.Z)((0,n.Z)({},e),{},{className:"ant-avatar-".concat(e.type),children:e.text}))};a.Z=function(e){var a=e.name,t=e.suffix,n=e.subTitle,r=e.id,d=e.type,u=e.src,m=e.icon,l=e.size,c=e.shape,o=e.gap,p=e.text,h=e.onNameClick;return(0,s.jsxs)("div",{className:"avatar-status d-flex align-items-center",children:[i({icon:m,src:u,type:d,size:l,shape:c,gap:o,text:p}),(0,s.jsxs)("div",{className:"ml-2",children:[(0,s.jsxs)("div",{children:[h?(0,s.jsx)("div",{onClick:function(){return h({name:a,subTitle:n,src:u,id:r})},className:"avatar-status-name clickable",children:a}):(0,s.jsx)("div",{className:"avatar-status-name",children:a}),(0,s.jsx)("span",{children:t})]}),(0,s.jsx)("div",{className:"text-muted avatar-status-subtitle",children:n})]})]})}},872:function(e,a,t){t(2791);var n=t(2385),r=t(1838),s=t(5033),i=t(184),d=function(e){return(0,i.jsx)(n.Z,{overlay:e.menu,placement:e.placement,trigger:["click"],children:(0,i.jsx)("div",{className:"ellipsis-dropdown",children:(0,i.jsx)(s.Z,{})})})};d.defaultProps={trigger:"click",placement:"bottomRight",menu:(0,i.jsx)(r.Z,{})},a.Z=d},4118:function(e,a,t){t.r(a),t.d(a,{default:function(){return T}});var n=t(1413),r=t(9439),s=t(2791),i=t(9442),d=t(1838),u=t(7528),m=t(361),l=t(6871),c=t(9451),o=t(4964),p=t(2675),h=JSON.parse('[{"id":"#5331","name":"Eileen Horton","image":"/img/avatars/thumb-1.jpg","date":1573430400,"amount":677,"paymentStatus":"Paid","orderStatus":"Ready"},{"id":"#5328","name":"Terrance Moreno","image":"/img/avatars/thumb-2.jpg","date":1572393600,"amount":1328.35,"paymentStatus":"Paid","orderStatus":"Ready"},{"id":"#5321","name":"Ron Vargas","image":"/img/avatars/thumb-3.jpg","date":1593949805,"amount":629,"paymentStatus":"Paid","orderStatus":"Shipped"},{"id":"#5287","name":"Luke Cook","image":"/img/avatars/thumb-4.jpg","date":1579132800,"amount":25.9,"paymentStatus":"Paid","orderStatus":"Shipped"},{"id":"#5351","name":"Joyce Freeman","image":"/img/avatars/thumb-5.jpg","date":1591286400,"amount":817.5,"paymentStatus":"Pending","orderStatus":"Ready"},{"id":"#5285","name":"Samantha Phillips","image":"/img/avatars/thumb-6.jpg","date":1591459200,"amount":47.9,"paymentStatus":"Paid","orderStatus":"Shipped"},{"id":"#5290","name":"Tara Fletcher","image":"/img/avatars/thumb-7.jpg","date":1591459200,"amount":300,"paymentStatus":"Pending","orderStatus":"Ready"},{"id":"#5337","name":"Frederick Adams","image":"/img/avatars/thumb-8.jpg","date":1589644800,"amount":730,"paymentStatus":"Expired","orderStatus":"Ready"},{"id":"#5297","name":"Carolyn Hanson","image":"/img/avatars/thumb-9.jpg","date":1590508800,"amount":827,"paymentStatus":"Paid","orderStatus":"Shipped"},{"id":"#5298","name":"Brittany Hale","image":"/img/avatars/thumb-10.jpg","date":1590336000,"amount":1866,"paymentStatus":"Paid","orderStatus":"Shipped"},{"id":"#5301","name":"Lloyd Obrien","image":"/img/avatars/thumb-11.jpg","date":1593532800,"amount":269,"paymentStatus":"Paid","orderStatus":"Shipped"},{"id":"#5304","name":"Gabriella May","image":"/img/avatars/thumb-12.jpg","date":1593619200,"amount":180,"paymentStatus":"Paid","orderStatus":"Shipped"}]'),x=t(4215),g=t(1549),j=t(1730),S=t(3685),v=t(4955),y=t(872),f=t(8470),Z=t(948),b=t(2426),N=t.n(b),P=t(2703),k=t(184),w=i.Z.Option,I=["Paid","Pending","Expired"],T=function(){var e=(0,s.useState)(h),a=(0,r.Z)(e,2),t=a[0],b=a[1],T=(0,s.useState)([]),C=(0,r.Z)(T,2),R=(C[0],C[1]),A=(0,s.useState)([]),F=(0,r.Z)(A,2),D=F[0],E=F[1],M=[{title:"ID",dataIndex:"id"},{title:"Product",dataIndex:"name",render:function(e,a){return(0,k.jsx)("div",{className:"d-flex",children:(0,k.jsx)(v.Z,{size:30,src:a.image,name:a.name})})},sorter:function(e,a){return P.Z.antdTableSorter(e,a,"name")}},{title:"Date",dataIndex:"date",render:function(e,a){return(0,k.jsx)("span",{children:N().unix(a.date).format("DD-MM-YYYY")})},sorter:function(e,a){return P.Z.antdTableSorter(e,a,"date")}},{title:"Order status",dataIndex:"orderStatus",render:function(e,a){return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(u.Z,{color:(t=a.orderStatus,"Ready"===t?"blue":"Shipped"===t?"cyan":""),children:a.orderStatus})});var t},sorter:function(e,a){return P.Z.antdTableSorter(e,a,"orderStatus")}},{title:"Payment status",dataIndex:"paymentStatus",render:function(e,a){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(m.Z,{status:(t=a.paymentStatus,"Paid"===t?"success":"Pending"===t?"warning":"Expired"===t?"error":"")}),(0,k.jsx)("span",{children:a.paymentStatus})]});var t},sorter:function(e,a){return P.Z.antdTableSorter(e,a,"paymentStatus")}},{title:"Total",dataIndex:"amount",render:function(e,a){return(0,k.jsx)("span",{className:"font-weight-semibold",children:(0,k.jsx)(Z.Z,{displayType:"text",value:(Math.round(100*a.amount)/100).toFixed(2),prefix:"$",thousandSeparator:!0})})},sorter:function(e,a){return P.Z.antdTableSorter(e,a,"amount")}},{title:"",dataIndex:"actions",render:function(e,a){return(0,k.jsx)("div",{className:"text-right",children:(0,k.jsx)(y.Z,{menu:(0,k.jsxs)(d.Z,{children:[(0,k.jsx)(d.Z.Item,{children:(0,k.jsxs)(f.Z,{alignItems:"center",children:[(0,k.jsx)(x.Z,{}),(0,k.jsx)("span",{className:"ml-2",children:"View Details"})]})}),(0,k.jsx)(d.Z.Item,{children:(0,k.jsxs)(f.Z,{alignItems:"center",children:[(0,k.jsx)(g.Z,{}),(0,k.jsx)("span",{className:"ml-2",children:"Add to remark"})]})})]})})})}}],O={onChange:function(e,a){R(a),E(e)}};return(0,k.jsxs)(l.Z,{children:[(0,k.jsxs)(f.Z,{alignItems:"center",justifyContent:"between",mobileFlex:!1,children:[(0,k.jsxs)(f.Z,{className:"mb-1",mobileFlex:!1,children:[(0,k.jsx)("div",{className:"mr-md-3 mb-3",children:(0,k.jsx)(c.Z,{placeholder:"Search",prefix:(0,k.jsx)(j.Z,{}),onChange:function(e){return function(e){var a=e.currentTarget.value,n=e.currentTarget.value?t:h,r=P.Z.wildCardSearch(n,a);b(r),E([])}(e)}})}),(0,k.jsx)("div",{className:"mb-3",children:(0,k.jsxs)(i.Z,{defaultValue:"All",className:"w-100",style:{minWidth:180},onChange:function(e){if("All"!==e){var a=P.Z.filterArray(h,"paymentStatus",e);b(a)}else b(h)},placeholder:"Status",children:[(0,k.jsx)(w,{value:"All",children:"All payment "}),I.map((function(e){return(0,k.jsx)(w,{value:e,children:e},e)}))]})})]}),(0,k.jsx)("div",{children:(0,k.jsx)(o.Z,{type:"primary",icon:(0,k.jsx)(S.Z,{}),block:!0,children:"Export All"})})]}),(0,k.jsx)("div",{className:"table-responsive",children:(0,k.jsx)(p.Z,{columns:M,dataSource:t,rowKey:"id",rowSelection:(0,n.Z)({selectedRowKeys:D,type:"checkbox",preserveSelectedRowKeys:!1},O)})})]})}}}]);
//# sourceMappingURL=29.9a023e38.chunk.js.map