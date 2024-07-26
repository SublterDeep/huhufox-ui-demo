const codeBlock = [

[
`<fox_slider :arrData="data"></fox_slider>`,
`export default {
data() {
  return {
    data: ['01', '02', '03', '04', '05', '06']
  }
},`,
],
[
`<fox_slider
  :autoScroll="false"
  :alwaysShowArrow="false"
  :arrData="data"
  :btnStyle="{arrowColor: '#f60', arrowColor_hover: 'black', groupColor_active: 'red'}"
/>`,
`export default {
data() {
  return {
    data: ['01', '02', '03', '04', '05', '06']
  }
},`
],
[
`<fox_slider :arrData="data" :borderRadius="'15px'" :showArrow="false" />`,
`export default {
data() {
  return {
    data: ['01', '02', '03']
  }
},`
],
[
`<fox_slider
 :arrData="data"
  :transitionTime="0.15"
   style="box-shadow: 20px 20px 20px"
/>`,
`export default {
data() {
  return {
    data: ['01', '02', '03']
  }
},`
],
[
`<fox_slider :arrData="data" :borderRadius="'15px'" :showArrow="false" />`,
`export default {
data() {
  return {
    data: ['01']
  }
},`
],
[
`<fox_slider  />`,
``
],
[
`<fox_slider :arrData="data">
  <template v-slot:leftBTN><div class="flex-center" style="cursor: pointer;background-color: aqua;width: 20px;height: 60px;">L</div></template>
  <template v-slot:rightBTN><div class="flex-center" style="cursor: pointer;background-color: aqua;width: 20px;height: 60px;">R</div></template>
</fox_slider>`,
`export default {
data() {
  return {
    data: ['01', '02', '03', '04', '05', '06']
  }
},`
],
[
`<fox_slider :customGroup="true" :arrData="data">
  <template v-slot:groupBTN="{ handleGroupClick }">
    <div @click="handleGroupClick(idx)" v-for="(item, idx) in data" :key="idx">{{ idx+1 }}</div>
  </template>
</fox_slider>`,
`export default {
data() {
  return {
    data: ['01', '02', '03', '04', '05', '06']
  }
},`
],

];
const paramList = [
  {
    prop: 'picHeight',
    name: '轮播图高度',
    type: [
      'String',
      'Number',
    ],
    default: '200px',
    optional: [
      '-',
    ],
    desc: [
      '数字类型默认单位为px',
      '字符串类型有单位优先使用参数单位，没有默认px',
    ],
    tag: 'params',
  },
  {
    prop: 'ctrlHeight',
    name: '轮播图底部按钮栏高度',
    type: [
      'String',
      'Number',
    ],
    default: '200px',
    optional: [
      '-',
    ],
    desc: [
      '数字类型默认单位为px',
      '字符串类型有单位优先使用参数单位，没有默认px',
    ],
    tag: 'params',
  },
  {
    prop: 'disable',
    name: '是否停用轮播图',
    type: [
      'Boolean',
    ],
    default: 'false',
    optional: [
      'true',
      'false',
    ],
    desc: [
      '禁用轮播图，无法进行交互',
    ],
    tag: 'params',
  },
  {
    prop: 'borderRadius',
    name: '轮播图圆角',
    type: [
      'String',
      'Number',
    ],
    default: '0px',
    optional: [
      '-',
    ],
    desc: [
      '轮播图圆角',
    ],
    tag: 'params',
  },
  {
    prop: 'arrData',
    name: '轮播图内容数据',
    type: [
      'Array',
    ],
    default: '[]',
    optional: [
      '-',
    ],
    desc: [
      '随便给点数据就可以',
      '实际上轮播图组件没做图片，显示的是字符串',
    ],
    tag: 'params',
  },
  {
    prop: 'transitionTime',
    name: '切换轮播图时过渡动画时长',
    type: [
      'Number',
    ],
    default: '0.5',
    optional: [
      '-',
    ],
    desc: [
      '切换轮播图时过渡动画时长',
    ],
    tag: 'params',
  },
  {
    prop: 'autoScroll',
    name: '是否自动轮播',
    type: [
      'Boolean',
    ],
    default: 'true',
    optional: [
      'true',
      'false',
    ],
    desc: [
      '是否自动轮播',
    ],
    tag: 'params',
  },
  {
    prop: 'scrollTime',
    name: '自动轮播停留时长',
    type: [
      'Number',
    ],
    default: '2000',
    optional: [
      '-',
    ],
    desc: [
      '自动轮播停留时长',
    ],
    tag: 'params',
  },
  {
    prop: 'customGroup',
    name: '自定义底部按钮控制栏',
    type: [
      'Boolean',
    ],
    default: 'false',
    optional: [
      'true',
      'false',
    ],
    desc: [
      '自定义底部按钮控制栏',
    ],
    tag: 'params',
  },
  {
    prop: 'btnStyle',
    name: '箭头按钮和组按钮样式集',
    type: [
      'Object',
    ],
    default: `
{
  arrowColor: '#CACACA',
  arrowColor_hover: '#999',
  arrowColor_active: '#707070',
  arrowColor_arrow: '#fff',
  groupColor: '#CACACA',
  groupColor_hover: '#999',
  groupColor_active: '#707070',
} `,
    optional: [
      '-',
    ],
    desc: [
      '箭头按钮和组按钮样式集',
    ],
    tag: 'params',
  },
  {
    prop: 'showArrow',
    name: '是否显示箭头按钮',
    type: [
      'Boolean',
    ],
    default: 'true',
    optional: [
      'true',
      'false',
    ],
    desc: [
      '是否显示箭头按钮',
    ],
    tag: 'params',
  },
  {
    prop: 'alwaysShowArrow',
    name: '是否一直显示箭头按钮',
    type: [
      'Boolean',
    ],
    default: 'true',
    optional: [
      'true',
      'false',
    ],
    desc: [
      '是否一直显示箭头按钮',
    ],
    tag: 'params',
  },
  {
    prop: 'showGroup',
    name: '是否显示组按钮',
    type: [
      'Boolean',
    ],
    default: 'true',
    optional: [
      'true',
      'false',
    ],
    desc: [
      '是否显示组按钮',
    ],
    tag: 'params',
  },
  {
    prop: 'mouseSwipe',
    name: '是否开启鼠标滑动控制轮播图翻页',
    type: [
      'Boolean',
    ],
    default: 'true',
    optional: [
      'true',
      'false',
    ],
    desc: [
      '是否开启鼠标滑动控制轮播图翻页',
    ],
    tag: 'params',
  },

  {
    prop: 'leftBTN',
    name: '轮播图向左翻页按钮',
    type: [
      'v-slot:leftBTN',
    ],
    desc: [
      '轮播图向左翻页按钮',
    ],
    tag: 'slots',
  },
  {
    prop: 'rightBTN',
    name: '轮播图向右翻页按钮',
    type: [
      'v-slot:rightBTN',
    ],
    desc: [
      '轮播图向右翻页按钮',
    ],
    tag: 'slots',
  },
  {
    prop: 'groupBTN',
    name: '轮播图底部按钮栏',
    type: [
      'v-slot:groupBTN',
    ],
    desc: [
      '轮播图底部按钮栏',
    ],
    tag: 'slots',
  },

  {
    prop: 'onchange',
    name: '轮播图展示内容下标变化',
    params: [
      '-',
    ],
    returns: [
      '返回一个包含以下字段的对象：',
      'newIndex - 新的下标',
      'oldIndex - 旧的下标',
      'direction - 翻页方向',
      'step - 翻页步数',
      'ref - 轮播图组件对象',
    ],
    desc: [
      '轮播图展示内容下标变化时触发此函数',
      '通过为轮播图组件提交的事件onchange绑定处理函数来捕获到变更的具体信息',
    ],
    tag: 'function',
  },
]
export { codeBlock, paramList }