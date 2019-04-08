import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Nav',
      redirect: '/index',
      component: resolve => require(['@/components/nav'], resolve),
      children: [
        {
          path: '/index',
          name: 'Index',
          component: resolve => require(['@/components/index'], resolve)
        },
        {
          path: '/category',
          name: 'Category',
          component: resolve => require(['@/components/category'], resolve)
        },
        {
          path: '/shopCart',
          name: 'ShopCart',
          component: resolve => require(['@/components/shopCart'], resolve)
        },
        {
          path: '/user',
          name: 'User',
          component: resolve => require(['@/components/user'], resolve)
        }
      ]
    },
    {
      path: '/goodsDetail',
      name: 'GoodsDetail',
      component: resolve => require(['@/components/goodsDetail'], resolve)
    },
    {
      path: '/test',
      name: 'Test',
      component: resolve => require(['@/components/test'], resolve)
    }
  ]
})
