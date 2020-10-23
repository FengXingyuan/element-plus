(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{601:function(e,t,o){"use strict";o.r(t);var n=o(0);const l={class:"content element-doc"},d=Object(n.createVNode)("h2",{id:"tooltip"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#tooltip"},"¶"),Object(n.createTextVNode)(" Tooltip")],-1),c=Object(n.createVNode)("p",null,"Mostrar aviso de información con el hover del mouse.",-1),a=Object(n.createVNode)("h3",{id:"uso-basico"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#uso-basico"},"¶"),Object(n.createTextVNode)(" Uso básico")],-1),r=Object(n.createVNode)("p",null,"Tooltip tiene 9 colocaciones.",-1),i=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Use el atributo "),Object(n.createVNode)("code",null,"content"),Object(n.createTextVNode)(" para establecer el contenido que se mostrará al hacer hover. El atributo "),Object(n.createVNode)("code",null,"placement"),Object(n.createTextVNode)(" determina la posición del tooltip. Su valor es "),Object(n.createVNode)("code",null,"[orientation]-[alignment]"),Object(n.createTextVNode)(" con cuatro orientaciones "),Object(n.createVNode)("code",null,"top"),Object(n.createTextVNode)(", "),Object(n.createVNode)("code",null,"left"),Object(n.createTextVNode)(", "),Object(n.createVNode)("code",null,"right"),Object(n.createTextVNode)(", "),Object(n.createVNode)("code",null,"bottom"),Object(n.createTextVNode)(" y tres alineaciones "),Object(n.createVNode)("code",null,"start"),Object(n.createTextVNode)(", "),Object(n.createVNode)("code",null,"end"),Object(n.createTextVNode)(", "),Object(n.createVNode)("code",null,"null"),Object(n.createTextVNode)(", la alineación default es null. Tome "),Object(n.createVNode)("code",null,'placement="left-end"'),Object(n.createTextVNode)(" como ejemplo, Tooltip será mostrado en la izquierda del elemento en que se esté haciendo hover y el fondo del tooltip se alineará con el fondo del elemento.")])],-1),s=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<div class="box">\n  <div class="top">\n    <el-tooltip class="item" effect="dark" content="Top Left prompts info" placement="top-start">\n      <el-button>top-start</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Top Center prompts info" placement="top">\n      <el-button>top</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Top Right prompts info" placement="top-end">\n      <el-button>top-end</el-button>\n    </el-tooltip>\n  </div>\n  <div class="left">\n    <el-tooltip class="item" effect="dark" content="Left Top prompts info" placement="left-start">\n      <el-button>left-start</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Left Center prompts info" placement="left">\n      <el-button>left</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Left Bottom prompts info" placement="left-end">\n      <el-button>left-end</el-button>\n    </el-tooltip>\n  </div>\n\n  <div class="right">\n    <el-tooltip class="item" effect="dark" content="Right Top prompts info" placement="right-start">\n      <el-button>right-start</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Right Center prompts info" placement="right">\n      <el-button>right</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Right Bottom prompts info" placement="right-end">\n      <el-button>right-end</el-button>\n    </el-tooltip>\n  </div>\n  <div class="bottom">\n    <el-tooltip class="item" effect="dark" content="Bottom Left prompts info" placement="bottom-start">\n      <el-button>bottom-start</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Bottom Center prompts info" placement="bottom">\n      <el-button>bottom</el-button>\n    </el-tooltip>\n    <el-tooltip class="item" effect="dark" content="Bottom Right prompts info" placement="bottom-end">\n      <el-button>bottom-end</el-button>\n    </el-tooltip>\n  </div>\n</div>\n\n<style>\n  .box {\n    width: 400px;\n\n    .top {\n      text-align: center;\n    }\n\n    .left {\n      float: left;\n      width: 110px;\n    }\n\n    .right {\n      float: right;\n      width: 110px;\n    }\n\n    .bottom {\n      clear: both;\n      text-align: center;\n    }\n\n    .item {\n      margin: 4px;\n    }\n\n    .left .el-tooltip__popper,\n    .right .el-tooltip__popper {\n      padding: 8px 10px;\n    }\n\n    .el-button {\n      width: 110px;\n    }\n  }\n</style>\n')],-1),p=Object(n.createVNode)("h3",{id:"tema"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#tema"},"¶"),Object(n.createTextVNode)(" Tema")],-1),b=Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Tooltip tiene dos temas: "),Object(n.createVNode)("code",null,"dark"),Object(n.createTextVNode)(" y "),Object(n.createVNode)("code",null,"light"),Object(n.createTextVNode)(".")],-1),u=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Establecer "),Object(n.createVNode)("code",null,"effect"),Object(n.createTextVNode)(" para modificar el tema, el valor por defecto es "),Object(n.createVNode)("code",null,"dark"),Object(n.createTextVNode)(".")])],-1),m=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<el-tooltip content="Top center" placement="top">\n  <el-button>Dark</el-button>\n</el-tooltip>\n<el-tooltip content="Bottom center" placement="bottom" effect="light">\n  <el-button>Light</el-button>\n</el-tooltip>\n')],-1),f=Object(n.createVNode)("h3",{id:"mas-contenido"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#mas-contenido"},"¶"),Object(n.createTextVNode)(" Más Contenido")],-1),h=Object(n.createVNode)("p",null,"Despliegue múltiples líneas de texto y establezca su formato.",-1),j=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("Sobrecriba el atributo "),Object(n.createVNode)("code",null,"content"),Object(n.createTextVNode)(" del "),Object(n.createVNode)("code",null,"el-tooltip"),Object(n.createTextVNode)(" añadiendo un slot llamado "),Object(n.createVNode)("code",null,"content"),Object(n.createTextVNode)(".")])],-1),O=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<el-tooltip placement="top">\n  <div slot="content">multiple lines<br/>second line</div>\n  <el-button>Top center</el-button>\n</el-tooltip>\n')],-1),V=Object(n.createStaticVNode)('<h3 id="uso-avanzado"><a class="header-anchor" href="#uso-avanzado">¶</a> Uso Avanzado</h3><p>Adicional a los usos básicos, existen algunos atributos que permiten la personalización:</p><p>el atributo <code>transition</code> permite personalizar la animación con la que el Tooltip se muestra o se esconda, el valor por defecto es <code>el-fade-in-linear</code>.</p><p>el atributo <code>disabled</code> permite deshabilitar <code>tooltip</code>. Solo es necesario definirlo como <code>true</code>.</p><p>De hecho, Tooltip es una extensión basada en <a href="https://github.com/element-component/vue-popper">Vue-popper</a>, es posible utilizar cualquier atributo permitido en Vue-popper.</p>',5),N=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<template>\n  <el-tooltip :disabled="disabled" content="click to close tooltip function" placement="bottom" effect="light">\n    <el-button @click="disabled = !disabled">click to {{disabled ? \'active\' : \'close\'}} tooltip function</el-button>\n  </el-tooltip>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        disabled: false\n      };\n    }\n  };\n<\/script>\n\n<style>\n  .slide-fade-enter-active {\n    transition: all .3s ease;\n  }\n  .slide-fade-leave-active {\n    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);\n  }\n  .slide-fade-enter, .expand-fade-leave-active {\n    margin-left: 20px;\n    opacity: 0;\n  }\n</style>\n')],-1),g=Object(n.createStaticVNode)('<div class="tip"><p>El componente <code>router-link</code> no es soportado por Tooltip, favor de usar <code>vm.$router.push</code>.</p><p>Elementos de forma deshabilitados no son soportados por Tooltip, más información puede ser encontrada en <a href="https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter">MDN</a>. Es necesario envolver los elementos de forma deshabilitados en un elemento contenedor para que Tooltipo funcione.</p></div><h3 id="atributos"><a class="header-anchor" href="#atributos">¶</a> Atributos</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>effect</td><td>tema del Tooltip</td><td>string</td><td>dark/light</td><td>dark</td></tr><tr><td>content</td><td>contenido a mostrar, puede ser sobre-escrito por <code>slot#content</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>placement</td><td>posición del Tooltip</td><td>string</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td><td>bottom</td></tr><tr><td>value / v-model</td><td>visibilidad del Tooltip</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>saber si el Tooltip se encuentra deshabilitado</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>offset</td><td>offset del Tooltip</td><td>number</td><td>—</td><td>0</td></tr><tr><td>transition</td><td>nombre de animación</td><td>string</td><td>—</td><td>el-fade-in-linear</td></tr><tr><td>visible-arrow</td><td>si una flecha es mostrada. Para mayor información, revisar la página de <a href="https://github.com/element-component/vue-popper">Vue-popper</a></td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>popper-options</td><td>parámetros de <a href="https://popper.js.org/documentation.html">popper.js</a></td><td>Object</td><td>referirse a la documentación de <a href="https://popper.js.org/documentation.html">popper.js</a></td><td><code>{ boundariesElement: &#39;body&#39;, gpuAcceleration: false }</code></td></tr><tr><td>open-delay</td><td>retraso de la apariencia, en milisegundos</td><td>number</td><td>—</td><td>0</td></tr><tr><td>manual</td><td>si el Tooltipo será controlado de forma manual. <code>mouseenter</code> y <code>mouseleave</code> no tendrán efecto si fue establecido como <code>true</code></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>popper-class</td><td>nombre de clase personalizada para el popper del Tooltip</td><td>string</td><td>—</td><td>—</td></tr><tr><td>enterable</td><td>si el mouse puede entrar al Tooltip</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>hide-after</td><td>tiempo a esperar en milisegundos para esconder el Tooltip</td><td>number</td><td>—</td><td>0</td></tr><tr><td>tabindex</td><td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a> of Tooltip</td><td>number</td><td>—</td><td>0</td></tr></tbody></table>',3);var v={name:"component-doc",components:{"element-demo0":function(){const{createTextVNode:e,resolveComponent:t,withCtx:o,createVNode:l,openBlock:d,createBlock:c}=n,a={class:"box"},r={class:"top"},i=e("top-start"),s=e("top"),p=e("top-end"),b={class:"left"},u=e("left-start"),m=e("left"),f=e("left-end"),h={class:"right"},j=e("right-start"),O=e("right"),V=e("right-end"),N={class:"bottom"},g=e("bottom-start"),v=e("bottom"),T=e("bottom-end");return Object.assign({render:function(e,n){const x=t("el-button"),k=t("el-tooltip");return d(),c("div",null,[l("div",a,[l("div",r,[l(k,{class:"item",effect:"dark",content:"Top Left prompts info",placement:"top-start"},{default:o(()=>[l(x,null,{default:o(()=>[i]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Top Center prompts info",placement:"top"},{default:o(()=>[l(x,null,{default:o(()=>[s]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Top Right prompts info",placement:"top-end"},{default:o(()=>[l(x,null,{default:o(()=>[p]),_:1})]),_:1})]),l("div",b,[l(k,{class:"item",effect:"dark",content:"Left Top prompts info",placement:"left-start"},{default:o(()=>[l(x,null,{default:o(()=>[u]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Left Center prompts info",placement:"left"},{default:o(()=>[l(x,null,{default:o(()=>[m]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Left Bottom prompts info",placement:"left-end"},{default:o(()=>[l(x,null,{default:o(()=>[f]),_:1})]),_:1})]),l("div",h,[l(k,{class:"item",effect:"dark",content:"Right Top prompts info",placement:"right-start"},{default:o(()=>[l(x,null,{default:o(()=>[j]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Right Center prompts info",placement:"right"},{default:o(()=>[l(x,null,{default:o(()=>[O]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Right Bottom prompts info",placement:"right-end"},{default:o(()=>[l(x,null,{default:o(()=>[V]),_:1})]),_:1})]),l("div",N,[l(k,{class:"item",effect:"dark",content:"Bottom Left prompts info",placement:"bottom-start"},{default:o(()=>[l(x,null,{default:o(()=>[g]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Bottom Center prompts info",placement:"bottom"},{default:o(()=>[l(x,null,{default:o(()=>[v]),_:1})]),_:1}),l(k,{class:"item",effect:"dark",content:"Bottom Right prompts info",placement:"bottom-end"},{default:o(()=>[l(x,null,{default:o(()=>[T]),_:1})]),_:1})])])])}},{})}(),"element-demo1":function(){const{createTextVNode:e,resolveComponent:t,withCtx:o,createVNode:l,openBlock:d,createBlock:c}=n,a=e("Dark"),r=e("Light");return Object.assign({render:function(e,n){const i=t("el-button"),s=t("el-tooltip");return d(),c("div",null,[l(s,{content:"Top center",placement:"top"},{default:o(()=>[l(i,null,{default:o(()=>[a]),_:1})]),_:1}),l(s,{content:"Bottom center",placement:"bottom",effect:"light"},{default:o(()=>[l(i,null,{default:o(()=>[r]),_:1})]),_:1})])}},{})}(),"element-demo2":function(){const{createVNode:e,createTextVNode:t,resolveComponent:o,withCtx:l,openBlock:d,createBlock:c}=n,a=e("div",{slot:"content"},[t("multiple lines"),e("br"),t("second line")],-1),r=t("Top center");return Object.assign({render:function(t,n){const i=o("el-button"),s=o("el-tooltip");return d(),c("div",null,[e(s,{placement:"top"},{default:l(()=>[a,e(i,null,{default:l(()=>[r]),_:1})]),_:1})])}},{})}(),"element-demo3":function(){const{toDisplayString:e,createTextVNode:t,resolveComponent:o,withCtx:l,createVNode:d,openBlock:c,createBlock:a}=n;const r={data:()=>({disabled:!1})};return Object.assign({render:function(n,r){const i=o("el-button"),s=o("el-tooltip");return c(),a("div",null,[d(s,{disabled:n.disabled,content:"click to close tooltip function",placement:"bottom",effect:"light"},{default:l(()=>[d(i,{onClick:r[1]||(r[1]=e=>n.disabled=!n.disabled)},{default:l(()=>[t("click to "+e(n.disabled?"active":"close")+" tooltip function",1)]),_:1})]),_:1},8,["disabled"])])}},r)}()},render:function(e,t,o,v,T,x){const k=Object(n.resolveComponent)("element-demo0"),_=Object(n.resolveComponent)("demo-block"),C=Object(n.resolveComponent)("element-demo1"),w=Object(n.resolveComponent)("element-demo2"),B=Object(n.resolveComponent)("element-demo3");return Object(n.openBlock)(),Object(n.createBlock)("section",l,[d,c,a,r,Object(n.createVNode)(_,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(k)]),highlight:Object(n.withCtx)(()=>[s]),default:Object(n.withCtx)(()=>[i]),_:1}),p,b,Object(n.createVNode)(_,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(C)]),highlight:Object(n.withCtx)(()=>[m]),default:Object(n.withCtx)(()=>[u]),_:1}),f,h,Object(n.createVNode)(_,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(w)]),highlight:Object(n.withCtx)(()=>[O]),default:Object(n.withCtx)(()=>[j]),_:1}),V,Object(n.createVNode)(_,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(B)]),highlight:Object(n.withCtx)(()=>[N]),_:1}),g])}};t.default=v}}]);