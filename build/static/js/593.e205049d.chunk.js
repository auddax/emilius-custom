"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[593],{4955:function(e,t,s){var a=s(1413),n=(s(2791),s(7734)),r=s(184),i=function(e){return(0,r.jsx)(n.C,(0,a.Z)((0,a.Z)({},e),{},{className:"ant-avatar-".concat(e.type),children:e.text}))};t.Z=function(e){var t=e.name,s=e.suffix,a=e.subTitle,n=e.id,l=e.type,o=e.src,c=e.icon,d=e.size,u=e.shape,m=e.gap,x=e.text,h=e.onNameClick;return(0,r.jsxs)("div",{className:"avatar-status d-flex align-items-center",children:[i({icon:c,src:o,type:l,size:d,shape:u,gap:m,text:x}),(0,r.jsxs)("div",{className:"ml-2",children:[(0,r.jsxs)("div",{children:[h?(0,r.jsx)("div",{onClick:function(){return h({name:t,subTitle:a,src:o,id:n})},className:"avatar-status-name clickable",children:t}):(0,r.jsx)("div",{className:"avatar-status-name",children:t}),(0,r.jsx)("span",{children:s})]}),(0,r.jsx)("div",{className:"text-muted avatar-status-subtitle",children:a})]})]})}},6593:function(e,t,s){s.r(t),s.d(t,{DefaultDashboard:function(){return ue},default:function(){return me}});var a=s(9439),n=s(1413),r=s(2791),i=s(1838),l=s(2385),o=s(7734),c=s(7528),d=s(6106),u=s(914),m=s(4964),x=s(6871),h=s(2675),g=s(7472),p=s(4423),j=s(184),f=function(e){var t=e.title,s=e.value,a=e.status,n=e.subtitle,r=e.prefix;return(0,j.jsxs)(x.Z,{children:[t&&(0,j.jsx)("h4",{className:"mb-0",children:t}),(0,j.jsxs)("div",{className:"".concat(r?"d-flex":""," ").concat(t?"mt-3":""),children:[r?(0,j.jsx)("div",{className:"mr-2",children:r}):null,(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{className:"d-flex align-items-center",children:[(0,j.jsx)("h1",{className:"mb-0 font-weight-bold",children:s}),a?(0,j.jsxs)("span",{className:"font-size-md font-weight-bold ml-3 ".concat(0!==a&&a>0?"text-success":"text-danger"),children:[a,0!==a&&a>0?(0,j.jsx)(g.Z,{}):(0,j.jsx)(p.Z,{})]}):null]}),n&&(0,j.jsx)("div",{className:"text-gray-light mt-1",children:n})]})]})]})},v=s(3496),b="#04d182",Z=["#3e82f7",b,"#ff6b72","#ffc107","#a461d8","#fa8c16","#17bcff"],y={chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:[].concat(Z),dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},legend:{position:"top",horizontalAlign:"right",offsetY:-15,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}}},N=(0,n.Z)({},y),w={chart:{zoom:{enabled:!1},toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"25px",startingShapre:"rounded",endingShape:"rounded"}},colors:[].concat(Z),dataLabels:{enabled:!1},stroke:{show:!0,width:6,curve:"smooth",colors:["transparent"]},legend:{position:"top",horizontalAlign:"right",offsetY:-15,inverseOrder:!0,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},fill:{opacity:1},tooltip:{y:{formatter:function(e){return"".concat(e)}}}},C=([].concat(Z),s(2818)),k={position:"absolute",zIndex:"1"},z={position:"absolute",zIndex:"1",right:"0",top:"-2px"},A=function(e){var t=e.title,s=e.series,a=e.width,i=e.height,l=e.xAxis,o=e.customOptions,c=e.card,d=e.type,u=e.extra,m=function(e){switch(e){case"line":default:return y;case"bar":return w;case"area":return N}}(d),h=window.innerWidth<768,g=function(){if(f.current){var e,t=f.current.querySelectorAll("div.apexcharts-legend")[0];t.style.marginRight="".concat(h?0:null===(e=p.current)||void 0===e?void 0:e.offsetWidth,"px"),h&&(t.style.position="relative",t.style.top=0,t.style.justifyContent="start",t.style.padding=0)}};(0,r.useEffect)((function(){g()}),[]);var p=(0,r.useRef)(null),f=(0,r.useRef)();m.xaxis.categories=l,o&&(m=(0,n.Z)((0,n.Z)({},m),o));var b=(0,j.jsx)(C.Z,{onResize:void setTimeout((function(){g()}),600),children:(0,j.jsx)("div",{className:"chartRef",ref:f,children:(0,j.jsx)(v.Z,{options:m,type:d,series:s,width:a,height:i})})});return(0,j.jsx)(j.Fragment,{children:c?(0,j.jsx)(x.Z,{children:(0,j.jsxs)("div",{className:"position-relative",children:[(0,j.jsx)("div",{style:h?{}:k,children:t})&&(0,j.jsx)("h4",{className:"font-weight-bold",style:h?{}:k,children:t}),u&&(0,j.jsx)("div",{ref:p,style:h?{}:z,children:u}),b]})}):b})};A.defaultProps={series:[],height:300,width:"100%",card:!0,type:"line"};var I=A,S=s(4955),P=s(7360),J=function(e){var t=e.title,s=e.value,a=e.size,n=e.subtitle,r=e.strokeWidth,i=e.extra;return(0,j.jsx)(x.Z,{children:(0,j.jsxs)("div",{className:"text-center",children:[t&&(0,j.jsx)("h4",{className:"mb-3 font-weight-bold",children:t}),(0,j.jsx)(P.Z,{type:"dashboard",percent:s,width:a,strokeWidth:r}),(0,j.jsx)("div",{className:"mt-2 mx-auto text-muted ".concat(i?"mb-3":""),style:{maxWidth:"".concat(a+30,"px")},children:n}),i]})})};J.defaultProps={strokeWidth:4,size:150};var R=J,M={series:[{name:"Session Duration",data:[45,52,38,24,33,26,21,20,6,8,15,10]},{name:"Page Views",data:[35,41,62,42,13,18,29,37,36,51,32,35]}],categories:["01 Jan","02 Jan","03 Jan","04 Jan","05 Jan","06 Jan","07 Jan","08 Jan","09 Jan","10 Jan","11 Jan","12 Jan"]},T=[{title:"Revenue",value:"$2,454",status:-11.4,subtitle:"Compare to last year (2019)"},{title:"Sales",value:"$6,982",status:8.2,subtitle:"Compare to last year (2019)"},{title:"Costs",value:"$8,310",status:.7,subtitle:"Compare to last year (2019)"}],D=[{name:"Members",data:[25,15,41,25,44,12,36,19,54]}],F=[{img:"/img/avatars/thumb-2.jpg",title:"Software Engineer",name:"Terrance Moreno"},{img:"/img/avatars/thumb-3.jpg",title:"UI/UX Designer",name:"Ron Vargas"},{img:"/img/avatars/thumb-4.jpg",title:"HR Executive",name:"Luke Cook"},{img:"/img/avatars/thumb-5.jpg",title:"Frontend Developer",name:"Joyce Freeman"},{img:"/img/avatars/thumb-6.jpg",title:"Compliance Manager",name:"Samantha Phillips"}],W=[{id:"#5331",name:"Clayton Bates",date:"8 May 2020",amount:"$137.00",status:"Approved",avatarColor:"#04d182"},{id:"#5332",name:"Gabriel Frazier",date:"6 May 2020",amount:"$322.00",status:"Approved",avatarColor:"#fa8c16"},{id:"#5333",name:"Debra Hamilton",date:"1 May 2020",amount:"$543.00",status:"Pending",avatarColor:"#1890ff"},{id:"#5334",name:"Stacey Ward",date:"28 April 2020",amount:"$876.00",status:"Rejected",avatarColor:"#ffc542"},{id:"#5335",name:"Troy Alexander",date:"28 April 2020",amount:"$241.00",status:"Approved",avatarColor:"#ff6b72"}],$=s(9286),E=s(1515),L=s(3605),U=s(8803),q=s(3685),H=s(5033),O=s(713),V=s(2703),Y=s(4569),X=s.n(Y),B=s(9305),G=s(390).lX(),K=s(5471),Q=s(2671),_=X().create({baseURL:B.CT,timeout:6e4}),ee="/auth/login";_.interceptors.request.use((function(e){var t=localStorage.getItem(K.UA);return t&&(e.headers.authorization=t),t||e.headers["public-request"]||(G.push(ee),window.location.reload()),e}),(function(e){Q.Z.error({message:"Error"}),Promise.reject(e)})),_.interceptors.response.use((function(e){return e.data}),(function(e){var t={message:""};return 400!==e.response.status&&403!==e.response.status||(t.message="Authentication Fail",t.description="Please login again",localStorage.removeItem(K.UA),G.push(ee),window.location.reload()),404===e.response.status&&(t.message="Not Found"),500===e.response.status&&(t.message="Internal Server Error"),508===e.response.status&&(t.message="Time Out"),Q.Z.error(t),Promise.reject(e)}));var te=_,se={getPost:function(e){return te({url:"/posts/1",method:"get",params:e})},setPost:function(e){return te({url:"/posts",method:"post",data:e})}},ae=se,ne=s(7571),re=function(e){return(0,j.jsx)(v.Z,(0,n.Z)({},e))},ie=(0,n.Z)((0,n.Z)({},y),{chart:{sparkline:{enabled:!0}},colors:[b]}),le=(0,j.jsxs)(i.Z,{children:[(0,j.jsx)(i.Z.Item,{children:(0,j.jsx)("span",{children:(0,j.jsxs)("div",{className:"d-flex align-items-center",children:[(0,j.jsx)($.Z,{}),(0,j.jsx)("span",{className:"ml-2",children:"Add all"})]})})},"0"),(0,j.jsx)(i.Z.Item,{children:(0,j.jsx)("span",{children:(0,j.jsxs)("div",{className:"d-flex align-items-center",children:[(0,j.jsx)(E.Z,{}),(0,j.jsx)("span",{className:"ml-2",children:"Disable all"})]})})},"1")]}),oe=(0,j.jsxs)(i.Z,{children:[(0,j.jsx)(i.Z.Item,{children:(0,j.jsx)("span",{children:(0,j.jsxs)("div",{className:"d-flex align-items-center",children:[(0,j.jsx)(L.Z,{}),(0,j.jsx)("span",{className:"ml-2",children:"Refresh"})]})})},"0"),(0,j.jsx)(i.Z.Item,{children:(0,j.jsx)("span",{children:(0,j.jsxs)("div",{className:"d-flex align-items-center",children:[(0,j.jsx)(U.Z,{}),(0,j.jsx)("span",{className:"ml-2",children:"Print"})]})})},"1"),(0,j.jsx)(i.Z.Item,{children:(0,j.jsx)("span",{children:(0,j.jsxs)("div",{className:"d-flex align-items-center",children:[(0,j.jsx)(q.Z,{}),(0,j.jsx)("span",{className:"ml-2",children:"Export"})]})})},"12")]}),ce=function(e){return(0,j.jsx)(l.Z,{overlay:e,trigger:["click"],placement:"bottomRight",children:(0,j.jsx)("a",{href:"/#",className:"text-gray font-size-lg",onClick:function(e){return e.preventDefault()},children:(0,j.jsx)(H.Z,{})})})},de=[{title:"Customer",dataIndex:"name",key:"name",render:function(e,t){return(0,j.jsxs)("div",{className:"d-flex align-items-center",children:[(0,j.jsx)(o.C,{size:30,className:"font-size-sm",style:{backgroundColor:t.avatarColor},children:V.Z.getNameInitial(e)}),(0,j.jsx)("span",{className:"ml-2",children:e})]})}},{title:"Date",dataIndex:"date",key:"date"},{title:"Amount",dataIndex:"amount",key:"amount"},{title:function(){return(0,j.jsx)("div",{className:"text-right",children:"Status"})},key:"status",render:function(e,t){return(0,j.jsx)("div",{className:"text-right",children:(0,j.jsx)(c.Z,{className:"mr-0",color:"Approved"===t.status?"cyan":"Pending"===t.status?"blue":"volcano",children:t.status})})}}],ue=function(){var e=(0,r.useState)(M),t=(0,a.Z)(e,1)[0],s=(0,r.useState)(T),n=(0,a.Z)(s,1)[0],i=(0,r.useState)(D),l=(0,a.Z)(i,1)[0],o=(0,r.useState)(F),c=(0,a.Z)(o,1)[0],g=(0,r.useState)(W),p=(0,a.Z)(g,1)[0];return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(d.Z,{gutter:16,children:[(0,j.jsxs)(u.Z,{xs:24,sm:24,md:24,lg:18,children:[(0,j.jsx)(d.Z,{gutter:16,children:n.map((function(e,t){return(0,j.jsx)(u.Z,{xs:24,sm:24,md:24,lg:24,xl:8,children:(0,j.jsx)(f,{title:e.title,value:e.value,status:e.status,subtitle:e.subtitle})},t)}))}),(0,j.jsx)(d.Z,{gutter:16,children:(0,j.jsx)(u.Z,{span:24,children:(0,j.jsx)(I,{title:"Unique Visitors",series:t.series,xAxis:t.categories,height:400})})})]}),(0,j.jsxs)(u.Z,{xs:24,sm:24,md:24,lg:6,children:[(0,j.jsx)(R,{title:"Monthly Target",value:87,subtitle:"You need abit more effort to hit monthly target",extra:(0,j.jsx)(m.Z,{type:"primary",onClick:function(){return console.log("execute"),void ae.getPost().then((function(e){console.log("resp",e)}))},children:"Learn More"})}),(0,j.jsx)(f,{title:(0,j.jsx)(re,{options:ie,series:l,height:145}),value:"17,329",status:3.7,subtitle:"Active members"})]})]}),(0,j.jsxs)(d.Z,{gutter:16,children:[(0,j.jsx)(u.Z,{xs:24,sm:24,md:24,lg:7,children:(0,j.jsx)(x.Z,{title:"New Join Member",extra:ce(le),children:(0,j.jsx)("div",{className:"mt-3",children:c.map((function(e,t){return(0,j.jsxs)("div",{className:"d-flex align-items-center justify-content-between mb-4",children:[(0,j.jsx)(S.Z,{id:t,src:e.img,name:e.name,subTitle:e.title}),(0,j.jsx)("div",{children:(0,j.jsx)(m.Z,{icon:(0,j.jsx)(O.Z,{}),type:"default",size:"small",children:"Add"})})]},t)}))})})}),(0,j.jsx)(u.Z,{xs:24,sm:24,md:24,lg:17,children:(0,j.jsx)(x.Z,{title:"Latest Transactions",extra:ce(oe),children:(0,j.jsx)(h.Z,{className:"no-border-last",columns:de,dataSource:p,rowKey:"id",pagination:!1})})})]})]})},me=(0,ne.EN)(ue)}}]);
//# sourceMappingURL=593.e205049d.chunk.js.map