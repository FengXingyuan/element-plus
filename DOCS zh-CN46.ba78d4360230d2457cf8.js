(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{475:function(e,t,l){"use strict";l.r(t);var a=l(0);const n={class:"content element-doc"},o=Object(a.createVNode)("h2",{id:"select-xuan-ze-qi"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#select-xuan-ze-qi"},"¶"),Object(a.createTextVNode)(" Select 选择器")],-1),d=Object(a.createVNode)("p",null,"当选项过多时，使用下拉菜单展示并选择内容。",-1),c=Object(a.createVNode)("h3",{id:"ji-chu-yong-fa"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#ji-chu-yong-fa"},"¶"),Object(a.createTextVNode)(" 基础用法")],-1),r=Object(a.createVNode)("p",null,"适用广泛的基础单选",-1),u=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createVNode)("code",null,"v-model"),Object(a.createTextVNode)("的值为当前被选中的"),Object(a.createVNode)("code",null,"el-option"),Object(a.createTextVNode)("的 value 属性值")])],-1),i=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},"<template>\n  <el-select v-model=\"value\" placeholder=\"请选择\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: '选项1',\n          label: '黄金糕'\n        }, {\n          value: '选项2',\n          label: '双皮奶'\n        }, {\n          value: '选项3',\n          label: '蚵仔煎'\n        }, {\n          value: '选项4',\n          label: '龙须面'\n        }, {\n          value: '选项5',\n          label: '北京烤鸭'\n        }],\n        value: ''\n      }\n    }\n  }\n<\/script>\n")],-1),b=Object(a.createVNode)("h3",{id:"you-jin-yong-xuan-xiang"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#you-jin-yong-xuan-xiang"},"¶"),Object(a.createTextVNode)(" 有禁用选项")],-1),s=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("在"),Object(a.createVNode)("code",null,"el-option"),Object(a.createTextVNode)("中，设定"),Object(a.createVNode)("code",null,"disabled"),Object(a.createTextVNode)("值为 true，即可禁用该选项")])],-1),h=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},"<template>\n  <el-select v-model=\"value\" placeholder=\"请选择\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\"\n      :disabled=\"item.disabled\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: '选项1',\n          label: '黄金糕'\n        }, {\n          value: '选项2',\n          label: '双皮奶',\n          disabled: true\n        }, {\n          value: '选项3',\n          label: '蚵仔煎'\n        }, {\n          value: '选项4',\n          label: '龙须面'\n        }, {\n          value: '选项5',\n          label: '北京烤鸭'\n        }],\n        value: ''\n      }\n    }\n  }\n<\/script>\n")],-1),v=Object(a.createVNode)("h3",{id:"jin-yong-zhuang-tai"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#jin-yong-zhuang-tai"},"¶"),Object(a.createTextVNode)(" 禁用状态")],-1),p=Object(a.createVNode)("p",null,"选择器不可用状态",-1),m=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("为"),Object(a.createVNode)("code",null,"el-select"),Object(a.createTextVNode)("设置"),Object(a.createVNode)("code",null,"disabled"),Object(a.createTextVNode)("属性，则整个选择器不可用")])],-1),j=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},"<template>\n  <el-select v-model=\"value\" disabled placeholder=\"请选择\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: '选项1',\n          label: '黄金糕'\n        }, {\n          value: '选项2',\n          label: '双皮奶'\n        }, {\n          value: '选项3',\n          label: '蚵仔煎'\n        }, {\n          value: '选项4',\n          label: '龙须面'\n        }, {\n          value: '选项5',\n          label: '北京烤鸭'\n        }],\n        value: ''\n      }\n    }\n  }\n<\/script>\n")],-1),O=Object(a.createVNode)("h3",{id:"ke-qing-kong-dan-xuan"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#ke-qing-kong-dan-xuan"},"¶"),Object(a.createTextVNode)(" 可清空单选")],-1),V=Object(a.createVNode)("p",null,"包含清空按钮，可将选择器清空为初始状态",-1),N=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("为"),Object(a.createVNode)("code",null,"el-select"),Object(a.createTextVNode)("设置"),Object(a.createVNode)("code",null,"clearable"),Object(a.createTextVNode)("属性，则可将选择器清空。需要注意的是，"),Object(a.createVNode)("code",null,"clearable"),Object(a.createTextVNode)("属性仅适用于单选。")])],-1),f=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},"<template>\n  <el-select v-model=\"value\" clearable placeholder=\"请选择\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: '选项1',\n          label: '黄金糕'\n        }, {\n          value: '选项2',\n          label: '双皮奶'\n        }, {\n          value: '选项3',\n          label: '蚵仔煎'\n        }, {\n          value: '选项4',\n          label: '龙须面'\n        }, {\n          value: '选项5',\n          label: '北京烤鸭'\n        }],\n        value: ''\n      }\n    }\n  }\n<\/script>\n")],-1),g=Object(a.createVNode)("h3",{id:"ji-chu-duo-xuan"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#ji-chu-duo-xuan"},"¶"),Object(a.createTextVNode)(" 基础多选")],-1),x=Object(a.createVNode)("p",null,"适用性较广的基础多选，用 Tag 展示已选项",-1),C=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("为"),Object(a.createVNode)("code",null,"el-select"),Object(a.createTextVNode)("设置"),Object(a.createVNode)("code",null,"multiple"),Object(a.createTextVNode)("属性即可启用多选，此时"),Object(a.createVNode)("code",null,"v-model"),Object(a.createTextVNode)("的值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现，你也可以设置"),Object(a.createVNode)("code",null,"collapse-tags"),Object(a.createTextVNode)("属性将它们合并为一段文字。")])],-1),y=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},'<template>\n  <el-select v-model="value1" multiple placeholder="请选择">\n    <el-option\n      v-for="item in options"\n      :key="item.value"\n      :label="item.label"\n      :value="item.value">\n    </el-option>\n  </el-select>\n\n  <el-select\n    v-model="value2"\n    multiple\n    collapse-tags\n    style="margin-left: 20px;"\n    placeholder="请选择">\n    <el-option\n      v-for="item in options"\n      :key="item.value"\n      :label="item.label"\n      :value="item.value">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: \'选项1\',\n          label: \'黄金糕\'\n        }, {\n          value: \'选项2\',\n          label: \'双皮奶\'\n        }, {\n          value: \'选项3\',\n          label: \'蚵仔煎\'\n        }, {\n          value: \'选项4\',\n          label: \'龙须面\'\n        }, {\n          value: \'选项5\',\n          label: \'北京烤鸭\'\n        }],\n        value1: [],\n        value2: []\n      }\n    }\n  }\n<\/script>\n')],-1),k=Object(a.createVNode)("h3",{id:"zi-ding-yi-mo-ban"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#zi-ding-yi-mo-ban"},"¶"),Object(a.createTextVNode)(" 自定义模板")],-1),w=Object(a.createVNode)("p",null,"可以自定义备选项",-1),T=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("将自定义的 HTML 模板插入"),Object(a.createVNode)("code",null,"el-option"),Object(a.createTextVNode)("的 slot 中即可。")])],-1),S=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},"<template>\n  <el-select v-model=\"value\" placeholder=\"请选择\">\n    <el-option\n      v-for=\"item in cities\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n      <span style=\"float: left\">{{ item.label }}</span>\n      <span style=\"float: right; color: #8492a6; font-size: 13px\">{{ item.value }}</span>\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        cities: [{\n          value: 'Beijing',\n          label: '北京'\n        }, {\n          value: 'Shanghai',\n          label: '上海'\n        }, {\n          value: 'Nanjing',\n          label: '南京'\n        }, {\n          value: 'Chengdu',\n          label: '成都'\n        }, {\n          value: 'Shenzhen',\n          label: '深圳'\n        }, {\n          value: 'Guangzhou',\n          label: '广州'\n        }],\n        value: ''\n      }\n    }\n  }\n<\/script>\n")],-1),M=Object(a.createVNode)("h3",{id:"fen-zu"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#fen-zu"},"¶"),Object(a.createTextVNode)(" 分组")],-1),B=Object(a.createVNode)("p",null,"备选项进行分组展示",-1),_=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("使用"),Object(a.createVNode)("code",null,"el-option-group"),Object(a.createTextVNode)("对备选项进行分组，它的"),Object(a.createVNode)("code",null,"label"),Object(a.createTextVNode)("属性为分组名")])],-1),z=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},"<template>\n  <el-select v-model=\"value\" placeholder=\"请选择\">\n    <el-option-group\n      v-for=\"group in options\"\n      :key=\"group.label\"\n      :label=\"group.label\">\n      <el-option\n        v-for=\"item in group.options\"\n        :key=\"item.value\"\n        :label=\"item.label\"\n        :value=\"item.value\">\n      </el-option>\n    </el-option-group>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          label: '热门城市',\n          options: [{\n            value: 'Shanghai',\n            label: '上海'\n          }, {\n            value: 'Beijing',\n            label: '北京'\n          }]\n        }, {\n          label: '城市名',\n          options: [{\n            value: 'Chengdu',\n            label: '成都'\n          }, {\n            value: 'Shenzhen',\n            label: '深圳'\n          }, {\n            value: 'Guangzhou',\n            label: '广州'\n          }, {\n            value: 'Dalian',\n            label: '大连'\n          }]\n        }],\n        value: ''\n      }\n    }\n  }\n<\/script>\n")],-1),L=Object(a.createVNode)("h3",{id:"ke-sou-suo"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#ke-sou-suo"},"¶"),Object(a.createTextVNode)(" 可搜索")],-1),F=Object(a.createVNode)("p",null,"可以利用搜索功能快速查找选项",-1),U=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("为"),Object(a.createVNode)("code",null,"el-select"),Object(a.createTextVNode)("添加"),Object(a.createVNode)("code",null,"filterable"),Object(a.createTextVNode)("属性即可启用搜索功能。默认情况下，Select 会找出所有"),Object(a.createVNode)("code",null,"label"),Object(a.createTextVNode)("属性包含输入值的选项。如果希望使用其他的搜索逻辑，可以通过传入一个"),Object(a.createVNode)("code",null,"filter-method"),Object(a.createTextVNode)("来实现。"),Object(a.createVNode)("code",null,"filter-method"),Object(a.createTextVNode)("为一个"),Object(a.createVNode)("code",null,"Function"),Object(a.createTextVNode)("，它会在输入值发生变化时调用，参数为当前输入值。")])],-1),q=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},"<template>\n  <el-select v-model=\"value\" filterable placeholder=\"请选择\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: '选项1',\n          label: '黄金糕'\n        }, {\n          value: '选项2',\n          label: '双皮奶'\n        }, {\n          value: '选项3',\n          label: '蚵仔煎'\n        }, {\n          value: '选项4',\n          label: '龙须面'\n        }, {\n          value: '选项5',\n          label: '北京烤鸭'\n        }],\n        value: ''\n      }\n    }\n  }\n<\/script>\n")],-1),A=Object(a.createVNode)("h3",{id:"yuan-cheng-sou-suo"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#yuan-cheng-sou-suo"},"¶"),Object(a.createTextVNode)(" 远程搜索")],-1),I=Object(a.createVNode)("p",null,"从服务器搜索数据，输入关键字进行查找",-1),D=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("为了启用远程搜索，需要将"),Object(a.createVNode)("code",null,"filterable"),Object(a.createTextVNode)("和"),Object(a.createVNode)("code",null,"remote"),Object(a.createTextVNode)("设置为"),Object(a.createVNode)("code",null,"true"),Object(a.createTextVNode)("，同时传入一个"),Object(a.createVNode)("code",null,"remote-method"),Object(a.createTextVNode)("。"),Object(a.createVNode)("code",null,"remote-method"),Object(a.createTextVNode)("为一个"),Object(a.createVNode)("code",null,"Function"),Object(a.createTextVNode)("，它会在输入值发生变化时调用，参数为当前输入值。需要注意的是，如果"),Object(a.createVNode)("code",null,"el-option"),Object(a.createTextVNode)("是通过"),Object(a.createVNode)("code",null,"v-for"),Object(a.createTextVNode)("指令渲染出来的，此时需要为"),Object(a.createVNode)("code",null,"el-option"),Object(a.createTextVNode)("添加"),Object(a.createVNode)("code",null,"key"),Object(a.createTextVNode)("属性，且其值需具有唯一性，比如此例中的"),Object(a.createVNode)("code",null,"item.value"),Object(a.createTextVNode)("。")])],-1),H=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},'<template>\n  <el-select\n    v-model="value"\n    multiple\n    filterable\n    remote\n    reserve-keyword\n    placeholder="请输入关键词"\n    :remote-method="remoteMethod"\n    :loading="loading">\n    <el-option\n      v-for="item in options"\n      :key="item.value"\n      :label="item.label"\n      :value="item.value">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [],\n        value: [],\n        list: [],\n        loading: false,\n        states: ["Alabama", "Alaska", "Arizona",\n        "Arkansas", "California", "Colorado",\n        "Connecticut", "Delaware", "Florida",\n        "Georgia", "Hawaii", "Idaho", "Illinois",\n        "Indiana", "Iowa", "Kansas", "Kentucky",\n        "Louisiana", "Maine", "Maryland",\n        "Massachusetts", "Michigan", "Minnesota",\n        "Mississippi", "Missouri", "Montana",\n        "Nebraska", "Nevada", "New Hampshire",\n        "New Jersey", "New Mexico", "New York",\n        "North Carolina", "North Dakota", "Ohio",\n        "Oklahoma", "Oregon", "Pennsylvania",\n        "Rhode Island", "South Carolina",\n        "South Dakota", "Tennessee", "Texas",\n        "Utah", "Vermont", "Virginia",\n        "Washington", "West Virginia", "Wisconsin",\n        "Wyoming"]\n      }\n    },\n    mounted() {\n      this.list = this.states.map(item => {\n        return { value: `value:${item}`, label: `label:${item}` };\n      });\n    },\n    methods: {\n      remoteMethod(query) {\n        if (query !== \'\') {\n          this.loading = true;\n          setTimeout(() => {\n            this.loading = false;\n            this.options = this.list.filter(item => {\n              return item.label.toLowerCase()\n                .indexOf(query.toLowerCase()) > -1;\n            });\n          }, 200);\n        } else {\n          this.options = [];\n        }\n      }\n    }\n  }\n<\/script>\n')],-1),J=Object(a.createVNode)("h3",{id:"chuang-jian-tiao-mu"},[Object(a.createVNode)("a",{class:"header-anchor",href:"#chuang-jian-tiao-mu"},"¶"),Object(a.createTextVNode)(" 创建条目")],-1),W=Object(a.createVNode)("p",null,"可以创建并选中选项中不存在的条目",-1),G=Object(a.createVNode)("div",null,[Object(a.createVNode)("p",null,[Object(a.createTextVNode)("使用"),Object(a.createVNode)("code",null,"allow-create"),Object(a.createTextVNode)("属性即可通过在输入框中输入文字来创建新的条目。注意此时"),Object(a.createVNode)("code",null,"filterable"),Object(a.createTextVNode)("必须为真。本例还使用了"),Object(a.createVNode)("code",null,"default-first-option"),Object(a.createTextVNode)("属性，在该属性打开的情况下，按下回车就可以选中当前选项列表中的第一个选项，无需使用鼠标或键盘方向键进行定位。")])],-1),K=Object(a.createVNode)("pre",null,[Object(a.createVNode)("code",{class:"html"},"<template>\n  <el-select\n    v-model=\"value\"\n    multiple\n    filterable\n    allow-create\n    default-first-option\n    placeholder=\"请选择文章标签\">\n    <el-option\n      v-for=\"item in options\"\n      :key=\"item.value\"\n      :label=\"item.label\"\n      :value=\"item.value\">\n    </el-option>\n  </el-select>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        options: [{\n          value: 'HTML',\n          label: 'HTML'\n        }, {\n          value: 'CSS',\n          label: 'CSS'\n        }, {\n          value: 'JavaScript',\n          label: 'JavaScript'\n        }],\n        value: []\n      }\n    }\n  }\n<\/script>\n")],-1),E=Object(a.createStaticVNode)('<div class="tip"><p>如果 Select 的绑定值为对象类型，请务必指定 <code>value-key</code> 作为它的唯一性标识。</p></div><h3 id="select-attributes"><a class="header-anchor" href="#select-attributes">¶</a> Select Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value / v-model</td><td>绑定值</td><td>boolean / string / number</td><td>—</td><td>—</td></tr><tr><td>multiple</td><td>是否多选</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>value-key</td><td>作为 value 唯一标识的键名，绑定值为对象类型时必填</td><td>string</td><td>—</td><td>value</td></tr><tr><td>size</td><td>输入框尺寸</td><td>string</td><td>medium/small/mini</td><td>—</td></tr><tr><td>clearable</td><td>是否可以清空选项</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>collapse-tags</td><td>多选时是否将选中值按文字的形式展示</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>multiple-limit</td><td>多选时用户最多可以选择的项目数，为 0 则不限制</td><td>number</td><td>—</td><td>0</td></tr><tr><td>name</td><td>select input 的 name 属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>autocomplete</td><td>select input 的 autocomplete 属性</td><td>string</td><td>—</td><td>off</td></tr><tr><td>auto-complete</td><td>下个主版本弃用</td><td>string</td><td>—</td><td>off</td></tr><tr><td>placeholder</td><td>占位符</td><td>string</td><td>—</td><td>请选择</td></tr><tr><td>filterable</td><td>是否可搜索</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>allow-create</td><td>是否允许用户创建新条目，需配合 <code>filterable</code> 使用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>filter-method</td><td>自定义搜索方法</td><td>function</td><td>—</td><td>—</td></tr><tr><td>remote</td><td>是否为远程搜索</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>remote-method</td><td>远程搜索方法</td><td>function</td><td>—</td><td>—</td></tr><tr><td>loading</td><td>是否正在从远程获取数据</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>loading-text</td><td>远程加载时显示的文字</td><td>string</td><td>—</td><td>加载中</td></tr><tr><td>no-match-text</td><td>搜索条件无匹配时显示的文字，也可以使用<code>slot=&quot;empty&quot;</code>设置</td><td>string</td><td>—</td><td>无匹配数据</td></tr><tr><td>no-data-text</td><td>选项为空时显示的文字，也可以使用<code>slot=&quot;empty&quot;</code>设置</td><td>string</td><td>—</td><td>无数据</td></tr><tr><td>popper-class</td><td>Select 下拉框的类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>reserve-keyword</td><td>多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>default-first-option</td><td>在输入框按下回车，选择第一个匹配项。需配合 <code>filterable</code> 或 <code>remote</code> 使用</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>popper-append-to-body</td><td>是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>automatic-dropdown</td><td>对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>clear-icon</td><td>自定义清空图标的类名</td><td>string</td><td>—</td><td>el-icon-circle-close</td></tr></tbody></table><h3 id="select-events"><a class="header-anchor" href="#select-events">¶</a> Select Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>选中值发生变化时触发</td><td>目前的选中值</td></tr><tr><td>visible-change</td><td>下拉框出现/隐藏时触发</td><td>出现则为 true，隐藏则为 false</td></tr><tr><td>remove-tag</td><td>多选模式下移除tag时触发</td><td>移除的tag值</td></tr><tr><td>clear</td><td>可清空的单选模式下用户点击清空按钮时触发</td><td>—</td></tr><tr><td>blur</td><td>当 input 失去焦点时触发</td><td>(event: Event)</td></tr><tr><td>focus</td><td>当 input 获得焦点时触发</td><td>(event: Event)</td></tr></tbody></table><h3 id="select-slots"><a class="header-anchor" href="#select-slots">¶</a> Select Slots</h3><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>Option 组件列表</td></tr><tr><td>prefix</td><td>Select 组件头部内容</td></tr><tr><td>empty</td><td>无选项时的列表</td></tr></tbody></table><h3 id="option-group-attributes"><a class="header-anchor" href="#option-group-attributes">¶</a> Option Group Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>分组的组名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否将该分组下所有选项置为禁用</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id="option-attributes"><a class="header-anchor" href="#option-attributes">¶</a> Option Attributes</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>选项的值</td><td>string/number/object</td><td>—</td><td>—</td></tr><tr><td>label</td><td>选项的标签，若不设置则默认与 <code>value</code> 相同</td><td>string/number</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用该选项</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id="methods"><a class="header-anchor" href="#methods">¶</a> Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>使 input 获取焦点</td><td>-</td></tr><tr><td>blur</td><td>使 input 失去焦点，并隐藏下拉框</td><td>-</td></tr></tbody></table>',13);var P={name:"component-doc",components:{"element-demo0":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:n,resolveComponent:o,createVNode:d,withCtx:c}=a;const r={data:()=>({options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value:""})};return Object.assign({render:function(a,r){const u=o("el-option"),i=o("el-select");return l(),n("div",null,[d(i,{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=e=>a.value=e),placeholder:"请选择"},{default:c(()=>[(l(!0),n(t,null,e(a.options,e=>(l(),n(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])}},r)}(),"element-demo1":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:n,resolveComponent:o,createVNode:d,withCtx:c}=a;const r={data:()=>({options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶",disabled:!0},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value:""})};return Object.assign({render:function(a,r){const u=o("el-option"),i=o("el-select");return l(),n("div",null,[d(i,{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=e=>a.value=e),placeholder:"请选择"},{default:c(()=>[(l(!0),n(t,null,e(a.options,e=>(l(),n(u,{key:e.value,label:e.label,value:e.value,disabled:e.disabled},null,8,["label","value","disabled"]))),128))]),_:1},8,["modelValue"])])}},r)}(),"element-demo2":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:n,resolveComponent:o,createVNode:d,withCtx:c}=a;const r={data:()=>({options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value:""})};return Object.assign({render:function(a,r){const u=o("el-option"),i=o("el-select");return l(),n("div",null,[d(i,{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=e=>a.value=e),disabled:"",placeholder:"请选择"},{default:c(()=>[(l(!0),n(t,null,e(a.options,e=>(l(),n(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])}},r)}(),"element-demo3":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:n,resolveComponent:o,createVNode:d,withCtx:c}=a;const r={data:()=>({options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value:""})};return Object.assign({render:function(a,r){const u=o("el-option"),i=o("el-select");return l(),n("div",null,[d(i,{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=e=>a.value=e),clearable:"",placeholder:"请选择"},{default:c(()=>[(l(!0),n(t,null,e(a.options,e=>(l(),n(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])}},r)}(),"element-demo4":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:n,resolveComponent:o,createVNode:d,withCtx:c}=a;const r={data:()=>({options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value1:[],value2:[]})};return Object.assign({render:function(a,r){const u=o("el-option"),i=o("el-select");return l(),n("div",null,[d(i,{modelValue:a.value1,"onUpdate:modelValue":r[1]||(r[1]=e=>a.value1=e),multiple:"",placeholder:"请选择"},{default:c(()=>[(l(!0),n(t,null,e(a.options,e=>(l(),n(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),d(i,{modelValue:a.value2,"onUpdate:modelValue":r[2]||(r[2]=e=>a.value2=e),multiple:"","collapse-tags":"",style:{"margin-left":"20px"},placeholder:"请选择"},{default:c(()=>[(l(!0),n(t,null,e(a.options,e=>(l(),n(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])}},r)}(),"element-demo5":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:n,toDisplayString:o,createVNode:d,resolveComponent:c,withCtx:r}=a,u={style:{float:"left"}},i={style:{float:"right",color:"#8492a6","font-size":"13px"}};const b={data:()=>({cities:[{value:"Beijing",label:"北京"},{value:"Shanghai",label:"上海"},{value:"Nanjing",label:"南京"},{value:"Chengdu",label:"成都"},{value:"Shenzhen",label:"深圳"},{value:"Guangzhou",label:"广州"}],value:""})};return Object.assign({render:function(a,b){const s=c("el-option"),h=c("el-select");return l(),n("div",null,[d(h,{modelValue:a.value,"onUpdate:modelValue":b[1]||(b[1]=e=>a.value=e),placeholder:"请选择"},{default:r(()=>[(l(!0),n(t,null,e(a.cities,e=>(l(),n(s,{key:e.value,label:e.label,value:e.value},{default:r(()=>[d("span",u,o(e.label),1),d("span",i,o(e.value),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])])}},b)}(),"element-demo6":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:n,resolveComponent:o,createVNode:d,withCtx:c}=a;const r={data:()=>({options:[{label:"热门城市",options:[{value:"Shanghai",label:"上海"},{value:"Beijing",label:"北京"}]},{label:"城市名",options:[{value:"Chengdu",label:"成都"},{value:"Shenzhen",label:"深圳"},{value:"Guangzhou",label:"广州"},{value:"Dalian",label:"大连"}]}],value:""})};return Object.assign({render:function(a,r){const u=o("el-option"),i=o("el-option-group"),b=o("el-select");return l(),n("div",null,[d(b,{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=e=>a.value=e),placeholder:"请选择"},{default:c(()=>[(l(!0),n(t,null,e(a.options,a=>(l(),n(i,{key:a.label,label:a.label},{default:c(()=>[(l(!0),n(t,null,e(a.options,e=>(l(),n(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])])}},r)}(),"element-demo7":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:n,resolveComponent:o,createVNode:d,withCtx:c}=a;const r={data:()=>({options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value:""})};return Object.assign({render:function(a,r){const u=o("el-option"),i=o("el-select");return l(),n("div",null,[d(i,{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=e=>a.value=e),filterable:"",placeholder:"请选择"},{default:c(()=>[(l(!0),n(t,null,e(a.options,e=>(l(),n(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])}},r)}(),"element-demo8":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:n,resolveComponent:o,createVNode:d,withCtx:c}=a;const r={data:()=>({options:[],value:[],list:[],loading:!1,states:["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]}),mounted(){this.list=this.states.map(e=>({value:"value:"+e,label:"label:"+e}))},methods:{remoteMethod(e){""!==e?(this.loading=!0,setTimeout(()=>{this.loading=!1,this.options=this.list.filter(t=>t.label.toLowerCase().indexOf(e.toLowerCase())>-1)},200)):this.options=[]}}};return Object.assign({render:function(a,r){const u=o("el-option"),i=o("el-select");return l(),n("div",null,[d(i,{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=e=>a.value=e),multiple:"",filterable:"",remote:"","reserve-keyword":"",placeholder:"请输入关键词","remote-method":a.remoteMethod,loading:a.loading},{default:c(()=>[(l(!0),n(t,null,e(a.options,e=>(l(),n(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","remote-method","loading"])])}},r)}(),"element-demo9":function(){const{renderList:e,Fragment:t,openBlock:l,createBlock:n,resolveComponent:o,createVNode:d,withCtx:c}=a;const r={data:()=>({options:[{value:"HTML",label:"HTML"},{value:"CSS",label:"CSS"},{value:"JavaScript",label:"JavaScript"}],value:[]})};return Object.assign({render:function(a,r){const u=o("el-option"),i=o("el-select");return l(),n("div",null,[d(i,{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=e=>a.value=e),multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"请选择文章标签"},{default:c(()=>[(l(!0),n(t,null,e(a.options,e=>(l(),n(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])}},r)}()},render:function(e,t,l,P,R,Y){const $=Object(a.resolveComponent)("element-demo0"),Q=Object(a.resolveComponent)("demo-block"),X=Object(a.resolveComponent)("element-demo1"),Z=Object(a.resolveComponent)("element-demo2"),ee=Object(a.resolveComponent)("element-demo3"),te=Object(a.resolveComponent)("element-demo4"),le=Object(a.resolveComponent)("element-demo5"),ae=Object(a.resolveComponent)("element-demo6"),ne=Object(a.resolveComponent)("element-demo7"),oe=Object(a.resolveComponent)("element-demo8"),de=Object(a.resolveComponent)("element-demo9");return Object(a.openBlock)(),Object(a.createBlock)("section",n,[o,d,c,r,Object(a.createVNode)(Q,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)($)]),highlight:Object(a.withCtx)(()=>[i]),default:Object(a.withCtx)(()=>[u]),_:1}),b,Object(a.createVNode)(Q,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(X)]),highlight:Object(a.withCtx)(()=>[h]),default:Object(a.withCtx)(()=>[s]),_:1}),v,p,Object(a.createVNode)(Q,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(Z)]),highlight:Object(a.withCtx)(()=>[j]),default:Object(a.withCtx)(()=>[m]),_:1}),O,V,Object(a.createVNode)(Q,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(ee)]),highlight:Object(a.withCtx)(()=>[f]),default:Object(a.withCtx)(()=>[N]),_:1}),g,x,Object(a.createVNode)(Q,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(te)]),highlight:Object(a.withCtx)(()=>[y]),default:Object(a.withCtx)(()=>[C]),_:1}),k,w,Object(a.createVNode)(Q,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(le)]),highlight:Object(a.withCtx)(()=>[S]),default:Object(a.withCtx)(()=>[T]),_:1}),M,B,Object(a.createVNode)(Q,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(ae)]),highlight:Object(a.withCtx)(()=>[z]),default:Object(a.withCtx)(()=>[_]),_:1}),L,F,Object(a.createVNode)(Q,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(ne)]),highlight:Object(a.withCtx)(()=>[q]),default:Object(a.withCtx)(()=>[U]),_:1}),A,I,Object(a.createVNode)(Q,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(oe)]),highlight:Object(a.withCtx)(()=>[H]),default:Object(a.withCtx)(()=>[D]),_:1}),J,W,Object(a.createVNode)(Q,null,{source:Object(a.withCtx)(()=>[Object(a.createVNode)(de)]),highlight:Object(a.withCtx)(()=>[K]),default:Object(a.withCtx)(()=>[G]),_:1}),E])}};t.default=P}}]);