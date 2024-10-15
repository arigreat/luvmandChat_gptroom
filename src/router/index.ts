import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChatView from '../views/ChatView.vue'
import ChatChlidView from '@/views/ChatChlidView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // redirect:{name:'chatid',params:{id:'0'}},
      name: 'home',
      component: HomeView,
    },
    {
      path: '/chat',
      // name: 'chat',
      component: () => import('../views/ChatView.vue'),
      props:true,
      children:[
        {
          path:'',
          redirect:{name:'chatid',params:{id:'0'}},
          // props:true,
        },
        {
        path:':id',
        name:'chatid',
        props:true,
        component:ChatChlidView
      },]
    }
  ]
})

export default router
