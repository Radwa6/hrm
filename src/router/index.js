import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/components/PageHome.vue'
import ThePage from '@/components/common/ThePage.vue'
import LoginPage from '@/components/user/logIn.vue'
import ContactPage from '@/components/user/Contact.vue'
import ContactUS from '@/components/pages/ContactUS.vue'
import ThePrice from '@/components/pages/ThePrice.vue'
import TeamManagement from '@/components/pages/TeamManagement.vue'
import BusinessSectors from '@/components/pages/BusinessSectors.vue'

Vue.use(Router)

const routes = [
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
  {
    path: '/logIn',
    name: 'logIn',
    component: LoginPage,
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: ContactPage,
  },
  {
    path: '/ContactUS',
    name: 'ContactUS',
    component: ContactUS,
  },
  {
    path: '/ThePrice',
    name: 'ThePrice',
    component: ThePrice,
  },
  {
    path: '/TeamManagement',
    name: 'TeamManagement',
    component: TeamManagement,
  },
  {
    path: '/BusinessSectors',
    name: 'BusinessSectors',
    component: BusinessSectors,
  },
]

const router = new Router({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

router.beforeEach((to, from, next) => {
  const activeLinks = document.querySelectorAll('.active-link')
  activeLinks.forEach((link) => {
    link.classList.remove('active-link')
  })

  next()
})

export default router
