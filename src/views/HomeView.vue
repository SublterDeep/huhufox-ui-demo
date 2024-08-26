<template>
  <div class="wrap">
    <div class="title">使用文档</div>
    <div class="title_s m_b">huhufox-ui-demo(开发中2024/7/10)</div>
    <div class="desc">huhufoxUI 是一个专为 Vue.js 项目设计的轻量级 UI 组件库，旨在提供常用且高度定制化的界面组件，帮助开发者快速构建现代化的用户界面。</div>
    <div class="divider"></div>
    
    <p class="title_s">使用演示：</p>
    <p>Github Page: <a target="_blank" href="https://sublterdeep.github.io/huhufox-ui-demo/#/">https://sublterdeep.github.io/huhufox-ui-demo/#/</a></p>
    <p>huhufoxUI源代码项目：huhufox-ui</p>
    <p>Github: <a target="_blank" href="https://github.com/SublterDeep/huhufox-ui">https://github.com/SublterDeep/huhufox-ui</a></p>
    <p class="title_s">技术栈：</p>
    <p>Vue.js： 基于 Vue.js 构建，充分利用 Vue 的组件化和响应式能力。</p>
    <p>huhufox-ui：主要展示的ui组件，部分设计思路来源于饿了么ui</p>
    <p>element-ui：饿了么ui组件</p>
    <p>SCSS： 使用 SCSS 预处理器编写样式，提高样式表的可维护性和灵活性。</p>
    <p>Lodash：用于封装组件时实现部分功能函数</p>
    <p>prismjs：用于展示ui组件代码的代码块插件</p>
    <p>jquery：还没用到</p>

    <div class="divider"></div>
    <div class="desc">作者：SublterDeep</div>
    <div class="desc">Github：<a target="_blank" href="https://github.com/SublterDeep">https://github.com/SublterDeep</a></div>
  </div>
</template>

<script>

export default {
  name: 'homeView',
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
color: var(--font-link);
transition: .15s;
}

/* 状态一: 未被访问过的链接 */
a:link {
text-decoration: none;
color: var(--font-link);
}

/* 状态二: 已经访问过的链接 */
a:visited {
text-decoration: none;
color: var(--font-link);
}
</style>