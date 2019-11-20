<template>
  <div id="app">
    <button @click="handleClick">增加</button>
    {{ $store.state.count}}
    <hr>
    <com-a></com-a>
    <hr>
    <com-b></com-b>
    <hr>
    <com-c></com-c>
  </div>
</template>

<script>
import ComA from '@/components/coma';
import ComB from '@/components/comb';
import ComC from '@/components/comc';
export default {
  name: 'App',
  methods: {
    handleClick() {
      this.$store.commit('increment');
    }
  },
  components: {
    ComA,
    ComB,
    ComC
  }
};
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
