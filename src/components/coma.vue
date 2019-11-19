<template>
  <div>
    {{num}}
    <br>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  // 第一种
  // computed: mapState(['count'])
  // computed: mapState({
  //   num: 'count'
  // })

  // 保留组件本身自己的计算属性
  computed: {
    // 计算属性本身的计算属性
    // test() {},
    ...mapState({
      num: 'count'
    })
  }
};
</script>

<style>

</style>
