<template>
  <div id="app">
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav class="ml-auto">
          <img
            src="./assets/logo.png"
            alt="Sistema acadêmico"
            style="margin-left: 10px"
            width="3%"
          />
          <b-nav-item to="/">Início </b-nav-item>
          <b-nav-item to="/about">Sobre</b-nav-item>

          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown v-if="this.perfil=='ADMIN' || this.perfil=='DIRETOR' || this.perfil=='COORDENADOR'"  text="Cadastrar" right>
            <b-dropdown-item v-if="this.perfil=='ADMIN' || this.perfil=='DIRETOR'" to="/cadastrarCursos">Cursos</b-dropdown-item>
            <b-dropdown-item v-if="this.perfil=='ADMIN'" to="/cadastrarDiretores">Diretores</b-dropdown-item>
            <b-dropdown-item v-if="this.perfil=='ADMIN' || this.perfil=='DIRETOR'" to="/cadastrarCoordenadores">Coordenadores</b-dropdown-item>
            <b-dropdown-item v-if="this.perfil=='ADMIN' || this.perfil=='DIRETOR'" href="#">Vestibulares</b-dropdown-item>
            <b-dropdown-item  v-if="this.perfil=='ADMIN' || this.perfil=='COORDENADOR'" to="/cadastrarDisciplinas">Disciplinas</b-dropdown-item>
            <b-dropdown-item v-if="this.perfil=='ADMIN'  || this.perfil=='COORDENADOR'" to="/cadastrarProfessores">Professores</b-dropdown-item>
            <b-dropdown-item v-if="this.perfil=='ADMIN' || this.perfil=='COORDENADOR'" to="/cadastrarTurmas">Turmas</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown v-if="this.perfil=='ADMIN' || this.perfil=='COORDENADOR'" text="Associações" right>
            <b-dropdown-item v-if="this.perfil=='ADMIN'  || this.perfil=='COORDENADOR'" href="#">Curso X Disciplinas</b-dropdown-item>
            <b-dropdown-item v-if="this.perfil=='ADMIN' || this.perfil=='COORDENADOR'" href="#">Professor X Cursos</b-dropdown-item>
            <b-dropdown-item v-if="this.perfil=='ADMIN' || this.perfil=='COORDENADOR'" href="#">Professor X Disciplinas</b-dropdown-item>
            <b-dropdown-item v-if="this.perfil=='ADMIN' || this.perfil=='COORDENADOR'" href="#">Aluno X Turma</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown  text="Visualizar" right>
            <b-dropdown-item v-if="this.perfil=='ADMIN' || this.perfil=='DIRETOR' || this.perfil=='COORDENADOR'" to="/visualizarCursos">Cursos</b-dropdown-item>
            <b-dropdown-item v-if="this.perfil=='ADMIN' || this.perfil=='DIRETOR' || this.perfil=='COORDENADOR'" href="#">Diretores</b-dropdown-item>
            <b-dropdown-item v-if="this.perfil=='ADMIN' || this.perfil=='DIRETOR' || this.perfil=='COORDENADOR'" href="#">Coordenadores</b-dropdown-item>
            <b-dropdown-item href="#">Vestibulares</b-dropdown-item>
            <b-dropdown-item v-if="this.perfil=='ADMIN' || this.perfil=='DIRETOR' || this.perfil=='COORDENADOR' || this.perfil=='PROFESSOR'" href="#">Disciplinas</b-dropdown-item>
            <b-dropdown-item v-if="this.perfil=='ADMIN' || this.perfil=='DIRETOR' || this.perfil=='COORDENADOR'" href="#">Professores</b-dropdown-item>
            <b-dropdown-item v-if="this.perfil=='ADMIN' || this.perfil=='DIRETOR' || this.perfil=='COORDENADOR' || this.perfil=='PROFESSOR'" href="#">Turmas</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown v-if="this.perfil=='ADMIN' || this.perfil=='PROFESSOR' || this.perfil=='ALUNO'" text="Notas" right>
            <b-dropdown-item v-if="this.perfil=='ADMIN' || this.perfil=='PROFESSOR'" href="#">Lançar Notas</b-dropdown-item>
            <b-dropdown-item v-if="this.perfil=='ADMIN' || this.perfil=='PROFESSOR' || this.perfil=='ALUNO'" href="#">Visualizar Notas</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown v-if="logado == 'true'" text="Usuário" right>
            <b-dropdown-item href="#">Minha Conta</b-dropdown-item>
            <b-dropdown-item to="/logout">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item v-else to="/login">Login </b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>

    <router-view />
  </div>
</template>

<script>
import VueCookies from "vue-cookies";
export default {
  data() {
    return {
      logado: VueCookies.get("logado"),
      token: VueCookies.get("token"),
      perfil: VueCookies.get("perfil"),
    };
  },
  created(){
    document.title = "Sistema Acadêmico";
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
