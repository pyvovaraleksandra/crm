<template>
    <ul class="Sidebar brown" :class="{open: isOpen}">
        <router-link
            v-for="link in links"
            tag="li"
            active-class="active"
            :key="link.url"
            :to="link.url"
            :exact="link.exact"
            class="Sidebar__link"
        >
            <a href="#" class="waves-effect waves-brown pointer Sidebar__item">{{ link.title }}</a>
        </router-link>
    </ul>
</template>

<script>
export default {
    data: () => ({
        links: [
            {
                title: "Счет",
                url: "/",
                exact: true,
            },
            {
                title: "История",
                url: "/history",
            },
            {
                title: "Планирование",
                url: "/planning",
            },
            {
                title: "Новая запись",
                url: "/new-record",
            },
            {
                title: "Категории",
                url: "/categories",
            }
        ]
    }),
    props: [
        "isOpen"
    ]
}
</script>

<style lang="scss" scoped>
    .Sidebar {
        position: fixed;
        color: #fff;
        top: 49px;
        bottom: 0;
        width: 13%;
        min-height: 100vh;
        height: 100%;
        padding-top: 2rem;
        padding-right: 40px;
        z-index: 2;
        box-shadow: 2px 2px 2px 0 #c7c4c4;
        transform: translateX(-100%);
        transition: .4s;

        &__item {
            color: #fff;
            padding: 10px 15px 12px;
            display: block;
        }

        &__link {
            transition: .3s;

            &:hover {
                background: #6d4c41;
            }

            &.active {
                border-radius: 0 5px 5px 0;
                background: #5d4037;
            }
        }

        &.open {
            transform: translateX(0);
        }
    }
</style>