<template>
  <aside class="position-relative col-3">
    <div class="box-relational p-3 bg-dark text-light rounded-3">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h4 class="mb-0">Gatas do dia</h4>
        <div class="swiper-nav d-flex gap-2">
          <button class="swiper-button-prev-custom btn btn-sm btn-outline-light rounded-circle">
            ‹
          </button>
          <button class="swiper-button-next-custom btn btn-sm btn-outline-light rounded-circle">
            ›
          </button>
        </div>
      </div>

      <Swiper
        :modules="[Navigation]"
        :slides-per-view="1"
        :loop="true"
        :navigation="{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom'
        }"
        class="rounded-3 overflow-hidden"
      >
        <SwiperSlide v-for="(item, index) in companions" :key="index">
          <a :href="item.link" target="_blank" rel="noopener noreferrer">
            <img :src="item.image" alt="Companion" class="w-100 d-block" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  </aside>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const companions = [
  {
    image: new URL('@/assets/images/a1.jpg', import.meta.url).href,
    link: '#'
  },
  {
    image: new URL('@/assets/images/a2.jpg', import.meta.url).href,
    link: '#'
  },
  {
    image: new URL('@/assets/images/a3.jpg', import.meta.url).href,
    link: '#'
  }
]
</script>

<style scoped>
.box-relational h4 {
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
}

.swiper-nav button {
  width: 28px;
  height: 28px;
  line-height: 1;
  font-size: 1.1rem;
  padding: 0;
}

.swiper-slide img {
  object-fit: cover;
  height: 260px;
  border-radius: 0.5rem;
}
</style>
