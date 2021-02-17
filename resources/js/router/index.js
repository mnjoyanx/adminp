import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/sign-up',
            component: () => import('../views/SignUp.vue'),
            name: 'sign-up'
        },

        {
            path: '/sign-in',
            component: () => import('../views/SignIn.vue'),
            name: 'sign-in'
        },
    ]
})
