import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'animate.css';
import VueHtmlToPaper from 'vue-html-to-paper';
import {states }from './assets/js/states'

import VueTelInput from 'vue-tel-input'

Vue.use(VueTelInput)

import Carousel3d from 'vue-carousel-3d';

import VueRssFeed from "vue-rss-feed";

import VueTyper from 'vue-typer'

Vue.use(VueTyper)

Vue.use(Carousel3d);

Vue.use(VueHtmlToPaper);

Vue.use(VueRssFeed)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    states,
    render: h => h(App)
}).$mount('#app')