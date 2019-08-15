import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
require('./mock/mock.js')

Vue.prototype.axios = axios
//引入mui 以及 iconfont
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/css/iconfont.css'

//引入mock数据，关闭则注释该行
// require('./mock'); 






Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
