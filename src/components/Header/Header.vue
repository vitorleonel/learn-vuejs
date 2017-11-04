<template>
    <div class="navbar has-shadow is-dark">
        <div class="container is-fluid">

            <div class="navbar-brand">
                <router-link :to="{ name: 'app.home' }" class="navbar-item">
                    <h1 class="title is-4 has-text-white-bis">learn-vuejs</h1>
                </router-link>
            </div>

            <div class="navbar-menu">
                <div class="navbar-start">
                    <router-link :to="{ name: 'app.users' }" class="navbar-item">Usuários</router-link>
                </div>

                <div class="navbar-end">
                    <a href="https://github.com/vitorleonel/learn-vuejs" target="_blank" class="navbar-item">
                        <span class="icon">
                            <i class="fa fa-github"></i>
                        </span>

                        <span>Veja no Github</span>
                    </a>
                </div>
            </div>

        </div>
    </div>
</template>