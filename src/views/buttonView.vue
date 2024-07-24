<template>
  <div class="wrap">
    <div class="title">按钮</div>
    <div class="title_s m_b">Button view</div>
    <div class="desc">这是什么？按一下</div>
    <div class="divider"></div>

    <div class="box flex-col flex-alc flex-gap">
      <div class="wrap">
        <div class="title_s m_b">标准按钮</div>
        <div class="desc m_b">亮色模式/深色模式的按钮</div>
        <div class="box">
          <div class="boxitem">
            <fox_collapse :bgColor="'#ccc'" :sticky="true">
              <fox_collapse_item :position="'bottom'" class="displayArea">
                <template v-slot:header>
                  <div class="flex flex-center flex-gap">
                    <fox_button :label="'BUTTON'"></fox_button>
                    <fox_button :label="'BUTTON'" darkMode></fox_button>
                    <fox_button :label="getLabel(dmode)" :darkMode="dmode" @onClick="dmode=!dmode"></fox_button>
                  </div>
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
        <div class="title_s m_b">按钮大小</div>
        <div class="desc m_b">各种大小的按钮</div>
        <div class="box">
          <div class="boxitem">
            <fox_collapse :bgColor="'#ccc'" :sticky="true">
              <fox_collapse_item :position="'bottom'" class="displayArea">
                <template v-slot:header>
                  <div class="flex flex-center flex-gap">
                    <fox_button :label="'LARGE BUTTON'" darkMode large></fox_button>
                    <fox_button :label="'NORMAL BUTTON'" darkMode></fox_button>
                    <fox_button :label="'MINI BUTTON'" darkMode mini></fox_button>
                  </div>
                </template>
                <p class="tal">Template:</p>
                <pre><code class="language-xml line-numbers" v-text="codeText[1][0]"></code></pre>
              </fox_collapse_item>
            </fox_collapse>
          </div>
        </div>
      </div>
      <div class="divider"></div>

      <div class="wrap">
        <div class="title_s m_b">自定义样式按钮</div>
        <div class="desc m_b">自定义圆角、主题颜色、文本颜色、背景颜色、圆角边框的按钮</div>
        <div class="box">
          <div class="boxitem">
            <fox_collapse :bgColor="'#ccc'" :sticky="true">
              <fox_collapse_item :position="'bottom'" class="displayArea">
                <template v-slot:header>
                  <div class="flex flex-center flex-gap">
                    <fox_button :label="'PINK BUTTON'" darkMode :themeColor="'pink'"></fox_button>
                    <fox_button :label="'ORANGE BUTTON'" darkMode :bgColor="'#409EFF'" :textColor="['white', 'orange', 'lightgreen']"></fox_button>
                    <fox_button :label="'BUTTON'" darkMode :borderRadius="0"></fox_button>
                  </div>
                </template>
                <p class="tal">Template:</p>
                <pre><code class="language-xml line-numbers" v-text="codeText[2][0]"></code></pre>
              </fox_collapse_item>
            </fox_collapse>
          </div>
        </div>
      </div>
      <div class="divider"></div>

      <div class="wrap">
        <div class="title_s m_b">按钮插槽与自定义内容</div>
        <div class="desc">包括按钮图标插槽、按钮文字插槽；或完全自定义按钮内容插槽</div>
        <div class="desc m_b">注意：<b>当使用完全自定义按钮内容插槽customInner时，label属性、icon插槽、label插槽均失效</b></div>
        <div class="box">
          <div class="boxitem">
            <fox_collapse :bgColor="'#ccc'" :sticky="true">
              <fox_collapse_item :position="'bottom'" class="displayArea">
                <template v-slot:header>
                  <div class="flex flex-center flex-gap">
                    <fox_button :label="'BUTTON'" darkMode>
                      <template v-slot:icon>
                        <div style="width: 40px;height: 40px;background-color: red;font-size: 12px;">图标插槽在这</div>
                      </template>
                      <template v-slot:label>
                        <div style="width: 40px;height: 40px;background-color: purple;font-size: 12px;">文本插槽在这</div>
                      </template>
                    </fox_button>
                    <fox_button :label="'BUTTON'" darkMode>
                      <template v-slot:customInner>
                        <div style="width: 40px;height: 40px;background-color: red;font-size: 12px;">完全自定义按钮内容插槽</div>
                      </template>
                    </fox_button>
                  </div>
                </template>
                <p class="tal">Template:</p>
                <pre><code class="language-xml line-numbers" v-text="codeText[3][0]"></code></pre>
              </fox_collapse_item>
            </fox_collapse>
          </div>
        </div>
      </div>
      <div class="divider"></div>

      <div class="wrap">
        <div class="title_s m_b">按钮文字与图标</div>
        <div class="desc m_b">可自定义文字与图标的相对位置和间距</div>
        <div class="box">
          <div class="boxitem">
            <fox_collapse :bgColor="'#ccc'" :sticky="true">
              <fox_collapse_item :position="'bottom'" class="displayArea">
                <template v-slot:header>
                  <div class="flex flex-center flex-gap">
                    <fox_button :label="'BUTTON'" darkMode :iconPosition="'right'" :iconGap="'50px'">
                      <template v-slot:icon>
                        <div style="width: 40px;height: 40px;background-color: red;font-size: 12px;">图标插槽在这</div>
                      </template>
                      <template v-slot:label>
                        <div style="width: 40px;height: 40px;background-color: purple;font-size: 12px;">文本插槽在这</div>
                      </template>
                    </fox_button>
                  </div>
                </template>
                <p class="tal">Template:</p>
                <pre><code class="language-xml line-numbers" v-text="codeText[4][0]"></code></pre>
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
        <div class="desc">1.异步按钮、禁用按钮</div>
      </div>

    </div>
  </div>
</template>

<script>
import { codeBlock, paramList } from '@/assets/fakedata/buttonView';
export default {
  name: 'buttonView',
  data() {
    return {
      dmode: true,
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
    getLabel(m) {
      return '点击切换' + (m ? '亮色' : '深色') + '模式';
    }
  },
}
</script>
<style scoped lang="scss">
.displayArea {
  background-color: #F1F1F1;
}
</style>