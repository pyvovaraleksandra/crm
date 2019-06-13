<template>
    <form class="Register card auth-card" @submit.prevent="submitHandler">
        <div class="Register__body">
            <span class="Register__title">Домашняя бухгалтерия</span>
            <div class="input-field">
                <input
                    id="email"
                    type="text"
                    v-model.trim="email"
                    :class="{'invalid': notValidEmail}"
                >
                <label for="email">Email</label>
                <small class="Register__error" >
                    <template v-if="$v.email.$dirty && !$v.email.required">Заполните поле Email</template>
                    <template v-else-if="$v.email.$dirty && !$v.email.email">Введите корректный E-mail</template>
                </small>
            </div>
            <div class="input-field">
                <input
                    id="password"
                    type="password"
                    v-model.trim="password"
                    :class="{'invalid': notValidPassword}"
                >
                <label for="password">Пароль</label>
                <small class="Register__error">
                    <template v-if="$v.password.$dirty && !$v.password.required">Введите пароль</template>
                    <template v-else-if="$v.password.$dirty && !$v.password.minLength"> Пароль должен быть больше {{ $v.password.$params.minLength.min }} символов</template>
                </small>
            </div>

            <div class="input-field">
                <input
                    id="name"
                    type="text"
                    v-model.trim="password"
                    :class="{'invalid': notValidName}"
                >
                <label for="name">Имя</label>
                <small class="Register__error">
                    <template v-if="$v.name.$dirty && !$v.name.required">Введите имя</template>
                </small>
            </div>


            <div class="Register__agreement">
                <label class="">
                    <input type="checkbox" />
                    <span class="Register__agreement-tick">С правилами согласен</span>
                </label>
            </div>
            <button class="btn waves-effect waves-light auth-submit" type="submit">
                Зарегистрироваться
                <i class="material-icons right">send</i>
            </button>
        </div>
        <div class="card-action center">
            Уже есть аккаунт?
            <router-link to="/login" class="Register__link">Войти!</router-link>
        </div>
    </form>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators"

export default {
    name: "Register",
    data: () => ({
        email: "",
        password: "",
        name: "",
    }),
    computed: {
        notValidEmail() {
            return this.$v.email.$dirty && (!this.$v.email.email || !this.$v.email.required)
        },
        notValidPassword() {
            return this.$v.password.$dirty && (!this.$v.password.required || !this.$v.password.minLength)
        },
        notValidName() {
            return this.$v.name.$dirty && (!this.$v.name.required)
        }
    },
    validations: {
        email: { email, required },
        password: { required, minLength: minLength(6) },
        name: { required },
    },
    methods: {
        submitHandler() {
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
    .Register {
        padding: 10px 100px;

        &__body {
            padding: 16px 0;
            text-align: center;
        }

        &__title {
            font-size: 20px;
            font-weight: 400;
            text-transform: uppercase;
            margin-bottom: 2rem;
            text-align: center;
            text-shadow: 0 1px 10px #dcdcdc;
        }

        &__agreement {
            text-align: center;
            margin-bottom: 1rem;

            &-tick {
                color: #006064;
            }
        }

        &__link {
            font-weight: 500;
        }

        &__error {
            position: absolute;
            left: 50%;
            bottom: -10px;
            transform: translateX(-50%);
            white-space: nowrap;
            color: #ce0000;
        }
    }
</style>