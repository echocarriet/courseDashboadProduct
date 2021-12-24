<template>
  <div class="collapse navbar-collapse" id="navbarNav" ref="bsCollapse">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/dashboard">產品</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" @click.prevent="logout">登出</a>
      </li>
    </ul>
  </div>
</template>
<script>
import CollapseMixin from '@/mixins/CollapseMixin';

export default {
  mixins: [CollapseMixin],
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api).then((res) => {
        if (res.data.success) {
          this.$router.push('/login');
          // 清除 cookie
          document.cookie = 'carrieToken=; expires=; path=/';
          console.log(res);
        }
      });
    },
  },
};
</script>
