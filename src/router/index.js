import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.afterEach(to => {
  setTimeout(() => {
    const { pageTitle } = to.meta;
    document.title = `${pageTitle} - ${process.env.VUE_APP_TITLE}`;
  }, 150);
});

export default router;
