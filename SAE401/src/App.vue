<template>
  <header>
    <Navbar></Navbar>
  </header>

  <main class="px-5">
    <RouterView class="bg-black w-full " />
  </main>

</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Nav/Navbar.vue';
</script>
