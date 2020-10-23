(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{445:function(e,t,l){"use strict";l.r(t);var n=l(0);const d={class:"content element-doc"},a=Object(n.createVNode)("h2",{id:"collapse-zhe-die-mian-ban"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#collapse-zhe-die-mian-ban"},"¶"),Object(n.createTextVNode)(" Collapse 折叠面板")],-1),c=Object(n.createVNode)("p",null,"通过折叠面板收纳内容区域",-1),i=Object(n.createVNode)("h3",{id:"ji-chu-yong-fa"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#ji-chu-yong-fa"},"¶"),Object(n.createTextVNode)(" 基础用法")],-1),o=Object(n.createVNode)("p",null,"可同时展开多个面板，面板之间不影响",-1),r=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<el-collapse v-model="activeNames" @change="handleChange">\n  <el-collapse-item title="一致性 Consistency" name="1">\n    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>\n    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>\n  </el-collapse-item>\n  <el-collapse-item title="反馈 Feedback" name="2">\n    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>\n    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>\n  </el-collapse-item>\n  <el-collapse-item title="效率 Efficiency" name="3">\n    <div>简化流程：设计简洁直观的操作流程；</div>\n    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>\n    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>\n  </el-collapse-item>\n  <el-collapse-item title="可控 Controllability" name="4">\n    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>\n    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>\n  </el-collapse-item>\n</el-collapse>\n<script>\n  export default {\n    data() {\n      return {\n        activeNames: [\'1\']\n      };\n    },\n    methods: {\n      handleChange(val) {\n        console.log(val);\n      }\n    }\n  }\n<\/script>\n')],-1),s=Object(n.createVNode)("h3",{id:"shou-feng-qin-xiao-guo"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#shou-feng-qin-xiao-guo"},"¶"),Object(n.createTextVNode)(" 手风琴效果")],-1),v=Object(n.createVNode)("p",null,"每次只能展开一个面板",-1),h=Object(n.createVNode)("div",null,[Object(n.createVNode)("p",null,[Object(n.createTextVNode)("通过 "),Object(n.createVNode)("code",null,"accordion"),Object(n.createTextVNode)(" 属性来设置是否以手风琴模式显示。")])],-1),u=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<el-collapse v-model="activeName" accordion>\n  <el-collapse-item title="一致性 Consistency" name="1">\n    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>\n    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>\n  </el-collapse-item>\n  <el-collapse-item title="反馈 Feedback" name="2">\n    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>\n    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>\n  </el-collapse-item>\n  <el-collapse-item title="效率 Efficiency" name="3">\n    <div>简化流程：设计简洁直观的操作流程；</div>\n    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>\n    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>\n  </el-collapse-item>\n  <el-collapse-item title="可控 Controllability" name="4">\n    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>\n    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>\n  </el-collapse-item>\n</el-collapse>\n<script>\n  export default {\n    data() {\n      return {\n        activeName: \'1\'\n      };\n    }\n  }\n<\/script>\n')],-1),m=Object(n.createVNode)("h3",{id:"zi-ding-yi-mian-ban-biao-ti"},[Object(n.createVNode)("a",{class:"header-anchor",href:"#zi-ding-yi-mian-ban-biao-ti"},"¶"),Object(n.createTextVNode)(" 自定义面板标题")],-1),b=Object(n.createVNode)("p",null,[Object(n.createTextVNode)("除了可以通过 "),Object(n.createVNode)("code",null,"title"),Object(n.createTextVNode)(" 属性以外，还可以通过具名 "),Object(n.createVNode)("code",null,"slot"),Object(n.createTextVNode)(" 来实现自定义面板的标题内容，以实现增加图标等效果。")],-1),p=Object(n.createVNode)("pre",null,[Object(n.createVNode)("code",{class:"html"},'<el-collapse accordion>\n  <el-collapse-item>\n    <template slot="title">\n      一致性 Consistency<i class="header-icon el-icon-info"></i>\n    </template>\n    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>\n    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>\n  </el-collapse-item>\n  <el-collapse-item title="反馈 Feedback">\n    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>\n    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>\n  </el-collapse-item>\n  <el-collapse-item title="效率 Efficiency">\n    <div>简化流程：设计简洁直观的操作流程；</div>\n    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>\n    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>\n  </el-collapse-item>\n  <el-collapse-item title="可控 Controllability">\n    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>\n    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>\n  </el-collapse-item>\n</el-collapse>\n')],-1),j=Object(n.createStaticVNode)('<h3 id="collapse-attributes"><a class="header-anchor" href="#collapse-attributes">¶</a> Collapse Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value / v-model</td><td>当前激活的面板(如果是手风琴模式，绑定值类型需要为<code>string</code>，否则为<code>array</code>)</td><td>string / array</td><td>—</td><td>—</td></tr><tr><td>accordion</td><td>是否手风琴模式</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id="collapse-events"><a class="header-anchor" href="#collapse-events">¶</a> Collapse Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>当前激活面板改变时触发(如果是手风琴模式，参数 <code>activeNames</code> 类型为<code>string</code>，否则为<code>array</code>)</td><td>(activeNames: array / string)</td></tr></tbody></table><h3 id="collapse-item-attributes"><a class="header-anchor" href="#collapse-item-attributes">¶</a> Collapse Item Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>唯一标志符</td><td>string/number</td><td>—</td><td>—</td></tr><tr><td>title</td><td>面板标题</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>—</td></tr></tbody></table>',6);var N={name:"component-doc",components:{"element-demo0":function(){const{createVNode:e,resolveComponent:t,withCtx:l,openBlock:d,createBlock:a}=n,c=e("div",null,"与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；",-1),i=e("div",null,"在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。",-1),o=e("div",null,"控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；",-1),r=e("div",null,"页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。",-1),s=e("div",null,"简化流程：设计简洁直观的操作流程；",-1),v=e("div",null,"清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；",-1),h=e("div",null,"帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。",-1),u=e("div",null,"用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；",-1),m=e("div",null,"结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。",-1);const b={data:()=>({activeNames:["1"]}),methods:{handleChange(e){console.log(e)}}};return Object.assign({render:function(n,b){const p=t("el-collapse-item"),j=t("el-collapse");return d(),a("div",null,[e(j,{modelValue:n.activeNames,"onUpdate:modelValue":b[1]||(b[1]=e=>n.activeNames=e),onChange:n.handleChange},{default:l(()=>[e(p,{title:"一致性 Consistency",name:"1"},{default:l(()=>[c,i]),_:1}),e(p,{title:"反馈 Feedback",name:"2"},{default:l(()=>[o,r]),_:1}),e(p,{title:"效率 Efficiency",name:"3"},{default:l(()=>[s,v,h]),_:1}),e(p,{title:"可控 Controllability",name:"4"},{default:l(()=>[u,m]),_:1})]),_:1},8,["modelValue","onChange"])])}},b)}(),"element-demo1":function(){const{createVNode:e,resolveComponent:t,withCtx:l,openBlock:d,createBlock:a}=n,c=e("div",null,"与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；",-1),i=e("div",null,"在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。",-1),o=e("div",null,"控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；",-1),r=e("div",null,"页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。",-1),s=e("div",null,"简化流程：设计简洁直观的操作流程；",-1),v=e("div",null,"清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；",-1),h=e("div",null,"帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。",-1),u=e("div",null,"用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；",-1),m=e("div",null,"结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。",-1);const b={data:()=>({activeName:"1"})};return Object.assign({render:function(n,b){const p=t("el-collapse-item"),j=t("el-collapse");return d(),a("div",null,[e(j,{modelValue:n.activeName,"onUpdate:modelValue":b[1]||(b[1]=e=>n.activeName=e),accordion:""},{default:l(()=>[e(p,{title:"一致性 Consistency",name:"1"},{default:l(()=>[c,i]),_:1}),e(p,{title:"反馈 Feedback",name:"2"},{default:l(()=>[o,r]),_:1}),e(p,{title:"效率 Efficiency",name:"3"},{default:l(()=>[s,v,h]),_:1}),e(p,{title:"可控 Controllability",name:"4"},{default:l(()=>[u,m]),_:1})]),_:1},8,["modelValue"])])}},b)}(),"element-demo2":function(){const{createVNode:e,createTextVNode:t,resolveComponent:l,withCtx:d,openBlock:a,createBlock:c}=n,i=e("template",{slot:"title"},[t(" 一致性 Consistency"),e("i",{class:"header-icon el-icon-info"})],-1),o=e("div",null,"与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；",-1),r=e("div",null,"在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。",-1),s=e("div",null,"控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；",-1),v=e("div",null,"页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。",-1),h=e("div",null,"简化流程：设计简洁直观的操作流程；",-1),u=e("div",null,"清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；",-1),m=e("div",null,"帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。",-1),b=e("div",null,"用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；",-1),p=e("div",null,"结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。",-1);return Object.assign({render:function(t,n){const j=l("el-collapse-item"),N=l("el-collapse");return a(),c("div",null,[e(N,{accordion:""},{default:d(()=>[e(j,null,{default:d(()=>[i,o,r]),_:1}),e(j,{title:"反馈 Feedback"},{default:d(()=>[s,v]),_:1}),e(j,{title:"效率 Efficiency"},{default:d(()=>[h,u,m]),_:1}),e(j,{title:"可控 Controllability"},{default:d(()=>[b,p]),_:1})]),_:1})])}},{})}()},render:function(e,t,l,N,O,f){const V=Object(n.resolveComponent)("element-demo0"),C=Object(n.resolveComponent)("demo-block"),g=Object(n.resolveComponent)("element-demo1"),y=Object(n.resolveComponent)("element-demo2");return Object(n.openBlock)(),Object(n.createBlock)("section",d,[a,c,i,o,Object(n.createVNode)(C,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(V)]),highlight:Object(n.withCtx)(()=>[r]),_:1}),s,v,Object(n.createVNode)(C,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(g)]),highlight:Object(n.withCtx)(()=>[u]),default:Object(n.withCtx)(()=>[h]),_:1}),m,b,Object(n.createVNode)(C,null,{source:Object(n.withCtx)(()=>[Object(n.createVNode)(y)]),highlight:Object(n.withCtx)(()=>[p]),_:1}),j])}};t.default=N}}]);