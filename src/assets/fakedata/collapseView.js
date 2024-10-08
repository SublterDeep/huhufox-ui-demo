const codeBlock = [

`<fox_collapse>
  <fox_collapse_item :label="'文本1'">内容1</fox_collapse_item>
  <fox_collapse_item :label="'文本2'">内容2</fox_collapse_item>
  <fox_collapse_item :label="'文本3'">内容3</fox_collapse_item>
</fox_collapse>`,

`<fox_collapse>
  <fox_collapse_item :label="'图标在左侧 position: left'" :position="'left'">图标在左侧 position: left</fox_collapse_item>
  <fox_collapse_item :label="'图标在右侧 position: right'" :position="'right'">图标在右侧 position: right</fox_collapse_item>
  <fox_collapse_item :label="'图标在下方 position: bottom'" :position="'bottom'">图标在下方 position: bottom</fox_collapse_item>
</fox_collapse>`,

`<fox_collapse accordion>
  <fox_collapse_item :label="'文本1'">内容1</fox_collapse_item>
  <fox_collapse_item :label="'文本2'">内容2</fox_collapse_item>
  <fox_collapse_item :label="'文本3'">内容3</fox_collapse_item>
</fox_collapse>`,

`<fox_collapse>
  <fox_collapse_item :showIcon="false" :label="'关闭按钮图标'">按钮图标支持自定义开关</fox_collapse_item>
  <fox_collapse_item :label="'按钮图标支持自定义开关'" :position="'bottom'" :bottomText="['自定义展开文本', '自定义关闭文本']">按钮文本支持自定义文本,传入格式为['展开文本', '关闭文本']的数组或任意字符串</fox_collapse_item>
  <fox_collapse_item :label="'按钮文本支持自定义文本'" :position="'bottom'" :bottomText="'自定义文本'">按钮文本支持自定义文本,传入格式为['展开文本', '关闭文本']的数组或任意字符串</fox_collapse_item>
  <fox_collapse_item :label="'锁定内容区域，禁止展开'" lockContent></fox_collapse_item>
</fox_collapse>`,

`<fox_collapse :borderColor="'#333'">
  <fox_collapse_item :label="'自定义边框颜色1'">内容2</fox_collapse_item>
  <fox_collapse_item :label="'自定义边框颜色2'">内容2</fox_collapse_item>
  <fox_collapse_item :label="'自定义边框颜色3'">内容3</fox_collapse_item>
</fox_collapse>`,

`<fox_collapse :contentColor="'#f60'">
  <fox_collapse_item :label="'自定义列表项背景色1'"><span style="color: #fff">设置在折叠面板标签< fox_collapse >< /fox_collapse >上时，颜色默认应用到所有子列表项< fox_collapse_item >< /fox_collapse_item ></span></fox_collapse_item>
  <fox_collapse_item :label="'单独自定义某个列表项背景色2'" :contentColor="'#f00'"><span style="color: #fff">可在某列表项上单独设置它的背景颜色</span></fox_collapse_item>
  <fox_collapse_item :label="'自定义列表项背景色3'"><span style="color: #fff">内容3</span></fox_collapse_item>
</fox_collapse>`,

`<fox_collapse :hoverColor="'#f60'">
  <fox_collapse_item :label="'自定义展开图标鼠标悬浮色1'">内容3</fox_collapse_item>
  <fox_collapse_item :label="'单独自定义某个列表项展开图标鼠标悬浮色2'" :hoverColor="'#f00'">可在某列表项上单独设置它的展开图标鼠标悬浮色</fox_collapse_item>
  <fox_collapse_item :label="'自定义展开图标鼠标悬浮色3'">内容3</fox_collapse_item>
</fox_collapse>`,

`<fox_collapse>

  <fox_collapse_item :label="'文本1：嵌套两层折叠面板'" :position="'right'">
    <fox_collapse>
      <fox_collapse_item :label="'文本1_1'" :position="'left'">1_1</fox_collapse_item>
      <fox_collapse_item :label="'文本1_2'" :position="'left'">1_2</fox_collapse_item>
    </fox_collapse>
  </fox_collapse_item>

  <fox_collapse_item :label="'文本2'">2</fox_collapse_item>

  <fox_collapse_item :label="'文本3：多层嵌套'">

    <div class="desc m_b">设置了手风琴效果</div>
    <fox_collapse accordion>
      <fox_collapse_item :label="'文本3_1'" :position="'left'">3_1</fox_collapse_item>
      <fox_collapse_item :label="'文本3_2'" :position="'left'">
        <fox_collapse>
          <fox_collapse_item :label="'文本3_2_1'" :position="'left'">3_2_1</fox_collapse_item>
          <fox_collapse_item :label="'文本3_2_2'" :position="'left'">
            <fox_collapse>
              <fox_collapse_item :label="'文本3_2_2_1'" :position="'left'">3_2_2_1</fox_collapse_item>
              <fox_collapse_item :label="'文本3_2_2_2'" :position="'left'">3_2_2_2：看晕了吗？别嵌套太多层比较好</fox_collapse_item>
            </fox_collapse>
          </fox_collapse_item>
        </fox_collapse>
      </fox_collapse_item>
    </fox_collapse>
    
  </fox_collapse_item>

  <fox_collapse_item :label="'文本4'" :position="'bottom'">
    <template v-slot:header><div class="tal">文本4：展开按钮图标在下方</div></template>4
  </fox_collapse_item>

</fox_collapse>`,

`<fox_collapse>
  <fox_collapse_item>
    <template v-slot:header>
      <div style="width: 300px; line-height: 2; background-color: salmon; color: #fff;">使用标题插槽时，标签的label属性会失效</div>
    </template>
    <div>使用标题插槽时，标签的label属性会失效</div>
  </fox_collapse_item>
  <fox_collapse_item :label="'图标插槽'">
    <template v-slot:icon><div style="width: 50px;color: #fff;line-height: 2;text-align: center;background-color: plum;">icon</div></template>
    图标插槽
  </fox_collapse_item>
  <fox_collapse_item :label="'底部展开按钮插槽'" :position="'bottom'">
    <template v-slot:bottom>
      <div style="width: 150px;color: #fff;line-height: 2;text-align: center;background-color: seagreen;">展开/收缩按钮插槽</div>
    </template>
    底部展开按钮插槽只会在position属性设置为bottom时生效
  </fox_collapse_item>
  <fox_collapse_item :label="'底部展开按钮文字插槽'" :position="'bottom'">
    <template v-slot:bottomText>底部展开按钮文字插槽</template>
    底部展开按钮文字插槽
  </fox_collapse_item>
</fox_collapse>`,

`<fox_collapse :expand="[1, 3]">
  <fox_collapse_item :label="'文本1'">内容1</fox_collapse_item>
  <fox_collapse_item :label="'文本2_默认展开'">内容2</fox_collapse_item>
  <fox_collapse_item :label="'文本3'">内容3</fox_collapse_item>
  <fox_collapse_item :label="'文本4_默认展开'">内容4</fox_collapse_item>
  <fox_collapse_item :label="'文本5'">内容5</fox_collapse_item>
</fox_collapse>`,

`<fox_collapse :expand="true">
  <fox_collapse_item :label="'文本1'">内容1</fox_collapse_item>
  <fox_collapse_item :label="'文本2_默认关闭'" :expand="false">内容2</fox_collapse_item>
  <fox_collapse_item :label="'文本3'">内容3</fox_collapse_item>
  <fox_collapse_item :label="'文本4_默认关闭'" :expand="false">内容4</fox_collapse_item>
  <fox_collapse_item :label="'文本5'">内容5</fox_collapse_item>
</fox_collapse>`,

`<fox_collapse :sticky="true">
  <fox_collapse_item :label="'postion为其他值时不生效'" :position="'left'">只对postion设置为bottom的折叠列表项footer生效</
fox_collapse_item>
  <fox_collapse_item :label="'我跟随父折叠面板设定开启吸底效果'" :position="'bottom'">
    <div style="padding: 300px 0;">我跟随父折叠面板设定开启吸底效果</div>
  </fox_collapse_item>
  <fox_collapse_item :sticky="false" :label="'我单独设定了吸底效果关闭'" :position="'bottom'">
    <div style="padding: 300px 0;">我单独设定了吸底效果关闭</div>
  </fox_collapse_item>
  <fox_collapse_item :label="'可嵌套，但容易出bug所以不建议'" :position="'bottom'">
    <div style="padding: 300px 0;">
      <fox_collapse :sticky="true">
        <fox_collapse_item :label="'嵌套的吸底效果1'" :position="'bottom'">
          <div style="padding: 300px 0;">嵌套的吸底效果1</div>
        </fox_collapse_item>
        <fox_collapse_item :label="'嵌套的吸底效果2'" :position="'bottom'">
          <div style="padding: 300px 0;">嵌套的吸底效果2</div>
        </fox_collapse_item>
      </fox_collapse>
    </div>
  </fox_collapse_item>
</fox_collapse>`,

];

