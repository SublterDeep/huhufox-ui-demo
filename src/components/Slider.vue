<template>
  <div class="root" @mouseenter="autoScroll = false" @mouseleave="autoScroll = true"
    :style="{ borderRadius: borderRadius + (typeof borderRadius === 'string' ? '' : 'px') }">
    <section class="coverArea" v-if="disable"></section>
    <section class="picArea" :style="{ height: picHeight + (typeof picHeight === 'string' ? '' : 'px') }">
      <div class="picArrowArea" v-if="arrData.length > 1">
        <div @click="handleArrowBTNclick(false)" class="picArrowArea_leftBTN arrowBTN"></div>
        <div @click="handleArrowBTNclick(true)" class="picArrowArea_rightBTN arrowBTN"></div>
      </div>
      <div class="pic_container" ref="pic_container">
        <section id="left_container"
          :style="{ width: `${containerWidth}px`, left: `${container_pos[0]}px`, transition: (transitionAnim ? transitionTime : 0) + 's' }">
          <div class="imgContainer" v-for="(item, idx) in arrData" :key="idx" :style="{ background: item.color }">{{ idx
            + 1
            }}</div>
        </section>
        <section id="center_container"
          :style="{ width: `${containerWidth}px`, left: `${container_pos[1]}px`, transition: (transitionAnim ? transitionTime : 0) + 's' }">
          <div class="imgContainer" v-for="(item, idx) in arrData" :key="idx" :style="{ background: item.color }">{{ idx
            + 1
            }}</div>
        </section>
        <section id="right_container"
          :style="{ width: `${containerWidth}px`, left: `${container_pos[2]}px`, transition: (transitionAnim ? transitionTime : 0) + 's' }">
          <div class="imgContainer" v-for="(item, idx) in arrData" :key="idx" :style="{ background: item.color }">{{ idx
            + 1
            }}</div>
        </section>
      </div>
    </section>
    <section class="ctrlArea" :style="{ height: ctrlHeight + (typeof ctrlHeight === 'string' ? '' : 'px') }">
      <div class="btnGroupArea">
        <div @click="handleCtrlBTNclick(idx)" :class="getCtrlBTNactiveClass(idx)" v-for="(item, idx) in arrData"
          :key="idx"></div>
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
    disable: { // 关闭
      type: Boolean,
      default: false,
    },
    borderRadius: { // 圆角默认为0
      type: String || Number,
      default: '0px',
    },
    arrData: { // 图片数据
      type: Array,
    },
    transitionTime: { // 切换轮播图时过渡动画时长
      type: Number,
      default: 0.15,
    },
    scrollTime: { // 自动轮播停留时长
      type: Number,
      default: 1.5,
    },
    btnStyle: {
      type: Object,
      default: (data={})=>{return data}
    }
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
      containerIndex: 0, // [左，中，右]容器对应[-1，0，1]
      containerWidth: 0, // [左，中，右]容器宽度
      container_pos: [0, 0, 0], // [左，中，右]容器x坐标
      container_timer: null,
      transitionAnim: true, // 是否启用翻页动画
    };
  },
  mounted() {
    this.init();
  },
  watch: {
    autoScroll(nval, oval) {
      this.handleInterval(nval);
    },
    // 轮播图分为 [左,中,右] 完全相等的三个部分,每个部分显示所有要轮播的图片 默认为中间部分轮播 当涉及跨度较大的轮播变化时 从中间轮播转到左/右轮播对应位置
    nowSelect(nval, oval) {
      if (nval === oval) return;
      let isRight = true;
      let domIndex = 0; // [左=-1，中=0，右=1]
      // 分别计算向左/向右滑动到选中项所需的步数 选择步数最少的一侧为滑动方向
      let leftStepNum = 0;
      let rightStepNum = 0;
      if (nval > oval) {
        leftStepNum = (oval - 0) + (this.arrData.length - nval);
        rightStepNum = nval - oval;
        domIndex = rightStepNum > leftStepNum ? -1 : 0;
      }
      else {
        leftStepNum = oval - nval;
        rightStepNum = (nval - 0) + (this.arrData.length - oval);
        domIndex = leftStepNum > rightStepNum ? 1 : 0;
      }
      isRight = rightStepNum > leftStepNum ? false : true;
      // console.log(`选中项：${nval}，当前项：${oval}；左侧步数：${leftStepNum}，右侧步数：${rightStepNum}；向${isRight?'右':'左'}侧滑动`);
      this.handleAnimation(isRight, domIndex);
    },
    arrData: {
      handler(nval, oval) {
        // 图片数组数据有变化 
        if (this.nowSelect > nval.length) this.nowSelect = 0;
        this.init();
      },
      deep: true
    }
  },
  beforeDestory() {
    this.handleInterval(false);
  },
  methods: {
    init() {
      this.handleInterval();
      this.handleData();
      this.handleBtnStyle();
      this.handleContainerPos(0);
    },
    handleBtnStyle () {
      let btnStyle = {
        arrowColor: 'arrowColor',
        arrowColor_hover: 'arrowColor_hover',
        arrowColor_active: 'arrowColor_active',
        groupColor: 'groupColor',
        groupColor_hover: 'groupColor_hover',
        groupColor_active: 'groupColor_active',
        ...this.btnStyle,
      }
      console.log(btnStyle);
    },
    rmb(str) {
      let strArr = String(parseFloat(str).toFixed(2))
        .split('')//字符串按照''拆分成数组
        .reverse()//数组反转,方便计数
        .map((item, index) => {
          return index > 3 && !(index % 3) ? item + ',' : item; //包含小数点，5位以上才有逗号,注意index%3 要有括号包裹，
        });
      return strArr.reverse().join('');
    },
    getContainerWidth() {
      let width = window.getComputedStyle(this.$refs.pic_container).width;
      return parseInt(width);
    },
    handleContainerPos(idx) {
      // 获取容器宽度
      let width = this.getContainerWidth();
      let containerWidth = width * this.arrData.length;
      let offsetWidth = -(width * this.nowSelect);
      // 设置位置
      let arrPos = [-(containerWidth + offsetWidth), offsetWidth, (containerWidth + offsetWidth)];
      switch (idx) {
        case -1:
          arrPos = [offsetWidth, (containerWidth + offsetWidth), (containerWidth + offsetWidth) * 2];
          break;
        case 1:
          arrPos = [-((containerWidth + offsetWidth) * 2), -(containerWidth + offsetWidth), offsetWidth];
          break;
      }
      this.transitionAnim = true;
      this.container_pos = arrPos;
      this.containerWidth = containerWidth;
      if (_.isNull(this.container_timer) && idx !== 0) {
        this.container_timer = setTimeout(() => {
          this.transitionAnim = false;
          this.container_pos = [-(containerWidth + offsetWidth), offsetWidth, (containerWidth + offsetWidth)];
          this.container_timer = null;
        }, this.transitionTime * 1000);
      }
      else {
        clearTimeout(this.container_timer);
        this.container_timer = null;
      }
    },
    // 动画控制器
    handleAnimation(isRight = true, domIndex = 0) {
      // console.log(`向${isRight ? '右' : '左'}滑动，显示为${domIndex === 0 ? '中间' : (domIndex === -1 ? '左侧' : '右侧')}部分`);
      if (isRight) {
        // 向右滑动
        // console.log('scroll right');
      }
      else {
        // 向左滑动
        // console.log('scroll left');
      }
      this.handleContainerPos(domIndex);
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
          }, 2000);
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
  /* background-color: orchid; */
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
  /* background-color: red; */
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
  display: flex;
  overflow: hidden;
  /* background-color: purple */
}

.ctrlArea {
  width: 100%;
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.btnGroupArea {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 0 20px;
  /* background-color: yellow; */
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

#left_container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  display: flex;
  background-color: orange;
}

#center_container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  display: flex;
  background-color: orangered;
}

#right_container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  display: flex;
  background-color: orchid;
}

.imgContainer {
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 33px;
  color: white;
  /* opacity: .2; */
}
</style>
