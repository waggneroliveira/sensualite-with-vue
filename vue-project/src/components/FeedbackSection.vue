<template>
  <section class="feedback-section my-5">
    <div class="container container-mobile">
        <!-- Formulário -->
        <div class="card-top avaliation bg-transparent rounded-4 text-light p-4 mt-5">
            <form>
                <div class="d-flex flex-row justify-content-between align-items-start align-items-md-center gap-3 column-mid">
                    <h4 class="title-section mb-0 inter font-bold font-28 text-gradient text-start col-12 col-md-12 col-lg-6">
                        Escreva a sua avaliação
                    </h4>

                    <!-- Estrelas -->
                    <div class="mb-2 mb-md-0 col-12 col-md-12 col-lg-6">
                        <div class="d-flex flex-row align-items-center justify-content-end gap-2 me-3">
                        <label
                            class="form-label inter font-regular font-15 text-berge mb-0 mt-2 text-start"
                            >Nível de experiência:</label
                        >
                        <div
                            class="stars d-flex flex-row-reverse align-items-center justify-content-center flex-wrap gap-1"
                        >
                            <template v-for="i in 5">
                            <input type="radio" :id="'star' + i" name="rating" />
                            <label :for="'star' + i">
                                <svg
                                viewBox="0 0 18 17"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                                    fill="#9D9D9D"
                                />
                                </svg>
                            </label>
                            </template>
                        </div>
                        </div>
                    </div>
                </div>

                <!-- Mensagem -->
                <div class="mb-3 mt-5 msg">
                    <textarea
                        class="form-control text-berge inter font-15 font-light"
                        rows="3"
                        placeholder="Escreva aqui um comentário sobre o(a) profissional"
                        required
                    ></textarea>
                </div>

                <div
                class="d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center gap-3 gap-mobile"
                >
                <!-- Privacidade -->
                <div class="form-check mb-0">
                    <input class="form-check-input" type="checkbox" id="privacy" required />
                    <label
                    class="form-check-label inter font-15 font-regular"
                    for="privacy"
                    >
                    Aceito os termos descritos na
                    <a
                        href="#"
                        class="text-decoration-underline inter font-15 font-regular privacy-policy"
                        >Política de Privacidade</a
                    >
                    </label>
                </div>

                <div
                    class="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3"
                >
                    <!-- Anônimo -->
                    <div class="form-check mb-0">
                    <input class="form-check-input" type="checkbox" id="anonymous" />
                    <label
                        class="form-check-label inter font-15 font-regular"
                        for="anonymous"
                        >Enviar Mensagem anônima</label
                    >
                    </div>

                    <button
                    type="button"
                    class="btn send inter font-15 font-medium rounded-5 px-4 py-2 text-white"
                    >
                    Enviar
                    </button>
                </div>
                </div>
            </form>
        </div>

        <!-- Cabeçalho -->
        <div class="d-flex justify-content-between align-items-center mt-5 mb-4">
            <div>
                <h3 class="inter font-25 font-bold text-berge title-section">Comentários</h3>
                <h6 class="text-secondary">3 Avaliações</h6>
            </div>
        </div>

        <!-- Listagem de Avaliações -->
        <div
        v-for="(feedback, index) in staticFeedbacks"
        :key="index"
        class="card text-light mb-3 p-3"
        >
            <div class="d-flex flex-row justify-content-between align-items-start">
                <!-- Usuário -->
                <div class="d-flex align-items-center gap-3">
                    <img
                        src="@/assets/images/profile.jpg"
                        class="rounded-circle"
                        width="50"
                        height="50"
                        alt="Usuário"
                    />
                    <div>
                        <h5 class="mb-0">{{ feedback.surname }}</h5>
                        <small class="text-muted">Publicado há {{ feedback.date }} dias</small>
                    </div>
                </div>

                <!-- Estrelas -->
                <div class="d-flex align-items-center gap-2 mt-2">
                    <div class="d-flex">
                        <svg
                            v-for="i in 5"
                            :key="i"
                            width="18"
                            height="17"
                            viewBox="0 0 18 17"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                            :fill="i <= feedback.rating ? '#FFDB12' : '#9D9D9D'"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <p class="mt-3">{{ feedback.message }}</p>

            <!-- Resposta -->
            <div v-if="feedback.response" class="border-top pt-3 mt-3">
                <div class="resposta">
                    <h6 class="inter font-15 font-medium text-berge response">Resposta:</h6>
                    <div class="d-flex align-items-center gap-3 mb-2">
                        <img
                            src="@/assets/images/a17.jpg"
                            width="40"
                            height="40"
                            class="rounded-circle"
                        />
                        <div>
                            <strong class="inter font-15 font-medium response">Marina Lux</strong>
                            <small class="inter font-12 font-regular d-block">@marinalux</small>
                        </div>
                    </div>
                    <div class="inter font-15 font-regular small">{{ feedback.response }}</div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script setup>
const staticFeedbacks = [
  {
    surname: "Carlos",
    date: "3",
    rating: 5,
    message: "Atendimento impecável, super simpática!",
    like: true,
    response: "Obrigada, querido! 💕 Volte sempre 😘",
  },
  {
    surname: "Anônimo",
    date: "4",
    rating: 4,
    message: "Muito educada e gentil. Recomendo!",
    like: false,
    response: null,
  },
  {
    surname: "João",
    date: "10",
    rating: 3,
    message: "Legal, mas poderia ser mais atenciosa.",
    like: false,
    response: null,
  },
];
</script>

