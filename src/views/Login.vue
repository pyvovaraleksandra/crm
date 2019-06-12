<template>
    <form class="Login card auth-card">
        <div class="Login__body">
            <div class="Login__title">Домашняя бухгалтерия</div>
            <div class="input-field">
                <input id="email" type="text" class="validate">
                <label for="email">Email</label>
            </div>
            <div class="input-field">
                <input id="password" type="password" class="validate">
                <label for="password">Пароль</label>
            </div>
            <button class="btn waves-effect waves-light auth-submit" type="submit">
                Войти
                <i class="material-icons right">send</i>
            </button>
        </div>
        <div class="card-action center-align">
            <div>
                Нет аккаунта?
                <a href="/">Зарегистрироваться</a>
            </div>
        </div>
    </form>
</template>

<style lang="scss" scoped>
    .Login {
        padding: 10px 100px;

        &__body {
            padding: 16px 0;
            text-align: center;
        }

        &__title {
            font-size: 20px;
            font-weight: 400;
            //color: $grey;
            text-transform: uppercase;
            margin-bottom: 2rem;
            text-align: center;
            text-shadow: 0 1px 10px #dcdcdc;
        }
    }
</style>