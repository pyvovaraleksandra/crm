<template>
    <form class="Login card auth-card" @submit.prevent="submitHandler">
        <div class="Login__body">
            <div class="Login__title">Домашняя бухгалтерия</div>
            <div class="input-field">
                <input
                    id="email"
                    type="text"
                    v-model.trim="email"
                    class="Login__input"
                >
                <label for="email">Email</label>
            </div>
            <div class="input-field">
                <input
                    id="password"
                    type="password"
                    v-model.trim="password"
                    class="Login__input"
                >
                <label for="password">Пароль</label>
            </div>
            <button class="btn waves-effect waves-light auth-submit" type="submit">
                Войти
                <i class="material-icons right">send</i>
            </button>
        </div>
        <div class="card-action center">
            Нет аккаунта?
            <router-link to="/register" class="Login__link">Зарегистрироваться</router-link>
        </div>
    </form>
</template>

<script>
import messages from '@/utils/messages.js'

export default {
    name: "Login",
    data: () => ({
        email: "",
        password: "",
    }),
    methods: {
        async submitHandler() {
            // if (this.$v.$invalid) {
            //     this.$v.$touch();
            //     return;
            // }
            //
            const formData = {
                email: this.email,
                password: this.password,
            };

            try {
                await this.$store.dispatch("login", formData);
                this.$router.push("/");
            } catch(e) {}
        }
    },
    mounted() {
        const queryMessage = this.$route.query.message;
        const message = messages[queryMessage];

        if (message) {
            this.$message(message)
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
        white-space: nowrap;
        color: #ce0000;
    }
}
</style>