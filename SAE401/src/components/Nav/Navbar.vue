// filepath: /Applications/XAMPP/xamppfiles/htdocs/SAE401/SAE401/src/components/Nav/NavBar.vue
<template>
    <div class="w-full px-5 pt-5">
        <div class="flex font-vg justify-center bg-white h-15 font-bold">
            <RouterLink class="w-30 flex items-center justify-center drop-shadow-2xl" to="/">
                <!-- <img class="h-full w-auto px-5 py-2" src="/src/assets/logo.svg"> -->
                <img class="h-full w-auto px-5 py-2" src="/src/assets/logo-pin.svg">
                <!-- <img class="h-full w-auto px-5 py-2" src="/src/assets/logo22.svg"> -->
            </RouterLink>

            <div class="flex w-full font-medium text-2xl items-center">
                <RouterLink activeClass="text-white bg-black"
                    class="text-black hover:bg-black hover:text-white h-full px-8 transition duration-200 items-center flex"
                    to="/">
                    Accueil
                </RouterLink>
                <RouterLink activeClass="text-white bg-black"
                    class="text-black hover:bg-black hover:text-white h-full px-8 transition duration-200 items-center flex"
                    to="/articles">
                    Articles
                </RouterLink>
                <RouterLink activeClass="text-white bg-black"
                    class="text-black hover:bg-black hover:text-white h-full px-8 transition duration-200 items-center flex"
                    to="/artistes">
                    Les Artistes
                </RouterLink>
                <RouterLink activeClass="text-white bg-black"
                    class="text-black hover:bg-black hover:text-white h-full px-8 transition duration-200 items-center flex"
                    to="/a-propos">
                    Qui Sommes-Nous ?
                </RouterLink>
            </div>

            <div class="flex">
                <RouterLink activeClass="text-white bg-black"
                    class="text-black hover:bg-black hover:text-white text-3xl flex justify-center items-center px-7 transition duration-200"
                    to="/panier">
                    <span class="mr-4 font-bold">{{ basketStore.basketItem }}</span>
                    <font-awesome-icon :icon="['fas', 'bag-shopping']" />
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useBasket } from '@/stores/basket';

const basketStore = useBasket()
</script>