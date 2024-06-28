<template>
  <div class="root" @mouseenter="autoScroll = false" @mouseleave="autoScroll = true"
    :style="{ borderRadius: borderRadius + (typeof borderRadius === 'string' ? '' : 'px') }">
    <section class="coverArea" v-if="disable"></section>
    <section class="picArea" :style="{ height: picHeight + (typeof picHeight === 'string' ? '' : 'px') }">
      <div class="picArrowArea" v-if="arrData.length>1">
        <div @click="handleArrowBTNclick(false)" class="picArrowArea_leftBTN arrowBTN"></div>
        <div @click="handleArrowBTNclick(true)" class="picArrowArea_rightBTN arrowBTN"></div>
      </div>
      <div class="pic_container"></div>
    </section>
    <section class="ctrlArea" :style="{ height: ctrlHeight + (typeof ctrlHeight === 'string' ? '' : 'px') }">
      <div class="btnGroupArea">
        <div @click="handleCtrlBTNclick(idx)" :class="getCtrlBTNactiveClass(idx)" v-for="(item, idx) in arrData" :key="idx"></div>
      </div>
    </section>
  </div>

</template>

<script>
export default {
  name: 'Slider',
  props: {
    picHeight: {
      type: String || Number,
      default: '200px',
    },
    ctrlHeight: {
      type: String || Number,
      default: '25px',
    },
    disable: {
      type: Boolean,
      default: false,
    },
    borderRadius: {
      type: String || Number,
      default: '0px',
    },
    arrData: {
      type: Array,
    },
  },
  model: {
    data: {
      prop: "arrData",
      event: "handleDataChange",
    }
  },
  data() {
    return {
      nowSelect: 0, // 轮播图当前项下标
      intervalTimer: null, // 自动轮播计时器对象
      autoScroll: true, // 是否自动轮播
    };
  },
  mounted() {
    this.handleInterval();
    this.handleData();
  },
  watch: {
    autoScroll(nval, oval) {
      this.handleInterval(nval);
    },
    nowSelect(nval, oval) {
      if (nval === oval) return;
      let isRight = true;
      // 分别计算向左/向右滑动到选中项所需的步数 选择步数最少的一侧为滑动方向
      let leftStepNum = 0;
      let rightStepNum = 0;
      if (nval > oval) {
        leftStepNum = (oval - 0) + (this.arrData.length - nval);
        rightStepNum = nval - oval;
      }
      else {
        leftStepNum = oval - nval;
        rightStepNum = (nval - 0) + (this.arrData.length - oval);
      }
      isRight = rightStepNum > leftStepNum ? false : true;
      // console.log(`选中项：${nval}，当前项：${oval}；左侧步数：${leftStepNum}，右侧步数：${rightStepNum}；向${isRight?'右':'左'}侧滑动`);
      this.handleAnimation(isRight);
    },
  },
  beforeDestory() {
    this.handleInterval(false);
  },
  methods: {
    // 动画控制器
    handleAnimation(isRight = true) {
      if (isRight) {
        // 向右滑动
        // console.log('scroll right');
      }
      else {
        // 向左滑动
        // console.log('scroll left');
      }
    },
    // 按钮点击事件
    handleCtrlBTNclick(idx) {
      this.nowSelect = idx;
      let n = idx - this.nowSelect;
      // 判断是否为临近按钮
    },
    // 左右箭头点击事件
    handleArrowBTNclick(plus) {
      if (plus) {
        // 下一页
        this.nowSelect = (this.nowSelect + 1) % this.arrData.length;
      }
      else {
        // 上一页
        if (this.nowSelect === 0) this.nowSelect = this.arrData.length - 1;
        else this.nowSelect = Math.abs(this.nowSelect - 1) % this.arrData.length;
      }
    },
    // 开启/关闭自动轮播计时器
    handleInterval(autoscroll = true) {
      if (autoscroll) {
        if (_.isNull(this.intervalTimer)) {
          this.intervalTimer = setInterval(() => {
            this.nowSelect = (this.nowSelect + 1) % this.arrData.length;
          }, 1000);
        }
      }
      else {
        clearInterval(this.intervalTimer);
        this.intervalTimer = null;
      }
    },
    // 获取当前选中样式
    getCtrlBTNactiveClass(idx) {
      if (idx === this.nowSelect) return 'ctrlBTN ctrlBTN_active';
      else return 'ctrlBTN';
    },
    // 处理图片数组
    handleData() {
      for (let i = 0; i < this.arrData.length; i++) {
        this.arrData[i] = {
          text: this.arrData[i],
          color: this.randomHexColor()
        }
      }
      console.log(this.arrData);
    },
    //随机生成十六进制颜色
    randomHexColor() {
      var hex = Math.floor(Math.random() * 16777216).toString(16);
      while (hex.length < 6) {
        hex = '0' + hex;
      }
      return '#' + hex;
    },
  },
}
</script>

<style scoped>
.root {
  background-color: #eee;
  position: relative;
  overflow: hidden;
}

.coverArea {
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: .4;
  cursor: not-allowed;
  position: absolute;
  z-index: 2;
  transition: .15s;
}

.picArea {
  width: 100%;
  background-color: orchid;
  position: relative;
}

.picArrowArea {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.picArrowArea_leftBTN {}

.picArrowArea_rightBTN {}

.arrowBTN {
  width: 30px;
  height: 55px;
  background-color: red;
  cursor: pointer;
  transition: .15s;
}

.arrowBTN:hover {
  background-color: #666;
}

.arrowBTN:active {
  background-color: #333;
  transform: scale(0.95);
}

.pic_container {
  width: 100%;
  height: 100%;
  background-color: purple
}

.ctrlArea {
  width: 100%;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btnGroupArea {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 0 20px;
  background-color: yellow;
}

.ctrlBTN {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #000;
  cursor: pointer;
  transition: .15s;
}

.ctrlBTN_active {
  background-color: red !important;
}

.ctrlBTN:hover {
  background-color: #666;
}

.ctrlBTN:active {
  background-color: #333;
  transform: scale(0.95);
}
</style>
