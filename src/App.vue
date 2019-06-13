<template>
    <div id="app">
        <component :is="layout">
            <router-view/>
        </component>
    </div>
</template>

<script>
import AuthLayout from './layouts/AuthLayout.vue';
import MainLayout from './layouts/MainLayout.vue'

export default {
    components: {
        AuthLayout,
        MainLayout
    },
    computed: {
        layout() {
            const layoutName = this.$route.meta.layout;
            return layoutName ? `${layoutName}Layout` : "";
        }
    }
}
</script>

<style lang="scss">
    //@import '~materialize-css/dist/css/materialize.min.css';
    @import '~materialize-css/sass/materialize';
    @import 'assets/index';
</style>

