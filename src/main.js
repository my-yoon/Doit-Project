import Vue from 'vue'
import App from './App.vue'
import router from './router';
import './common/plugins/bootstrap-vue'
import './common/plugins/vue-slick'
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
