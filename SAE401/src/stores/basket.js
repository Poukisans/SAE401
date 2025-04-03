import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBasket = defineStore('basket', () => {
  const basketItem = ref(0)
  function addToBasket() {
    basketItem.value++
  }

  return { basketItem, addToBasket }
})
