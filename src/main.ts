import Vue from 'vue';
import App from './App.vue';
import router from './router';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueCookies from 'vue-cookies';

Vue.use(VueCookies);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.$cookies.config('7d');
Vue.$cookies.set('teste','deu certo');
Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
