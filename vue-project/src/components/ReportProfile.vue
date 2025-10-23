<template>
  <div class="report-profile" ref="wrapperRef">
    <button
      class="btn-flag inter font-15 text-berge font-regular"
      @click.stop="toggleDropdown"
      aria-label="Reportar perfil"
      ref="buttonRef"
      type="button"
    >
        <svg class="flag" width="21" height="83" viewBox="0 0 21 83" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.156 20.312C4.5622 20.312 0 15.7495 0 10.156C0 4.5625 4.5625 0 10.156 0C15.7495 0 20.312 4.5625 20.312 10.156C20.312 15.7495 15.7495 20.312 10.156 20.312ZM10.156 51.562C4.5622 51.562 0 46.9995 0 41.406C0 35.8125 4.5625 31.25 10.156 31.25C15.7495 31.25 20.312 35.8125 20.312 41.406C20.312 46.9995 15.7495 51.562 10.156 51.562ZM10.156 82.812C4.5622 82.812 0 78.2495 0 72.656C0 67.0625 4.5625 62.5 10.156 62.5C15.7495 62.5 20.312 67.0625 20.312 72.656C20.312 78.2495 15.7495 82.812 10.156 82.812Z" fill="#C0BDAD"/>
        </svg>

    </button>

    <!-- Dropdown via teleport para body -->
    <teleport to="body">
      <transition name="fade">
        <div
          v-show="isOpen"
          class="dropdown-menu-teleported"
          :style="menuStyle"
          ref="menuRef"
        >
          <p class="inter font-15 text-berge font-regular small">Denunciar perfil</p>
          <ul class="list-unstyled mb-0">
            <li>
              <button class="dropdown-item inter font-14 text-berge font-regular" @click="report('whatsapp')">WhatsApp</button>
            </li>
            <li>
              <button class="dropdown-item inter font-14 text-berge font-regular" @click="report('anonimo')">Denuncia anônima</button>
            </li>
          </ul>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'

const isOpen = ref(false)
const wrapperRef = ref(null)
const buttonRef = ref(null)
const menuRef = ref(null)
const menuStyle = ref({})

// toggle com debug
function toggleDropdown() {
  console.log('toggle clicado, isOpen before:', isOpen.value)
  isOpen.value = !isOpen.value
  if (isOpen.value) positionMenu()
}

// acao do report (placeholder)
function report(type) {
  console.log('report tipo:', type)
  isOpen.value = false
}

// posiciona o menu próximo ao botão (top-right padrão)
async function positionMenu() {
  await nextTick()
  const btn = buttonRef.value
  const menu = menuRef.value
  if (!btn || !menu) return

  const rect = btn.getBoundingClientRect()
  // posicione abaixo do botão, alinhado à direita do botão
  const top = rect.bottom + 8 + window.scrollY
  const left = rect.right - menu.offsetWidth + window.scrollX

  menuStyle.value = {
    position: 'absolute',
    top: `${top}px`,
    left: `${left}px`,
    zIndex: 2147483647 // máximo prático
  }
}

// Fecha ao clicar fora (considerando teleport)
function handleDocumentClick(e) {
  const menuEl = menuRef.value
  const btnEl = buttonRef.value
  if (menuEl && !menuEl.contains(e.target) && btnEl && !btnEl.contains(e.target)) {
    isOpen.value = false
  }
}

// Fecha ao pressionar escape
function handleKeydown(e) {
  if (e.key === 'Escape') isOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', handleDocumentClick)
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleDocumentClick)
  document.removeEventListener('keydown', handleKeydown)
})

// Reposiciona se a janela muda de tamanho/scroll
window.addEventListener('resize', () => { if (isOpen.value) positionMenu() })
window.addEventListener('scroll', () => { if (isOpen.value) positionMenu() })
</script>

<style scoped>
    .flag{
        width: 5px;
        height: auto;
    }
    .report-profile { display: inline-block; position: relative; }

    .btn-flag {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0px;
    }
    .flag-icon { width: 22px; height: 22px; }

    .fade-enter-active, .fade-leave-active { transition: opacity .15s ease; }
    .fade-enter-from, .fade-leave-to { opacity: 0; }

    .dropdown-menu-teleported {
        min-width: 200px;
        background: linear-gradient(to bottom, #000000 0%, #4D182E 100%);
        color: #fff;
        border-radius: 8px;
        padding: 10px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.45);
        pointer-events: auto;
    /* z-index controlado via style (menuStyle) */
    }

    .dropdown-item {
        width: 100%;
        text-align: left;
        padding: 6px 0px;
        background: none;
        border: none;
        color: #ddd;
        border-radius: 6px;
    }
    .dropdown-item:hover { 
        background: rgba(255,255,255,0.06); color: #fff; 
    }
</style>
