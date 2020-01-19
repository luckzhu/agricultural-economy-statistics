import Vue from "vue";

import "normalize.css/normalize.css";
import VCharts from "v-charts";

import App from "./App.vue";

Vue.use(VCharts);

import router from "./router";
import store from "./store";
import "./plugins/element.js";

import "@/styles/variable.scss";
import "./icons";
import "./utils/rem"; // rem 自适应

import "./utils/halloween.js" //echart主题

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
