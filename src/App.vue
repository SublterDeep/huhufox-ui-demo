<template>
  <div id="app">

    <!-- 左侧列表 -->
     <section id="leftWrap">
      <div id="leftWrapContainer">
        <div @click="goPage(item, idx)" v-for="(item, idx) in arrPage" :key="idx" :class="`leftWrapContainer_item ${idx===numNowSelect?'leftWrapContainer_item_active':''}`"><span>{{ item.label }}</span></div>
      </div>
     </section>

     <!-- 显示容器 -->
      <section id="mainWrap">
        <div class="mainWrapContainer">
          <router-view />
        </div>
      </section>
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
  },
  methods: {
    goPage(pageData, index) {
      this.numNowSelect = index;
      this.$router.push(pageData.name);
    },
  },
}
</script>
<style>
/* 页面结构样式 */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
body {
  display: flex;
  flex-direction: column;
}
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  display: flex;
  padding-left: 10%;
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
  width: 15%;
  height: 100%;
  box-sizing: border-box;
  padding: 2% 0;
  margin-right: 100px;
  #leftWrapContainer {
    width: 100%; height: 100%;
    overflow: auto;
    border-right: 1px solid #ddd;
    .leftWrapContainer_item {
      width: 100%; height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 5px;
    }
    .leftWrapContainer_item_active {
      color: #B39EDB;
    }
    .leftWrapContainer_item>span{
      cursor: pointer;
      transition: .15s;
    }
    .leftWrapContainer_item>span:hover{
      color: #DBB6EE;
    }
    .leftWrapContainer_item>span:active{
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
  .mainWrapContainer {
    width: 100%;
  }
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
  display: flex; width: 100%;
}
.flex-col {
  display: flex; width: 100%;
  flex-direction: column;
}
.flex-alc {align-items: center;}
.flex-juc {justify-content: center;}
.flex-center {
  display: flex; width: 100%;
  justify-content: center;
  align-items: center;
}
.flex-evenly {
  display: flex; width: 100%;
  justify-content: space-evenly;
  align-items: center;
}
.flex-gap {
  gap: 15px;
}
.m_t {margin-top: 15px !important;}
.m_b {margin-bottom: 15px !important;}
.m_l {margin-left: 15px !important;}
.m_r {margin-right: 15px !important;}
.tal {text-align: left !important;}
.tac {text-align: center !important;}
.tar {text-align: right !important;}
.divider {
  width: 100%; height: 50px;
}
.divider_line {
  width: 100%; height: 1px; margin-top: 24.5px;margin-bottom: 24.5px; background-color: #DCDFE6;
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 7px;
}
::-webkit-scrollbar {
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