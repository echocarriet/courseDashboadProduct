import { createApp } from 'vue';

// 匯入 vue axios
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';

const app = createApp(App);

// 註冊 vue axios
app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
