import Vue from 'vue'
import router from './router/index'
import App from './App'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
