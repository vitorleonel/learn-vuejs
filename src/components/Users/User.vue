<template>
    <div>

        <div class="card">
            <div class="card-header">
                <div class="card-header-title" v-text="user.login"></div>
            </div>

            <div class="card-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {

        props: [
            'user'
        ]

    }
</script>

<style scoped>
    .card-header .card-header-title,
    .card-content {
        padding: 1rem;
    }
</style>