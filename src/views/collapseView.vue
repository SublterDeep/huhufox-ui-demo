<template>
  <div class="wrap">
    <div class="title">折叠面板</div>
    <div class="title_s">Collapse view</div>
    <div class="flex-col">

      <div class="wrap">
        <div class="title_s m_b">标准折叠面板</div>
        <div class="desc">由外层折叠面板标签< fox_collapse >< /fox_collapse ></div>
        <div class="desc m_b">和内层折叠列表项标签< fox_collapse_item >< / fox_collapse_item >实现</div>
        <div class="box">
          <div class="boxitem">
            <fox_collapse>
              <fox_collapse_item :label="'文本1'">内容1</fox_collapse_item>
              <fox_collapse_item :label="'文本2'">内容2</fox_collapse_item>
              <fox_collapse_item :label="'文本3'">内容3</fox_collapse_item>
            </fox_collapse>
          </div>
        </div>
      </div>
      <div class="divider"></div>

      <div class="wrap">
        <div class="title_s m_b">按钮图标位置可调</div>
        <div class="desc m_b">在每个列表项标签上设置position属性以调节图标位置</div>
        <div class="box">
          <div class="boxitem">
            <fox_collapse>
              <fox_collapse_item :label="'图标在左侧 position: left'" :position="'left'">图标在左侧 position: left</fox_collapse_item>
              <fox_collapse_item :label="'图标在右侧 position: right'" :position="'right'">图标在右侧 position: right</fox_collapse_item>
              <fox_collapse_item :label="'图标在下方 position: bottom'" :position="'bottom'">
                <template v-slot:header>
                  <div class="tal">图标在下方 position: bottom</div>
                </template>
                <p>图标在下方 position: bottom</p>
                <p>当图标在下方时，label标签不生效</p>
              </fox_collapse_item>
            </fox_collapse>
          </div>
        </div>
      </div>

      <div class="wrap">
        <div class="title_s m_b">手风琴效果</div>
        <div class="desc m_b">打开一个新的折叠列表项时,前一个打开的折叠列表项会自动关闭</div>
        <div class="box">
          <div class="boxitem">
            <fox_collapse accordion>
              <fox_collapse_item :label="'文本1'">内容1</fox_collapse_item>
              <fox_collapse_item :label="'文本2'">内容2</fox_collapse_item>
              <fox_collapse_item :label="'文本3'">内容3</fox_collapse_item>
            </fox_collapse>
          </div>
        </div>
      </div>
      <div class="divider"></div>

      <div class="wrap">
        <div class="title_s m_b">颜色自定义</div>
        <div class="desc m_b">边框颜色支持自定义颜色</div>
        <div class="box">
          <div class="boxitem">
            <fox_collapse :borderColor="'#333'">
              <fox_collapse_item :label="'自定义边框颜色1'">内容2</fox_collapse_item>
              <fox_collapse_item :label="'自定义边框颜色2'">内容2</fox_collapse_item>
              <fox_collapse_item :label="'自定义边框颜色3'">内容3</fox_collapse_item>
            </fox_collapse>
          </div>
        </div>
        <div class="divider"></div>
        <div class="desc m_b">内容背景色支持自定义颜色</div>
        <div class="box">
          <div class="boxitem">
            <fox_collapse :contentColor="'#f60'">
              <fox_collapse_item :label="'自定义列表项背景色1'"><span style="color: #fff">设置在折叠面板标签< fox_collapse >< /fox_collapse >上时，颜色默认应用到所有子列表项< fox_collapse_item >< /fox_collapse_item ></span></fox_collapse_item>
              <fox_collapse_item :label="'单独自定义某个列表项背景色2'" :contentColor="'#f00'"><span style="color: #fff">可在某列表项上单独设置它的背景颜色</span></fox_collapse_item>
              <fox_collapse_item :label="'自定义列表项背景色3'"><span style="color: #fff">内容3</span></fox_collapse_item>
            </fox_collapse>
          </div>
        </div>
        <div class="divider"></div>
        <div class="desc m_b">展开图标鼠标悬浮色支持自定义颜色</div>
        <div class="box">
          <div class="boxitem">
            <fox_collapse :hoverColor="'#f60'">
              <fox_collapse_item :label="'自定义列表项背景色1'">设置在折叠面板标签< fox_collapse >< /fox_collapse >上时，颜色默认应用到所有子列表项< fox_collapse_item >< /fox_collapse_item ></fox_collapse_item>
              <fox_collapse_item :label="'单独自定义某个列表项背景色2'" :hoverColor="'#f00'">可在某列表项上单独设置它的展开图标鼠标悬浮色</fox_collapse_item>
              <fox_collapse_item :label="'自定义列表项背景色3'">内容3</fox_collapse_item>
            </fox_collapse>
          </div>
        </div>
      </div>
      <div class="divider"></div>

      <div class="wrap">
        <div class="title_s m_b">多重嵌套</div>
        <div class="desc m_b">俄罗斯套娃</div>
        <div class="box">
          <div class="boxitem">
            <fox_collapse>
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
            </fox_collapse>
          </div>
        </div>
      </div>
      <div class="divider"></div>

      <div class="wrap">
        <div class="title_s m_b">参数列表</div>
      </div>
      <div class="divider"></div>

      <div class="wrap">
        <div class="title_s m_b">更新计划：</div>
        <div class="desc">1.增加插槽：包括折叠列表项文字插槽、折叠列表项图标插槽</div>
        <!-- <div class="desc">2.样式适配：</div> -->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'collapseView',
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {},
}
</script>
<style scoped lang="scss">
</style>