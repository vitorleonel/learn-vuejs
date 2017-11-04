import Vue from 'vue'
import VueRouter from 'vue-router'

import AppWelcome from './components/Welcome/Welcome.vue'
import AppUsers from './components/Users/Users.vue'

Vue.use(VueRouter)

const routes = [
    {
        name: 'app.home',
        path: '/',
        component: AppWelcome
    },
    {
        name: 'app.users',
        path: '/users',
        component: AppUsers
    }
]

export default new VueRouter({
    routes
})