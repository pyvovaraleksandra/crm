<template>
    <form class="Login card auth-card" @submit.prevent="submitHadler">
        <div class="Login__body">
            <div class="Login__title">Домашняя бухгалтерия</div>
            <div class="input-field">
                <input
                    id="email"
                    type="text"
                    v-model.trim="email"
                    class="Login__input"
                    :class="{'invalid': notValidEmail}"
                >
                <label for="email">Email</label>
                <small class="Login__error" >
                    <template v-if="$v.email.$dirty && !$v.email.required">Заполните поле Email</template>
                    <template v-else-if="$v.email.$dirty && !$v.email.email">Введите корректный E-mail</template>
                </small>
            </div>
            <div class="input-field">
                <input
                    id="password"
                    type="password"
                    v-model.trim="password"
                    class="Login__input"
                    :class="{'invalid': notValidPassword}"
                >
                <label for="password">Пароль</label>
                <small class="Login__error" v-if="$v.password.$dirty && !$v.password.required">
                    Введите пароль
                </small>
                <small class="Login__error" v-else-if="$v.password.$dirty && !$v.password.minLength">
                    Пароль должен быть больше {{ $v.password.$params.minLength.min }} символов
                </small>
            </div>
            <button class="btn brown waves-effect waves-light auth-submit" type="submit">
                Войти
                <i class="material-icons right">send</i>
            </button>
        </div>
        <div class="card-action center">
            Нет аккаунта?
            <router-link to="/register" class="Login__link brown-text">Зарегистрироваться</router-link>
        </div>
    </form>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators"
export default {
    name: "Login",
    data: () => ({
        email: "",
        password: "",
    }),
    computed: {
        notValidEmail() {
            return this.$v.email.$dirty && (!this.$v.email.email || !this.$v.email.required)
        },
        notValidPassword() {
            return this.$v.password.$dirty && (!this.$v.password.required || !this.$v.password.minLength)
        }
    },
    validations: {
        email: {email, required},
        password: {required, minLength: minLength(6)},
    },
    methods: {
        submitHadler() {
            if (this.$v.$invalid) {
                this.$v.$touch();
                return;
            }

            const FormData = {
                email: this.email,
                password: this.password,
            };

            this.$router.push("/");
        }
    }
}
</script>

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

    &__link {
        font-weight: 500;
    }

    &__error {
        position: absolute;
        left: 50%;
        bottom: -10px;
        transform: translateX(-50%);
        color: #ce0000;
    }
}
</style>