(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{427:function(e,a,i){"use strict";i.r(a);var t=i(0),n=i.p+"static/theme-index-blue.8fbb67d.png",o=i.p+"static/theme-index-red.5e43266.png",s=i(75),r=i(76),l=i.p+"static/guide.e81dcf2.png",c=i.p+"static/component.7d1ca06.png",d=i.p+"static/resource.53cc5d2.png";const u=Object(t.withScopeId)("data-v-74541b52");Object(t.pushScopeId)("data-v-74541b52");const p={class:"banner"},m={class:"banner-desc"},g={ref:"indexMainImg",class:"jumbotron"},h=Object(t.createVNode)("img",{src:n,alt:""},null,-1),b=Object(t.createVNode)("img",{src:o,alt:""},null,-1),f={class:"sponsors"},v={class:"sponsor",href:"https://tipe.io/?ref=element",target:"_blank"},y=Object(t.createVNode)("img",{width:"35px",src:s.a,alt:"tipe.io"},null,-1),j=Object(t.createVNode)("div",null,[Object(t.createVNode)("p",null,"Sponsored by Tipe.io"),Object(t.createVNode)("p",null,"Next Generation API-first CMS")],-1),O=Object(t.createVNode)("a",{class:"sponsor",href:"https://www.duohui.cn/?utm_source=element&utm_medium=web&utm_campaign=element-index",target:"_blank"},[Object(t.createVNode)("img",{width:"45px",src:r.a,alt:"duohui"}),Object(t.createVNode)("div",null,[Object(t.createVNode)("p",null,"Sponsored by 多会"),Object(t.createVNode)("p",null,"炫酷的新一代活动票务系统")])],-1),C={class:"cards"},N={class:"container"},w={class:"card"},x=Object(t.createVNode)("img",{src:l,alt:""},null,-1),S={class:"card"},V=Object(t.createVNode)("img",{src:c,alt:""},null,-1),z={class:"card"},k=Object(t.createVNode)("img",{src:d,alt:""},null,-1);Object(t.popScopeId)();const E=u((function(e,a,i,n,o,s){const r=Object(t.resolveComponent)("router-link");return Object(t.openBlock)(),Object(t.createBlock)("div",null,[Object(t.createVNode)("div",p,[Object(t.createVNode)("div",m,[Object(t.createVNode)("h1",null,Object(t.toDisplayString)(s.langConfig[1]),1),Object(t.createVNode)("p",null,Object(t.toDisplayString)(s.langConfig[2]),1)])]),Object(t.createVNode)("div",g,[h,Object(t.createVNode)("div",{class:"jumbotron-red",style:{height:o.mainImgOffset+"px"}},[b],4)],512),Object(t.createVNode)("div",f,[Object(t.withDirectives)(Object(t.createVNode)("a",v,[y,j],512),[[t.vShow,"zh-CN"!==o.lang]]),O]),Object(t.createVNode)("div",C,[Object(t.createVNode)("ul",N,[Object(t.createVNode)("li",null,[Object(t.createVNode)("div",w,[x,Object(t.createVNode)("h3",null,Object(t.toDisplayString)(s.langConfig[3]),1),Object(t.createVNode)("p",null,Object(t.toDisplayString)(s.langConfig[4]),1),Object(t.createVNode)(r,{"active-class":"active",to:`/${o.lang}/guide/design`,exact:""},{default:u(()=>[Object(t.createTextVNode)(Object(t.toDisplayString)(s.langConfig[5]),1)]),_:1},8,["to"])])]),Object(t.createVNode)("li",null,[Object(t.createVNode)("div",S,[V,Object(t.createVNode)("h3",null,Object(t.toDisplayString)(s.langConfig[6]),1),Object(t.createVNode)("p",null,Object(t.toDisplayString)(s.langConfig[7]),1),Object(t.createVNode)(r,{"active-class":"active",to:`/${o.lang}/component/layout`,exact:""},{default:u(()=>[Object(t.createTextVNode)(Object(t.toDisplayString)(s.langConfig[5]),1)]),_:1},8,["to"])])]),Object(t.createVNode)("li",null,[Object(t.createVNode)("div",z,[k,Object(t.createVNode)("h3",null,Object(t.toDisplayString)(s.langConfig[8]),1),Object(t.createVNode)("p",null,Object(t.toDisplayString)(s.langConfig[9]),1),Object(t.createVNode)(r,{"active-class":"active",to:`/${o.lang}/resource`,exact:""},{default:u(()=>[Object(t.createTextVNode)(Object(t.toDisplayString)(s.langConfig[5]),1)]),_:1},8,["to"])])])])])])}));var D=i(683),q=i(699),T={data(){return{lang:this.$route.meta.lang,mainImgOffset:0}},computed:{langConfig(){return D.filter(e=>e.lang===this.lang)[0].pages.index}},created(){this.throttledHandleScroll=Object(q.throttle)(10,!0,e=>{this.handleScroll(e)})},beforeUnmount(){window.removeEventListener("scroll",this.throttledHandleScroll)},mounted(){window.addEventListener("scroll",this.throttledHandleScroll)},methods:{handleScroll(){const e=this.$refs.indexMainImg,a=e.getBoundingClientRect(),i=e.clientHeight+55;let t=2*(180-a.top);t<0&&(t=0),t>i&&(t=i),this.mainImgOffset=t}}};i(704);T.render=E,T.__scopeId="data-v-74541b52";a.default=T},683:function(e){e.exports=JSON.parse('[{"lang":"zh-CN","pages":{"index":{"1":"网站快速成型工具","2":"Element Plus，一套为开发者、设计师和产品经理准备的基于 Vue 3.0 的桌面端组件库","3":"指南","4":"了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。","5":"查看详情","6":"组件","7":"使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。","8":"资源","9":"下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率。","10":"主题","11":"在线主题编辑器，可视化定制和管理站点主题、组件样式","12":"主题定制功能上线","13":"点击开始编辑","14":"尝试您的新主题","lang":"zh-CN","titleSize":"34","paraSize":"18"},"component":{},"theme":{"1":"官方主题","2":"我的主题","3":"主题名称"},"theme-preview":{"1":"返回"},"theme-nav":{},"changelog":{"1":"更新日志","2":"zh-CN"},"design":{"1":"设计原则","2":"一致","3":"Consistency","4":"反馈","5":"Feedback","6":"效率","7":"Efficiency","8":"可控","9":"Controllability","10":"一致性 Consistency","11":"与现实生活一致：","12":"与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；","13":"在界面中一致：","14":"所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。","15":"反馈 Feedback","16":"控制反馈：","17":"通过界面样式和交互动效让用户可以清晰的感知自己的操作；","18":"页面反馈：","19":"操作后，通过页面元素的变化清晰地展现当前状态。","20":"效率 Efficiency","21":"简化流程：","22":"设计简洁直观的操作流程；","23":"清晰明确：","24":"语言表达清晰且表意明确，让用户快速理解进而作出决策；","25":"帮助用户识别：","26":"界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。","27":"可控 Controllability","28":"用户决策：","29":"根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；","30":"结果可控：","31":"用户可以自由的进行操作，包括撤销、回退和终止当前操作等。"},"guide":{"1":"设计原则","2":"导航"},"nav":{"1":"导航","2":"导航可以解决用户在访问页面时：在哪里，去哪里，怎样去的问题。一般导航会有「侧栏导航」和「顶部导航」2 种类型。","3":"选择合适的导航","4":"选择合适的导航可以让用户在产品的使用过程中非常流畅，相反若是不合适就会引起用户操作不适（方向不明确），以下是「侧栏导航」和 「顶部导航」的区别。","5":"侧栏导航","6":"可将导航栏固定在左侧，提高导航可见性，方便页面之间切换；顶部可放置常用工具，如搜索条、帮助按钮、通知按钮等。适用于中后台的管理型、工具型网站。","7":"一级类目","8":"适用于结构简单的网站：只有一级页面时，不需要使用面包屑。","9":"二级类目","10":"侧栏中最多可显示两级导航；当使用二级导航时，我们建议搭配使用面包屑，方便用户定位自己的位置和快速返回。","11":"三级类目","12":"适用于较复杂的工具型后台，左侧栏为一级导航，中间栏可显示其对应的二级导航，也可放置其他的工具型选项。","13":"顶部导航","14":"顺应了从上至下的正常浏览顺序，方便浏览信息；顶部宽度限制了导航的数量和文本长度。","15":"适用于导航较少，页面篇幅较长的网站。"},"resource":{"1":"资源","2":"整理中","3":"Axure Components","4":"通过在 Axure 中导入 Element 组件库，可以在交互设计阶段方便地调用常用的组件","5":"下载","6":"Sketch Template","7":"从 Element Template 快速调用常用组件，在提升设计效率的同时，保证统一的视觉风格","8":"组件交互文档","9":"进一步查看 Element 交互文档，从一个较为微观的角度详细地了解各个组件的交互细节","paraHeight":"1.8","placeholder1":"整理中","placeholder2":"设计资源正在整理和完善中"}}},{"lang":"en-US","pages":{"index":{"1":"A Desktop UI Library","2":"Element Plus, a Vue 3.0 based component library for developers, designers and product managers","3":"Guide","4":"Understand the design guidelines, helping designers build product that\'s logically sound, reasonably structured and easy to use.","5":"View Detail","6":"Component","7":"Experience interaction details by strolling through component demos. Use encapsulated code to improve developing efficiency.","8":"Resource","9":"Download relevant design resources for shaping page prototype or visual draft, increasing design efficiency.","10":"Theme","11":"Online theme roller, visualize custom and manage site themes and component styles","12":"Theme customization is available!","13":"Click here","14":"Make your own theme","lang":"en-US","titleSize":"34","paraSize":"18"},"component":{},"theme":{"1":"Official Theme","2":"My Theme","3":"Theme name"},"theme-preview":{"1":"Back"},"theme-nav":{},"changelog":{"1":"Changelog","2":"en-US"},"design":{"1":"Design Disciplines","2":"Consistency","3":"","4":"Feedback","5":"","6":"Efficiency","7":"","8":"Controllability","9":"","10":"Consistency","11":"Consistent with real life: ","12":"in line with the process and logic of real life, and comply with languages and habits that the users are used to.","13":"Consistent within interface: ","14":"all elements should be consistent, such as: design style, icons and texts, position of elements, etc.","15":"Feedback","16":"Operation feedback: ","17":"enable the users to clearly perceive their operations by style updates and interactive effects.","18":"Visual feedback: ","19":"reflect current state by updating or rearranging elements of the page.","20":"Efficiency","21":"Simplify the process: ","22":"keep operating process simple and intuitive.","23":"Definite and clear: ","24":"enunciate your intentions clearly so that the users can quickly understand and make decisions.","25":"Easy to identify: ","26":"the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.","27":"Controllability","28":"Decision making: ","29":"giving advices about operations is acceptable, but do not make decisions for the users.","30":"Controlled consequences: ","31":"users should be granted the freedom to operate, including canceling, aborting or terminating current operation."},"guide":{"1":"Design Disciplines","2":"Navigation"},"nav":{"1":"Navigation","2":"Navigation focuses on solving the users\' problems of where to go and how to get there. Generally it can be categorized into \'sidebar navigation\' and \'top navigation\'.","3":"Choose the right navigation","4":"An appropriate navigation gives users a smooth experience, while an inappropriate one leads to confusion. Here are the differences between sidebar navigation and top navigation","5":"Side Navigation","6":"Fix the navigation at the left edge, thus improves its visibility, making it easier to switch between pages. In this case, the top area of the page holds commonly used tools, e.g. search bar, help button, notice button, etc. Suitable for background management or utility websites.","7":"Level 1 categories","8":"Suitable for simply structured sites with only one level of pages. No breadcrumb is needed.","9":"Level 2 categories","10":"Sidebar displays up to two levels of navigation. Breadcrumbs are recommended in combination of second level navigation, making it easier for the users to locate and navigate.","11":"Level 3 categories","12":"Suitable for complicated utility websites. The left sidebar holds first level navigation, and the middle column displays second level navigation or other utility options.","13":"Top Navigation","14":"Conforms to the normal browsing order from top to bottom, which makes things more natural. The navigation amount and text length are limited to the width of the top.","15":"Suitable for sites with few navigations and large chunks."},"resource":{"1":"Resource","2":"Under construction.","3":"Axure Components","4":"By importing Element UI in Axure, you can easily apply all the components we provide during interaction design.","5":"Download","6":"Sketch Template","7":"Apply components from Element template, so you can improve design efficiency while keeping a unified visual style.","8":"Interaction Design Documentation","9":"Take a closer look at the interaction design documentation. Learn more details of each component from a microcosmic perspective.","paraHeight":"1.6","placeholder1":"Under construction","placeholder2":"More resources are being developed"}}},{"lang":"es","pages":{"index":{"1":"Un kit de interfaz de usuario para la web","2":"Element Plus, una librería de componentes basada en Vue 3.0 para desarrolladores, diseñadores y jefes de producto","3":"Guía","4":"Entender los líneamientos de diseño, ayudando a diseñadores a crear productos que sean lógicos, razonablemente estructurados y fáciles de usar.","5":"Ver detalle","6":"Componentes","7":"Experimenta la interacción al pasear con los ejemplos de los componentes. Utiliza el código encapsulado para mejorar la eficiencia en el desarrollo.","8":"Recursos","9":"Descarga los recursos de diseño relevantes para dar forma a un prototipo o borrador, aumentando la eficiencia del diseño.","10":"Theme","11":"Online theme roller, visualize custom and manage site themes and component styles","12":"Theme customization is available!","13":"Click here","14":"Make your own theme","lang":"es","titleSize":"34","paraSize":"18"},"component":{},"theme":{"1":"Official Theme","2":"My Theme","3":"Theme name"},"theme-preview":{"1":"Back"},"theme-nav":{},"changelog":{"1":"Lista de cambios","2":"es"},"design":{"1":"Disciplinas de diseño","2":"Consistencia","3":"","4":"Comentarios","5":"","6":"Eficiencia","7":"","8":"Control","9":"","10":"Consistencia","11":"Consistente con la vida real: ","12":"en línea con el proceso y la vida real, y cumple con los idiomas y hábitos a los que los usuarios están acostumbrados.","13":"Consistente dentro de la interfaz: ","14":"todos los elementos deben ser consistentes, como: estilo de diseño, iconos y texto, posición de los elementos, etc.","15":"Comentarios","16":"Comentarios sobre la operación: ","17":"Permite a los usuarios percibir claramente las operaciones mediante actualizaciones de estilo y efectos interactivos.","18":"Comentarios visuales: ","19":"Refleja el estado actual al actualizar o reorganizar los elementos de la página.","20":"Eficiencia","21":"Simplifica el proceso: ","22":"Mantiene el proceso operativo simple e intuitivo.","23":"Bien definido y claro: ","24":"Expresa las intenciones claramente para que los usuarios puedan comprender y tomar decisiones rápidamente.","25":"Fácil de identificar: ","26":"La interfaz debe ser sencilla, lo que permitirá a los usuarios a identificar y liberarlos de la memorización y recuerdos.","27":"Control","28":"Toma de decisiones: ","29":"Brindar consejos sobres las operaciones es aceptable, pero no tomar desiciones para los usuarios.","30":"Consecuencias controladas: ","31":"Los usuarios deben tener la libertad de operar, incluida la cancelación, el aborto o la terminación de las operaciones actuales."},"guide":{"1":"Disciplinas de diseño","2":"Navegación"},"nav":{"1":"Navegación","2":"La navegación se centra en resolver los problemas de los usuarios sobre donde ir y como llegar ahí. En general, se puede categorizar en \'navegación de barra lateral\' y \'navegación superior\'.","3":"Elige la navegación correcta","4":"Una navegación apropiada provee a los usuarios una mejor experiencia, mientras que una inapropiada genera confusión. Esta es la diferencia entre la navegación de la barra lateral y la navegación superior.","5":"Navegación lateral","6":"Fija la navegación del lado izquierdo, esto permitirá una mejor visibilidad, lo que facilitará el cambio de pagina. En este caso, el área superior de la pagina contiene herramientas comúnmente utilizadas, por ejemplo, barra de búsqueda, botón de ayuda, botón de aviso, etc. Adecuado para sitios web de gestión.","7":"Categorías de Nivel 1","8":"Adecuado para sitios con una estructura simple con un solo nivel de páginas. No se necesita un \'breadcrumb\'.","9":"Categorías de Nivel 2","10":"La barra lateral muestra hasta dos niveles de navegación. Se recomienda utilizar un \'breadcrumb\' en combinación con la navegación de segundo nivel, lo que facilita la localización y navegación de los usuarios.","11":"Categorías de Nivel 3","12":"Adecuado para sitios web bastante complejos. La barra lateral izquierda contiene navegación de primer nivel, y la columna central muestra navegación de segundo nivel u otras opciones de utilidad.","13":"Navegación superior","14":"Se ajusta de acuerdo a la exploración normal de arriba a abajo, lo que hace que las cosas sean más naturales. La cantidad de navegación y la longitud del texto están limitadas al ancho de la parte superior.","15":"Adecuado para sitios con pocas navegaciones y grandes trozos."},"resource":{"1":"Recursos","2":"En construcción","3":"Componetes de Axure","4":"Mediante la importación de elementos de interfaz de usuario en Axure, se puede aplicar fácilmente a todos los componentes que proporcionamos durante el diseño de interacción.","5":"Descarga","6":"Plantilla de Sketch","7":"Aplica componentes de la plantilla Element para que pueda mejorarla eficiencia del diseño manteniendo un estilo visual unificado.","8":"Documentación de diseño de interacción","9":"Eche un vistazo más de cerca a la documentación de diseño de interacción. Conoce más detalles de cada componente desde una perspectiva microcósmica.","paraHeight":"1.6","placeholder1":"En construcción","placeholder2":"Se están desarrollando más recursos"}}},{"lang":"fr-FR","pages":{"index":{"1":"Un kit de composants d\'interface pour le web","2":"Element Plus, une bibliothèque de composants web basée sur Vue 3.0 pour les développeurs, designers et chef de produits.","3":"Guide","4":"Comprendre le design, aider les designers à concevoir un produit adapté, structuré et facile d\'utilisation.","5":"Détails","6":"Composants","7":"Découvrez les détails de chaque composant and parcourant les différentes démos. Utilisez l\'encapsulation du code pour développer plus efficacement.","8":"Ressources","9":"Téléchargez différents outils de prototypage ou de visualisation pour un design plus efficace.","10":"Theme","11":"Online theme roller, visualize custom and manage site themes and component styles","12":"Theme customization is available!","13":"Click here","14":"Make your own theme","lang":"fr-FR","titleSize":"34","paraSize":"18"},"component":{},"theme":{"1":"Official Theme","2":"My Theme","3":"Theme name"},"theme-preview":{"1":"Back"},"theme-nav":{},"changelog":{"1":"Changelog","2":"fr-FR"},"design":{"1":"Principes de conception","2":"Cohérence","3":"","4":"Feedback","5":"","6":"Efficacité","7":"","8":"Controlabilité","9":"","10":"Cohérence","11":"Cohérence avec la vraie vie: ","12":"en accord avec les processus habituels de la vie réelle, conforme aux langages et habitudes des utilisateurs.","13":"Cohérence au sein de l\'interface: ","14":"tout les élements doivent être cohérents entre eux et suivre les même règles, par exemple: le style global, les icônes, la position des élements, etc.","15":"Feedback","16":"Retour d\'expèrience: ","17":"permets aux utilisateurs de percevoir clairement leur opérations par le biais d\'animations et d\'effets interactifs.","18":"Retour visuel: ","19":"reflète l\'état actuel de la page via le réarrangement ou la mise à jour des éléments.","20":"Efficacité","21":"Simplifier le processus: ","22":"garde chaque operation simple et intuitive.","23":"Clair et défini: ","24":"énonce clairement ses intentions afin que l\'utilisateur puisse comprendre et prendre une décision rapidement.","25":"Facile à identifier: ","26":"l\'interface devrait être simple et facile d\'accès, afin que les utilisateurs n\'ai pas d\'efforts de mémorisation à faire.","27":"Controllabilité","28":"Prise de décision: ","29":"possibilité de donner des conseils sur les opérations, mais ne jamais prendre de décisions à la place des utilisateurs","30":"Contrôle des conséquences: ","31":"les utilisateurs devraient pouvoir controller l\'exécution de leurs opérations, y compris l\'annulation et la suppression des opérations courantes."},"guide":{"1":"Principes de conception","2":"Navigation"},"nav":{"1":"Navigation","2":"La navigation a pour but de guider les utilisateurs pour qu\'ils sachent ou aller et comment y parvenir. En général on peut distinguer deux types de navigation: le menu latéral ou \'sidebar\' et le menu en haut de page ou \'topbar\'.","3":"Choisir la bonne navigation","4":"Une navigation appropriée procure à l\'utilisation une expèrience facile et fluide, alors qu\'une mauvaise navigation entraîne de la confusion. Voici les différences entre les navigations \'sidebar\' et \'topbar\'","5":"Menu latéral","6":"Fixe la navigation sur le coté gauche, améliorant ainsi sa visibilité et facilitant le passage d\'une page à l\'autre. Dans ce cas, la zone en haut de la page peut contenir une barre de recherche, des liens vers de la documentation, des contacts, des boutons d\'aide, etc. Utile pour des interfaces de gestion ou des sites utilitaires.","7":"Catégories de niveau 1","8":"Appropriées pour des sites avec une structure simple et un seul niveau de page. L\'affichage du chemin de navigation n\'est pas néccessaire.","9":"Catégories de niveau 2","10":"Le menu affiche au moins deux niveaux de navigation. Dans ce cas l\'affichage du chemin de navigation est recommandé, afin que l\'utilisateur sache facilement ou il se trouve.","11":"Catégories de niveau 3","12":"Appropriées pour les sites web complexes. La barre la plus à gauche gère le premier niveau de navigation, tandis que celle à coté gère le deuxième niveau ansi que d\'autres options.","13":"Menu en haut de page","14":"Conforme à l\'ordre normal de navigation qui va de haut en bas, ce qui rends les choses plus naturelles. Les quantités de liens et de texte sont limités par la largeur de la barre.","15":"Approprié pour les sites ayant une navigation simple et un contenu large."},"resource":{"1":"Resources","2":"En construction.","3":"Composants Axure","4":"En important ELement UI dans Axure, vous pourrez facilement utiliser les composants durant le design des interactions","5":"Téléchargement","6":"Modèle de croquis","7":"Applique des composants d\'un template Element, afin d\'améliorer l\'efficacité du design tout en gardant un style visuel unifié.","8":"Documentation du design des interactions","9":"Jetez un oeil à la documentation du design des interactions. Obtenez des détails sur chaque composant.","paraHeight":"1.6","placeholder1":"En construction","placeholder2":"Plus de ressources sont en développement."}}}]')},696:function(e,a,i){},699:function(e,a,i){!function(e){"use strict";function a(e,a,i,t){var n,o=!1,s=0;function r(){n&&clearTimeout(n)}function l(){for(var l=arguments.length,c=new Array(l),d=0;d<l;d++)c[d]=arguments[d];var u=this,p=Date.now()-s;function m(){s=Date.now(),i.apply(u,c)}function g(){n=void 0}o||(t&&!n&&m(),r(),void 0===t&&p>e?m():!0!==a&&(n=setTimeout(t?g:m,void 0===t?e-p:e)))}return"boolean"!=typeof a&&(t=i,i=a,a=void 0),l.cancel=function(){r(),o=!0},l}e.debounce=function(e,i,t){return void 0===t?a(e,i,!1):a(e,t,!1!==i)},e.throttle=a,Object.defineProperty(e,"__esModule",{value:!0})}(a)},704:function(e,a,i){"use strict";i(696)}}]);