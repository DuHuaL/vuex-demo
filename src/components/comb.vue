<template>
  <div>
    comb <br>
    {{message}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      message: 'reverseMsg'
    })
  }
};
</script>

<style>

</style>