const paramList = [
  {
    prop: 'label',
    name: '标题文本',
    type: [
      'String',
    ],
    default: '-',
    optional: [
      '-',
    ],
    desc: [
      '列表项标题文本',
    ],
    tag: 'params',
  },

  {
    prop: 'position',
    name: '图标位置布局',
    type: [
      'String',
    ],
    default: 'right',
    optional: [
      'left',
      'bottom',
    ],
    desc: [
      '设置为left或right以调整按钮图标与文本的相对位置',
      '设置为bottom时，展开按钮移动到列表项下方',
    ],
    tag: 'params',
  },

  {
    prop: 'accordion',
    name: '手风琴效果',
    type: [
      'Boolean',
    ],
    default: 'false',
    optional: [
      'true',
      'false',
    ],
    desc: [
      '打开手风琴效果时，点击其中一个项目会展开其内容，并且通常只允许一个项目处于展开状态，其他项目则收起，类似手风琴的折叠和展开方式。',
    ],
    tag: 'params',
  },

  {
    prop: 'borderColor',
    name: '边框颜色',
    type: [
      'String',
    ],
    default: '#DCDFE6',
    optional: [
      '任意颜色字符串',
    ],
    desc: [
      '设置边框颜色(不太好用建议别用)',
      '可以设置在折叠面板上，效果应用到所有子项',
      '也可以单独设置在子项上，效果会覆盖父折叠面板设置的颜色',
    ],
    tag: 'params',
  },

  {
    prop: 'hoverColor',
    name: '鼠标悬浮按钮颜色',
    type: [
      'String',
    ],
    default: '#409EFF',
    optional: [
      '任意颜色字符串',
    ],
    desc: [
      '鼠标悬浮在展开/关闭按钮时按钮颜色',
    ],
    tag: 'params',
  },

  {
    prop: 'contentColor',
    name: '内容区域颜色',
    type: [
      'String',
    ],
    default: '#FAFAFA',
    optional: [
      '任意颜色字符串',
    ],
    desc: [
      '内容区域颜色',
    ],
    tag: 'params',
  },

  {
    prop: 'bottomText',
    name: '底部按钮文本',
    type: [
      'Array',
      'String',
    ],
    default: "['展开', '关闭']",
    optional: [
      '任意文本字符串',
      "['自定义展开文本', '自定义关闭文本']",
      "['自定义文本']",
    ],
    desc: [
      '当position属性设置为bottom后，footer中的文本',
    ],
    tag: 'params',
  },

  {
    prop: 'showIcon',
    name: '是否显示图标',
    type: [
      'Boolean',
    ],
    default: 'true',
    optional: [
      'true',
      'false',
    ],
    desc: [
      '是否显示展开/关闭按钮旁的图标',
    ],
    tag: 'params',
  },

  {
    prop: 'lockContent',
    name: '锁定内容区',
    type: [
      'Boolean',
    ],
    default: 'false',
    optional: [
      'true',
      'false',
    ],
    desc: [
      '锁定内容区，打开后将无法展开折叠面板列表项',
      '这样就可以当成列表来用',
    ],
    tag: 'params',
  },

  {
    prop: 'expand',
    name: '默认展开(为折叠面板组件设置时)',
    type: [
      'Array',
      'Boolean',
    ],
    default: 'false',
    optional: [
      '[(所有需要默认展开的列表项下标)]',
      'true',
      'false',
    ],
    desc: [
      '参数为布尔值设置为true或false时，所有折叠面板项都受到影响',
      '参数为数组时，对应下标的折叠面板项会默认展开',
    ],
    tag: 'params',
  },

  {
    prop: 'sticky',
    name: '吸底效果',
    type: [
      'Array',
      'Boolean',
    ],
    default: 'false',
    optional: [
      '[(所有需要吸底效果的列表项下标)]',
      'true',
      'false',
    ],
    desc: [
      '优先计算折叠面板项单独设置的吸底效果参数',
    ],
    tag: 'params',
  },

  {
    prop: 'header',
    name: '标题插槽',
    type: [
      'v-slot:header',
    ],
    desc: [
      '标题区域插槽，可自定义插入标题位置的元素',
    ],
    tag: 'slots',
  },

  {
    prop: 'icon',
    name: '图标插槽',
    type: [
      'v-slot:icon',
    ],
    desc: [
      '图标区域插槽，可自定义插入图标位置的元素',
    ],
    tag: 'slots',
  },

  {
    prop: 'bottom',
    name: '底部按钮插槽',
    type: [
      'v-slot:bottom',
    ],
    desc: [
      '底部按钮区域插槽，可自定义插入底部按钮位置的元素',
      '只在position属性设置为bottom时生效',
    ],
    tag: 'slots',
  },

  {
    prop: 'bottomText',
    name: '底部按钮文本插槽',
    type: [
      'v-slot:bottomText',
    ],
    desc: [
      '底部按钮文本区域插槽，可自定义插入底部按钮文本位置的元素',
      '只在position属性设置为bottom时生效',
      '区别于bottom插槽，这个插槽只改变底部按钮的文字区域内容',
    ],
    tag: 'slots',
  },

  {
    prop: '$foxConfig.scrollContainer',
    name: '设置全局折叠面板监听的滚动容器',
    type: [
      'field',
    ],
    params: [
      'DOM元素对象',
    ],
    returns: [
      'null',
    ],
    desc: [
      '默认监听DOM对象为document',
      '设置全局对象后，所有未单独设置监听滚动容器的折叠面板都将监听此DOM对象的滚动事件',
      '同时存在全局对象和单独设置的对象时，监听单独设置的对象',
      '使用方式：this.$foxConfig.scrollContainer = 你的滚动容器DOM对象',
    ],
    tag: 'config',
  },

  {
    prop: 'setScrollContainer()',
    name: '设置单独折叠面板监听的滚动容器',
    type: [
      'function',
    ],
    params: [
      'DOM元素对象 - 必填',
    ],
    returns: [
      'null',
    ],
    desc: [
      '默认监听DOM对象为document',
      '设置全局对象后，所有未单独设置监听滚动容器的折叠面板都将监听此DOM对象的滚动事件',
      '同时存在全局对象和单独设置的对象时，监听单独设置的对象',
      '使用方式：你的折叠面板DOM对象.setScrollContainer(你的滚动容器DOM对象)',
    ],
    tag: 'config',
  },
  
];
export { codeBlock, paramList }