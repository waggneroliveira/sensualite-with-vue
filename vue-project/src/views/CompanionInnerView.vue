<template>
  <div class="position-relative">
    <BannerInnerCompanion />
    <CompanionInner />
  </div>
</template>

<script setup>
  import CompanionInner from '@/components/CompanionInner.vue'
  import BannerInnerCompanion from '../components/BannerInnerCompanion.vue'
</script>


<style>
  /* Estilos globais */
  .background-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #000000 0%, #390B0F 100%);
    z-index: -1;
  }
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    overflow-x: hidden;
    max-width: 100vw;
    width: 100%;
  }

  html {
    overflow-x: hidden;
    max-width: 100vw;
  }

</style>

<style scoped>
  /* Estilos apenas para este componente */
  .w-100 {
    min-height: 100vh;
    position: relative;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    overflow-x: hidden; 
    max-width: 100vw; 
    width: 100%;
  }

  html {
    overflow-x: hidden;
    max-width: 100vw;
  }

  .background-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #000000 0%, #390B0F 100%);
    z-index: 0;
  }

  #app {
    min-height: 100vh;
  }
</style>