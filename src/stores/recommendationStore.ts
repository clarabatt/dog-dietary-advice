// recommendationStore.js
import { defineStore } from 'pinia'
import type { Pet } from '@/types'

export const useRecommendationStore = defineStore('recommendationStore', {
  state: () => ({
    selectedPet: null as Pet | null,
    petConditions: [] as String[],
    recommendations: [] as Object[]
  }),

  actions: {
    selectPet(pet: Pet) {
      this.selectedPet = pet
    },
    addCondition(condition: String) {
      if (!this.petConditions.includes(condition)) {
        const newConditions = [...this.petConditions, condition]
        this.petConditions = newConditions
      }
    },
    removeCondition(condition: String) {
      const index = this.petConditions.indexOf(condition)
      if (index > -1) {
        this.petConditions.splice(index, 1)
      }
    },
    toggleCondition(condition: String) {
      if (this.petConditions.includes(condition)) {
        this.removeCondition(condition)
      } else {
        this.addCondition(condition)
      }
    }
  },

  getters: {
    hasSelectedPet: (state) => state.selectedPet !== null
  }
})