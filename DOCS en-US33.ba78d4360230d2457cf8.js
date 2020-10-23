(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{521:function(e,t,n){"use strict";n.r(t);var a=n(0);const o={class:"content element-doc"},d=Object(a.createVNode)("h2",{id:"loading"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#loading"},"¶"),Object(a.createTextVNode)(" Loading")],-1),l=Object(a.createVNode)("p",null,"Show animation while loading data.",-1),c=Object(a.createVNode)("h3",{id:"loading-inside-a-container"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#loading-inside-a-container"},"¶"),Object(a.createTextVNode)(" Loading inside a container")],-1),i=Object(a.createVNode)("p",null,"Displays animation in a container (such as a table) while loading data.",-1),s=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("Element Plus provides two ways to invoke Loading: directive and service. For the custom directive "),Object(a.createVNode)("code",null,"v-loading"),Object(a.createTextVNode)(", you just need to bind a "),Object(a.createVNode)("code",null,"boolean"),Object(a.createTextVNode)(" value to it. By default, the loading mask will append to the element where the directive is used. Adding the "),Object(a.createVNode)("code",null,"body"),Object(a.createTextVNode)(" modifier makes the mask append to the body element.")])],-1),r=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},'<template>\n  <el-table\n    v-loading="loading"\n    :data="tableData"\n    style="width: 100%">\n    <el-table-column\n      prop="date"\n      label="Date"\n      width="180">\n    </el-table-column>\n    <el-table-column\n      prop="name"\n      label="Name"\n      width="180">\n    </el-table-column>\n    <el-table-column\n      prop="address"\n      label="Address">\n    </el-table-column>\n  </el-table>\n</template>\n\n<style>\n  body {\n    margin: 0;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: \'2016-05-02\',\n          name: \'John Smith\',\n          address: \'No.1518,  Jinshajiang Road, Putuo District\'\n        }, {\n          date: \'2016-05-04\',\n          name: \'John Smith\',\n          address: \'No.1518,  Jinshajiang Road, Putuo District\'\n        }, {\n          date: \'2016-05-01\',\n          name: \'John Smith\',\n          address: \'No.1518,  Jinshajiang Road, Putuo District\'\n        }],\n        loading: true\n      };\n    }\n  };\n<\/script>\n')],-1),u=Object(a.createVNode)("h3",{id:"customization"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#customization"},"¶"),Object(a.createTextVNode)(" Customization")],-1),h=Object(a.createVNode)("p",null,"You can customize loading text, loading spinner and background color.",-1),p=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("Add attribute "),Object(a.createVNode)("code",null,"element-loading-text"),Object(a.createTextVNode)(" to the element on which "),Object(a.createVNode)("code",null,"v-loading"),Object(a.createTextVNode)(" is bound, and its value will be displayed under the spinner. Similarly, "),Object(a.createVNode)("code",null,"element-loading-spinner"),Object(a.createTextVNode)(" and "),Object(a.createVNode)("code",null,"element-loading-background"),Object(a.createTextVNode)(" are for customizing loading spinner class name and background color.")])],-1),b=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},'<template>\n  <el-table\n    v-loading="loading"\n    element-loading-text="Loading..."\n    element-loading-spinner="el-icon-loading"\n    element-loading-background="rgba(0, 0, 0, 0.8)"\n    :data="tableData"\n    style="width: 100%">\n    <el-table-column\n      prop="date"\n      label="Date"\n      width="180">\n    </el-table-column>\n    <el-table-column\n      prop="name"\n      label="Name"\n      width="180">\n    </el-table-column>\n    <el-table-column\n      prop="address"\n      label="Address">\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: \'2016-05-02\',\n          name: \'John Smith\',\n          address: \'No.1518,  Jinshajiang Road, Putuo District\'\n        }, {\n          date: \'2016-05-04\',\n          name: \'John Smith\',\n          address: \'No.1518,  Jinshajiang Road, Putuo District\'\n        }, {\n          date: \'2016-05-01\',\n          name: \'John Smith\',\n          address: \'No.1518,  Jinshajiang Road, Putuo District\'\n        }],\n        loading: true\n      };\n    }\n  };\n<\/script>\n')],-1),g=Object(a.createVNode)("h3",{id:"full-screen-loading"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#full-screen-loading"},"¶"),Object(a.createTextVNode)(" Full screen loading")],-1),m=Object(a.createVNode)("p",null,"Show a full screen animation while loading data.",-1),j=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("When used as a directive, a full screen Loading requires the "),Object(a.createVNode)("code",null,"fullscreen"),Object(a.createTextVNode)(" modifier, and it will be appended to body. In this case, if you wish to disable scrolling on body, you can add another modifier "),Object(a.createVNode)("code",null,"lock"),Object(a.createTextVNode)(". When used as a service, Loading will be full screen by default.")])],-1),f=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},'<template>\n  <el-button\n    type="primary"\n    @click="openFullScreen1"\n    v-loading.fullscreen.lock="fullscreenLoading">\n    As a directive\n  </el-button>\n  <el-button\n    type="primary"\n    @click="openFullScreen2">\n    As a service\n  </el-button>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        fullscreenLoading: false\n      }\n    },\n    methods: {\n      openFullScreen1() {\n        this.fullscreenLoading = true;\n        setTimeout(() => {\n          this.fullscreenLoading = false;\n        }, 2000);\n      },\n      openFullScreen2() {\n        const loading = this.$loading({\n          lock: true,\n          text: \'Loading\',\n          spinner: \'el-icon-loading\',\n          background: \'rgba(0, 0, 0, 0.7)\'\n        });\n        setTimeout(() => {\n          loading.close();\n        }, 2000);\n      }\n    }\n  }\n<\/script>\n')],-1),O=Object(a.createStaticVNode)('<h3 id="service"><a class="header-anchor" href="#service">¶</a> Service</h3><p>You can also invoke Loading with a service. Import Loading service:</p><pre><code class="hljs language-javascript"><span class="hljs-keyword">import</span> { Loading } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;element-plus&#39;</span>;\n</code></pre><p>Invoke it:</p><pre><code class="hljs language-javascript">Loading.service(options);\n</code></pre><p>The parameter <code>options</code> is the configuration of Loading, and its details can be found in the following table. <code>LoadingService</code> returns a Loading instance, and you can close it by invoking its <code>close</code> method:</p><pre><code class="hljs language-javascript"><span class="hljs-keyword">let</span> loadingInstance = Loading.service(options);\n<span class="hljs-built_in">this</span>.$nextTick(<span class="hljs-function">() =&gt;</span> { <span class="hljs-comment">// Loading should be closed asynchronously</span>\n  loadingInstance.close();\n});\n</code></pre><p>Note that in this case the full screen Loading is singleton. If a new full screen Loading is invoked before an existing one is closed, the existing full screen Loading instance will be returned instead of actually creating another Loading instance:</p><pre><code class="hljs language-javascript"><span class="hljs-keyword">let</span> loadingInstance1 = Loading.service({ <span class="hljs-attr">fullscreen</span>: <span class="hljs-literal">true</span> });\n<span class="hljs-keyword">let</span> loadingInstance2 = Loading.service({ <span class="hljs-attr">fullscreen</span>: <span class="hljs-literal">true</span> });\n<span class="hljs-built_in">console</span>.log(loadingInstance1 === loadingInstance2); <span class="hljs-comment">// true</span>\n</code></pre><p>Calling the <code>close</code> method on any one of them can close this full screen Loading.</p><p>If Element Plus is imported entirely, a globally method <code>$loading</code> will be registered to Vue.prototype. You can invoke it like this: <code>this.$loading(options)</code>, and it also returns a Loading instance.</p><h3 id="options"><a class="header-anchor" href="#options">¶</a> Options</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>target</td><td>the DOM node Loading needs to cover. Accepts a DOM object or a string. If it&#39;s a string, it will be passed to <code>document.querySelector</code> to get the corresponding DOM node</td><td>object/string</td><td>—</td><td>document.body</td></tr><tr><td>body</td><td>same as the <code>body</code> modifier of <code>v-loading</code></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>fullscreen</td><td>same as the <code>fullscreen</code> modifier of <code>v-loading</code></td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>lock</td><td>same as the <code>lock</code> modifier of <code>v-loading</code></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>text</td><td>loading text that displays under the spinner</td><td>string</td><td>—</td><td>—</td></tr><tr><td>spinner</td><td>class name of the custom spinner</td><td>string</td><td>—</td><td>—</td></tr><tr><td>background</td><td>background color of the mask</td><td>string</td><td>—</td><td>—</td></tr><tr><td>customClass</td><td>custom class name for Loading</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>',13);var N={name:"component-doc",components:{"element-demo0":function(){const{resolveComponent:e,createVNode:t,resolveDirective:n,withCtx:o,withDirectives:d,openBlock:l,createBlock:c}=a;const i={data:()=>({tableData:[{date:"2016-05-02",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-04",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-01",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"}],loading:!0})};return Object.assign({render:function(a,i){const s=e("el-table-column"),r=e("el-table"),u=n("loading");return l(),c("div",null,[d(t(r,{data:a.tableData,style:{width:"100%"}},{default:o(()=>[t(s,{prop:"date",label:"Date",width:"180"}),t(s,{prop:"name",label:"Name",width:"180"}),t(s,{prop:"address",label:"Address"})]),_:1},8,["data"]),[[u,a.loading]])])}},i)}(),"element-demo1":function(){const{resolveComponent:e,createVNode:t,resolveDirective:n,withCtx:o,withDirectives:d,openBlock:l,createBlock:c}=a;const i={data:()=>({tableData:[{date:"2016-05-02",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-04",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-01",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"}],loading:!0})};return Object.assign({render:function(a,i){const s=e("el-table-column"),r=e("el-table"),u=n("loading");return l(),c("div",null,[d(t(r,{"element-loading-text":"Loading...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)",data:a.tableData,style:{width:"100%"}},{default:o(()=>[t(s,{prop:"date",label:"Date",width:"180"}),t(s,{prop:"name",label:"Name",width:"180"}),t(s,{prop:"address",label:"Address"})]),_:1},8,["data"]),[[u,a.loading]])])}},i)}(),"element-demo2":function(){const{createTextVNode:e,resolveComponent:t,resolveDirective:n,withCtx:o,createVNode:d,withDirectives:l,openBlock:c,createBlock:i}=a,s=e(" As a directive "),r=e(" As a service ");const u={data:()=>({fullscreenLoading:!1}),methods:{openFullScreen1(){this.fullscreenLoading=!0,setTimeout(()=>{this.fullscreenLoading=!1},2e3)},openFullScreen2(){const e=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout(()=>{e.close()},2e3)}}};return Object.assign({render:function(e,a){const u=t("el-button"),h=n("loading");return c(),i("div",null,[l(d(u,{type:"primary",onClick:e.openFullScreen1},{default:o(()=>[s]),_:1},8,["onClick"]),[[h,e.fullscreenLoading,void 0,{fullscreen:!0,lock:!0}]]),d(u,{type:"primary",onClick:e.openFullScreen2},{default:o(()=>[r]),_:1},8,["onClick"])])}},u)}()},render:function(e,t,n,N,v,V){const w=Object(a.resolveComponent)("element-demo0"),k=Object(a.resolveComponent)("demo-block"),y=Object(a.resolveComponent)("element-demo1"),x=Object(a.resolveComponent)("element-demo2");return Object(a.openBlock)(),Object(a.createBlock)("section",o,[d,l,c,i,Object(a.createVNode)(k,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(w)]),highlight:Object(a.withCtx)(()=>[r]),default:Object(a.withCtx)(()=>[s]),_:1}),u,h,Object(a.createVNode)(k,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(y)]),highlight:Object(a.withCtx)(()=>[b]),default:Object(a.withCtx)(()=>[p]),_:1}),g,m,Object(a.createVNode)(k,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(x)]),highlight:Object(a.withCtx)(()=>[f]),default:Object(a.withCtx)(()=>[j]),_:1}),O])}};t.default=N}}]);