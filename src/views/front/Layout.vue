<template>
  <Navbar></Navbar>
  <div class="container">
    <h2 class="text-center py-5">請點選「後台登入」進入後台操作</h2>
    <router-view />
  </div>
</template>
<script>
import Navbar from '@/components/front/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>
