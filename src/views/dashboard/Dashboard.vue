<template>
  <Navbar></Navbar>
  <div class="container">
    <router-view />
  </div>
</template>
<script>
import Navbar from '@/components/dashboard/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  created() {
    // 從cookie取出token
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)carrieToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    // 所有axios請求加上token
    this.$http.defaults.headers.common.Authorization = token;
    // 檢查用戶是否仍持續登入
    const api = `${process.env.VUE_APP_API}api/user/check`;

    this.$http
      .post(api)
      .then((res) => {
        console.log(res);
        if (!res.data.success) {
          this.$router.push('/login');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
