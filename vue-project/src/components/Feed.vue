<template>
    <section id="companion" class="container-fluid mt-5">
        <div class="col-12 p-0 m-auto d-flex justify-content-center">
            <div class="d-flex flex-column col-3 d-none d-lg-block">
                <CompanionNearby/>
            </div>
            <div class="col-12 col-md-10 col-lg-5 mt-0">

                <!-- Conteúdo -->
                <div class="card bg-transparent text-light border-0 rounded-4 px-0 col-12 m-auto scroll pb-4">

                    <!-- FEED -->
                    <div v-if="activeTab === 'feed'" class="mt-4 w-100 m-auto max-width-feed">
                        <div class="d-flex align-items-center gap-3 mb-3">
                            <img
                            :src="profileImage"
                            alt="perfil"
                            class="rounded-circle image-mobile"
                            style="width: 55px; height: 55px; object-fit: cover;"
                            />
                            <div>
                            <h6 class="mb-0 inter font-20 text-berge font-bold">Jade Miller <small class="inter font-12 ms-2 text-berge font-regular">há 12 horas</small></h6>
                            <small class="inter font-12 text-berge font-regular">Salvador - BA</small>
                            </div>
                        </div>

                        <p class="inter font-15 text-berge font-regular font-mobile">Vamos sair hoje?</p>

                        <div class="image-feed col-12 position-relative">
                            <Swiper
                            :modules="[Autoplay, Navigation]"
                            :autoplay="false"
                            :loop="false"
                            :navigation="true"              
                            :onBeforeInit="onBeforeInit"    
                            class="rounded-2"
                            >
                            <SwiperSlide v-for="(img, i) in feedImages" :key="i">
                                <img :src="img.src" alt="feed image" class="rounded-2 w-100 feed-vertical" />
                            </SwiperSlide>
                            </Swiper>

                            <!-- Botões de navegação -->
                            <button class="swiper-button-prev-customer d-flex align-items-center justify-content-center p-0" aria-label="Anterior">
                            &#10094;
                            </button>

                            <button class="swiper-button-next-customer d-flex align-items-center justify-content-center p-0" aria-label="Próximo">
                            &#10095;
                            </button>
                        </div>

                        <div class="d-flex align-items-center gap-2 like mt-3">
                            <Like />
                        </div>
                    </div>

                    <div v-if="activeTab === 'feed'" class="mt-4 w-100 m-auto max-width-feed">
                        <div class="d-flex align-items-center gap-3 mb-3">
                            <img
                            :src="profileImage"
                            alt="perfil"
                            class="rounded-circle"
                            style="width: 55px; height: 55px; object-fit: cover;"
                            />
                            <div>
                            <h6 class="mb-0 inter font-20 text-berge font-bold">Jade Miller <small class="inter font-12 ms-2 text-berge font-regular">há 12 horas</small></h6>
                            <small class="inter font-12 text-berge font-regular">Salvador - BA</small>
                            </div>
                        </div>

                        <p class="inter font-15 text-berge font-regular font-mobile">Vamos sair hoje?</p>

                        <div class="image-feed col-12">
                            <Swiper
                            :modules="[Autoplay]"
                            :autoplay="false"
                            :loop="false"
                            class="rounded-2"
                            >
                                <SwiperSlide>
                                    <img
                                    :src="feedImages[3].src"
                                    alt="feed vertical"
                                    class="rounded-2 w-100 feed-vertical"
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        <div class="d-flex align-items-center gap-2 like mt-3">
                            <Like />
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-column col-3 d-none d-lg-block">
                <CompanionRelational/>
            </div>            
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import VueEasyLightbox from 'vue-easy-lightbox'
import Like from '@/components/Like.vue'
import CompanionRelational from '@/components/CompanionRelational.vue'
import CompanionNearby from '@/components/CompanionNearby.vue'

// Lightbox
const visible = ref(false)
const index = ref(0)

// Aba ativa geral
const activeTab = ref('feed')

// Orientação do feed
const orientationClass = ref('feed-vertical') // ou 'feed-horizontal'
// Imagem de perfil
const profileImage = new URL('@/assets/images/a11.jpg', import.meta.url).href

// Imagens do feed
const feedImages = ref([
  { src: new URL('@/assets/images/a4.jpg', import.meta.url).href },
  { src: new URL('@/assets/images/a12.jpg', import.meta.url).href },
  { src: new URL('@/assets/images/a13.jpg', import.meta.url).href },
  { src: new URL('@/assets/images/a11.jpg', import.meta.url).href }
])

// Config Swiper
const onBeforeInit = (swiper) => {
  swiper.params.navigation = swiper.params.navigation || {}
  swiper.params.navigation.nextEl = '.swiper-button-next-customer'
  swiper.params.navigation.prevEl = '.swiper-button-prev-customer'

  if (swiper.navigation) {
    swiper.navigation.init()
    swiper.navigation.update()
  }
}
defineExpose({ VueEasyLightbox })

// Lightbox
function openLightbox(i) {
  index.value = i
  visible.value = true
}

</script>

<script>
    export default {
        components: { VueEasyLightbox }
    }
</script>

<style>
    .vel-btns-wrapper .btn__prev, .vel-btns-wrapper .btn__next{
        display: none;
    }
    .vel-icon{
        font-size: 18px;
    }
    .vel-btns-wrapper .btn__close {
        right: 35px;
        top: 35px;
    }
    .vel-modal{
        background: rgba(0, 0, 0, 0.85);
    }
</style>

