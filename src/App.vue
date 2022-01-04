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
          <b-nav-item-dropdown text="Cadastrar" right>
            <b-dropdown-item to="/cadastrarCursos">Cursos</b-dropdown-item>
            <b-dropdown-item to="/cadastrarDiretores">Diretores</b-dropdown-item>
            <b-dropdown-item href="#">Coordenadores</b-dropdown-item>
            <b-dropdown-item href="#">Vestibulares</b-dropdown-item>
            <b-dropdown-item href="#">Disciplinas</b-dropdown-item>
            <b-dropdown-item href="#">Professores</b-dropdown-item>
            <b-dropdown-item href="#">Turmas</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Associações" right>
            <b-dropdown-item href="#">Curso X Disciplinas</b-dropdown-item>
            <b-dropdown-item href="#">Professor X Cursos</b-dropdown-item>
            <b-dropdown-item href="#">Professor X Disciplinas</b-dropdown-item>
            <b-dropdown-item href="#">Aluno X Turma</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Visualizar" right>
            <b-dropdown-item href="#">Cursos</b-dropdown-item>
            <b-dropdown-item href="#">Diretores</b-dropdown-item>
            <b-dropdown-item href="#">Coordenadores</b-dropdown-item>
            <b-dropdown-item href="#">Vestibulares</b-dropdown-item>
            <b-dropdown-item href="#">Disciplinas</b-dropdown-item>
            <b-dropdown-item href="#">Professores</b-dropdown-item>
            <b-dropdown-item href="#">Turmas</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Notas" right>
            <b-dropdown-item href="#">Lançar Notas</b-dropdown-item>
            <b-dropdown-item href="#">Visualizar Notas</b-dropdown-item>
          </b-nav-item-dropdown>
          
          <b-nav-item to="/login">Login </b-nav-item>
          <b-nav-item-dropdown text="Usuário" right>
            <b-dropdown-item href="#">Minha Conta</b-dropdown-item>
            <b-dropdown-item href="#">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    </div>

    <router-view />
  </div>
</template>

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
