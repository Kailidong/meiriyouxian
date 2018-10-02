import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/pages/Home/Home'], resolve);//按需加载的语法 路由懒加载
//路由守卫，就是需要登录后才能跳转到对应路由https://router.vuejs.org/zh/guide/essentials/navigation.html 或者百度
const Buycar = resolve => require(['@/pages/Buycar/Buycar'], resolve);
const Detail = resolve => require(['@/pages/Detail/Detail'], resolve);
const Detect = resolve => require(['@/pages/Detect/Detect'], resolve);
const Member = resolve => require(['@/pages/Member/Member'], resolve);
const Mine = resolve => require(['@/pages/Mine/Mine'], resolve);
const Reg = resolve => require(['@/pages/User/Reg'], resolve);
const Login = resolve => require(['@/pages/User/Login'], resolve);
Vue.use(Router)  
const routes = [

  {
    path: '/home',
    component: Home
  },
  {
    path: '/buycar',
    component: Buycar
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/detect',
    component: Detect
  },
  {
    path: '/member',
    component: Member
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/reg',
    component: Reg
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '*',
    component: Home
  },

];
const router = new Router({routes});
export default router;