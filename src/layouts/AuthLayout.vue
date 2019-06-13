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

<style lang="scss">
.AuthLayout {
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        webkit-box-shadow: 0 0 0px 1000px #fff inset;
        transition: background-color 5000s ease-in-out 0s;
    }
}
</style>