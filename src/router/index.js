import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import signUp from '@/components/signUp'
import fieldForm from '@/components/fieldForm'
import posts from '@/components/posts'

Vue.use(Router);

export default new Router({
  routes: [

    {
      path: '/signUp',
      name: 'signUp',
      component: signUp
    },
    {
      path: '/posts',
      name: 'posts',
      component: posts
    },
    {
      path: '/fieldForm',
      name: 'fieldForm',
      component:fieldForm
    }
  ]
})
