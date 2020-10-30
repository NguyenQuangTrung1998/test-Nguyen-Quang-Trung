import Vue from 'vue';
import VueRouter from 'vue-router';
import NewBlog from './components/NewBlog.vue';
import Home from './components/Home.vue';
import DetailBlog from './components/DetailBlog.vue';
Vue.use(VueRouter);
export const router = new VueRouter({
   mode:'history',
   routes:[
      {path:'/', name:'home', component: Home},
      {path:'/NewBlog',name:'newblog', component: NewBlog},
      {path:'/DetailBlog/:id',name:'detail',component: DetailBlog}
   ]
})