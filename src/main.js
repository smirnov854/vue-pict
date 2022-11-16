import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './vuex/store';
import "./config/axios";

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'


const app=createApp(App)

app.config.globalProperties.$hostname = 'http://91.211.147.42:7777/'

app.use(router)
app.use(store)
app.mount("#app")

