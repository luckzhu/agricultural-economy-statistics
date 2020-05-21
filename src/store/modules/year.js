
const state = {
  year: localStorage.getItem("year") || 2018,
};

const mutations = {
  SET_YEAR(state, year) {
    state.year = year;
  },
};

const actions = {
  setYear({ commit }, year) {
    commit("SET_YEAR", year);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
