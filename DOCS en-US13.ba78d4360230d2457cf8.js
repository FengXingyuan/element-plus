(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{504:function(e,t,o){"use strict";o.r(t);var l=o(0);const r={class:"content element-doc"},c=Object(l.createVNode)("h2",{id:"colorpicker"},[Object(l.createVNode)("a",{class:"header-anchor",href:"#colorpicker"},"¶"),Object(l.createTextVNode)(" ColorPicker")],-1),d=Object(l.createVNode)("p",null,"ColorPicker is a color selector supporting multiple color formats.",-1),n=Object(l.createVNode)("h3",{id:"basic-usage"},[Object(l.createVNode)("a",{class:"header-anchor",href:"#basic-usage"},"¶"),Object(l.createTextVNode)(" Basic usage")],-1),a=Object(l.createVNode)("div",null,[Object(l.createVNode)("p",null,"ColorPicker requires a string typed variable to be bound to v-model.")],-1),s=Object(l.createVNode)("pre",null,[Object(l.createVNode)("code",{class:"html"},'<div class="block">\n  <span class="demonstration">With default value</span>\n  <el-color-picker v-model="color1"></el-color-picker>\n</div>\n<div class="block">\n  <span class="demonstration">With no default value</span>\n  <el-color-picker v-model="color2"></el-color-picker>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        color1: \'#409EFF\',\n        color2: null\n      }\n    }\n  };\n<\/script>\n')],-1),i=Object(l.createVNode)("h3",{id:"alpha"},[Object(l.createVNode)("a",{class:"header-anchor",href:"#alpha"},"¶"),Object(l.createTextVNode)(" Alpha")],-1),h=Object(l.createVNode)("div",null,[Object(l.createVNode)("p",null,[Object(l.createTextVNode)("ColorPicker supports alpha channel selecting. To activate alpha selecting, just add the "),Object(l.createVNode)("code",null,"show-alpha"),Object(l.createTextVNode)(" attribute.")])],-1),u=Object(l.createVNode)("pre",null,[Object(l.createVNode)("code",{class:"html"},"<el-color-picker v-model=\"color\" show-alpha></el-color-picker>\n\n<script>\n  export default {\n    data() {\n      return {\n        color: 'rgba(19, 206, 102, 0.8)'\n      }\n    }\n  };\n<\/script>\n")],-1),p=Object(l.createVNode)("h3",{id:"predefined-colors"},[Object(l.createVNode)("a",{class:"header-anchor",href:"#predefined-colors"},"¶"),Object(l.createTextVNode)(" Predefined colors")],-1),b=Object(l.createVNode)("div",null,[Object(l.createVNode)("p",null,"ColorPicker supports predefined color options")],-1),m=Object(l.createVNode)("pre",null,[Object(l.createVNode)("code",{class:"html"},"<el-color-picker\n  v-model=\"color\"\n  show-alpha\n  :predefine=\"predefineColors\">\n</el-color-picker>\n\n<script>\n  export default {\n    data() {\n      return {\n        color: 'rgba(255, 69, 0, 0.68)',\n        predefineColors: [\n          '#ff4500',\n          '#ff8c00',\n          '#ffd700',\n          '#90ee90',\n          '#00ced1',\n          '#1e90ff',\n          '#c71585',\n          'rgba(255, 69, 0, 0.68)',\n          'rgb(255, 120, 0)',\n          'hsv(51, 100, 98)',\n          'hsva(120, 40, 94, 0.5)',\n          'hsl(181, 100%, 37%)',\n          'hsla(209, 100%, 56%, 0.73)',\n          '#c7158577'\n        ]\n      }\n    }\n  };\n<\/script>\n")],-1),V=Object(l.createVNode)("h3",{id:"sizes"},[Object(l.createVNode)("a",{class:"header-anchor",href:"#sizes"},"¶"),Object(l.createTextVNode)(" Sizes")],-1),f=Object(l.createVNode)("pre",null,[Object(l.createVNode)("code",{class:"html"},'<el-color-picker v-model="color"></el-color-picker>\n<el-color-picker v-model="color" size="medium"></el-color-picker>\n<el-color-picker v-model="color" size="small"></el-color-picker>\n<el-color-picker v-model="color" size="mini"></el-color-picker>\n\n<script>\n  export default {\n    data() {\n      return {\n        color: \'#409EFF\'\n      }\n    }\n  };\n<\/script>\n')],-1),j=Object(l.createStaticVNode)('<h3 id="attributes"><a class="header-anchor" href="#attributes">¶</a> Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>value / v-model</td><td>binding value</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>whether to disable the ColorPicker</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>size of ColorPicker</td><td>string</td><td>—</td><td>medium / small / mini</td></tr><tr><td>show-alpha</td><td>whether to display the alpha slider</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>color-format</td><td>color format of v-model</td><td>string</td><td>hsl / hsv / hex / rgb</td><td>hex (when show-alpha is false)/ rgb (when show-alpha is true)</td></tr><tr><td>popper-class</td><td>custom class name for ColorPicker&#39;s dropdown</td><td>string</td><td>—</td><td>—</td></tr><tr><td>predefine</td><td>predefined color options</td><td>array</td><td>—</td><td>—</td></tr></tbody></table><h3 id="events"><a class="header-anchor" href="#events">¶</a> Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>triggers when input value changes</td><td>color value</td></tr><tr><td>active-change</td><td>triggers when the current active color changes</td><td>active color value</td></tr></tbody></table>',4);var O={name:"component-doc",components:{"element-demo0":function(){const{createVNode:e,resolveComponent:t,openBlock:o,createBlock:r}=l,c={class:"block"},d=e("span",{class:"demonstration"},"With default value",-1),n={class:"block"},a=e("span",{class:"demonstration"},"With no default value",-1);const s={data:()=>({color1:"#409EFF",color2:null})};return Object.assign({render:function(l,s){const i=t("el-color-picker");return o(),r("div",null,[e("div",c,[d,e(i,{modelValue:l.color1,"onUpdate:modelValue":s[1]||(s[1]=e=>l.color1=e)},null,8,["modelValue"])]),e("div",n,[a,e(i,{modelValue:l.color2,"onUpdate:modelValue":s[2]||(s[2]=e=>l.color2=e)},null,8,["modelValue"])])])}},s)}(),"element-demo1":function(){const{resolveComponent:e,createVNode:t,openBlock:o,createBlock:r}=l;const c={data:()=>({color:"rgba(19, 206, 102, 0.8)"})};return Object.assign({render:function(l,c){const d=e("el-color-picker");return o(),r("div",null,[t(d,{modelValue:l.color,"onUpdate:modelValue":c[1]||(c[1]=e=>l.color=e),"show-alpha":""},null,8,["modelValue"])])}},c)}(),"element-demo2":function(){const{resolveComponent:e,createVNode:t,openBlock:o,createBlock:r}=l;const c={data:()=>({color:"rgba(255, 69, 0, 0.68)",predefineColors:["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","rgba(255, 69, 0, 0.68)","rgb(255, 120, 0)","hsv(51, 100, 98)","hsva(120, 40, 94, 0.5)","hsl(181, 100%, 37%)","hsla(209, 100%, 56%, 0.73)","#c7158577"]})};return Object.assign({render:function(l,c){const d=e("el-color-picker");return o(),r("div",null,[t(d,{modelValue:l.color,"onUpdate:modelValue":c[1]||(c[1]=e=>l.color=e),"show-alpha":"",predefine:l.predefineColors},null,8,["modelValue","predefine"])])}},c)}(),"element-demo3":function(){const{resolveComponent:e,createVNode:t,openBlock:o,createBlock:r}=l;const c={data:()=>({color:"#409EFF"})};return Object.assign({render:function(l,c){const d=e("el-color-picker");return o(),r("div",null,[t(d,{modelValue:l.color,"onUpdate:modelValue":c[1]||(c[1]=e=>l.color=e)},null,8,["modelValue"]),t(d,{modelValue:l.color,"onUpdate:modelValue":c[2]||(c[2]=e=>l.color=e),size:"medium"},null,8,["modelValue"]),t(d,{modelValue:l.color,"onUpdate:modelValue":c[3]||(c[3]=e=>l.color=e),size:"small"},null,8,["modelValue"]),t(d,{modelValue:l.color,"onUpdate:modelValue":c[4]||(c[4]=e=>l.color=e),size:"mini"},null,8,["modelValue"])])}},c)}()},render:function(e,t,o,O,v,k){const N=Object(l.resolveComponent)("element-demo0"),g=Object(l.resolveComponent)("demo-block"),w=Object(l.resolveComponent)("element-demo1"),C=Object(l.resolveComponent)("element-demo2"),x=Object(l.resolveComponent)("element-demo3");return Object(l.openBlock)(),Object(l.createBlock)("section",r,[c,d,n,Object(l.createVNode)(g,null,{source:Object(l.withCtx)(()=>[Object(l.createVNode)(N)]),highlight:Object(l.withCtx)(()=>[s]),default:Object(l.withCtx)(()=>[a]),_:1}),i,Object(l.createVNode)(g,null,{source:Object(l.withCtx)(()=>[Object(l.createVNode)(w)]),highlight:Object(l.withCtx)(()=>[u]),default:Object(l.withCtx)(()=>[h]),_:1}),p,Object(l.createVNode)(g,null,{source:Object(l.withCtx)(()=>[Object(l.createVNode)(C)]),highlight:Object(l.withCtx)(()=>[m]),default:Object(l.withCtx)(()=>[b]),_:1}),V,Object(l.createVNode)(g,null,{source:Object(l.withCtx)(()=>[Object(l.createVNode)(x)]),highlight:Object(l.withCtx)(()=>[f]),_:1}),j])}};t.default=O}}]);