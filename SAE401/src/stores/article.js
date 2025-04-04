import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useArticle = defineStore('article', () => {
    const articles = ref()

    articles.value = {
        0: {
            name: 'Chaussure1',
            prix: 25.00,
            tinyDesc: "Lorem Ipsum",
            description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
            img1: "/src/assets/logo-pin.svg"
        },
        1: {
            name: "Chaussure2",
            prix: 25.00,
            tinyDesc: "Lorem Ipsum",
            description: "Lorem Ipsum 2",
            img1: "/src/assets/logo-pin.svg",
        }
    }

    return { articles }
})