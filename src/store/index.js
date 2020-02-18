import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import charts from "./modules/charts";
import user from "./modules/user";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    charts,
    user
  },
  getters
});

export default store;
