<template>
    <div class="Dropdown">
        <a
            class="dropdown-trigger Dropdown__button"
            :class="{'opened': dropdownOpened}"
            href="#"
            data-target="dropdown"
            ref="dropdown"
        >
            USER NAME
            <i class="Dropdown__button-icon material-icons right">arrow_drop_down</i>
        </a>

        <ul id="dropdown" class="Dropdown__list dropdown-content">
            <li class="Dropdown__itemWrapper" v-for="item in options">
                <router-link :to="item.url" tag="div" class="Dropdown__item">
                    <i class="material-icons Dropdown__item-icon">{{ item.icon }}</i>{{ item.title }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: () => ({
        dropdown: null,
        dropdownOpened: false,
    }),
    props: {
        options: {
            type: Array,
            required: true
        },
    },
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
    },
    beforeDestroy() {
        if (this.dropdown && this.dropdown.destroy) {
            this.dropdown.destroy();
        }
    }
}
</script>

<style lang="scss" scoped>
.Dropdown {
    $root: &;

    &__button {
        display: flex;
        align-items: center;
        transition: .3s;
        padding: 0 10px 0 13px;
        color: #fff;

        &-icon {
            transition: .3s;
        }

        &:hover {
            background: #5b717b;
        }

        &.opened {
            #{$root}__button-icon {
                transform: rotate(180deg);
            }
        }
    }

    &__item {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #607d8b;
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

        &-icon {
            margin-right: 10px;
        }
    }
}
</style>