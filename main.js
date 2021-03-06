import Vue from 'vue'
import App from './App'

import basics from './pages/basics/home.vue'
Vue.component('basics',basics)

import components from './pages/component/home.vue'
Vue.component('components',components)

import plugin from './pages/plugin/home.vue'
Vue.component('plugin',plugin)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

import home from './pages/home/home'
Vue.component('home', home)

import perinfo from './pages/perinfo/perinfo'
Vue.component('perinfo', perinfo)

import { Http } from './utils/request.js'
Vue.prototype.httpApi = Http

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



