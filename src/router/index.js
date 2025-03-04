import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',redirect:"/index"
    },
    {
      path: '/index',
      component: index
    },
    {
      path:"/faculty",
      name:"faculty",
      component:()=>import("../views/faculty.vue"),
       redirect:"/faculty/faculty-children",
      children:[
        {
          path:'faculty-children',
          name:"faculty-children",
          component:()=>import("../components/faculty-children1.vue"),
          redirect:"/faculty/faculty-children/faculty1_1",
          children:[
            {
              path:"faculty1_1",
              name:"faculty1_1",
              component:()=>import("../views/faculty1_1.vue"),
            },
            {
              path:"faculty1_2",
              name:"faculty1_2",
              component:()=>import("../views/faculty1_2.vue"),
            },
            {
              path:"faculty1_3",
              name:"faculty1_3",
              component:()=>import("../views/faculty1_3.vue"),
            }
          ]
        }
        
      ]
    }
  ]
})

export default router
