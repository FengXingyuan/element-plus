(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{626:function(e,t,n){"use strict";n.r(t);var a=n(0);const r={class:"content element-doc"},o=Object(a.createVNode)("h2",{id:"divider"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#divider"},"¶"),Object(a.createTextVNode)(" Divider")],-1),i=Object(a.createVNode)("p",null,"Une ligne de séparation entre deux contenus.",-1),s=Object(a.createVNode)("h3",{id:"usage-basique"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#usage-basique"},"¶"),Object(a.createTextVNode)(" Usage basique")],-1),c=Object(a.createVNode)("p",null,"Séparer le texte de deux paragraphes.",-1),l=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},"<template>\n  <div>\n    <span>Je suis assis à ma fenêtre ce matin où le monde, tel un passant, s’arrête un instant, me fait signe de la tête et part.</span>\n    <el-divider></el-divider>\n    <span>Les petites pensées sont le bruissement des feuilles; ils ont leur murmure de joie dans mon esprit.</span>\n  </div>\n</template>\n")],-1),d=Object(a.createVNode)("h3",{id:"contenu-personnalise"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#contenu-personnalise"},"¶"),Object(a.createTextVNode)(" Contenu personnalisé")],-1),u=Object(a.createVNode)("p",null,"Vous ajouter du contenu dans la ligne de séparation.",-1),p=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},'<template>\n  <div>\n    <span>Vous ne voyez pas ce que vous êtes, ce que vous voyez est votre ombre.</span>\n    <el-divider content-position="left">Rabindranath Tagore</el-divider>\n    <span>Je ne peux pas choisir le meilleur. Le meilleur me choisit.</span>\n    <el-divider><i class="el-icon-star-on"></i></el-divider>\n    <span>Mes souhaits sont des imbéciles, ils crient à travers ta chanson, mon Maître. Laisse-moi mais écoute.</span>\n    <el-divider content-position="right">Rabindranath Tagore</el-divider>\n  </div>\n</template>\n')],-1),h=Object(a.createVNode)("h3",{id:"separation-verticale"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#separation-verticale"},"¶"),Object(a.createTextVNode)(" Séparation verticale")],-1),b=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},'<template>\n  <div>\n    <span>Pluie</span>\n    <el-divider direction="vertical"></el-divider>\n    <span>Maison</span>\n    <el-divider direction="vertical"></el-divider>\n    <span>Herbe</span>\n  </div>\n</template>\n')],-1),m=Object(a.createStaticVNode)('<h3 id="attributs"><a class="header-anchor" href="#attributs">¶</a> Attributs</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>direction</td><td>Règle la direction du séparateur.</td><td>string</td><td>horizontal / vertical</td><td>horizontal</td></tr><tr><td>content-position</td><td>Personnalise le contenu du séparateur.</td><td>String</td><td>left / right / center</td><td>center</td></tr></tbody></table>',2);var v={name:"component-doc",components:{"element-demo0":function(){const{createVNode:e,resolveComponent:t,openBlock:n,createBlock:r}=a,o=e("span",null,"Je suis assis à ma fenêtre ce matin où le monde, tel un passant, s’arrête un instant, me fait signe de la tête et part.",-1),i=e("span",null,"Les petites pensées sont le bruissement des feuilles; ils ont leur murmure de joie dans mon esprit.",-1);return Object.assign({render:function(a,s){const c=t("el-divider");return n(),r("div",null,[e("div",null,[o,e(c),i])])}},{})}(),"element-demo1":function(){const{createVNode:e,createTextVNode:t,resolveComponent:n,withCtx:r,openBlock:o,createBlock:i}=a,s=e("span",null,"Vous ne voyez pas ce que vous êtes, ce que vous voyez est votre ombre.",-1),c=t("Rabindranath Tagore"),l=e("span",null,"Je ne peux pas choisir le meilleur. Le meilleur me choisit.",-1),d=e("i",{class:"el-icon-star-on"},null,-1),u=e("span",null,"Mes souhaits sont des imbéciles, ils crient à travers ta chanson, mon Maître. Laisse-moi mais écoute.",-1),p=t("Rabindranath Tagore");return Object.assign({render:function(t,a){const h=n("el-divider");return o(),i("div",null,[e("div",null,[s,e(h,{"content-position":"left"},{default:r(()=>[c]),_:1}),l,e(h,null,{default:r(()=>[d]),_:1}),u,e(h,{"content-position":"right"},{default:r(()=>[p]),_:1})])])}},{})}(),"element-demo2":function(){const{createVNode:e,resolveComponent:t,openBlock:n,createBlock:r}=a,o=e("span",null,"Pluie",-1),i=e("span",null,"Maison",-1),s=e("span",null,"Herbe",-1);return Object.assign({render:function(a,c){const l=t("el-divider");return n(),r("div",null,[e("div",null,[o,e(l,{direction:"vertical"}),i,e(l,{direction:"vertical"}),s])])}},{})}()},render:function(e,t,n,v,j,O){const V=Object(a.resolveComponent)("element-demo0"),N=Object(a.resolveComponent)("demo-block"),f=Object(a.resolveComponent)("element-demo1"),g=Object(a.resolveComponent)("element-demo2");return Object(a.openBlock)(),Object(a.createBlock)("section",r,[o,i,s,c,Object(a.createVNode)(N,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(V)]),highlight:Object(a.withCtx)(()=>[l]),_:1}),d,u,Object(a.createVNode)(N,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(f)]),highlight:Object(a.withCtx)(()=>[p]),_:1}),h,Object(a.createVNode)(N,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(g)]),highlight:Object(a.withCtx)(()=>[b]),_:1}),m])}};t.default=v}}]);