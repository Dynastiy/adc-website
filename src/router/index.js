import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/index.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Index-home',
        component: Home,
        children: [{
                path: '/',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/home/homepage/index.vue')
            },
            {
                path: '/donate',
                name: 'Donate',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/home/donate/index.vue')
            },
            {
                path: '/news',
                name: 'News',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/home/news/index.vue')
            },
            {
                path: '/join_adc',
                name: 'join',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/home/join_adc/index.vue')
            },
            {
                path: '/registration_form',
                name: 'registration-under30',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/home/join_adc/under30_form.vue')
            },
            {
                path: '/reg_form',
                name: 'registration',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/home/join_adc/registration_form.vue')
            },

            {
                path: '/redirect',
                name: 'redirection',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/home/join_adc/redirect.vue')
            },
            {
                path: '/testimonials',
                name: 'testimonials',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/home/testimonials/index.vue')
            },
            {
                path: '/testimonials/ex_presidents_advice',
                name: 'obasanjo',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/home/testimonials/obasanjos_message.vue')
            },
            {
                path: '/aims_of_the_party',
                name: 'Aims',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/home/where_we_stand/aims/index.vue')
            },
            {
                path: '/our_manifesto',
                name: 'Our manifesto',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/home/where_we_stand/our_manifesto/index.vue')
            },
            {
                path: '/our_priorities',
                name: 'Our Priorities',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/home/where_we_stand/our_priorities/index.vue')
            },
            {
                path: '/adc_objectives',
                name: 'ADC Objectives',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/home/where_we_stand/adc_objectives/index.vue')
            },
            {
                path: '/cardinal_commitments',
                name: 'Cardinal Commitments',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/home/where_we_stand/cardinal_commitments/index.vue')
            },
            {
                path: '/volunteer',
                name: 'volunteer',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/home/volunteer/index.vue')
            },
            {
                path: '/resources',
                name: 'resources',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/home/resources/index.vue')
            },
            {
                path: '/resources/our_activities',
                name: 'Our activities',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/home/resources/activities.vue')
            },
            {
                path: '/resources/brand_assets',
                name: 'Brand Assets',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/home/resources/brand_assets.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../pages/user/auth/login.vue')
    },
    {
        path: '/reset_password',
        name: 'Reset Password',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../pages/user/auth/reset_password.vue')
    },

    {
        path: '/dashboard',
        name: 'Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../pages/user/dashboard/index.vue'),
        children: [{
                path: '/dashboard/home',
                name: 'Home',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/user/dashboard/home.vue'),
            },
            {
                path: '/dashboard/forum',
                name: 'Forum',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/user/dashboard/forum.vue'),
            },
        ]
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../pages/about/index.vue'),
        children: [{
                path: '/about',
                name: 'About Home',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/about/components/home.vue'),
            }, {
                path: '/about/chairmans_message',
                name: 'Chairman',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/about/components/chairmans_message.vue'),
            },
            {
                path: '/about/contact_us',
                name: 'Contact Us',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/about/components/contact_us.vue'),
            },
            {
                path: '/about/our_candidates',
                name: 'Candidates',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/about/components/our_candidates.vue'),
            },
            {
                path: '/about/party_structure',
                name: 'Party Structure',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/about/components/party_structure.vue'),
            },
            {
                path: '/about/state_chapters',
                name: 'State Chapters',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/about/components/state_chapters.vue'),
            },
            {
                path: '/about/state_chapters',
                name: 'State Chapters',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../pages/about/components/state_chapters.vue'),
            },
        ]
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    routes
})

export default router