<template>
  <div class="wrap">
    <div class="title">按钮</div>
    <div class="title_s m_b">Button view</div>
    <div class="desc">按钮</div>
    <div class="divider"></div>

    <div class="box flex-col flex-alc flex-gap">
      <div class="wrap">
        <div class="title_s m_b">标准按钮</div>
        <div class="desc m_b">白天模式/深色模式的按钮</div>
        <div class="box">
          <div class="boxitem">
            <fox_collapse :bgColor="'#ccc'">
              <fox_collapse_item :position="'bottom'" class="displayArea">
                <template v-slot:header>
                  <div class="flex flex-center flex-gap">
                    <fox_button :label="'BUTTON'"></fox_button>
                    <fox_button :label="'BUTTON'" darkMode></fox_button>
                  </div>
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
    </div>
  </div>
</template>

<script>

export default {
  name: 'buttonView',
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
.displayArea {
  background-color: #F1F1F1;
}
</style>