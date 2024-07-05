<template>
  <div class="wrap">
    <div class="title">测试</div>
    <div class="title_s">Test view</div>
    <div class="desc">描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字描述文字</div>
    <div class="divider_line"></div>
    <div class="flex-col flex-alc flex-gap">
      <!-- <Yanzheng/> -->
      <el-button @click="testRandom" type="primary">Random Arr Num Chunk Test</el-button>
      <el-button @click="testArrDifference" type="primary">Arr Difference Test</el-button>
      <div><el-input @input="handleInput" type="textarea" ref="textareadev" :rows="2" placeholder="请输入内容"
          v-model="textarea" /></div>
      <el-button @click="testMerge" type="primary">Merge Object Test</el-button>
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash';
import { arrToday, arrYesterday } from '@/assets/fakedata/testView';
export default {
  name: 'testView',
  data() {
    return {
      textarea: '',
    }
  },
  mounted() {
  },
  methods: {
    testMerge() {
      const object1 = {
        a: 1,
        b: {
          c: 2,
          d: 3
        }
      };

      const object2 = {
        a: 'object2 a',
        b: 'object2 b',
        f: 7
      };

      const object3 = {
        b: 'object3 b',
        g: 8
      };

      let mergeObj = _.merge(object1, object2, object3);
      console.log(mergeObj);
    },
    handleInput: debounce((i) => {
      console.log(i);
    }, 500),
    testRandom() {
      let loopTime = _.random(5, 15);
      let arrRandnum = [];
      for (let i = 0; i < loopTime; i++) {
        arrRandnum.push(_.random(1, 150));
      }
      let arrChunkRandnum = _.chunk(arrRandnum, 3);
      console.log(arrRandnum);
      console.log(arrChunkRandnum);
    },
    testArrDifference() {
      // let isDiff = _.differenceBy(arrToday, arrYesterday, (o) => {
      //   return o.shopId + o.shopId + o.devId
      // })
      let [diffAtoB, diffBtoA] = this.findDifferences(arrToday, arrYesterday);
      console.log(diffAtoB);
      console.log(diffBtoA);
    },
    // 对比A, B数组 将A与B的差异 和 B与A的差异分别存在数组中 并返回[diffAtoB, diffBtoA]
    findDifferences(a, b) {
      // 辅助函数，用于检查对象是否存在于数组中（具有相同所有属性）  
      function isEquivalentInArray(obj, arr) {
        return _.some(arr, function (item) {
          return _.isEqual(obj, item);
        });
      }
      // 使用 _.filter 找出在 b 中不存在的对象  
      const diffAtoB = _.filter(a, function (objA) {
        return !isEquivalentInArray(objA, b);
      });
      // 使用 _.filter 找出在 a 中不存在的对象  
      const diffBtoA = _.filter(b, function (objB) {
        return !isEquivalentInArray(objB, a);
      });
      // 返回两个差异数组  
      return [diffAtoB, diffBtoA];
    }
  },
}
</script>
<style scoped lang="scss">
</style>