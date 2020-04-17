import axios from "axios"; //一定要引入axios
import Router from '../router/index' //这个是因为我想在下面401的情况的时候跳转一下路由才引进了router
// 创建axios实例
const service = axios.create({});
//request拦截器
service.interceptors.request.use(
  config => {
    config.headers["tokenid"] = "12121212"; // 请求头中添加tokenid,每次访问后台接口的时候都带上token
    return config;
  },
  error => {
    Promise.reject(error);
  }
);
//response拦截器
service.interceptors.response.use(
  response => {
    if (response) {
      console.log(response, 'js')
      if (response.data.code != 401) {
        return response.data; //这个是我们项目要加的判断 可自行选择
      } else {
        Router.push('/')
      }

    } else {
      Promise.reject(new Error("error"));
    }
  },
  //这是没有tokenId,也就是没有登录信息
  error => {
    if (JSON.stringify(error).includes("401")) {
      Router.push('/')
    } else {
      console.log(error);
    }
    return Promise.reject(error);
  }
);
//抛出service
export default service;
