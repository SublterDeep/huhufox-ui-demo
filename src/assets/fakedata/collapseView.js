const codeBlock = [

`<fox_collapse>
  <fox_collapse_item :label="'文本1'">内容1</fox_collapse_item>
  <fox_collapse_item :label="'文本2'">内容2</fox_collapse_item>
  <fox_collapse_item :label="'文本3'">内容3</fox_collapse_item>
</fox_collapse>`,

`<fox_collapse>
  <fox_collapse_item :label="'图标在左侧 position: left'" :position="'left'">图标在左侧 position: left</fox_collapse_item>
  <fox_collapse_item :label="'图标在右侧 position: right'" :position="'right'">图标在右侧 position: right</fox_collapse_item>
  <fox_collapse_item :label="'图标在下方 position: bottom'" :position="'bottom'">
    <template v-slot:header>
      <div class="tal">图标在下方 position: bottom</div>
    </template>
    <p>图标在下方 position: bottom</p>
    <p>当图标在下方时，label标签不生效</p>
  </fox_collapse_item>
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

];

const paramList = [
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
  
];
export { codeBlock, paramList }