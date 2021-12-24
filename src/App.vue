<template>
  <router-view />
</template>
<script>
import emitter from './methods/emitter';

export default {
  provide() {
    return {
      emitter,
    };
  },
};
</script>
<style lang="scss">
@import './assets/stylesheets/all';
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css');
</style>
