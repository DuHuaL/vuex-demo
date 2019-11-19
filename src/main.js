// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Vuex from 'vuex';

Vue.config.productionTip = false;
Vue.use(Vuex);
/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
});
