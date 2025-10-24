<template>
    <div class="container-fluid p-0 position-relative">
        <img 
        src="@/assets/images/a17.jpg" 
        alt="Banner interno" 
        class="banner-interno w-100"
        >

        <div class="overlay"></div>
    </div>

    <div class="info-profile col-11 col-lg-9 gap-4 m-auto margin-top d-flex justify-content-between">
        <div class="w-100 px-0 position-relative">
            <img 
            src="@/assets/images/a11.jpg" 
            alt="Foto de perfil" 
            class="image-profile p-2 position-relative"
            >
        </div>
        <div class="d-flex col-9 col-sm-8 col-lg-10 gap-2 m-auto padding-top flex-wrap justify-content-start align-items-center flex-row">
            <div class="description d-flex justify-content-center align-items-center gap-3 me-4">
                <h4 class="m-0 font-25 companion-font-mobile text-berge inter font-bold">Jade Miller
                    <div class="w-auto like d-flex d-md-none">                
                        <CompanionMediaRating />
                    </div>
                </h4>
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
            <div class="d-flex justify-content-center align-items-center gap-3 social-link">
                <div class="w-auto like d-block d-md-none">                    
                    <Like />              
                </div>
                <form action="">
                    <button type="button" class="gold-gradient rounded-5 px-4 follow font-16 inter font-regular button-mobile">Seguindo</button>
                </form>
                <RouterLink to="/" class="inter button-mobile font-regular d-flex justify-content-center align-items-center text-berge rounded-5 px-4 speak font-16 text-decoration-none">
                    <svg class="me-2" width="20" height="auto" viewBox="0 0 63 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M53.0463 10.0883C47.218 4.18745 39.4669 0.936322 31.2093 0.932861C14.1936 0.932861 0.345376 14.9367 0.338532 32.1487C0.33625 37.6508 1.75758 43.0218 4.45917 47.756L0.0795898 63.9329L16.4446 59.5916C20.9539 62.0791 26.0304 63.3899 31.1967 63.3915H31.2096C48.2234 63.3915 62.0731 49.3864 62.0796 32.1737C62.083 23.8319 58.8749 15.9888 53.0463 10.0883ZM31.2093 58.1193H31.1986C26.5947 58.1174 22.0794 56.8661 18.1393 54.5025L17.2028 53.9399L7.49156 56.5162L10.0836 46.9412L9.47336 45.9596C6.90485 41.8283 5.54855 37.0533 5.55083 32.1506C5.55615 17.8445 17.0667 6.20542 31.2195 6.20542C38.0729 6.20773 44.5153 8.91014 49.3595 13.8147C54.2037 18.7193 56.87 25.2385 56.8677 32.1718C56.8616 46.479 45.3518 58.1193 31.2093 58.1193ZM45.2834 38.686C44.5122 38.2953 40.7198 36.4088 40.0125 36.1481C39.306 35.8878 38.7912 35.7582 38.2775 36.5388C37.763 37.3194 36.285 39.0766 35.8348 39.5969C35.3846 40.1175 34.9352 40.1829 34.1637 39.7922C33.3922 39.4019 30.907 38.5779 27.9605 35.9205C25.6677 33.8521 24.1197 31.2978 23.6695 30.5172C23.2201 29.7358 23.6657 29.3544 24.0079 28.9253C24.8429 27.8767 25.6791 26.7773 25.9361 26.2571C26.1935 25.7364 26.0646 25.2808 25.8715 24.8905C25.6791 24.5002 24.1365 20.6607 23.4939 19.0984C22.8672 17.578 22.2318 17.7834 21.7581 17.7595C21.3086 17.7368 20.7942 17.7322 20.2797 17.7322C19.7656 17.7322 18.9299 17.9272 18.2226 18.7085C17.5158 19.4895 15.5233 21.3763 15.5233 25.2158C15.5233 29.0552 18.2873 32.7643 18.6728 33.285C19.0584 33.8056 24.1121 41.6844 31.8496 45.0629C33.6899 45.8673 35.1265 46.3468 36.247 46.7063C38.095 47.3 39.776 47.2162 41.1053 47.0155C42.5875 46.7913 45.6685 45.1282 46.3119 43.3064C46.9545 41.4841 46.9545 39.9226 46.7613 39.5969C46.5689 39.2716 46.0545 39.0766 45.2834 38.686Z" fill="#C0BDAD"></path>
                    </svg>
                    Whatsapp
                </RouterLink>
                <ReportProfile/>
            </div>
            <div class="col-12 col-lg-9 like d-none d-md-block">                
                <Like />
                <CompanionMediaRating />
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
                <div class="text col-12 col-md-9 col-lg-9 m-auto ms-0 text-grey-one font-16 inter font-regular text-start d-none d-lg-block">
                    <p>
                        “Sexo é amor, realidade é uma dor, porque o que importa é o momento. Ser livre, ser gostoso e prazeroso“
                    </p>
                </div>
            </div>

        </div>
    </div>
    <div class="text col-12 px-2 mt-3 text-grey-one font-16 inter font-regular text-center d-block d-lg-none">
        <p>
            “Sexo é amor, realidade é uma dor, porque o que importa é o momento. Ser livre, ser gostoso e prazeroso“
        </p>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import Like from '@/components/Like.vue';
    import CompanionMediaRating from '@/components/CompanionMediaRating.vue';
    import ReportProfile from '@/components/ReportProfile.vue';
