<template>
  <div class="wrap">
    <div class="title">全局声明</div>
    <div class="title_s m_b">全局变量、函数和原型链对象</div>
    <div class="desc">huhufoxUI 所声明的一些全局字段，需要依赖这些才能正常使用功能。</div>
    <div class="desc">谨慎的使用这些对象，尽量避免修改。</div>
    <div class="divider"></div>

    <div class="flex-col box">

      <div class="wrap">
        <div class="title_s m_b">$foxConfig</div>
        <div class="desc">挂载在Vue原型上的组件配置对象实例，负责huhufoxUI组件的部分自定义配置</div>
        <div class="desc m_b">具体使用请参照特定组件下的专门介绍</div>
      </div>
      <div class="divider"></div>

      <div class="wrap">
        <div class="title_s m_b">$foxEventBus</div>
        <div class="desc">挂载在Vue原型上的事件管线对象实例，负责维持huhufoxUI组件间的数据通信</div>
        <div class="desc m_b">请勿使用此对象或向其注入数据，以免影响huhufoxUI组件的功能</div>
      </div>
      <div class="divider"></div>

      <div class="wrap">
        <div class="title_s m_b">更新计划：</div>
        <div class="desc">1.增加插槽：包括折叠列表项文字插槽、折叠列表项图标插槽、底部展开按钮文字&图标插槽</div>
        <div class="desc">2.默认展开选项，外部控制展开函数，增加emit反馈函数</div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'publicView',
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
a {
  text-decoration: none;
  color: #000;
  transition: .15s;
}

/* 状态一: 未被访问过的链接 */
a:link {
  text-decoration: none;
  color: #000;
}

/* 状态二: 已经访问过的链接 */
a:visited {
  text-decoration: none;
  color: #000;
}
</style>