import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/components/PageHome.vue'
import ThePage from '@/components/common/ThePage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageHome',
      component: PageHome,
    },
    {
      path: '/ThePage',
      name: 'ThePage',
      component: ThePage,
    },
  ],
})
