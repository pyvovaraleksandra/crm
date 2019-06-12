<template>
    <div class="AuthLayout grey darken-1 empty-layout">
        <router-view/>
    </div>
</template>

<style lang="scss" scoped>
    .AuthLayout {
        min-height: 100vh;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>