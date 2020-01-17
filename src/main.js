import Vue from "vue";

import "normalize.css/normalize.css";

import App from "./App.vue";

import router from "./router";
import store from "./store";
import "./plugins/element.js";

import "@/styles/variable.scss";
import "./icons";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