<style scoped>

.custom-arrows {
    position: fixed;
    top: 50%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    z-index: 9999;
    pointer-events: none;
}
.arrow {
    pointer-events: all;
    background: transparent;
    border: none;
    color: white;
    opacity: 0.7;
    padding: 10px 15px;
    cursor: pointer;
    transition: 0.3s;
    color: #F9E4B7;
    font-size: 24px;
}
.nav-link.py-1.px-3.bg-red-primary{
    border-radius: 10px;
}
.nav-item.show .nav-link, .nav-link.active{
    background: linear-gradient(to bottom, #F9E4B7, #E6C27A, #C6A14D, #8C6C3A, #F9E4B7) !important;
    border-color: transparent !important;
    color: #390B0F !important;
} 
img {
  transition: transform 0.3s;
}
img:hover {
  transform: scale(1.05);
}
.image-feed {
  position: relative;
}
.btn.next,
.btn.prev,
.swiper-button-prev-customer,
.swiper-button-next-customer {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.55);
  color: #F9E4B7;
  font-size: 1.6rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.arrow:hover,
/* .btn.text-berge.position-absolute:hover, */
.btn.next:hover,
.btn.prev:hover,
.swiper-button-prev-customer:hover,
.swiper-button-next-customer:hover {
    background-color: #8C6C3A;
    color: white;
    opacity: 1;
}

/* Posicionamento lateral */
.swiper-button-prev-customer {
  left: -18px;
}

.swiper-button-next-customer {
  right: -18px;
}
.max-width-feed{
    max-width: 360px;
}
.like :deep(span){
    font-size: 1.125rem !important;
}
.like :deep(svg) {
    width: 25px;
    height: 23px;
}
.like-component{
    margin: 0 !important;
}
.image-feed img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.feed-vertical {
    max-width: 380px;
    aspect-ratio: 4 / 5;
    max-height: 480px;
}

.card{
  border: 1px solid #C0BDAD !important;
}
.btn {
  border-radius: 10px 10px 0 0;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 115px;
}
.bg-red-primary.font-medium {
  position: relative;
  border-radius: 10px 10px 0 0;
  background: linear-gradient(to bottom, #000000 0%, #390B0F 100%);
  overflow: hidden;
}
.light-bt.bg-red-primary.font-medium:hover, .bg-red-primary.text-berge.border-color:hover,
.nav-item.show .nav-link, .nav-link:hover{
    background: linear-gradient(to bottom, #F9E4B7, #E6C27A, #C6A14D, #8C6C3A, #F9E4B7);
    transition: all 0.3s ease;
    color: #390B0F !important;
    border-color: transparent !important;
}
.bg-red-primary.font-medium::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: inherit;
    background: linear-gradient(to bottom, #F9E4B7, #E6C27A, #C6A14D, #8C6C3A, #F9E4B7);
    -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;

    /* Remover borda inferior de forma precisa */
    clip-path: polygon(
    0 0, 100% 0,   /* topo */
    100% calc(100% - 2px),  /* altura menos espessura */
    0 calc(100% - 2px)       /* mesma altura */
    );
}
.badge.px-3.py-2.rounded-pill, .btn{
    color: #390B0F;
}
.bg-red-primary.text-berge.border-color {
    position: relative;
    border-radius: 10px 10px 0 0;
    background: linear-gradient(to bottom, #000000 0%, #390B0F 100%);
    overflow: hidden;
}
.bg-red-primary.text-berge.border-color::before{
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: inherit;
    background: linear-gradient(to bottom, #F9E4B7, #E6C27A, #C6A14D, #8C6C3A, #F9E4B7);
    -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
}
.scroll {
  overflow-y: auto;
  height: 730px;
  scrollbar-width: thin; 
  scrollbar-color: #C6A14D #1a0000; 
}

/* Chrome, Edge, Safari */
.scroll::-webkit-scrollbar {
  width: 8px;
}

.scroll::-webkit-scrollbar-track {
  background: #1a0000;
  border-radius: 10px;
}

.scroll::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #000000 0%, #4D182E 100%);
  border-radius: 10px;
  border: 2px solid #1a0000; 
  transition: background 0.3s ease;
}

.scroll::-webkit-scrollbar-thumb:hover {
  background: #c30a17;
}
@media (max-width: 768px) {

}
@media (max-width: 576px) {
    .max-width-feed{
        max-width: 90%;
    }
}
@media (max-width: 476px) {
    .image-mobile{
        width: 45px !important;
        height: 45px !important;
    }
    .font-mobile{
        font-size: 0.75rem !important;
    }
    .badge.px-3.py-2.rounded-pill{
        font-size: 0.75rem !important;
        padding: 6px 10px !important;
    }
    .mb-0.inter.font-20.text-berge.font-bold, .card-title{
        font-size: 1rem;
        margin-bottom: 0px !important;
    }
    .card-title{
        font-size: 1rem;
        margin-bottom: 15px !important;
    }
    .nav-link.py-1.px-3.bg-red-primary, strong.inter.font-medium.font-18.text-white{
        font-size: 0.75rem !important;
    }
    .inter.font-medium.font-15.text-berge.mb-1{
        font-size: 0.75rem !important;
    }
    .btn.filter-content {
        font-size: 0.75rem !important;
        padding: 4px 6px !important;
        max-width: 85px !important;
    }
    .like :deep(span){
        font-size: 0.75rem !important;
    }
    .like :deep(svg) {
        width: 18px;
        height: 18px;
    }
}
</style>
