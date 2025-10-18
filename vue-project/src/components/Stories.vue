<template>
  <div class="my-swiper-container px-5 mt-3">
    <!-- Carrossel principal (sem nav e sem dots) -->
    <Swiper
      :modules="[Autoplay]"
      :slidesPerView="15"
      :space-between="15"
      :loop="true"
      :looped-slides="15" 
      class="stories-swiper"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
    >
      <SwiperSlide
        v-for="(story, index) in stories"
        :key="index"
        class="story-slide"
        @click="openStory(index)"
      >
        <div class="slide-image overflow-hidden">
          <img
            :src="story.thumbnail"
            :alt="'Story ' + (index + 1)"
            class="story-img"
          />
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- Modal de Stories -->
    <div v-if="showModal" class="story-modal" @click.self="closeStory">
      <div class="story-content">
        <!-- Barra de progresso -->
        <div class="progress-container">
          <div
            v-for="(item, i) in currentStoryData.items"
            :key="i"
            class="progress-bar"
          >
            <div
              class="progress-fill"
              :style="{
                width: i < currentItemIndex ? '100%' : i === currentItemIndex ? progress + '%' : '0%',
              }"
            ></div>
          </div>
        </div>

        <!-- Conteúdo do story -->
        <div
          class="story-media"
          @mousedown="pauseStory"
          @mouseup="resumeStory"
          @touchstart="pauseStory"
          @touchend="resumeStory"
        >
          <template v-if="currentItem">
            <img
              v-if="currentItem.type === 'image'"
              :src="currentItem.src"
              class="story-modal-img"
              :alt="'Story ' + currentStory"
            />
            <video
              v-else
              :src="currentItem.src"
              class="story-modal-video"
              autoplay
              muted
              playsinline
              @ended="nextItem"
            ></video>
          </template>
        </div>

        <!-- Botões do modal (mantidos do jeito que estava) -->
        <button class="nav-btn prev color-gold radius-10" @click="prevItem">&#10094;&#10094;</button>
        <button class="nav-btn next color-gold radius-10" @click="nextItem">&#10095;&#10095;</button>
        <button class="close-btn" @click="closeStory">&times;</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeUnmount } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

// === STORIES ===
const stories = [
  {
    thumbnail: new URL('@/assets/images/a1.jpg', import.meta.url).href,
    items: [
      { type: 'image', src: new URL('@/assets/images/a1.jpg', import.meta.url).href },
      { type: 'video', src: new URL('@/assets/videos/story1.mp4', import.meta.url).href },
    ],
  },
  {
    thumbnail: new URL('@/assets/images/a2.jpg', import.meta.url).href,
    items: [
      { type: 'image', src: new URL('@/assets/images/a2.jpg', import.meta.url).href },
    ],
  },
  {
    thumbnail: new URL('@/assets/images/a3.jpg', import.meta.url).href,
    items: [
      { type: 'image', src: new URL('@/assets/images/a3.jpg', import.meta.url).href },
    ],
  },
  {
    thumbnail: new URL('@/assets/images/a4.jpg', import.meta.url).href,
    items: [
      { type: 'image', src: new URL('@/assets/images/a4.jpg', import.meta.url).href },
    ],
  },
  {
    thumbnail: new URL('@/assets/images/a5.jpg', import.meta.url).href,
    items: [
      { type: 'image', src: new URL('@/assets/images/a5.jpg', import.meta.url).href },
    ],
  },
  {
    thumbnail: new URL('@/assets/images/a6.jpg', import.meta.url).href,
    items: [
      { type: 'image', src: new URL('@/assets/images/a6.jpg', import.meta.url).href },
    ],
  },
  {
    thumbnail: new URL('@/assets/images/a7.jpg', import.meta.url).href,
    items: [
      { type: 'image', src: new URL('@/assets/images/a7.jpg', import.meta.url).href },
    ],
  },
  {
    thumbnail: new URL('@/assets/images/a8.jpg', import.meta.url).href,
    items: [
      { type: 'image', src: new URL('@/assets/images/a9.jpg', import.meta.url).href },
    ],
  },
  {
    thumbnail: new URL('@/assets/images/a10.jpg', import.meta.url).href,
    items: [
      { type: 'image', src: new URL('@/assets/images/a10.jpg', import.meta.url).href },
    ],
  },
  {
    thumbnail: new URL('@/assets/images/a17.jpg', import.meta.url).href,
    items: [
      { type: 'image', src: new URL('@/assets/images/a17.jpg', import.meta.url).href },
    ],
  },
  {
    thumbnail: new URL('@/assets/images/a11.jpg', import.meta.url).href,
    items: [
      { type: 'image', src: new URL('@/assets/images/a11.jpg', import.meta.url).href },
    ],
  },
  {
    thumbnail: new URL('@/assets/images/a12.jpg', import.meta.url).href,
    items: [
      { type: 'image', src: new URL('@/assets/images/a12.jpg', import.meta.url).href },
    ],
  },
  {
    thumbnail: new URL('@/assets/images/a13.jpg', import.meta.url).href,
    items: [
      { type: 'image', src: new URL('@/assets/images/a13.jpg', import.meta.url).href },
    ],
  },
  {
    thumbnail: new URL('@/assets/images/a14.jpg', import.meta.url).href,
    items: [
      { type: 'image', src: new URL('@/assets/images/a14.jpg', import.meta.url).href },
    ],
  },
  {
    thumbnail: new URL('@/assets/images/a15.jpg', import.meta.url).href,
    items: [
      { type: 'image', src: new URL('@/assets/images/a15.jpg', import.meta.url).href },
    ],
  },
  {
    thumbnail: new URL('@/assets/images/a16.jpg', import.meta.url).href,
    items: [
      { type: 'image', src: new URL('@/assets/images/a16.jpg', import.meta.url).href },
    ],
  },
]

