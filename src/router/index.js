import Vue from 'vue'
import Router from 'vue-router'

import blog from '@/components/blog'


Vue.use(Router)

export default new Router({
  routes: [
  
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
 
    
  ]
})
