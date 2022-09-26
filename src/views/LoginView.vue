<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Авторизация</div>

                    <div class="card-body">
                        <form>
                            <div class="row mb-3">
                                <label for="email" class="col-md-4 col-form-label text-md-end">Электронная почта</label>
                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" name="email"
                                           v-model="profile.email">
                                    <span class="invalid-feedback email-error" role="alert"></span>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="password" class="col-md-4 col-form-label text-md-end">Пароль</label>
                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" name="password"
                                           v-model="profile.password">
                                    <span class="invalid-feedback password-error" role="alert"></span>
                                </div>
                            </div>

                            <div class="row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary" @click="login">
                                        Войти
                                    </button>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <span class="invalid-feedback common-error" role="alert"></span>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "LoginView",
        data() {
            return {
                profile: {
                    email: this.email,
                    password: this.password
                }
            }
        },
        methods: {
            async login(e) {
                e.preventDefault();
                document.querySelectorAll('.invalid-feedback').forEach((el) => {
                    el.style.display = 'none';
                    el.innerHTML = '';
                });

                try {
                    const res = await axios.post('http://127.0.0.1:8000/api/login', this.profile);

                    localStorage.user_token = res.data.data.user_token;

                    this.$router.push('/');
                } catch (error) {
                    if (error.response) {
                        if (error.response.status === 401) {
                            document.querySelector('.common-error').innerHTML = 'Попытка авторизации не удалась';
                            document.querySelector('.common-error').style.display = 'block';
                        } else if (error.response.status === 422) {
                            let errorResponseData = error.response.data;

                            if (errorResponseData.errors.email) {
                                document.querySelector('.email-error').innerHTML = errorResponseData.errors.email[0];
                                document.querySelector('.email-error').style.display = 'block';
                            }

                            if (errorResponseData.errors.password) {
                                document.querySelector('.password-error').innerHTML = errorResponseData.errors.password[0];
                                document.querySelector('.password-error').style.display = 'block';
                            }
                        }
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>