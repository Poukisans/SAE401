import { createRouter, createWebHistory } from 'vue-router';
import AccueilView from '../views/Accueil.vue';
import Articles from '@/views/Articles.vue';
import ArticleDetail from '@/views/ArticleDetail.vue';
import Artistes from '@/views/Artistes.vue';
import About from '../views/About.vue';
import Panier from '../views/Panier.vue';


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
      path: '/artistes',
      name: 'Artistes',
      component: Artistes,
    },
    {
      path: '/a-propos',
      name: 'A Propos',
      component: About,
    },
    {
      path: '/panier',
      name: 'Panier',
      component: Panier,
    },
  ],
});

export default router;