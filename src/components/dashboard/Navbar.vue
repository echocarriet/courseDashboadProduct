<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand fw-bold" to="/dashboard">後台</router-link>
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
import NavbarCollapse from '@/components/dashboard/NavbarCollapse.vue';

export default {
  components: {
    NavbarCollapse,
  },
};
</script>
