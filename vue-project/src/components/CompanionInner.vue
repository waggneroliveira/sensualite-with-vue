<template>
    <section id="companion" class="container-fluid">
        <div class="container m-auto d-flex justify-content-center">
            <CompanionNearby/>
            <div class="col-11 col-md-10 col-lg-5 mt-4">
                <!-- Botões de navegação -->
                <div class="d-flex gap-2 mb-0 col-11 m-auto">
                    <button
                    class="btn filter-content px-2"
                    :class="activeTab === 'perfil' ? 'gold-gradient inter font-medium font-15' : 'light-bt bg-red-primary inter font-medium text-berge'"
                    @click="activeTab = 'perfil'"
                    >
                    Perfil
                    </button>

                    <button
                    class="btn filter-content px-2"
                    :class="activeTab === 'galeria' ? 'gold-gradient inter font-medium font-15' : 'light-bt bg-red-primary inter font-medium text-berge'"
                    @click="activeTab = 'galeria'"
                    >
                    Galeria
                    </button>

                    <button
                    class="btn filter-content px-2"
                    :class="activeTab === 'feed' ? 'gold-gradient inter font-medium font-15' : 'light-bt bg-red-primary inter font-medium text-berge'"
                    @click="activeTab = 'feed'"
                    >
                    Feed
                    </button>
                </div>

                <!-- Conteúdo -->
                <div class="card bg-transparent text-light border-0 rounded-4 px-0 col-12 m-auto scroll pb-4">
                    <!-- PERFIL -->
                    <div v-if="activeTab === 'perfil'" class="col-11 m-auto mt-4">
                        <div class="d-flex mb-4 flex-wrap">
                            <h6 class="inter font-medium font-20 text-gradient mb-2 w-100 mb-4">Informações de perfil</h6>
                            <div class="col-md-6 p-0">
                                <p class="inter font-medium font-15 text-berge mb-1"><strong class="inter font-medium font-18 text-white">Localização:</strong> Salvador - BA</p>
                                <p class="inter font-medium font-15 text-berge mb-1"><strong class="inter font-medium font-18 text-white">Peso:</strong> 100 kgs</p>
                                <p class="inter font-medium font-15 text-berge mb-1"><strong class="inter font-medium font-18 text-white">Idade:</strong> 50 anos</p>
                                <p class="inter font-medium font-15 text-berge mb-1"><strong class="inter font-medium font-18 text-white">Altura:</strong> 1,70m</p>
                                <p class="inter font-medium font-15 text-berge mb-1"><strong class="inter font-medium font-18 text-white">Olhos:</strong> Castanho Escuro</p>
                            </div>
                            <div class="col-md-6 p-0">
                                <p class="inter font-medium font-15 text-berge mb-1"><strong class="inter font-medium font-18 text-white">Saio com:</strong> Homens, mulheres, trans</p>
                                <p class="inter font-medium font-15 text-berge mb-1"><strong class="inter font-medium font-18 text-white">Tipo:</strong> Morena</p>
                                <p class="inter font-medium font-15 text-berge mb-1"><strong class="inter font-medium font-18 text-white">Biotipo:</strong> Atlético</p>
                                <p class="inter font-medium font-15 text-berge mb-1"><strong class="inter font-medium font-18 text-white">Pés:</strong> 40</p>
                            </div>
                        </div>

                        <hr class="border-danger opacity-75" />

                        <h6 class="inter font-medium font-20 text-gradient mb-4">Atendimento</h6>
                        <p class="inter font-medium font-15 text-berge mb-1"><strong class="inter font-medium font-18 text-white">Horários:</strong> Segunda à sexta, 09:00 às 18:00</p>
                        <p class="inter font-medium font-15 text-berge mb-1"><strong class="inter font-medium font-18 text-white">Disponível para viagem?</strong> Sim</p>
                        <p class="inter font-medium font-15 text-berge mb-1"><strong class="inter font-medium font-18 text-white">Atendo em:</strong> Hotéis, Motéis, Escritórios</p>
                        <p class="inter font-medium font-15 text-berge mb-1"><strong class="inter font-medium font-18 text-white">Cachê:</strong> R$ 200/hora</p>

                        <hr class="border-danger opacity-75" />

                        <h6 class="inter font-medium font-20 text-gradient mb-4">Categorias</h6>

                        <div class="d-flex gap-2">
                            <RouterLink
                                v-for="(cat, i) in categories"
                                :key="i"
                                :to="{ path: '/acompanhantes', query: { categoria: cat.slug } }"
                                class="text-decoration-none"
                                >
                                <span
                                    class="badge px-3 py-2 rounded-pill"
                                    :class="cat.highlight
                                    ? 'gold-gradient inter font-regular font-15'
                                    : 'inter font-regular font-15 bg-red-primary text-berge border-color'"
                                    style="font-size: 0.9rem;"
                                >
                                    {{ cat.name }}
                                </span>
                            </RouterLink>
                        </div>
                    </div>

                    <!-- GALERIA -->
                    <div v-if="activeTab === 'galeria'" class="row g-2 col-11 m-auto mt-4">

                        <!-- Filtro interno -->
                        <ul class="nav justify-content-start gap-2 mb-3">
                            <li class="nav-item">
                                <button
                                class="nav-link py-1 px-3 bg-red-primary text-berge inter font-medium font-15"
                                :class="{ active: activeGalleryTab === 'fotos' }"
                                @click="activeGalleryTab = 'fotos'"
                                >
                                Fotos
                                </button>
                            </li>
                            <li class="nav-item">
                                <button
                                class="nav-link py-1 px-3 bg-red-primary text-berge inter font-medium font-15"
                                :class="{ active: activeGalleryTab === 'videos' }"
                                @click="activeGalleryTab = 'videos'"
                                >
                                Vídeos
                                </button>
                            </li>
                        </ul>

                        <!-- FOTOS -->
                        <div v-if="activeGalleryTab === 'fotos'" class="col-12 row g-2">
                            <!-- Miniaturas da galeria -->
                            <div
                            v-for="(img, i) in galleryImages"
                            :key="'img-' + i"
                            class="col-6 col-md-4"
                            >
                            <img
                                :src="img"
                                alt=""
                                class="img-fluid rounded-2"
                                style="cursor: pointer; object-fit: cover; height: 250px; width: 100%;"
                                @click="openLightbox(i)"
                            />
                            </div>

                            <!-- Lightbox -->
                            <VueEasyLightbox
                            :visible="visible"
                            :imgs="galleryImages"
                            :index="index"
                            @hide="visible = false"
                            />

                            <div v-if="visible" class="custom-arrows">
                                <button class="arrow rounded-2 left" @click="prev">&#10094;&#10094;</button>
                                <button class="arrow rounded-2 right" @click="next">&#10095;&#10095;</button>
                            </div>                            
                        </div>

                        <!-- VÍDEOS -->
                        <div v-if="activeGalleryTab === 'videos'" class="col-12 row g-2">
                            <div
                                v-for="(video, i) in galleryVideos"
                                :key="'video-' + i"
                                class="col-6 col-md-4"
                                @click="openVideo(i)"
                                style="cursor: pointer;"
                            >
                                <video
                                :src="video"
                                muted
                                class="rounded-2 w-100"
                                style="object-fit: cover; height: 260px;"
                                ></video>
                            </div>

                            <!-- Lightbox custom para vídeos -->
                            <div
                                v-if="videoVisible"
                                class="position-fixed start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                                style="background: rgba(0, 0, 0, 0.85); z-index: 9999;top:-8px"
                                @click.self="closeVideo"
                            >
                                <!-- Vídeo -->
                                <video
                                :src="galleryVideos[currentVideoIndex]"
                                controls
                                autoplay
                                style="max-width: 90%; max-height: 90%; border-radius: 10px;"
                                ></video>

                                <!-- Botão fechar -->
                                <button
                                @click="closeVideo"
                                class="btn text-berge position-absolute top-0 end-0 m-4 p-0 rounded-2"
                                style="width: 35px;height:35px;font-size:22px;"
                                >
                                &times;
                                </button>

                                <!-- Setas de navegação -->
                                <button
                                v-if="galleryVideos.length > 1"
                                @click.stop="prevVideo"
                                class="btn prev d-flex position-absolute start-0 top-50 translate-middle-y rounded-2"
                                style="width: 50px; height: 50px; font-size: 24px;"
                                >
                                &#10094;&#10094;
                                </button>

                                <button
                                v-if="galleryVideos.length > 1"
                                @click.stop="nextVideo"
                                class="btn next d-flex position-absolute end-0 top-50 translate-middle-y rounded-2"
                                style="width: 50px; height: 50px; font-size: 24px;"
                                >
                                &#10095;&#10095;
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- FEED -->
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

                        <p>Vamos sair hoje?</p>

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

                        <p>Vamos sair hoje?</p>

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
            <CompanionRelational/>
        </div>
    </section>

    <div id="feedback-app">
        <FeedbackSection />
    </div>
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
import FeedbackSection from '@/components/FeedbackSection.vue'


