<template>
    <nav class="Header navbar brown">
        <div class="Header__left" @click="$emit('click')">
            <a href="#"> <i class="material-icons">dehaze</i> </a>
            <span class="Header__left-time">{{ date | date("datetime") }}</span>
        </div>

        <ul class="right hide-on-small-and-down">
            <li>
                <a
                    class="dropdown-trigger white-text"
                    href="#"
                    data-target="dropdown"
                    ref="dropdown"
                >
                    USER NAME
                    <i class="material-icons right">arrow_drop_down</i>
                </a>

                <ul id="dropdown" class="Header__dropdown dropdown-content">
                    <li>
                        <router-link to="/profile" tag="div" class="Header__dropdown-item">
                            <i class="material-icons Header__dropdown-itemIcon">account_circle</i>Профиль
                        </router-link>
                    </li>
                    <li>
                        <div class="Header__dropdown-item" @click="logout">
                            <i class="material-icons Header__dropdown-itemIcon">assignment_return</i>Выйти
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script>
import fecha from "fecha";

export default {
    data: () => ({
        date: new Date(),
        interval: null,
        dropdown: null,
    }),
    computed: {
        formattedDate() {
            return fecha.format(this.date, 'MM.DD.YYYY HH:mm:ss');
        }
    },
    methods: {
        logout() {
            this.$router.push("/login?message=logout");
        }
    },
    mounted() {
        this.dropdown = M.Dropdown.init(this.$refs.dropdown, {});

        this.interval = setInterval(() => {
            this.date = new Date();
        }, 1000)
    },
    beforeDestroy() {
        clearInterval(this.interval);
        if (this.dropdown && this.dropdown.destroy) {
            this.dropdown.destroy();
        }
    },
}
</script>

<style lang="scss" scoped>
.Header {
    display: flex;
    position: fixed;
    justify-content: space-between;
    padding: 0 15px;
    z-index: 1000;

    &__left {
        display: flex;
        align-items: center;
        cursor: pointer;

        &-time {
            margin-left: 1rem;
        }
    }
    
    &__dropdown {
        &-item {
            display: flex;
            align-items: center;
            border-bottom: 1px solid #5d473f;
            color: #4e342e;
            padding: 0 10px;
            transition: .3s;

            &Icon {
                margin-right: 10px;
            }

            &:hover {
                background-color: #795548;
                color: #fff;
            }
        }
    }
}
</style>