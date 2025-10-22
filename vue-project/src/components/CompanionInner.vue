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
                    <!-- <div v-if="activeTab === 'galeria'" class="row g-2 col-11 m-auto mt-4">
                        <div v-for="(img, i) in galleryImages" :key="i" class="col-6 col-md-4">
                            <img
                            :src="img"
                            alt="galeria"
                            class="rounded-2 w-100"
                            style="object-fit: cover; height: 140px;"
                            />
                        </div>
                    </div> -->
                    <div v-if="activeTab === 'galeria'" class="row g-2 col-11 m-auto mt-4">
                        <div
                        v-for="(img, i) in galleryImages"
                        :key="i"
                        class="col-6 col-md-4"
                        @click="openLightbox(i)"
                        style="cursor: pointer;"
                        >
                        <img
                            :src="img"
                            alt="galeria"
                            class="rounded-2 w-100"
                            style="object-fit: cover; height: 140px;"
                        />
                        </div>

                        <!-- Lightbox -->
                        <vue-easy-lightbox
                        :visible="visible"
                        :imgs="galleryImages"
                        :index="index"
                        @hide="visible = false"
                        />
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
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import VueEasyLightbox from 'vue-easy-lightbox'
import Like from '@/components/Like.vue';
import CompanionRelational from '@/components/CompanionRelational.vue';
import CompanionNearby from '@/components/CompanionNearby.vue';

const visible = ref(false)
const index = ref(0)

const props = defineProps({
  activeTab: String
})

// Aba ativa
const activeTab = ref('feed')
// Por enquanto, definimos manualmente:
const orientationClass = ref('feed-vertical') // ou 'feed-horizontal'

// Imagens resolvidas via import
const profileImage = new URL('@/assets/images/a11.jpg', import.meta.url).href
// Imagens do feed
const feedImages = ref([
  {
    src: new URL('@/assets/images/a4.jpg', import.meta.url).href,
  },
  {
    src: new URL('@/assets/images/a12.jpg', import.meta.url).href,
  },
  {
    src: new URL('@/assets/images/a13.jpg', import.meta.url).href,
  },
  {
    src: new URL('@/assets/images/a11.jpg', import.meta.url).href,
  }
])
// função que ajusta os seletores ANTES da inicialização do Swiper
const onBeforeInit = (swiper) => {
  // garante que o objeto navigation exista
  swiper.params.navigation = swiper.params.navigation || {}
  swiper.params.navigation.nextEl = '.swiper-button-next-customer'
  swiper.params.navigation.prevEl = '.swiper-button-prev-customer'

  // inicializa e atualiza a navegação do swiper
  // (às vezes init/update devem ser chamados manualmente)
  if (swiper.navigation) {
    swiper.navigation.init()
    swiper.navigation.update()
  }
}

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
// Abre o lightbox na imagem clicada
function openLightbox(i) {
  index.value = i
  visible.value = true
}

const createSlug = str =>
  str
    .toLowerCase()
    .normalize('NFD') // remove acentos
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '') // remove caracteres especiais
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '') // remove hífen no início/fim

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

<style scoped>
/* Opcional — apenas estética */
img {
  transition: transform 0.3s;
}
img:hover {
  transform: scale(1.05);
}
.image-feed {
  position: relative;
}

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

.swiper-button-prev-customer:hover,
.swiper-button-next-customer:hover {
    background-color: #8C6C3A;
    color: white;
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
.light-bt.bg-red-primary.font-medium:hover, .bg-red-primary.text-berge.border-color:hover{
    background: linear-gradient(to bottom, #F9E4B7, #E6C27A, #C6A14D, #8C6C3A, #F9E4B7);
    transition: all 0.3s ease;
    color: #390B0F !important;
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
