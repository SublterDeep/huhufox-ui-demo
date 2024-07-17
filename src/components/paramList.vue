<template>
  <div class="root">

    <!-- params -->
    <div v-if="paramsList.length!==0" class="desc tal m_b">参数列表 params</div>
    <fox_collapse v-if="paramsList.length!==0" :showIcon="false">
      <fox_collapse_item lockContent style="background-color: #F1F1F1">
        <template #header>
          <div class="flex-between">
            <div class="headerDiv">参数名称</div>
            <div class="headerDiv">参数作用</div>
            <div class="headerDiv">参数类型</div>
            <div class="headerDiv">默认值</div>
            <div class="headerDiv">可选值</div>
          </div>
        </template>
      </fox_collapse_item>
      <fox_collapse_item v-for="(item, idx) in paramsList" :key="idx">
        <template #header>
          <div class="flex-between">
            <div>{{ item.prop }}</div>
            <div>{{ item.name }}</div>
            <div>{{ item.type.join(',') }}</div>
            <div>{{ item.default }}</div>
            <div>{{ item.optional.join(',') }}</div>
          </div>
        </template>
        <div class="desc">
          <p v-for="(innerItem, innerIdx) in item.desc" :key="innerIdx">{{ innerItem }}</p>
        </div>
      </fox_collapse_item>
    </fox_collapse>
    <div v-if="paramsList.length!==0" class="divider"></div>

    <!-- slots -->
    <div v-if="slotsList.length!==0" class="desc tal m_b">插槽列表 slots</div>
    <fox_collapse v-if="slotsList.length!==0" :showIcon="false">
      <fox_collapse_item lockContent style="background-color: #F1F1F1">
        <template #header>
          <div class="flex-between">
            <div class="headerDiv">插槽名称</div>
            <div class="headerDiv">插槽位置</div>
            <div class="headerDiv">插槽使用</div>
          </div>
        </template>
      </fox_collapse_item>
      <fox_collapse_item v-for="(item, idx) in slotsList" :key="idx">
        <template #header>
          <div class="flex-between">
            <div>{{ item.prop }}</div>
            <div>{{ item.name }}</div>
            <div>{{ item.type.join(',') }}</div>
          </div>
        </template>
        <div class="desc">
          <p v-for="(innerItem, innerIdx) in item.desc" :key="innerIdx">{{ innerItem }}</p>
        </div>
      </fox_collapse_item>
    </fox_collapse>
    <div v-if="slotsList.length!==0" class="divider"></div>

    <!-- function -->
    <div v-if="functionList.length!==0" class="desc tal m_b">函数列表 function</div>
    <fox_collapse v-if="functionList.length!==0" :showIcon="false">
      <fox_collapse_item lockContent style="background-color: #F1F1F1">
        <template #header>
          <div class="flex-between">
            <div class="headerDiv">函数名称</div>
            <div class="headerDiv">函数作用</div>
            <div class="headerDiv">函数参数值列表</div>
            <div class="headerDiv">函数返回值列表</div>
          </div>
        </template>
      </fox_collapse_item>
      <fox_collapse_item v-for="(item, idx) in functionList" :key="idx">
        <template #header>
          <div class="flex-between">
            <div>{{ item.prop }}</div>
            <div>{{ item.name }}</div>
            <div>{{ item.params.join(',') }}</div>
            <div>{{ item.returns.join(',') }}</div>
          </div>
        </template>
        <div class="desc">
          <p v-for="(innerItem, innerIdx) in item.desc" :key="innerIdx">{{ innerItem }}</p>
        </div>
      </fox_collapse_item>
    </fox_collapse>
  </div>
</template>

<script>
export default {
  name: 'collapseView',
  props: {
    dataList: {},
  },
  data() {
    return {
      paramsList: [],
      slotsList: [],
      functionList: [],
      pList: [],
    }
  },
  beforeMount() {
    this.init();
  },
  mounted() {
  },
  methods: {
    init() {
      this.paramsList = this.dataList.filter((elm) => { return elm.tag === 'params' });
      this.slotsList = this.dataList.filter((elm) => { return elm.tag === 'slots' });
      this.functionList = this.dataList.filter((elm) => { return elm.tag === 'function' });
      // console.log(this.paramsList);
      // console.log(this.slotsList);
      // console.log(this.functionList);
    },
  },
}
</script>

<style scoped>
.root {
  width: 100%;
}

.displayArea {
  background-color: #F1F1F1;
}

.flex-between>div {
  flex: 1;
  color: #666;
}

.desc>p {
  line-height: 0.5;
  cursor: default;
}

.headerDiv {
  color: #333;
}
</style>