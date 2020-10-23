(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{502:function(e,t,c){"use strict";c.r(t);var d=c(0);const o={class:"content element-doc"},n=Object(d.createVNode)("h2",{id:"checkbox"},[Object(d.createVNode)("a",{class:"header-anchor",href:"#checkbox"},"¶"),Object(d.createTextVNode)(" Checkbox")],-1),l=Object(d.createVNode)("p",null,"A group of options for multiple choices.",-1),a=Object(d.createVNode)("h3",{id:"basic-usage"},[Object(d.createVNode)("a",{class:"header-anchor",href:"#basic-usage"},"¶"),Object(d.createTextVNode)(" Basic usage")],-1),i=Object(d.createVNode)("p",null,"Checkbox can be used alone to switch between two states.",-1),r=Object(d.createVNode)("div",null,[Object(d.createVNode)("p",null,[Object(d.createTextVNode)("Define "),Object(d.createVNode)("code",null,"v-model"),Object(d.createTextVNode)("(bind variable) in "),Object(d.createVNode)("code",null,"el-checkbox"),Object(d.createTextVNode)(". The default value is a "),Object(d.createVNode)("code",null,"Boolean"),Object(d.createTextVNode)(" for single "),Object(d.createVNode)("code",null,"checkbox"),Object(d.createTextVNode)(", and it becomes "),Object(d.createVNode)("code",null,"true"),Object(d.createTextVNode)(" when selected. Content inside the "),Object(d.createVNode)("code",null,"el-checkbox"),Object(d.createTextVNode)(" tag will become the description following the button of the checkbox.")])],-1),h=Object(d.createVNode)("pre",null,[Object(d.createVNode)("code",{class:"html"},'<template>\n  \x3c!-- `checked` should be true or false --\x3e\n  <el-checkbox v-model="checked">Option</el-checkbox>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        checked: true\n      };\n    }\n  };\n<\/script>\n')],-1),b=Object(d.createVNode)("h3",{id:"disabled-state"},[Object(d.createVNode)("a",{class:"header-anchor",href:"#disabled-state"},"¶"),Object(d.createTextVNode)(" Disabled State")],-1),s=Object(d.createVNode)("p",null,"Disabled state for checkbox.",-1),u=Object(d.createVNode)("div",null,[Object(d.createVNode)("p",null,[Object(d.createTextVNode)("Set the "),Object(d.createVNode)("code",null,"disabled"),Object(d.createTextVNode)(" attribute.")])],-1),k=Object(d.createVNode)("pre",null,[Object(d.createVNode)("code",{class:"html"},'<template>\n  <el-checkbox v-model="checked1" disabled>Option</el-checkbox>\n  <el-checkbox v-model="checked2" disabled>Option</el-checkbox>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        checked1: false,\n        checked2: true\n      };\n    }\n  };\n<\/script>\n')],-1),m=Object(d.createVNode)("h3",{id:"checkbox-group"},[Object(d.createVNode)("a",{class:"header-anchor",href:"#checkbox-group"},"¶"),Object(d.createTextVNode)(" Checkbox group")],-1),p=Object(d.createVNode)("p",null,"It is used for multiple checkboxes which are bound in one group, and indicates whether one option is selected by checking if it is checked.",-1),x=Object(d.createVNode)("div",null,[Object(d.createVNode)("p",null,[Object(d.createVNode)("code",null,"checkbox-group"),Object(d.createTextVNode)(" element can manage multiple checkboxes in one group by using "),Object(d.createVNode)("code",null,"v-model"),Object(d.createTextVNode)(" which is bound as an "),Object(d.createVNode)("code",null,"Array"),Object(d.createTextVNode)(". Inside the "),Object(d.createVNode)("code",null,"el-checkbox"),Object(d.createTextVNode)(" element, "),Object(d.createVNode)("code",null,"label"),Object(d.createTextVNode)(" is the value of the checkbox. If no content is nested in that tag, "),Object(d.createVNode)("code",null,"label"),Object(d.createTextVNode)(" will be rendered as the description following the button of the checkbox. "),Object(d.createVNode)("code",null,"label"),Object(d.createTextVNode)(" also corresponds with the element values in the array. It is selected if the specified value exists in the array, and vice versa.")])],-1),O=Object(d.createVNode)("pre",null,[Object(d.createVNode)("code",{class:"html"},'<template>\n  <el-checkbox-group v-model="checkList">\n    <el-checkbox label="Option A"></el-checkbox>\n    <el-checkbox label="Option B"></el-checkbox>\n    <el-checkbox label="Option C"></el-checkbox>\n    <el-checkbox label="disabled" disabled></el-checkbox>\n    <el-checkbox label="selected and disabled" disabled></el-checkbox>\n  </el-checkbox-group>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        checkList: [\'selected and disabled\',\'Option A\']\n      };\n    }\n  };\n<\/script>\n')],-1),V=Object(d.createVNode)("h3",{id:"indeterminate"},[Object(d.createVNode)("a",{class:"header-anchor",href:"#indeterminate"},"¶"),Object(d.createTextVNode)(" Indeterminate")],-1),g=Object(d.createVNode)("p",null,[Object(d.createTextVNode)("The "),Object(d.createVNode)("code",null,"indeterminate"),Object(d.createTextVNode)(" property can help you to achieve a 'check all' effect.")],-1),j=Object(d.createVNode)("pre",null,[Object(d.createVNode)("code",{class:"html"},'<template>\n  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">Check all</el-checkbox>\n  <div style="margin: 15px 0;"></div>\n  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">\n    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>\n  </el-checkbox-group>\n</template>\n<script>\n  const cityOptions = [\'Shanghai\', \'Beijing\', \'Guangzhou\', \'Shenzhen\'];\n  export default {\n    data() {\n      return {\n        checkAll: false,\n        checkedCities: [\'Shanghai\', \'Beijing\'],\n        cities: cityOptions,\n        isIndeterminate: true\n      };\n    },\n    methods: {\n      handleCheckAllChange(val) {\n        this.checkedCities = val ? cityOptions : [];\n        this.isIndeterminate = false;\n      },\n      handleCheckedCitiesChange(value) {\n        let checkedCount = value.length;\n        this.checkAll = checkedCount === this.cities.length;\n        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;\n      }\n    }\n  };\n<\/script>\n')],-1),N=Object(d.createVNode)("h3",{id:"minimum-maximum-items-checked"},[Object(d.createVNode)("a",{class:"header-anchor",href:"#minimum-maximum-items-checked"},"¶"),Object(d.createTextVNode)(" Minimum / Maximum items checked")],-1),f=Object(d.createVNode)("p",null,[Object(d.createTextVNode)("The "),Object(d.createVNode)("code",null,"min"),Object(d.createTextVNode)(" and "),Object(d.createVNode)("code",null,"max"),Object(d.createTextVNode)(" properties can help you to limit the number of checked items.")],-1),v=Object(d.createVNode)("pre",null,[Object(d.createVNode)("code",{class:"html"},"<template>\n  <el-checkbox-group \n    v-model=\"checkedCities\"\n    :min=\"1\"\n    :max=\"2\">\n    <el-checkbox v-for=\"city in cities\" :label=\"city\" :key=\"city\">{{city}}</el-checkbox>\n  </el-checkbox-group>\n</template>\n<script>\n  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];\n  export default {\n    data() {\n      return {\n        checkedCities: ['Shanghai', 'Beijing'],\n        cities: cityOptions\n      };\n    }\n  };\n<\/script>\n")],-1),C=Object(d.createVNode)("h3",{id:"button-style"},[Object(d.createVNode)("a",{class:"header-anchor",href:"#button-style"},"¶"),Object(d.createTextVNode)(" Button style")],-1),y=Object(d.createVNode)("p",null,"Checkbox with button styles.",-1),w=Object(d.createVNode)("div",null,[Object(d.createVNode)("p",null,[Object(d.createTextVNode)("You just need to change "),Object(d.createVNode)("code",null,"el-checkbox"),Object(d.createTextVNode)(" element into "),Object(d.createVNode)("code",null,"el-checkbox-button"),Object(d.createTextVNode)(" element. We also provide "),Object(d.createVNode)("code",null,"size"),Object(d.createTextVNode)(" attribute.")])],-1),T=Object(d.createVNode)("pre",null,[Object(d.createVNode)("code",{class:"html"},'<template>\n  <div>\n    <el-checkbox-group v-model="checkboxGroup1">\n      <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>\n    </el-checkbox-group>\n  </div>\n  <div style="margin-top: 20px">\n    <el-checkbox-group v-model="checkboxGroup2" size="medium">\n      <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>\n    </el-checkbox-group>\n  </div>\n  <div style="margin-top: 20px">\n    <el-checkbox-group v-model="checkboxGroup3" size="small">\n      <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === \'Beijing\'" :key="city">{{city}}</el-checkbox-button>\n    </el-checkbox-group>\n  </div>\n  <div style="margin-top: 20px">\n    <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>\n      <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>\n    </el-checkbox-group>\n  </div>\n</template>\n<script>\n  const cityOptions = [\'Shanghai\', \'Beijing\', \'Guangzhou\', \'Shenzhen\'];\n\n  export default {\n    data () {\n      return {\n        checkboxGroup1: [\'Shanghai\'],\n        checkboxGroup2: [\'Shanghai\'],\n        checkboxGroup3: [\'Shanghai\'],\n        checkboxGroup4: [\'Shanghai\'],\n        cities: cityOptions\n      };\n    }\n  }\n<\/script>\n')],-1),G=Object(d.createVNode)("h3",{id:"with-borders"},[Object(d.createVNode)("a",{class:"header-anchor",href:"#with-borders"},"¶"),Object(d.createTextVNode)(" With borders")],-1),B=Object(d.createVNode)("div",null,[Object(d.createVNode)("p",null,[Object(d.createTextVNode)("The "),Object(d.createVNode)("code",null,"border"),Object(d.createTextVNode)(" attribute adds a border to Checkboxes.")])],-1),z=Object(d.createVNode)("pre",null,[Object(d.createVNode)("code",{class:"html"},'<template>\n  <div>\n    <el-checkbox v-model="checked1" label="Option1" border></el-checkbox>\n    <el-checkbox v-model="checked2" label="Option2" border></el-checkbox>\n  </div>\n  <div style="margin-top: 20px">\n    <el-checkbox v-model="checked3" label="Option1" border size="medium"></el-checkbox>\n    <el-checkbox v-model="checked4" label="Option2" border size="medium"></el-checkbox>\n  </div>\n  <div style="margin-top: 20px">\n    <el-checkbox-group v-model="checkboxGroup1" size="small">\n      <el-checkbox label="Option1" border></el-checkbox>\n      <el-checkbox label="Option2" border disabled></el-checkbox>\n    </el-checkbox-group>\n  </div>\n  <div style="margin-top: 20px">\n    <el-checkbox-group v-model="checkboxGroup2" size="mini" disabled>\n      <el-checkbox label="Option1" border></el-checkbox>\n      <el-checkbox label="Option2" border></el-checkbox>\n    </el-checkbox-group>\n  </div>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        checked1: true,\n        checked2: false,\n        checked3: false,\n        checked4: true,\n        checkboxGroup1: [],\n        checkboxGroup2: []\n      };\n    }\n  }\n<\/script>\n')],-1),S=Object(d.createStaticVNode)('<h3 id="checkbox-attributes"><a class="header-anchor" href="#checkbox-attributes">¶</a> Checkbox Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Options</th><th>Default</th></tr></thead><tbody><tr><td>value / v-model</td><td>binding value</td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>label</td><td>value of the Checkbox when used inside a <code>checkbox-group</code></td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>true-label</td><td>value of the Checkbox if it&#39;s checked</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>false-label</td><td>value of the Checkbox if it&#39;s not checked</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>whether the Checkbox is disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>border</td><td>whether to add a border around Checkbox</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>size of the Checkbox, only works when <code>border</code> is true</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>name</td><td>native &#39;name&#39; attribute</td><td>string</td><td>—</td><td>—</td></tr><tr><td>checked</td><td>if the Checkbox is checked</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>indeterminate</td><td>same as <code>indeterminate</code> in native checkbox</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id="checkbox-events"><a class="header-anchor" href="#checkbox-events">¶</a> Checkbox Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>triggers when the binding value changes</td><td>the updated value</td></tr></tbody></table><h3 id="checkbox-group-attributes"><a class="header-anchor" href="#checkbox-group-attributes">¶</a> Checkbox-group Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Options</th><th>Default</th></tr></thead><tbody><tr><td>value / v-model</td><td>binding value</td><td>array</td><td>—</td><td>—</td></tr><tr><td>size</td><td>size of checkbox buttons or bordered checkboxes</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>disabled</td><td>whether the nesting checkboxes are disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>min</td><td>minimum number of checkbox checked</td><td>number</td><td>—</td><td>—</td></tr><tr><td>max</td><td>maximum number of checkbox checked</td><td>number</td><td>—</td><td>—</td></tr><tr><td>text-color</td><td>font color when button is active</td><td>string</td><td>—</td><td>#ffffff</td></tr><tr><td>fill</td><td>border and background color when button is active</td><td>string</td><td>—</td><td>#409EFF</td></tr></tbody></table><h3 id="checkbox-group-events"><a class="header-anchor" href="#checkbox-group-events">¶</a> Checkbox-group Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>triggers when the binding value changes</td><td>the updated value</td></tr></tbody></table><h3 id="checkbox-button-attributes"><a class="header-anchor" href="#checkbox-button-attributes">¶</a> Checkbox-button Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Options</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>value of the checkbox when used inside a <code>checkbox-group</code></td><td>string / number / boolean</td><td>—</td><td>—</td></tr><tr><td>true-label</td><td>value of the checkbox if it&#39;s checked</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>false-label</td><td>value of the checkbox if it&#39;s not checked</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>whether the checkbox is disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>native &#39;name&#39; attribute</td><td>string</td><td>—</td><td>—</td></tr><tr><td>checked</td><td>if the checkbox is checked</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>',10);var _={name:"component-doc",components:{"element-demo0":function(){const{createTextVNode:e,resolveComponent:t,withCtx:c,createVNode:o,openBlock:n,createBlock:l}=d,a=e("Option");const i={data:()=>({checked:!0})};return Object.assign({render:function(e,d){const i=t("el-checkbox");return n(),l("div",null,[o(i,{modelValue:e.checked,"onUpdate:modelValue":d[1]||(d[1]=t=>e.checked=t)},{default:c(()=>[a]),_:1},8,["modelValue"])])}},i)}(),"element-demo1":function(){const{createTextVNode:e,resolveComponent:t,withCtx:c,createVNode:o,openBlock:n,createBlock:l}=d,a=e("Option"),i=e("Option");const r={data:()=>({checked1:!1,checked2:!0})};return Object.assign({render:function(e,d){const r=t("el-checkbox");return n(),l("div",null,[o(r,{modelValue:e.checked1,"onUpdate:modelValue":d[1]||(d[1]=t=>e.checked1=t),disabled:""},{default:c(()=>[a]),_:1},8,["modelValue"]),o(r,{modelValue:e.checked2,"onUpdate:modelValue":d[2]||(d[2]=t=>e.checked2=t),disabled:""},{default:c(()=>[i]),_:1},8,["modelValue"])])}},r)}(),"element-demo2":function(){const{resolveComponent:e,createVNode:t,withCtx:c,openBlock:o,createBlock:n}=d;const l={data:()=>({checkList:["selected and disabled","Option A"]})};return Object.assign({render:function(d,l){const a=e("el-checkbox"),i=e("el-checkbox-group");return o(),n("div",null,[t(i,{modelValue:d.checkList,"onUpdate:modelValue":l[1]||(l[1]=e=>d.checkList=e)},{default:c(()=>[t(a,{label:"Option A"}),t(a,{label:"Option B"}),t(a,{label:"Option C"}),t(a,{label:"disabled",disabled:""}),t(a,{label:"selected and disabled",disabled:""})]),_:1},8,["modelValue"])])}},l)}(),"element-demo3":function(){const{createTextVNode:e,resolveComponent:t,withCtx:c,createVNode:o,renderList:n,Fragment:l,openBlock:a,createBlock:i,toDisplayString:r}=d,h=e("Check all"),b=o("div",{style:{margin:"15px 0"}},null,-1);const s=["Shanghai","Beijing","Guangzhou","Shenzhen"],u={data:()=>({checkAll:!1,checkedCities:["Shanghai","Beijing"],cities:s,isIndeterminate:!0}),methods:{handleCheckAllChange(e){this.checkedCities=e?s:[],this.isIndeterminate=!1},handleCheckedCitiesChange(e){let t=e.length;this.checkAll=t===this.cities.length,this.isIndeterminate=t>0&&t<this.cities.length}}};return Object.assign({render:function(d,s){const u=t("el-checkbox"),k=t("el-checkbox-group");return a(),i("div",null,[o(u,{indeterminate:d.isIndeterminate,modelValue:d.checkAll,"onUpdate:modelValue":s[1]||(s[1]=e=>d.checkAll=e),onChange:d.handleCheckAllChange},{default:c(()=>[h]),_:1},8,["indeterminate","modelValue","onChange"]),b,o(k,{modelValue:d.checkedCities,"onUpdate:modelValue":s[2]||(s[2]=e=>d.checkedCities=e),onChange:d.handleCheckedCitiesChange},{default:c(()=>[(a(!0),i(l,null,n(d.cities,t=>(a(),i(u,{label:t,key:t},{default:c(()=>[e(r(t),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue","onChange"])])}},u)}(),"element-demo4":function(){const{renderList:e,Fragment:t,openBlock:c,createBlock:o,toDisplayString:n,createTextVNode:l,resolveComponent:a,withCtx:i,createVNode:r}=d;const h=["Shanghai","Beijing","Guangzhou","Shenzhen"],b={data:()=>({checkedCities:["Shanghai","Beijing"],cities:h})};return Object.assign({render:function(d,h){const b=a("el-checkbox"),s=a("el-checkbox-group");return c(),o("div",null,[r(s,{modelValue:d.checkedCities,"onUpdate:modelValue":h[1]||(h[1]=e=>d.checkedCities=e),min:1,max:2},{default:i(()=>[(c(!0),o(t,null,e(d.cities,e=>(c(),o(b,{label:e,key:e},{default:i(()=>[l(n(e),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])])}},b)}(),"element-demo5":function(){const{renderList:e,Fragment:t,openBlock:c,createBlock:o,toDisplayString:n,createTextVNode:l,resolveComponent:a,withCtx:i,createVNode:r}=d,h={style:{"margin-top":"20px"}},b={style:{"margin-top":"20px"}},s={style:{"margin-top":"20px"}};const u=["Shanghai","Beijing","Guangzhou","Shenzhen"],k={data:()=>({checkboxGroup1:["Shanghai"],checkboxGroup2:["Shanghai"],checkboxGroup3:["Shanghai"],checkboxGroup4:["Shanghai"],cities:u})};return Object.assign({render:function(d,u){const k=a("el-checkbox-button"),m=a("el-checkbox-group");return c(),o("div",null,[r("div",null,[r(m,{modelValue:d.checkboxGroup1,"onUpdate:modelValue":u[1]||(u[1]=e=>d.checkboxGroup1=e)},{default:i(()=>[(c(!0),o(t,null,e(d.cities,e=>(c(),o(k,{label:e,key:e},{default:i(()=>[l(n(e),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),r("div",h,[r(m,{modelValue:d.checkboxGroup2,"onUpdate:modelValue":u[2]||(u[2]=e=>d.checkboxGroup2=e),size:"medium"},{default:i(()=>[(c(!0),o(t,null,e(d.cities,e=>(c(),o(k,{label:e,key:e},{default:i(()=>[l(n(e),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),r("div",b,[r(m,{modelValue:d.checkboxGroup3,"onUpdate:modelValue":u[3]||(u[3]=e=>d.checkboxGroup3=e),size:"small"},{default:i(()=>[(c(!0),o(t,null,e(d.cities,e=>(c(),o(k,{label:e,disabled:"Beijing"===e,key:e},{default:i(()=>[l(n(e),1)]),_:2},1032,["label","disabled"]))),128))]),_:1},8,["modelValue"])]),r("div",s,[r(m,{modelValue:d.checkboxGroup4,"onUpdate:modelValue":u[4]||(u[4]=e=>d.checkboxGroup4=e),size:"mini",disabled:""},{default:i(()=>[(c(!0),o(t,null,e(d.cities,e=>(c(),o(k,{label:e,key:e},{default:i(()=>[l(n(e),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])])])}},k)}(),"element-demo6":function(){const{resolveComponent:e,createVNode:t,withCtx:c,openBlock:o,createBlock:n}=d,l={style:{"margin-top":"20px"}},a={style:{"margin-top":"20px"}},i={style:{"margin-top":"20px"}};const r={data:()=>({checked1:!0,checked2:!1,checked3:!1,checked4:!0,checkboxGroup1:[],checkboxGroup2:[]})};return Object.assign({render:function(d,r){const h=e("el-checkbox"),b=e("el-checkbox-group");return o(),n("div",null,[t("div",null,[t(h,{modelValue:d.checked1,"onUpdate:modelValue":r[1]||(r[1]=e=>d.checked1=e),label:"Option1",border:""},null,8,["modelValue"]),t(h,{modelValue:d.checked2,"onUpdate:modelValue":r[2]||(r[2]=e=>d.checked2=e),label:"Option2",border:""},null,8,["modelValue"])]),t("div",l,[t(h,{modelValue:d.checked3,"onUpdate:modelValue":r[3]||(r[3]=e=>d.checked3=e),label:"Option1",border:"",size:"medium"},null,8,["modelValue"]),t(h,{modelValue:d.checked4,"onUpdate:modelValue":r[4]||(r[4]=e=>d.checked4=e),label:"Option2",border:"",size:"medium"},null,8,["modelValue"])]),t("div",a,[t(b,{modelValue:d.checkboxGroup1,"onUpdate:modelValue":r[5]||(r[5]=e=>d.checkboxGroup1=e),size:"small"},{default:c(()=>[t(h,{label:"Option1",border:""}),t(h,{label:"Option2",border:"",disabled:""})]),_:1},8,["modelValue"])]),t("div",i,[t(b,{modelValue:d.checkboxGroup2,"onUpdate:modelValue":r[6]||(r[6]=e=>d.checkboxGroup2=e),size:"mini",disabled:""},{default:c(()=>[t(h,{label:"Option1",border:""}),t(h,{label:"Option2",border:""})]),_:1},8,["modelValue"])])])}},r)}()},render:function(e,t,c,_,A,U){const D=Object(d.resolveComponent)("element-demo0"),I=Object(d.resolveComponent)("demo-block"),L=Object(d.resolveComponent)("element-demo1"),E=Object(d.resolveComponent)("element-demo2"),F=Object(d.resolveComponent)("element-demo3"),J=Object(d.resolveComponent)("element-demo4"),M=Object(d.resolveComponent)("element-demo5"),P=Object(d.resolveComponent)("element-demo6");return Object(d.openBlock)(),Object(d.createBlock)("section",o,[n,l,a,i,Object(d.createVNode)(I,null,{source:Object(d.withCtx)(()=>[Object(d.createVNode)(D)]),highlight:Object(d.withCtx)(()=>[h]),default:Object(d.withCtx)(()=>[r]),_:1}),b,s,Object(d.createVNode)(I,null,{source:Object(d.withCtx)(()=>[Object(d.createVNode)(L)]),highlight:Object(d.withCtx)(()=>[k]),default:Object(d.withCtx)(()=>[u]),_:1}),m,p,Object(d.createVNode)(I,null,{source:Object(d.withCtx)(()=>[Object(d.createVNode)(E)]),highlight:Object(d.withCtx)(()=>[O]),default:Object(d.withCtx)(()=>[x]),_:1}),V,g,Object(d.createVNode)(I,null,{source:Object(d.withCtx)(()=>[Object(d.createVNode)(F)]),highlight:Object(d.withCtx)(()=>[j]),_:1}),N,f,Object(d.createVNode)(I,null,{source:Object(d.withCtx)(()=>[Object(d.createVNode)(J)]),highlight:Object(d.withCtx)(()=>[v]),_:1}),C,y,Object(d.createVNode)(I,null,{source:Object(d.withCtx)(()=>[Object(d.createVNode)(M)]),highlight:Object(d.withCtx)(()=>[T]),default:Object(d.withCtx)(()=>[w]),_:1}),G,Object(d.createVNode)(I,null,{source:Object(d.withCtx)(()=>[Object(d.createVNode)(P)]),highlight:Object(d.withCtx)(()=>[z]),default:Object(d.withCtx)(()=>[B]),_:1}),S])}};t.default=_}}]);