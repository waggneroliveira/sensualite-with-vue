<template>
  <section class="position-relative container-fluid px-5 mt-5">
    <h3 class="title-section mb-3 text-gradient">Categorias</h3>

    <div class="categories-grid">
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="category-item"
      >
        <div class="content-category-item rounded h-100 overflow-hidden">
          <RouterLink :to="category.link" class="d-flex align-items-center justify-content-center gap-3 text-decoration-none p-0 shadow-sm h-100 rounded hover-scale">
            <span class="category-title text-dark fw-bold font-20">{{ category.title }}</span>
            <div class="category-image">
              <img :src="category.image" :alt="category.title" class="img-fluid rounded" />
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

// Mock de dados com até 10 categorias
const categories = ref([
  { title: 'Luxo', image: new URL('@/assets/images/cat-1.png', import.meta.url).href, link: '/categoria/luxo' },
  { title: 'Namoradinha', image: new URL('@/assets/images/cat-2.png', import.meta.url).href, link: '/categoria/namoradinha' },
  { title: 'Exótica', image: new URL('@/assets/images/cat-1.png', import.meta.url).href, link: '/categoria/exotica' },
  { title: 'Elegante', image: new URL('@/assets/images/cat-2.png', import.meta.url).href, link: '/categoria/elegante' },
  { title: 'Tatuadas', image: new URL('@/assets/images/cat-1.png', import.meta.url).href, link: '/categoria/tatuadas' },
  { title: 'Noturna', image: new URL('@/assets/images/cat-2.png', import.meta.url).href, link: '/categoria/noturna' },
  { title: 'Cultural', image: new URL('@/assets/images/cat-1.png', import.meta.url).href, link: '/categoria/cultural' },
  { title: 'Aventura', image: new URL('@/assets/images/cat-2.png', import.meta.url).href, link: '/categoria/aventura' },
  { title: 'Romântica', image: new URL('@/assets/images/cat-1.png', import.meta.url).href, link: '/categoria/romantica' },
  { title: 'Artística', image: new URL('@/assets/images/cat-2.png', import.meta.url).href, link: '/categoria/artistica' },
]);
</script>

<style scoped>
.categories-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 itens por linha */
  gap: 1rem;
}

.text-gradient {
  background: linear-gradient(90deg, #F9E4B7, #E6C27A, #C6A14D, #8C6C3A, #F9E4B7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

.category-item .category-image img {
  width: 71px;
  height: 116px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.hover-scale:hover img {
  transform: scale(1.03);
}

.category-item a {
  transition: background 0.3s ease;
}

.category-item {
  height: 111.37px;
}

.content-category-item {
  background: #C0BDAD;
}
</style>
