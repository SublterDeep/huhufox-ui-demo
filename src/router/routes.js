const routes = [
  {
    path: '/homeView',
    name: 'homeView',
    component: () => import('../views/homeView.vue'),
    label: '首页',
  },
  {
    path: '/testView',
    name: 'testView',
    component: () => import('../views/testView.vue'),
    label: '测试',
  },
  {
    path: '/publicView',
    name: 'publicView',
    component: () => import('../views/publicView.vue'),
    label: '全局声明',
  },
  {
    path: '/buttonView',
    name: 'buttonView',
    component: () => import('../views/buttonView.vue'),
    label: '按钮',
  },
  {
    path: '/sliderView',
    name: 'sliderView',
    component: () => import('../views/sliderView.vue'),
    label: '轮播图',
  },
  {
    path: '/collapseView',
    name: 'collapseView',
    component: () => import('../views/collapseView.vue'),
    label: '折叠面板',
  },
]
export default routes
