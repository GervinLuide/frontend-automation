import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(VueRouter)

// Seadista Axios baas-URL serveripoolse rakenduse jaoks
axios.defaults.baseURL = 'http://localhost:5174'

import router from '../router'

new Vue({
    render: h => h(App),
    router // Lisa router
}).$mount('#app')

