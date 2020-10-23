(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{499:function(e,t,n){"use strict";n.r(t);var c=n(0);const a={class:"content element-doc"},o=Object(c.createVNode)("h2",{id:"card"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#card"},"¶"),Object(c.createTextVNode)(" Card")],-1),d=Object(c.createVNode)("p",null,"Integrate information in a card container.",-1),r=Object(c.createVNode)("h3",{id:"basic-usage"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#basic-usage"},"¶"),Object(c.createTextVNode)(" Basic usage")],-1),l=Object(c.createVNode)("p",null,"Card includes title, content and operations.",-1),s=Object(c.createVNode)("div",null,[Object(c.createVNode)("p",null,[Object(c.createTextVNode)("Card is made up of "),Object(c.createVNode)("code",null,"header"),Object(c.createTextVNode)(" and "),Object(c.createVNode)("code",null,"body"),Object(c.createTextVNode)(". "),Object(c.createVNode)("code",null,"header"),Object(c.createTextVNode)(" is optional, and its content distribution depends on a named slot.")])],-1),i=Object(c.createVNode)("pre",null,[Object(c.createVNode)("code",{class:"html"},'<el-card class="box-card">\n  <div slot="header" class="clearfix">\n    <span>Card name</span>\n    <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>\n  </div>\n  <div v-for="o in 4" :key="o" class="text item">\n    {{\'List item \' + o }}\n  </div>\n</el-card>\n\n<style>\n  .text {\n    font-size: 14px;\n  }\n\n  .item {\n    margin-bottom: 18px;\n  }\n\n  .clearfix:before,\n  .clearfix:after {\n    display: table;\n    content: "";\n  }\n  .clearfix:after {\n    clear: both\n  }\n\n  .box-card {\n    width: 480px;\n  }\n</style>\n')],-1),b=Object(c.createVNode)("h3",{id:"simple-card"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#simple-card"},"¶"),Object(c.createTextVNode)(" Simple card")],-1),h=Object(c.createVNode)("p",null,"The header part can be omitted.",-1),u=Object(c.createVNode)("pre",null,[Object(c.createVNode)("code",{class:"html"},'<el-card class="box-card">\n  <div v-for="o in 4" :key="o" class="text item">\n    {{\'List item \' + o }}\n  </div>\n</el-card>\n\n<style>\n  .text {\n    font-size: 14px;\n  }\n\n  .item {\n    padding: 18px 0;\n  }\n\n  .box-card {\n    width: 480px;\n  }\n</style>\n')],-1),p=Object(c.createVNode)("h3",{id:"with-images"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#with-images"},"¶"),Object(c.createTextVNode)(" With images")],-1),m=Object(c.createVNode)("p",null,"Display richer content by adding some configs.",-1),O=Object(c.createVNode)("div",null,[Object(c.createVNode)("p",null,[Object(c.createTextVNode)("The "),Object(c.createVNode)("code",null,"body-style"),Object(c.createTextVNode)(" attribute defines CSS style of custom "),Object(c.createVNode)("code",null,"body"),Object(c.createTextVNode)(". This example also uses "),Object(c.createVNode)("code",null,"el-col"),Object(c.createTextVNode)(" for layout.")])],-1),j=Object(c.createVNode)("pre",null,[Object(c.createVNode)("code",{class:"html"},'<el-row>\n  <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">\n    <el-card :body-style="{ padding: \'0px\' }">\n      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">\n      <div style="padding: 14px;">\n        <span>Yummy hamburger</span>\n        <div class="bottom clearfix">\n          <time class="time">{{ currentDate }}</time>\n          <el-button type="text" class="button">Operating</el-button>\n        </div>\n      </div>\n    </el-card>\n  </el-col>\n</el-row>\n\n<style>\n  .time {\n    font-size: 13px;\n    color: #999;\n  }\n  \n  .bottom {\n    margin-top: 13px;\n    line-height: 12px;\n  }\n\n  .button {\n    padding: 0;\n    float: right;\n  }\n\n  .image {\n    width: 100%;\n    display: block;\n  }\n\n  .clearfix:before,\n  .clearfix:after {\n      display: table;\n      content: "";\n  }\n  \n  .clearfix:after {\n      clear: both\n  }\n</style>\n\n<script>\nexport default {\n  data() {\n    return {\n      currentDate: new Date()\n    };\n  }\n}\n<\/script>\n')],-1),f=Object(c.createVNode)("h3",{id:"shadow"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#shadow"},"¶"),Object(c.createTextVNode)(" Shadow")],-1),x=Object(c.createVNode)("p",null,"You can define when to show the card shadows",-1),N=Object(c.createVNode)("div",null,[Object(c.createVNode)("p",null,[Object(c.createTextVNode)("The "),Object(c.createVNode)("code",null,"shadow"),Object(c.createTextVNode)(" attribute determines when the card shadows are displayed. It can be "),Object(c.createVNode)("code",null,"always"),Object(c.createTextVNode)(", "),Object(c.createVNode)("code",null,"hover"),Object(c.createTextVNode)(" or "),Object(c.createVNode)("code",null,"never"),Object(c.createTextVNode)(".")])],-1),V=Object(c.createVNode)("pre",null,[Object(c.createVNode)("code",{class:"html"},'<el-row :gutter="12">\n  <el-col :span="8">\n    <el-card shadow="always">\n      Always\n    </el-card>\n  </el-col>\n  <el-col :span="8">\n    <el-card shadow="hover">\n      Hover\n    </el-card>\n  </el-col>\n  <el-col :span="8">\n    <el-card shadow="never">\n      Never\n    </el-card>\n  </el-col>\n</el-row>\n')],-1),w=Object(c.createStaticVNode)('<h3 id="attributes"><a class="header-anchor" href="#attributes">¶</a> Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>header</td><td>title of the card. Also accepts a DOM passed by <code>slot#header</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>body-style</td><td>CSS style of body</td><td>object</td><td>—</td><td>{ padding: &#39;20px&#39; }</td></tr><tr><td>shadow</td><td>when to show card shadows</td><td>string</td><td>always / hover / never</td><td>always</td></tr></tbody></table>',2);var g={name:"component-doc",components:{"element-demo0":function(){const{createVNode:e,createTextVNode:t,resolveComponent:n,withCtx:a,renderList:o,Fragment:d,openBlock:r,createBlock:l,toDisplayString:s}=c,i={slot:"header",class:"clearfix"},b=e("span",null,"Card name",-1),h=t("Operation button");return Object.assign({render:function(t,c){const u=n("el-button"),p=n("el-card");return r(),l("div",null,[e(p,{class:"box-card"},{default:a(()=>[e("div",i,[b,e(u,{style:{float:"right",padding:"3px 0"},type:"text"},{default:a(()=>[h]),_:1})]),(r(),l(d,null,o(4,t=>e("div",{key:t,class:"text item"},s("List item "+t),1)),64))]),_:1})])}},{})}(),"element-demo1":function(){const{renderList:e,Fragment:t,openBlock:n,createBlock:a,toDisplayString:o,resolveComponent:d,withCtx:r,createVNode:l}=c;return Object.assign({render:function(c,s){const i=d("el-card");return n(),a("div",null,[l(i,{class:"box-card"},{default:r(()=>[(n(),a(t,null,e(4,e=>l("div",{key:e,class:"text item"},o("List item "+e),1)),64))]),_:1})])}},{})}(),"element-demo2":function(){const{renderList:e,Fragment:t,openBlock:n,createBlock:a,createVNode:o,toDisplayString:d,createTextVNode:r,resolveComponent:l,withCtx:s}=c,i=o("img",{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",class:"image"},null,-1),b={style:{padding:"14px"}},h=o("span",null,"Yummy hamburger",-1),u={class:"bottom clearfix"},p={class:"time"},m=r("Operating");const O={data:()=>({currentDate:new Date})};return Object.assign({render:function(c,r){const O=l("el-button"),j=l("el-card"),f=l("el-col"),x=l("el-row");return n(),a("div",null,[o(x,null,{default:s(()=>[(n(),a(t,null,e(2,(e,t)=>o(f,{span:8,key:e,offset:t>0?2:0},{default:s(()=>[o(j,{"body-style":{padding:"0px"}},{default:s(()=>[i,o("div",b,[h,o("div",u,[o("time",p,d(c.currentDate),1),o(O,{type:"text",class:"button"},{default:s(()=>[m]),_:1})])])]),_:1})]),_:2},1032,["offset"])),64))]),_:1})])}},O)}(),"element-demo3":function(){const{createTextVNode:e,resolveComponent:t,withCtx:n,createVNode:a,openBlock:o,createBlock:d}=c,r=e(" Always "),l=e(" Hover "),s=e(" Never ");return Object.assign({render:function(e,c){const i=t("el-card"),b=t("el-col"),h=t("el-row");return o(),d("div",null,[a(h,{gutter:12},{default:n(()=>[a(b,{span:8},{default:n(()=>[a(i,{shadow:"always"},{default:n(()=>[r]),_:1})]),_:1}),a(b,{span:8},{default:n(()=>[a(i,{shadow:"hover"},{default:n(()=>[l]),_:1})]),_:1}),a(b,{span:8},{default:n(()=>[a(i,{shadow:"never"},{default:n(()=>[s]),_:1})]),_:1})]),_:1})])}},{})}()},render:function(e,t,n,g,y,v){const C=Object(c.resolveComponent)("element-demo0"),T=Object(c.resolveComponent)("demo-block"),k=Object(c.resolveComponent)("element-demo1"),_=Object(c.resolveComponent)("element-demo2"),D=Object(c.resolveComponent)("element-demo3");return Object(c.openBlock)(),Object(c.createBlock)("section",a,[o,d,r,l,Object(c.createVNode)(T,null,{source:Object(c.withCtx)(()=>[Object(c.createVNode)(C)]),highlight:Object(c.withCtx)(()=>[i]),default:Object(c.withCtx)(()=>[s]),_:1}),b,h,Object(c.createVNode)(T,null,{source:Object(c.withCtx)(()=>[Object(c.createVNode)(k)]),highlight:Object(c.withCtx)(()=>[u]),_:1}),p,m,Object(c.createVNode)(T,null,{source:Object(c.withCtx)(()=>[Object(c.createVNode)(_)]),highlight:Object(c.withCtx)(()=>[j]),default:Object(c.withCtx)(()=>[O]),_:1}),f,x,Object(c.createVNode)(T,null,{source:Object(c.withCtx)(()=>[Object(c.createVNode)(D)]),highlight:Object(c.withCtx)(()=>[V]),default:Object(c.withCtx)(()=>[N]),_:1}),w])}};t.default=g}}]);