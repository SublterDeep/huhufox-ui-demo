<template>
  <div class="wrap">

    <div class="title">测试</div>
    <div class="title_s m_b">Test view</div>
    <div class="desc">用于测试一些函数功能</div>
    <div class="divider"></div>
    
    <div class="flex-col box">
      <!-- 内容卡片 -->
      <div class="wrap">
        <div class="title_s m_b">大标题</div>
        <div class="desc m_b">小标题</div>
        <div class="box">
          <div class="boxitem">
            <fox_collapse :contentColor="'var(--collapse-content)'" :borderColor="'var(--collapse-border)'" :sticky="true">
              <fox_collapse_item :position="'bottom'" class="displayArea">
                <template v-slot:header>
                  <!-- 组件放这 -->
                </template>
                <p class="tal">Template:</p>
                <!-- <pre><code class="language-xml line-numbers" v-text="codeText[0][0]"></code></pre> -->
                <p class="tal">Script:</p>
                <!-- <pre><code class="language-js line-numbers" v-text="codeText[0][1]"></code></pre> -->
              </fox_collapse_item>
            </fox_collapse>
          </div>
        </div>
      </div>
      <div class="divider"></div>

      <!-- 参数列表 -->
      <div class="wrap">
        <div class="title_s m_b">参数列表</div>
        <paramList :dataList="params"></paramList>
      </div>
      <div class="divider"></div>

      <!-- 更新计划 -->
      <div class="wrap">
        <div class="title_s m_b">更新计划：</div>
        <div class="desc">1.更新计划：</div>
      </div>
    </div>
  </div>
</template>

<script>
// import { codeBlock, paramList } from '@/assets/fakedata/xxx View';
export default {
  name: 'testView',
  data() {
    return {
      codeText: [],
      params: [],
    }
  },
  updated() {
    Prism.highlightAll(); //修改内容后重新渲染
  },
  beforeMount() {
    // this.codeText = _.cloneDeep(codeBlock);
    // this.params = _.cloneDeep(paramList);
  },
  mounted() {
    Prism.highlightAll();
  },
  methods: {
  },
}
</script>
<style scoped lang="scss">
.displayArea {
  background-color: var(--collapse-bg);
}
</style>