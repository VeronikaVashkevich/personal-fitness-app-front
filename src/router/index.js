import {createRouter, createWebHistory} from 'vue-router'
import IndexView from "@/views/IndexView";
import LoginView from "@/views/LoginView";
import RegisterView from "@/views/RegisterView";

const routes = [
    {
      path: '/',
      name: 'Index',
      component: IndexView
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterView
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router
