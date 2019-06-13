<template>
    <nav class="Header navbar blue-grey">
        <div class="Header__left" @click="$emit('click')">
            <a href="#"> <i class="material-icons">dehaze</i> </a>
            <span class="Header__left-time">{{ date | date("datetime") }}</span>
        </div>

        <div class="Header__right">
            <Dropdown :options="dropdownOptions"/>
        </div>
    </nav>
</template>

<script>
import Dropdown from "@/components/Dropdown";
export default {
    components: {
        Dropdown
    },
    data: () => ({
        date: new Date(),
        interval: null,
        dropdownOptions: [
            {
                title: "Профиль",
                icon: "account_circle",
                url: "/profile"
            },
            {
                title: "Выйти",
                icon: "assignment_return",
                url: "/login"
            }
        ]
    }),
    mounted() {
        this.interval = setInterval(() => {
            this.date = new Date();
        }, 1000)
    },
    beforeDestroy() {
        clearInterval(this.interval);
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
}
</style>