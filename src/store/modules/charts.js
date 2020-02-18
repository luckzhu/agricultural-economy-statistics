const state = {
  colors: ["#c12e34", "#e6b600", "#0098d9", "#2b821d", "#005eaa", "#339ca8", "#cda819", "#32a487"],
  graphData: null
};

const mutations = {
  SET_CHARTS_DATA(state, data) {
    state.graphData = data;
  }
};

const actions = {
  setChartsData({ commit }, data) {
    commit("SET_CHARTS_DATA", data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
