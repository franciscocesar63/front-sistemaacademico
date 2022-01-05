<template>
  <div class="home">
    <CadastrarCurso v-if="rotaAtual() == 'cadastrarCursos'" />
    <CadastrarDiretor v-if="rotaAtual() == 'cadastrarDiretores'" />
    <CadastrarCoordenador v-if="rotaAtual() == 'cadastrarCoordenadores'" />
    <CadastrarProfessor v-if="rotaAtual() == 'cadastrarProfessores'" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CadastrarCurso from "@/components/CadastrarCurso.vue"; // @ is an alias to /src
import CadastrarDiretor from "@/components/CadastrarDiretor.vue"; // @ is an alias to /src
import CadastrarCoordenador from "@/components/CadastrarCoordenador.vue"; // @ is an alias to /src
import CadastrarProfessor from "@/components/CadastrarProfessor.vue"; // @ is an alias to /src

export default Vue.extend({
  components: {
    CadastrarCurso,
    CadastrarDiretor,
    CadastrarCoordenador,
    CadastrarProfessor,
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    rotaAtual: function () {
      var rota = this.$route.path.split("/")[1];
      return rota;
    },
  },
});
</script>
