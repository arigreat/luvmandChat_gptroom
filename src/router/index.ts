import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/chat'
      // name: 'home',
      // component: () => import('../views/HomeView.vue'),
    },
    {
      path:'/home',
      name:'home',
      component:() => import('../views/HomeView.vue'),
    },
    {
      path: '/chat',
      component: () => import('../views/ChatView.vue'),
      props:true,
      children:[
        {
          path:'',
          redirect:{name:'chatid',params:{id:'0'}},
        },
        {
        path:':id',
        name:'chatid',
        props:true,
        component:()=>import('../views/ChatChlidView.vue')
      },]
    }
  ]
})

export default router
