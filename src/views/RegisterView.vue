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
                                    <input id="first_name" type="text" class="form-control" name="first_name">
                                    <span class="invalid-feedback" role="alert">
                                        <strong>Сообщение об ошибке</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="last_name" class="col-md-4 col-form-label text-md-end">Фамилия</label>
                                <div class="col-md-6">
                                    <input id="last_name" type="text" class="form-control" name="last_name">
                                    <span class="invalid-feedback" role="alert">
                                        <strong>Сообщение об ошибке</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="email" class="col-md-4 col-form-label text-md-end">Электронная почта</label>
                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" name="email">
                                    <span class="invalid-feedback" role="alert">
                                        <strong>Сообщение об ошибке</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="password" class="col-md-4 col-form-label text-md-end">Пароль</label>
                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" name="password" >
                                    <span class="invalid-feedback" role="alert">
                                        <strong>Сообщение об ошибке</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="dateBirth" class="col-md-4 col-form-label text-md-end">Дата рождения</label>
                                <div class="col-md-6">
                                    <input id="dateBirth" type="date" class="form-control" name="date_birth">
                                    <span class="invalid-feedback" role="alert">
                                        <strong>Сообщение об ошибке</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="height" class="col-md-4 col-form-label text-md-end">Рост</label>
                                <div class="col-md-6">
                                    <input id="height" type="number" class="form-control" name="height" >
                                    <span class="invalid-feedback" role="alert">
                                        <strong>Сообщение об ошибке</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="weight" class="col-md-4 col-form-label text-md-end">Вес</label>
                                <div class="col-md-6">
                                    <input id="weight" type="number" class="form-control" name="weight" step="0.1">
                                    <span class="invalid-feedback" role="alert">
                                        <strong>Сообщение об ошибке</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="sex" class="col-md-4 col-form-label text-md-end">Пол</label>
                                <div class="col-md-6">
                                    <select id="sex" class="form-control" name="sex">
                                        <option value="male">Мужчина</option>
                                        <option value="female">Женщина</option>
                                    </select>
                                    <span class="invalid-feedback" role="alert">
                                        <strong>Сообщение об ошибке</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
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
    export default {
        name: "LoginView"
    }
</script>

<style scoped>

</style>