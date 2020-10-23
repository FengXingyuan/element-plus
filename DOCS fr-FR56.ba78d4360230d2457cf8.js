(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{659:function(t,e,o){"use strict";o.r(e);var n=o(0);const l={class:"content element-doc"},d=Object(n.createVNode)("h2",{id:"tooltip"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#tooltip"},"¶"),Object(n.createTextVNode)(" Tooltip")],-1),c=Object(n.createVNode)("p",null,"Permet d'afficher des informations au passage de la souris sur un élément.",-1),a=Object(n.createVNode)("h3",{id:"usage"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#usage"},"¶"),Object(n.createTextVNode)(" Usage")],-1),r=Object(n.createVNode)("p",null,"Tooltip a 9 emplacements.",-1),i=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("L'attribut "),Object(n.createVNode)("code",null,"content"),Object(n.createTextVNode)(" détermine le contenu à afficher. L'attribut "),Object(n.createVNode)("code",null,"placement"),Object(n.createTextVNode)(" détermine la position du tooltip. Sa valeur est sous la forme "),Object(n.createVNode)("code",null,"[orientation]-[alignment]"),Object(n.createTextVNode)(" avec quatre orientations "),Object(n.createVNode)("code",null,"top"),Object(n.createTextVNode)(", "),Object(n.createVNode)("code",null,"left"),Object(n.createTextVNode)(", "),Object(n.createVNode)("code",null,"right"),Object(n.createTextVNode)(", "),Object(n.createVNode)("code",null,"bottom"),Object(n.createTextVNode)(" et trois alignements "),Object(n.createVNode)("code",null,"start"),Object(n.createTextVNode)(", "),Object(n.createVNode)("code",null,"end"),Object(n.createTextVNode)(", "),Object(n.createVNode)("code",null,"null"),Object(n.createTextVNode)(", le défaut étant "),Object(n.createVNode)("code",null,"null"),Object(n.createTextVNode)(". Par exemple, "),Object(n.createVNode)("code",null,'placement="left-end"'),Object(n.createTextVNode)(" affichera la tooltip sur la gauche de l'élément et le bas de la tooltip sera aligné avec le bas de l'élément.")])],-1),s=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<div class="box">\n  <div class="top">\n    <el-tooltip class="item" effect="dark" content="Top Left prompts info" placement="top-start">\n      <el-button>top-start</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Top Center prompts info" placement="top">\n      <el-button>top</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Top Right prompts info" placement="top-end">\n      <el-button>top-end</el-button>\n    </el-tooltip>\n  </div>\n  <div class="left">\n    <el-tooltip class="item" effect="dark" content="Left Top prompts info" placement="left-start">\n      <el-button>left-start</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Left Center prompts info" placement="left">\n      <el-button>left</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Left Bottom prompts info" placement="left-end">\n      <el-button>left-end</el-button>\n    </el-tooltip>\n  </div>\n\n  <div class="right">\n    <el-tooltip class="item" effect="dark" content="Right Top prompts info" placement="right-start">\n      <el-button>right-start</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Right Center prompts info" placement="right">\n      <el-button>right</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Right Bottom prompts info" placement="right-end">\n      <el-button>right-end</el-button>\n    </el-tooltip>\n  </div>\n  <div class="bottom">\n    <el-tooltip class="item" effect="dark" content="Bottom Left prompts info" placement="bottom-start">\n      <el-button>bottom-start</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Bottom Center prompts info" placement="bottom">\n      <el-button>bottom</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Bottom Right prompts info" placement="bottom-end">\n      <el-button>bottom-end</el-button>\n    </el-tooltip>\n  </div>\n</div>\n\n<style>\n  .box {\n    width: 400px;\n\n    .top {\n      text-align: center;\n    }\n\n    .left {\n      float: left;\n      width: 110px;\n    }\n\n    .right {\n      float: right;\n      width: 110px;\n    }\n\n    .bottom {\n      clear: both;\n      text-align: center;\n    }\n\n    .item {\n      margin: 4px;\n    }\n\n    .left .el-tooltip__popper,\n    .right .el-tooltip__popper {\n      padding: 8px 10px;\n    }\n\n    .el-button {\n      width: 110px;\n    }\n  }\n</style>\n')],-1),p=Object(n.createVNode)("h3",{id:"themes"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#themes"},"¶"),Object(n.createTextVNode)(" Thèmes")],-1),u=Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Tooltip a deux thèmes: "),Object(n.createVNode)("code",null,"dark"),Object(n.createTextVNode)(" et "),Object(n.createVNode)("code",null,"light"),Object(n.createTextVNode)("。")],-1),b=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Utilisez "),Object(n.createVNode)("code",null,"effect"),Object(n.createTextVNode)(" pour modifier le thème, le défaut étant "),Object(n.createVNode)("code",null,"dark"),Object(n.createTextVNode)(".")])],-1),f=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<el-tooltip content="Top center" placement="top">\n  <el-button>Dark</el-button>\n</el-tooltip>\n<el-tooltip content="Bottom center" placement="bottom" effect="light">\n  <el-button>Light</el-button>\n</el-tooltip>\n')],-1),m=Object(n.createVNode)("h3",{id:"plus-de-contenu"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#plus-de-contenu"},"¶"),Object(n.createTextVNode)(" Plus de contenu")],-1),h=Object(n.createVNode)("p",null,"Vous pouvez afficher plus de lignes et formater leur contenu.",-1),j=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Utiliser un slot nommé "),Object(n.createVNode)("code",null,"content"),Object(n.createTextVNode)(" au lieu de l'attribut.")])],-1),O=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<el-tooltip placement="top">\n  <div slot="content">Multiples lignes<br/>Seconde ligne</div>\n  <el-button>Top center</el-button>\n</el-tooltip>\n')],-1),V=Object(n.createStaticVNode)('<h3 id="usage-avance"><a class="header-anchor" href="#usage-avance">¶</a> Usage avancé</h3><p>Vous pouvez utiliser d&#39;autres attributs pour un usage plus poussé:</p><p><code>transition</code> permet de définir l&#39;animation d&#39;apparition et de disparition du tooltip, le défaut étant el-fade-in-linear.</p><p><code>disabled</code> permet de désactiver le tooltip. Mettez-le simplement à <code>true</code>.</p><p>En réalité, Tooltip est une extension de <a href="https://github.com/element-component/vue-popper">Vue-popper</a>, vous pouvez donc utiliser n&#39;importe quel attribut de Vue-popper.</p>',5),g=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<template>\n  <el-tooltip :disabled="disabled" content="Cliquez pour désactiver le tooltip" placement="bottom" effect="light">\n    <el-button @click="disabled = !disabled">Cliquez pour {{disabled ? \'activer\' : \'désactiver\'}} le tooltip</el-button>\n  </el-tooltip>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        disabled: false\n      };\n    }\n  };\n<\/script>\n\n<style>\n  .slide-fade-enter-active {\n    transition: all .3s ease;\n  }\n  .slide-fade-leave-active {\n    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);\n  }\n  .slide-fade-enter, .expand-fade-leave-active {\n    margin-left: 20px;\n    opacity: 0;\n  }\n</style>\n')],-1),N=Object(n.createStaticVNode)('<div class="tip"><p>Le composant <code>router-link</code> n&#39;est pas supporté par tooltip, utilisez plutôt <code>vm.$router.push</code>.</p><p>Les éléments de formulaire désactivés ne sont pas supportés par Tooltip, plus d&#39;informations sur <a href="https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter">MDN</a>. Vous aurez besoin de mettre ces éléments dans un conteneur pour que cela fonctionne.</p></div><h3 id="attributs"><a class="header-anchor" href="#attributs">¶</a> Attributs</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>effect</td><td>Thème du Tooltip.</td><td>string</td><td>dark/light</td><td>dark</td></tr><tr><td>content</td><td>Contenu à afficher, écrasé par <code>slot#content</code>.</td><td>String</td><td>—</td><td>—</td></tr><tr><td>placement</td><td>Position du Tooltip.</td><td>string</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td><td>bottom</td></tr><tr><td>value / v-model</td><td>Visibilité du Tooltip.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>Si le Tooltip est désactivé.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>offset</td><td>Décalage du Tooltip.</td><td>number</td><td>—</td><td>0</td></tr><tr><td>transition</td><td>Animation de transition.</td><td>string</td><td>—</td><td>el-fade-in-linear</td></tr><tr><td>visible-arrow</td><td>Si une flèche doit être affichée. Pour plus d&#39;information, voir <a href="https://github.com/element-component/vue-popper">Vue-popper</a>.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>popper-options</td><td>Paramètres <a href="https://popper.js.org/documentation.html">popper.js</a>.</td><td>Object</td><td>Se référer à <a href="https://popper.js.org/documentation.html">popper.js</a>.</td><td><code>{ boundariesElement: &#39;body&#39;, gpuAcceleration: false }</code></td></tr><tr><td>open-delay</td><td>Délai avant l&#39;apparition en millisecondes.</td><td>number</td><td>—</td><td>0</td></tr><tr><td>manual</td><td>Si le contrôle du Tooltip doit être manuel. <code>mouseenter</code> et <code>mouseleave</code> n&#39;auront pas d&#39;effet si <code>true</code>.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>popper-class</td><td>Classe du popper de Tooltip.</td><td>string</td><td>—</td><td>—</td></tr><tr><td>enterable</td><td>Si la souris peut entrer dans la Tooltip.</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>hide-after</td><td>Délai avant disparition.</td><td>number</td><td>—</td><td>0</td></tr><tr><td>tabindex</td><td><a href="https://developer.mozilla.org/fr/docs/Web/HTML/Attributs_universels/tabindex">tabindex</a> de Tooltip.</td><td>number</td><td>—</td><td>0</td></tr></tbody></table>',3);var v={name:"component-doc",components:{"element-demo0":function(){const{createTextVNode:t,resolveComponent:e,withCtx:o,createVNode:l,openBlock:d,createBlock:c}=n,a={class:"box"},r={class:"top"},i=t("top-start"),s=t("top"),p=t("top-end"),u={class:"left"},b=t("left-start"),f=t("left"),m=t("left-end"),h={class:"right"},j=t("right-start"),O=t("right"),V=t("right-end"),g={class:"bottom"},N=t("bottom-start"),v=t("bottom"),x=t("bottom-end");return Object.assign({render:function(t,n){const T=e("el-button"),k=e("el-tooltip");return d(),c("div",null,[l("div",a,[l("div",r,[l(k,{class:"item",effect:"dark",content:"Top Left prompts info",placement:"top-start"},{default:o(()=>[l(T,null,{default:o(()=>[i]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Top Center prompts info",placement:"top"},{default:o(()=>[l(T,null,{default:o(()=>[s]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Top Right prompts info",placement:"top-end"},{default:o(()=>[l(T,null,{default:o(()=>[p]),_:1})]),_:1})]),l("div",u,[l(k,{class:"item",effect:"dark",content:"Left Top prompts info",placement:"left-start"},{default:o(()=>[l(T,null,{default:o(()=>[b]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Left Center prompts info",placement:"left"},{default:o(()=>[l(T,null,{default:o(()=>[f]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Left Bottom prompts info",placement:"left-end"},{default:o(()=>[l(T,null,{default:o(()=>[m]),_:1})]),_:1})]),l("div",h,[l(k,{class:"item",effect:"dark",content:"Right Top prompts info",placement:"right-start"},{default:o(()=>[l(T,null,{default:o(()=>[j]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Right Center prompts info",placement:"right"},{default:o(()=>[l(T,null,{default:o(()=>[O]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Right Bottom prompts info",placement:"right-end"},{default:o(()=>[l(T,null,{default:o(()=>[V]),_:1})]),_:1})]),l("div",g,[l(k,{class:"item",effect:"dark",content:"Bottom Left prompts info",placement:"bottom-start"},{default:o(()=>[l(T,null,{default:o(()=>[N]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Bottom Center prompts info",placement:"bottom"},{default:o(()=>[l(T,null,{default:o(()=>[v]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Bottom Right prompts info",placement:"bottom-end"},{default:o(()=>[l(T,null,{default:o(()=>[x]),_:1})]),_:1})])])])}},{})}(),"element-demo1":function(){const{createTextVNode:t,resolveComponent:e,withCtx:o,createVNode:l,openBlock:d,createBlock:c}=n,a=t("Dark"),r=t("Light");return Object.assign({render:function(t,n){const i=e("el-button"),s=e("el-tooltip");return d(),c("div",null,[l(s,{content:"Top center",placement:"top"},{default:o(()=>[l(i,null,{default:o(()=>[a]),_:1})]),_:1}),l(s,{content:"Bottom center",placement:"bottom",effect:"light"},{default:o(()=>[l(i,null,{default:o(()=>[r]),_:1})]),_:1})])}},{})}(),"element-demo2":function(){const{createVNode:t,createTextVNode:e,resolveComponent:o,withCtx:l,openBlock:d,createBlock:c}=n,a=t("div",{slot:"content"},[e("Multiples lignes"),t("br"),e("Seconde ligne")],-1),r=e("Top center");return Object.assign({render:function(e,n){const i=o("el-button"),s=o("el-tooltip");return d(),c("div",null,[t(s,{placement:"top"},{default:l(()=>[a,t(i,null,{default:l(()=>[r]),_:1})]),_:1})])}},{})}(),"element-demo3":function(){const{toDisplayString:t,createTextVNode:e,resolveComponent:o,withCtx:l,createVNode:d,openBlock:c,createBlock:a}=n;const r={data:()=>({disabled:!1})};return Object.assign({render:function(n,r){const i=o("el-button"),s=o("el-tooltip");return c(),a("div",null,[d(s,{disabled:n.disabled,content:"Cliquez pour désactiver le tooltip",placement:"bottom",effect:"light"},{default:l(()=>[d(i,{onClick:r[1]||(r[1]=t=>n.disabled=!n.disabled)},{default:l(()=>[e("Cliquez pour "+t(n.disabled?"activer":"désactiver")+" le tooltip",1)]),_:1})]),_:1},8,["disabled"])])}},r)}()},render:function(t,e,o,v,x,T){const k=Object(n.resolveComponent)("element-demo0"),_=Object(n.resolveComponent)("demo-block"),C=Object(n.resolveComponent)("element-demo1"),w=Object(n.resolveComponent)("element-demo2"),B=Object(n.resolveComponent)("element-demo3");return Object(n.openBlock)(),Object(n.createBlock)("section",l,[d,c,a,r,Object(n.createVNode)(_,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(k)]),highlight:Object(n.withCtx)(()=>[s]),default:Object(n.withCtx)(()=>[i]),_:1}),p,u,Object(n.createVNode)(_,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(C)]),highlight:Object(n.withCtx)(()=>[f]),default:Object(n.withCtx)(()=>[b]),_:1}),m,h,Object(n.createVNode)(_,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(w)]),highlight:Object(n.withCtx)(()=>[O]),default:Object(n.withCtx)(()=>[j]),_:1}),V,Object(n.createVNode)(_,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(B)]),highlight:Object(n.withCtx)(()=>[g]),_:1}),N])}};e.default=v}}]);