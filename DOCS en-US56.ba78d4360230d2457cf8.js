(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{543:function(t,e,o){"use strict";o.r(e);var n=o(0);const l={class:"content element-doc"},d=Object(n.createVNode)("h2",{id:"tooltip"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#tooltip"},"¶"),Object(n.createTextVNode)(" Tooltip")],-1),c=Object(n.createVNode)("p",null,"Display prompt information for mouse hover.",-1),a=Object(n.createVNode)("h3",{id:"basic-usage"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#basic-usage"},"¶"),Object(n.createTextVNode)(" Basic usage")],-1),r=Object(n.createVNode)("p",null,"Tooltip has 9 placements.",-1),i=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Use attribute "),Object(n.createVNode)("code",null,"content"),Object(n.createTextVNode)(" to set the display content when hover. The attribute "),Object(n.createVNode)("code",null,"placement"),Object(n.createTextVNode)(" determines the position of the tooltip. Its value is "),Object(n.createVNode)("code",null,"[orientation]-[alignment]"),Object(n.createTextVNode)(" with four orientations "),Object(n.createVNode)("code",null,"top"),Object(n.createTextVNode)(", "),Object(n.createVNode)("code",null,"left"),Object(n.createTextVNode)(", "),Object(n.createVNode)("code",null,"right"),Object(n.createTextVNode)(", "),Object(n.createVNode)("code",null,"bottom"),Object(n.createTextVNode)(" and three alignments "),Object(n.createVNode)("code",null,"start"),Object(n.createTextVNode)(", "),Object(n.createVNode)("code",null,"end"),Object(n.createTextVNode)(", "),Object(n.createVNode)("code",null,"null"),Object(n.createTextVNode)(", and the default alignment is null. Take "),Object(n.createVNode)("code",null,'placement="left-end"'),Object(n.createTextVNode)(" for example, Tooltip will display on the left of the element which you are hovering and the bottom of the tooltip aligns with the bottom of the element.")])],-1),s=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<div class="box">\n  <div class="top">\n    <el-tooltip class="item" effect="dark" content="Top Left prompts info" placement="top-start">\n      <el-button>top-start</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Top Center prompts info" placement="top">\n      <el-button>top</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Top Right prompts info" placement="top-end">\n      <el-button>top-end</el-button>\n    </el-tooltip>\n  </div>\n  <div class="left">\n    <el-tooltip class="item" effect="dark" content="Left Top prompts info" placement="left-start">\n      <el-button>left-start</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Left Center prompts info" placement="left">\n      <el-button>left</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Left Bottom prompts info" placement="left-end">\n      <el-button>left-end</el-button>\n    </el-tooltip>\n  </div>\n\n  <div class="right">\n    <el-tooltip class="item" effect="dark" content="Right Top prompts info" placement="right-start">\n      <el-button>right-start</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Right Center prompts info" placement="right">\n      <el-button>right</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Right Bottom prompts info" placement="right-end">\n      <el-button>right-end</el-button>\n    </el-tooltip>\n  </div>\n  <div class="bottom">\n    <el-tooltip class="item" effect="dark" content="Bottom Left prompts info" placement="bottom-start">\n      <el-button>bottom-start</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Bottom Center prompts info" placement="bottom">\n      <el-button>bottom</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Bottom Right prompts info" placement="bottom-end">\n      <el-button>bottom-end</el-button>\n    </el-tooltip>\n  </div>\n</div>\n\n<style>\n  .box {\n    width: 400px;\n\n    .top {\n      text-align: center;\n    }\n\n    .left {\n      float: left;\n      width: 110px;\n    }\n\n    .right {\n      float: right;\n      width: 110px;\n    }\n\n    .bottom {\n      clear: both;\n      text-align: center;\n    }\n\n    .item {\n      margin: 4px;\n    }\n\n    .left .el-tooltip__popper,\n    .right .el-tooltip__popper {\n      padding: 8px 10px;\n    }\n\n    .el-button {\n      width: 110px;\n    }\n  }\n</style>\n')],-1),p=Object(n.createVNode)("h3",{id:"theme"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#theme"},"¶"),Object(n.createTextVNode)(" Theme")],-1),b=Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Tooltip has two themes: "),Object(n.createVNode)("code",null,"dark"),Object(n.createTextVNode)(" and "),Object(n.createVNode)("code",null,"light"),Object(n.createTextVNode)("。")],-1),u=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Set "),Object(n.createVNode)("code",null,"effect"),Object(n.createTextVNode)(" to modify theme, and the default value is "),Object(n.createVNode)("code",null,"dark"),Object(n.createTextVNode)(".")])],-1),f=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<el-tooltip content="Top center" placement="top">\n  <el-button>Dark</el-button>\n</el-tooltip>\n<el-tooltip content="Bottom center" placement="bottom" effect="light">\n  <el-button>Light</el-button>\n</el-tooltip>\n')],-1),m=Object(n.createVNode)("h3",{id:"more-content"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#more-content"},"¶"),Object(n.createTextVNode)(" More Content")],-1),h=Object(n.createVNode)("p",null,"Display multiple lines of text and set their format.",-1),j=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Override attribute "),Object(n.createVNode)("code",null,"content"),Object(n.createTextVNode)(" of "),Object(n.createVNode)("code",null,"el-tooltip"),Object(n.createTextVNode)(" by adding a slot named "),Object(n.createVNode)("code",null,"content"),Object(n.createTextVNode)(".")])],-1),O=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<el-tooltip placement="top">\n  <div slot="content">multiple lines<br/>second line</div>\n  <el-button>Top center</el-button>\n</el-tooltip>\n')],-1),V=Object(n.createStaticVNode)('<h3 id="advanced-usage"><a class="header-anchor" href="#advanced-usage">¶</a> Advanced usage</h3><p>In addition to basic usages, there are some attributes that allow you to customize your own:</p><p><code>transition</code> attribute allows you to customize the animation in which the tooltip shows or hides, and the default value is el-fade-in-linear.</p><p><code>disabled</code> attribute allows you to disable <code>tooltip</code>. You just need set it to <code>true</code>.</p><p>In fact, Tooltip is an extension based on <a href="https://github.com/element-component/vue-popper">Vue-popper</a>, you can use any attribute that are allowed in Vue-popper.</p>',5),N=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<template>\n  <el-tooltip :disabled="disabled" content="click to close tooltip function" placement="bottom" effect="light">\n    <el-button @click="disabled = !disabled">click to {{disabled ? \'active\' : \'close\'}} tooltip function</el-button>\n  </el-tooltip>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        disabled: false\n      };\n    }\n  };\n<\/script>\n\n<style>\n  .slide-fade-enter-active {\n    transition: all .3s ease;\n  }\n  .slide-fade-leave-active {\n    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);\n  }\n  .slide-fade-enter, .expand-fade-leave-active {\n    margin-left: 20px;\n    opacity: 0;\n  }\n</style>\n')],-1),g=Object(n.createStaticVNode)('<div class="tip"><p>The <code>router-link</code> component is not supported in tooltip, please use <code>vm.$router.push</code>.</p><p>Disabled form elements are not supported for Tooltip, more information can be found at <a href="https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter">MDN</a>. You need to wrap the disabled form element with a container element for Tooltip to work.</p></div><h3 id="attributes"><a class="header-anchor" href="#attributes">¶</a> Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>effect</td><td>Tooltip theme</td><td>string</td><td>dark/light</td><td>dark</td></tr><tr><td>content</td><td>display content, can be overridden by <code>slot#content</code></td><td>String</td><td>—</td><td>—</td></tr><tr><td>placement</td><td>position of Tooltip</td><td>string</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td><td>bottom</td></tr><tr><td>value / v-model</td><td>visibility of Tooltip</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>whether Tooltip is disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>offset</td><td>offset of the Tooltip</td><td>number</td><td>—</td><td>0</td></tr><tr><td>transition</td><td>animation name</td><td>string</td><td>—</td><td>el-fade-in-linear</td></tr><tr><td>visible-arrow</td><td>whether an arrow is displayed. For more information, check <a href="https://github.com/element-component/vue-popper">Vue-popper</a> page</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>popper-options</td><td><a href="https://popper.js.org/documentation.html">popper.js</a> parameters</td><td>Object</td><td>refer to <a href="https://popper.js.org/documentation.html">popper.js</a> doc</td><td><code>{ boundariesElement: &#39;body&#39;, gpuAcceleration: false }</code></td></tr><tr><td>open-delay</td><td>delay of appearance, in millisecond</td><td>number</td><td>—</td><td>0</td></tr><tr><td>manual</td><td>whether to control Tooltip manually. <code>mouseenter</code> and <code>mouseleave</code> won&#39;t have effects if set to <code>true</code></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>popper-class</td><td>custom class name for Tooltip&#39;s popper</td><td>string</td><td>—</td><td>—</td></tr><tr><td>enterable</td><td>whether the mouse can enter the tooltip</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>hide-after</td><td>timeout in milliseconds to hide tooltip</td><td>number</td><td>—</td><td>0</td></tr><tr><td>tabindex</td><td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a> of Tooltip</td><td>number</td><td>—</td><td>0</td></tr></tbody></table>',3);var v={name:"component-doc",components:{"element-demo0":function(){const{createTextVNode:t,resolveComponent:e,withCtx:o,createVNode:l,openBlock:d,createBlock:c}=n,a={class:"box"},r={class:"top"},i=t("top-start"),s=t("top"),p=t("top-end"),b={class:"left"},u=t("left-start"),f=t("left"),m=t("left-end"),h={class:"right"},j=t("right-start"),O=t("right"),V=t("right-end"),N={class:"bottom"},g=t("bottom-start"),v=t("bottom"),x=t("bottom-end");return Object.assign({render:function(t,n){const T=e("el-button"),k=e("el-tooltip");return d(),c("div",null,[l("div",a,[l("div",r,[l(k,{class:"item",effect:"dark",content:"Top Left prompts info",placement:"top-start"},{default:o(()=>[l(T,null,{default:o(()=>[i]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Top Center prompts info",placement:"top"},{default:o(()=>[l(T,null,{default:o(()=>[s]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Top Right prompts info",placement:"top-end"},{default:o(()=>[l(T,null,{default:o(()=>[p]),_:1})]),_:1})]),l("div",b,[l(k,{class:"item",effect:"dark",content:"Left Top prompts info",placement:"left-start"},{default:o(()=>[l(T,null,{default:o(()=>[u]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Left Center prompts info",placement:"left"},{default:o(()=>[l(T,null,{default:o(()=>[f]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Left Bottom prompts info",placement:"left-end"},{default:o(()=>[l(T,null,{default:o(()=>[m]),_:1})]),_:1})]),l("div",h,[l(k,{class:"item",effect:"dark",content:"Right Top prompts info",placement:"right-start"},{default:o(()=>[l(T,null,{default:o(()=>[j]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Right Center prompts info",placement:"right"},{default:o(()=>[l(T,null,{default:o(()=>[O]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Right Bottom prompts info",placement:"right-end"},{default:o(()=>[l(T,null,{default:o(()=>[V]),_:1})]),_:1})]),l("div",N,[l(k,{class:"item",effect:"dark",content:"Bottom Left prompts info",placement:"bottom-start"},{default:o(()=>[l(T,null,{default:o(()=>[g]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Bottom Center prompts info",placement:"bottom"},{default:o(()=>[l(T,null,{default:o(()=>[v]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Bottom Right prompts info",placement:"bottom-end"},{default:o(()=>[l(T,null,{default:o(()=>[x]),_:1})]),_:1})])])])}},{})}(),"element-demo1":function(){const{createTextVNode:t,resolveComponent:e,withCtx:o,createVNode:l,openBlock:d,createBlock:c}=n,a=t("Dark"),r=t("Light");return Object.assign({render:function(t,n){const i=e("el-button"),s=e("el-tooltip");return d(),c("div",null,[l(s,{content:"Top center",placement:"top"},{default:o(()=>[l(i,null,{default:o(()=>[a]),_:1})]),_:1}),l(s,{content:"Bottom center",placement:"bottom",effect:"light"},{default:o(()=>[l(i,null,{default:o(()=>[r]),_:1})]),_:1})])}},{})}(),"element-demo2":function(){const{createVNode:t,createTextVNode:e,resolveComponent:o,withCtx:l,openBlock:d,createBlock:c}=n,a=t("div",{slot:"content"},[e("multiple lines"),t("br"),e("second line")],-1),r=e("Top center");return Object.assign({render:function(e,n){const i=o("el-button"),s=o("el-tooltip");return d(),c("div",null,[t(s,{placement:"top"},{default:l(()=>[a,t(i,null,{default:l(()=>[r]),_:1})]),_:1})])}},{})}(),"element-demo3":function(){const{toDisplayString:t,createTextVNode:e,resolveComponent:o,withCtx:l,createVNode:d,openBlock:c,createBlock:a}=n;const r={data:()=>({disabled:!1})};return Object.assign({render:function(n,r){const i=o("el-button"),s=o("el-tooltip");return c(),a("div",null,[d(s,{disabled:n.disabled,content:"click to close tooltip function",placement:"bottom",effect:"light"},{default:l(()=>[d(i,{onClick:r[1]||(r[1]=t=>n.disabled=!n.disabled)},{default:l(()=>[e("click to "+t(n.disabled?"active":"close")+" tooltip function",1)]),_:1})]),_:1},8,["disabled"])])}},r)}()},render:function(t,e,o,v,x,T){const k=Object(n.resolveComponent)("element-demo0"),w=Object(n.resolveComponent)("demo-block"),_=Object(n.resolveComponent)("element-demo1"),C=Object(n.resolveComponent)("element-demo2"),y=Object(n.resolveComponent)("element-demo3");return Object(n.openBlock)(),Object(n.createBlock)("section",l,[d,c,a,r,Object(n.createVNode)(w,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(k)]),highlight:Object(n.withCtx)(()=>[s]),default:Object(n.withCtx)(()=>[i]),_:1}),p,b,Object(n.createVNode)(w,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(_)]),highlight:Object(n.withCtx)(()=>[f]),default:Object(n.withCtx)(()=>[u]),_:1}),m,h,Object(n.createVNode)(w,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(C)]),highlight:Object(n.withCtx)(()=>[O]),default:Object(n.withCtx)(()=>[j]),_:1}),V,Object(n.createVNode)(w,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(y)]),highlight:Object(n.withCtx)(()=>[N]),_:1}),g])}};e.default=v}}]);