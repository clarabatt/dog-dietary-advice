import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import DogFoodAdvice from '../views/FoodAdvice/FoodAdvice.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/food-advice',
      name: 'food-advice',
      component: DogFoodAdvice
    }
  ]
})

export default router
