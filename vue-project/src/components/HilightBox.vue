<template>
  <section class="position-relative container-fluid px-5 mt-5">
    <h3 class="title-section mb-3 text-gradient">Destaques</h3>

    <div class="row g-2 justify-content-start p-0">
      <div
        v-for="(companion, index) in randomCompanions"
        :key="index"
        class="col-6 col-lg-3 companion-item"
      >
        <div class="content-item overflow-hidden col-12 d-flex flex-column align-items-center text-center shadow-sm">
            <div class="image p-1 pb-0 position-relative">
                <div class="rounded overflow-hidden">
                    <img
                        :src="companion.image"
                        :alt="companion.name"
                        class="w-100"
                    />
                </div>
            </div>

            <div class="description col-12 m-auto gold-gradient">
                <div class="d-flex justify-content-between align-items-center col-11 m-auto py-2">
                    <div class="d-flex gap-2 justify-content-center align-items-center flex-row">
                        <h4 class="m-0 font-18 companion-font-mobile">{{ companion.name }}</h4>
                        <!-- ícone online -->
                        <svg
                        class="icon-mobile"
                        width="18"
                        height="18"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle cx="9.29099" cy="9.29099" r="9.29099" fill="#579A23" />
                        <path
                            d="M3.98145 8.97229C4.199 8.59877 4.50612 8.31518 4.79953 8.02121C4.99444 7.8258 5.22727 7.87076 5.44272 8.12093C6.04167 8.8155 6.63535 9.51642 7.23113 10.2145C7.42762 10.445 7.62305 10.6762 7.8206 10.9056C8.04974 11.1713 8.11823 11.1742 8.34895 10.9131C9.4889 9.62075 10.6273 8.32728 11.7667 7.03439C12.5727 6.11963 13.3781 5.20486 14.1856 4.29125C14.5465 3.88315 14.7698 3.88084 15.1296 4.27453C15.2719 4.43016 15.4141 4.58464 15.5553 4.74143C15.8397 5.0573 15.8439 5.27691 15.5616 5.59855C14.6603 6.62456 13.7558 7.64769 12.8529 8.67255C11.4048 10.3165 9.95773 11.961 8.50962 13.6055C8.1472 14.017 7.96019 14.0119 7.60725 13.5945C6.5458 12.3397 5.48381 11.0854 4.41814 9.8346C4.25116 9.63919 4.10524 9.43053 3.98145 9.20112V8.97171L3.98145 8.97229Z"
                            fill="white"
                        />
                        </svg>
                    </div>
                    
                    <RouterLink
                        class="text-decoration-none text-dark fw-bold"
                        :to="companion.link"
                    >
                        <svg
                        class="icon-chat-mobile"
                        width="24"
                        height="22"
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M5.67783 17.2353V19.5737L8.1391 16.8546C8.25005 16.7319 8.4014 16.6698 8.55422 16.6698V16.6691H21.394C21.801 16.6691 22.1706 16.5013 22.4395 16.2307C22.7084 15.9608 22.8752 15.5883 22.8752 15.1794V2.62071C22.8752 2.21116 22.7084 1.8393 22.4395 1.56873C22.1713 1.2989 21.801 1.13034 21.394 1.13034H2.60601C2.19898 1.13034 1.82942 1.29816 1.56052 1.56873C1.29162 1.8393 1.12484 2.21116 1.12484 2.62071V15.1794C1.12484 15.5883 1.29162 15.9608 1.56052 16.2307C1.82869 16.5013 2.19898 16.6691 2.60601 16.6691H5.11578C5.42656 16.6691 5.67783 16.9226 5.67783 17.2346V17.2353ZM6.8923 11.9688C6.58152 11.9688 6.32952 11.7152 6.32952 11.4025C6.32952 11.0898 6.58152 10.8362 6.8923 10.8362H12.9661C13.2769 10.8362 13.5289 11.0898 13.5289 11.4025C13.5289 11.7152 13.2769 11.9688 12.9661 11.9688H6.8923ZM6.8923 6.96319C6.58152 6.96319 6.32952 6.70962 6.32952 6.39764C6.32952 6.08493 6.58152 5.83136 6.8923 5.83136H17.1084C17.4192 5.83136 17.6712 6.08493 17.6712 6.39764C17.6712 6.71036 17.4192 6.96319 17.1084 6.96319H6.8923ZM4.55299 21.0345V17.8016H2.60601C1.88894 17.8016 1.23725 17.5067 0.764832 17.032C0.293149 16.5567 0 15.9017 0 15.1802V2.62145C0 1.89992 0.293149 1.24419 0.764832 0.76958C1.23725 0.29423 1.88894 0 2.60601 0H21.394C22.1111 0 22.7628 0.294969 23.2352 0.76958C23.7069 1.24419 24 1.89992 24 2.62145V15.1802C24 15.9017 23.7069 16.5574 23.2352 17.032C22.7628 17.5074 22.1118 17.8016 21.394 17.8016H8.80181L5.55293 21.39C5.44934 21.5187 5.29211 21.6 5.11578 21.6C4.805 21.6 4.55299 21.3464 4.55299 21.0345Z"
                            fill="#101012"
                        />
                        </svg>
                    </RouterLink>
                </div>
            </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Mock de dados
const randomCompanions = ref([
  { name: "Elisângela Felipa", image: new URL('@/assets/images/a1.jpg', import.meta.url).href, link: "/" },
  { name: "Larissa Costa", image: new URL('@/assets/images/a2.jpg', import.meta.url).href, link: "/" },
  { name: "Tatiane Rocha", image: new URL('@/assets/images/a4.jpg', import.meta.url).href, link: "/" },
  { name: "Carla Menezes", image: new URL('@/assets/images/a6.jpg', import.meta.url).href, link: "/" },
//   { name: "Amanda Luz", image: new URL('@/assets/images/a3.jpg', import.meta.url).href, link: "/" },
//   { name: "Marina Souza", image: new URL('@/assets/images/a5.jpg', import.meta.url).href, link: "/" },
]);
</script>

<style scoped>
    .companion-item .content-item img {
        object-fit: cover;
        aspect-ratio: 3/4;        
        transition: transform 0.4s ease;
    }
    .companion-item .content-item .image .rounded {
        border-radius: 25px 0 0 !important;
    }
    .companion-item .content-item{
        border-radius: 25px 0;
        background: linear-gradient(to bottom, #F9E4B7, #E6C27A, #C6A14D, #8C6C3A, #F9E4B7, #f8e3b4)
    }
    .companion-item .content-item .image:hover img {
        transform: scale(1.05);
    }
    /* .companion-item .content-item .image::after{
        content: '';
        background-color: rgba(0, 0, 0, 0.2);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    } */

     @media (max-width: 576px) {
        .icon-chat-mobile{
            width: 18px;
        }
        .icon-mobile{
            width: 12px;
            height: 12px;
        }
        .companion-font-mobile{
            font-size: 0.875rem;
        }
        section.container-fluid {
            padding-left: 10px !important;
            padding-right: 10px !important;
        }
    }
</style>
