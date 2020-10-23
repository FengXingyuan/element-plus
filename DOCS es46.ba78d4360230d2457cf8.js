(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{591:function(e,t,l){"use strict";l.r(t);var a=l(0);const o={class:"content element-doc"},n=Object(a.createVNode)("h2",{id:"select"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#select"},"¶"),Object(a.createTextVNode)(" Select")],-1),d=Object(a.createVNode)("p",null,"Cuando haya muchas opciones, utilice un menú desplegable para mostrar y seleccionar las que desee.",-1),c=Object(a.createVNode)("h3",{id:"uso-basico"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#uso-basico"},"¶"),Object(a.createTextVNode)(" Uso básico")],-1),r=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createVNode)("code",null,"v-model"),Object(a.createTextVNode)(" es el valor de "),Object(a.createVNode)("code",null,"el-option"),Object(a.createTextVNode)(" que está seleccionado actualmente.")])],-1),i=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},"<template>\n  <el-select v-model=\"value\" placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'Option1',\n          label: 'Option1'\n        }, {\n          value: 'Option2',\n          label: 'Option2'\n        }, {\n          value: 'Option3',\n          label: 'Option3'\n        }, {\n          value: 'Option4',\n          label: 'Option4'\n        }, {\n          value: 'Option5',\n          label: 'Option5'\n        }],\n        value: ''\n      }\n    }\n  }\n<\/script>\n")],-1),s=Object(a.createVNode)("h3",{id:"disabled-en-el-option"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#disabled-en-el-option"},"¶"),Object(a.createTextVNode)(" Disabled en el-option")],-1),u=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("Establezca el valor de "),Object(a.createVNode)("code",null,"disabled"),Object(a.createTextVNode)(" en "),Object(a.createVNode)("code",null,"el-option"),Object(a.createTextVNode)(" como "),Object(a.createVNode)("code",null,"true"),Object(a.createTextVNode)(" para deshabilitar esta opción.")])],-1),p=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},"<template>\n  <el-select v-model=\"value\" placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n      :disabled=\"item.disabled\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'Option1',\n          label: 'Option1'\n        }, {\n          value: 'Option2',\n          label: 'Option2',\n          disabled: true\n        }, {\n          value: 'Option3',\n          label: 'Option3'\n        }, {\n          value: 'Option4',\n          label: 'Option4'\n        }, {\n          value: 'Option5',\n          label: 'Option5'\n        }],\n        value: ''\n      }\n    }\n  }\n<\/script>\n")],-1),b=Object(a.createVNode)("h3",{id:"disabled-en-el-select"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#disabled-en-el-select"},"¶"),Object(a.createTextVNode)(" Disabled en el-select")],-1),m=Object(a.createVNode)("p",null,"Desactivar todo el componente.",-1),v=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("Configure "),Object(a.createVNode)("code",null,"disabled"),Object(a.createTextVNode)(" de "),Object(a.createVNode)("code",null,"el-select"),Object(a.createTextVNode)(" para deshabilitarla.")])],-1),O=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},"<template>\n  <el-select v-model=\"value\" disabled placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'Option1',\n          label: 'Option1'\n        }, {\n          value: 'Option2',\n          label: 'Option2'\n        }, {\n          value: 'Option3',\n          label: 'Option3'\n        }, {\n          value: 'Option4',\n          label: 'Option4'\n        }, {\n          value: 'Option5',\n          label: 'Option5'\n        }],\n        value: ''\n      }\n    }\n  }\n<\/script>\n")],-1),h=Object(a.createVNode)("h3",{id:"select-simple-limpiable"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#select-simple-limpiable"},"¶"),Object(a.createTextVNode)(" Select simple limpiable")],-1),j=Object(a.createVNode)("p",null,"Puede limpiar un Select con un icono.",-1),V=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("Establezca el atributo "),Object(a.createVNode)("code",null,"clearable"),Object(a.createTextVNode)(" para "),Object(a.createVNode)("code",null,"el-select"),Object(a.createTextVNode)(" y aparecerá un icono. Tenga en cuenta que la opción "),Object(a.createVNode)("code",null,"clearable"),Object(a.createTextVNode)(" es sólo para una selección individual.")])],-1),N=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},"<template>\n  <el-select v-model=\"value\" clearable placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'Option1',\n          label: 'Option1'\n        }, {\n          value: 'Option2',\n          label: 'Option2'\n        }, {\n          value: 'Option3',\n          label: 'Option3'\n        }, {\n          value: 'Option4',\n          label: 'Option4'\n        }, {\n          value: 'Option5',\n          label: 'Option5'\n        }],\n        value: ''\n      }\n    }\n  }\n<\/script>\n")],-1),g=Object(a.createVNode)("h3",{id:"seleccion-multiple-basica"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#seleccion-multiple-basica"},"¶"),Object(a.createTextVNode)(" Selección múltiple básica")],-1),f=Object(a.createVNode)("p",null,"Selección multiple utiliza tags para mostrar las opciones seleccionadas.",-1),x=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("Configure el atributo "),Object(a.createVNode)("code",null,"multiple"),Object(a.createTextVNode)(" para "),Object(a.createVNode)("code",null,"el-select"),Object(a.createTextVNode)(" para habilitar el modo múltiple. En este caso, el valor del "),Object(a.createVNode)("code",null,"v-model"),Object(a.createTextVNode)(" será un array de opciones seleccionadas. De forma predeterminada, las opciones seleccionadas se mostrarán como tags. Se pueden contraer a un texto utilizando el atributo "),Object(a.createVNode)("code",null,"collapse-tags"),Object(a.createTextVNode)(".")])],-1),C=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},'<template>\n  <el-select v-model="value1" multiple placeholder="Select">\n    <el-option\n      v-for="item in options"\n      :key="item.value"\n      :label="item.label"\n      :value="item.value">\n    </el-option>\n  </el-select>\n\n  <el-select\n    v-model="value2"\n    multiple\n    collapse-tags\n    style="margin-left: 20px;"\n    placeholder="Select">\n    <el-option\n        v-for="item in options"\n        :key="item.value"\n        :label="item.label"\n        :value="item.value">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: \'Option1\',\n          label: \'Option1\'\n        }, {\n          value: \'Option2\',\n          label: \'Option2\'\n        }, {\n          value: \'Option3\',\n          label: \'Option3\'\n        }, {\n          value: \'Option4\',\n          label: \'Option4\'\n        }, {\n          value: \'Option5\',\n          label: \'Option5\'\n        }],\n        value1: [],\n        value2: []\n      }\n    }\n  }\n<\/script>\n')],-1),y=Object(a.createVNode)("h3",{id:"personalizar-template"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#personalizar-template"},"¶"),Object(a.createTextVNode)(" Personalizar template")],-1),S=Object(a.createVNode)("p",null,"Puede personalizar templates HTML para las opciones.",-1),w=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("Inserte templates HTML personalizados en el slot de "),Object(a.createVNode)("code",null,"el-option"),Object(a.createTextVNode)(".")])],-1),T=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},"<template>\n  <el-select v-model=\"value\" placeholder=\"Select\">\n    <el-option\n      v-for=\"item in cities\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n      <span style=\"float: left\">{{ item.label }}</span>\n      <span style=\"float: right; color: #8492a6; font-size: 13px\">{{ item.value }}</span>\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        cities: [{\n          value: 'Beijing',\n          label: 'Beijing'\n        }, {\n          value: 'Shanghai',\n          label: 'Shanghai'\n        }, {\n          value: 'Nanjing',\n          label: 'Nanjing'\n        }, {\n          value: 'Chengdu',\n          label: 'Chengdu'\n        }, {\n          value: 'Shenzhen',\n          label: 'Shenzhen'\n        }, {\n          value: 'Guangzhou',\n          label: 'Guangzhou'\n        }],\n        value: ''\n      }\n    }\n  }\n<\/script>\n")],-1),k=Object(a.createVNode)("h3",{id:"agrupando"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#agrupando"},"¶"),Object(a.createTextVNode)(" Agrupando")],-1),z=Object(a.createVNode)("p",null,"Mostrar opciones en grupos.",-1),B=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("Utilice "),Object(a.createVNode)("code",null,"el-option-group"),Object(a.createTextVNode)(" para agrupar las opciones, y su atributo "),Object(a.createVNode)("code",null,"label"),Object(a.createTextVNode)(" representa el nombre del grupo.")])],-1),M=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},"<template>\n  <el-select v-model=\"value\" placeholder=\"Select\">\n    <el-option-group\n      v-for=\"group in options\"\n      :key=\"group.label\"\n      :label=\"group.label\">\n      <el-option\n        v-for=\"item in group.options\"\n        :key=\"item.value\"\n        :label=\"item.label\"\n        :value=\"item.value\">\n      </el-option>\n    </el-option-group>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          label: 'Popular cities',\n          options: [{\n            value: 'Shanghai',\n            label: 'Shanghai'\n          }, {\n            value: 'Beijing',\n            label: 'Beijing'\n          }]\n        }, {\n          label: 'City name',\n          options: [{\n            value: 'Chengdu',\n            label: 'Chengdu'\n          }, {\n            value: 'Shenzhen',\n            label: 'Shenzhen'\n          }, {\n            value: 'Guangzhou',\n            label: 'Guangzhou'\n          }, {\n            value: 'Dalian',\n            label: 'Dalian'\n          }]\n        }],\n        value: ''\n      }\n    }\n  }\n<\/script>\n")],-1),q=Object(a.createVNode)("h3",{id:"filtrado-de-opciones"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#filtrado-de-opciones"},"¶"),Object(a.createTextVNode)(" Filtrado de opciones")],-1),L=Object(a.createVNode)("p",null,"Puede filtrar opciones como lo desee.",-1),D=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("Añadir "),Object(a.createVNode)("code",null,"filterable"),Object(a.createTextVNode)(" a "),Object(a.createVNode)("code",null,"el-select"),Object(a.createTextVNode)(" permite filtrar. Por defecto, Select buscará todas las opciones cuyo atributo"),Object(a.createVNode)("code",null,"label"),Object(a.createTextVNode)(" contenga el valor del input. Si prefiere otras estrategias de filtrado, puede pasar el "),Object(a.createVNode)("code",null,"filter-method"),Object(a.createTextVNode)(". "),Object(a.createVNode)("code",null,"filter-method"),Object(a.createTextVNode)(" es una función que se llama cuando el valor del input cambia, y su parámetro es el valor del input actual.")])],-1),_=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},"<template>\n  <el-select v-model=\"value\" filterable placeholder=\"Select\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'Option1',\n          label: 'Option1'\n        }, {\n          value: 'Option2',\n          label: 'Option2'\n        }, {\n          value: 'Option3',\n          label: 'Option3'\n        }, {\n          value: 'Option4',\n          label: 'Option4'\n        }, {\n          value: 'Option5',\n          label: 'Option5'\n        }],\n        value: ''\n      }\n    }\n  }\n<\/script>\n")],-1),P=Object(a.createVNode)("h3",{id:"busqueda-remota"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#busqueda-remota"},"¶"),Object(a.createTextVNode)(" Búsqueda remota")],-1),A=Object(a.createVNode)("p",null,"Introduzca palabras y datos para buscar desde el servidor.",-1),U=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("Configure el valor de "),Object(a.createVNode)("code",null,"filterable"),Object(a.createTextVNode)(" y "),Object(a.createVNode)("code",null,"remote"),Object(a.createTextVNode)(" con "),Object(a.createVNode)("code",null,"true"),Object(a.createTextVNode)(" para habilitar la búsqueda remota, y debería pasar el método "),Object(a.createVNode)("code",null,"remote-method"),Object(a.createTextVNode)(". "),Object(a.createVNode)("code",null,"remote-method"),Object(a.createTextVNode)(" es una función que se llama cuando el valor del input cambia, y su parámetro es el valor del input actual. Tenga en cuenta que si "),Object(a.createVNode)("code",null,"el-option"),Object(a.createTextVNode)(" se presenta con la directiva "),Object(a.createVNode)("code",null,"v-for"),Object(a.createTextVNode)(", debe agregar el atributo "),Object(a.createVNode)("code",null,"key"),Object(a.createTextVNode)(" para "),Object(a.createVNode)("code",null,"el-option"),Object(a.createTextVNode)(". Su valor tiene que ser unívoco, como el valor de "),Object(a.createVNode)("code",null,"item.value"),Object(a.createTextVNode)(" en el ejemplo siguiente.")])],-1),F=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},'<template>\n  <el-select\n    v-model="value"\n    multiple\n    filterable\n    remote\n    reserve-keyword\n    placeholder="Please enter a keyword"\n    :remote-method="remoteMethod"\n    :loading="loading">\n    <el-option\n      v-for="item in options"\n      :key="item.value"\n      :label="item.label"\n      :value="item.value">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [],\n        value: [],\n        list: [],\n        loading: false,\n        states: ["Alabama", "Alaska", "Arizona",\n        "Arkansas", "California", "Colorado",\n        "Connecticut", "Delaware", "Florida",\n        "Georgia", "Hawaii", "Idaho", "Illinois",\n        "Indiana", "Iowa", "Kansas", "Kentucky",\n        "Louisiana", "Maine", "Maryland",\n        "Massachusetts", "Michigan", "Minnesota",\n        "Mississippi", "Missouri", "Montana",\n        "Nebraska", "Nevada", "New Hampshire",\n        "New Jersey", "New Mexico", "New York",\n        "North Carolina", "North Dakota", "Ohio",\n        "Oklahoma", "Oregon", "Pennsylvania",\n        "Rhode Island", "South Carolina",\n        "South Dakota", "Tennessee", "Texas",\n        "Utah", "Vermont", "Virginia",\n        "Washington", "West Virginia", "Wisconsin",\n        "Wyoming"]\n      }\n    },\n    mounted() {\n      this.list = this.states.map(item => {\n        return { value: `value:${item}`, label: `label:${item}` };\n      });\n    },\n    methods: {\n      remoteMethod(query) {\n        if (query !== \'\') {\n          this.loading = true;\n          setTimeout(() => {\n            this.loading = false;\n            this.options = this.list.filter(item => {\n              return item.label.toLowerCase()\n                .indexOf(query.toLowerCase()) > -1;\n            });\n          }, 200);\n        } else {\n          this.options = [];\n        }\n      }\n    }\n  }\n<\/script>\n')],-1),I=Object(a.createVNode)("h3",{id:"crear-nuevos-items"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#crear-nuevos-items"},"¶"),Object(a.createTextVNode)(" Crear nuevos items")],-1),G=Object(a.createVNode)("p",null,"Crear y seleccionar nuevos items que no están incluidas en las opciones de selección.",-1),H=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("Al utilizar el atributo "),Object(a.createVNode)("code",null,"allow-create"),Object(a.createTextVNode)(", los usuarios pueden crear nuevos elementos escribiendo en el cuadro del input. Tenga en cuenta que para que "),Object(a.createVNode)("code",null,"allow-create"),Object(a.createTextVNode)(" funcione, "),Object(a.createVNode)("code",null,"filterable"),Object(a.createTextVNode)(" debe ser "),Object(a.createVNode)("code",null,"true"),Object(a.createTextVNode)(".")])],-1),E=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},"<template>\n  <el-select\n    v-model=\"value\"\n    multiple\n    filterable\n    allow-create\n    placeholder=\"Choose tags for your article\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'HTML',\n          label: 'HTML'\n        }, {\n          value: 'CSS',\n          label: 'CSS'\n        }, {\n          value: 'JavaScript',\n          label: 'JavaScript'\n        }],\n        value: []\n      }\n    }\n  }\n<\/script>\n")],-1),J=Object(a.createStaticVNode)('<div class="tip"><p>Si el valor de encuadernación de Select es un objeto, asegúrese de asignar <code>value-key</code> como el nombre único de la clave de identidad.</p></div><h3 id="select-atributos"><a class="header-anchor" href="#select-atributos">¶</a> Select atributos</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>value / v-model</td><td>valor enlazado</td><td>boolean / string / number</td><td>—</td><td>—</td></tr><tr><td>multiple</td><td>si multiple-select esta activo</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>si Select esta deshabilitado</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>collapse-tags</td><td>si se colapsan los tags a un texto cuando <code>multiple</code> es <code>true</code>.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>value-key</td><td>nombre de clave de identidad única para el valor, necesario cuando el valor es un objeto.</td><td>string</td><td>—</td><td>value</td></tr><tr><td>size</td><td>tamaño del Input</td><td>string</td><td>large/small/mini</td><td>—</td></tr><tr><td>clearable</td><td>si el select puede ser limpiado</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>multiple-limit</td><td>máximo numero de opciones que el usuario puede seleccionar cuando <code>multiple</code> es <code>true</code>. Sin límite cuando se fija a 0</td><td>number</td><td>—</td><td>0</td></tr><tr><td>name</td><td>el atributo <code>name</code> del input seleccionado</td><td>string</td><td>—</td><td>—</td></tr><tr><td>autocomplete</td><td>el atributo <code>autocomplete</code> del input seleccionado</td><td>string</td><td>—</td><td>off</td></tr><tr><td>auto-complete</td><td>@DEPRECATED en la proxima major versión</td><td>string</td><td>—</td><td>off</td></tr><tr><td>placeholder</td><td>placeholder</td><td>string</td><td>—</td><td>Select</td></tr><tr><td>filterable</td><td>si Select es filtrable</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>allow-create</td><td>si esta permitido crear nuevos items. Para usar esto, <code>filterable</code> debe ser <code>true</code>.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>filter-method</td><td>método de filtrado personalizado</td><td>function</td><td>—</td><td>—</td></tr><tr><td>remote</td><td>si las opciones se traerán desde el servidor</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>remote-method</td><td>método de búsqueda remota personalizada</td><td>function</td><td>—</td><td>—</td></tr><tr><td>loading</td><td>si Select está cargando datos del servidor</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>loading-text</td><td>texto mostrado durante la carga de datos del servidor, también puedes usar la configuración de slot = &quot;empty&quot;</td><td>string</td><td>—</td><td>Loading</td></tr><tr><td>no-match-text</td><td>texto mostrado cuando ningún dato coincide con la consulta de filtrado. También puedes usar la configuración de slot = &quot;empty&quot;</td><td>string</td><td>—</td><td>No matching data</td></tr><tr><td>no-data-text</td><td>texto mostrado cuando no hay opciones</td><td>string</td><td>—</td><td>No data</td></tr><tr><td>popper-class</td><td>nombre de clase personalizado para el menú desplegable del Select</td><td>string</td><td>—</td><td>—</td></tr><tr><td>reserve-keyword</td><td>cuando <code>multiple</code> y <code>filter</code> es <code>true</code>, si se debe reservar la palabra clave actual después de seleccionar una opción.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>default-first-option</td><td>seleccione la primera opción de coincidencia en la tecla enter. Uso con <code>filterable</code> o <code>remote</code>.</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>popper-append-to-body</td><td>si añadir o no el menu popup al body. Si el posicionamiento del popup es incorrecto, puede intentar poner este <code>prop</code> en <code>false</code>.</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>automatic-dropdown</td><td>para non-filterable Select, este <code>prop</code> decide si el menú de opciones aparece cuando la entrada está enfocada</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>clear-icon</td><td>Clase personalizada para el icono <code>clear</code></td><td>string</td><td>—</td><td>el-icon-circle-close</td></tr></tbody></table><h3 id="eventos-select"><a class="header-anchor" href="#eventos-select">¶</a> Eventos Select</h3><table><thead><tr><th>Nombre</th><th>Descripción</th><th>Parametros</th></tr></thead><tbody><tr><td>change</td><td>se dispara cuando el valor del select cambia</td><td>valor actual del select</td></tr><tr><td>visible-change</td><td>se dispara cuando el menú desplegable aparece o desaparece</td><td>true cuando aparece, y false en otro caso</td></tr><tr><td>remove-tag</td><td>se dispara cuando un tag es removido en modo múltiple</td><td>el valor del tag removido</td></tr><tr><td>clear</td><td>se dispara cuando el icono se clickea en un Select limpiable</td><td>—</td></tr><tr><td>blur</td><td>se dispara cuando el input pierde el foco</td><td>(event: Event)</td></tr><tr><td>focus</td><td>se dispara cuando el input obtiene el foco</td><td>(event: Event)</td></tr></tbody></table><h3 id="select-slots"><a class="header-anchor" href="#select-slots">¶</a> Select Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>lista de los componentes Option</td></tr><tr><td>prefix</td><td>contenido prefix de un Select</td></tr><tr><td>empty</td><td>Lista sin opciones</td></tr></tbody></table><h3 id="atributos-del-grupo-de-opciones"><a class="header-anchor" href="#atributos-del-grupo-de-opciones">¶</a> Atributos del grupo de opciones</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>label</td><td>nombre del grupo</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>si se deshabilitan todas las opciones del grupo</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id="atributos-de-opciones"><a class="header-anchor" href="#atributos-de-opciones">¶</a> Atributos de opciones</h3><table><thead><tr><th>Atributo</th><th>Descripción</th><th>Tipo</th><th>Valores aceptados</th><th>Por defecto</th></tr></thead><tbody><tr><td>value</td><td>valor de option</td><td>string/number/object</td><td>—</td><td>—</td></tr><tr><td>label</td><td>etiqueta de option, es igual a <code>value</code> si se omite</td><td>string/number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>si option esta deshabilitado</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id="metodos"><a class="header-anchor" href="#metodos">¶</a> Metodos</h3><table><thead><tr><th>Metodo</th><th>Descripción</th><th>Parametros</th></tr></thead><tbody><tr><td>focus</td><td>Foco en el componente input</td><td>-</td></tr><tr><td>blur</td><td>Quita el focus del componente y oculta el dropdown</td><td>-</td></tr></tbody></table>',13);var W={name:"component-doc",components:{"element-demo0":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:o,resolveComponent:n,createVNode:d,withCtx:c}=a;const r={data:()=>({options:[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}],value:""})};return Object.assign({render:function(a,r){const i=n("el-option"),s=n("el-select");return l(),o("div",null,[d(s,{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=e=>a.value=e),placeholder:"Select"},{default:c(()=>[(l(!0),o(t,null,e(a.options,e=>(l(),o(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])}},r)}(),"element-demo1":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:o,resolveComponent:n,createVNode:d,withCtx:c}=a;const r={data:()=>({options:[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2",disabled:!0},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}],value:""})};return Object.assign({render:function(a,r){const i=n("el-option"),s=n("el-select");return l(),o("div",null,[d(s,{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=e=>a.value=e),placeholder:"Select"},{default:c(()=>[(l(!0),o(t,null,e(a.options,e=>(l(),o(i,{key:e.value,label:e.label,value:e.value,disabled:e.disabled},null,8,["label","value","disabled"]))),128))]),_:1},8,["modelValue"])])}},r)}(),"element-demo2":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:o,resolveComponent:n,createVNode:d,withCtx:c}=a;const r={data:()=>({options:[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}],value:""})};return Object.assign({render:function(a,r){const i=n("el-option"),s=n("el-select");return l(),o("div",null,[d(s,{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=e=>a.value=e),disabled:"",placeholder:"Select"},{default:c(()=>[(l(!0),o(t,null,e(a.options,e=>(l(),o(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])}},r)}(),"element-demo3":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:o,resolveComponent:n,createVNode:d,withCtx:c}=a;const r={data:()=>({options:[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}],value:""})};return Object.assign({render:function(a,r){const i=n("el-option"),s=n("el-select");return l(),o("div",null,[d(s,{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=e=>a.value=e),clearable:"",placeholder:"Select"},{default:c(()=>[(l(!0),o(t,null,e(a.options,e=>(l(),o(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])}},r)}(),"element-demo4":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:o,resolveComponent:n,createVNode:d,withCtx:c}=a;const r={data:()=>({options:[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}],value1:[],value2:[]})};return Object.assign({render:function(a,r){const i=n("el-option"),s=n("el-select");return l(),o("div",null,[d(s,{modelValue:a.value1,"onUpdate:modelValue":r[1]||(r[1]=e=>a.value1=e),multiple:"",placeholder:"Select"},{default:c(()=>[(l(!0),o(t,null,e(a.options,e=>(l(),o(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),d(s,{modelValue:a.value2,"onUpdate:modelValue":r[2]||(r[2]=e=>a.value2=e),multiple:"","collapse-tags":"",style:{"margin-left":"20px"},placeholder:"Select"},{default:c(()=>[(l(!0),o(t,null,e(a.options,e=>(l(),o(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])}},r)}(),"element-demo5":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:o,toDisplayString:n,createVNode:d,resolveComponent:c,withCtx:r}=a,i={style:{float:"left"}},s={style:{float:"right",color:"#8492a6","font-size":"13px"}};const u={data:()=>({cities:[{value:"Beijing",label:"Beijing"},{value:"Shanghai",label:"Shanghai"},{value:"Nanjing",label:"Nanjing"},{value:"Chengdu",label:"Chengdu"},{value:"Shenzhen",label:"Shenzhen"},{value:"Guangzhou",label:"Guangzhou"}],value:""})};return Object.assign({render:function(a,u){const p=c("el-option"),b=c("el-select");return l(),o("div",null,[d(b,{modelValue:a.value,"onUpdate:modelValue":u[1]||(u[1]=e=>a.value=e),placeholder:"Select"},{default:r(()=>[(l(!0),o(t,null,e(a.cities,e=>(l(),o(p,{key:e.value,label:e.label,value:e.value},{default:r(()=>[d("span",i,n(e.label),1),d("span",s,n(e.value),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])])}},u)}(),"element-demo6":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:o,resolveComponent:n,createVNode:d,withCtx:c}=a;const r={data:()=>({options:[{label:"Popular cities",options:[{value:"Shanghai",label:"Shanghai"},{value:"Beijing",label:"Beijing"}]},{label:"City name",options:[{value:"Chengdu",label:"Chengdu"},{value:"Shenzhen",label:"Shenzhen"},{value:"Guangzhou",label:"Guangzhou"},{value:"Dalian",label:"Dalian"}]}],value:""})};return Object.assign({render:function(a,r){const i=n("el-option"),s=n("el-option-group"),u=n("el-select");return l(),o("div",null,[d(u,{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=e=>a.value=e),placeholder:"Select"},{default:c(()=>[(l(!0),o(t,null,e(a.options,a=>(l(),o(s,{key:a.label,label:a.label},{default:c(()=>[(l(!0),o(t,null,e(a.options,e=>(l(),o(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])])}},r)}(),"element-demo7":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:o,resolveComponent:n,createVNode:d,withCtx:c}=a;const r={data:()=>({options:[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}],value:""})};return Object.assign({render:function(a,r){const i=n("el-option"),s=n("el-select");return l(),o("div",null,[d(s,{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=e=>a.value=e),filterable:"",placeholder:"Select"},{default:c(()=>[(l(!0),o(t,null,e(a.options,e=>(l(),o(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])}},r)}(),"element-demo8":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:o,resolveComponent:n,createVNode:d,withCtx:c}=a;const r={data:()=>({options:[],value:[],list:[],loading:!1,states:["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]}),mounted(){this.list=this.states.map(e=>({value:"value:"+e,label:"label:"+e}))},methods:{remoteMethod(e){""!==e?(this.loading=!0,setTimeout(()=>{this.loading=!1,this.options=this.list.filter(t=>t.label.toLowerCase().indexOf(e.toLowerCase())>-1)},200)):this.options=[]}}};return Object.assign({render:function(a,r){const i=n("el-option"),s=n("el-select");return l(),o("div",null,[d(s,{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=e=>a.value=e),multiple:"",filterable:"",remote:"","reserve-keyword":"",placeholder:"Please enter a keyword","remote-method":a.remoteMethod,loading:a.loading},{default:c(()=>[(l(!0),o(t,null,e(a.options,e=>(l(),o(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","remote-method","loading"])])}},r)}(),"element-demo9":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:o,resolveComponent:n,createVNode:d,withCtx:c}=a;const r={data:()=>({options:[{value:"HTML",label:"HTML"},{value:"CSS",label:"CSS"},{value:"JavaScript",label:"JavaScript"}],value:[]})};return Object.assign({render:function(a,r){const i=n("el-option"),s=n("el-select");return l(),o("div",null,[d(s,{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=e=>a.value=e),multiple:"",filterable:"","allow-create":"",placeholder:"Choose tags for your article"},{default:c(()=>[(l(!0),o(t,null,e(a.options,e=>(l(),o(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])}},r)}()},render:function(e,t,l,W,K,R){const Y=Object(a.resolveComponent)("element-demo0"),$=Object(a.resolveComponent)("demo-block"),Q=Object(a.resolveComponent)("element-demo1"),X=Object(a.resolveComponent)("element-demo2"),Z=Object(a.resolveComponent)("element-demo3"),ee=Object(a.resolveComponent)("element-demo4"),te=Object(a.resolveComponent)("element-demo5"),le=Object(a.resolveComponent)("element-demo6"),ae=Object(a.resolveComponent)("element-demo7"),oe=Object(a.resolveComponent)("element-demo8"),ne=Object(a.resolveComponent)("element-demo9");return Object(a.openBlock)(),Object(a.createBlock)("section",o,[n,d,c,Object(a.createVNode)($,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(Y)]),highlight:Object(a.withCtx)(()=>[i]),default:Object(a.withCtx)(()=>[r]),_:1}),s,Object(a.createVNode)($,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(Q)]),highlight:Object(a.withCtx)(()=>[p]),default:Object(a.withCtx)(()=>[u]),_:1}),b,m,Object(a.createVNode)($,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(X)]),highlight:Object(a.withCtx)(()=>[O]),default:Object(a.withCtx)(()=>[v]),_:1}),h,j,Object(a.createVNode)($,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(Z)]),highlight:Object(a.withCtx)(()=>[N]),default:Object(a.withCtx)(()=>[V]),_:1}),g,f,Object(a.createVNode)($,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(ee)]),highlight:Object(a.withCtx)(()=>[C]),default:Object(a.withCtx)(()=>[x]),_:1}),y,S,Object(a.createVNode)($,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(te)]),highlight:Object(a.withCtx)(()=>[T]),default:Object(a.withCtx)(()=>[w]),_:1}),k,z,Object(a.createVNode)($,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(le)]),highlight:Object(a.withCtx)(()=>[M]),default:Object(a.withCtx)(()=>[B]),_:1}),q,L,Object(a.createVNode)($,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(ae)]),highlight:Object(a.withCtx)(()=>[_]),default:Object(a.withCtx)(()=>[D]),_:1}),P,A,Object(a.createVNode)($,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(oe)]),highlight:Object(a.withCtx)(()=>[F]),default:Object(a.withCtx)(()=>[U]),_:1}),I,G,Object(a.createVNode)($,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(ne)]),highlight:Object(a.withCtx)(()=>[E]),default:Object(a.withCtx)(()=>[H]),_:1}),J])}};t.default=W}}]);