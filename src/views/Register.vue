<template>
    <form class="Register card auth-card">
        <div class="Register__body">
            <span class="Register__title">Домашняя бухгалтерия</span>
            <div class="input-field">
                <input id="email" type="text">
                <label for="email">Email</label>
            </div>
            <div class="input-field">
                <input id="password" type="password" class="validate">
                <label for="password">Пароль</label>
            </div>
            <div class="input-field">
                <input id="name" type="text" class="validate">
                <label for="name">Имя</label>
            </div>
            <div class="Register__agreement">
                <label class="brown-text">
                    <input type="checkbox" />
                    <span class="brown-text Register__agreement-tick">С правилами согласен</span>
                </label>
            </div>
            <button class="btn brown waves-effect waves-light auth-submit" type="submit">
                Зарегистрироваться
                <i class="material-icons right">send</i>
            </button>
        </div>
        <div class="card-action center">
            Уже есть аккаунт?
            <a href="/" class="Register__link brown-text">Войти!</a>
        </div>
    </form>
</template>

<style lang="scss" scoped>
    .Register {
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

        &__agreement {
            text-align: center;
            margin-bottom: 1rem;

            &-tick::before {
                border-right: 2px solid #795548 !important;
                border-bottom: 2px solid #795548 !important;
            }
        }

        &__link {
            font-weight: 500;
        }
    }
</style>