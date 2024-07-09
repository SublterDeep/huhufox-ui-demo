<template>
  <div class="wrap">

    <div class="title">轮播图</div>
    <div class="title_s">fox_slider view</div>

    <div class="flex-col">
      <div class="wrap">
        <div class="title_s">标准轮播图</div>
        <div class="desc m_b">非常普通的轮播图</div>
        <div class="box">
          <div class="boxitem"><fox_slider :arrData="arrData_1" /></div>
        </div>
        <el-button class="m_t" @click="getRandomDataForSlider(1)" type="primary">Get Random Data For fox_slider</el-button>
      </div>
      <div class="wrap">
        <div class="title_s">标准轮播图</div>
        <div class="desc m_b">关闭自动轮播；仅在鼠标悬浮时显示箭头按钮；带有自定义按钮样式的轮播图</div>
        <div class="box">
          <div class="boxitem"><fox_slider :autoScroll="false" :alwaysShowArrow="false" :arrData="arrData_2" :btnStyle="{arrowColor: '#f60', arrowColor_hover: 'black', groupColor_active: 'red'}" /></div>
        </div>
        <el-button class="m_t" @click="getRandomDataForSlider(2)" type="primary">Get Random Data For fox_slider</el-button>
      </div>
      <div class="wrap">
        <div class="title_s">标准轮播图</div>
        <div class="desc m_b">带有圆角，隐藏箭头按钮的轮播图</div>
        <div class="box">
          <div class="boxitem"><fox_slider :arrData="arrData_3" :borderRadius="'15px'" :showArrow="false" /></div>
        </div>
        <el-button class="m_t" @click="getRandomDataForSlider(3)" type="primary">Get Random Data For fox_slider</el-button>
      </div>
      <div class="wrap">
        <div class="title_s">自定义外观的轮播图</div>
        <div class="desc m_b">自定义滚动过渡动画持续时间，自定义轮播图组件阴影的轮播图</div>
        <div class="box">
          <div class="boxitem"><fox_slider :arrData="arrData_4" :transitionTime="0.15" style="box-shadow: 20px 20px 20px" /></div>
        </div>
        <el-button class="m_t" @click="getRandomDataForSlider(4)" type="primary">Get Random Data For fox_slider</el-button>
      </div>
      <div class="wrap">
        <div class="title_s">只有一项数据的轮播图</div>
        <div class="desc m_b">只有一项数据的轮播图</div>
        <div class="box">
          <div class="boxitem"><fox_slider :arrData="arrData_5" /></div>
        </div>
        <el-button class="m_t" @click="getRandomDataForSlider(5)" type="primary">Get Random Data For fox_slider</el-button>
      </div>
      <div class="wrap">
        <div class="title_s">空数据轮播图</div>
        <div class="desc m_b">记得携带数据，否则会显示成这样</div>
        <div class="box">
          <div class="boxitem"><fox_slider  /></div>
        </div>
      </div>
      <div class="wrap">
        <div class="title_s tal">更新计划：</div>
        <div class="desc tal">1.添加底部按钮组高度控制，显示位置控制(悬浮于图片上方/只在鼠标悬浮时显示)</div>
        <!-- <div class="desc tal">2.增加插槽：包括轮播图片插槽、箭头按钮插槽、组按钮插槽</div> -->
        <div class="desc tal">3.增加轮播图切换方式：无论中间隔几幅轮播图，切换时永远只显示切换一次的动画（跳过中间实际存在的轮播图，就像目标和当前选中是相邻的一样）</div>
        <div class="desc tal">4.新增页面大小改变事件订阅，当页面大小改变时重新计算轮播图宽度</div>
        <div class="desc tal">5.增加移动端触控适配，检测为移动端时取消自动隐藏箭头/组按钮</div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'sliderView',
  data() {
    return {
      arrData_1: ['01', '02', '03', '04', '05', '06', '07'],
      arrData_2: ['01', '02', '03', '04', '05', '06',],
      arrData_3: ['01', '02', '03'],
      arrData_4: ['01',],
      arrData_5: ['01', '02', '03'],
    }
  },
  mounted() {
  },
  methods: {
    getRandomDataForSlider(idx) {
      let loopTime = _.random(1, 15);
      let arrNew = [];
      for (let y = 0; y < loopTime; y++) {
        arrNew.push(String(y).padStart(2, '0'));
      }
      this[`arrData_${idx}`] = _.cloneDeep(arrNew);
    },
  },
}
</script>
<style scoped lang="scss">
</style>