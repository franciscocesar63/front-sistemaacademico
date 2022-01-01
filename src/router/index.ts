import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import CadastrarCursos from '../views/CadastrarCursos.vue';

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
    path: '/cadastrarCursos',
    name: 'Cadastrar Cursos',
    component: CadastrarCursos
  }
]

const router = new VueRouter({
  routes
})

export default router
