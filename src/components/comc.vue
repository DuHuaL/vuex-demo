<template>
  <div>
    comc <br>
    <button @click="handleClick">按钮</button>
    {{num}}
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  methods: {
    handleClick() {
      // this.$store.commit('increment');
      // this.$store.commit('increment', 3);
      // this.$store.commit('increment', {
      //   num: 3
      // });
      // 第二种调用方法
      this.$store.commit({
        type: 'increment',
        num: 3
      });
    }
  },
  computed: {
    ...mapState({
      num: 'count'
    })
  }
};
</script>

<style>

</style>
