const style = localStorage.getItem("style") || "light";

const borderBoxColorLight = {
  start: "#333",
  end: "#444"
};
const borderBoxColorDark = {
  start: "#11eefd",
  end: "#0078d2"
};
const colorsLight = ["#c1232b", "#27727b", "#fcce10", "#e87c25", "#b5c334", "#fe8463", "#9bca63", "#fad860", "#f3a43b", "#60c0dd", "#d7504b"];
const colorsDark = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"];
const state = {
  colors: style === "light" ? colorsLight : colorsDark,
  borderBoxColor: style === "light" ? borderBoxColorLight : borderBoxColorDark,
  echartsStyle: localStorage.getItem("style") || "light"
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
