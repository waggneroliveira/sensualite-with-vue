<template>
  <aside class="position-relative col-3">
    <div class="box-relational p-3 text-light rounded-3 col-10 m-auto">
        <h4 class="mb-0 text-berge inter font-15 font-medium text-uppercase">Acompanhantes próximas</h4>


        <Swiper
            :modules="[Navigation]"
            :slides-per-view="1"
            :loop="true"
            :navigation="{
            nextEl: '.swiper-button-next-custom-1',
            prevEl: '.swiper-button-prev-custom-1'
            }"
            class="rounded-3 overflow-hidden mt-3 position-relative"
        >
            <SwiperSlide v-for="(item, index) in companions" :key="index">
                <a :href="item.link" target="_blank" rel="noopener noreferrer">
                    <img :src="item.image" alt="Companion" class="w-100 d-block thumb" />

                </a>

                <div class="d-flex justify-content-between align-items-center mb-0">
                    <div class="row">
                        <h5 class="inter text-berge font-15 mt-3 mb-0">{{item.name}}</h5>
                        <h6 class="inter text-berge font-12 mt-0">{{item.location}}</h6>
                    </div>
                    <div class="swiper-nav d-flex gap-2">
                        <button class="swiper-button-prev-custom-1 d-flex justify-content-center align-items-center btn btn-sm rounded">
                            &#10094;
                        </button>
                        <button class="swiper-button-next-custom-1 d-flex justify-content-center align-items-center btn btn-sm rounded">
                            &#10095;
                        </button>
                    </div>
                </div>
                
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
    name: "Elisângela Felipa", 
    location: "Salvador - BA",
    image: new URL('@/assets/images/banner-inner-2.jpg', import.meta.url).href, 
    link: "/" 
  },
  {
    name: "Camila Moraes", 
    location: "Salvador - BA",
    image: new URL('@/assets/images/a9.jpg', import.meta.url).href,
    link: '#'
  },
  {
    name: "Bruna Carvalho",
    location: "Salvador - BA",
    image: new URL('@/assets/images/a13.jpg', import.meta.url).href,
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

.swiper-button-prev-custom-1,
.swiper-button-next-custom-1{
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
.swiper-button-prev-custom-1:hover,
.swiper-button-next-custom-1:hover{
    background-color: #8C6C3A;
    color: white;
}
.box-relational{
    border: 1px solid #C0BDAD;
}

.swiper-slide .thumb {
  object-fit: cover;
  height: 230px;
  aspect-ratio: 1/1;
  border-radius: 0.5rem;
}
</style>
