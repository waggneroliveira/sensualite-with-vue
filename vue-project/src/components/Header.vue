<template>
  <nav class="navbar navbar-expand-lg navbar-dark ">
    <div class="container">
        <div class="w-100 d-flex flex-wrap justify-content-between align-items-center">
            <!-- Logo -->
            <div class="image-logo col-12 col-lg-2">
                <RouterLink class="navbar-brand fw-bold" to="/">
                    <img loading="lazy" :src="logo" alt="Firula">
                </RouterLink>
            </div>

            <div class="col-12 col-lg-10">
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

                <div class="row gap-3">
                    <!-- Menu Direita -->
                    <div class="navbar-nav navbar-top w-100 justify-content-end align-items-center gap-4">
                        <!-- Input de pesquisa -->
                        <div class="input-group mb-0 search rounded-5">
                            <input type="text" class="form-control ps-4 bg-transparent border-0" placeholder="Pesquisar..." aria-label="Pesquisar" aria-describedby="button-search">
                            <button class="btn bg-transparent border-0 pe-4" type="button" id="button-search">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.66659 0C2.08887 0 0 2.08951 0 4.66653C0 7.24421 2.08901 9.33359 4.66659 9.33359C5.6661 9.33359 6.59251 9.01902 7.35205 8.4835L10.6341 11.766C10.9466 12.078 11.4532 12.078 11.7656 11.766C12.0781 11.4536 12.0781 10.947 11.7656 10.6345L8.48359 7.35251C9.0186 6.5929 9.33317 5.66647 9.33317 4.66655C9.33317 2.08941 7.24364 0 4.66659 0ZM1.59975 4.66653C1.59975 2.97321 2.97271 1.60013 4.66659 1.60013C6.36048 1.60013 7.73344 2.97307 7.73344 4.66653C7.73344 6.36039 6.36048 7.73333 4.66659 7.73333C2.97271 7.73333 1.59975 6.36039 1.59975 4.66653Z" fill="#C0BDAD"/>
                                </svg>
                            </button>
                        </div>
                        <!-- Botão com Dropdown -->
                        <div class="dropdown d-flex">
                            <button class="btn btn-dropdown clean d-flex justify-content-center align-items-center gap-2 text-white" type="button" id="dropdownCadastro" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-person-plus"></i> 
                                <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 11.6667C10 11.9735 9.75127 12.2222 9.44444 12.2222C9.13762 12.2222 8.88889 11.9735 8.88889 11.6667C8.88889 9.51889 7.14777 7.77778 5 7.77778C2.85223 7.77778 1.11111 9.51889 1.11111 11.6667C1.11111 11.9735 0.86238 12.2222 0.555556 12.2222C0.248731 12.2222 0 11.9735 0 11.6667C0 8.90524 2.23858 6.66667 5 6.66667C7.76142 6.66667 10 8.90524 10 11.6667ZM5 6.11111C3.31246 6.11111 1.94444 4.74309 1.94444 3.05556C1.94444 1.36802 3.31246 0 5 0C6.68754 0 8.05556 1.36802 8.05556 3.05556C8.05556 4.74309 6.68754 6.11111 5 6.11111ZM5 5C6.07389 5 6.94444 4.12944 6.94444 3.05556C6.94444 1.98167 6.07389 1.11111 5 1.11111C3.92611 1.11111 3.05556 1.98167 3.05556 3.05556C3.05556 4.12944 3.92611 5 5 5Z" fill="white"/>
                                </svg>

                                Cadastre-se
                            </button>
                            <ul class="dropdown-menu border-with-gradient p-0 m-0" aria-labelledby="dropdownCadastro">
                                <li><a class="dropdown-item d-flex justify-conten-center align-items-center gap-2 text-white dropdown-item-companion" href="#" data-bs-toggle="modal" data-bs-target="#modalAcompanhante"><span class="bg-white radius d-inline-block position-relative"></span> Acompanhante</a></li>
                                <li><a class="dropdown-item d-flex justify-conten-center align-items-center gap-2 text-white dropdown-item-client" href="#" data-bs-toggle="modal" data-bs-target="#modalCliente"><span class="bg-white radius d-inline-block position-relative"></span> Cliente</a></li>
                            </ul>
                        </div>

                        <!-- Modal Cadastro Acompanhante -->
                        <div class="modal fade" id="modalAcompanhante" tabindex="-1" aria-labelledby="modalAcompanhanteLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content red-secundary-gradient text-light pb-4">
                                    <div class="modal-header flex-column">
                                        <button type="button" class="btn-close text-gold-gradient d-flex justify-content-center align-items-center font-40" data-bs-dismiss="modal" aria-label="Fechar">x</button>
                                        <div class="row flex-column justify-content-center align-items-center">
                                            <img loading="lazy" :src="logo" alt="Firula" class="logo-modal">
                                            <h5 class="modal-title text-berge font-30 text-center" id="modalAcompanhanteLabel">Cadastro de Acompanhante</h5>
                                            <p class="text-berge font-15 text-center">Entre para nossa plataforma e destaque-se!</p>
                                        </div>
                                    </div>
                                    <div class="modal-body mt-3">
                                        <form id="formAcompanhante" class="col-10 m-auto text-center">
                                            <div class="mb-3">
                                                <input type="text" class="form-control red-gradient radius-10" placeholder="Nome" name="nome" required>
                                            </div>
                                            <div class="mb-3">
                                                <input type="email" class="form-control red-gradient radius-10" placeholder="E-mail" name="email" required>
                                            </div>
                                            <div class="mb-5">
                                                <input type="password" class="form-control red-gradient radius-10" placeholder="Senha" name="senha" required>
                                            </div>
                                            <button type="submit" class="btn gold-gradient w-100 text-red-primary font-18 register">Cadastrar</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Modal Cadastro Cliente -->
                        <div class="modal fade" id="modalCliente" tabindex="-1" aria-labelledby="modalClienteLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content red-secundary-gradient text-light pb-4">
                                    <div class="modal-header flex-column">
                                        <button type="button" class="btn-close text-gold-gradient d-flex justify-content-center align-items-center font-40" data-bs-dismiss="modal" aria-label="Fechar">x</button>
                                        <div class="row flex-column justify-content-center align-items-center">
                                            <img loading="lazy" :src="logo" alt="Firula" class="logo-modal">
                                            <h5 class="modal-title text-berge font-30 text-center" id="modalAcompanhanteLabel">Cadastro do Cliente</h5>
                                            <p class="text-berge font-15 text-center">Acesse acompanhantes exclusivos – cadastre-se!</p>
                                        </div>
                                    </div>
                                    <div class="modal-body mt-3">
                                        <form id="formCliente" class="col-10 m-auto text-center">
                                            <div class="mb-3">
                                                <input type="text" class="form-control red-gradient radius-10" placeholder="Nome" name="nome" required>
                                            </div>
                                            <div class="mb-3">
                                                <input type="email" class="form-control red-gradient radius-10" placeholder="E-mail" name="email" required>
                                            </div>
                                            <div class="mb-5">
                                                <input type="password" class="form-control red-gradient radius-10" placeholder="Senha" name="senha" required>
                                            </div>
                                            <button type="submit" class="btn gold-gradient w-100 text-red-primary font-18 register">Cadastrar</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button class="btn text-berge border-with-gradient radius-10 px-4 announcement">
                            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.2363 2.98352H11.7665V1.07712C11.7665 0.72226 11.5919 0.39039 11.2996 0.189268C11.0065 -0.0118728 10.6344 -0.0556757 10.3033 0.0721805L5.31096 1.99587H2.79679C1.26172 1.99587 0.0132262 3.24648 0.0132262 4.78367C-0.110327 6.10611 0.640334 7.39916 1.90529 7.80703V12.1013C1.97281 14.2534 5.04156 14.2605 5.10978 12.1013V11.2055C5.10188 10.7005 4.35123 10.7034 4.34404 11.2055V12.1013C4.34404 12.5782 3.96978 12.9668 3.50934 12.9668C3.04746 12.9668 2.67105 12.5789 2.67105 12.1013V7.95874C2.57336 7.97095 4.36557 7.96377 4.34404 7.96593V9.67411C4.35266 10.1769 5.10116 10.1784 5.10978 9.67411V7.96593H5.30302L10.2861 9.98506C10.9621 10.2832 11.7896 9.7279 11.7673 8.9873V7.08089H12.2371C14.8022 7.0421 14.8059 3.02314 12.2371 2.98287L12.2363 2.98352ZM11.0008 3.3671V8.98867C11.0072 9.20202 10.7695 9.36436 10.5734 9.27672L5.76422 7.32783V3.91223C5.75632 3.4094 5.00638 3.40868 4.99847 3.91223V7.2015C4.68672 7.18498 2.63013 7.24747 2.36717 7.15193C1.71205 7.01258 1.18984 6.5507 0.940574 5.95592H2.54532C3.05031 5.94658 3.04744 5.19808 2.54532 5.19018C2.54532 5.18299 0.766024 5.20383 0.778234 5.18299V4.78504C0.778234 4.78216 0.778953 4.77929 0.778953 4.77641H2.11432C2.32622 4.77641 2.49718 4.60545 2.49718 4.39355C2.49718 4.18165 2.32622 4.01069 2.11432 4.01069H0.933385C1.23723 3.27943 1.95772 2.76368 2.79602 2.76368H5.38062C5.42659 2.75435 5.47185 2.75004 5.51854 2.73854L8.90049 1.4355V4.18027C8.90767 4.6831 9.65905 4.68382 9.66623 4.18027V1.14036L10.5778 0.789088C10.7717 0.705763 11.0073 0.867385 11.0002 1.07857V3.36784L11.0008 3.3671ZM13.3913 5.16076C13.3913 5.79791 12.8734 6.31582 12.2363 6.31582H11.7665V3.74998H12.2363C13.0035 3.75285 13.4761 4.43238 13.3913 5.1615V5.16076Z" fill="#C0BDAD"/>
                            <path d="M16.4787 4.6499H15.6448C15.1412 4.65852 15.1412 5.40774 15.6448 5.41565H16.4787C16.9816 5.40774 16.9823 4.65781 16.4787 4.6499Z" fill="#C0BDAD"/>
                            <path d="M14.3677 3.48421C14.5473 3.58908 14.7843 3.52874 14.8906 3.34413L15.3072 2.62149C15.4128 2.43832 15.3503 2.20415 15.1672 2.09854C14.984 1.99293 14.7505 2.05616 14.6442 2.23861L14.2276 2.96125C14.122 3.14443 14.1845 3.3786 14.3677 3.48421Z" fill="#C0BDAD"/>
                            <path d="M14.8904 6.72147C14.6303 6.28974 13.9831 6.664 14.2266 7.10433L14.6433 7.82697C14.8976 8.26012 15.5548 7.87797 15.307 7.44411L14.8904 6.72147Z" fill="#C0BDAD"/>
                            <path d="M3.02832 11.9705C3.0391 12.5997 3.97507 12.5997 3.98584 11.9705C3.97507 11.3412 3.0391 11.3412 3.02832 11.9705Z" fill="#C0BDAD"/>
                            </svg>

                            <i class="bi bi-megaphone"></i> Quero anunciar!
                        </button>
                        <!-- <button class="btn btn-outline-light">
                            <i class="bi bi-box-arrow-in-right"></i> Login
                        </button> -->
                    </div>
                    <!-- Menu -->
                    <div class="collapse navbar-collapse navbar-bottom w-100 justify-content-end" id="navbarNav">
                        <!-- Menu Central -->
                        <ul class="navbar-nav me-0">
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
                    </div>
                </div>
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