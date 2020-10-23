(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{509:function(e,t,o){"use strict";o.r(t);var l=o(0);const a={class:"content element-doc"},n=Object(l.createVNode)("h2",{id:"dialog"},[Object(l.createVNode)("a",{class:"header-anchor",href:"#dialog"},"¶"),Object(l.createTextVNode)(" Dialog")],-1),d=Object(l.createVNode)("p",null,"Informs users while preserving the current page state.",-1),i=Object(l.createVNode)("h3",{id:"basic-usage"},[Object(l.createVNode)("a",{class:"header-anchor",href:"#basic-usage"},"¶"),Object(l.createTextVNode)(" Basic usage")],-1),r=Object(l.createVNode)("p",null,"Dialog pops up a dialog box, and it's quite customizable.",-1),c=Object(l.createVNode)("div",null,[Object(l.createVNode)("p",null,[Object(l.createTextVNode)("Set the "),Object(l.createVNode)("code",null,"visible"),Object(l.createTextVNode)(" attribute with a "),Object(l.createVNode)("code",null,"Boolean"),Object(l.createTextVNode)(", and Dialog shows when it is "),Object(l.createVNode)("code",null,"true"),Object(l.createTextVNode)(". The Dialog has two parts: "),Object(l.createVNode)("code",null,"body"),Object(l.createTextVNode)(" and "),Object(l.createVNode)("code",null,"footer"),Object(l.createTextVNode)(", and the latter requires a "),Object(l.createVNode)("code",null,"slot"),Object(l.createTextVNode)(" named "),Object(l.createVNode)("code",null,"footer"),Object(l.createTextVNode)(". The optional "),Object(l.createVNode)("code",null,"title"),Object(l.createTextVNode)(" attribute (empty by default) is for defining a title. Finally, this example demonstrates how "),Object(l.createVNode)("code",null,"before-close"),Object(l.createTextVNode)(" is used.")])],-1),s=Object(l.createVNode)("pre",null,[Object(l.createVNode)("code",{class:"html"},'<el-button type="text" @click="dialogVisible = true">click to open the Dialog</el-button>\n\n<el-dialog\n  title="Tips"\n  v-model="dialogVisible"\n  width="30%"\n  :before-close="handleClose">\n  <span>This is a message</span>\n  <template #footer>\n  <span class="dialog-footer">\n    <el-button @click="dialogVisible = false">Cancel</el-button>\n    <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>\n  </span>\n  </template>\n</el-dialog>\n\n<script>\n  export default {\n    data() {\n      return {\n        dialogVisible: false\n      };\n    },\n    methods: {\n      handleClose(done) {\n        this.$confirm(\'Are you sure to close this dialog?\')\n          .then(_ => {\n            done();\n            this.dialogVisible = false\n          })\n          .catch(_ => {});\n      }\n    }\n  };\n<\/script>\n')],-1),b=Object(l.createVNode)("div",{class:"tip"},[Object(l.createVNode)("p",null,[Object(l.createVNode)("code",null,"before-close"),Object(l.createTextVNode)(" only works when user clicks the close icon or the backdrop. If you have buttons that close the Dialog in the "),Object(l.createVNode)("code",null,"footer"),Object(l.createTextVNode)(" named slot, you can add what you would do with "),Object(l.createVNode)("code",null,"before-close"),Object(l.createTextVNode)(" in the buttons' click event handler.")])],-1),u=Object(l.createVNode)("h3",{id:"customizations"},[Object(l.createVNode)("a",{class:"header-anchor",href:"#customizations"},"¶"),Object(l.createTextVNode)(" Customizations")],-1),h=Object(l.createVNode)("p",null,"The content of Dialog can be anything, even a table or a form. This example shows how to use Element Plus Table and Form with Dialog。",-1),m=Object(l.createVNode)("pre",null,[Object(l.createVNode)("code",{class:"html"},'\x3c!-- Table --\x3e\n<el-button type="text" @click="dialogTableVisible = true">open a Table nested Dialog</el-button>\n\n<el-dialog title="Shipping address" v-model="dialogTableVisible">\n  <el-table :data="gridData">\n    <el-table-column property="date" label="Date" width="150"></el-table-column>\n    <el-table-column property="name" label="Name" width="200"></el-table-column>\n    <el-table-column property="address" label="Address"></el-table-column>\n  </el-table>\n</el-dialog>\n\n\x3c!-- Form --\x3e\n<el-button type="text" @click="dialogFormVisible = true">open a Form nested Dialog</el-button>\n\n<el-dialog title="Shipping address" v-model="dialogFormVisible">\n  <el-form :model="form">\n    <el-form-item label="Promotion name" :label-width="formLabelWidth">\n      <el-input v-model="form.name" autocomplete="off"></el-input>\n    </el-form-item>\n    <el-form-item label="Zones" :label-width="formLabelWidth">\n      <el-select v-model="form.region" placeholder="Please select a zone">\n        <el-option label="Zone No.1" value="shanghai"></el-option>\n        <el-option label="Zone No.2" value="beijing"></el-option>\n      </el-select>\n    </el-form-item>\n  </el-form>\n  <span slot="footer" class="dialog-footer">\n    <el-button @click="dialogFormVisible = false">Cancel</el-button>\n    <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>\n  </span>\n</el-dialog>\n\n<script>\n  export default {\n    data() {\n      return {\n        gridData: [{\n          date: \'2016-05-02\',\n          name: \'John Smith\',\n          address: \'No.1518,  Jinshajiang Road, Putuo District\'\n        }, {\n          date: \'2016-05-04\',\n          name: \'John Smith\',\n          address: \'No.1518,  Jinshajiang Road, Putuo District\'\n        }, {\n          date: \'2016-05-01\',\n          name: \'John Smith\',\n          address: \'No.1518,  Jinshajiang Road, Putuo District\'\n        }, {\n          date: \'2016-05-03\',\n          name: \'John Smith\',\n          address: \'No.1518,  Jinshajiang Road, Putuo District\'\n        }],\n        dialogTableVisible: false,\n        dialogFormVisible: false,\n        form: {\n          name: \'\',\n          region: \'\',\n          date1: \'\',\n          date2: \'\',\n          delivery: false,\n          type: [],\n          resource: \'\',\n          desc: \'\'\n        },\n        formLabelWidth: \'120px\'\n      };\n    }\n  };\n<\/script>\n')],-1),p=Object(l.createVNode)("h3",{id:"nested-dialog"},[Object(l.createVNode)("a",{class:"header-anchor",href:"#nested-dialog"},"¶"),Object(l.createTextVNode)(" Nested Dialog")],-1),g=Object(l.createVNode)("p",null,[Object(l.createTextVNode)("If a Dialog is nested in another Dialog, "),Object(l.createVNode)("code",null,"append-to-body"),Object(l.createTextVNode)(" is required.")],-1),f=Object(l.createVNode)("div",null,[Object(l.createVNode)("p",null,[Object(l.createTextVNode)("Normally we do not recommend using nested Dialog. If you need multiple Dialogs rendered on the page, you can simply flat them so that they're siblings to each other. If you must nest a Dialog inside another Dialog, set "),Object(l.createVNode)("code",null,"append-to-body"),Object(l.createTextVNode)(" of the nested Dialog to true, and it will append to body instead of its parent node, so both Dialogs can be correctly rendered.")])],-1),V=Object(l.createVNode)("pre",null,[Object(l.createVNode)("code",{class:"html"},'<template>\n  <el-button type="text" @click="outerVisible = true">open the outer Dialog</el-button>\n\n  <el-dialog title="Outer Dialog" v-model="outerVisible">\n    <template #default>\n      <el-dialog\n          width="30%"\n          title="Inner Dialog"\n          v-model="innerVisible"\n          append-to-body>\n      </el-dialog>\n    </template>\n    <template #footer>\n    <div class="dialog-footer">\n      <el-button @click="outerVisible = false">Cancel</el-button>\n      <el-button type="primary" @click="innerVisible = true">open the inner Dialog</el-button>\n    </div>\n    </template>\n  </el-dialog>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        outerVisible: false,\n        innerVisible: false\n      };\n    }\n  }\n<\/script>\n')],-1),j=Object(l.createVNode)("h3",{id:"centered-content"},[Object(l.createVNode)("a",{class:"header-anchor",href:"#centered-content"},"¶"),Object(l.createTextVNode)(" Centered content")],-1),N=Object(l.createVNode)("p",null,"Dialog's content can be centered.",-1),O=Object(l.createVNode)("div",null,[Object(l.createVNode)("p",null,[Object(l.createTextVNode)("Setting "),Object(l.createVNode)("code",null,"center"),Object(l.createTextVNode)(" to "),Object(l.createVNode)("code",null,"true"),Object(l.createTextVNode)(" will center dialog's header and footer horizontally. "),Object(l.createVNode)("code",null,"center"),Object(l.createTextVNode)(" only affects Dialog's header and footer. The body of Dialog can be anything, so sometimes it may not look good when centered. You need to write some CSS if you wish to center the body as well.")])],-1),y=Object(l.createVNode)("pre",null,[Object(l.createVNode)("code",{class:"html"},'<template>\n  <el-button type="text" @click="centerDialogVisible = true">Click to open the Dialog</el-button>\n\n  <el-dialog\n    title="Warning"\n    v-model="centerDialogVisible"\n    width="30%"\n    center>\n    <span>It should be noted that the content will not be aligned in center by default</span>\n    <template #footer>\n      <span class="dialog-footer">\n        <el-button @click="centerDialogVisible = false">Cancel</el-button>\n        <el-button type="primary" @click="centerDialogVisible = false">Confirm</el-button>\n      </span>\n    </template>\n  </el-dialog>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        centerDialogVisible: false\n      };\n    }\n  };\n<\/script>\n')],-1),D=Object(l.createStaticVNode)('<div class="tip"><p>The content of Dialog is lazily rendered, which means the default slot is not rendered onto the DOM until it is firstly opened. Therefore, if you need to perform a DOM manipulation or access a component using <code>ref</code>, do it in the <code>open</code> event callback.</p></div><div class="tip"><p>If the variable bound to <code>visible</code> is managed in Vuex store, the <code>.sync</code> can not work properly. In this case, please remove the <code>.sync</code> modifier, listen to <code>open</code> and <code>close</code> events of Dialog, and commit Vuex mutations to update the value of that variable in the event handlers.</p></div><h3 id="attributes"><a class="header-anchor" href="#attributes">¶</a> Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>visible</td><td>visibility of Dialog, supports the .sync modifier</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>title</td><td>title of Dialog. Can also be passed with a named slot (see the following table)</td><td>string</td><td>—</td><td>—</td></tr><tr><td>width</td><td>width of Dialog</td><td>string</td><td>—</td><td>50%</td></tr><tr><td>fullscreen</td><td>whether the Dialog takes up full screen</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>top</td><td>value for <code>margin-top</code> of Dialog CSS</td><td>string</td><td>—</td><td>15vh</td></tr><tr><td>modal</td><td>whether a mask is displayed</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>modal-append-to-body</td><td>whether to append modal to body element. If false, the modal will be appended to Dialog&#39;s parent element</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>append-to-body</td><td>whether to append Dialog itself to body. A nested Dialog should have this attribute set to <code>true</code></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lock-scroll</td><td>whether scroll of body is disabled while Dialog is displayed</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>custom-class</td><td>custom class names for Dialog</td><td>string</td><td>—</td><td>—</td></tr><tr><td>close-on-click-modal</td><td>whether the Dialog can be closed by clicking the mask</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>close-on-press-escape</td><td>whether the Dialog can be closed by pressing ESC</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>show-close</td><td>whether to show a close button</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>before-close</td><td>callback before Dialog closes, and it will prevent Dialog from closing</td><td>function(done)，done is used to close the Dialog</td><td>—</td><td>—</td></tr><tr><td>center</td><td>whether to align the header and footer in center</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>destroy-on-close</td><td>Destroy elements in Dialog when closed</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id="slot"><a class="header-anchor" href="#slot">¶</a> Slot</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>content of Dialog</td></tr><tr><td>title</td><td>content of the Dialog title</td></tr><tr><td>footer</td><td>content of the Dialog footer</td></tr></tbody></table><h3 id="events"><a class="header-anchor" href="#events">¶</a> Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>open</td><td>triggers when the Dialog opens</td><td>—</td></tr><tr><td>opened</td><td>triggers when the Dialog opening animation ends</td><td>—</td></tr><tr><td>close</td><td>triggers when the Dialog closes</td><td>—</td></tr><tr><td>closed</td><td>triggers when the Dialog closing animation ends</td><td>—</td></tr></tbody></table>',8);var w={name:"component-doc",components:{"element-demo0":function(){const{createTextVNode:e,resolveComponent:t,withCtx:o,createVNode:a,openBlock:n,createBlock:d}=l,i=e("click to open the Dialog"),r=a("span",null,"This is a message",-1),c={class:"dialog-footer"},s=e("Cancel"),b=e("Confirm");const u={data:()=>({dialogVisible:!1}),methods:{handleClose(e){this.$confirm("Are you sure to close this dialog?").then(t=>{e(),this.dialogVisible=!1}).catch(e=>{})}}};return Object.assign({render:function(e,l){const u=t("el-button"),h=t("el-dialog");return n(),d("div",null,[a(u,{type:"text",onClick:l[1]||(l[1]=t=>e.dialogVisible=!0)},{default:o(()=>[i]),_:1}),a(h,{title:"Tips",modelValue:e.dialogVisible,"onUpdate:modelValue":l[4]||(l[4]=t=>e.dialogVisible=t),width:"30%","before-close":e.handleClose},{footer:o(()=>[a("span",c,[a(u,{onClick:l[2]||(l[2]=t=>e.dialogVisible=!1)},{default:o(()=>[s]),_:1}),a(u,{type:"primary",onClick:l[3]||(l[3]=t=>e.dialogVisible=!1)},{default:o(()=>[b]),_:1})])]),default:o(()=>[r]),_:1},8,["modelValue","before-close"])])}},u)}(),"element-demo1":function(){const{createTextVNode:e,resolveComponent:t,withCtx:o,createVNode:a,openBlock:n,createBlock:d}=l,i=e("open a Table nested Dialog"),r=e("open a Form nested Dialog"),c={slot:"footer",class:"dialog-footer"},s=e("Cancel"),b=e("Confirm");const u={data:()=>({gridData:[{date:"2016-05-02",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-04",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-01",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-03",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"}],dialogTableVisible:!1,dialogFormVisible:!1,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},formLabelWidth:"120px"})};return Object.assign({render:function(e,l){const u=t("el-button"),h=t("el-table-column"),m=t("el-table"),p=t("el-dialog"),g=t("el-input"),f=t("el-form-item"),V=t("el-option"),j=t("el-select"),N=t("el-form");return n(),d("div",null,[a(u,{type:"text",onClick:l[1]||(l[1]=t=>e.dialogTableVisible=!0)},{default:o(()=>[i]),_:1}),a(p,{title:"Shipping address",modelValue:e.dialogTableVisible,"onUpdate:modelValue":l[2]||(l[2]=t=>e.dialogTableVisible=t)},{default:o(()=>[a(m,{data:e.gridData},{default:o(()=>[a(h,{property:"date",label:"Date",width:"150"}),a(h,{property:"name",label:"Name",width:"200"}),a(h,{property:"address",label:"Address"})]),_:1},8,["data"])]),_:1},8,["modelValue"]),a(u,{type:"text",onClick:l[3]||(l[3]=t=>e.dialogFormVisible=!0)},{default:o(()=>[r]),_:1}),a(p,{title:"Shipping address",modelValue:e.dialogFormVisible,"onUpdate:modelValue":l[8]||(l[8]=t=>e.dialogFormVisible=t)},{default:o(()=>[a(N,{model:e.form},{default:o(()=>[a(f,{label:"Promotion name","label-width":e.formLabelWidth},{default:o(()=>[a(g,{modelValue:e.form.name,"onUpdate:modelValue":l[4]||(l[4]=t=>e.form.name=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),a(f,{label:"Zones","label-width":e.formLabelWidth},{default:o(()=>[a(j,{modelValue:e.form.region,"onUpdate:modelValue":l[5]||(l[5]=t=>e.form.region=t),placeholder:"Please select a zone"},{default:o(()=>[a(V,{label:"Zone No.1",value:"shanghai"}),a(V,{label:"Zone No.2",value:"beijing"})]),_:1},8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"]),a("span",c,[a(u,{onClick:l[6]||(l[6]=t=>e.dialogFormVisible=!1)},{default:o(()=>[s]),_:1}),a(u,{type:"primary",onClick:l[7]||(l[7]=t=>e.dialogFormVisible=!1)},{default:o(()=>[b]),_:1})])]),_:1},8,["modelValue"])])}},u)}(),"element-demo2":function(){const{createTextVNode:e,resolveComponent:t,withCtx:o,createVNode:a,openBlock:n,createBlock:d}=l,i=e("open the outer Dialog"),r={class:"dialog-footer"},c=e("Cancel"),s=e("open the inner Dialog");const b={data:()=>({outerVisible:!1,innerVisible:!1})};return Object.assign({render:function(e,l){const b=t("el-button"),u=t("el-dialog");return n(),d("div",null,[a(b,{type:"text",onClick:l[1]||(l[1]=t=>e.outerVisible=!0)},{default:o(()=>[i]),_:1}),a(u,{title:"Outer Dialog",modelValue:e.outerVisible,"onUpdate:modelValue":l[5]||(l[5]=t=>e.outerVisible=t)},{default:o(()=>[a(u,{width:"30%",title:"Inner Dialog",modelValue:e.innerVisible,"onUpdate:modelValue":l[2]||(l[2]=t=>e.innerVisible=t),"append-to-body":""},null,8,["modelValue"])]),footer:o(()=>[a("div",r,[a(b,{onClick:l[3]||(l[3]=t=>e.outerVisible=!1)},{default:o(()=>[c]),_:1}),a(b,{type:"primary",onClick:l[4]||(l[4]=t=>e.innerVisible=!0)},{default:o(()=>[s]),_:1})])]),_:1},8,["modelValue"])])}},b)}(),"element-demo3":function(){const{createTextVNode:e,resolveComponent:t,withCtx:o,createVNode:a,openBlock:n,createBlock:d}=l,i=e("Click to open the Dialog"),r=a("span",null,"It should be noted that the content will not be aligned in center by default",-1),c={class:"dialog-footer"},s=e("Cancel"),b=e("Confirm");const u={data:()=>({centerDialogVisible:!1})};return Object.assign({render:function(e,l){const u=t("el-button"),h=t("el-dialog");return n(),d("div",null,[a(u,{type:"text",onClick:l[1]||(l[1]=t=>e.centerDialogVisible=!0)},{default:o(()=>[i]),_:1}),a(h,{title:"Warning",modelValue:e.centerDialogVisible,"onUpdate:modelValue":l[4]||(l[4]=t=>e.centerDialogVisible=t),width:"30%",center:""},{footer:o(()=>[a("span",c,[a(u,{onClick:l[2]||(l[2]=t=>e.centerDialogVisible=!1)},{default:o(()=>[s]),_:1}),a(u,{type:"primary",onClick:l[3]||(l[3]=t=>e.centerDialogVisible=!1)},{default:o(()=>[b]),_:1})])]),default:o(()=>[r]),_:1},8,["modelValue"])])}},u)}()},render:function(e,t,o,w,x,v){const C=Object(l.resolveComponent)("element-demo0"),k=Object(l.resolveComponent)("demo-block"),T=Object(l.resolveComponent)("element-demo1"),_=Object(l.resolveComponent)("element-demo2"),S=Object(l.resolveComponent)("element-demo3");return Object(l.openBlock)(),Object(l.createBlock)("section",a,[n,d,i,r,Object(l.createVNode)(k,null,{source:Object(l.withCtx)(()=>[Object(l.createVNode)(C)]),highlight:Object(l.withCtx)(()=>[s]),default:Object(l.withCtx)(()=>[c]),_:1}),b,u,h,Object(l.createVNode)(k,null,{source:Object(l.withCtx)(()=>[Object(l.createVNode)(T)]),highlight:Object(l.withCtx)(()=>[m]),_:1}),p,g,Object(l.createVNode)(k,null,{source:Object(l.withCtx)(()=>[Object(l.createVNode)(_)]),highlight:Object(l.withCtx)(()=>[V]),default:Object(l.withCtx)(()=>[f]),_:1}),j,N,Object(l.createVNode)(k,null,{source:Object(l.withCtx)(()=>[Object(l.createVNode)(S)]),highlight:Object(l.withCtx)(()=>[y]),default:Object(l.withCtx)(()=>[O]),_:1}),D])}};t.default=w}}]);