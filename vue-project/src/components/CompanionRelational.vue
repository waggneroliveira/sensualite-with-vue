<template>
  <aside class="position-relative col-3">
    <div class="box-relational p-3 text-light rounded-3 col-10 m-auto">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h4 class="mb-0 text-berge inter font-15 font-medium text-uppercase">Gatas do dia</h4>
        <div class="swiper-nav d-flex gap-2">
            <button class="swiper-button-prev-custom d-flex justify-content-center align-items-center btn btn-sm rounded">
                &#10094;
            </button>
            <button class="swiper-button-next-custom d-flex justify-content-center align-items-center btn btn-sm rounded">
                &#10095;
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
        class="rounded-3 overflow-hidden mt-3 position-relative"
      >
        <SwiperSlide v-for="(item, index) in companions" :key="index">
            <a :href="item.link" target="_blank" rel="noopener noreferrer">
                <img :src="item.image" alt="Companion" class="w-100 d-block thumb" />

            </a>
            <div class="w-100 px-0 position-absolute">
                <img 
                src="@/assets/images/profile.jpg" 
                alt="Foto de perfil" 
                class="image-profile"
                >
            </div>
            <h5 class="inter text-berge font-15 col-6 m-auto me-4 mt-3">{{item.name}}</h5>
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
        name: "Camila Moraes", 
        image: new URL('@/assets/images/a7.jpg', import.meta.url).href,
        link: '#'
    },
    {
        name: "Elisângela Felipa", 
        image: new URL('@/assets/images/a14.jpg', import.meta.url).href, 
        link: "/" 
    },
    {
        name: "Bruna Carvalho",
        image: new URL('@/assets/images/a10.jpg', import.meta.url).href,
        link: '#'
    }
]

</script>

<style scoped>
aside{
    margin-top: 60px;
}
.w-100.px-0.position-absolute{
    bottom: 0px;
    left: 10px;
}
.image-profile{
    border-radius: 100%;
    width: 79px;
    height: 79px;
    object-fit: cover;
    object-position: top center;
    background: linear-gradient(to bottom, #F9E4B7, #E6C27A, #C6A14D, #8C6C3A, #F9E4B7);
    position: relative;
    padding: 2px;
    z-index: 9;
}
.swiper-button-prev-custom,
.swiper-button-next-custom{
    background-color: transparent;
    border: none;
    color: #F9E4B7;
    border-radius: 8px;
    font-size: 1.1rem;
    transition: background 0.3s ease;
    width: 28px;
    height: 28px;
    padding: 0;
}
.swiper-button-prev-custom:hover,
.swiper-button-next-custom:hover{
    background-color: #8C6C3A;
    color: white;
}
.box-relational{
    border: 1px solid #C0BDAD;
}

.swiper-slide .thumb {
  object-fit: cover;
  height: 330px;
  aspect-ratio: 4/5;
  border-radius: 0.5rem;
}
</style>
