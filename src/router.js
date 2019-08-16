import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MusicList from './components/MusicList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      name:'first',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/home/musiclist/:id',
      name: 'musiclist',
      component: MusicList
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],
  linkActiveClass: 'mui-active'  //覆盖路由高亮类
  
})
