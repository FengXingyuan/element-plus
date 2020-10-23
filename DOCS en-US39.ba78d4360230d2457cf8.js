(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{527:function(e,t,n){"use strict";n.r(t);var a=n(0);const o={class:"content element-doc"},c=Object(a.createVNode)("h2",{id:"pagination"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#pagination"},"¶"),Object(a.createTextVNode)(" Pagination")],-1),r=Object(a.createVNode)("p",null,"If you have too much data to display in one page, use pagination.",-1),d=Object(a.createVNode)("h3",{id:"basic-usage"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#basic-usage"},"¶"),Object(a.createTextVNode)(" Basic usage")],-1),l=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("Set "),Object(a.createVNode)("code",null,"layout"),Object(a.createTextVNode)(" with different pagination elements you wish to display separated with a comma. Pagination elements are: "),Object(a.createVNode)("code",null,"prev"),Object(a.createTextVNode)(" (a button navigating to the previous page), "),Object(a.createVNode)("code",null,"next"),Object(a.createTextVNode)(" (a button navigating to the next page), "),Object(a.createVNode)("code",null,"pager"),Object(a.createTextVNode)(" (page list), "),Object(a.createVNode)("code",null,"jumper"),Object(a.createTextVNode)(" (a jump-to input), "),Object(a.createVNode)("code",null,"total"),Object(a.createTextVNode)(" (total item count), "),Object(a.createVNode)("code",null,"size"),Object(a.createTextVNode)(" (a select to determine page size) and "),Object(a.createVNode)("code",null,"->"),Object(a.createTextVNode)("(every element after this symbol will be pulled to the right).")])],-1),s=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},'<div class="block">\n  <span class="demonstration">When you have few pages</span>\n  <el-pagination\n    layout="prev, pager, next"\n    :total="50">\n  </el-pagination>\n</div>\n<div class="block">\n  <span class="demonstration">When you have more than 7 pages</span>\n  <el-pagination\n    layout="prev, pager, next"\n    :total="1000">\n  </el-pagination>\n</div>\n')],-1),i=Object(a.createVNode)("h3",{id:"number-of-pagers"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#number-of-pagers"},"¶"),Object(a.createTextVNode)(" Number of pagers")],-1),u=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("By default, Pagination collapses extra pager buttons when it has more than 7 pages. This can be configured with the "),Object(a.createVNode)("code",null,"pager-count"),Object(a.createTextVNode)(" attribute.")])],-1),g=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},'<el-pagination\n  :page-size="20"\n  :pager-count="11"\n  layout="prev, pager, next"\n  :total="1000">\n</el-pagination>\n')],-1),h=Object(a.createVNode)("h3",{id:"buttons-with-background-color"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#buttons-with-background-color"},"¶"),Object(a.createTextVNode)(" Buttons with background color")],-1),p=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("Set the "),Object(a.createVNode)("code",null,"background"),Object(a.createTextVNode)(" attribute and the buttons will have a background color.")])],-1),b=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},'<el-pagination\n  background\n  layout="prev, pager, next"\n  :total="1000">\n</el-pagination>\n')],-1),m=Object(a.createVNode)("h3",{id:"small-pagination"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#small-pagination"},"¶"),Object(a.createTextVNode)(" Small Pagination")],-1),j=Object(a.createVNode)("p",null,"Use small pagination in the case of limited space.",-1),O=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("Just set the "),Object(a.createVNode)("code",null,"small"),Object(a.createTextVNode)(" attribute to "),Object(a.createVNode)("code",null,"true"),Object(a.createTextVNode)(" and the Pagination becomes smaller.")])],-1),V=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},'<el-pagination\n  small\n  layout="prev, pager, next"\n  :total="50">\n</el-pagination>\n')],-1),N=Object(a.createVNode)("h3",{id:"more-elements"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#more-elements"},"¶"),Object(a.createTextVNode)(" More elements")],-1),v=Object(a.createVNode)("p",null,"Add more modules based on your scenario.",-1),x=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("This example is a complete use case. It uses "),Object(a.createVNode)("code",null,"size-change"),Object(a.createTextVNode)(" and "),Object(a.createVNode)("code",null,"current-change"),Object(a.createTextVNode)(" event to handle page size changes and current page changes. "),Object(a.createVNode)("code",null,"page-sizes"),Object(a.createTextVNode)(" accepts an array of integers, each of which represents a different page size in the "),Object(a.createVNode)("code",null,"sizes"),Object(a.createTextVNode)(" select options, e.g. "),Object(a.createVNode)("code",null,"[100, 200, 300, 400]"),Object(a.createTextVNode)(" indicates that the select will have four options: 100, 200, 300 or 400 items per page.")])],-1),C=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},'<template>\n  <div class="block">\n    <span class="demonstration">Total item count</span>\n    <el-pagination\n      @size-change="handleSizeChange"\n      @current-change="handleCurrentChange"\n      :current-page.sync="currentPage1"\n      :page-size="100"\n      layout="total, prev, pager, next"\n      :total="1000">\n    </el-pagination>\n  </div>\n  <div class="block">\n    <span class="demonstration">Change page size</span>\n    <el-pagination\n      @size-change="handleSizeChange"\n      @current-change="handleCurrentChange"\n      :current-page.sync="currentPage2"\n      :page-sizes="[100, 200, 300, 400]"\n      :page-size="100"\n      layout="sizes, prev, pager, next"\n      :total="1000">\n    </el-pagination>\n  </div>\n  <div class="block">\n    <span class="demonstration">Jump to</span>\n    <el-pagination\n      @size-change="handleSizeChange"\n      @current-change="handleCurrentChange"\n      :current-page.sync="currentPage3"\n      :page-size="100"\n      layout="prev, pager, next, jumper"\n      :total="1000">\n    </el-pagination>\n  </div>\n  <div class="block">\n    <span class="demonstration">All combined</span>\n    <el-pagination\n      @size-change="handleSizeChange"\n      @current-change="handleCurrentChange"\n      :current-page.sync="currentPage4"\n      :page-sizes="[100, 200, 300, 400]"\n      :page-size="100"\n      layout="total, sizes, prev, pager, next, jumper"\n      :total="400">\n    </el-pagination>\n  </div>\n</template>\n<script>\n  export default {\n    methods: {\n      handleSizeChange(val) {\n        console.log(`${val} items per page`);\n      },\n      handleCurrentChange(val) {\n        console.log(`current page: ${val}`);\n      }\n    },\n    data() {\n      return {\n        currentPage1: 5,\n        currentPage2: 5,\n        currentPage3: 5,\n        currentPage4: 4\n      };\n    }\n  }\n<\/script>\n')],-1),f=Object(a.createVNode)("h3",{id:"hide-pagination-when-there-is-only-one-page"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#hide-pagination-when-there-is-only-one-page"},"¶"),Object(a.createTextVNode)(" Hide pagination when there is only one page")],-1),w=Object(a.createVNode)("p",null,[Object(a.createTextVNode)("When there is only one page, hide the pagination by setting the "),Object(a.createVNode)("code",null,"hide-on-single-page"),Object(a.createTextVNode)(" attribute.")],-1),y=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},'<div>\n <el-switch v-model="value">\n </el-switch>\n <el-pagination\n  :hide-on-single-page="value"\n  :total="5"\n  layout="prev, pager, next">\n</el-pagination>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: false\n      }\n    }\n  }\n<\/script>\n')],-1),z=Object(a.createStaticVNode)('<h3 id="attributes"><a class="header-anchor" href="#attributes">¶</a> Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>small</td><td>whether to use small pagination</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>background</td><td>whether the buttons have a background color</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>page-size</td><td>item count of each page, supports the .sync modifier</td><td>number</td><td>—</td><td>10</td></tr><tr><td>total</td><td>total item count</td><td>number</td><td>—</td><td>—</td></tr><tr><td>page-count</td><td>total page count. Set either <code>total</code> or <code>page-count</code> and pages will be displayed; if you need <code>page-sizes</code>, <code>total</code> is required</td><td>number</td><td>—</td><td>—</td></tr><tr><td>pager-count</td><td>number of pagers. Pagination collapses when the total page count exceeds this value</td><td>number</td><td>odd number between 5 and 21</td><td>7</td></tr><tr><td>current-page</td><td>current page number, supports the .sync modifier</td><td>number</td><td>—</td><td>1</td></tr><tr><td>layout</td><td>layout of Pagination, elements separated with a comma</td><td>string</td><td><code>sizes</code>, <code>prev</code>, <code>pager</code>, <code>next</code>, <code>jumper</code>, <code>-&gt;</code>, <code>total</code>, <code>slot</code></td><td>&#39;prev, pager, next, jumper, -&gt;, total&#39;</td></tr><tr><td>page-sizes</td><td>options of item count per page</td><td>number[]</td><td>—</td><td>[10, 20, 30, 40, 50, 100]</td></tr><tr><td>popper-class</td><td>custom class name for the page size Select&#39;s dropdown</td><td>string</td><td>—</td><td>—</td></tr><tr><td>prev-text</td><td>text for the prev button</td><td>string</td><td>—</td><td>—</td></tr><tr><td>next-text</td><td>text for the next button</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>whether Pagination is disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>hide-on-single-page</td><td>whether to hide when there&#39;s only one page</td><td>boolean</td><td>—</td><td>-</td></tr></tbody></table><h3 id="events"><a class="header-anchor" href="#events">¶</a> Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>size-change</td><td>triggers when <code>page-size</code> changes</td><td>the new page size</td></tr><tr><td>current-change</td><td>triggers when <code>current-page</code> changes</td><td>the new current page</td></tr><tr><td>prev-click</td><td>triggers when the prev button is clicked and current page changes</td><td>the new current page</td></tr><tr><td>next-click</td><td>triggers when the next button is clicked and current page changes</td><td>the new current page</td></tr></tbody></table><h3 id="slot"><a class="header-anchor" href="#slot">¶</a> Slot</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>custom content. To use this, you need to declare <code>slot</code> in <code>layout</code></td></tr></tbody></table>',6);var k={name:"component-doc",components:{"element-demo0":function(){const{createVNode:e,resolveComponent:t,openBlock:n,createBlock:o}=a,c={class:"block"},r=e("span",{class:"demonstration"},"When you have few pages",-1),d={class:"block"},l=e("span",{class:"demonstration"},"When you have more than 7 pages",-1);return Object.assign({render:function(a,s){const i=t("el-pagination");return n(),o("div",null,[e("div",c,[r,e(i,{layout:"prev, pager, next",total:50})]),e("div",d,[l,e(i,{layout:"prev, pager, next",total:1e3})])])}},{})}(),"element-demo1":function(){const{resolveComponent:e,createVNode:t,openBlock:n,createBlock:o}=a;return Object.assign({render:function(a,c){const r=e("el-pagination");return n(),o("div",null,[t(r,{"page-size":20,"pager-count":11,layout:"prev, pager, next",total:1e3})])}},{})}(),"element-demo2":function(){const{resolveComponent:e,createVNode:t,openBlock:n,createBlock:o}=a;return Object.assign({render:function(a,c){const r=e("el-pagination");return n(),o("div",null,[t(r,{background:"",layout:"prev, pager, next",total:1e3})])}},{})}(),"element-demo3":function(){const{resolveComponent:e,createVNode:t,openBlock:n,createBlock:o}=a;return Object.assign({render:function(a,c){const r=e("el-pagination");return n(),o("div",null,[t(r,{small:"",layout:"prev, pager, next",total:50})])}},{})}(),"element-demo4":function(){const{createVNode:e,resolveComponent:t,openBlock:n,createBlock:o}=a,c={class:"block"},r=e("span",{class:"demonstration"},"Total item count",-1),d={class:"block"},l=e("span",{class:"demonstration"},"Change page size",-1),s={class:"block"},i=e("span",{class:"demonstration"},"Jump to",-1),u={class:"block"},g=e("span",{class:"demonstration"},"All combined",-1);const h={methods:{handleSizeChange(e){console.log(e+" items per page")},handleCurrentChange(e){console.log("current page: "+e)}},data:()=>({currentPage1:5,currentPage2:5,currentPage3:5,currentPage4:4})};return Object.assign({render:function(a,h){const p=t("el-pagination");return n(),o("div",null,[e("div",c,[r,e(p,{"onSize-change":a.handleSizeChange,"onCurrent-change":a.handleCurrentChange,"current-page":a.currentPage1,"page-size":100,layout:"total, prev, pager, next",total:1e3},null,8,["onSize-change","onCurrent-change","current-page"])]),e("div",d,[l,e(p,{"onSize-change":a.handleSizeChange,"onCurrent-change":a.handleCurrentChange,"current-page":a.currentPage2,"page-sizes":[100,200,300,400],"page-size":100,layout:"sizes, prev, pager, next",total:1e3},null,8,["onSize-change","onCurrent-change","current-page"])]),e("div",s,[i,e(p,{"onSize-change":a.handleSizeChange,"onCurrent-change":a.handleCurrentChange,"current-page":a.currentPage3,"page-size":100,layout:"prev, pager, next, jumper",total:1e3},null,8,["onSize-change","onCurrent-change","current-page"])]),e("div",u,[g,e(p,{"onSize-change":a.handleSizeChange,"onCurrent-change":a.handleCurrentChange,"current-page":a.currentPage4,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},null,8,["onSize-change","onCurrent-change","current-page"])])])}},h)}(),"element-demo5":function(){const{resolveComponent:e,createVNode:t,openBlock:n,createBlock:o}=a;const c={data:()=>({value:!1})};return Object.assign({render:function(a,c){const r=e("el-switch"),d=e("el-pagination");return n(),o("div",null,[t("div",null,[t(r,{modelValue:a.value,"onUpdate:modelValue":c[1]||(c[1]=e=>a.value=e)},null,8,["modelValue"]),t(d,{"hide-on-single-page":a.value,total:5,layout:"prev, pager, next"},null,8,["hide-on-single-page"])])])}},c)}()},render:function(e,t,n,k,T,P){const S=Object(a.resolveComponent)("element-demo0"),B=Object(a.resolveComponent)("demo-block"),A=Object(a.resolveComponent)("element-demo1"),_=Object(a.resolveComponent)("element-demo2"),J=Object(a.resolveComponent)("element-demo3"),W=Object(a.resolveComponent)("element-demo4"),D=Object(a.resolveComponent)("element-demo5");return Object(a.openBlock)(),Object(a.createBlock)("section",o,[c,r,d,Object(a.createVNode)(B,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(S)]),highlight:Object(a.withCtx)(()=>[s]),default:Object(a.withCtx)(()=>[l]),_:1}),i,Object(a.createVNode)(B,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(A)]),highlight:Object(a.withCtx)(()=>[g]),default:Object(a.withCtx)(()=>[u]),_:1}),h,Object(a.createVNode)(B,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(_)]),highlight:Object(a.withCtx)(()=>[b]),default:Object(a.withCtx)(()=>[p]),_:1}),m,j,Object(a.createVNode)(B,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(J)]),highlight:Object(a.withCtx)(()=>[V]),default:Object(a.withCtx)(()=>[O]),_:1}),N,v,Object(a.createVNode)(B,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(W)]),highlight:Object(a.withCtx)(()=>[C]),default:Object(a.withCtx)(()=>[x]),_:1}),f,w,Object(a.createVNode)(B,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(D)]),highlight:Object(a.withCtx)(()=>[y]),_:1}),z])}};t.default=k}}]);