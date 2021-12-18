import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'animate.css';
import VueHtmlToPaper from 'vue-html-to-paper';

import Carousel3d from 'vue-carousel-3d';

import VueTyper from 'vue-typer'

Vue.use(VueTyper)

Vue.use(Carousel3d);

Vue.use(VueHtmlToPaper);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')