<template>
  <div class="container mt-5 position-relative m-auto">
    <div class="col-lg-8 col-11 m-auto">
      <Swiper
        :modules="[Autoplay, EffectFade]"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :loop="true"
        effect="fade"
        :fade-effect="{ crossFade: true }"
        :slides-per-view="1"
        class="announcement-swiper"
      >
        <SwiperSlide v-for="(ad, index) in ads" :key="index">
          <!-- Se houver imagem -->
          <a
            v-if="ad.image && ad.link"
            :href="ad.link"
            target="_blank"
            rel="noopener noreferrer"
            class="d-block"
          >
            <img
              :src="ad.image"
              alt="Anúncio"
              class="img-fluid rounded shadow-sm w-100"
            />
          </a>

          <!-- Se não houver imagem, exibe anúncio do Google -->
          <div v-else class="google-ads mt-3">
            <ins
              class="adsbygoogle"
              style="display:block"
              data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
              data-ad-slot="yyyyyyyyyy"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

// Lista de anúncios locais
const ads = ref([
  {
    image: new URL("@/assets/images/anun-1.png", import.meta.url).href,
    link: "https://exemplo1.com",
  },
  {
    image: new URL("@/assets/images/anun-3.png", import.meta.url).href,
    link: "https://exemplo3.com",
  },
]);

// Inicializa o Google Ads se necessário
onMounted(() => {
  if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
    window.adsbygoogle.push({});
  }
});
</script>

<style scoped>
.announcement-swiper {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

img {
  object-fit: contain;
  max-height: 150px;
  transition: opacity 0.8s ease-in-out;
}

.google-ads {
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
