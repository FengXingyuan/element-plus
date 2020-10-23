(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{522:function(e,t,n){"use strict";n.r(t);var l=n(0);const d={class:"content element-doc"},o=Object(l.createVNode)("h2",{id:"navmenu"},[Object(l.createVNode)("a",{class:"header-anchor",href:"#navmenu"},"¶"),Object(l.createTextVNode)(" NavMenu")],-1),a=Object(l.createVNode)("p",null,"Menu that provides navigation for your website.",-1),i=Object(l.createVNode)("h3",{id:"top-bar"},[Object(l.createVNode)("a",{class:"header-anchor",href:"#top-bar"},"¶"),Object(l.createTextVNode)(" Top bar")],-1),u=Object(l.createVNode)("p",null,"Top bar NavMenu can be used in a variety of scenarios.",-1),r=Object(l.createVNode)("div",null,[Object(l.createVNode)("p",null,[Object(l.createTextVNode)("By default Menu is vertical, but you can change it to horizontal by setting the mode prop to 'horizontal'. In addition, you can use the submenu component to create a second level menu. Menu provides "),Object(l.createVNode)("code",null,"background-color"),Object(l.createTextVNode)(", "),Object(l.createVNode)("code",null,"text-color"),Object(l.createTextVNode)(" and "),Object(l.createVNode)("code",null,"active-text-color"),Object(l.createTextVNode)(" to customize the colors.")])],-1),m=Object(l.createVNode)("pre",null,[Object(l.createVNode)("code",{class:"html"},'<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">\n  <el-menu-item index="1">Processing Center</el-menu-item>\n  <el-submenu index="2">\n    <template slot="title">Workspace</template>\n    <el-menu-item index="2-1">item one</el-menu-item>\n    <el-menu-item index="2-2">item two</el-menu-item>\n    <el-menu-item index="2-3">item three</el-menu-item>\n    <el-submenu index="2-4">\n      <template slot="title">item four</template>\n      <el-menu-item index="2-4-1">item one</el-menu-item>\n      <el-menu-item index="2-4-2">item two</el-menu-item>\n      <el-menu-item index="2-4-3">item three</el-menu-item>\n    </el-submenu>\n  </el-submenu>\n  <el-menu-item index="3" disabled>Info</el-menu-item>\n  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>\n</el-menu>\n<div class="line"></div>\n<el-menu\n  :default-active="activeIndex2"\n  class="el-menu-demo"\n  mode="horizontal"\n  @select="handleSelect"\n  background-color="#545c64"\n  text-color="#fff"\n  active-text-color="#ffd04b">\n  <el-menu-item index="1">Processing Center</el-menu-item>\n  <el-submenu index="2">\n    <template slot="title">Workspace</template>\n    <el-menu-item index="2-1">item one</el-menu-item>\n    <el-menu-item index="2-2">item two</el-menu-item>\n    <el-menu-item index="2-3">item three</el-menu-item>\n    <el-submenu index="2-4">\n      <template slot="title">item four</template>\n      <el-menu-item index="2-4-1">item one</el-menu-item>\n      <el-menu-item index="2-4-2">item two</el-menu-item>\n      <el-menu-item index="2-4-3">item three</el-menu-item>\n    </el-submenu>\n  </el-submenu>\n  <el-menu-item index="3" disabled>Info</el-menu-item>\n  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>\n</el-menu>\n\n<script>\n  export default {\n    data() {\n      return {\n        activeIndex: \'1\',\n        activeIndex2: \'1\'\n      };\n    },\n    methods: {\n      handleSelect(key, keyPath) {\n        console.log(key, keyPath);\n      }\n    }\n  }\n<\/script>\n')],-1),s=Object(l.createVNode)("h3",{id:"side-bar"},[Object(l.createVNode)("a",{class:"header-anchor",href:"#side-bar"},"¶"),Object(l.createTextVNode)(" Side bar")],-1),c=Object(l.createVNode)("p",null,"Vertical NavMenu with sub-menus.",-1),h=Object(l.createVNode)("div",null,[Object(l.createVNode)("p",null,"You can use the el-menu-item-group component to create a menu group, and the name of the group is determined by the title prop or a named slot.")],-1),p=Object(l.createVNode)("pre",null,[Object(l.createVNode)("code",{class:"html"},'<el-row class="tac">\n  <el-col :span="12">\n    <h5>Default colors</h5>\n    <el-menu\n      default-active="2"\n      class="el-menu-vertical-demo"\n      @open="handleOpen"\n      @close="handleClose">\n      <el-submenu index="1">\n        <template slot="title">\n          <i class="el-icon-location"></i>\n          <span>Navigator One</span>\n        </template>\n        <el-menu-item-group title="Group One">\n          <el-menu-item index="1-1">item one</el-menu-item>\n          <el-menu-item index="1-2">item one</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title="Group Two">\n          <el-menu-item index="1-3">item three</el-menu-item>\n        </el-menu-item-group>\n        <el-submenu index="1-4">\n          <template slot="title">item four</template>\n          <el-menu-item index="1-4-1">item one</el-menu-item>\n        </el-submenu>\n      </el-submenu>\n      <el-menu-item index="2">\n        <i class="el-icon-menu"></i>\n        <span>Navigator Two</span>\n      </el-menu-item>\n      <el-menu-item index="3" disabled>\n        <i class="el-icon-document"></i>\n        <span>Navigator Three</span>\n      </el-menu-item>\n      <el-menu-item index="4">\n        <i class="el-icon-setting"></i>\n        <span>Navigator Four</span>\n      </el-menu-item>\n    </el-menu>\n  </el-col>\n  <el-col :span="12">\n    <h5>Custom colors</h5>\n    <el-menu\n      default-active="2"\n      class="el-menu-vertical-demo"\n      @open="handleOpen"\n      @close="handleClose"\n      background-color="#545c64"\n      text-color="#fff"\n      active-text-color="#ffd04b">\n      <el-submenu index="1">\n        <template slot="title">\n          <i class="el-icon-location"></i>\n          <span>Navigator One</span>\n        </template>\n        <el-menu-item-group title="Group One">\n          <el-menu-item index="1-1">item one</el-menu-item>\n          <el-menu-item index="1-2">item one</el-menu-item>\n        </el-menu-item-group>\n        <el-menu-item-group title="Group Two">\n          <el-menu-item index="1-3">item three</el-menu-item>\n        </el-menu-item-group>\n        <el-submenu index="1-4">\n          <template slot="title">item four</template>\n          <el-menu-item index="1-4-1">item one</el-menu-item>\n        </el-submenu>\n      </el-submenu>\n      <el-menu-item index="2">\n        <i class="el-icon-menu"></i>\n        <span>Navigator Two</span>\n      </el-menu-item>\n      <el-menu-item index="3" disabled>\n        <i class="el-icon-document"></i>\n        <span>Navigator Three</span>\n      </el-menu-item>\n      <el-menu-item index="4">\n        <i class="el-icon-setting"></i>\n        <span>Navigator Four</span>\n      </el-menu-item>\n    </el-menu>\n  </el-col>\n</el-row>\n\n<script>\n  export default {\n    methods: {\n      handleOpen(key, keyPath) {\n        console.log(key, keyPath);\n      },\n      handleClose(key, keyPath) {\n        console.log(key, keyPath);\n      }\n    }\n  }\n<\/script>\n')],-1),b=Object(l.createVNode)("h3",{id:"collapse"},[Object(l.createVNode)("a",{class:"header-anchor",href:"#collapse"},"¶"),Object(l.createTextVNode)(" Collapse")],-1),f=Object(l.createVNode)("p",null,"Vertical NavMenu could be collapsed.",-1),x=Object(l.createVNode)("pre",null,[Object(l.createVNode)("code",{class:"html"},'<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">\n  <el-radio-button :label="false">expand</el-radio-button>\n  <el-radio-button :label="true">collapse</el-radio-button>\n</el-radio-group>\n<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">\n  <el-submenu index="1">\n    <template slot="title">\n      <i class="el-icon-location"></i>\n      <span slot="title">Navigator One</span>\n    </template>\n    <el-menu-item-group>\n      <span slot="title">Group One</span>\n      <el-menu-item index="1-1">item one</el-menu-item>\n      <el-menu-item index="1-2">item two</el-menu-item>\n    </el-menu-item-group>\n    <el-menu-item-group title="Group Two">\n      <el-menu-item index="1-3">item three</el-menu-item>\n    </el-menu-item-group>\n    <el-submenu index="1-4">\n      <span slot="title">item four</span>\n      <el-menu-item index="1-4-1">item one</el-menu-item>\n    </el-submenu>\n  </el-submenu>\n  <el-menu-item index="2">\n    <i class="el-icon-menu"></i>\n    <span slot="title">Navigator Two</span>\n  </el-menu-item>\n  <el-menu-item index="3" disabled>\n    <i class="el-icon-document"></i>\n    <span slot="title">Navigator Three</span>\n  </el-menu-item>\n  <el-menu-item index="4">\n    <i class="el-icon-setting"></i>\n    <span slot="title">Navigator Four</span>\n  </el-menu-item>\n</el-menu>\n\n<style>\n  .el-menu-vertical-demo:not(.el-menu--collapse) {\n    width: 200px;\n    min-height: 400px;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        isCollapse: true\n      };\n    },\n    methods: {\n      handleOpen(key, keyPath) {\n        console.log(key, keyPath);\n      },\n      handleClose(key, keyPath) {\n        console.log(key, keyPath);\n      }\n    }\n  }\n<\/script>\n')],-1),v=Object(l.createStaticVNode)('<h3 id="menu-attribute"><a class="header-anchor" href="#menu-attribute">¶</a> Menu Attribute</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>mode</td><td>menu display mode</td><td>string</td><td>horizontal / vertical</td><td>vertical</td></tr><tr><td>collapse</td><td>whether the menu is collapsed (available only in vertical mode)</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>background-color</td><td>background color of Menu (hex format)</td><td>string</td><td>—</td><td>#ffffff</td></tr><tr><td>text-color</td><td>text color of Menu (hex format)</td><td>string</td><td>—</td><td>#303133</td></tr><tr><td>active-text-color</td><td>text color of currently active menu item (hex format)</td><td>string</td><td>—</td><td>#409EFF</td></tr><tr><td>default-active</td><td>index of currently active menu</td><td>string</td><td>—</td><td>—</td></tr><tr><td>default-openeds</td><td>array that contains indexes of currently active sub-menus</td><td>Array</td><td>—</td><td>—</td></tr><tr><td>unique-opened</td><td>whether only one sub-menu can be active</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>menu-trigger</td><td>how sub-menus are triggered, only works when <code>mode</code> is &#39;horizontal&#39;</td><td>string</td><td>hover / click</td><td>hover</td></tr><tr><td>router</td><td>whether <code>vue-router</code> mode is activated. If true, index will be used as &#39;path&#39; to activate the route action</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>collapse-transition</td><td>whether to enable the collapse transition</td><td>boolean</td><td>—</td><td>true</td></tr></tbody></table><h3 id="menu-methods"><a class="header-anchor" href="#menu-methods">¶</a> Menu Methods</h3><table><thead><tr><th>Methods Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>open</td><td>open a specific sub-menu</td><td>index: index of the sub-menu to open</td></tr><tr><td>close</td><td>close a specific sub-menu</td><td>index: index of the sub-menu to close</td></tr></tbody></table><h3 id="menu-events"><a class="header-anchor" href="#menu-events">¶</a> Menu Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>select</td><td>callback function when menu is activated</td><td>index: index of activated menu, indexPath: index path of activated menu</td></tr><tr><td>open</td><td>callback function when sub-menu expands</td><td>index: index of expanded sub-menu, indexPath: index path of expanded sub-menu</td></tr><tr><td>close</td><td>callback function when sub-menu collapses</td><td>index: index of collapsed sub-menu, indexPath: index path of collapsed sub-menu</td></tr></tbody></table><h3 id="menu-item-events"><a class="header-anchor" href="#menu-item-events">¶</a> Menu-Item Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>click</td><td>callback function when menu-item is clicked</td><td>el: menu-item instance</td></tr></tbody></table><h3 id="submenu-attribute"><a class="header-anchor" href="#submenu-attribute">¶</a> SubMenu Attribute</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>index</td><td>unique identification</td><td>string</td><td>—</td><td>—</td></tr><tr><td>popper-class</td><td>custom class name for the popup menu</td><td>string</td><td>—</td><td>—</td></tr><tr><td>show-timeout</td><td>timeout before showing a sub-menu</td><td>number</td><td>—</td><td>300</td></tr><tr><td>hide-timeout</td><td>timeout before hiding a sub-menu</td><td>number</td><td>—</td><td>300</td></tr><tr><td>disabled</td><td>whether the sub-menu is disabled</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>popper-append-to-body</td><td>whether to append the popup menu to body. If the positioning of the menu is wrong, you can try setting this prop</td><td>boolean</td><td>-</td><td>level one Submenu: true / other Submenus: false</td></tr></tbody></table><h3 id="menu-item-attribute"><a class="header-anchor" href="#menu-item-attribute">¶</a> Menu-Item Attribute</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>index</td><td>unique identification</td><td>string/null</td><td>—</td><td>null</td></tr><tr><td>route</td><td>Vue Router object</td><td>object</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>whether disabled</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id="menu-group-attribute"><a class="header-anchor" href="#menu-group-attribute">¶</a> Menu-Group Attribute</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>group title</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>',14);var g={name:"component-doc",components:{"element-demo0":function(){const{createTextVNode:e,resolveComponent:t,withCtx:n,createVNode:d,openBlock:o,createBlock:a}=l,i=e("Processing Center"),u=d("template",{slot:"title"},"Workspace",-1),r=e("item one"),m=e("item two"),s=e("item three"),c=d("template",{slot:"title"},"item four",-1),h=e("item one"),p=e("item two"),b=e("item three"),f=e("Info"),x=d("a",{href:"https://www.ele.me",target:"_blank"},"Orders",-1),v=d("div",{class:"line"},null,-1),g=e("Processing Center"),O=d("template",{slot:"title"},"Workspace",-1),N=e("item one"),w=e("item two"),_=e("item three"),y=d("template",{slot:"title"},"item four",-1),j=e("item one"),V=e("item two"),k=e("item three"),C=e("Info"),T=d("a",{href:"https://www.ele.me",target:"_blank"},"Orders",-1);const P={data:()=>({activeIndex:"1",activeIndex2:"1"}),methods:{handleSelect(e,t){console.log(e,t)}}};return Object.assign({render:function(e,l){const P=t("el-menu-item"),M=t("el-submenu"),I=t("el-menu");return o(),a("div",null,[d(I,{"default-active":e.activeIndex,class:"el-menu-demo",mode:"horizontal",onSelect:e.handleSelect},{default:n(()=>[d(P,{index:"1"},{default:n(()=>[i]),_:1}),d(M,{index:"2"},{default:n(()=>[u,d(P,{index:"2-1"},{default:n(()=>[r]),_:1}),d(P,{index:"2-2"},{default:n(()=>[m]),_:1}),d(P,{index:"2-3"},{default:n(()=>[s]),_:1}),d(M,{index:"2-4"},{default:n(()=>[c,d(P,{index:"2-4-1"},{default:n(()=>[h]),_:1}),d(P,{index:"2-4-2"},{default:n(()=>[p]),_:1}),d(P,{index:"2-4-3"},{default:n(()=>[b]),_:1})]),_:1})]),_:1}),d(P,{index:"3",disabled:""},{default:n(()=>[f]),_:1}),d(P,{index:"4"},{default:n(()=>[x]),_:1})]),_:1},8,["default-active","onSelect"]),v,d(I,{"default-active":e.activeIndex2,class:"el-menu-demo",mode:"horizontal",onSelect:e.handleSelect,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},{default:n(()=>[d(P,{index:"1"},{default:n(()=>[g]),_:1}),d(M,{index:"2"},{default:n(()=>[O,d(P,{index:"2-1"},{default:n(()=>[N]),_:1}),d(P,{index:"2-2"},{default:n(()=>[w]),_:1}),d(P,{index:"2-3"},{default:n(()=>[_]),_:1}),d(M,{index:"2-4"},{default:n(()=>[y,d(P,{index:"2-4-1"},{default:n(()=>[j]),_:1}),d(P,{index:"2-4-2"},{default:n(()=>[V]),_:1}),d(P,{index:"2-4-3"},{default:n(()=>[k]),_:1})]),_:1})]),_:1}),d(P,{index:"3",disabled:""},{default:n(()=>[C]),_:1}),d(P,{index:"4"},{default:n(()=>[T]),_:1})]),_:1},8,["default-active","onSelect"])])}},P)}(),"element-demo1":function(){const{createVNode:e,createTextVNode:t,resolveComponent:n,withCtx:d,openBlock:o,createBlock:a}=l,i=e("h5",null,"Default colors",-1),u=e("template",{slot:"title"},[e("i",{class:"el-icon-location"}),e("span",null,"Navigator One")],-1),r=t("item one"),m=t("item one"),s=t("item three"),c=e("template",{slot:"title"},"item four",-1),h=t("item one"),p=e("i",{class:"el-icon-menu"},null,-1),b=e("span",null,"Navigator Two",-1),f=e("i",{class:"el-icon-document"},null,-1),x=e("span",null,"Navigator Three",-1),v=e("i",{class:"el-icon-setting"},null,-1),g=e("span",null,"Navigator Four",-1),O=e("h5",null,"Custom colors",-1),N=e("template",{slot:"title"},[e("i",{class:"el-icon-location"}),e("span",null,"Navigator One")],-1),w=t("item one"),_=t("item one"),y=t("item three"),j=e("template",{slot:"title"},"item four",-1),V=t("item one"),k=e("i",{class:"el-icon-menu"},null,-1),C=e("span",null,"Navigator Two",-1),T=e("i",{class:"el-icon-document"},null,-1),P=e("span",null,"Navigator Three",-1),M=e("i",{class:"el-icon-setting"},null,-1),I=e("span",null,"Navigator Four",-1);const S={methods:{handleOpen(e,t){console.log(e,t)},handleClose(e,t){console.log(e,t)}}};return Object.assign({render:function(t,l){const S=n("el-menu-item"),A=n("el-menu-item-group"),D=n("el-submenu"),G=n("el-menu"),z=n("el-col"),B=n("el-row");return o(),a("div",null,[e(B,{class:"tac"},{default:d(()=>[e(z,{span:12},{default:d(()=>[i,e(G,{"default-active":"2",class:"el-menu-vertical-demo",onOpen:t.handleOpen,onClose:t.handleClose},{default:d(()=>[e(D,{index:"1"},{default:d(()=>[u,e(A,{title:"Group One"},{default:d(()=>[e(S,{index:"1-1"},{default:d(()=>[r]),_:1}),e(S,{index:"1-2"},{default:d(()=>[m]),_:1})]),_:1}),e(A,{title:"Group Two"},{default:d(()=>[e(S,{index:"1-3"},{default:d(()=>[s]),_:1})]),_:1}),e(D,{index:"1-4"},{default:d(()=>[c,e(S,{index:"1-4-1"},{default:d(()=>[h]),_:1})]),_:1})]),_:1}),e(S,{index:"2"},{default:d(()=>[p,b]),_:1}),e(S,{index:"3",disabled:""},{default:d(()=>[f,x]),_:1}),e(S,{index:"4"},{default:d(()=>[v,g]),_:1})]),_:1},8,["onOpen","onClose"])]),_:1}),e(z,{span:12},{default:d(()=>[O,e(G,{"default-active":"2",class:"el-menu-vertical-demo",onOpen:t.handleOpen,onClose:t.handleClose,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},{default:d(()=>[e(D,{index:"1"},{default:d(()=>[N,e(A,{title:"Group One"},{default:d(()=>[e(S,{index:"1-1"},{default:d(()=>[w]),_:1}),e(S,{index:"1-2"},{default:d(()=>[_]),_:1})]),_:1}),e(A,{title:"Group Two"},{default:d(()=>[e(S,{index:"1-3"},{default:d(()=>[y]),_:1})]),_:1}),e(D,{index:"1-4"},{default:d(()=>[j,e(S,{index:"1-4-1"},{default:d(()=>[V]),_:1})]),_:1})]),_:1}),e(S,{index:"2"},{default:d(()=>[k,C]),_:1}),e(S,{index:"3",disabled:""},{default:d(()=>[T,P]),_:1}),e(S,{index:"4"},{default:d(()=>[M,I]),_:1})]),_:1},8,["onOpen","onClose"])]),_:1})]),_:1})])}},S)}(),"element-demo2":function(){const{createTextVNode:e,resolveComponent:t,withCtx:n,createVNode:d,openBlock:o,createBlock:a}=l,i=e("expand"),u=e("collapse"),r=d("template",{slot:"title"},[d("i",{class:"el-icon-location"}),d("span",{slot:"title"},"Navigator One")],-1),m=d("span",{slot:"title"},"Group One",-1),s=e("item one"),c=e("item two"),h=e("item three"),p=d("span",{slot:"title"},"item four",-1),b=e("item one"),f=d("i",{class:"el-icon-menu"},null,-1),x=d("span",{slot:"title"},"Navigator Two",-1),v=d("i",{class:"el-icon-document"},null,-1),g=d("span",{slot:"title"},"Navigator Three",-1),O=d("i",{class:"el-icon-setting"},null,-1),N=d("span",{slot:"title"},"Navigator Four",-1);const w={data:()=>({isCollapse:!0}),methods:{handleOpen(e,t){console.log(e,t)},handleClose(e,t){console.log(e,t)}}};return Object.assign({render:function(e,l){const w=t("el-radio-button"),_=t("el-radio-group"),y=t("el-menu-item"),j=t("el-menu-item-group"),V=t("el-submenu"),k=t("el-menu");return o(),a("div",null,[d(_,{modelValue:e.isCollapse,"onUpdate:modelValue":l[1]||(l[1]=t=>e.isCollapse=t),style:{"margin-bottom":"20px"}},{default:n(()=>[d(w,{label:!1},{default:n(()=>[i]),_:1}),d(w,{label:!0},{default:n(()=>[u]),_:1})]),_:1},8,["modelValue"]),d(k,{"default-active":"2",class:"el-menu-vertical-demo",onOpen:e.handleOpen,onClose:e.handleClose,collapse:e.isCollapse},{default:n(()=>[d(V,{index:"1"},{default:n(()=>[r,d(j,null,{default:n(()=>[m,d(y,{index:"1-1"},{default:n(()=>[s]),_:1}),d(y,{index:"1-2"},{default:n(()=>[c]),_:1})]),_:1}),d(j,{title:"Group Two"},{default:n(()=>[d(y,{index:"1-3"},{default:n(()=>[h]),_:1})]),_:1}),d(V,{index:"1-4"},{default:n(()=>[p,d(y,{index:"1-4-1"},{default:n(()=>[b]),_:1})]),_:1})]),_:1}),d(y,{index:"2"},{default:n(()=>[f,x]),_:1}),d(y,{index:"3",disabled:""},{default:n(()=>[v,g]),_:1}),d(y,{index:"4"},{default:n(()=>[O,N]),_:1})]),_:1},8,["onOpen","onClose","collapse"])])}},w)}()},render:function(e,t,n,g,O,N){const w=Object(l.resolveComponent)("element-demo0"),_=Object(l.resolveComponent)("demo-block"),y=Object(l.resolveComponent)("element-demo1"),j=Object(l.resolveComponent)("element-demo2");return Object(l.openBlock)(),Object(l.createBlock)("section",d,[o,a,i,u,Object(l.createVNode)(_,null,{source:Object(l.withCtx)(()=>[Object(l.createVNode)(w)]),highlight:Object(l.withCtx)(()=>[m]),default:Object(l.withCtx)(()=>[r]),_:1}),s,c,Object(l.createVNode)(_,null,{source:Object(l.withCtx)(()=>[Object(l.createVNode)(y)]),highlight:Object(l.withCtx)(()=>[p]),default:Object(l.withCtx)(()=>[h]),_:1}),b,f,Object(l.createVNode)(_,null,{source:Object(l.withCtx)(()=>[Object(l.createVNode)(j)]),highlight:Object(l.withCtx)(()=>[x]),_:1}),v])}};t.default=g}}]);