<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold" href="#">前台</a>
      <button
        class="navbar-toggler"
        type="button"
        @click.prevent="$refs.NavbarCollapse.toggleCollapse()"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <NavbarCollapse ref="NavbarCollapse"></NavbarCollapse>
    </div>
  </nav>
</template>
<script>
import NavbarCollapse from '@/components/front/NavbarCollapse.vue';

export default {
  components: {
    NavbarCollapse,
  },
};
</script>
