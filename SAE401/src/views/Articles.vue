<template>
  <main class="px-10">
    <!-- recherche -->
    <div class="pt-10 pb-15 w-full flex-col">
      <label class="text-white font-futura italic font-semibold" for="search">RECHERCHER : </label>
      <input class="bg-white w-full p-5 mt-3 font-futura italic font-medium" type="text" id="search" placeholder="Rechercher...">
    </div>

    <!-- articles -->
    <div class="grid grid-cols-5 gap-10">
      <RouterLink v-for="(article, key) in articleStore.articles" :key="key"
        class="border-white bg-white w-65 border mb-4 p-3" :to="'/articles/' + key">
        <div class="w-full aspect-square">
          <img :src="article.img1 || 'https://via.placeholder.com/150'" class="w-full h-full object-cover"
            alt="Image de l'article">
        </div>
        <div class="p-3 font-futura">
          <h2 class="text-xl uppercase font-bold font-vg">{{ article.name }}</h2>
          <p class="text-gray-600 italic">{{ article.tinyDesc }}</p>
          <p class="text-green-500 font-vg font-semibold">{{ article.prix.toFixed(2) }} €</p>
        </div>
      </RouterLink>
    </div>
  </main>
</template>

<script setup>
import { useArticle } from '@/stores/article';

const articleStore = useArticle();
</script>