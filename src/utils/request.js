import axios from "axios";
import { MessageBox, Message } from "element-ui";

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 50000, // request timeout
  headers: { "Content-Type": "application/x-www-form-urlencoded" }
});

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    config.params = {
      _t: Date.parse(new Date()) / 1000,
      ...config.params
    };
   
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data;
    // if the custom code is not 20000, it is judged as an error.
    if (res.code === 201) {
      Message({
        message: res.data.info || "操作失败",
        type: "error",
        duration: 5 * 1000
      });
      return Promise.reject(new Error(res.message || "Error"));
    } else if (res.code === 401) {
      if (response.config.method === "post") {
        store.commit("user/SET_LoginDialog", true);
      }
      Message({
        message: "登录超时",
        type: "error",
        duration: 5 * 1000
      });
      return Promise.reject(new Error(res.message || "Error"));
    } else if (res.code === 403) {
      Message({
        message: "访问限制",
        type: "error",
        duration: 5 * 1000
      });

      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  error => {
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;
