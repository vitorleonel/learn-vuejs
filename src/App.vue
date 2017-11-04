<template>
    <div>
        <app-header></app-header>

        <router-view></router-view>
    </div>
</template>

<script>
    import AppHeader from './components/Header/Header.vue'

    export default {

        components: {
            AppHeader
        }

    }
</script>

<style lang="scss">
    $navbar-height: 4rem;

    @import "~bulma";
</style>