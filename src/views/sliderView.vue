<template>
  <div class="wrap">

    <div class="title">轮播图</div>
    <div class="title_s m_b">Slider view</div>
    <div class="desc">轮播图用于展示多张图片或内容，通常用于网站首页、产品展示或广告推广等。</div>
    <div class="divider"></div>

    <div class="flex-col box">
      <div class="wrap">
        <div class="title_s m_b">标准轮播图</div>
        <div class="desc m_b">非常普通的轮播图</div>
        <div class="box">
          <div class="boxitem">
            <fox_collapse>
              <fox_collapse_item :position="'bottom'">
                <template v-slot:header>
                  <fox_slider :arrData="arrData_1" />
                  <el-button class="m_t" @click.stop="getRandomDataForSlider(1)" type="primary">点击获取随机数据</el-button>
                </template>
                <p class="tal">Template:</p>
                <pre><code class="language-xml line-numbers" v-text="codeText[0][0]"></code></pre>
                <p class="tal">Script:</p>
                <pre><code class="language-js line-numbers" v-text="codeText[0][1]"></code></pre>
              </fox_collapse_item>
            </fox_collapse>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      
      <div class="wrap">
        <div class="title_s m_b">自定义功能的轮播图</div>
        <div class="desc m_b">关闭自动轮播；仅在鼠标悬浮时显示箭头按钮；带有自定义按钮样式；关闭鼠标滑动控制的轮播图</div>
        <div class="box">
          <div class="boxitem">
            <fox_collapse>
              <fox_collapse_item :position="'bottom'">
                <template v-slot:header>
                  <fox_slider :mouseSwipe="false" :autoScroll="false" :alwaysShowArrow="false" :arrData="arrData_2" :btnStyle="{arrowColor: '#f60', arrowColor_hover: 'black', groupColor_active: 'red'}" />
                  <el-button class="m_t" @click.stop="getRandomDataForSlider(2)" type="primary">点击获取随机数据</el-button>
                </template>
                <p class="tal">Template:</p>
                <pre><code class="language-xml line-numbers" v-text="codeText[1][0]"></code></pre>
                <p class="tal">Script:</p>
                <pre><code class="language-js line-numbers" v-text="codeText[1][1]"></code></pre>
              </fox_collapse_item>
            </fox_collapse>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      
      <div class="wrap">
        <div class="title_s m_b">自定义样式的轮播图</div>
        <div class="desc m_b">带有圆角，隐藏箭头按钮的轮播图</div>
        <div class="box">
          <div class="boxitem">
            <fox_collapse>
              <fox_collapse_item :position="'bottom'">
                <template v-slot:header>
                  <fox_slider :arrData="arrData_3" :borderRadius="'15px'" :showArrow="false" />
                  <el-button class="m_t" @click.stop="getRandomDataForSlider(3)" type="primary">点击获取随机数据</el-button>
                </template>
                <p class="tal">Template:</p>
                <pre><code class="language-xml line-numbers" v-text="codeText[2][0]"></code></pre>
                <p class="tal">Script:</p>
                <pre><code class="language-js line-numbers" v-text="codeText[2][1]"></code></pre>
              </fox_collapse_item>
            </fox_collapse>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      
      <div class="wrap">
        <div class="title_s m_b">自定义外观的轮播图</div>
        <div class="desc m_b">自定义滚动过渡动画持续时间，自定义轮播图组件阴影的轮播图</div>
        <div class="box">
          <div class="boxitem">
            <fox_collapse>
              <fox_collapse_item :position="'bottom'">
                <template v-slot:header>
                  <fox_slider :arrData="arrData_4" :transitionTime="0.15" style="box-shadow: 20px 20px 20px" />
                  <el-button class="m_t" @click.stop="getRandomDataForSlider(4)" type="primary">点击获取随机数据</el-button>
                </template>
                <p class="tal">Template:</p>
                <pre><code class="language-xml line-numbers" v-text="codeText[3][0]"></code></pre>
                <p class="tal">Script:</p>
                <pre><code class="language-js line-numbers" v-text="codeText[3][1]"></code></pre>
              </fox_collapse_item>
            </fox_collapse>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      
      <div class="wrap">
        <div class="title_s m_b">只有一项数据的轮播图</div>
        <div class="desc m_b">只有一项数据的轮播图</div>
        <div class="box">
          <div class="boxitem">
            <fox_collapse>
              <fox_collapse_item :position="'bottom'">
                <template v-slot:header>
                  <fox_slider :arrData="arrData_5" />
                  <el-button class="m_t" @click.stop="getRandomDataForSlider(5)" type="primary">点击获取随机数据</el-button>
                </template>
                <p class="tal">Template:</p>
                <pre><code class="language-xml line-numbers" v-text="codeText[4][0]"></code></pre>
                <p class="tal">Script:</p>
                <pre><code class="language-js line-numbers" v-text="codeText[4][1]"></code></pre>
              </fox_collapse_item>
            </fox_collapse>
          </div>
        </div>
      </div>
      <div class="divider"></div>

      <div class="wrap">
        <div class="title_s m_b">空数据轮播图</div>
        <div class="desc m_b">记得携带数据，否则会显示成这样</div>
        <div class="box">
          <div class="boxitem">
            <fox_collapse>
              <fox_collapse_item :position="'bottom'">
                <template v-slot:header>
                  <fox_slider  />
                </template>
                <p class="tal">Template:</p>
                <pre><code class="language-xml line-numbers" v-text="codeText[5][0]"></code></pre>
              </fox_collapse_item>
            </fox_collapse>
          </div>
        </div>
      </div>
      <div class="divider"></div>

      <div class="wrap">
        <div class="title_s m_b">使用插槽的轮播图</div>
        <div class="desc m_b">提供更自由的样式设计。</div>
        <div class="desc m_b">左右箭头插槽</div>
        <div class="box">
          <div class="boxitem">
            <fox_collapse>
              <fox_collapse_item :position="'bottom'">
                <template v-slot:header>
                  <fox_slider :arrData="arrData_1">
                    <template v-slot:leftBTN><div class="flex-center" style="cursor: pointer;background-color: aqua;width: 20px;height: 60px;">L</div></template>
                    <template v-slot:rightBTN><div class="flex-center" style="cursor: pointer;background-color: aqua;width: 20px;height: 60px;">R</div></template>
                  </fox_slider>
                </template>
                <p class="tal">Template:</p>
                <pre><code class="language-xml line-numbers" v-text="codeText[6][0]"></code></pre>
                <p class="tal">Script:</p>
                <pre><code class="language-js line-numbers" v-text="codeText[6][1]"></code></pre>
              </fox_collapse_item>
            </fox_collapse>
          </div>
        </div>
        <div class="divider"></div>

        <div class="desc m_b">底部组按钮插槽：需要设置参数customGroup为true时生效</div>
        <div class="box">
          <div class="boxitem">
            <fox_collapse>
              <fox_collapse_item :position="'bottom'">
                <template v-slot:header>
                  <fox_slider :customGroup="true" :arrData="arrData_1">
                    <template v-slot:groupBTN="{ handleGroupClick }">
                      <div @click="handleGroupClick(idx)" v-for="(item, idx) in arrData_1" :key="idx">{{ idx+1 }}</div>
                    </template>
                  </fox_slider>
                </template>
                <p class="tal">Template:</p>
                <pre><code class="language-xml line-numbers" v-text="codeText[7][0]"></code></pre>
                <p class="tal">Script:</p>
                <pre><code class="language-js line-numbers" v-text="codeText[7][1]"></code></pre>
              </fox_collapse_item>
            </fox_collapse>
          </div>
        </div>
      </div>
      <div class="divider"></div>

      <div class="wrap">
        <div class="title_s m_b">参数列表</div>
        <paramList :dataList="params"></paramList>
      </div>
      <div class="divider"></div>

      <div class="wrap">
        <div class="title_s m_b">更新计划：</div>
        <div class="desc">1.添加底部按钮组高度控制，显示位置控制(悬浮于图片上方/只在鼠标悬浮时显示)</div>
        <div class="desc">2.增加插槽：包括轮播图片插槽、箭头按钮插槽、组按钮插槽</div>
        <div class="desc">3.增加轮播图切换方式：无论中间隔几幅轮播图，切换时永远只显示切换一次的动画（跳过中间实际存在的轮播图，就像目标和当前选中是相邻的一样）</div>
        <div class="desc">4.新增页面大小改变事件订阅，当页面大小改变时重新计算轮播图宽度</div>
        <div class="desc">5.增加移动端触控适配，检测为移动端时取消自动隐藏箭头/组按钮</div>
      </div>
    </div>

  </div>
</template>

<script>
import { codeBlock, paramList } from '@/assets/fakedata/sliderView';
export default {
  name: 'sliderView',
  data() {
    return {
      arrData_1: ['01', '02', '03', '04', '05', '06', '07'],
      arrData_2: ['01', '02', '03', '04', '05', '06',],
      arrData_3: ['01', '02', '03'],
      arrData_4: ['01', '02', '03'],
      arrData_5: ['01',],
      codeText: [],
      params: [],
    }
  },
  updated() {
    Prism.highlightAll(); //修改内容后重新渲染
  },
  beforeMount() {
    this.codeText = _.cloneDeep(codeBlock);
    this.params = _.cloneDeep(paramList);
  },
  mounted() {
    Prism.highlightAll();
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
.boxitem {
  width: 70%;
}
pre {
  text-align: left;
}
</style>