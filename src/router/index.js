import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
        path: '/user',
        component: () => import( '../views/user.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/login',
    component: () => import( '../views/login.vue')
  },
  {
    path: '/add',
    component: () => import( '../views/add.vue')
  },
  {
    path: '/edit',
    component: () => import( '../views/edit.vue')
  },
  {
    path: '/detail',
    component: () => import( '../views/detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 路由守卫
router.beforeEach((to,from,next)=>{
  let token = localStorage.getItem('token')
  if(token&&to.path=='/login'){
    next('/')
  }else if(!token&&to.path!='/login'){
    next('/login')
  }else{
    next()
  }
})
export default router
