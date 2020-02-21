import Vue from "vue";

import "normalize.css/normalize.css";
import VCharts from "v-charts";

import App from "./App.vue";

Vue.use(VCharts);

import router from "./router";
import store from "./store";
import "./plugins/element.js";

import '@/styles/index.scss' // global css

import "./icons";
import "./utils/rem"; // rem 自适应

import _ from "lodash";
Vue.prototype._ = _;

import "./utils/EchartsStyle/light" //echart主题
import "./utils/EchartsStyle/dark" //echart主题

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
