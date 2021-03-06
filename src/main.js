import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/styles.css'
import './sass/styles.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App);
app.use(VueGoogleMaps, {
    load: {
        key: '',
        language: 'de',
    }
})

app.use(router)
app.use(store)
app.use(ElementPlus)

app.mount('#app')