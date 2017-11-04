<template>
    <section class="section">

        <div class="container">

            <div class="section-title has-text-centered">
                <h2 class="title">Usuários</h2>
                <p class="subtitle">Veja uma lista de usuários.</p>
            </div>

            <div class="columns is-multiline">
                <app-user v-for="(user, key) in users" :key="key" :user="user" class="column is-3"></app-user>
            </div>

        </div>

    </section>
</template>

<script>
    import axios from 'axios';
    import AppUser from './User.vue'

    export default {

        components: {
            AppUser
        },

        data() {
            return {
                users: []
            }
        },

        mounted() {
            this.getUsers();
        },

        methods: {
            getUsers: function() {
                axios.get('https://api.github.com/users').then(response => {
                    if(response.status === 200) {
                        this.users = response.data
                    }
                });
            }
        }

    }
</script>

<style scoped>
    .section-title,
    .title {
        margin-bottom: 3rem;
    }
</style>