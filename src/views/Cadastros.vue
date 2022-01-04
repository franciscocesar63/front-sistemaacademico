<template>
  <div class="home">
    <CadastrarCurso v-if="rotaAtual() =='cadastrarCursos'" />
    <CadastrarDiretor v-if="rotaAtual() =='cadastrarDiretores'" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CadastrarCurso from "@/components/CadastrarCurso.vue"; // @ is an alias to /src
import CadastrarDiretor from "@/components/CadastrarDiretor.vue"; // @ is an alias to /src

export default Vue.extend({
  components: {
    CadastrarCurso,
    CadastrarDiretor,
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
