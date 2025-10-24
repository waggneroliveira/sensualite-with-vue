<template>
  <aside class="position-relative col-12 d-none d-lg-block">
    <div class="box-relational p-3 text-light rounded-3 col-10 m-auto">
      <h4 class="mb-3 text-berge inter font-15 font-medium text-uppercase">
        Veja também
      </h4>

      <!-- Listagem fixa de até 3 acompanhantes -->
      <div
        v-for="(companion, index) in companions"
        :key="index"
        class="companion-box mb-4 pb-3 border-bottom-list"
      >
        <!-- Cabeçalho: foto + nome + localização -->
        <div class="d-flex justify-content-start align-items-center gap-3">
          <img
            :src="companion.profile"
            alt="Foto da acompanhante"
            class="thumb"
          />
          <div>
            <h5 class="inter text-berge font-15 mb-0">{{ companion.name }}</h5>
            <h6 class="inter text-berge font-12 mt-0">{{ companion.location }}</h6>
          </div>
        </div>

        <!-- Carrossel dos posts/feed -->
        <Swiper
          :modules="[Navigation]"
          :slides-per-view="1"
          :loop="true"
          :navigation="{
            nextEl: '.swiper-button-next-inner-' + index,
            prevEl: '.swiper-button-prev-inner-' + index
          }"
          class="inner-swiper mt-3"
        >
            <SwiperSlide v-for="(post, i) in companion.posts" :key="i">
                <a :href="post.link" target="_blank" class="d-block">
                    <img
                        :src="post.image"
                        alt="Post da acompanhante"
                        class="w-100 rounded-3"
                    />
                </a>
            </SwiperSlide>

            <!-- Navegação do carrossel interno -->
            <div class="swiper-nav-inner d-flex gap-2 mt-2 justify-content-start">
                <button :class="'swiper-button-prev-inner-' + index" class="btn-nav">
                &#10094;
                </button>
                <button :class="'swiper-button-next-inner-' + index" class="btn-nav">
                &#10095;
                </button>
            </div>
        </Swiper>
      </div>
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
    profile: new URL('@/assets/images/banner-inner-2.jpg', import.meta.url).href,
    posts: [
      { image: new URL('@/assets/images/a17.jpg', import.meta.url).href, link: '#' },
      { image: new URL('@/assets/images/a12.jpg', import.meta.url).href, link: '#' },
      { image: new URL('@/assets/images/a14.jpg', import.meta.url).href, link: '#' }
    ]
  },
  {
    name: "Camila Moraes",
    location: "Salvador - BA",
    profile: new URL('@/assets/images/a9.jpg', import.meta.url).href,
    posts: [
      { image: new URL('@/assets/images/a15.jpg', import.meta.url).href, link: '#' },
      { image: new URL('@/assets/images/a11.jpg', import.meta.url).href, link: '#' }
    ]
  },
  {
    name: "Bruna Carvalho",
    location: "Salvador - BA",
    profile: new URL('@/assets/images/a13.jpg', import.meta.url).href,
    posts: [
      { image: new URL('@/assets/images/a10.jpg', import.meta.url).href, link: '#' }
    ]
  }
]
</script>

<style scoped>
aside {
  margin-top: 60px;
}

.box-relational {
  border: 1px solid #C0BDAD;
}

.thumb {
  object-fit: cover;
  height: 45px;
  aspect-ratio: 1 / 1;
  border-radius: 100%;
  width: 45px !important;
}

.btn-nav {
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
.btn-nav:hover {
  background-color: #8C6C3A;
  color: white;
}

.inner-swiper img {
  height: 200px;
  object-fit: cover;
}

.companion-box:last-child {
  border-bottom: none;
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;
}
.border-bottom-list:nth-child(-n+3){
    border-bottom: 1px solid #C0BDAD;
}
.border-bottom-list:ntlast-child{
    margin-bottom: 0 !important;
    border-bottom: inherit;
}
</style>
