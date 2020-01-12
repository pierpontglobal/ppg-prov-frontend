// axios.js
const axios = require('axios');
const Cookies = require('js-cookie');
const swal = require('sweetalert');

// Add a request interceptor

const AXIOS_EXCLUDING_PATHS = ['/login']

axios.interceptors.request.use(function (config) {
  const token = Cookies.get('token');
  config.headers.Authorization = token;
  return config;
});

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (401 === error.response.status && !AXIOS_EXCLUDING_PATHS.includes(window.location.pathname)) {
    swal({
      title: "Session Expired",
      text: "Your session has expired. Would you like to be redirected to the login page?",
      icon: "warning",
      buttons: true,
    }).then((value) => {
      if (value) {
        window.location = '/login'
      }
    });
  }

  return Promise.reject(error);
});

axios.defaults.baseURL = process.env.SRV_API

export default axios;