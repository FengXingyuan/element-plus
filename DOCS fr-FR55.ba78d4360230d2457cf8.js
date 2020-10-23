(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{658:function(e,t,n){"use strict";n.r(t);var i=n(0);const a={class:"content element-doc"},l=Object(i.createVNode)("h2",{id:"timeline"},[Object(i.createVNode)("a",{class:"header-anchor",href:"#timeline"},"¶"),Object(i.createTextVNode)(" Timeline")],-1),d=Object(i.createVNode)("p",null,"Affiche une suite d'évènements dans un ordre chronologique.",-1),o=Object(i.createVNode)("h3",{id:"usage"},[Object(i.createVNode)("a",{class:"header-anchor",href:"#usage"},"¶"),Object(i.createTextVNode)(" Usage")],-1),r=Object(i.createVNode)("p",null,"La timeline peut être divisée en plusieurs activités en ordre ascendant ou descendant. Les timestamps sont des caractéristiques importantes qui les distinguent des autres composants. Notez la différence avec Steps.",-1),c=Object(i.createVNode)("pre",null,[Object(i.createVNode)("code",{class:"html"},'<div class="block">\n  <div class="radio">\n    Order:\n    <el-radio-group v-model="reverse">\n      <el-radio :label="true">Descendant</el-radio>\n      <el-radio :label="false">Ascendant</el-radio>\n    </el-radio-group>\n  </div>\n\n  <el-timeline :reverse="reverse">\n    <el-timeline-item\n      v-for="(activity, index) in activities"\n      :key="index"\n      :timestamp="activity.timestamp">\n      {{activity.content}}\n    </el-timeline-item>\n  </el-timeline>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        reverse: true,\n        activities: [{\n          content: \'Début de l\\\'évènement\',\n          timestamp: \'2018-04-15\'\n        }, {\n          content: \'Approuvé\',\n          timestamp: \'2018-04-13\'\n        }, {\n          content: \'Succès\',\n          timestamp: \'2018-04-11\'\n        }]\n      };\n    }\n  };\n<\/script>\n')],-1),s=Object(i.createVNode)("h3",{id:"noeud-personnalise"},[Object(i.createVNode)("a",{class:"header-anchor",href:"#noeud-personnalise"},"¶"),Object(i.createTextVNode)(" Noeud personnalisé")],-1),m=Object(i.createVNode)("p",null,"Vous pouvez personnaliser la taille, la couleur et les icônes de chaque Noeud.",-1),u=Object(i.createVNode)("pre",null,[Object(i.createVNode)("code",{class:"html"},"<div class=\"block\">\n  <el-timeline>\n    <el-timeline-item\n      v-for=\"(activity, index) in activities\"\n      :key=\"index\"\n      :icon=\"activity.icon\"\n      :type=\"activity.type\"\n      :color=\"activity.color\"\n      :size=\"activity.size\"\n      :timestamp=\"activity.timestamp\">\n      {{activity.content}}\n    </el-timeline-item>\n  </el-timeline>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        activities: [{\n          content: 'Icône',\n          timestamp: '2018-04-12 20:46',\n          size: 'large',\n          type: 'primary',\n          icon: 'el-icon-more'\n        }, {\n          content: 'Couleur',\n          timestamp: '2018-04-03 20:46',\n          color: '#0bbd87'\n        }, {\n          content: 'Taille',\n          timestamp: '2018-04-03 20:46',\n          size: 'large'\n        }, {\n          content: 'Défaut',\n          timestamp: '2018-04-03 20:46'\n        }]\n      };\n    }\n  };\n<\/script>\n")],-1),p=Object(i.createVNode)("h3",{id:"timestamp-personnalise"},[Object(i.createVNode)("a",{class:"header-anchor",href:"#timestamp-personnalise"},"¶"),Object(i.createTextVNode)(" Timestamp personnalisé")],-1),h=Object(i.createVNode)("p",null,"Le timestamp peut être placé au-dessus du contenu lorsque celui-ci est trop haut.",-1),b=Object(i.createVNode)("pre",null,[Object(i.createVNode)("code",{class:"html"},'<div class="block">\n  <el-timeline>\n    <el-timeline-item timestamp="2018/4/12" placement="top">\n      <el-card>\n        <h4>Mise à jour du template GitHub</h4>\n        <p>Commit de Tom le 2018/4/12 20:46</p>\n      </el-card>\n    </el-timeline-item>\n    <el-timeline-item timestamp="2018/4/3" placement="top">\n      <el-card>\n        <h4>Mise à jour du template GitHub</h4>\n        <p>Commit de Tom le 2018/4/3 20:46</p>\n      </el-card>\n    </el-timeline-item>\n    <el-timeline-item timestamp="2018/4/2" placement="top">\n      <el-card>\n        <h4>Mise à jour du template GitHub</h4>\n        <p>Commit de Tom le 2018/4/2 20:46</p>\n      </el-card>\n    </el-timeline-item>\n  </el-timeline>\n</div>\n')],-1),v=Object(i.createStaticVNode)('<h3 id="attributs-de-timeline"><a class="header-anchor" href="#attributs-de-timeline">¶</a> Attributs de Timeline</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>reverse</td><td>Si l&#39;ordre chronologique est ascendant ou descendant, le défaut étant ascendant.</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id="attribut-de-timeline-item"><a class="header-anchor" href="#attribut-de-timeline-item">¶</a> Attribut de Timeline-item</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>timestamp</td><td>Le contenu du timestamp.</td><td>string</td><td>-</td><td>—</td></tr><tr><td>hide-timestamp</td><td>Si le timestamp doit être affiché.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>placement</td><td>La position du timestamp.</td><td>string</td><td>top / bottom</td><td>bottom</td></tr><tr><td>type</td><td>Le type de noeud.</td><td>string</td><td>primary / success / warning / danger / info</td><td>-</td></tr><tr><td>color</td><td>La couleur de fond du noeud.</td><td>string</td><td>hsl / hsv / hex / rgb</td><td>-</td></tr><tr><td>size</td><td>La taille du noeud</td><td>string</td><td>normal / large</td><td>normal</td></tr><tr><td>icon</td><td>Le nom de classe de l&#39;icône.</td><td>string</td><td>—</td><td>-</td></tr></tbody></table><h3 id="slots-de-timeline-item"><a class="header-anchor" href="#slots-de-timeline-item">¶</a> Slots de Timeline-Item</h3><table><thead><tr><th>Nom</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>Contenu personnalisé pour le timeline-item.</td></tr><tr><td>dot</td><td>Noeud personnalisé.</td></tr></tbody></table>',6);var f={name:"component-doc",components:{"element-demo0":function(){const{createTextVNode:e,resolveComponent:t,withCtx:n,createVNode:a,renderList:l,Fragment:d,openBlock:o,createBlock:r,toDisplayString:c}=i,s={class:"block"},m={class:"radio"},u=e(" Order: "),p=e("Descendant"),h=e("Ascendant");const b={data:()=>({reverse:!0,activities:[{content:"Début de l'évènement",timestamp:"2018-04-15"},{content:"Approuvé",timestamp:"2018-04-13"},{content:"Succès",timestamp:"2018-04-11"}]})};return Object.assign({render:function(i,b){const v=t("el-radio"),f=t("el-radio-group"),j=t("el-timeline-item"),O=t("el-timeline");return o(),r("div",null,[a("div",s,[a("div",m,[u,a(f,{modelValue:i.reverse,"onUpdate:modelValue":b[1]||(b[1]=e=>i.reverse=e)},{default:n(()=>[a(v,{label:!0},{default:n(()=>[p]),_:1}),a(v,{label:!1},{default:n(()=>[h]),_:1})]),_:1},8,["modelValue"])]),a(O,{reverse:i.reverse},{default:n(()=>[(o(!0),r(d,null,l(i.activities,(t,i)=>(o(),r(j,{key:i,timestamp:t.timestamp},{default:n(()=>[e(c(t.content),1)]),_:2},1032,["timestamp"]))),128))]),_:1},8,["reverse"])])])}},b)}(),"element-demo1":function(){const{renderList:e,Fragment:t,openBlock:n,createBlock:a,toDisplayString:l,createTextVNode:d,resolveComponent:o,withCtx:r,createVNode:c}=i,s={class:"block"};const m={data:()=>({activities:[{content:"Icône",timestamp:"2018-04-12 20:46",size:"large",type:"primary",icon:"el-icon-more"},{content:"Couleur",timestamp:"2018-04-03 20:46",color:"#0bbd87"},{content:"Taille",timestamp:"2018-04-03 20:46",size:"large"},{content:"Défaut",timestamp:"2018-04-03 20:46"}]})};return Object.assign({render:function(i,m){const u=o("el-timeline-item"),p=o("el-timeline");return n(),a("div",null,[c("div",s,[c(p,null,{default:r(()=>[(n(!0),a(t,null,e(i.activities,(e,t)=>(n(),a(u,{key:t,icon:e.icon,type:e.type,color:e.color,size:e.size,timestamp:e.timestamp},{default:r(()=>[d(l(e.content),1)]),_:2},1032,["icon","type","color","size","timestamp"]))),128))]),_:1})])])}},m)}(),"element-demo2":function(){const{createVNode:e,resolveComponent:t,withCtx:n,openBlock:a,createBlock:l}=i,d={class:"block"},o=e("h4",null,"Mise à jour du template GitHub",-1),r=e("p",null,"Commit de Tom le 2018/4/12 20:46",-1),c=e("h4",null,"Mise à jour du template GitHub",-1),s=e("p",null,"Commit de Tom le 2018/4/3 20:46",-1),m=e("h4",null,"Mise à jour du template GitHub",-1),u=e("p",null,"Commit de Tom le 2018/4/2 20:46",-1);return Object.assign({render:function(i,p){const h=t("el-card"),b=t("el-timeline-item"),v=t("el-timeline");return a(),l("div",null,[e("div",d,[e(v,null,{default:n(()=>[e(b,{timestamp:"2018/4/12",placement:"top"},{default:n(()=>[e(h,null,{default:n(()=>[o,r]),_:1})]),_:1}),e(b,{timestamp:"2018/4/3",placement:"top"},{default:n(()=>[e(h,null,{default:n(()=>[c,s]),_:1})]),_:1}),e(b,{timestamp:"2018/4/2",placement:"top"},{default:n(()=>[e(h,null,{default:n(()=>[m,u]),_:1})]),_:1})]),_:1})])])}},{})}()},render:function(e,t,n,f,j,O){const V=Object(i.resolveComponent)("element-demo0"),N=Object(i.resolveComponent)("demo-block"),g=Object(i.resolveComponent)("element-demo1"),y=Object(i.resolveComponent)("element-demo2");return Object(i.openBlock)(),Object(i.createBlock)("section",a,[l,d,o,r,Object(i.createVNode)(N,null,{source:Object(i.withCtx)(()=>[Object(i.createVNode)(V)]),highlight:Object(i.withCtx)(()=>[c]),_:1}),s,m,Object(i.createVNode)(N,null,{source:Object(i.withCtx)(()=>[Object(i.createVNode)(g)]),highlight:Object(i.withCtx)(()=>[u]),_:1}),p,h,Object(i.createVNode)(N,null,{source:Object(i.withCtx)(()=>[Object(i.createVNode)(y)]),highlight:Object(i.withCtx)(()=>[b]),_:1}),v])}};t.default=f}}]);