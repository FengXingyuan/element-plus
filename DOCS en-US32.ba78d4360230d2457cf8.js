(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{520:function(e,t,n){"use strict";n.r(t);var l=n(0);const d={class:"content element-doc"},c=Object(l.createVNode)("h2",{id:"link"},[Object(l.createVNode)("a",{class:"header-anchor",href:"#link"},"¶"),Object(l.createTextVNode)(" Link")],-1),i=Object(l.createVNode)("p",null,"Text hyperlink",-1),r=Object(l.createVNode)("h3",{id:"basic"},[Object(l.createVNode)("a",{class:"header-anchor",href:"#basic"},"¶"),Object(l.createTextVNode)(" Basic")],-1),o=Object(l.createVNode)("p",null,"Basic text link",-1),a=Object(l.createVNode)("pre",null,[Object(l.createVNode)("code",{class:"html"},'<div>\n  <el-link href="https://element.eleme.io" target="_blank">default</el-link>\n  <el-link type="primary">primary</el-link>\n  <el-link type="success">success</el-link>\n  <el-link type="warning">warning</el-link>\n  <el-link type="danger">danger</el-link>\n  <el-link type="info">info</el-link>\n</div>\n')],-1),s=Object(l.createVNode)("h3",{id:"disabled"},[Object(l.createVNode)("a",{class:"header-anchor",href:"#disabled"},"¶"),Object(l.createTextVNode)(" Disabled")],-1),u=Object(l.createVNode)("p",null,"Disabled state of link",-1),b=Object(l.createVNode)("pre",null,[Object(l.createVNode)("code",{class:"html"},'<div>\n  <el-link disabled>default</el-link>\n  <el-link type="primary" disabled>primary</el-link>\n  <el-link type="success" disabled>success</el-link>\n  <el-link type="warning" disabled>warning</el-link>\n  <el-link type="danger" disabled>danger</el-link>\n  <el-link type="info" disabled>info</el-link>\n</div>\n')],-1),h=Object(l.createVNode)("h3",{id:"underline"},[Object(l.createVNode)("a",{class:"header-anchor",href:"#underline"},"¶"),Object(l.createTextVNode)(" Underline")],-1),p=Object(l.createVNode)("p",null,"Underline of link",-1),k=Object(l.createVNode)("pre",null,[Object(l.createVNode)("code",{class:"html"},'<div>\n  <el-link :underline="false">Without Underline</el-link>\n  <el-link>With Underline</el-link>\n</div>\n')],-1),f=Object(l.createVNode)("h3",{id:"icon"},[Object(l.createVNode)("a",{class:"header-anchor",href:"#icon"},"¶"),Object(l.createTextVNode)(" Icon")],-1),O=Object(l.createVNode)("p",null,"Link with icon",-1),j=Object(l.createVNode)("pre",null,[Object(l.createVNode)("code",{class:"html"},'<div>\n  <el-link icon="el-icon-edit">Edit</el-link>\n  <el-link>Check<i class="el-icon-view el-icon--right"></i> </el-link>\n</div>\n')],-1),m=Object(l.createStaticVNode)('<h3 id="attributes"><a class="header-anchor" href="#attributes">¶</a> Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Options</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>type</td><td>string</td><td>primary / success / warning / danger / info</td><td>default</td></tr><tr><td>underline</td><td>whether the component has underline</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>disabled</td><td>whether the component is disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>href</td><td>same as native hyperlink&#39;s <code>href</code></td><td>string</td><td>—</td><td>-</td></tr><tr><td>icon</td><td>class name of icon</td><td>string</td><td>—</td><td>-</td></tr></tbody></table>',2);var N={name:"component-doc",components:{"element-demo0":function(){const{createTextVNode:e,resolveComponent:t,withCtx:n,createVNode:d,openBlock:c,createBlock:i}=l,r=e("default"),o=e("primary"),a=e("success"),s=e("warning"),u=e("danger"),b=e("info");return Object.assign({render:function(e,l){const h=t("el-link");return c(),i("div",null,[d("div",null,[d(h,{href:"https://element.eleme.io",target:"_blank"},{default:n(()=>[r]),_:1}),d(h,{type:"primary"},{default:n(()=>[o]),_:1}),d(h,{type:"success"},{default:n(()=>[a]),_:1}),d(h,{type:"warning"},{default:n(()=>[s]),_:1}),d(h,{type:"danger"},{default:n(()=>[u]),_:1}),d(h,{type:"info"},{default:n(()=>[b]),_:1})])])}},{})}(),"element-demo1":function(){const{createTextVNode:e,resolveComponent:t,withCtx:n,createVNode:d,openBlock:c,createBlock:i}=l,r=e("default"),o=e("primary"),a=e("success"),s=e("warning"),u=e("danger"),b=e("info");return Object.assign({render:function(e,l){const h=t("el-link");return c(),i("div",null,[d("div",null,[d(h,{disabled:""},{default:n(()=>[r]),_:1}),d(h,{type:"primary",disabled:""},{default:n(()=>[o]),_:1}),d(h,{type:"success",disabled:""},{default:n(()=>[a]),_:1}),d(h,{type:"warning",disabled:""},{default:n(()=>[s]),_:1}),d(h,{type:"danger",disabled:""},{default:n(()=>[u]),_:1}),d(h,{type:"info",disabled:""},{default:n(()=>[b]),_:1})])])}},{})}(),"element-demo2":function(){const{createTextVNode:e,resolveComponent:t,withCtx:n,createVNode:d,openBlock:c,createBlock:i}=l,r=e("Without Underline"),o=e("With Underline");return Object.assign({render:function(e,l){const a=t("el-link");return c(),i("div",null,[d("div",null,[d(a,{underline:!1},{default:n(()=>[r]),_:1}),d(a,null,{default:n(()=>[o]),_:1})])])}},{})}(),"element-demo3":function(){const{createTextVNode:e,resolveComponent:t,withCtx:n,createVNode:d,openBlock:c,createBlock:i}=l,r=e("Edit"),o=e("Check"),a=d("i",{class:"el-icon-view el-icon--right"},null,-1);return Object.assign({render:function(e,l){const s=t("el-link");return c(),i("div",null,[d("div",null,[d(s,{icon:"el-icon-edit"},{default:n(()=>[r]),_:1}),d(s,null,{default:n(()=>[o,a]),_:1})])])}},{})}()},render:function(e,t,n,N,V,g){const y=Object(l.resolveComponent)("element-demo0"),w=Object(l.resolveComponent)("demo-block"),v=Object(l.resolveComponent)("element-demo1"),x=Object(l.resolveComponent)("element-demo2"),C=Object(l.resolveComponent)("element-demo3");return Object(l.openBlock)(),Object(l.createBlock)("section",d,[c,i,r,o,Object(l.createVNode)(w,null,{source:Object(l.withCtx)(()=>[Object(l.createVNode)(y)]),highlight:Object(l.withCtx)(()=>[a]),_:1}),s,u,Object(l.createVNode)(w,null,{source:Object(l.withCtx)(()=>[Object(l.createVNode)(v)]),highlight:Object(l.withCtx)(()=>[b]),_:1}),h,p,Object(l.createVNode)(w,null,{source:Object(l.withCtx)(()=>[Object(l.createVNode)(x)]),highlight:Object(l.withCtx)(()=>[k]),_:1}),f,O,Object(l.createVNode)(w,null,{source:Object(l.withCtx)(()=>[Object(l.createVNode)(C)]),highlight:Object(l.withCtx)(()=>[j]),_:1}),m])}};t.default=N}}]);