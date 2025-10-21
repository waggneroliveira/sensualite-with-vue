<template>
  <section class="position-relative container-fluid px-5 mt-5">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h3 class="title-section text-gradient m-0 inter font-medium font-25">Novidades</h3>
      <div class="swiper-nav d-flex gap-2">
        <button ref="prevEl" class="custom-nav-btn">&#10094;</button>
        <button ref="nextEl" class="custom-nav-btn">&#10095;</button>
      </div>
    </div>

    <Swiper
      :modules="[Navigation]"
      :slides-per-view="6"
      :space-between="10"
      :loop="true"
      :navigation="{ prevEl: prevEl, nextEl: nextEl }"
      :breakpoints="{
        1400: { slidesPerView: 6 },
        1200: { slidesPerView: 5 },
        992: { slidesPerView: 4 },
        768: { slidesPerView: 3 },
        576: { slidesPerView: 2 },
        0: { slidesPerView: 2 }
      }"
      class="companion-swiper"
    >
      <SwiperSlide
        v-for="(companion, index) in randomCompanions"
        :key="index"
      >
        <div class="content-item d-flex flex-column align-items-center text-center shadow-sm">
          <div class="image p-1 pb-0">
            <img
              :src="companion.image"
              :alt="companion.name"
              class="w-100"
            />
          </div>

          <div class="description col-12 m-auto">
            <div class="d-flex flex-column justify-content-start align-items-start col-11 m-auto py-2">
              <div class="d-flex gap-2 justify-content-center align-items-center flex-row">
                <h4 class="m-0 font-18 inter font-regular text-grey-light font-mobile">{{ companion.name }}</h4>
                <svg class="icon-mobile" width="18" height="18" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9.29099" cy="9.29099" r="9.29099" fill="#579A23" />
                  <path d="M3.98145 8.97229C4.199 8.59877 4.50612 8.31518 4.79953 8.02121C4.99444 7.8258 5.22727 7.87076 5.44272 8.12093C6.04167 8.8155 6.63535 9.51642 7.23113 10.2145C7.42762 10.445 7.62305 10.6762 7.8206 10.9056C8.04974 11.1713 8.11823 11.1742 8.34895 10.9131C9.4889 9.62075 10.6273 8.32728 11.7667 7.03439C12.5727 6.11963 13.3781 5.20486 14.1856 4.29125C14.5465 3.88315 14.7698 3.88084 15.1296 4.27453C15.2719 4.43016 15.4141 4.58464 15.5553 4.74143C15.8397 5.0573 15.8439 5.27691 15.5616 5.59855C14.6603 6.62456 13.7558 7.64769 12.8529 8.67255C11.4048 10.3165 9.95773 11.961 8.50962 13.6055C8.1472 14.017 7.96019 14.0119 7.60725 13.5945C6.5458 12.3397 5.48381 11.0854 4.41814 9.8346C4.25116 9.63919 4.10524 9.43053 3.98145 9.20112V8.97171L3.98145 8.97229Z" fill="white"/>
                </svg>
              </div>
              <p class="text-grey-light inter font-light font-15 location-mobile">{{ companion.location }}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// refs para navegação
const prevEl = ref(null);
const nextEl = ref(null);

// Mock de dados
const randomCompanions = ref([
  { name: "Elisângela Felipa", location: "Salvador - BA", image: new URL('@/assets/images/a1.jpg', import.meta.url).href, link: "/" },
  { name: "Larissa Costa", location: "Salvador - BA", image: new URL('@/assets/images/a2.jpg', import.meta.url).href, link: "/" },
  { name: "Tatiane Rocha", location: "Salvador - BA", image: new URL('@/assets/images/a4.jpg', import.meta.url).href, link: "/" },
  { name: "Carla Menezes", location: "Salvador - BA", image: new URL('@/assets/images/a10.jpg', import.meta.url).href, link: "/" },
  { name: "Amanda Luz",  location: "Salvador - BA", image: new URL('@/assets/images/a13.jpg', import.meta.url).href, link: "/" },
  { name: "Ana Souza",  location: "Salvador - BA", image: new URL('@/assets/images/a5.jpg', import.meta.url).href, link: "/" },
  { name: "Beatriz Lima",  location: "Salvador - BA", image: new URL('@/assets/images/a15.jpg', import.meta.url).href, link: "/" },
  { name: "Marina Souza",  location: "Salvador - BA", image: new URL('@/assets/images/a17.jpg', import.meta.url).href, link: "/" },
]);
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(90deg, #F9E4B7, #E6C27A, #C6A14D, #8C6C3A, #F9E4B7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

/* Cards */
.content-item img {
  object-fit: cover;
  aspect-ratio: 1/1;
  transition: transform 0.4s ease;
  border: 1px solid #C0BDAD;
  border-radius: 25px 0 0;
}

.image {
  overflow: hidden;
}

.image:hover img {
  transform: scale(1.03);
}

/* Swiper Nav */
.swiper-nav {
    position: absolute;
    top: 5px;
    right: 52px;
    z-index: 10;
}

.custom-nav-btn {
    background-color: transparent;
    border: none;
    color: #F9E4B7;
    border-radius: 8px;
    padding: 4px 10px;
    font-size: 1.2rem;
    transition: background 0.3s ease;
}

.custom-nav-btn:hover {
  background-color: #8C6C3A;
  color: white;
}
@media (max-width: 576px) {
  .swiper-nav{
      right: 8px;
  }
  .location-mobile{
    font-size: 0.75rem;
  }
  .icon-mobile{
      width: 12px;
      height: 12px;
  }
  .font-mobile{
    font-size: 0.875rem;
  }
  section.container-fluid {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
}
</style>
