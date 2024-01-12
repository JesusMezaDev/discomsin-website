import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: { transition: 'fade' },
      // children: [
      //   // {
      //   //   path: 'catalogs/:catalogName',
      //   //   name: 'catalogs',
      //   //   props: true,
      //   //   component: () => import('@/views/Catalogs.vue')
      //   // }
      // ],
    },
    {
      path: '/catalogs',
      name: 'catalogs',
      component: () => import('@/views/Catalogs.vue'),
      meta: { transition: 'fade' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: { transition: 'fade' },
    },
  ]
})

export default router
