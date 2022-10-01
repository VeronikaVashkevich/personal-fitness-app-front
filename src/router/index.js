import {createRouter, createWebHistory} from 'vue-router'
import IndexView from "@/views/IndexView";
import LoginView from "@/views/LoginView";
import RegisterView from "@/views/RegisterView";
import UserWorkoutsView from "@/views/UserWorkoutsView";

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
    },
    {
        path: '/my-workouts',
        name: 'MyWorkouts',
        component: UserWorkoutsView

    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach(async (to) => {
    if (
        !localStorage.getItem('user_token') && to.name !== 'Login' && to.name !== 'Register'
    ) {
        return { name: 'Login' }
    }
});

export default router
