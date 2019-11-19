import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    msg: 'Hello Vuex'
  },
  // 可以看作store内部提供的计算属性
  getters: {
    reverseMsg(state) {
      return state.msg.split('').reverse().join('');
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});
export default store;
