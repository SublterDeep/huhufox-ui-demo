import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageScroll: [{page: "homeView", progress: 0}],
  },
  getters: {
    getPageScroll: function(state) {
      return state.pageScroll;
    },
  },
  mutations: {
    setPageScroll: function(state, obj) {
      let newObj = true;
      for(let i=0 ; i<state.pageScroll.length ; i++) {
        if (_.isEqual(state.pageScroll[i].page, obj.page)) {
          state.pageScroll[i].progress = obj.progress;
          newObj = false;
          break;
        }
      }
      if (newObj) state.pageScroll.push(obj);
    }
  },
  actions: {
  },
  modules: {
  }
})
