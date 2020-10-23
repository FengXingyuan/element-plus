(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{615:function(e,t,n){"use strict";n.r(t);var c=n(0);const a={class:"content element-doc"},o=Object(c.createVNode)("h2",{id:"card"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#card"},"¶"),Object(c.createTextVNode)(" Card")],-1),r=Object(c.createVNode)("p",null,"Conteneur intégrant des informations.",-1),d=Object(c.createVNode)("h3",{id:"usage"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#usage"},"¶"),Object(c.createTextVNode)(" Usage")],-1),l=Object(c.createVNode)("p",null,"Le composant Card comprend un titre, un contenu et des opérations.",-1),s=Object(c.createVNode)("div",null,[Object(c.createVNode)("p",null,[Object(c.createTextVNode)("Card est composé d'un "),Object(c.createVNode)("code",null,"header"),Object(c.createTextVNode)(" et d'un "),Object(c.createVNode)("code",null,"body"),Object(c.createTextVNode)(". "),Object(c.createVNode)("code",null,"header"),Object(c.createTextVNode)(" est optionnel et son contenu nécessite l'utilisation d'un slot.")])],-1),i=Object(c.createVNode)("pre",null,[Object(c.createVNode)("code",{class:"html"},'<el-card class="box-card">\n  <div slot="header" class="clearfix">\n    <span>Card name</span>\n    <el-button style="float: right; padding: 3px 0" type="text">Bouton</el-button>\n  </div>\n  <div v-for="o in 4" :key="o" class="text item">\n    {{\'List item \' + o }}\n  </div>\n</el-card>\n\n<style>\n  .text {\n    font-size: 14px;\n  }\n\n  .item {\n    margin-bottom: 18px;\n  }\n\n  .clearfix:before,\n  .clearfix:after {\n    display: table;\n    content: "";\n  }\n  .clearfix:after {\n    clear: both\n  }\n\n  .box-card {\n    width: 480px;\n  }\n</style>\n')],-1),b=Object(c.createVNode)("h3",{id:"card-simple"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#card-simple"},"¶"),Object(c.createTextVNode)(" Card simple")],-1),u=Object(c.createVNode)("p",null,"Le header peut être omis.",-1),p=Object(c.createVNode)("pre",null,[Object(c.createVNode)("code",{class:"html"},'<el-card class="box-card">\n  <div v-for="o in 4" :key="o" class="text item">\n    {{\'List item \' + o }}\n  </div>\n</el-card>\n\n<style>\n  .text {\n    font-size: 14px;\n  }\n\n  .item {\n    padding: 18px 0;\n  }\n\n  .box-card {\n    width: 480px;\n  }\n</style>\n')],-1),h=Object(c.createVNode)("h3",{id:"images"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#images"},"¶"),Object(c.createTextVNode)(" Images")],-1),m=Object(c.createVNode)("p",null,"Affichez un contenu plus riche grâce à la configuration.",-1),O=Object(c.createVNode)("div",null,[Object(c.createVNode)("p",null,[Object(c.createTextVNode)("L'attribut "),Object(c.createVNode)("code",null,"body-style"),Object(c.createTextVNode)(" définit le style CSS du "),Object(c.createVNode)("code",null,"body"),Object(c.createTextVNode)(". Cet exemple utilise aussi "),Object(c.createVNode)("code",null,"el-col"),Object(c.createTextVNode)(" pour la mise en page.")])],-1),j=Object(c.createVNode)("pre",null,[Object(c.createVNode)("code",{class:"html"},'<el-row>\n  <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">\n    <el-card :body-style="{ padding: \'0px\' }">\n      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">\n      <div style="padding: 14px;">\n        <span>Yummy hamburger</span>\n        <div class="bottom clearfix">\n          <time class="time">{{ currentDate }}</time>\n          <el-button type="text" class="button">Operating</el-button>\n        </div>\n      </div>\n    </el-card>\n  </el-col>\n</el-row>\n\n<style>\n  .time {\n    font-size: 13px;\n    color: #999;\n  }\n\n  .bottom {\n    margin-top: 13px;\n    line-height: 12px;\n  }\n\n  .button {\n    padding: 0;\n    float: right;\n  }\n\n  .image {\n    width: 100%;\n    display: block;\n  }\n\n  .clearfix:before,\n  .clearfix:after {\n      display: table;\n      content: "";\n  }\n\n  .clearfix:after {\n      clear: both\n  }\n</style>\n\n<script>\nexport default {\n  data() {\n    return {\n      currentDate: new Date()\n    };\n  }\n}\n<\/script>\n')],-1),x=Object(c.createVNode)("h3",{id:"ombres"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#ombres"},"¶"),Object(c.createTextVNode)(" Ombres")],-1),f=Object(c.createVNode)("p",null,"Vous pouvez définir quand l'ombre des Cards doivent apparaître.",-1),N=Object(c.createVNode)("div",null,[Object(c.createVNode)("p",null,[Object(c.createTextVNode)("L'attribut "),Object(c.createVNode)("code",null,"shadow"),Object(c.createTextVNode)(" détermine quand l'ombre doit apparaître. Les valeurs possibles sont "),Object(c.createVNode)("code",null,"always"),Object(c.createTextVNode)(", "),Object(c.createVNode)("code",null,"hover"),Object(c.createTextVNode)(" ou "),Object(c.createVNode)("code",null,"never"),Object(c.createTextVNode)(".")])],-1),V=Object(c.createVNode)("pre",null,[Object(c.createVNode)("code",{class:"html"},'<el-row :gutter="12">\n  <el-col :span="8">\n    <el-card shadow="always">\n      Always\n    </el-card>\n  </el-col>\n  <el-col :span="8">\n    <el-card shadow="hover">\n      Hover\n    </el-card>\n  </el-col>\n  <el-col :span="8">\n    <el-card shadow="never">\n      Never\n    </el-card>\n  </el-col>\n</el-row>\n')],-1),g=Object(c.createStaticVNode)('<h3 id="attributs"><a class="header-anchor" href="#attributs">¶</a> Attributs</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>header</td><td>Titre de la Card. Accepte aussi un template DOM passé via <code>slot#header</code>.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>body-style</td><td>Style CSS du body.</td><td>object</td><td>—</td><td>{ padding: &#39;20px&#39; }</td></tr><tr><td>shadow</td><td>Quand l&#39;ombre doit apparaître</td><td>string</td><td>always / hover / never</td><td>always</td></tr></tbody></table>',2);var v={name:"component-doc",components:{"element-demo0":function(){const{createVNode:e,createTextVNode:t,resolveComponent:n,withCtx:a,renderList:o,Fragment:r,openBlock:d,createBlock:l,toDisplayString:s}=c,i={slot:"header",class:"clearfix"},b=e("span",null,"Card name",-1),u=t("Bouton");return Object.assign({render:function(t,c){const p=n("el-button"),h=n("el-card");return d(),l("div",null,[e(h,{class:"box-card"},{default:a(()=>[e("div",i,[b,e(p,{style:{float:"right",padding:"3px 0"},type:"text"},{default:a(()=>[u]),_:1})]),(d(),l(r,null,o(4,t=>e("div",{key:t,class:"text item"},s("List item "+t),1)),64))]),_:1})])}},{})}(),"element-demo1":function(){const{renderList:e,Fragment:t,openBlock:n,createBlock:a,toDisplayString:o,resolveComponent:r,withCtx:d,createVNode:l}=c;return Object.assign({render:function(c,s){const i=r("el-card");return n(),a("div",null,[l(i,{class:"box-card"},{default:d(()=>[(n(),a(t,null,e(4,e=>l("div",{key:e,class:"text item"},o("List item "+e),1)),64))]),_:1})])}},{})}(),"element-demo2":function(){const{renderList:e,Fragment:t,openBlock:n,createBlock:a,createVNode:o,toDisplayString:r,createTextVNode:d,resolveComponent:l,withCtx:s}=c,i=o("img",{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",class:"image"},null,-1),b={style:{padding:"14px"}},u=o("span",null,"Yummy hamburger",-1),p={class:"bottom clearfix"},h={class:"time"},m=d("Operating");const O={data:()=>({currentDate:new Date})};return Object.assign({render:function(c,d){const O=l("el-button"),j=l("el-card"),x=l("el-col"),f=l("el-row");return n(),a("div",null,[o(f,null,{default:s(()=>[(n(),a(t,null,e(2,(e,t)=>o(x,{span:8,key:e,offset:t>0?2:0},{default:s(()=>[o(j,{"body-style":{padding:"0px"}},{default:s(()=>[i,o("div",b,[u,o("div",p,[o("time",h,r(c.currentDate),1),o(O,{type:"text",class:"button"},{default:s(()=>[m]),_:1})])])]),_:1})]),_:2},1032,["offset"])),64))]),_:1})])}},O)}(),"element-demo3":function(){const{createTextVNode:e,resolveComponent:t,withCtx:n,createVNode:a,openBlock:o,createBlock:r}=c,d=e(" Always "),l=e(" Hover "),s=e(" Never ");return Object.assign({render:function(e,c){const i=t("el-card"),b=t("el-col"),u=t("el-row");return o(),r("div",null,[a(u,{gutter:12},{default:n(()=>[a(b,{span:8},{default:n(()=>[a(i,{shadow:"always"},{default:n(()=>[d]),_:1})]),_:1}),a(b,{span:8},{default:n(()=>[a(i,{shadow:"hover"},{default:n(()=>[l]),_:1})]),_:1}),a(b,{span:8},{default:n(()=>[a(i,{shadow:"never"},{default:n(()=>[s]),_:1})]),_:1})]),_:1})])}},{})}()},render:function(e,t,n,v,y,w){const C=Object(c.resolveComponent)("element-demo0"),T=Object(c.resolveComponent)("demo-block"),k=Object(c.resolveComponent)("element-demo1"),_=Object(c.resolveComponent)("element-demo2"),B=Object(c.resolveComponent)("element-demo3");return Object(c.openBlock)(),Object(c.createBlock)("section",a,[o,r,d,l,Object(c.createVNode)(T,null,{source:Object(c.withCtx)(()=>[Object(c.createVNode)(C)]),highlight:Object(c.withCtx)(()=>[i]),default:Object(c.withCtx)(()=>[s]),_:1}),b,u,Object(c.createVNode)(T,null,{source:Object(c.withCtx)(()=>[Object(c.createVNode)(k)]),highlight:Object(c.withCtx)(()=>[p]),_:1}),h,m,Object(c.createVNode)(T,null,{source:Object(c.withCtx)(()=>[Object(c.createVNode)(_)]),highlight:Object(c.withCtx)(()=>[j]),default:Object(c.withCtx)(()=>[O]),_:1}),x,f,Object(c.createVNode)(T,null,{source:Object(c.withCtx)(()=>[Object(c.createVNode)(B)]),highlight:Object(c.withCtx)(()=>[V]),default:Object(c.withCtx)(()=>[N]),_:1}),g])}};t.default=v}}]);