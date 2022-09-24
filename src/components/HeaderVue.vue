<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="../assets/img/fav.png" alt="Logo" width="30" height="30"
                         class="d-inline-block align-text-top">
                    FitnessApp
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" :to="'/'">Главная</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" :to="'/'">Мои тренировки
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" :to="'/login'">Авторизация
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" :to="'/register'">Регистрация
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "HeaderVue"
    }
</script>

<style scoped>

</style>