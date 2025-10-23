<script setup>
import { computed } from 'vue'

const feedbacks = [
  { rating: 5 },
  { rating: 4 },
  { rating: 3 },
  { rating: 5 },
  { rating: 4 }
]

const averageRating = computed(() => {
  if (!feedbacks.length) return 0
  const sum = feedbacks.reduce((acc, f) => acc + f.rating, 0)
  return sum / feedbacks.length // mantém como número
})
</script>

<template>
  <div class="rating d-flex justify-content-start align-items-center">
    <span class="average inter text-berge font-22 font-medium me-2">{{ averageRating.toFixed(1) }}</span>
    <svg
      v-for="i in 5"
      :key="i"
      width="25"
      height="24"
      viewBox="0 0 18 17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
        :fill="i <= Math.round(averageRating) ? '#FFDB12' : '#9D9D9D'"
      />
    </svg>    
  </div>
</template>
