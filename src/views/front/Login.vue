<template>
  <div class="container">
    <h2 class="fw-bold text-center py-3">登入頁面</h2>
    <form @submit.prevent="login">
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          required
          v-model="user.username"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          required
          v-model="user.password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <button class="btn btn-primary d-block ms-auto" type="submit">登入</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.$http
        .post(api, this.user)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            const { token, expired } = res.data;
            // 把token存到cookie
            document.cookie = `carrieToken=${token}; expires=${new Date(expired)};`;
            this.$router.push('/dashboard');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
