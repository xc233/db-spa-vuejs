import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bgColor:'rgb(47, 54, 64)',
    title:'豆瓣电影'
  },
  mutations: {
    changeBg(state,menu){
      state.bgColor = menu.bgColor;
      state.title = menu.title;
    }
  },
  actions: {
    //{commit}这个写法叫做参数结构 
    // Action 提交的是 mutation，而不是直接变更状态。
    changeBg({commit},menu){
      commit('changeBg',menu);
    }
  },
});
