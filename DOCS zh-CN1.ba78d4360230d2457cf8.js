(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{434:function(e,t,c){"use strict";c.r(t);var a=c(0);const r={class:"content element-doc"},n=Object(a.createVNode)("h2",{id:"avatar-tou-xiang"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#avatar-tou-xiang"},"¶"),Object(a.createTextVNode)(" Avatar 头像")],-1),l=Object(a.createVNode)("p",null,"用图标、图片或者字符的形式展示用户或事物信息。",-1),d=Object(a.createVNode)("h3",{id:"ji-ben-yong-fa"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#ji-ben-yong-fa"},"¶"),Object(a.createTextVNode)(" 基本用法")],-1),s=Object(a.createVNode)("p",null,[Object(a.createTextVNode)("通过 "),Object(a.createVNode)("code",null,"shape"),Object(a.createTextVNode)(" 和 "),Object(a.createVNode)("code",null,"size"),Object(a.createTextVNode)(" 设置头像的形状和大小。")],-1),o=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},'<template>\n  <el-row class="demo-avatar demo-basic">\n    <el-col :span="12">\n      <div class="sub-title">circle</div>\n      <div class="demo-basic--circle">\n        <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>\n        <div class="block" v-for="size in sizeList" :key="size">\n          <el-avatar :size="size" :src="circleUrl"></el-avatar>\n        </div>\n      </div>\n    </el-col>  \n    <el-col :span="12">\n      <div class="sub-title">square</div>\n      <div class="demo-basic--circle">\n        <div class="block"><el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar></div>\n        <div class="block" v-for="size in sizeList" :key="size">\n          <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>\n        </div>\n      </div>\n    </el-col> \n  </el-row>\n</template>\n<script>\n  export default {\n    data () {\n      return {\n        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",\n        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",\n        sizeList: ["large", "medium", "small"]\n      }\n    }\n  }\n<\/script>\n\n')],-1),i=Object(a.createVNode)("h3",{id:"zhan-shi-lei-xing"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#zhan-shi-lei-xing"},"¶"),Object(a.createTextVNode)(" 展示类型")],-1),b=Object(a.createVNode)("p",null,"支持三种类型：图标、图片和字符",-1),u=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},'<template>\n  <div class="demo-type">\n    <div>\n      <el-avatar icon="el-icon-user-solid"></el-avatar>\n    </div>\n    <div>\n      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>\n    </div>\n    <div>\n      <el-avatar> user </el-avatar>\n    </div>\n  </div>\n</template>\n')],-1),h=Object(a.createVNode)("h3",{id:"tu-pian-jia-zai-shi-bai-de-fallback-xing-wei"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#tu-pian-jia-zai-shi-bai-de-fallback-xing-wei"},"¶"),Object(a.createTextVNode)(" 图片加载失败的 fallback 行为")],-1),p=Object(a.createVNode)("p",null,"当展示类型为图片的时候，图片加载失败的 fallback 行为",-1),v=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},'<template>\n  <div class="demo-type">\n    <el-avatar :size="60" src="https://empty" @error="errorHandler">\n      <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>\n    </el-avatar>\n  </div>\n</template>\n<script>\n  export default {\n    methods: {\n      errorHandler() {\n        return true\n      }\n    }\n  }\n<\/script>\n\n')],-1),m=Object(a.createVNode)("h3",{id:"tu-pian-ru-he-gua-ying-rong-qi-kuang"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#tu-pian-ru-he-gua-ying-rong-qi-kuang"},"¶"),Object(a.createTextVNode)(" 图片如何适应容器框")],-1),f=Object(a.createVNode)("p",null,[Object(a.createTextVNode)("当展示类型为图片的时候，使用 "),Object(a.createVNode)("code",null,"fit"),Object(a.createTextVNode)(" 属性定义图片如何适应容器框，同原生 "),Object(a.createVNode)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"},"object-fit"),Object(a.createTextVNode)("。")],-1),j=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},'<template>\n  <div class="demo-fit">\n    <div class="block" v-for="fit in fits" :key="fit">\n        <span class="title">{{ fit }}</span>\n        <el-avatar shape="square" :size="100" :fit="fit" :src="url"></el-avatar>\n    </div>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        fits: [\'fill\', \'contain\', \'cover\', \'none\', \'scale-down\'],\n        url: \'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg\'\n      }\n    }\n  }\n<\/script>\n\n')],-1),O=Object(a.createStaticVNode)('<h3 id="attributes"><a class="header-anchor" href="#attributes">¶</a> Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>icon</td><td>设置头像的图标类型，参考 Icon 组件</td><td>string</td><td></td><td></td></tr><tr><td>size</td><td>设置头像的大小</td><td>number/string</td><td>number / large / medium / small</td><td>large</td></tr><tr><td>shape</td><td>设置头像的形状</td><td>string</td><td>circle / square</td><td>circle</td></tr><tr><td>src</td><td>图片头像的资源地址</td><td>string</td><td></td><td></td></tr><tr><td>srcSet</td><td>以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像</td><td>string</td><td></td><td></td></tr><tr><td>alt</td><td>描述图像的替换文本</td><td>string</td><td></td><td></td></tr><tr><td>fit</td><td>当展示类型为图片的时候，设置图片如何适应容器框</td><td>string</td><td>fill / contain / cover / none / scale-down</td><td>cover</td></tr></tbody></table><h3 id="events"><a class="header-anchor" href="#events">¶</a> Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>error</td><td>图片类头像加载失败的回调， 返回 false 会关闭组件默认的 fallback 行为</td><td>(e: Event)</td></tr></tbody></table><h3 id="slot"><a class="header-anchor" href="#slot">¶</a> Slot</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义头像展示内容</td></tr></tbody></table>',6);var g={name:"component-doc",components:{"element-demo0":function(){const{createVNode:e,resolveComponent:t,renderList:c,Fragment:r,openBlock:n,createBlock:l,withCtx:d}=a,s=e("div",{class:"sub-title"},"circle",-1),o={class:"demo-basic--circle"},i={class:"block"},b=e("div",{class:"sub-title"},"square",-1),u={class:"demo-basic--circle"},h={class:"block"};const p={data:()=>({circleUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",squareUrl:"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",sizeList:["large","medium","small"]})};return Object.assign({render:function(a,p){const v=t("el-avatar"),m=t("el-col"),f=t("el-row");return n(),l("div",null,[e(f,{class:"demo-avatar demo-basic"},{default:d(()=>[e(m,{span:12},{default:d(()=>[s,e("div",o,[e("div",i,[e(v,{size:50,src:a.circleUrl},null,8,["src"])]),(n(!0),l(r,null,c(a.sizeList,t=>(n(),l("div",{class:"block",key:t},[e(v,{size:t,src:a.circleUrl},null,8,["size","src"])]))),128))])]),_:1}),e(m,{span:12},{default:d(()=>[b,e("div",u,[e("div",h,[e(v,{shape:"square",size:50,src:a.squareUrl},null,8,["src"])]),(n(!0),l(r,null,c(a.sizeList,t=>(n(),l("div",{class:"block",key:t},[e(v,{shape:"square",size:t,src:a.squareUrl},null,8,["size","src"])]))),128))])]),_:1})]),_:1})])}},p)}(),"element-demo1":function(){const{resolveComponent:e,createVNode:t,createTextVNode:c,withCtx:r,openBlock:n,createBlock:l}=a,d={class:"demo-type"},s=c(" user ");return Object.assign({render:function(c,a){const o=e("el-avatar");return n(),l("div",null,[t("div",d,[t("div",null,[t(o,{icon:"el-icon-user-solid"})]),t("div",null,[t(o,{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"})]),t("div",null,[t(o,null,{default:r(()=>[s]),_:1})])])])}},{})}(),"element-demo2":function(){const{createVNode:e,resolveComponent:t,withCtx:c,openBlock:r,createBlock:n}=a,l={class:"demo-type"},d=e("img",{src:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"},null,-1);const s={methods:{errorHandler:()=>!0}};return Object.assign({render:function(a,s){const o=t("el-avatar");return r(),n("div",null,[e("div",l,[e(o,{size:60,src:"https://empty",onError:a.errorHandler},{default:c(()=>[d]),_:1},8,["onError"])])])}},s)}(),"element-demo3":function(){const{renderList:e,Fragment:t,openBlock:c,createBlock:r,toDisplayString:n,createVNode:l,resolveComponent:d}=a,s={class:"demo-fit"},o={class:"title"};const i={data:()=>({fits:["fill","contain","cover","none","scale-down"],url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"})};return Object.assign({render:function(a,i){const b=d("el-avatar");return c(),r("div",null,[l("div",s,[(c(!0),r(t,null,e(a.fits,e=>(c(),r("div",{class:"block",key:e},[l("span",o,n(e),1),l(b,{shape:"square",size:100,fit:e,src:a.url},null,8,["fit","src"])]))),128))])])}},i)}()},render:function(e,t,c,g,N,V){const k=Object(a.resolveComponent)("element-demo0"),z=Object(a.resolveComponent)("demo-block"),x=Object(a.resolveComponent)("element-demo1"),w=Object(a.resolveComponent)("element-demo2"),y=Object(a.resolveComponent)("element-demo3");return Object(a.openBlock)(),Object(a.createBlock)("section",r,[n,l,d,s,Object(a.createVNode)(z,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(k)]),highlight:Object(a.withCtx)(()=>[o]),_:1}),i,b,Object(a.createVNode)(z,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(x)]),highlight:Object(a.withCtx)(()=>[u]),_:1}),h,p,Object(a.createVNode)(z,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(w)]),highlight:Object(a.withCtx)(()=>[v]),_:1}),m,f,Object(a.createVNode)(z,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(y)]),highlight:Object(a.withCtx)(()=>[j]),_:1}),O])}};t.default=g}}]);