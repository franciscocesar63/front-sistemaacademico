<template>
  <div class="home">
    <VisualizarCurso v-if="rotaAtual() == 'visualizarCursos'" />
    <VisualizarDiretor v-if="rotaAtual() == 'visualizarDiretores'" />
    <VisualizarCoordenador v-if="rotaAtual() == 'visualizarCoordenadores'" />
    <VisualizarProfessor v-if="rotaAtual() == 'visualizarProfessores'" />
    <VisualizarDisciplina v-if="rotaAtual() == 'visualizarDisciplinas'" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VisualizarCurso from "@/components/VisualizarCurso.vue"; // @ is an alias to /src
import VisualizarDiretor from "@/components/VisualizarDiretor.vue"; // @ is an alias to /src
import VisualizarCoordenador from "@/components/VisualizarCoordenador.vue"; // @ is an alias to /src
import VisualizarProfessor from "@/components/VisualizarProfessor.vue"; // @ is an alias to /src
import VisualizarDisciplina from "@/components/VisualizarDisciplina.vue"; // @ is an alias to /src

export default Vue.extend({
  components: {
    VisualizarCurso,
    VisualizarDiretor,
    VisualizarCoordenador,
    VisualizarProfessor,
    VisualizarDisciplina
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
