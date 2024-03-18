import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/Login',
        component: () => import('@/view/Login.vue')
    }


]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router