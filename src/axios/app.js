import axios from "./index";

export const login = (data) => {
  return axios.request({
    url: '.../...',
    data: data,
    method: 'post'
  })
}