</script>

<style scoped>
    .like :deep(span){
        font-size: 1.125rem !important;
    }
    .like :deep(svg) {
        width: 20px;
        height: 20px;
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
        height: 375px;
        object-fit: cover;
        object-position: center;
        display: block;
    }
    .margin-top{
        margin-top: -130px !important;
    }
    .padding-top{
        padding-top: 160px;
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
    @media (max-width: 880px) {
        .info-profile{
            justify-content: center !important;
            text-align: center;
        }
        .image-profile{
            width: 225px;
            height: 225px;
        }
        .padding-top, .margin-top{
            padding-top: 0;
            margin-top: 0px !important;
        }
        .info-profile{
            margin-top: 35px !important;
            justify-content: start !important;
        }
    }
    @media (max-width: 761px) {
        .image-profile{
            width: 155px;
            height: 155px;
        }
        .companion-font-mobile{
            font-size: 1.25rem;
        }
        .button-mobile{
            font-size: 0.75rem;
            height: 30px;
        }
        .button-mobile svg{
            width: 16px;
        }
        .companion-font-mobile, .followers span, .liked span, .publishings span{
            font-size: 1.125rem;
        }
        .followers, .liked, .publishings{
            font-size: 0.75rem;
        }
        .text, .like :deep(span){
            font-size: 0.75rem !important;
        }
        :deep(.likeds) {
            display: none;
        }
        :deep(.like-component){
            padding-bottom: 0 !important;
        }
        .like :deep(svg){
            width: 14px;
            height: 14px;
        }
        :deep(.icon-mobile){
            width: 15px;
            padding-top: 2px;
        }
        :deep(.description.d-flex.justify-content-center.align-items-center.gap-3.me-4){
            gap: 5px !important;
            align-items: baseline !important;
        }
    }
    @media (max-width: 576px) {
        .image-profile{
            width: 130px;
            height: 130px;
            padding: 3px !important;
        }
        .like :deep(span){
            font-size: 0.625rem !important;
        }
        .like :deep(svg) {
            width: 11px !important;
            height: 11px !important;
        }
    }
    @media (max-width: 476px) {
        :deep(.like){
            margin-left: 10px !important;
        }
        .report-profile{
            margin-left: 8px;
            margin-top: -4px; 
        }
        .d-flex.justify-content-center.align-items-center.gap-3.social-link{
            gap: 5px !important;
        }
        .banner-interno{
            height: 230px;
        }
        .image-profile{
            width: 110px;
            height: 110px;
        }
        .button-mobile{
            font-size: 0.625rem;
            height: 22px;
            padding: 0 10px !important;
        }
        .button-mobile svg{
            width: 12px;
        }
        .companion-font-mobile{
            font-size: 1rem;
            margin-right: 3px !important;
        }
        .followers span, .liked span, .publishings span{
            font-size: 0.8125rem;
            margin-right: 3px !important;
        }
        .followers, .liked, .publishings{
            font-size: 0.625rem;
        }
        :deep(.icon-mobile){
            width: 12px;
            padding: 0 !important;
            margin-top: -2px;
            margin-left: -10px;
        }
        :deep(.description.d-flex.justify-content-center.align-items-center.gap-3.me-4){
            gap: 0px !important;
            align-items: start !important;
        }
        .like :deep(svg) {
            width: 18px !important;
            height: 18px !important;
        }
        h4.companion-font-mobile{
            text-align: left;
        }
    }
    @media (max-width: 415px) {
        .info-profile{
            gap: 10px !important;
            margin-top: 15px !important;
        }
        .followers span, .liked span, .publishings span{
            font-size: 0.6875rem;
            margin-right: 3px !important;
        }
        .followers, .liked, .publishings{
            text-align: left;
            display: flex;
            flex-direction: column;
        }
        .text{
            font-size: 0.6875rem !important;
        }
        .image-profile{
            width: 90px;
            height: 90px;
        }
        .button-mobile{
            font-size: 0.625rem;
            height: 23px;
            padding: 0 12px !important;
        }
        .button-mobile svg{
            width: 14px;
        }
        .social-link{
            gap: 10px !important;
        }
        :deep(.flag) {
            width: 10px;
            height: 12px;
            margin-top: -6px;
        }
    }
</style>
