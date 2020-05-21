import { login, getInfo } from "@/api/user";
// import { resetRouter } from "@/router";
import viewCode2roles from "@/utils/viewCode2roles";
import qs from "qs";

const state = {
  name: "",
  avatar: "",
  roles: [],
  loginVisable: false
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  },
  SET_LoginDialog: (state, loginVisable) => {
    state.loginVisable = loginVisable;
  }
};

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username: name, password: pwd } = userInfo;
    return new Promise((resolve, reject) => {
      login(qs.stringify({ name, pwd }))
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo()
        .then(response => {
          const data = viewCode2roles(response);
          if (!data) {
            reject("Verification failed, please Login again.");
          }

          const { roles, name } = data;
          // viewCode2roles(data);
          // roles must be a non-empty array
          if (!roles || roles.length <= 0) {
            reject("getInfo: roles must be a non-null array!");
          }
          // console.log(roles)
          commit("SET_ROLES", roles);
          commit("SET_NAME", name);

          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // user logout
  logout({ commit, state, dispatch }) {
    commit("SET_TOKEN", "");
    commit("SET_ROLES", []);
    removeToken();
    resetRouter();
    dispatch("tagsView/delAllViews", null, { root: true });
    // return new Promise((resolve, reject) => {
    //   logout()
    //     .then(() => {
    //       commit('SET_TOKEN', '');
    //       commit('SET_ROLES', []);
    //       removeToken();
    //       resetRouter();
    //       resolve();
    //     })
    //     .catch(error => {
    //       reject(error);
    //     });
    // });
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit("SET_TOKEN", "");
      commit("SET_ROLES", []);
      removeToken();
      resolve();
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