const slidesPerView = computed(() => (stories.length > 12 ? 12 : stories.length))

// === MODAL CONTROLS ===
const showModal = ref(false)
const currentStory = ref(0)
const currentItemIndex = ref(0)
const progress = ref(0)
const isPaused = ref(false)
let interval = null

const currentStoryData = computed(() => stories[currentStory.value])
const currentItem = computed(() => currentStoryData.value.items[currentItemIndex.value])

const openStory = (index) => {
  currentStory.value = index
  currentItemIndex.value = 0
  progress.value = 0
  showModal.value = true
  startProgress()
}

const closeStory = () => {
  showModal.value = false
  stopProgress()
}

const nextItem = () => {
  if (currentItemIndex.value < currentStoryData.value.items.length - 1) {
    currentItemIndex.value++
    progress.value = 0
  } else {
    if (currentStory.value < stories.length - 1) {
      currentStory.value++
      currentItemIndex.value = 0
      progress.value = 0
    } else {
      currentStory.value = 0
      currentItemIndex.value = 0
      progress.value = 0
    }
  }
}

const prevItem = () => {
  if (currentItemIndex.value > 0) {
    currentItemIndex.value--
    progress.value = 0
  } else if (currentStory.value > 0) {
    currentStory.value--
    currentItemIndex.value = currentStoryData.value.items.length - 1
    progress.value = 0
  }
}

// Barra de progresso automática
const startProgress = () => {
  stopProgress()
  interval = setInterval(() => {
    if (!isPaused.value) {
      progress.value += 2
      if (progress.value >= 100) {
        progress.value = 0
        nextItem()
      }
    }
  }, 100)
}

const stopProgress = () => {
  if (interval) clearInterval(interval)
}

// Pausar / despausar
const pauseStory = () => (isPaused.value = true)
const resumeStory = () => (isPaused.value = false)

onBeforeUnmount(() => stopProgress())
</script>

<style scoped>
.story-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 92px;
  height: 92px;
  cursor: pointer;
}
.story-img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.slide-image {
  border: 3px solid #e6c27a;
  border-radius: 50%;
}
.slide-image:hover .story-img {
  transform: scale(1.05);
}

.story-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.story-content {
  position: relative;
  width: 100%;
  max-width: 420px;
  height: 80vh;
  background: #000;
  border-radius: 12px;
  overflow: hidden;
}
.story-media {
  width: 100%;
  height: 100%;
}
.story-modal-img,
.story-modal-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.progress-container {
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  display: flex;
  gap: 5px;
  z-index: 20;
}
.progress-bar {
  flex: 1;
  background: rgba(255, 255, 255, 0.2);
  height: 4px;
  border-radius: 4px;
  overflow: hidden;
}
.progress-fill {
  background: #e6c27a;
  height: 100%;
  transition: width 0.1s linear;
}

/* ===== Botões do modal ===== */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  border: none;
  font-size: 2rem;
  padding: 0 12px;
  cursor: pointer;
  z-index: 10;
  transition: background 0.3s;
}
.nav-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}
.nav-btn.prev {
  left: 10px;
}
.nav-btn.next {
  right: 10px;
}

.close-btn {
  position: absolute;
  top: 5px;
  right: 10px;
  color: #fff;
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 30;
}
.close-btn:hover {
  color: #e6c27a;
}
</style>
