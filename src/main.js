import Vue from 'vue';
import App from './App';
import './assets/scss/main.scss';
import router from './router';
import store from './store';
import './prototypes';
import './api';
import './plugins';
import './utils';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
