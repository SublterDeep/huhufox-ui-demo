<template>
  <div class="root" :style="{borderRadius: borderRadius + (typeof borderRadius === 'string' ? '' : 'px') }">
    <section class="coverArea" v-if="disable"></section>
    <section class="picArea" :style="{ height: picHeight + (typeof picHeight === 'string' ? '' : 'px') }">
      <div class="picArrowArea">
        <div class="picArrowArea_leftBTN arrowBTN"></div>
        <div class="picArrowArea_rightBTN arrowBTN"></div>
      </div>
      <div class="pic_container"></div>
    </section>
    <section class="ctrlArea"  :style="{ height: ctrlHeight + (typeof ctrlHeight === 'string' ? '' : 'px') }">
      <div class="btnGroupArea">
        <div class="ctrlBTN" v-for="(item, idx) in arrData" :key="idx"></div>
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
    };
  },
  mounted() {
    this.handleData();
  },
  methods: {
    // 处理图片数组
    handleData() {
      for (let i=0 ; i<this.arrData.length ; i++) {
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
  width: 100%; height: 100%;
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.picArrowArea_leftBTN {
}
.picArrowArea_rightBTN {
}
.arrowBTN {
  width: 30px; height: 55px;
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
  width: 100%; height: 100%;
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
  width: 12px; height: 12px;
  border-radius: 50%;
  background-color: #000;
  cursor: pointer;
  transition: .15s;
}
.ctrlBTN:hover {
  background-color: #666;
}
.ctrlBTN:active {
  background-color: #333;
  transform: scale(0.95);
}
</style>
