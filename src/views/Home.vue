<template>
  <div class="home">
    <h1>Página Inicial</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CadastrarCurso from "@/components/CadastrarCurso.vue"; // @ is an alias to /src

@Component({
  components: {
    CadastrarCurso,
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
})
export default class Home extends Vue {}
</script>
