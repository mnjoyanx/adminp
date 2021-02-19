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
            path: '/',
            component: () => import('../views/SignIn.vue'),
            name: 'sign-in'
        },
        {
            path: '/admin-panel',
            component: () => import('../views/AdminPanel'),
            name: 'admin-panel'
        },
        {
            path: '/services',
            component: () => import('../views/services/Index.vue'),
            redirect: {
                path: '/services/list'
            },
            children: [
                {
                    path: 'list',
                    component: () => import('../views/services/ServiceList.vue'),
                },
                {
                    path: 'add',
                    component: () => import('../views/services/ServiceAdd.vue'),
                }
            ]
        },
        {
            path: '/clients',
            component: () => import('../views/clients/Index.vue'),
            name: 'clients',
            redirect: {
                name: 'client-list'
            },
            children: [
                {
                    path: 'list',
                    component: () => import('../views/clients/ClientList'),
                    name: 'client-list'
                },
                {
                    path: 'add',
                    component: () => import('../views/clients/ClientAdd'),
                    name: 'client-add'
                }
            ]
        },
        {
            path: '/info',
            component: () => import('../views/info/Index.vue'),
            name: 'info',
            redirect: {
                name: 'info-list'
            },
            children: [
                {
                    path: 'list',
                    component: () => import('../views/info/InfoList'),
                    name: 'info-list'
                },
                {
                    path: 'add',
                    component: () => import('../views/info/InfoAdd'),
                    name: 'info-add'
                }
            ]
        },
        {
            path: '/about',
            component: () => import('../views/about/Index.vue'),
            name: 'about',
            redirect: {
                name: 'about-list'
            },
            children: [
                {
                    path: 'list',
                    component: () => import('../views/about/AboutList'),
                    name: 'about-list'
                },
                {
                    path: 'add',
                    component: () => import('../views/about/AboutAdd'),
                    name: 'about-add'
                }
            ]
        },
        {
            path: '/projects',
            component: () => import('../views/projects/Index.vue'),
            name: 'projects',
            redirect: {
                name: 'project-list'
            },
            children: [
                {
                    path: 'list',
                    component: () => import('../views/projects/ProjectList'),
                    name: 'project-list'
                },
                {
                    path: 'add',
                    component: () => import('../views/projects/ProjectAdd'),
                    name: 'project-add'
                }
            ]
        }
    ]
})
