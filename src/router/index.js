import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import myDetial from '@/components/my-detial'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children: [// 这里是二级路由的配置
        {
          path: '/index/my',
          name: 'myDetial',
          component: myDetial
        }
      ]
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
