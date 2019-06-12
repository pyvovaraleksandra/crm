<template>
<div class="MainLayout app-main-layout">
    <nav class="MainLayout__header navbar brown">
        <div class="navbar-left">
            <a href="#"> <i class="material-icons white-text">dehaze</i> </a>
            <span class="white-text">12.12.12</span>
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

    <ul class="MainLayout__sidebar brown">
        <li> <a href="#" class="waves-effect waves-brown pointer MainLayout__sidebar-item">Счет</a> </li>
        <li> <a href="#" class="waves-effect waves-brown pointer MainLayout__sidebar-item">История</a> </li>
        <li> <a href="#" class="waves-effect waves-brown pointer MainLayout__sidebar-item">Планирование</a> </li>
        <li> <a href="#" class="waves-effect waves-brown pointer MainLayout__sidebar-item">Новая запись</a> </li>
        <li> <a href="#" class="waves-effect waves-brown pointer MainLayout__sidebar-item">Категории</a> </li>
    </ul>

    <main class="app-content">
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
        justify-content: space-between;
        padding: 0 15px;
    }

    &__sidebar {
        position: absolute;
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

        &-item {
            color: #fff;
            padding: 10px 15px;
            display: block;

        }
    }
}
</style>