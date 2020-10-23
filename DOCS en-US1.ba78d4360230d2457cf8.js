(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{492:function(e,t,a){"use strict";a.r(t);var c=a(0);const r={class:"content element-doc"},n=Object(c.createVNode)("h2",{id:"avatar-avatar"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#avatar-avatar"},"¶"),Object(c.createTextVNode)(" Avatar avatar")],-1),s=Object(c.createVNode)("p",null,"Avatars can be used to represent people or objects. It supports images, Icons, or characters.",-1),l=Object(c.createVNode)("h3",{id:"basic"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#basic"},"¶"),Object(c.createTextVNode)(" Basic")],-1),o=Object(c.createVNode)("p",null,[Object(c.createTextVNode)("use "),Object(c.createVNode)("code",null,"shape"),Object(c.createTextVNode)(" and "),Object(c.createVNode)("code",null,"size"),Object(c.createTextVNode)(" prop to set avatar's shape and size")],-1),d=Object(c.createVNode)("pre",null,[Object(c.createVNode)("code",{class:"html"},'<template>\n  <el-row class="demo-avatar demo-basic">\n    <el-col :span="12">\n      <div class="sub-title">circle</div>\n      <div class="demo-basic--circle">\n        <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>\n        <div class="block" v-for="size in sizeList" :key="size">\n          <el-avatar :size="size" :src="circleUrl"></el-avatar>\n        </div>\n      </div>\n    </el-col>  \n    <el-col :span="12">\n      <div class="sub-title">square</div>\n      <div class="demo-basic--circle">\n        <div class="block"><el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar></div>\n        <div class="block" v-for="size in sizeList" :key="size">\n          <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>\n        </div>\n      </div>\n    </el-col> \n  </el-row>\n</template>\n<script>\n  export default {\n    data () {\n      return {\n        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",\n        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",\n        sizeList: ["large", "medium", "small"]\n      }\n    }\n  }\n<\/script>\n\n')],-1),i=Object(c.createVNode)("h3",{id:"types"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#types"},"¶"),Object(c.createTextVNode)(" Types")],-1),b=Object(c.createVNode)("p",null,"It supports images, Icons, or characters",-1),h=Object(c.createVNode)("pre",null,[Object(c.createVNode)("code",{class:"html"},'<template>\n  <div class="demo-type">\n    <div>\n      <el-avatar icon="el-icon-user-solid"></el-avatar>\n    </div>\n    <div>\n      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>\n    </div>\n    <div>\n      <el-avatar> user </el-avatar>\n    </div>\n  </div>\n</template>\n')],-1),p=Object(c.createVNode)("h3",{id:"fallback-when-image-load-error"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#fallback-when-image-load-error"},"¶"),Object(c.createTextVNode)(" Fallback when image load error")],-1),u=Object(c.createVNode)("p",null,"fallback when image load error",-1),m=Object(c.createVNode)("pre",null,[Object(c.createVNode)("code",{class:"html"},'<template>\n  <div class="demo-type">\n    <el-avatar :size="60" src="https://empty" @error="errorHandler">\n      <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>\n      </el-avatar>\n  </div>\n</template>\n<script>\n  export default {\n    methods: {\n      errorHandler() {\n        return true\n      }\n    }\n  }\n<\/script>\n\n')],-1),v=Object(c.createVNode)("h3",{id:"how-the-image-fit-its-container"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#how-the-image-fit-its-container"},"¶"),Object(c.createTextVNode)(" How the image fit its container")],-1),f=Object(c.createVNode)("p",null,[Object(c.createTextVNode)("Set how the image fit its container for an image avatar, same as "),Object(c.createVNode)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"},"object-fit"),Object(c.createTextVNode)(".")],-1),j=Object(c.createVNode)("pre",null,[Object(c.createVNode)("code",{class:"html"},'<template>\n  <div class="demo-fit">\n    <div class="block" v-for="fit in fits" :key="fit">\n        <span class="title">{{ fit }}</span>\n        <el-avatar shape="square" :size="100" :fit="fit" :src="url"></el-avatar>\n    </div>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        fits: [\'fill\', \'contain\', \'cover\', \'none\', \'scale-down\'],\n        url: \'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg\'\n      }\n    }\n  }\n<\/script>\n\n')],-1),g=Object(c.createStaticVNode)('<h3 id="attributes"><a class="header-anchor" href="#attributes">¶</a> Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>icon</td><td>set representation type to Icon, more info on Icon Component</td><td>string</td><td></td><td></td></tr><tr><td>size</td><td>set avatar size</td><td>number/string</td><td>number / large / medium / small</td><td>large</td></tr><tr><td>shape</td><td>set avatar shape</td><td>string</td><td>circle / square</td><td>circle</td></tr><tr><td>src</td><td>the address of the image for an image avatar</td><td>string</td><td></td><td></td></tr><tr><td>srcSet</td><td>A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use</td><td>string</td><td></td><td></td></tr><tr><td>alt</td><td>This attribute defines an alternative text description of the image</td><td>string</td><td></td><td></td></tr><tr><td>fit</td><td>set how the image fit its container for an image avatar</td><td>string</td><td>fill / contain / cover / none / scale-down</td><td>cover</td></tr></tbody></table><h3 id="events"><a class="header-anchor" href="#events">¶</a> Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>error</td><td>handler when img load error, return false to prevent default fallback behavior</td><td>(e: Event)</td></tr></tbody></table><h3 id="slot"><a class="header-anchor" href="#slot">¶</a> Slot</h3><p>| Slot Name | Description | | default | customize avatar content |</p>',6);var O={name:"component-doc",components:{"element-demo0":function(){const{createVNode:e,resolveComponent:t,renderList:a,Fragment:r,openBlock:n,createBlock:s,withCtx:l}=c,o=e("div",{class:"sub-title"},"circle",-1),d={class:"demo-basic--circle"},i={class:"block"},b=e("div",{class:"sub-title"},"square",-1),h={class:"demo-basic--circle"},p={class:"block"};const u={data:()=>({circleUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",squareUrl:"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",sizeList:["large","medium","small"]})};return Object.assign({render:function(c,u){const m=t("el-avatar"),v=t("el-col"),f=t("el-row");return n(),s("div",null,[e(f,{class:"demo-avatar demo-basic"},{default:l(()=>[e(v,{span:12},{default:l(()=>[o,e("div",d,[e("div",i,[e(m,{size:50,src:c.circleUrl},null,8,["src"])]),(n(!0),s(r,null,a(c.sizeList,t=>(n(),s("div",{class:"block",key:t},[e(m,{size:t,src:c.circleUrl},null,8,["size","src"])]))),128))])]),_:1}),e(v,{span:12},{default:l(()=>[b,e("div",h,[e("div",p,[e(m,{shape:"square",size:50,src:c.squareUrl},null,8,["src"])]),(n(!0),s(r,null,a(c.sizeList,t=>(n(),s("div",{class:"block",key:t},[e(m,{shape:"square",size:t,src:c.squareUrl},null,8,["size","src"])]))),128))])]),_:1})]),_:1})])}},u)}(),"element-demo1":function(){const{resolveComponent:e,createVNode:t,createTextVNode:a,withCtx:r,openBlock:n,createBlock:s}=c,l={class:"demo-type"},o=a(" user ");return Object.assign({render:function(a,c){const d=e("el-avatar");return n(),s("div",null,[t("div",l,[t("div",null,[t(d,{icon:"el-icon-user-solid"})]),t("div",null,[t(d,{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"})]),t("div",null,[t(d,null,{default:r(()=>[o]),_:1})])])])}},{})}(),"element-demo2":function(){const{createVNode:e,resolveComponent:t,withCtx:a,openBlock:r,createBlock:n}=c,s={class:"demo-type"},l=e("img",{src:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"},null,-1);const o={methods:{errorHandler:()=>!0}};return Object.assign({render:function(c,o){const d=t("el-avatar");return r(),n("div",null,[e("div",s,[e(d,{size:60,src:"https://empty",onError:c.errorHandler},{default:a(()=>[l]),_:1},8,["onError"])])])}},o)}(),"element-demo3":function(){const{renderList:e,Fragment:t,openBlock:a,createBlock:r,toDisplayString:n,createVNode:s,resolveComponent:l}=c,o={class:"demo-fit"},d={class:"title"};const i={data:()=>({fits:["fill","contain","cover","none","scale-down"],url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"})};return Object.assign({render:function(c,i){const b=l("el-avatar");return a(),r("div",null,[s("div",o,[(a(!0),r(t,null,e(c.fits,e=>(a(),r("div",{class:"block",key:e},[s("span",d,n(e),1),s(b,{shape:"square",size:100,fit:e,src:c.url},null,8,["fit","src"])]))),128))])])}},i)}()},render:function(e,t,a,O,N,V){const k=Object(c.resolveComponent)("element-demo0"),w=Object(c.resolveComponent)("demo-block"),z=Object(c.resolveComponent)("element-demo1"),x=Object(c.resolveComponent)("element-demo2"),y=Object(c.resolveComponent)("element-demo3");return Object(c.openBlock)(),Object(c.createBlock)("section",r,[n,s,l,o,Object(c.createVNode)(w,null,{source:Object(c.withCtx)(()=>[Object(c.createVNode)(k)]),highlight:Object(c.withCtx)(()=>[d]),_:1}),i,b,Object(c.createVNode)(w,null,{source:Object(c.withCtx)(()=>[Object(c.createVNode)(z)]),highlight:Object(c.withCtx)(()=>[h]),_:1}),p,u,Object(c.createVNode)(w,null,{source:Object(c.withCtx)(()=>[Object(c.createVNode)(x)]),highlight:Object(c.withCtx)(()=>[m]),_:1}),v,f,Object(c.createVNode)(w,null,{source:Object(c.withCtx)(()=>[Object(c.createVNode)(y)]),highlight:Object(c.withCtx)(()=>[j]),_:1}),g])}};t.default=O}}]);