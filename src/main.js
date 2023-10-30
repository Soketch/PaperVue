import { createApp } from 'vue'
import App from './App.vue'
import "./assets/style/reset.css";
import "./assets/style/global.css";
import router from './router'
import store from "./store";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import api from './api/api.js'

import "element-plus/theme-chalk/el-loading.css";
import "element-plus/theme-chalk/el-message.css";
import "element-plus/theme-chalk/el-notification.css";
import "element-plus/theme-chalk/el-message-box.css";


import Loading from "./components/Loading/index.js";

import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

const app = createApp(App)
app.use(router).use(store)
app.use(Loading)
app.use(mavonEditor);

app.config.globalProperties.$api = api

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
