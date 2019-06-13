<template>
    <nav class="Header navbar blue-grey">
        <div class="Header__left" @click="$emit('click')">
            <a href="#"> <i class="material-icons">dehaze</i> </a>
            <span class="Header__left-time">{{ date | date("datetime") }}</span>
        </div>

        <ul class="right hide-on-small-and-down">
            <li>
                <a
                    class="dropdown-trigger Header__dropdown-button"
                    :class="{'opened': dropdownOpened}"
                    href="#"
                    data-target="dropdown"
                    ref="dropdown"
                >
                    USER NAME
                    <i class="Header__dropdown-buttonIcon material-icons right">arrow_drop_down</i>
                </a>

                <ul id="dropdown" class="Header__dropdown dropdown-content">
                    <li class="Header__dropdown-itemWrapper">
                        <router-link to="/profile" tag="div" class="Header__dropdown-item">
                            <i class="material-icons Header__dropdown-itemIcon">account_circle</i>Профиль
                        </router-link>
                    </li>
                    <li class="Header__dropdown-itemWrapper">
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
export default {
    data: () => ({
        date: new Date(),
        interval: null,
        dropdown: null,
        dropdownOpened: false,
    }),
    methods: {
        logout() {
            this.$router.push("/login?message=logout");
        }
    },
    mounted() {
        this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
            coverTrigger: false,
            onOpenStart: () => { this.dropdownOpened = this.dropdown.isOpen },
            onCloseStart: () => { this.dropdownOpened = this.dropdown.isOpen }
        });

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
        $root: &;

        &-button {
            display: flex;
            align-items: center;
            color: #fff;

            &Icon {
                transition: .3s;
            }

            &:hover {
                background: #5b717b;
            }

            &.opened {
                #{$root}-buttonIcon {
                    transform: rotate(180deg);
                }
            }
        }

        &-item {
            display: flex;
            align-items: center;
            border-bottom: 1px solid #5d473f;
            color: #455a64;
            padding: 0 10px;
            transition: .3s;

            &Wrapper {
                &:hover {
                    background: #607d8b;
                }
            }

            &:hover {
                color: #fff;
            }

            &Icon {
                margin-right: 10px;
            }
        }
    }
}
</style>