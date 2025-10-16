import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import App from './App.vue'
import router from './router'

document.body.classList.add('custom-gradient')

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
