(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{433:function(e,t,c){"use strict";c.r(t);var n=c(0);const o={class:"content element-doc"},l=Object(n.createVNode)("h2",{id:"alert-jing-gao"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#alert-jing-gao"},"¶"),Object(n.createTextVNode)(" Alert 警告")],-1),r=Object(n.createVNode)("p",null,"用于页面中展示重要的提示信息。",-1),d=Object(n.createVNode)("h3",{id:"ji-ben-yong-fa"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#ji-ben-yong-fa"},"¶"),Object(n.createTextVNode)(" 基本用法")],-1),a=Object(n.createVNode)("p",null,"页面中的非浮层元素，不会自动消失。",-1),i=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Alert 组件提供四种主题，由"),Object(n.createVNode)("code",null,"type"),Object(n.createTextVNode)("属性指定，默认值为"),Object(n.createVNode)("code",null,"info"),Object(n.createTextVNode)("。")])],-1),s=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<template>\n  <el-alert\n    title="成功提示的文案"\n    type="success">\n  </el-alert>\n  <el-alert\n    title="消息提示的文案"\n    type="info">\n  </el-alert>\n  <el-alert\n    title="警告提示的文案"\n    type="warning">\n  </el-alert>\n  <el-alert\n    title="错误提示的文案"\n    type="error">\n  </el-alert>\n</template>\n')],-1),b=Object(n.createVNode)("h3",{id:"zhu-ti"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#zhu-ti"},"¶"),Object(n.createTextVNode)(" 主题")],-1),h=Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Alert 组件提供了两个不同的主题："),Object(n.createVNode)("code",null,"light"),Object(n.createTextVNode)("和"),Object(n.createVNode)("code",null,"dark"),Object(n.createTextVNode)("。")],-1),j=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("通过设置"),Object(n.createVNode)("code",null,"effect"),Object(n.createTextVNode)("属性来改变主题，默认为"),Object(n.createVNode)("code",null,"light"),Object(n.createTextVNode)("。")])],-1),u=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<template>\n  <el-alert\n    title="成功提示的文案"\n    type="success"\n    effect="dark">\n  </el-alert>\n  <el-alert\n    title="消息提示的文案"\n    type="info"\n    effect="dark">\n  </el-alert>\n  <el-alert\n    title="警告提示的文案"\n    type="warning"\n    effect="dark">\n  </el-alert>\n  <el-alert\n    title="错误提示的文案"\n    type="error"\n    effect="dark">\n  </el-alert>\n</template>\n')],-1),O=Object(n.createVNode)("h3",{id:"zi-ding-yi-guan-bi-an-niu"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#zi-ding-yi-guan-bi-an-niu"},"¶"),Object(n.createTextVNode)(" 自定义关闭按钮")],-1),p=Object(n.createVNode)("p",null,"自定义关闭按钮为文字或其他符号。",-1),N=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("在 Alert 组件中，你可以设置是否可关闭，关闭按钮的文本以及关闭时的回调函数。"),Object(n.createVNode)("code",null,"closable"),Object(n.createTextVNode)("属性决定是否可关闭，接受"),Object(n.createVNode)("code",null,"boolean"),Object(n.createTextVNode)("，默认为"),Object(n.createVNode)("code",null,"true"),Object(n.createTextVNode)("。你可以设置"),Object(n.createVNode)("code",null,"close-text"),Object(n.createTextVNode)("属性来代替右侧的关闭图标，注意："),Object(n.createVNode)("code",null,"close-text"),Object(n.createTextVNode)("必须为文本。设置"),Object(n.createVNode)("code",null,"close"),Object(n.createTextVNode)("事件来设置关闭时的回调。")])],-1),V=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<template>\n  <el-alert\n    title="不可关闭的 alert"\n    type="success"\n    :closable="false">\n  </el-alert>\n  <el-alert\n    title="自定义 close-text"\n    type="info"\n    close-text="知道了">\n  </el-alert>\n  <el-alert\n    title="设置了回调的 alert"\n    type="warning"\n    @close="hello">\n  </el-alert>\n</template>\n\n<script>\n  export default {\n    methods: {\n      hello() {\n        alert(\'Hello World!\');\n      }\n    }\n  }\n<\/script>\n')],-1),f=Object(n.createVNode)("h3",{id:"dai-you-icon"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#dai-you-icon"},"¶"),Object(n.createTextVNode)(" 带有 icon")],-1),m=Object(n.createVNode)("p",null,"表示某种状态时提升可读性。",-1),w=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("通过设置"),Object(n.createVNode)("code",null,"show-icon"),Object(n.createTextVNode)("属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。")])],-1),y=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<template>\n  <el-alert\n    title="成功提示的文案"\n    type="success"\n    show-icon>\n  </el-alert>\n  <el-alert\n    title="消息提示的文案"\n    type="info"\n    show-icon>\n  </el-alert>\n  <el-alert\n    title="警告提示的文案"\n    type="warning"\n    show-icon>\n  </el-alert>\n  <el-alert\n    title="错误提示的文案"\n    type="error"\n    show-icon>\n  </el-alert>\n</template>\n')],-1),x=Object(n.createVNode)("h3",{id:"wen-zi-ju-zhong"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#wen-zi-ju-zhong"},"¶"),Object(n.createTextVNode)(" 文字居中")],-1),g=Object(n.createVNode)("p",null,[Object(n.createTextVNode)("使用 "),Object(n.createVNode)("code",null,"center"),Object(n.createTextVNode)(" 属性让文字水平居中。")],-1),C=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<template>\n  <el-alert\n    title="成功提示的文案"\n    type="success"\n    center\n    show-icon>\n  </el-alert>\n  <el-alert\n    title="消息提示的文案"\n    type="info"\n    center\n    show-icon>\n  </el-alert>\n  <el-alert\n    title="警告提示的文案"\n    type="warning"\n    center\n    show-icon>\n  </el-alert>\n  <el-alert\n    title="错误提示的文案"\n    type="error"\n    center\n    show-icon>\n  </el-alert>\n</template>\n')],-1),v=Object(n.createVNode)("h3",{id:"dai-you-fu-zhu-xing-wen-zi-jie-shao"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#dai-you-fu-zhu-xing-wen-zi-jie-shao"},"¶"),Object(n.createTextVNode)(" 带有辅助性文字介绍")],-1),T=Object(n.createVNode)("p",null,"包含标题和内容，解释更详细的警告。",-1),k=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("除了必填的"),Object(n.createVNode)("code",null,"title"),Object(n.createTextVNode)("属性外，你可以设置"),Object(n.createVNode)("code",null,"description"),Object(n.createTextVNode)("属性来帮助你更好地介绍，我们称之为辅助性文字。辅助性文字只能存放单行文本，会自动换行显示。")])],-1),z=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<template>\n  <el-alert\n    title="带辅助性文字介绍"\n    type="success"\n    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">\n  </el-alert>\n</template>\n')],-1),B=Object(n.createVNode)("h3",{id:"dai-you-icon-he-fu-zhu-xing-wen-zi-jie-shao"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#dai-you-icon-he-fu-zhu-xing-wen-zi-jie-shao"},"¶"),Object(n.createTextVNode)(" 带有 icon 和辅助性文字介绍")],-1),_=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,"最后，这是一个同时具有 icon 和辅助性文字的样例。")],-1),A=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<template>\n  <el-alert\n    title="成功提示的文案"\n    type="success"\n    description="文字说明文字说明文字说明文字说明文字说明文字说明"\n    show-icon>\n  </el-alert>\n  <el-alert\n    title="消息提示的文案"\n    type="info"\n    description="文字说明文字说明文字说明文字说明文字说明文字说明"\n    show-icon>\n  </el-alert>\n  <el-alert\n    title="警告提示的文案"\n    type="warning"\n    description="文字说明文字说明文字说明文字说明文字说明文字说明"\n    show-icon>\n  </el-alert>\n  <el-alert\n    title="错误提示的文案"\n    type="error"\n    description="文字说明文字说明文字说明文字说明文字说明文字说明"\n    show-icon>\n  </el-alert>\n</template>\n')],-1),H=Object(n.createStaticVNode)('<h3 id="attributes"><a class="header-anchor" href="#attributes">¶</a> Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>string</td><td>—</td><td>—</td></tr><tr><td>type</td><td>主题</td><td>string</td><td>success/warning/info/error</td><td>info</td></tr><tr><td>description</td><td>辅助性文字。也可通过默认 slot 传入</td><td>string</td><td>—</td><td>—</td></tr><tr><td>closable</td><td>是否可关闭</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>center</td><td>文字是否居中</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>close-text</td><td>关闭按钮自定义文本</td><td>string</td><td>—</td><td>—</td></tr><tr><td>show-icon</td><td>是否显示图标</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>effect</td><td>选择提供的主题</td><td>string</td><td>light/dark</td><td>light</td></tr></tbody></table><h3 id="slot"><a class="header-anchor" href="#slot">¶</a> Slot</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>描述</td></tr><tr><td>title</td><td>标题的内容</td></tr></tbody></table><h3 id="events"><a class="header-anchor" href="#events">¶</a> Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>close</td><td>关闭alert时触发的事件</td><td>—</td></tr></tbody></table>',6);var J={name:"component-doc",components:{"element-demo0":function(){const{resolveComponent:e,createVNode:t,openBlock:c,createBlock:o}=n;return Object.assign({render:function(n,l){const r=e("el-alert");return c(),o("div",null,[t(r,{title:"成功提示的文案",type:"success"}),t(r,{title:"消息提示的文案",type:"info"}),t(r,{title:"警告提示的文案",type:"warning"}),t(r,{title:"错误提示的文案",type:"error"})])}},{})}(),"element-demo1":function(){const{resolveComponent:e,createVNode:t,openBlock:c,createBlock:o}=n;return Object.assign({render:function(n,l){const r=e("el-alert");return c(),o("div",null,[t(r,{title:"成功提示的文案",type:"success",effect:"dark"}),t(r,{title:"消息提示的文案",type:"info",effect:"dark"}),t(r,{title:"警告提示的文案",type:"warning",effect:"dark"}),t(r,{title:"错误提示的文案",type:"error",effect:"dark"})])}},{})}(),"element-demo2":function(){const{resolveComponent:e,createVNode:t,openBlock:c,createBlock:o}=n;const l={methods:{hello(){alert("Hello World!")}}};return Object.assign({render:function(n,l){const r=e("el-alert");return c(),o("div",null,[t(r,{title:"不可关闭的 alert",type:"success",closable:!1}),t(r,{title:"自定义 close-text",type:"info","close-text":"知道了"}),t(r,{title:"设置了回调的 alert",type:"warning",onClose:n.hello},null,8,["onClose"])])}},l)}(),"element-demo3":function(){const{resolveComponent:e,createVNode:t,openBlock:c,createBlock:o}=n;return Object.assign({render:function(n,l){const r=e("el-alert");return c(),o("div",null,[t(r,{title:"成功提示的文案",type:"success","show-icon":""}),t(r,{title:"消息提示的文案",type:"info","show-icon":""}),t(r,{title:"警告提示的文案",type:"warning","show-icon":""}),t(r,{title:"错误提示的文案",type:"error","show-icon":""})])}},{})}(),"element-demo4":function(){const{resolveComponent:e,createVNode:t,openBlock:c,createBlock:o}=n;return Object.assign({render:function(n,l){const r=e("el-alert");return c(),o("div",null,[t(r,{title:"成功提示的文案",type:"success",center:"","show-icon":""}),t(r,{title:"消息提示的文案",type:"info",center:"","show-icon":""}),t(r,{title:"警告提示的文案",type:"warning",center:"","show-icon":""}),t(r,{title:"错误提示的文案",type:"error",center:"","show-icon":""})])}},{})}(),"element-demo5":function(){const{resolveComponent:e,createVNode:t,openBlock:c,createBlock:o}=n;return Object.assign({render:function(n,l){const r=e("el-alert");return c(),o("div",null,[t(r,{title:"带辅助性文字介绍",type:"success",description:"这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"})])}},{})}(),"element-demo6":function(){const{resolveComponent:e,createVNode:t,openBlock:c,createBlock:o}=n;return Object.assign({render:function(n,l){const r=e("el-alert");return c(),o("div",null,[t(r,{title:"成功提示的文案",type:"success",description:"文字说明文字说明文字说明文字说明文字说明文字说明","show-icon":""}),t(r,{title:"消息提示的文案",type:"info",description:"文字说明文字说明文字说明文字说明文字说明文字说明","show-icon":""}),t(r,{title:"警告提示的文案",type:"warning",description:"文字说明文字说明文字说明文字说明文字说明文字说明","show-icon":""}),t(r,{title:"错误提示的文案",type:"error",description:"文字说明文字说明文字说明文字说明文字说明文字说明","show-icon":""})])}},{})}()},render:function(e,t,c,J,S,W){const D=Object(n.resolveComponent)("element-demo0"),E=Object(n.resolveComponent)("demo-block"),q=Object(n.resolveComponent)("element-demo1"),F=Object(n.resolveComponent)("element-demo2"),G=Object(n.resolveComponent)("element-demo3"),I=Object(n.resolveComponent)("element-demo4"),K=Object(n.resolveComponent)("element-demo5"),L=Object(n.resolveComponent)("element-demo6");return Object(n.openBlock)(),Object(n.createBlock)("section",o,[l,r,d,a,Object(n.createVNode)(E,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(D)]),highlight:Object(n.withCtx)(()=>[s]),default:Object(n.withCtx)(()=>[i]),_:1}),b,h,Object(n.createVNode)(E,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(q)]),highlight:Object(n.withCtx)(()=>[u]),default:Object(n.withCtx)(()=>[j]),_:1}),O,p,Object(n.createVNode)(E,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(F)]),highlight:Object(n.withCtx)(()=>[V]),default:Object(n.withCtx)(()=>[N]),_:1}),f,m,Object(n.createVNode)(E,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(G)]),highlight:Object(n.withCtx)(()=>[y]),default:Object(n.withCtx)(()=>[w]),_:1}),x,g,Object(n.createVNode)(E,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(I)]),highlight:Object(n.withCtx)(()=>[C]),_:1}),v,T,Object(n.createVNode)(E,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(K)]),highlight:Object(n.withCtx)(()=>[z]),default:Object(n.withCtx)(()=>[k]),_:1}),B,Object(n.createVNode)(E,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(L)]),highlight:Object(n.withCtx)(()=>[A]),default:Object(n.withCtx)(()=>[_]),_:1}),H])}};t.default=J}}]);