import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/auth',
    },
    {
        path: '/auth',
        name: 'Auth',
        component: () => import('@/views/Auth.vue'),
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
    },

];

const router = new VueRouter({
    routes,
});

export default router;
