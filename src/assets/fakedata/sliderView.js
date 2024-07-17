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
    prop: '参数名称',
    name: '参数作用',
    type: [
      '参数类型1',
      '参数类型2',
    ],
    default: '默认值',
    optional: [
      '可选值1',
      '可选值2',
    ],
    desc: [
      '补充说明1',
      '补充说明2',
    ],
    tag: 'params',
  },

  {
    prop: '插槽名称',
    name: '插槽位置',
    type: [
      '参数类型1',
      '参数类型2',
    ],
    default: '默认值',
    optional: [
      '可选值1',
      '可选值2',
    ],
    desc: [
      '补充说明1',
      '补充说明2',
    ],
    tag: 'slots',
  },

  {
    prop: '函数名称',
    name: '函数作用',
    params: [
      '函数参数值列表1',
      '函数参数值列表2',
    ],
    returns: [
      '函数返回值列表1',
      '函数返回值列表2',
    ],
    desc: [
      '补充说明1',
      '补充说明2',
    ],
    tag: 'function',
  },
]
export { codeBlock, paramList }