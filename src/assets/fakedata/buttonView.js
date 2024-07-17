const codeBlock = [
[
`<fox_button :label="'BUTTON'"></fox_button>
<fox_button :label="'BUTTON'" darkMode></fox_button>
<fox_button :label="getLabel(dmode)" :darkMode="dmode" @onClick="dmode=!dmode"></fox_button>`,
`export default {
  data() {
    return {
      dmode: true,
    }
  },
  methods: {
    getLabel(m) {
      return '点击切换' + (m ? '亮色' : '深色') + '模式';
    }
  },
}`
],

[
`<fox_button :label="'LARGE BUTTON'" darkMode large></fox_button>
<fox_button :label="'NORMAL BUTTON'" darkMode></fox_button>
<fox_button :label="'MINI BUTTON'" darkMode mini></fox_button>`,
`code`,
],

[
`<fox_button :label="'PINK BUTTON'" darkMode :themeColor="'pink'"></fox_button>
<fox_button :label="'ORANGE BUTTON'" darkMode :bgColor="'#409EFF'" :textColor="['white', 'orange', 'lightgreen']"></fox_button>
<fox_button :label="'BUTTON'" darkMode :borderRadius="0"></fox_button>`,
`code`,
],

[
`<fox_button :label="'BUTTON'" darkMode>
  <template v-slot:icon>
    <div style="width: 40px;height: 40px;background-color: red;font-size: 12px;">图标插槽在这</div>
  </template>
  <template v-slot:label>
    <div style="width: 40px;height: 40px;background-color: purple;font-size: 12px;">文本插槽在这</div>
  </template>
</fox_button>
<fox_button :label="'BUTTON'" darkMode>
  <template v-slot:customInner>
    <div style="width: 40px;height: 40px;background-color: red;font-size: 12px;">完全自定义按钮内容插槽</div>
  </template>
</fox_button>`,
`code`,
],

[
`<fox_button :label="'BUTTON'" darkMode :iconPosition="'right'" :iconGap="'50px'">
  <template v-slot:icon>
    <div style="width: 40px;height: 40px;background-color: red;font-size: 12px;">图标插槽在这</div>
  </template>
  <template v-slot:label>
    <div style="width: 40px;height: 40px;background-color: purple;font-size: 12px;">文本插槽在这</div>
  </template>
</fox_button>`,
`code`,
]
  
];
const paramList = [
  {
    prop: 'label',
    name: '按钮文本',
    type: [
      'String',
    ],
    default: '-',
    optional: [
      '-',
    ],
    desc: [
      '按钮显示的文本',
    ],
    tag: 'params',
  },

  {
    prop: 'themeColor',
    name: '主题颜色',
    type: [
      'String',
    ],
    default: 'aqua',
    optional: [
      '任意颜色字符串',
    ],
    desc: [
      '按钮鼠标悬浮后的光效颜色和文字高亮颜色',
    ],
    tag: 'params',
  },

  {
    prop: 'bgColor',
    name: '背景颜色',
    type: [
      'String',
    ],
    default: '-',
    optional: [
      '任意颜色字符串',
    ],
    desc: [
      '按钮背景颜色',
    ],
    tag: 'params',
  },

  {
    prop: 'textColor',
    name: '文字颜色',
    type: [
      'Array',
      'String',
    ],
    default: '-',
    optional: [
      '任意颜色字符串',
      "包含三种颜色的数组['默认颜色', '悬浮颜色', '激活颜色']",
    ],
    desc: [
      '当参数为字符串时，按钮文字的默认颜色、悬浮颜色、激活颜色都为参数颜色',
      '当参数为数组时，按钮文字颜色一一对应，参数数量不足的以默认颜色和主题色补全',
    ],
    tag: 'params',
  },

  {
    prop: 'borderRadius',
    name: '按钮边框圆角',
    type: [
      'String',
      'Number',
    ],
    default: 'auto',
    optional: [
      'auto',
      '数字或字符串',
    ],
    desc: [
      '当参数为auto时，按钮来决定自身圆角',
      '当参数为数字或字符串时，如果带有单位则使用参数单位。参数没有单位则默认使用px为单位',
    ],
    tag: 'params',
  },

  {
    prop: 'customInner',
    name: '完全自定义按钮内容',
    type: [
      'Boolean',
    ],
    default: 'false',
    optional: [
      'true',
      'false',
    ],
    desc: [
      '此项开启后会使label属性、icon插槽、label插槽失效。按钮内此时只显示customInner插槽内的DOM元素',
      '如果向要使用完全自定义按钮内容，直接使用customInner插槽就好。这个参数没啥用',
    ],
    tag: 'params',
  },

  {
    prop: 'mini & large',
    name: '按钮尺寸 小 & 大',
    type: [
      'Boolean',
    ],
    default: 'false',
    optional: [
      'true',
      'false',
    ],
    desc: [
      '当参数为true时生效。同时存在mini属性和large属性且都为true时，优先large',
      '这两个的优先级没有size参数高',
    ],
    tag: 'params',
  },

  {
    prop: 'size',
    name: '按钮尺寸',
    type: [
      'String',
    ],
    default: 'normal',
    optional: [
      'large',
      'normal',
      'mini',
    ],
    desc: [
      '按钮尺寸 large 大 > normal 中(默认) > mini 小',
      '优先级高于单尺寸属性',
    ],
    tag: 'params',
  },

  {
    prop: 'darkMode',
    name: '暗色模式',
    type: [
      'Boolean',
    ],
    default: 'false',
    optional: [
      'true',
      'false',
    ],
    desc: [
      '启用暗色模式好看一点点(大概)',
    ],
    tag: 'params',
  },

  {
    prop: 'iconPosition',
    name: '图标与文字相对位置',
    type: [
      'String',
    ],
    default: 'left',
    optional: [
      'left',
      'right',
    ],
    desc: [
      '图标与文字相对位置',
    ],
    tag: 'params',
  },

  {
    prop: 'iconGap',
    name: '图标与文字间距',
    type: [
      'String',
    ],
    default: '5px',
    optional: [
      '-',
    ],
    desc: [
      '图标与文字间距',
    ],
    tag: 'params',
  },

  {
    prop: 'icon',
    name: '图标插槽',
    type: [
      'v-slot:icon',
    ],
    desc: [
      '图标插槽',
    ],
    tag: 'slots',
  },

  {
    prop: 'label',
    name: '文本插槽',
    type: [
      'v-slot:label',
    ],
    desc: [
      '文本插槽',
    ],
    tag: 'slots',
  },

  {
    prop: 'customInner',
    name: '完全自定义按钮内容插槽',
    type: [
      'v-slot:customInner',
    ],
    desc: [
      '完全自定义按钮内容插槽',
      '使用该插槽后会使label属性、icon插槽、label插槽失效。按钮内此时只显示customInner插槽内的DOM元素',
    ],
    tag: 'slots',
  },

  {
    prop: 'onClick',
    name: '按钮点击事件',
    params: [
      '-',
    ],
    returns: [
      'DOM点击事件对象',
    ],
    desc: [
      '按钮点击事件',
    ],
    tag: 'function',
  },
];
export { codeBlock, paramList }