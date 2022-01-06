<template>
  <div class="home">
    <VisualizarCurso v-if="rotaAtual() == 'visualizarCursos'" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VisualizarCurso from "@/components/VisualizarCurso.vue"; // @ is an alias to /src

export default Vue.extend({
  components: {
    VisualizarCurso,
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
