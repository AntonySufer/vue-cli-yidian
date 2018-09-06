import Vue from 'vue'
import Router from 'vue-router'
import {routerMode} from '../config/env'



Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

window.addEventListener('popstate', function (e) { //微信没有返回按钮解决
  Router.isBack = true
}, false)


Vue.use(Router);

export default new Router({
  mode:routerMode,
  routes: [
    { path: '*', component: resolve => require(['../components/err.vue'], resolve) },
    { path: '/main', component: resolve => require(['../page/main.vue'], resolve) },
    { path: '/art/:id?', name: 'art',   component: resolve => require(['../page/art.vue'], resolve)},
    { path: '/history', meta: { keepAlive: true }, component: resolve => require(['../page/historyList.vue'], resolve) },
    { path: '/attent', meta: { keepAlive: true },component: resolve => require(['../page/attention.vue'], resolve) },
    { path: '/my', component: resolve => require(['../page/my.vue'], resolve) },
    { path: '/kuai', meta: { keepAlive: true }, component: resolve => require(['../page/getkuai.vue'], resolve) },


     { path: '/', component: resolve => require(['../food/shop.vue'], resolve) },
     { path: '/shop', component: resolve => require(['../food/shop.vue'], resolve) },
    { path: '/order', component: resolve => require(['../food/order.vue'], resolve) },
    { path: '/myCenter', name:'myCenter', component: resolve => require(['../food/my_center.vue'], resolve) },
    { path: '/downOrd', name:'downOrd', component: resolve => require(['../food/down_order.vue'], resolve) },
    { path: '/shopDetail', name:'shopDetail', component: resolve => require(['../food/shop_detail.vue'], resolve) },
    { path: '/dishDetail', name:'dishDetail', component: resolve => require(['../food/dish_detail.vue'], resolve) },
    { path: '/preOrder', name:'preOrder', component: resolve => require(['../food/pre_order.vue'], resolve) },
    { path: '/payOrder', name:'payOrder', component: resolve => require(['../food/pay_order.vue'], resolve) },
    { path: '/paySuc', name:'paySuc', component: resolve => require(['../food/pay_success.vue'], resolve) },
    { path: '/myOrdDet', name:'myOrdDet', component: resolve => require(['../food/my_order_detail.vue'], resolve) },

  ]


})
