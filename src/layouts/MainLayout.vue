<template>
<div class="MainLayout app-main-layout">
    <nav class="MainLayout__header navbar brown">
        <div class="MainLayout__header-left">
            <a href="#"> <i class="material-icons">dehaze</i> </a>
            <span class="MainLayout__header-time">12.12.12</span>
        </div>

        <ul class="right hide-on-small-and-down">
                <li>
                    <a
                        class="dropdown-trigger white-text"
                        href="#"
                        data-target="dropdown"
                    >
                        USER NAME
                        <i class="material-icons right">arrow_drop_down</i>
                    </a>

                    <ul id='dropdown' class='dropdown-content'>
                        <li>
                            <a href="#" class="white-text">
                                <i class="material-icons">account_circle</i>Профиль
                            </a>
                        </li>
                        <li class="divider" tabindex="-1"></li>
                        <li>
                            <a href="#" class="white-text">
                                <i class="material-icons">assignment_return</i>Выйти
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
    </nav>

    <ul class="MainLayout__sidebar open brown">
        <li> <a href="#" class="waves-effect waves-brown pointer MainLayout__sidebar-item">Счет</a> </li>
        <li> <a href="#" class="waves-effect waves-brown pointer MainLayout__sidebar-item">История</a> </li>
        <li> <a href="#" class="waves-effect waves-brown pointer MainLayout__sidebar-item">Планирование</a> </li>
        <li> <a href="#" class="waves-effect waves-brown pointer MainLayout__sidebar-item">Новая запись</a> </li>
        <li> <a href="#" class="waves-effect waves-brown pointer MainLayout__sidebar-item">Категории</a> </li>
    </ul>

    <main class="MainLayout__main offset">
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

<style lang="scss" scoped>
.MainLayout {
    &__header {
        display: flex;
        position: fixed;
        justify-content: space-between;
        padding: 0 15px;
        z-index: 1000;

        &-left {
            display: flex;
            align-items: center
        }

        &-time {
            margin-left: 1rem;
        }
    }

    &__sidebar {
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
        transition: .3s;

        &-item {
            color: #fff;
            padding: 10px 15px;
            display: block;
        }

        &.open {
            transform: translateX(0);
        }
    }

    &__main {
        padding: 64px 100px 0 100px;
        transition: padding-left .3s;
        position: relative;

        &.offset {
            padding: 64px 10px 0 200px;
        }
    }
}
</style>