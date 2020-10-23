(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{545:function(e,n,t){"use strict";t.r(n);var o=t(0);const a={class:"content element-doc"},i=Object(o.createStaticVNode)('<h2 id="built-in-transition"><a class="header-anchor" href="#built-in-transition">¶</a> Built-in transition</h2><p>You can use Element&#39;s built-in transitions directly. Before that, please read the <a href="https://vuejs.org/v2/api/#transition">transition docs</a>.</p><h3 id="fade"><a class="header-anchor" href="#fade">¶</a> fade</h3>',3),l=Object(o.createVNode)("div",null,[Object(o.createVNode)("p",null,[Object(o.createTextVNode)("We have two fading effects: "),Object(o.createVNode)("code",null,"el-fade-in-linear"),Object(o.createTextVNode)(" and "),Object(o.createVNode)("code",null,"el-fade-in"),Object(o.createTextVNode)(".")])],-1),s=Object(o.createVNode)("pre",null,[Object(o.createVNode)("code",{class:"html"},'<template>\n  <div>\n    <el-button @click="show = !show">Click Me</el-button>\n\n    <div style="display: flex; margin-top: 20px; height: 100px;">\n      <transition name="el-fade-in-linear">\n        <div v-show="show" class="transition-box">.el-fade-in-linear</div>\n      </transition>\n      <transition name="el-fade-in">\n        <div v-show="show" class="transition-box">.el-fade-in</div>\n      </transition>\n    </div>\n  </div>\n</template>\n\n<script>\n    export default {\n    data: () => ({\n      show: true\n    })\n  }\n<\/script>\n\n<style>\n  .transition-box {\n    margin-bottom: 10px;\n    width: 200px;\n    height: 100px;\n    border-radius: 4px;\n    background-color: #409EFF;\n    text-align: center;\n    color: #fff;\n    padding: 40px 20px;\n    box-sizing: border-box;\n    margin-right: 20px;\n  }\n</style>\n')],-1),c=Object(o.createVNode)("h3",{id:"zoom"},[Object(o.createVNode)("a",{class:"header-anchor",href:"#zoom"},"¶"),Object(o.createTextVNode)(" zoom")],-1),r=Object(o.createVNode)("div",null,[Object(o.createVNode)("p",null,[Object(o.createVNode)("code",null,"el-zoom-in-center"),Object(o.createTextVNode)(", "),Object(o.createVNode)("code",null,"el-zoom-in-top"),Object(o.createTextVNode)(" and "),Object(o.createVNode)("code",null,"el-zoom-in-bottom"),Object(o.createTextVNode)(" are provided.")])],-1),d=Object(o.createVNode)("pre",null,[Object(o.createVNode)("code",{class:"html"},'<template>\n  <div>\n    <el-button @click="show2 = !show2">Click Me</el-button>\n\n    <div style="display: flex; margin-top: 20px; height: 100px;">\n      <transition name="el-zoom-in-center">\n        <div v-show="show2" class="transition-box">.el-zoom-in-center</div>\n      </transition>\n\n      <transition name="el-zoom-in-top">\n        <div v-show="show2" class="transition-box">.el-zoom-in-top</div>\n      </transition>\n\n      <transition name="el-zoom-in-bottom">\n        <div v-show="show2" class="transition-box">.el-zoom-in-bottom</div>\n      </transition>\n    </div>\n  </div>\n</template>\n\n<script>\n    export default {\n    data: () => ({\n      show2: true\n    })\n  }\n<\/script>\n\n<style>\n  .transition-box {\n    margin-bottom: 10px;\n    width: 200px;\n    height: 100px;\n    border-radius: 4px;\n    background-color: #409EFF;\n    text-align: center;\n    color: #fff;\n    padding: 40px 20px;\n    box-sizing: border-box;\n    margin-right: 20px;\n  }\n</style>\n')],-1),p=Object(o.createVNode)("h3",{id:"collapse"},[Object(o.createVNode)("a",{class:"header-anchor",href:"#collapse"},"¶"),Object(o.createTextVNode)(" collapse")],-1),h=Object(o.createVNode)("p",null,[Object(o.createTextVNode)("For collapse effect, use the "),Object(o.createVNode)("code",null,"el-collapse-transition"),Object(o.createTextVNode)(" component.")],-1),b=Object(o.createVNode)("pre",null,[Object(o.createVNode)("code",{class:"html"},'<template>\n  <div>\n    <el-button @click="show3 = !show3">Click Me</el-button>\n\n    <div style="margin-top: 20px; height: 200px;">\n      <el-collapse-transition>\n        <div v-show="show3">\n          <div class="transition-box">el-collapse-transition</div>\n          <div class="transition-box">el-collapse-transition</div>\n        </div>\n      </el-collapse-transition>\n    </div>\n  </div>\n</template>\n\n<script>\n    export default {\n    data: () => ({\n      show3: true\n    })\n  }\n<\/script>\n\n<style>\n  .transition-box {\n    margin-bottom: 10px;\n    width: 200px;\n    height: 100px;\n    border-radius: 4px;\n    background-color: #409EFF;\n    text-align: center;\n    color: #fff;\n    padding: 40px 20px;\n    box-sizing: border-box;\n    margin-right: 20px;\n  }\n</style>\n')],-1),m=Object(o.createStaticVNode)('<h3 id="on-demand"><a class="header-anchor" href="#on-demand">¶</a> On demand</h3><pre><code class="hljs language-js"><span class="hljs-comment">// fade/zoom</span>\n<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;element-plus/lib/theme-chalk/base.css&#39;</span>;\n<span class="hljs-comment">// collapse</span>\n<span class="hljs-keyword">import</span> CollapseTransition <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;element-plus/lib/transitions/collapse-transition&#39;</span>;\n<span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\nVue.component(CollapseTransition.name, CollapseTransition)\n</code></pre>',2);var u={name:"component-doc",components:{"element-demo0":function(){const{createTextVNode:e,resolveComponent:n,withCtx:t,createVNode:a,vShow:i,withDirectives:l,Transition:s,openBlock:c,createBlock:r}=o,d=e("Click Me"),p={style:{display:"flex","margin-top":"20px",height:"100px"}},h={class:"transition-box"},b={class:"transition-box"};return Object.assign({render:function(e,o){const m=n("el-button");return c(),r("div",null,[a("div",null,[a(m,{onClick:o[1]||(o[1]=n=>e.show=!e.show)},{default:t(()=>[d]),_:1}),a("div",p,[a(s,{name:"el-fade-in-linear"},{default:t(()=>[l(a("div",h,".el-fade-in-linear",512),[[i,e.show]])]),_:1}),a(s,{name:"el-fade-in"},{default:t(()=>[l(a("div",b,".el-fade-in",512),[[i,e.show]])]),_:1})])])])}},{data:()=>({show:!0})})}(),"element-demo1":function(){const{createTextVNode:e,resolveComponent:n,withCtx:t,createVNode:a,vShow:i,withDirectives:l,Transition:s,openBlock:c,createBlock:r}=o,d=e("Click Me"),p={style:{display:"flex","margin-top":"20px",height:"100px"}},h={class:"transition-box"},b={class:"transition-box"},m={class:"transition-box"};return Object.assign({render:function(e,o){const u=n("el-button");return c(),r("div",null,[a("div",null,[a(u,{onClick:o[1]||(o[1]=n=>e.show2=!e.show2)},{default:t(()=>[d]),_:1}),a("div",p,[a(s,{name:"el-zoom-in-center"},{default:t(()=>[l(a("div",h,".el-zoom-in-center",512),[[i,e.show2]])]),_:1}),a(s,{name:"el-zoom-in-top"},{default:t(()=>[l(a("div",b,".el-zoom-in-top",512),[[i,e.show2]])]),_:1}),a(s,{name:"el-zoom-in-bottom"},{default:t(()=>[l(a("div",m,".el-zoom-in-bottom",512),[[i,e.show2]])]),_:1})])])])}},{data:()=>({show2:!0})})}(),"element-demo2":function(){const{createTextVNode:e,resolveComponent:n,withCtx:t,createVNode:a,vShow:i,withDirectives:l,openBlock:s,createBlock:c}=o,r=e("Click Me"),d={style:{"margin-top":"20px",height:"200px"}},p=a("div",{class:"transition-box"},"el-collapse-transition",-1),h=a("div",{class:"transition-box"},"el-collapse-transition",-1);return Object.assign({render:function(e,o){const b=n("el-button"),m=n("el-collapse-transition");return s(),c("div",null,[a("div",null,[a(b,{onClick:o[1]||(o[1]=n=>e.show3=!e.show3)},{default:t(()=>[r]),_:1}),a("div",d,[a(m,null,{default:t(()=>[l(a("div",null,[p,h],512),[[i,e.show3]])]),_:1})])])])}},{data:()=>({show3:!0})})}()},render:function(e,n,t,u,x,v){const j=Object(o.resolveComponent)("element-demo0"),w=Object(o.resolveComponent)("demo-block"),f=Object(o.resolveComponent)("element-demo1"),O=Object(o.resolveComponent)("element-demo2");return Object(o.openBlock)(),Object(o.createBlock)("section",a,[i,Object(o.createVNode)(w,null,{source:Object(o.withCtx)(()=>[Object(o.createVNode)(j)]),highlight:Object(o.withCtx)(()=>[s]),default:Object(o.withCtx)(()=>[l]),_:1}),c,Object(o.createVNode)(w,null,{source:Object(o.withCtx)(()=>[Object(o.createVNode)(f)]),highlight:Object(o.withCtx)(()=>[d]),default:Object(o.withCtx)(()=>[r]),_:1}),p,h,Object(o.createVNode)(w,null,{source:Object(o.withCtx)(()=>[Object(o.createVNode)(O)]),highlight:Object(o.withCtx)(()=>[b]),_:1}),m])}};n.default=u}}]);