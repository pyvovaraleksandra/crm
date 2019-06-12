<template>
<div class="MainLayout app-main-layout">

    <Header @click="isOpen = !isOpen"/>
    <Sidebar :isOpen="isOpen"/>

    <main class="MainLayout__main" :class="{offset: isOpen}">
        <div class="app-page">
            <router-view/>
        </div>
    </main>

    <div class="fixed-action-btn">
        <a class="btn-floating btn-large blue" href="#">
            <i class="large material-icons">add</i>
        </a>
    </div>
</div>

</template>

<script>
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
    components: {
        Header,
        Sidebar
    },
    data: () => ({
        isOpen: true,
    })
}
</script>

<style lang="scss" scoped>
.MainLayout {
    &__main {
        padding: 64px 10px 0 10px;
        transition: padding .3s;
        position: relative;

        &.offset {
            padding: 64px 10px 0 200px;
        }
    }
}
</style>