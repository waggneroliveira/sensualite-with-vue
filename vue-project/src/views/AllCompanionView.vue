<script setup>
  import CompanionModels from '../components/CompanionModels.vue'
  import FilterBox from '../components/CompanionFilter.vue'

const aplicarFiltro = (filtros) => {
  console.log('Filtros aplicados:', filtros)
  // Aqui você pode chamar sua API com os filtros, por exemplo
}
</script>

<template>
  <FilterBox @filter="aplicarFiltro" />

  <CompanionModels />

</template>
