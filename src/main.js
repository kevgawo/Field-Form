// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Axios from 'axios'

Vue.config.productionTip = false;






Vue.use(VueResource);

new Vue({
  el: '#app',
  // router,
  components: { App },
  template: '<App/>',
  router : router,
  mode: 'history'
});
