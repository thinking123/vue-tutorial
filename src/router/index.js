import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Router2 from '@/components/Router2'
import Root from '@/components/root'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Root,
      children: [
        {
          path: '/hello',
          name: 'HelloWorld',
          component: HelloWorld
        }  ,{
          path: 'router2',
          name: 'Router2',
          component: Router2
        }
      ]
    }


  ]
})
