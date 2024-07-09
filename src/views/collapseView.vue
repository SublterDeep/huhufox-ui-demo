<template>
  <div class="wrap">
    <div class="title">折叠面板</div>
    <div class="title_s">Collapse view</div>
    <div class="flex-col">
      <div class="wrap">
        <div class="title_s">标准折叠面板</div>
        <div class="desc m_b">很普通</div>
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
        <div class="title_s">按钮图标位置可调</div>
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
      <!-- <fox_collapse>
        <fox_collapse_item :label="'文本1'" :position="'right'">
          <fox_collapse>
            <fox_collapse_item :label="'文本1_1'" :position="'left'">1_1</fox_collapse_item>
            <fox_collapse_item :label="'文本1_2'" :position="'left'">1_2</fox_collapse_item>
          </fox_collapse>
        </fox_collapse_item>
        <fox_collapse_item :label="'文本2'">2</fox_collapse_item>
        <fox_collapse_item :label="'文本3'">
          <fox_collapse>
            <fox_collapse_item :label="'文本3_1'" :position="'left'">3_1</fox_collapse_item>
            <fox_collapse_item :label="'文本3_2'" :position="'left'">
              <fox_collapse>
                <fox_collapse_item :label="'文本3_2_1'" :position="'left'">3_2_1</fox_collapse_item>
                <fox_collapse_item :label="'文本3_2_2'" :position="'left'">
                  <fox_collapse>
                    <fox_collapse_item :label="'文本3_2_2_1'" :position="'left'">3_2_2_1</fox_collapse_item>
                    <fox_collapse_item :label="'文本3_2_2_2'" :position="'left'">3_2_2_2</fox_collapse_item>
                  </fox_collapse>
                </fox_collapse_item>
              </fox_collapse>
            </fox_collapse_item>
          </fox_collapse>
        </fox_collapse_item>
        <fox_collapse_item :label="'文本4'" :position="'bottom'">3</fox_collapse_item>
      </fox_collapse> -->
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