import { createRouter, createWebHistory } from 'vue-router';
import AccueilView from '../views/Accueil.vue';
import Articles from '@/views/Articles.vue';
import ArticleDetail from '@/views/ArticleDetail.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: AccueilView,
    },
    {
      path: '/articles',
      name: 'Articles',
      component: Articles,
    },
    {
      path: '/articles/:id',
      name: 'ArticleDetail',
      component: ArticleDetail,
    },
    {
      path: '/a-propos',
      name: 'APropos',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/panier',
      name: 'Panier',
      component: () => import('../views/Panier.vue'),
    },
  ],
});

export default router;