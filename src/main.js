import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'

import axios from 'axios'
Vue.prototype.axios = axios

import Vuex from 'vuex'
Vue.use(Vuex)

//挂载mock
require('./mock/mock.js')

//引入mui 以及 iconfont
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/css/iconfont.css'

//引入mint-ui
import Mint from 'mint-ui';
Vue.use(Mint);
import { Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import { Range } from 'mint-ui';
Vue.component(Range.name, Range);
import { IndexList, IndexSection } from 'mint-ui';
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);








Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
