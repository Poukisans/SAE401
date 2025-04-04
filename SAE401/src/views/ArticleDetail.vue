<template>
  <main class="px-10 py-20 h-full">
    <div class="flex flex-row gap-10">
      <div class="w-1/2">
        <img :src="currentArticle.img1 || 'https://via.placeholder.com/150'" class="w-full h-full object-cover"
            alt="Image de l'article">
      </div>

      <div class="w-1/3 text-white flex flex-col gap-15">
        <h2 class="text-7xl font-vg font-bold">{{ currentArticle.name }}</h2>

        <div class="flex flex-col gap-6">
          <p class="font-futura italic text-2xl">{{ currentArticle.description }}</p>
          <p class="text-5xl font-vg">{{ currentArticle.prix.toFixed(2) }} €</p>
        </div>

        <div class="flex flex-col gap-3">
          <p class="font-vg text-2xl">Personnalise ta chaussure</p>
          <input id="colorInput"
            class="transform rounded-lg p-3 hover:p-5 focus:p-5 duration-400 jscolor {onFineChange:'changeColors(this)'}"
            value="FFFFFF">
        </div>

        <div class="flex-col items-center w-full">
          <button @click="basketStore.addToBasket"
            class="px-10 cursor-pointer py-4 bg-white text-black border-white border-1 hover:bg-black hover:text-white transform duration-200 mr-4">Ajouter
            au panier</button>
        </div>

      </div>
    </div>
  </main>
</template>

<script setup>
import { useArticle } from '@/stores/article';
import { useBasket } from '@/stores/basket';
import { ref } from 'vue';

const colorInput = document.getElementById("colorInput")


const articleStore = useArticle();
const basketStore = useBasket()
const currentArticle = ref(articleStore.articles[0])
</script>