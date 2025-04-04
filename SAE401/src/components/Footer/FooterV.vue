<template>
    <div class="bg-black flex flex-row text-white">
        <div class="border-r-1 border-white w-2/6 flex flex-col">
            <div class="border-b-1 border-white flex flex-row items-center p-8">
                <p class="font-vg text-5xl">Plan du site</p>
            </div>

            <div class="border-t-1 border-white flex flex-col p-8 gap-4">
                <RouterLink activeClass="text-white bg-black"
                    class="transition duration-200 items-center flex hover:text-green-500 font-futura text-lg" to="/">
                    Accueil
                </RouterLink>
                <RouterLink activeClass="text-white bg-black"
                    class="transition duration-200 items-center flex hover:text-green-500 font-futura text-lg"
                    to="/articles">
                    Articles
                </RouterLink>
                <RouterLink activeClass="text-white bg-black"
                    class="transition duration-200 items-center flex hover:text-green-500 font-futura text-lg"
                    to="/artistes">
                    Les Artistes
                </RouterLink>
                <RouterLink activeClass="text-white bg-black"
                    class="transition duration-200 items-center flex hover:text-green-500 font-futura text-lg"
                    to="/a-propos">
                    Qui Sommes-Nous ?
                </RouterLink>
            </div>
        </div>

        <div class="w-3/4 border-l-1 p-8 border-white flex flex-col gap-8">
            <div class="flex flex-row h-10 w-full">
                <img src="/src/assets/chroma_inline.svg" class="w-auto h-full" alt="">
            </div>
            <p class="text-5xl font-vg">></p>
        </div>
    </div>

    <div class="border-t-1 w-full border-white bg-black mb-6 text-white flex flex-row">
        <div class="p-8 flex flex-row flex-1 items-center">
            <p class="font-vg">© Alex Andreani</p>
        </div>

        <div class="flex flex-row justify-end h-30 flex-2">
            <div class="h-full aspect-square border-x-1 border-white hover:bg-[#FFFC00] transform duration-200">
                <a class="p-8 h-full w-full inline-block" href="#">
                    <img src="/src/assets/socials/snapchat.svg" alt="Snapchat" class="w-full h-full object-contain">
                </a>
            </div>

            <div class="h-full aspect-square border-x-1 border-white hover:bg-[#ff10dd] transform duration-200">
                <a class="p-8 h-full w-full inline-block" href="#">
                    <img src="/src/assets/socials/insta.svg" alt="Instagram" class="w-full h-full object-contain">
                </a>
            </div>

            <div class="h-full aspect-square border-l-1 border-white hover:bg-[#0866ff] transform duration-200">
                <a class="p-8 h-full w-full inline-block" href="#">
                    <img src="/src/assets/socials/facebook.svg" alt="Facebook" class="w-full h-full object-contain">
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>