import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/sign-up',
            component: () => import('../views/SignUp.vue'),
            name: 'sign-up',
            meta: {
                layout: 'auth'
            }
        },

        {
            path: '/',
            component: () => import('../views/SignIn.vue'),
            name: 'sign-in',
            meta: {
                layout: 'auth'
            }
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
                name: 'service-list',

            },


            children: [
                {
                    path: '/services-list',
                    component: () => import('../views/services/ServiceList.vue'),
                    name: 'service-list',
                    meta: {
                        layout: 'side-bar'
                    },

                },
                {
                    path: '/services-add',
                    component: () => import('../views/services/ServiceAdd.vue'),
                    name: 'service-add',
                    meta: {
                        layout: 'side-bar'
                    },

                },
                {
                    path: '/services-edit/:id',
                    component: () => import('../views/services/ServiceEdit.vue'),
                    name: 'service-edit',
                    meta: {
                        layout: 'side-bar'
                    },

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
                    path: '/client-list',
                    component: () => import('../views/clients/ClientList'),
                    name: 'client-list',
                    meta: {
                        layout: 'side-bar'
                    },
                },
                {
                    path: 'add',
                    component: () => import('../views/clients/ClientAdd'),
                    name: 'client-add',
                    meta: {
                        layout: 'side-bar'
                    },
                },
                {
                    path: 'client-edit/:id',
                    component: () => import('../views/clients/ClientEdit'),
                    name: 'client-edit',
                    meta: {
                        layout: 'side-bar'
                    },
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
                    name: 'info-list',
                    meta: {
                        layout: 'side-bar'
                    },
                },
                {
                    path: 'add',
                    component: () => import('../views/info/InfoAdd'),
                    name: 'info-add',
                    meta: {
                        layout: 'side-bar'
                    },
                },
                {
                    path: 'info-edit/:id',
                    component: () => import('../views/info/InfoEdit'),
                    name: 'info-edit',
                    meta: {
                        layout: 'side-bar'
                    },
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
                    path: 'about-list',
                    component: () => import('../views/about/AboutList'),
                    name: 'about-list',
                    meta: {
                        layout: 'side-bar'
                    },
                },
                {
                    path: 'add',
                    component: () => import('../views/about/AboutAdd'),
                    name: 'about-add',
                    meta: {
                        layout: 'side-bar'
                    },
                },
                {
                    path: 'about-edit/:id',
                    component: () => import('../views/about/AboutEdit'),
                    name: 'about-edit',
                    meta: {
                        layout: 'side-bar'
                    },
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
                    path: 'project-list',
                    component: () => import('../views/projects/ProjectList'),
                    name: 'project-list',
                    meta: {
                        layout: 'side-bar'
                    },
                },
                {
                    path: 'project-add',
                    component: () => import('../views/projects/ProjectAdd'),
                    name: 'project-add',
                    meta: {
                        layout: 'side-bar'
                    },
                },
                {
                    path: 'project-edit/:id',
                    component: () => import('../views/projects/ProjectEdit'),
                    name: 'project-edit',
                    meta: {
                        layout: 'side-bar'
                    },
                }
            ]
        }
    ]
})