// Lightbox
const visible = ref(false)
const index = ref(0)

// Props
const props = defineProps({
  activeTab: String
})

// Aba ativa geral
const activeTab = ref('feed')
// Aba interna da galeria (Fotos/Vídeos)
const activeGalleryTab = ref('fotos')
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
// Galeria — Fotos
const galleryImages = [
  new URL('@/assets/images/a1.jpg', import.meta.url).href,
  new URL('@/assets/images/a2.jpg', import.meta.url).href,
  new URL('@/assets/images/a14.jpg', import.meta.url).href,
  new URL('@/assets/images/a4.jpg', import.meta.url).href,
  new URL('@/assets/images/a17.jpg', import.meta.url).href,
  new URL('@/assets/images/a10.jpg', import.meta.url).href,
  new URL('@/assets/images/a19.jpg', import.meta.url).href,
  new URL('@/assets/images/a20.jpg', import.meta.url).href,
  new URL('@/assets/images/a21.jpg', import.meta.url).href,
  new URL('@/assets/images/a22.jpg', import.meta.url).href,
  new URL('@/assets/images/a23.jpg', import.meta.url).href,
  new URL('@/assets/images/a24.jpg', import.meta.url).href
]

const videoVisible = ref(false)
const currentVideoIndex = ref(0)

