import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../views/Login.vue';
import Logout from '../views/Logout.vue';
import Cadastros from '../views/Cadastros.vue';
import Visualizar from '../views/Visualizar.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/cadastrarCursos',
    alias: ['/cadastrarDiretores', '/cadastrarCoordenadores', '/cadastrarProfessores', '/cadastrarDisciplinas', '/cadastrarTurmas'],
    name: 'Cadastro',
    component: Cadastros
  },
  {
    path: '/visualizarCursos',
    alias: ['/visualizarDiretores','/visualizarCoordenadores','/visualizarProfessores','/visualizarDisciplinas'],
    name: 'Visualizar',
    component: Visualizar
  }
]

const router = new VueRouter({
  routes
})

export default router
