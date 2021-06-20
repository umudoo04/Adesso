import Vue from 'vue';
import Axios from 'axios';

const axios = Axios.create({
  baseURL: process.env.VUE_APP_SITE_API_URL,
  timeout: process.env.VUE_APP_AXIOS_TIMEOUT_MS,
});

Vue.prototype.$http = axios;
export default axios;
