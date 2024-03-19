import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/Login',
        component: () => import('@/view/Login.vue')
    },
    {
        path: '/Register',
        component: () => import('@/view/Register.vue')
    },
    {
        path: '/NoteClass',
        component: () => import('@/view/NoteClass.vue')
    }



]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router