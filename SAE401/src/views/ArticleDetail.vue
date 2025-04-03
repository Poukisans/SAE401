<template>
  <main class="px-10">
    <div class="pt-10 pb-15 w-full flex-col">
      <label class="text-white font-bold" for="search">RECHERCHER : </label>
      <input class="bg-white w-full p-5 mt-3" type="text" id="search" placeholder="Rechercher...">
    </div>

    <div class="flex pb-15">
      <div class="w-1/2">
        <img :src="currentArticle.img1">
      </div>

      <div class="w-1/3 text-white">
        <h2 class="text-5xl font-vg font-bold mb-10">{{ currentArticle.name }}</h2>

        <div class="my-10">
          <p class="font-futura italic text-xl">{{ currentArticle.description }}</p>
        </div>

        <div class="flex items-center w-full">
          <button @click="basketStore.addToBasket" class="px-3 py-4 bg-white text-black border-white border-1 hover:bg-black hover:text-white transform duration-200 mr-4">Ajouter au panier</button>
          <p class="text-3xl font-vg ">{{  currentArticle.prix.toFixed(2) }} €</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useArticle } from '@/stores/article';
import { useBasket } from '@/stores/basket';
import { ref } from 'vue';

const articleStore = useArticle();
const basketStore = useBasket()
const currentArticle = ref(articleStore.articles[0])
</script>