function openVideo(i) {
  currentVideoIndex.value = i
  videoVisible.value = true
}

function closeVideo() {
  videoVisible.value = false
}

function nextVideo() {
  currentVideoIndex.value =
    (currentVideoIndex.value + 1) % galleryVideos.length
}

function prevVideo() {
  currentVideoIndex.value =
    (currentVideoIndex.value - 1 + galleryVideos.length) % galleryVideos.length
}

// Galeria — Vídeos
const galleryVideos = [
  new URL('@/assets/videos/story1.mp4', import.meta.url).href,
  new URL('@/assets/videos/video02.mp4', import.meta.url).href,
  new URL('@/assets/videos/video03.mp4', import.meta.url).href,
  new URL('@/assets/videos/video04.mp4', import.meta.url).href
]

// Lightbox
function openLightbox(i) {
  index.value = i
  visible.value = true
}
function next() {
  index.value = (index.value + 1) % galleryImages.length
}

function prev() {
  index.value =
    (index.value - 1 + galleryImages.length) % galleryImages.length
}

// Slug de categorias
const createSlug = str =>
  str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')

const categories = ref([
  { name: 'Namoradinha', highlight: true },
  { name: 'Tatuadas', highlight: false },
  { name: 'Sugar Baby', highlight: false }
].map(cat => ({
  ...cat,
  slug: createSlug(cat.name)
})))
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
  height: 720px;
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


</style>
