(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{588:function(e,t,r){"use strict";r.r(t);var c=r(0);const o={class:"content element-doc"},n=Object(c.createVNode)("h2",{id:"progreso"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#progreso"},"¶"),Object(c.createTextVNode)(" Progreso")],-1),a=Object(c.createVNode)("p",null,"Progreso es usado para mostrar el estado de la operación actual e informar al usuario acerca de ésta.",-1),l=Object(c.createVNode)("h3",{id:"barra-de-progreso-lineal"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#barra-de-progreso-lineal"},"¶"),Object(c.createTextVNode)(" Barra de progreso lineal")],-1),s=Object(c.createVNode)("div",null,[Object(c.createVNode)("p",null,[Object(c.createTextVNode)("Usa el atributo "),Object(c.createVNode)("code",null,"percentage"),Object(c.createTextVNode)(" para asignar el porcentaje. Este es "),Object(c.createVNode)("strong",null,"requerido"),Object(c.createTextVNode)(" y tiene que ser un valor entre "),Object(c.createVNode)("code",null,"0-100"),Object(c.createTextVNode)(". Puede personalizar el formato de texto estableciendo "),Object(c.createVNode)("code",null,"format"),Object(c.createTextVNode)(".")])],-1),d=Object(c.createVNode)("pre",null,[Object(c.createVNode)("code",{class:"html"},'<el-progress :percentage="50"></el-progress>\n<el-progress :percentage="100" :format="format"></el-progress>\n<el-progress :percentage="100" status="success"></el-progress>\n<el-progress :percentage="100" status="warning"></el-progress>\n<el-progress :percentage="50" status="exception"></el-progress>\n\n<script>\n  export default {\n    methods: {\n      format(percentage) {\n        return percentage === 100 ? \'Full\' : `${percentage}%`;\n      }\n    }\n  };\n<\/script>\n')],-1),p=Object(c.createVNode)("h3",{id:"porcentaje-interno"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#porcentaje-interno"},"¶"),Object(c.createTextVNode)(" Porcentaje interno")],-1),i=Object(c.createVNode)("p",null,"En este caso el porcentaje no toma espacio adicional.",-1),u=Object(c.createVNode)("div",null,[Object(c.createVNode)("p",null,[Object(c.createTextVNode)("El atributo "),Object(c.createVNode)("code",null,"stroke-width"),Object(c.createTextVNode)(" decide el ancho de la barra de progreso, y usa el atributo "),Object(c.createVNode)("code",null,"text-inside"),Object(c.createTextVNode)(" para poner la descripción dentro de la misma.")])],-1),g=Object(c.createVNode)("pre",null,[Object(c.createVNode)("code",{class:"html"},'<el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>\n<el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>\n<el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>\n<el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>\n')],-1),b=Object(c.createVNode)("h3",{id:"color-personalizado"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#color-personalizado"},"¶"),Object(c.createTextVNode)(" Color personalizado")],-1),h=Object(c.createVNode)("p",null,[Object(c.createTextVNode)("Puede utilizar el atributo "),Object(c.createVNode)("code",null,"color"),Object(c.createTextVNode)(" para establecer el color de la barra de progreso.")],-1),j=Object(c.createVNode)("pre",null,[Object(c.createVNode)("code",{class:"html"},'<el-progress :percentage="percentage" :color="customColor"></el-progress>\n\n<el-progress :percentage="percentage" :color="customColorMethod"></el-progress>\n\n<el-progress :percentage="percentage" :color="customColors"></el-progress>\n<div>\n  <el-button-group>\n    <el-button icon="el-icon-minus" @click="decrease"></el-button>\n    <el-button icon="el-icon-plus" @click="increase"></el-button>\n  </el-button-group>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        percentage: 20,\n        customColor: \'#409eff\',\n        customColors: [\n          {color: \'#f56c6c\', percentage: 20},\n          {color: \'#e6a23c\', percentage: 40},\n          {color: \'#5cb87a\', percentage: 60},\n          {color: \'#1989fa\', percentage: 80},\n          {color: \'#6f7ad3\', percentage: 100}\n        ]\n      };\n    },\n    methods: {\n      customColorMethod(percentage) {\n        if (percentage < 30) {\n          return \'#909399\';\n        } else if (percentage < 70) {\n          return \'#e6a23c\';\n        } else {\n          return \'#67c23a\';\n        }\n      },\n      increase() {\n        this.percentage += 10;\n        if (this.percentage > 100) {\n          this.percentage = 100;\n        }\n      },\n      decrease() {\n        this.percentage -= 10;\n        if (this.percentage < 0) {\n          this.percentage = 0;\n        }\n      }\n    }\n  }\n<\/script>\n')],-1),O=Object(c.createVNode)("h3",{id:"barra-de-progreso-circular"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#barra-de-progreso-circular"},"¶"),Object(c.createTextVNode)(" Barra de progreso circular")],-1),m=Object(c.createVNode)("div",null,[Object(c.createVNode)("p",null,[Object(c.createTextVNode)("Puede asignar el atributo "),Object(c.createVNode)("code",null,"type"),Object(c.createTextVNode)(" como "),Object(c.createVNode)("code",null,"circle"),Object(c.createTextVNode)(" para usar la barra circular de progreso, y usar el atributo "),Object(c.createVNode)("code",null,"width"),Object(c.createTextVNode)(" para cambiar el tamaño del círculo.")])],-1),V=Object(c.createVNode)("pre",null,[Object(c.createVNode)("code",{class:"html"},'<el-progress type="circle" :percentage="0"></el-progress>\n<el-progress type="circle" :percentage="25"></el-progress>\n<el-progress type="circle" :percentage="100" status="success"></el-progress>\n<el-progress type="circle" :percentage="70" status="warning"></el-progress>\n<el-progress type="circle" :percentage="50" status="exception"></el-progress>\n')],-1),N=Object(c.createVNode)("h3",{id:"barra-de-progreso-del-panel-de-control"},[Object(c.createVNode)("a",{class:"header-anchor",href:"#barra-de-progreso-del-panel-de-control"},"¶"),Object(c.createTextVNode)(" Barra de progreso del panel de control")],-1),f=Object(c.createVNode)("div",null,[Object(c.createVNode)("p",null,[Object(c.createTextVNode)("También puede especificar el atributo "),Object(c.createVNode)("code",null,"type"),Object(c.createTextVNode)(" a "),Object(c.createVNode)("code",null,"dashboard"),Object(c.createTextVNode)(" para usar la barra de progreso del panel de control.")])],-1),x=Object(c.createVNode)("pre",null,[Object(c.createVNode)("code",{class:"html"},'<el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>\n\n<div>\n  <el-button-group>\n    <el-button icon="el-icon-minus" @click="decrease"></el-button>\n    <el-button icon="el-icon-plus" @click="increase"></el-button>\n  </el-button-group>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        percentage: 10,\n        colors: [\n          {color: \'#f56c6c\', percentage: 20},\n          {color: \'#e6a23c\', percentage: 40},\n          {color: \'#5cb87a\', percentage: 60},\n          {color: \'#1989fa\', percentage: 80},\n          {color: \'#6f7ad3\', percentage: 100}\n        ]\n      };\n    },\n    methods: {\n      increase() {\n        this.percentage += 10;\n        if (this.percentage > 100) {\n          this.percentage = 100;\n        }\n      },\n      decrease() {\n        this.percentage -= 10;\n        if (this.percentage < 0) {\n          this.percentage = 0;\n        }\n      }\n    }\n  }\n<\/script>\n')],-1),C=Object(c.createStaticVNode)('<h3 id="atributos"><a class="header-anchor" href="#atributos">¶</a> Atributos</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptado</th><th>Por defecto</th></tr></thead><tbody><tr><td>percentage</td><td>porcentaje, requerido</td><td>number</td><td>0-100</td><td>0</td></tr><tr><td>type</td><td>tipo de barra de progreso</td><td>string</td><td>line/circle/dashboard</td><td>line</td></tr><tr><td>stroke-width</td><td>ancho de la barra de progreso</td><td>number</td><td>—</td><td>6</td></tr><tr><td>text-inside</td><td>mostrar el porcentaje dentro de la barra de progreso, solo funciona cuando <code>type</code> es &#39;line&#39;</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>status</td><td>estado actual de la barra de progreso</td><td>string</td><td>success/exception/warning</td><td>—</td></tr><tr><td>color</td><td>color de fondo de la barra de progreso. Sobreescribe la propiedad <code>status</code></td><td>string/function/array</td><td>—</td><td>&#39;&#39;</td></tr><tr><td>width</td><td>ancho del canvas que contiene la barra de progreso circula</td><td>number</td><td>—</td><td>126</td></tr><tr><td>show-text</td><td>mostrar porcentaje</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>stroke-linecap</td><td>circle/dashboard type shape at the end path</td><td>string</td><td>butt/round/square</td><td>round</td></tr></tbody></table>',2);var w={name:"component-doc",components:{"element-demo0":function(){const{resolveComponent:e,createVNode:t,openBlock:r,createBlock:o}=c;const n={methods:{format:e=>100===e?"Full":e+"%"}};return Object.assign({render:function(c,n){const a=e("el-progress");return r(),o("div",null,[t(a,{percentage:50}),t(a,{percentage:100,format:c.format},null,8,["format"]),t(a,{percentage:100,status:"success"}),t(a,{percentage:100,status:"warning"}),t(a,{percentage:50,status:"exception"})])}},n)}(),"element-demo1":function(){const{resolveComponent:e,createVNode:t,openBlock:r,createBlock:o}=c;return Object.assign({render:function(c,n){const a=e("el-progress");return r(),o("div",null,[t(a,{"text-inside":!0,"stroke-width":26,percentage:70}),t(a,{"text-inside":!0,"stroke-width":24,percentage:100,status:"success"}),t(a,{"text-inside":!0,"stroke-width":22,percentage:80,status:"warning"}),t(a,{"text-inside":!0,"stroke-width":20,percentage:50,status:"exception"})])}},{})}(),"element-demo2":function(){const{resolveComponent:e,createVNode:t,withCtx:r,openBlock:o,createBlock:n}=c;const a={data:()=>({percentage:20,customColor:"#409eff",customColors:[{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}]}),methods:{customColorMethod:e=>e<30?"#909399":e<70?"#e6a23c":"#67c23a",increase(){this.percentage+=10,this.percentage>100&&(this.percentage=100)},decrease(){this.percentage-=10,this.percentage<0&&(this.percentage=0)}}};return Object.assign({render:function(c,a){const l=e("el-progress"),s=e("el-button"),d=e("el-button-group");return o(),n("div",null,[t(l,{percentage:c.percentage,color:c.customColor},null,8,["percentage","color"]),t(l,{percentage:c.percentage,color:c.customColorMethod},null,8,["percentage","color"]),t(l,{percentage:c.percentage,color:c.customColors},null,8,["percentage","color"]),t("div",null,[t(d,null,{default:r(()=>[t(s,{icon:"el-icon-minus",onClick:c.decrease},null,8,["onClick"]),t(s,{icon:"el-icon-plus",onClick:c.increase},null,8,["onClick"])]),_:1})])])}},a)}(),"element-demo3":function(){const{resolveComponent:e,createVNode:t,openBlock:r,createBlock:o}=c;return Object.assign({render:function(c,n){const a=e("el-progress");return r(),o("div",null,[t(a,{type:"circle",percentage:0}),t(a,{type:"circle",percentage:25}),t(a,{type:"circle",percentage:100,status:"success"}),t(a,{type:"circle",percentage:70,status:"warning"}),t(a,{type:"circle",percentage:50,status:"exception"})])}},{})}(),"element-demo4":function(){const{resolveComponent:e,createVNode:t,withCtx:r,openBlock:o,createBlock:n}=c;const a={data:()=>({percentage:10,colors:[{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}]}),methods:{increase(){this.percentage+=10,this.percentage>100&&(this.percentage=100)},decrease(){this.percentage-=10,this.percentage<0&&(this.percentage=0)}}};return Object.assign({render:function(c,a){const l=e("el-progress"),s=e("el-button"),d=e("el-button-group");return o(),n("div",null,[t(l,{type:"dashboard",percentage:c.percentage,color:c.colors},null,8,["percentage","color"]),t("div",null,[t(d,null,{default:r(()=>[t(s,{icon:"el-icon-minus",onClick:c.decrease},null,8,["onClick"]),t(s,{icon:"el-icon-plus",onClick:c.increase},null,8,["onClick"])]),_:1})])])}},a)}()},render:function(e,t,r,w,k,v){const T=Object(c.resolveComponent)("element-demo0"),y=Object(c.resolveComponent)("demo-block"),B=Object(c.resolveComponent)("element-demo1"),P=Object(c.resolveComponent)("element-demo2"),_=Object(c.resolveComponent)("element-demo3"),q=Object(c.resolveComponent)("element-demo4");return Object(c.openBlock)(),Object(c.createBlock)("section",o,[n,a,l,Object(c.createVNode)(y,null,{source:Object(c.withCtx)(()=>[Object(c.createVNode)(T)]),highlight:Object(c.withCtx)(()=>[d]),default:Object(c.withCtx)(()=>[s]),_:1}),p,i,Object(c.createVNode)(y,null,{source:Object(c.withCtx)(()=>[Object(c.createVNode)(B)]),highlight:Object(c.withCtx)(()=>[g]),default:Object(c.withCtx)(()=>[u]),_:1}),b,h,Object(c.createVNode)(y,null,{source:Object(c.withCtx)(()=>[Object(c.createVNode)(P)]),highlight:Object(c.withCtx)(()=>[j]),_:1}),O,Object(c.createVNode)(y,null,{source:Object(c.withCtx)(()=>[Object(c.createVNode)(_)]),highlight:Object(c.withCtx)(()=>[V]),default:Object(c.withCtx)(()=>[m]),_:1}),N,Object(c.createVNode)(y,null,{source:Object(c.withCtx)(()=>[Object(c.createVNode)(q)]),highlight:Object(c.withCtx)(()=>[x]),default:Object(c.withCtx)(()=>[f]),_:1}),C])}};t.default=w}}]);