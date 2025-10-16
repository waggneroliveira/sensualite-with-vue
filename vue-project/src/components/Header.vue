<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <!-- Logo -->
        <div class="image-logo">
            <RouterLink class="navbar-brand fw-bold" to="/">
                <img loading="lazy" :src="logo" alt="Firula">
            </RouterLink>
        </div>

        <!-- Botão Mobile -->
        <button 
            class="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Menu -->
        <div class="collapse navbar-collapse" id="navbarNav">
            <!-- Menu Central -->
            <ul class="navbar-nav mx-auto">
            <li class="nav-item">
                <RouterLink class="nav-link" to="/">Inicio</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link" to="/acompanhantes">Acompanhantes</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link" to="/feed">Feed</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link" to="/categorias">Categorias</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link" to="/contato">Contato</RouterLink>
            </li>
            </ul>

            <!-- Menu Direita -->
            <div class="navbar-nav ms-auto">
            <button class="btn btn-outline-light me-2">
                <i class="bi bi-person-plus"></i> Cadastre-se
            </button>
            <button class="btn btn-warning me-2">
                <i class="bi bi-megaphone"></i> Quero anunciar!
            </button>
            <button class="btn btn-outline-light">
                <i class="bi bi-box-arrow-in-right"></i> Login
            </button>
            </div>
        </div>
    </div>
  </nav>
</template>

<script setup>
    import { RouterLink } from 'vue-router'
    import logo from '@/assets/images/logo.png'

</script>

<style scoped>
.navbar-brand {
  font-size: 1.5rem;
  color: #ff6b6b !important;
}

.nav-link {
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ff6b6b !important;
}

.btn-warning {
  background-color: #ffc107;
  border-color: #ffc107;
  font-weight: 500;
}

.btn-warning:hover {
  background-color: #e0a800;
  border-color: #e0a800;
}
</style>