<template>
  <section class="container mt-4">
    <!-- Botões de navegação -->
    <div class="d-flex gap-2 mb-3">
      <button
        class="btn"
        :class="activeTab === 'perfil' ? 'btn-warning text-dark fw-bold' : 'btn-outline-warning text-light'"
        @click="activeTab = 'perfil'"
      >
        Perfil
      </button>

      <button
        class="btn"
        :class="activeTab === 'galeria' ? 'btn-warning text-dark fw-bold' : 'btn-outline-warning text-light'"
        @click="activeTab = 'galeria'"
      >
        Galeria
      </button>

      <button
        class="btn"
        :class="activeTab === 'feed' ? 'btn-warning text-dark fw-bold' : 'btn-outline-warning text-light'"
        @click="activeTab = 'feed'"
      >
        Feed
      </button>
    </div>

    <!-- Conteúdo -->
    <div class="card bg-dark text-light border-0 rounded-4 p-3">
      <!-- PERFIL -->
      <div v-if="activeTab === 'perfil'">
        <div class="d-flex align-items-center gap-3 mb-3">
          <img
            src="@/assets/images/profile.jpg"
            alt="perfil"
            class="rounded-circle"
            style="width: 60px; height: 60px; object-fit: cover;"
          />
          <div>
            <h5 class="mb-0 fw-bold">Alexandra Pimentel</h5>
            <small class="text-muted">Salvador - BA</small>
          </div>
        </div>
        <p class="mb-0">
          Sou uma pessoa extrovertida e adoro conhecer gente nova. Vamos conversar? ❤️
        </p>
      </div>

      <!-- GALERIA -->
      <div v-if="activeTab === 'galeria'" class="row g-2">
        <div v-for="n in 6" :key="n" class="col-6 col-md-4">
          <img
            :src="new URL(`@/assets/images/anun-${n}.png`, import.meta.url).href"
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
            src="@/assets/images/profile.jpg"
            alt="perfil"
            class="rounded-circle"
            style="width: 55px; height: 55px; object-fit: cover;"
          />
          <div>
            <h6 class="mb-0 fw-bold">Alexandra Pimentel</h6>
            <small class="text-muted">há 12 horas — Salvador - BA</small>
          </div>
        </div>
        <p>Vamos sair hoje?</p>
        <img
          src="@/assets/images/a1.jpg"
          alt="feed"
          class="rounded-4 w-100 mb-3"
          style="object-fit: cover;"
        />
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

const activeTab = ref('feed')
</script>

<style scoped>
.btn {
  border-radius: 12px;
  transition: all 0.3s ease;
}
.btn-warning {
  background-color: #d4af37 !important;
  border-color: #d4af37 !important;
}
.card {
  background-color: #1a0000;
}
</style>
