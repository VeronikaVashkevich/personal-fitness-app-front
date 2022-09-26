<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Регистрация</div>

                    <div class="card-body">
                        <form>
                            <div class="row mb-3">
                                <label for="first_name" class="col-md-4 col-form-label text-md-end">Имя</label>
                                <div class="col-md-6">
                                    <input id="first_name" type="text" class="form-control" name="first_name" v-model="profile.first_name">
                                    <span class="invalid-feedback firstName-error" role="alert"></span>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="last_name" class="col-md-4 col-form-label text-md-end">Фамилия</label>
                                <div class="col-md-6">
                                    <input id="last_name" type="text" class="form-control" name="last_name" v-model="profile.last_name">
                                    <span class="invalid-feedback lastName-error" role="alert"></span>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="email" class="col-md-4 col-form-label text-md-end">Электронная почта</label>
                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" name="email" v-model="profile.email">
                                    <span class="invalid-feedback email-error" role="alert"></span>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="password" class="col-md-4 col-form-label text-md-end">Пароль</label>
                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" name="password" v-model="profile.password">
                                    <span class="invalid-feedback password-error" role="alert"></span>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="dateBirth" class="col-md-4 col-form-label text-md-end">Дата рождения</label>
                                <div class="col-md-6">
                                    <input id="dateBirth" type="date" class="form-control" name="date_birth" v-model="profile.date_birth">
                                    <span class="invalid-feedback dateBirth-error" role="alert"></span>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="height" class="col-md-4 col-form-label text-md-end">Рост</label>
                                <div class="col-md-6">
                                    <input id="height" type="number" class="form-control" name="height" v-model="profile.height">
                                    <span class="invalid-feedback height-error" role="alert"></span>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="weight" class="col-md-4 col-form-label text-md-end">Вес</label>
                                <div class="col-md-6">
                                    <input id="weight" type="number" class="form-control" name="weight" step="0.1" v-model="profile.weight">
                                    <span class="invalid-feedback weight-error" role="alert"></span>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="sex" class="col-md-4 col-form-label text-md-end">Пол</label>
                                <div class="col-md-6">
                                    <select id="sex" class="form-control" name="sex" v-model="profile.sex">
                                        <option value="male">Мужчина</option>
                                        <option value="female">Женщина</option>
                                    </select>
                                    <span class="invalid-feedback sex-error" role="alert"></span>
                                </div>
                            </div>

                            <div class="row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary" @click="register">
                                        Регистрация
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "LoginView",
        data() {
            return {
                profile: {
                    email: this.email,
                    password: this.password,
                    first_name: this.first_name,
                    last_name: this.last_name,
                    date_birth: this.date_birth,
                    weight: this.weight,
                    height: this.height,
                    sex: this.sex,
                }
            }
        },
        methods: {
            async register(e) {
                e.preventDefault();
                document.querySelectorAll('.invalid-feedback').forEach((el) => {
                    el.style.display = 'none';
                    el.innerHTML = '';
                });

                try {
                    const res = await axios.post('http://127.0.0.1:8000/api/register', this.profile);

                    localStorage.user_token = res.data.data.user_token;

                    this.$router.push('/');
                    location.reload();
                } catch (error) {
                    if (error.response) {
                        if (error.response.status === 401) {
                            document.querySelector('.common-error').innerHTML = 'Попытка регистрации не удалась';
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

                            if (errorResponseData.errors.first_name) {
                                document.querySelector('.firstName-error').innerHTML = errorResponseData.errors.first_name[0];
                                document.querySelector('.firstName-error').style.display = 'block';
                            }

                            if (errorResponseData.errors.last_name) {
                                document.querySelector('.lastName-error').innerHTML = errorResponseData.errors.last_name[0];
                                document.querySelector('.lastName-error').style.display = 'block';
                            }

                            if (errorResponseData.errors.date_birth) {
                                document.querySelector('.dateBirth-error').innerHTML = errorResponseData.errors.date_birth[0];
                                document.querySelector('.dateBirth-error').style.display = 'block';
                            }

                            if (errorResponseData.errors.height) {
                                document.querySelector('.height-error').innerHTML = errorResponseData.errors.height[0];
                                document.querySelector('.height-error').style.display = 'block';
                            }

                            if (errorResponseData.errors.weight) {
                                document.querySelector('.weight-error').innerHTML = errorResponseData.errors.weight[0];
                                document.querySelector('.weight-error').style.display = 'block';
                            }

                            if (errorResponseData.errors.sex) {
                                document.querySelector('.sex-error').innerHTML = errorResponseData.errors.sex[0];
                                document.querySelector('.sex-error').style.display = 'block';
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