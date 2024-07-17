import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import _ from 'lodash';
import $ from 'jquery';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import utils from './utils/publicMethods';
import huhufoxUI from 'huhufox-ui';
import Prism from "prismjs";
import paramList from '@/components/paramList.vue';

Vue.use(ElementUI);
Vue.use(huhufoxUI);
Vue.use(Prism);

Vue.component('paramList', paramList)

Vue.config.productionTip = false
Vue.prototype.$ = $;
Vue.prototype.$utils = utils;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
