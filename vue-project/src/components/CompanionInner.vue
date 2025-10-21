<template>
  <section class="col-7 mt-4 m-auto">
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
    <div class="card bg-transparent text-light border-0 rounded-4 p-5">
      <!-- PERFIL -->
            <div v-if="activeTab === 'perfil'">
        <div class="row mb-4">
          <div class="col-md-6">
            <p><strong>Localização:</strong> Salvador - BA</p>
            <p><strong>Peso:</strong> 100 kgs</p>
            <p><strong>Idade:</strong> 50 anos</p>
            <p><strong>Altura:</strong> 1,70m</p>
            <p><strong>Olhos:</strong> Castanho Escuro</p>
          </div>
          <div class="col-md-6">
            <p><strong>Saio com:</strong> Homens, mulheres, trans</p>
            <p><strong>Tipo:</strong> Morena</p>
            <p><strong>Biotipo:</strong> Atlético</p>
            <p><strong>Pés:</strong> 40</p>
          </div>
        </div>

        <hr class="border-danger opacity-75" />

        <h6 class="text-warning fw-bold mb-2">Atendimento</h6>
        <p><strong>Horários:</strong> Segunda à sexta, 09:00 às 18:00</p>
        <p><strong>Disponível para viagem?</strong> Sim</p>
        <p><strong>Atendo em:</strong> Hotéis, Motéis, Escritórios</p>
        <p><strong>Cachê:</strong> R$ 200/hora</p>

        <hr class="border-danger opacity-75" />

        <h6 class="text-warning fw-bold mb-3">Categorias</h6>
        <div class="d-flex flex-wrap gap-2">
          <span
            v-for="(cat, i) in categories"
            :key="i"
            class="badge px-3 py-2 rounded-pill"
            :class="cat.highlight ? 'gold-gradient inter font-medium font-15' : 'bg-red-primary text-light'"
            style="font-size: 0.9rem;"
          >
            {{ cat.name }}
          </span>
        </div>
      </div>

      <!-- GALERIA -->
      <div v-if="activeTab === 'galeria'" class="row g-2">
        <div v-for="(img, i) in galleryImages" :key="i" class="col-6 col-md-4">
          <img
            :src="img"
            alt="galeria"
            class="rounded-4 w-100"
            style="object-fit: cover; height: 140px;"
          />
        </div>
      </div>

      <!-- FEED -->
      <div v-if="activeTab === 'feed'">
        <div class="d-flex align-items-center gap-3 mb-3">
          <img
            :src="profileImage"
            alt="perfil"
            class="rounded-circle"
            style="width: 55px; height: 55px; object-fit: cover;"
          />
          <div>
            <h6 class="mb-0 inter font-20 text-berge font-bold">Alexandra Pimentel</h6>
            <small class="inter font-12 text-berge font-regular">há 12 horas — Salvador - BA</small>
          </div>
        </div>
        
        <p>Vamos sair hoje?</p>

        <div class="image-feed col-11 col-lg-9 m-auto">
            <img
            :src="feedImage"
            alt="feed"
            class="rounded-4 w-100 mb-3"
            style="object-fit: cover;"
            />
        </div>
        <div class="d-flex align-items-center gap-2">
          <i class="bi bi-heart fs-5"></i>
          <span>34</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Aba ativa
const activeTab = ref('feed')

// Imagens resolvidas via import
const profileImage = new URL('@/assets/images/profile.jpg', import.meta.url).href
const feedImage = new URL('@/assets/images/a1.jpg', import.meta.url).href
const galleryImages = [
  new URL('@/assets/images/anun-1.png', import.meta.url).href,
  new URL('@/assets/images/anun-2.png', import.meta.url).href,
  new URL('@/assets/images/anun-3.png', import.meta.url).href,
  new URL('@/assets/images/anun-4.png', import.meta.url).href,
  new URL('@/assets/images/anun-1.png', import.meta.url).href,
  new URL('@/assets/images/anun-2.png', import.meta.url).href
]
</script>

<style scoped>
.card{
  border: 1px solid #C0BDAD !important;
}
.btn {
  border-radius: 10px 10px 0 0;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 123px;
}
.bg-red-primary.font-medium {
  position: relative;
  border-radius: 10px 10px 0 0;
  background: linear-gradient(to bottom, #000000 0%, #390B0F 100%);
  overflow: hidden;
}
.light-bt.bg-red-primary.font-medium:hover{
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


</style>
