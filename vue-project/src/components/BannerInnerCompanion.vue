<template>
    <div class="container-fluid p-0 position-relative">
        <img 
        src="@/assets/images/a17.jpg" 
        alt="Banner interno" 
        class="banner-interno w-100"
        >
        <div class="w-100 px-5 position-absolute">
            <img 
            src="@/assets/images/a11.jpg" 
            alt="Foto de perfil" 
            class="image-profile p-2 position-absolute"
            >
        </div>
        <div class="overlay"></div>
    </div>

    <div class="info-profile col-7 m-auto mt-4">
        <div class="d-flex col-10 gap-2 m-auto flex-wrap ps-4 me-0 justify-content-start align-items-center flex-row">
            <div class="description d-flex justify-content-center align-items-center gap-3">
                <h4 class="m-0 font-25 companion-font-mobile text-berge inter font-bold">Jade Miller</h4>
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

            <div class="d-flex justify-content-center align-items-center gap-3 social-link ms-4">
                <form action="">
                    <button type="button" class="gold-gradient rounded-5 px-4 follow font-16 inter font-regular">Seguindo</button>
                </form>
                <RouterLink to="/" class="inter font-regular d-flex justify-content-center align-items-center text-berge rounded-5 px-4 speak font-16 text-decoration-none">
                    Conversar
                </RouterLink>
            </div>
            <div class="col-12 col-lg-9 like">
                <Like />
            </div>
            <div class="d-flex justify-content-start align-items-center flex-column gap-3 col-12 col-lg-9 info-count">
                <div class="d-flex flex-row col-12 justify-content-start align-items-center gap-3">                    
                    <div class="followers text-berge inter font-regular">
                        <span class="text-grey-one font-24 inter font-bold me-2">250</span>
                        Seguidores
                    </div>
                    <div class="liked text-berge inter font-regular">
                        <span class="text-grey-one font-24 inter font-bold me-2">125</span>
                        Curtidas
                    </div>
                    <div class="publishings text-berge inter font-regular">
                        <span class="text-grey-one font-24 inter font-bold me-2">86</span>
                        Publicações
                    </div>
                </div>
                <div class="col-12 text-grey-one font-16 inter font-regular">
                    <p>
                        “Sexo é amor, realidade é uma dor, porque o que importa é o momento. Ser livre, ser gostoso e prazeroso“
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import Like from '@/components/Like.vue';
</script>

<style scoped>
    .like :deep(span){
        font-size: 1.125rem !important;
    }
    .like :deep(svg) {
        width: 25px;
        height: 23px;
    }
    .like-component{
        margin: 0 !important;
    }
    .follow, .speak{
        height: 38px;
    }
    .speak{
        border: 1px solid #D9D9D9;
    }
    .banner-interno {
        height: 425px;
        object-fit: cover;
        object-position: center;
        display: block;
    }
    .w-100.px-5{
        bottom: 150px;
        left: 115px;
    }
    .image-profile{
        border-radius: 100%;
        width: 279px;
        height: 279px;
        object-fit: cover;
        object-position: center;
        background: linear-gradient(to bottom, #F9E4B7, #E6C27A, #C6A14D, #8C6C3A, #F9E4B7);
        position: relative;
        z-index: 1;
    }
    .overlay{
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.2);
        z-index: 0;
    }
</style>
