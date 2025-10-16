<template>
    <div class="container-fluid bg-light min-vh-100 py-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-4">
        <div class="card shadow-lg">
          <div class="card-body text-center p-5">
            <div class="mb-4">
              <span class="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center" 
                    style="width: 80px; height: 80px; font-size: 2rem;">
                ✓
              </span>
            </div>
            <h1 class="card-title h3 fw-bold text-dark mb-3">Tudo Pronto!</h1>
            <p class="card-text text-muted mb-4">
              Vue + Vite + Bootstrap 5 funcionando perfeitamente!
            </p>
            
            <div class="d-grid gap-2">
              <button class="btn btn-primary btn-lg">
                Botão Primário
              </button>
              <button class="btn btn-outline-secondary">
                Botão Secundário
              </button>
            </div>

            <div class="mt-4">
              <div class="alert alert-success mb-3">
                <strong>Sucesso!</strong> Bootstrap está funcionando.
              </div>
              
              <div class="row text-start mt-3">
                <div class="col-6">
                  <span class="badge bg-primary">Vue 3</span>
                </div>
                <div class="col-6 text-end">
                  <span class="badge bg-success">Bootstrap 5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>