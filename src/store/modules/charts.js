const state = {
  // colors: ["#c12e34", "#e6b600", "#0098d9", "#2b821d", "#005eaa", "#339ca8", "#cda819", "#32a487"],
  colors: ["#c1232b", "#27727b", "#fcce10", "#e87c25", "#b5c334", "#fe8463", "#9bca63", "#fad860", "#f3a43b", "#60c0dd", "#d7504b", "#c6e579", "#f4e001", "#f0805a", "#26c0c0"],
  borderBoxColor1: {
    start: "#11eefd",
    end: "#0078d2"
  },
  borderBoxColor2: {
    start: "#333",
    end: "#444"
  },
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
