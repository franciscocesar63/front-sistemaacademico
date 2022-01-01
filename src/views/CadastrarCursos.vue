<template>
  <div class="home">
    <CadastrarCurso />







  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import CadastrarCurso from "@/components/CadastrarCurso.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    CadastrarCurso,
  },
})
export default class Home extends Vue {}
</script>
