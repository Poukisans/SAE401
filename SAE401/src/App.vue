<template>
  <header class="h-1/12 flex-none">
    <Navbar></Navbar>
  </header>

  <main class="px-5 mb-3 flex flex-col flex-2">
    <RouterView class="bg-black w-full " />
  </main>

  <footer class="px-5 flex-1">
    <FooterV></FooterV>
  </footer>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Nav/Navbar.vue';
import FooterV from './components/Footer/FooterV.vue';
</script>