<style scoped>
    textarea.form-control{
        height: 210px;
        background-color: rgba(158, 95, 77, 0.2);
    }
    textarea.form-control::placeholder{
        color: #C0BDAD;
    }
    .btn.send{
        background: #A20712;
        height: 35px;
        width: 120px;
    }

    .stars input {
        display: none;
    }
    .stars label {
        cursor: pointer;
    }
    @media (max-width: 768px) {
        .avaliation h4 {
            font-size: 1.25rem;
        }

        .stars svg {
            width: 20px;
            height: 20px;
        }

        .btn.send {
            width: 100%;
        }
    }


    /* ====== Card principal (avaliação) ====== */
    .card, .card-top {
        background-color: rgba(158, 95, 77, 0.2); /* Rosê 20% */
        border: 1px solid rgba(214, 184, 108, 0.4); /* Ouro translúcido */
        border-radius: 20px;
        padding: 24px;
        color: #f2f2f2;
        backdrop-filter: blur(6px);
        transition: 0.3s ease;
    }

    .card:hover {
        background-color: rgba(158, 95, 77, 0.3);
        transform: translateY(-3px);
    }

    /* ====== Cabeçalho ====== */
    .card .d-flex.align-items-center.gap-3 img {
        border: 2px solid #d6b86c; /* Dourado */
        object-fit: cover;
    }

    .card h5 {
        font-weight: 700;
        color: #f5e2b0; /* Dourado claro */
    }

    .card small.text-muted {
        color: #bcbcbc !important;
    }

    /* ====== Estrelas ====== */
    .card .d-flex svg path {
        transition: fill 0.3s ease;
    }

    .card .d-flex svg:hover path {
        fill: #f5e2b0 !important;
    }

    /* ====== Mensagem principal ====== */
    .card p {
        color: #e6e6e6;
        line-height: 1.6;
        margin-top: 10px;
    }

    /* ====== Resposta (área inferior) ====== */
    .card .border-top {
        border-color: rgba(214, 184, 108, 0.2) !important;
        margin-top: 20px;
        padding-top: 15px;
    }

    /* Diferencia visualmente a resposta */
    .card .resposta {
        background-color: #230709;
        border-left: 4px solid #9e5f4d; /* Rosê */
        border-radius: 12px;
        padding: 14px 18px;
        margin-top: 10px;
        color: #e6e6e6;
    }

    .card .resposta strong {
        color: #f5e2b0; /* Nome da acompanhante/admin em dourado */
        display: block;
        margin-bottom: 6px;
    }

    .card .resposta small {
        color: #bcbcbc;
        display: block;
        margin-bottom: 10px;
    }

    .card .resposta p {
        margin: 0;
        font-size: 0.95rem;
        color: #f2f2f2;
    }
    /* ====== Responsividade ====== */
    @media (max-width: 992px) {
        .column-mid{
            flex-direction: column !important;
        }
        .d-flex.flex-row.align-items-center.justify-content-end.gap-2.me-3{
            justify-content: flex-start !important;
        }
    }
    @media (max-width: 768px) {
    .container-mobile{
        max-width: inherit !important;
    }
    .card {
        padding: 16px;
    }

    .card .d-flex.justify-content-between.align-items-start {
        flex-direction: column;
        align-items: flex-start !important;
        gap: 12px;
    }

    .card h5 {
        font-size: 1rem;
    }

    .card p {
        font-size: 0.95rem;
    }

    .card .resposta {
        padding: 12px 14px;
    }
    @media (max-width: 476px) {
        .gap-mobile{
            gap: 0px !important;
        }
        .column-mid{
            gap: 0px !important;
        }
        .form-label.inter.font-regular.font-15.text-berge.mb-0.mt-2.text-start{
            font-size: 0.6875rem !important;
        }
        .stars svg{
            width: 18px;
            height: 18px;
        }
        .msg{
            margin-top: 20px !important;        
        }
        textarea.form-control{
            height: 160px;
        }
        textarea.form-control::placeholder, .form-check-label, .privacy-policy{
            font-size: 0.75rem !important;
        }
        .form-check-input{
            width: 12px;
            height: 12px;
            border-radius: 2px;
            margin-top: 8px;
            margin-left: -20px;
        }
        .btn.send{
            height: 30px;
            font-size: 14px !important;
            line-height: 11px;
        }
        h6.text-secondary, small.text-muted{
            font-size: 0.75rem;
        }
        .d-flex.align-items-center.gap-2.mt-2 svg{
            width: 15px;
            height: 15px;
        }
        p.mt-3{
            font-size: 0.75rem;
            margin: 0px;
        }
        .response, .small{
            font-size: 0.75rem !important;
        }
        .card .resposta strong{
            margin-bottom: 0;
        }
        small.inter.font-12.font-regular.d-block{
            font-size: 0.625rem;
        }
        .card .border-top{
            padding-top: 0px !important;
        }
        .card .d-flex.align-items-center.gap-3 img{
            width: 40px;
            height: 40px;
        }
    }
}

</style>
