import { createRouter, createWebHashHistory } from 'vue-router'
import toyApp from '../views/toy-app.vue'
import toyDetails from '../views/toy-details.vue'
import toyEdit from '../views/toy-edit.vue'
import toyChart from '../views/toy-chart.vue'
import About from '../views/about.vue'

const router = createRouter({
    history: createWebHashHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'App',
            component: toyApp
        },
        {
            path: '/details/:id',
            name: 'toy-details',
            component: toyDetails,
        },
        {
            path: '/edit/:id?',
            name: 'toy-edit',
            component: toyEdit,
        },
        {
            path: '/toy-chart',
            name: 'toy-chart',
            component: toyChart,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
    ]
})

export default router