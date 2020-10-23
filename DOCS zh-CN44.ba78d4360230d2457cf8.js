(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{473:function(e,t,d){"use strict";d.r(t);var a=d(0);const o={class:"content element-doc"},l=Object(a.createVNode)("h2",{id:"radio-dan-xuan-kuang"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#radio-dan-xuan-kuang"},"¶"),Object(a.createTextVNode)(" Radio 单选框")],-1),r=Object(a.createVNode)("p",null,"在一组备选项中进行单选",-1),n=Object(a.createVNode)("h3",{id:"ji-chu-yong-fa"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#ji-chu-yong-fa"},"¶"),Object(a.createTextVNode)(" 基础用法")],-1),i=Object(a.createVNode)("p",null,"由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。",-1),c=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("要使用 Radio 组件，只需要设置"),Object(a.createVNode)("code",null,"v-model"),Object(a.createTextVNode)("绑定变量，选中意味着变量的值为相应 Radio "),Object(a.createVNode)("code",null,"label"),Object(a.createTextVNode)("属性的值，"),Object(a.createVNode)("code",null,"label"),Object(a.createTextVNode)("可以是"),Object(a.createVNode)("code",null,"String"),Object(a.createTextVNode)("、"),Object(a.createVNode)("code",null,"Number"),Object(a.createTextVNode)("或"),Object(a.createVNode)("code",null,"Boolean"),Object(a.createTextVNode)("。")])],-1),b=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},'<template>\n  <el-radio v-model="radio" label="1">备选项</el-radio>\n  <el-radio v-model="radio" label="2">备选项</el-radio>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        radio: \'1\'\n      };\n    }\n  }\n<\/script>\n')],-1),u=Object(a.createVNode)("h3",{id:"jin-yong-zhuang-tai"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#jin-yong-zhuang-tai"},"¶"),Object(a.createTextVNode)(" 禁用状态")],-1),s=Object(a.createVNode)("p",null,"单选框不可用的状态。",-1),m=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("只要在"),Object(a.createVNode)("code",null,"el-radio"),Object(a.createTextVNode)("元素中设置"),Object(a.createVNode)("code",null,"disabled"),Object(a.createTextVNode)("属性即可，它接受一个"),Object(a.createVNode)("code",null,"Boolean"),Object(a.createTextVNode)("，"),Object(a.createVNode)("code",null,"true"),Object(a.createTextVNode)("为禁用。")])],-1),V=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},'<template>\n  <el-radio disabled v-model="radio" label="禁用">备选项</el-radio>\n  <el-radio disabled v-model="radio" label="选中且禁用">备选项</el-radio>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        radio: \'选中且禁用\'\n      };\n    }\n  }\n<\/script>\n')],-1),h=Object(a.createVNode)("h3",{id:"dan-xuan-kuang-zu"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#dan-xuan-kuang-zu"},"¶"),Object(a.createTextVNode)(" 单选框组")],-1),j=Object(a.createVNode)("p",null,"适用于在多个互斥的选项中选择的场景",-1),O=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("结合"),Object(a.createVNode)("code",null,"el-radio-group"),Object(a.createTextVNode)("元素和子元素"),Object(a.createVNode)("code",null,"el-radio"),Object(a.createTextVNode)("可以实现单选组，在"),Object(a.createVNode)("code",null,"el-radio-group"),Object(a.createTextVNode)("中绑定"),Object(a.createVNode)("code",null,"v-model"),Object(a.createTextVNode)("，在"),Object(a.createVNode)("code",null,"el-radio"),Object(a.createTextVNode)("中设置好"),Object(a.createVNode)("code",null,"label"),Object(a.createTextVNode)("即可，无需再给每一个"),Object(a.createVNode)("code",null,"el-radio"),Object(a.createTextVNode)("绑定变量，另外，还提供了"),Object(a.createVNode)("code",null,"change"),Object(a.createTextVNode)("事件来响应变化，它会传入一个参数"),Object(a.createVNode)("code",null,"value"),Object(a.createTextVNode)("。")])],-1),p=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},'<template>\n  <el-radio-group v-model="radio">\n    <el-radio :label="3">备选项</el-radio>\n    <el-radio :label="6">备选项</el-radio>\n    <el-radio :label="9">备选项</el-radio>\n  </el-radio-group>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        radio: 3\n      };\n    }\n  }\n<\/script>\n')],-1),N=Object(a.createVNode)("h3",{id:"an-niu-yang-shi"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#an-niu-yang-shi"},"¶"),Object(a.createTextVNode)(" 按钮样式")],-1),g=Object(a.createVNode)("p",null,"按钮样式的单选组合。",-1),x=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("只需要把"),Object(a.createVNode)("code",null,"el-radio"),Object(a.createTextVNode)("元素换成"),Object(a.createVNode)("code",null,"el-radio-button"),Object(a.createTextVNode)("元素即可，此外，Element Plus 还提供了"),Object(a.createVNode)("code",null,"size"),Object(a.createTextVNode)("属性。")])],-1),v=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},'<template>\n  <div>\n    <el-radio-group v-model="radio1">\n      <el-radio-button label="上海"></el-radio-button>\n      <el-radio-button label="北京"></el-radio-button>\n      <el-radio-button label="广州"></el-radio-button>\n      <el-radio-button label="深圳"></el-radio-button>\n    </el-radio-group>\n  </div>\n  <div style="margin-top: 20px">\n    <el-radio-group v-model="radio2" size="medium">\n      <el-radio-button label="上海" ></el-radio-button>\n      <el-radio-button label="北京"></el-radio-button>\n      <el-radio-button label="广州"></el-radio-button>\n      <el-radio-button label="深圳"></el-radio-button>\n    </el-radio-group>\n  </div>\n  <div style="margin-top: 20px">\n    <el-radio-group v-model="radio3" size="small">\n      <el-radio-button label="上海"></el-radio-button>\n      <el-radio-button label="北京" disabled ></el-radio-button>\n      <el-radio-button label="广州"></el-radio-button>\n      <el-radio-button label="深圳"></el-radio-button>\n    </el-radio-group>\n  </div>\n  <div style="margin-top: 20px">\n    <el-radio-group v-model="radio4" disabled size="mini">\n      <el-radio-button label="上海"></el-radio-button>\n      <el-radio-button label="北京"></el-radio-button>\n      <el-radio-button label="广州"></el-radio-button>\n      <el-radio-button label="深圳"></el-radio-button>\n    </el-radio-group>\n  </div>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        radio1: \'上海\',\n        radio2: \'上海\',\n        radio3: \'上海\',\n        radio4: \'上海\'\n      };\n    }\n  }\n<\/script>\n')],-1),f=Object(a.createVNode)("h3",{id:"dai-you-bian-kuang"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#dai-you-bian-kuang"},"¶"),Object(a.createTextVNode)(" 带有边框")],-1),T=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("设置"),Object(a.createVNode)("code",null,"border"),Object(a.createTextVNode)("属性可以渲染为带有边框的单选框。")])],-1),C=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},'<template>\n  <div>\n    <el-radio v-model="radio1" label="1" border>备选项1</el-radio>\n    <el-radio v-model="radio1" label="2" border>备选项2</el-radio>\n  </div>\n  <div style="margin-top: 20px">\n    <el-radio v-model="radio2" label="1" border size="medium">备选项1</el-radio>\n    <el-radio v-model="radio2" label="2" border size="medium">备选项2</el-radio>\n  </div>\n  <div style="margin-top: 20px">\n    <el-radio-group v-model="radio3" size="small">\n      <el-radio label="1" border>备选项1</el-radio>\n      <el-radio label="2" border disabled>备选项2</el-radio>\n    </el-radio-group>\n  </div>\n  <div style="margin-top: 20px">\n    <el-radio-group v-model="radio4" size="mini" disabled>\n      <el-radio label="1" border>备选项1</el-radio>\n      <el-radio label="2" border>备选项2</el-radio>\n    </el-radio-group>\n  </div>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        radio1: \'1\',\n        radio2: \'1\',\n        radio3: \'1\',\n        radio4: \'1\'\n      };\n    }\n  }\n<\/script>\n')],-1),y=Object(a.createStaticVNode)('<h3 id="radio-attributes"><a class="header-anchor" href="#radio-attributes">¶</a> Radio Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value / v-model</td><td>绑定值</td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>label</td><td>Radio 的 value</td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>border</td><td>是否显示边框</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>Radio 的尺寸，仅在 border 为真时有效</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>name</td><td>原生 name 属性</td><td>string</td><td>—</td><td>—</td></tr></tbody></table><h3 id="radio-events"><a class="header-anchor" href="#radio-events">¶</a> Radio Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>绑定值变化时触发的事件</td><td>选中的 Radio label 值</td></tr></tbody></table><h3 id="radio-group-attributes"><a class="header-anchor" href="#radio-group-attributes">¶</a> Radio-group Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value / v-model</td><td>绑定值</td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>size</td><td>单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>text-color</td><td>按钮形式的 Radio 激活时的文本颜色</td><td>string</td><td>—</td><td>#ffffff</td></tr><tr><td>fill</td><td>按钮形式的 Radio 激活时的填充色和边框色</td><td>string</td><td>—</td><td>#409EFF</td></tr></tbody></table><h3 id="radio-group-events"><a class="header-anchor" href="#radio-group-events">¶</a> Radio-group Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>绑定值变化时触发的事件</td><td>选中的 Radio label 值</td></tr></tbody></table><h3 id="radio-button-attributes"><a class="header-anchor" href="#radio-button-attributes">¶</a> Radio-button Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>Radio 的 value</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>原生 name 属性</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>',10);var _={name:"component-doc",components:{"element-demo0":function(){const{createTextVNode:e,resolveComponent:t,withCtx:d,createVNode:o,openBlock:l,createBlock:r}=a,n=e("备选项"),i=e("备选项");const c={data:()=>({radio:"1"})};return Object.assign({render:function(e,a){const c=t("el-radio");return l(),r("div",null,[o(c,{modelValue:e.radio,"onUpdate:modelValue":a[1]||(a[1]=t=>e.radio=t),label:"1"},{default:d(()=>[n]),_:1},8,["modelValue"]),o(c,{modelValue:e.radio,"onUpdate:modelValue":a[2]||(a[2]=t=>e.radio=t),label:"2"},{default:d(()=>[i]),_:1},8,["modelValue"])])}},c)}(),"element-demo1":function(){const{createTextVNode:e,resolveComponent:t,withCtx:d,createVNode:o,openBlock:l,createBlock:r}=a,n=e("备选项"),i=e("备选项");const c={data:()=>({radio:"选中且禁用"})};return Object.assign({render:function(e,a){const c=t("el-radio");return l(),r("div",null,[o(c,{disabled:"",modelValue:e.radio,"onUpdate:modelValue":a[1]||(a[1]=t=>e.radio=t),label:"禁用"},{default:d(()=>[n]),_:1},8,["modelValue"]),o(c,{disabled:"",modelValue:e.radio,"onUpdate:modelValue":a[2]||(a[2]=t=>e.radio=t),label:"选中且禁用"},{default:d(()=>[i]),_:1},8,["modelValue"])])}},c)}(),"element-demo2":function(){const{createTextVNode:e,resolveComponent:t,withCtx:d,createVNode:o,openBlock:l,createBlock:r}=a,n=e("备选项"),i=e("备选项"),c=e("备选项");const b={data:()=>({radio:3})};return Object.assign({render:function(e,a){const b=t("el-radio"),u=t("el-radio-group");return l(),r("div",null,[o(u,{modelValue:e.radio,"onUpdate:modelValue":a[1]||(a[1]=t=>e.radio=t)},{default:d(()=>[o(b,{label:3},{default:d(()=>[n]),_:1}),o(b,{label:6},{default:d(()=>[i]),_:1}),o(b,{label:9},{default:d(()=>[c]),_:1})]),_:1},8,["modelValue"])])}},b)}(),"element-demo3":function(){const{resolveComponent:e,createVNode:t,withCtx:d,openBlock:o,createBlock:l}=a,r={style:{"margin-top":"20px"}},n={style:{"margin-top":"20px"}},i={style:{"margin-top":"20px"}};const c={data:()=>({radio1:"上海",radio2:"上海",radio3:"上海",radio4:"上海"})};return Object.assign({render:function(a,c){const b=e("el-radio-button"),u=e("el-radio-group");return o(),l("div",null,[t("div",null,[t(u,{modelValue:a.radio1,"onUpdate:modelValue":c[1]||(c[1]=e=>a.radio1=e)},{default:d(()=>[t(b,{label:"上海"}),t(b,{label:"北京"}),t(b,{label:"广州"}),t(b,{label:"深圳"})]),_:1},8,["modelValue"])]),t("div",r,[t(u,{modelValue:a.radio2,"onUpdate:modelValue":c[2]||(c[2]=e=>a.radio2=e),size:"medium"},{default:d(()=>[t(b,{label:"上海"}),t(b,{label:"北京"}),t(b,{label:"广州"}),t(b,{label:"深圳"})]),_:1},8,["modelValue"])]),t("div",n,[t(u,{modelValue:a.radio3,"onUpdate:modelValue":c[3]||(c[3]=e=>a.radio3=e),size:"small"},{default:d(()=>[t(b,{label:"上海"}),t(b,{label:"北京",disabled:""}),t(b,{label:"广州"}),t(b,{label:"深圳"})]),_:1},8,["modelValue"])]),t("div",i,[t(u,{modelValue:a.radio4,"onUpdate:modelValue":c[4]||(c[4]=e=>a.radio4=e),disabled:"",size:"mini"},{default:d(()=>[t(b,{label:"上海"}),t(b,{label:"北京"}),t(b,{label:"广州"}),t(b,{label:"深圳"})]),_:1},8,["modelValue"])])])}},c)}(),"element-demo4":function(){const{createTextVNode:e,resolveComponent:t,withCtx:d,createVNode:o,openBlock:l,createBlock:r}=a,n=e("备选项1"),i=e("备选项2"),c={style:{"margin-top":"20px"}},b=e("备选项1"),u=e("备选项2"),s={style:{"margin-top":"20px"}},m=e("备选项1"),V=e("备选项2"),h={style:{"margin-top":"20px"}},j=e("备选项1"),O=e("备选项2");const p={data:()=>({radio1:"1",radio2:"1",radio3:"1",radio4:"1"})};return Object.assign({render:function(e,a){const p=t("el-radio"),N=t("el-radio-group");return l(),r("div",null,[o("div",null,[o(p,{modelValue:e.radio1,"onUpdate:modelValue":a[1]||(a[1]=t=>e.radio1=t),label:"1",border:""},{default:d(()=>[n]),_:1},8,["modelValue"]),o(p,{modelValue:e.radio1,"onUpdate:modelValue":a[2]||(a[2]=t=>e.radio1=t),label:"2",border:""},{default:d(()=>[i]),_:1},8,["modelValue"])]),o("div",c,[o(p,{modelValue:e.radio2,"onUpdate:modelValue":a[3]||(a[3]=t=>e.radio2=t),label:"1",border:"",size:"medium"},{default:d(()=>[b]),_:1},8,["modelValue"]),o(p,{modelValue:e.radio2,"onUpdate:modelValue":a[4]||(a[4]=t=>e.radio2=t),label:"2",border:"",size:"medium"},{default:d(()=>[u]),_:1},8,["modelValue"])]),o("div",s,[o(N,{modelValue:e.radio3,"onUpdate:modelValue":a[5]||(a[5]=t=>e.radio3=t),size:"small"},{default:d(()=>[o(p,{label:"1",border:""},{default:d(()=>[m]),_:1}),o(p,{label:"2",border:"",disabled:""},{default:d(()=>[V]),_:1})]),_:1},8,["modelValue"])]),o("div",h,[o(N,{modelValue:e.radio4,"onUpdate:modelValue":a[6]||(a[6]=t=>e.radio4=t),size:"mini",disabled:""},{default:d(()=>[o(p,{label:"1",border:""},{default:d(()=>[j]),_:1}),o(p,{label:"2",border:""},{default:d(()=>[O]),_:1})]),_:1},8,["modelValue"])])])}},p)}()},render:function(e,t,d,_,w,k){const z=Object(a.resolveComponent)("element-demo0"),R=Object(a.resolveComponent)("demo-block"),U=Object(a.resolveComponent)("element-demo1"),B=Object(a.resolveComponent)("element-demo2"),E=Object(a.resolveComponent)("element-demo3"),A=Object(a.resolveComponent)("element-demo4");return Object(a.openBlock)(),Object(a.createBlock)("section",o,[l,r,n,i,Object(a.createVNode)(R,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(z)]),highlight:Object(a.withCtx)(()=>[b]),default:Object(a.withCtx)(()=>[c]),_:1}),u,s,Object(a.createVNode)(R,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(U)]),highlight:Object(a.withCtx)(()=>[V]),default:Object(a.withCtx)(()=>[m]),_:1}),h,j,Object(a.createVNode)(R,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(B)]),highlight:Object(a.withCtx)(()=>[p]),default:Object(a.withCtx)(()=>[O]),_:1}),N,g,Object(a.createVNode)(R,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(E)]),highlight:Object(a.withCtx)(()=>[v]),default:Object(a.withCtx)(()=>[x]),_:1}),f,Object(a.createVNode)(R,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(A)]),highlight:Object(a.withCtx)(()=>[C]),default:Object(a.withCtx)(()=>[T]),_:1}),y])}};t.default=_}}]);