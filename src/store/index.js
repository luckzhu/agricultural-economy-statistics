import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import charts from "./modules/charts";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    charts,
  },
  getters
});

export default store;
