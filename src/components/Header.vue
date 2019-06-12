<template>
    <nav class="Header navbar brown">
        <div class="Header__left" @click="$emit('click')">
            <a href="#"> <i class="material-icons">dehaze</i> </a>
            <span class="Header__left-time">12.12.12</span>
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
</template>

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