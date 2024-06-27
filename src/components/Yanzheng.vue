<template>
  <div class="root">
    <section class="picArea">
      <div id="arm"
        :style="{transform: `rotate(${angel} + 'deg')`}"
      ></div>
    </section>
    <section class="ctrlArea">
      <div class="ctrlContainer">
        <div id="bar"
          :style="{left: `${angel}px`}"
          @mousedown="isMousepress=true"
          @mouseup="isMousepress=false"
          @mouseleave="isMousepress=false"
          @mousemove="handleMousemove"
        ></div>
      </div>
    </section>
  </div>

</template>

<script>
export default {
  name: 'Yanzheng',
  data() {
    return {
      angel: 0,
      isMousepress: false,
    };
  },
  methods: {
    handleMousedown (ev) {
      this.isMousepress = true;
    },
    handleMouseup (ev) {
      this.isMousepress = false;
    },
    handleMousemove (ev) {
      if (this.isMousepress) this.angel = ev.screenX;
    },
  },
}
</script>

<style scoped>
.root {
  width: 500px;
  height: 570px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center
}
.picArea {
  width: 500px;height: 500px;
  background-color: red;
  position: relative;
}
.ctrlContainer {
  width: 500px; height: 50px;
  background-color: purple;
  position: relative;
}
#bar {
  width: 50px;height: 50px;
  background-color: green;
  position: absolute;
  top: 0;
}
.ctrlArea {
  width: 500px;height: 50px;
  transform: rotate();
  background-color: orange;
}
#arm {
  width: 25px; height: 200px;
  background-color: pink;
  position: absolute;
  top: 250px; left: 250px;
}
</style>
