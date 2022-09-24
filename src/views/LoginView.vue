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

                            <div class="row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        Войти
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