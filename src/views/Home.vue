<template>
  <div class="home">
    <h1>Página Inicial</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import CadastrarCurso from '@/components/CadastrarCurso.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    CadastrarCurso,
  },
})
export default class Home extends Vue {}
</script>
