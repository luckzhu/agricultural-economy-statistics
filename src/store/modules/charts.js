const state = {
  // colors: ["#c12e34", "#e6b600", "#0098d9", "#2b821d", "#005eaa", "#339ca8", "#cda819", "#32a487"],
  colors: ["#c1232b", "#27727b", "#fcce10", "#e87c25", "#b5c334", "#fe8463", "#9bca63", "#fad860", "#f3a43b", "#60c0dd", "#d7504b", "#c6e579", "#f4e001", "#f0805a", "#26c0c0"],
  // darkColors: ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"],
  // borderBoxColor: {
  //   start: "#11eefd",
  //   end: "#0078d2"
  // },
  borderBoxColor: {
    start: "#333",
    end: "#444"
  },
  echartsStyle: "light"
};

const mutations = {
  SET_ECHARTS_STYLE(state, style) {
    state.echartsStyle = style;
  },
  SET_BORDERBOX_COLOR(state, color) {
    state.borderBoxColor = color;
  },
  SET_COLORS(state, colors) {
    state.colors = colors;
  }
};

const actions = {
  setEchartsStyle({ commit }, style) {
    commit("SET_ECHARTS_STYLE", style);
  },

  setBorderBoxColor({ commit }, color) {
    commit("SET_BORDERBOX_COLOR", color);
  },
  setColors({ commit }, colors) {
    commit("SET_COLORS", colors);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
