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
          <router-view/>
        </div>
      </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Yanzheng from '@/components/Yanzheng.vue';
import Slider from '@/components/Slider.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      arrPage: [
        {name: 'homeView', label: '首页', params: {}},
        {name: 'sliderView', label: '轮播图', params: {}},
        {name: 'sliderView', label: '轮播图', params: {}},
      ],
      numNowSelect: 0,
    }
  },
  components: {
    Yanzheng, Slider
  },
  mounted() {
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  display: flex;
}

#leftWrap {
  width: 14%;
  height: 100%;
  box-sizing: border-box;
  padding: 2% 0;
  margin-right: 5px;
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
