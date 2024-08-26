<template>
  <div id="app">
    <!-- 左侧列表 -->
    <section id="leftWrap">
      <div class="logo flex-center m_b" style="width: 100%;">
        <!-- <img style="max-width: 100%;" :src="`@/assets/logo/huhufoxUI${darkMode?'_light_':'_'}transparent.png`" alt=""> -->
      </div>
      <div id="leftWrapContainer">
        <div @click="goPage(item, idx)" v-for="(item, idx) in arrPage" :key="idx"
          :class="`leftWrapContainer_item ${idx === numNowSelect ? 'leftWrapContainer_item_active' : ''}`"><span>{{
            item.label
            }}</span></div>
      </div>
    </section>

    <!-- 显示容器 -->
    <section id="mainWrap" ref="mainWrap">
      <div class="mainWrapContainer" ref="mainWrapContainer">
        <router-view />
      </div>
    </section>

    <!-- 回到顶部 -->
    <section id="toTop" @click="handleToTop">Top</section>

    <!-- 白天黑夜模式切换 -->
    <section id="switchTheme" @click="handleTheme">{{ darkMode?'浅色':'深色' }}</section>

  </div>
</template>

<script>
import routes from '@/router/routes.js';
export default {
  name: 'HomeView',
  data() {
    return {
      arrPage: [],
      numNowSelect: 0,
      darkMode: false,
    }
  },
  created() {
    let theme = localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')) : 'light';
    this.darkMode = (theme === 'light' ? false : true);
    document.documentElement.setAttribute('theme', theme);
  },
  mounted() {
    this.arrPage = _.cloneDeep(routes);
    this.$foxConfig.scrollContainer = this.$refs.mainWrap; // 配置全局默认项滚动容器监听对象
    setTimeout(() => {
      this.$router.push('homeView'); // 首页重定向
    }, 10);
  },
  methods: {
    goPage(pageData, index) {
      // 离开某页前保存滚动条位置
      this.$store.commit('setPageScroll', { page: this.arrPage[this.numNowSelect].name, progress: this.$refs.mainWrap.scrollTop });
      setTimeout(() => {
        this.numNowSelect = index;
        // 进入某页后调整滚动条位置
        let pageScroll = this.$store.getters.getPageScroll;
        let pos = 0;
        for (let i = 0; i < pageScroll.length; i++) {
          if (pageScroll[i].page === pageData.name) {
            pos = pageScroll[i].progress;
            break;
          }
        }
        this.$router.push(pageData.name);
        this.$refs.mainWrap.scrollTo({ top: pos });
      }, 0);
    },
    handleToTop() {
      this.$refs.mainWrap.scrollTo({ top: 0, behavior: "smooth" });
    },
    handleTheme() {
      this.darkMode = !this.darkMode;
      let str = this.darkMode ? 'dark' : 'light';
      document.documentElement.setAttribute('theme', str);
      localStorage.setItem('theme', JSON.stringify(str));
    },
  },
}
</script>

<style src="./style.css"></style>
<style src="./theme.css"></style>
<style lang="scss">
/* 页面结构样式 */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  flex-direction: column;
}

#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--bg);
  color: var(--font-normal);
  height: 100%;
  display: flex;
  padding-left: 5%;
  transition: 
    background-color .2s,
    color .1s
    ;
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background: var(--scrollbar);
  border-radius: 5px;
  transition: .2s;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--scrollbar-hover);
}

::-webkit-scrollbar-thumb:active {
  background: var(--scrollbar-active);
}

pre {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--font-normal);
}

.box {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.boxitem {
  width: 100%;
}

#leftWrap {
  width: 12%;
  height: 100%;
  box-sizing: border-box;
  padding: 2% 0;
  margin-right: 5%;
  overflow: hidden;

  #leftWrapContainer {
    width: 100%;
    height: 100%;
    overflow: auto;
    border-right: 1px solid #ddd;

    .leftWrapContainer_item {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 5px;
    }

    .leftWrapContainer_item_active {
      color: var(--theme-active);
    }

    .leftWrapContainer_item>span {
      cursor: pointer;
      transition: .15s;
    }

    .leftWrapContainer_item>span:hover {
      color: var(--theme);
    }

    .leftWrapContainer_item>span:active {
      color: #5A4F6E;
    }
  }
}

#mainWrap {
  flex: 1;
  height: 100%;
  padding: 2% 0;
  overflow: auto;
  box-sizing: border-box;
  padding-right: 15%;

  .mainWrapContainer {
    width: 100%;
  }
}

#toTop {
  width: 5vh;
  height: 5vh;
  position: fixed;
  right: 2%;
  bottom: 12%;
  z-index: 10;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid var(--theme);
  transition: .2s;
  background-color: var(--toTop-bg);
  text-align: center;
  line-height: 5vh;
  font-size: 1.5vh;
  color: var(--theme);
  user-select: none;
  opacity: .6;
}

#toTop:hover {
  background-color: var(--theme);
  border-color: var(--theme);
  color: #fff;
  opacity: 1;
}

#toTop:active {
  background-color: var(--theme-active);
  border-color: var(--theme-active);
  color: #fff;
  transform: scale(0.97);
  opacity: 1;
}

#switchTheme {
  width: 5vh;
  height: 5vh;
  position: fixed;
  right: 2%;
  bottom: 5%;
  z-index: 10;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid var(--theme);
  transition: .2s;
  background-color: var(--toTop-bg);
  text-align: center;
  line-height: 5vh;
  font-size: 1.5vh;
  color: var(--theme);
  user-select: none;
  opacity: .6;
}

#switchTheme:hover {
  background-color: var(--theme);
  border-color: var(--theme);
  color: #fff;
  opacity: 1;
}

#switchTheme:active {
  background-color: var(--theme-active);
  border-color: var(--theme-active);
  color: #fff;
  transform: scale(0.97);
  opacity: 1;
}

.logo {
  height: 100px;
  background-image: var(--logo);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>