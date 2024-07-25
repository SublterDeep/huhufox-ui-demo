<template>
  <div id="app">

    <!-- 左侧列表 -->
    <section id="leftWrap">
      <div class="flex-center m_b" style="width: 100%;">
        <img style="max-width: 100%;" src="@/assets/logo/huhufoxUI_transparent.png" alt="">
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
    }
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
      this.$store.commit('setPageScroll', { page: this.arrPage[this.numNowSelect].name, progress: this.$refs.mainWrap.scrollTop});
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
  },
}
</script>
<style>
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
  color: #2c3e50;
  height: 100%;
  display: flex;
  padding-left: 5%;
}

pre {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/* 公共样式 - 容器 */
.wrap {
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
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
      color: #B39EDB;
    }

    .leftWrapContainer_item>span {
      cursor: pointer;
      transition: .15s;
    }

    .leftWrapContainer_item>span:hover {
      color: #DBB6EE;
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
  border: 1px solid #DBB6EE;
  transition: .2s;
  background-color: #fdfdfd;
  text-align: center;
  line-height: 5vh;
  font-size: 1.5vh;
  color: #DBB6EE;
  user-select: none;
  opacity: .6;
}

#toTop:hover {
  background-color: #DBB6EE;
  border-color: #DBB6EE;
  color: #fff;
  opacity: 1;
}

#toTop:active {
  background-color: #B39EDB;
  border-color: #B39EDB;
  color: #fff;
  transform: scale(0.97);
  opacity: 1;
}

/* 公共样式 - 文字 */
.title_l {
  width: 100%;
  font-size: 30px;
  text-align: left;
  font-weight: bold;
  line-height: 2.2;
}

.title {
  width: 100%;
  font-size: 25px;
  text-align: left;
  font-weight: bold;
  line-height: 2;
}

.title_s {
  width: 100%;
  font-size: 20px;
  text-align: left;
  font-weight: bold;
  line-height: 1.7;
}

.desc {
  color: #909399;
  font-size: 14px;
  line-height: 1.5;
}

/* 公共样式 - 内容 */
.flex {
  display: flex;
}

.flex-rev {
  display: flex;
  flex-direction: row-reverse;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.flex-col-rev {
  display: flex;
  flex-direction: column-reverse;
}

.flex-alc {
  display: flex;
  align-items: center;
}

.flex-juc {
  display: flex;
  justify-content: center;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-evenly {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex-gap {
  display: flex;
  gap: 15px;
}

.m_t {
  margin-top: 15px !important;
}

.m_b {
  margin-bottom: 15px !important;
}

.m_l {
  margin-left: 15px !important;
}

.m_r {
  margin-right: 15px !important;
}

.tal {
  text-align: left !important;
}

.tac {
  text-align: center !important;
}

.tar {
  text-align: right !important;
}

.divider {
  width: 100%;
  height: 50px;
}

.divider_line {
  width: 100%;
  height: 1px;
  margin-top: 24.5px;
  margin-bottom: 24.5px;
  background-color: #DCDFE6;
}

/* 公共样式 - 样式 */
.nsel {
  user-select: none;
}

.nact {
  pointer-events: none;
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 5px;
  transition: .15s;
}

::-webkit-scrollbar-thumb:hover {
  background: #ddd;
}

::-webkit-scrollbar-thumb:active {
  background: #aaa;
}
</style>