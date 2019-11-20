import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 1,
    msg: 'Hello Vuex'
  },
  // 可以看作store内部提供的计算属性
  getters: {
    reverseMsg(state) {
      return state.msg.split('').reverse().join('');
    }
  },
  mutations: {
    // increment(state) {
    //   state.count++;
    // }
    // 可以传另一个参数载荷
    increment(state, payload) {
      // state.count += payload;
      // state.count += payload.num;
      // console.log(payload);
      state.count += payload.num;
    }
  }
});
export default store;
