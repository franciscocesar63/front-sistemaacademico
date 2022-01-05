<template>
  <div class="home">
    <h1>Página Inicial</h1>
    <h2>Perfil do usuário: {{ this.perfil }}</h2>
  </div>
</template>

<script>
import VueCookies from "vue-cookies";
import router from "@/router";

export default {
  data() {
    return {
      perfil: VueCookies.get("perfil"),
    };
  },
  beforeMount() {
    console.log(VueCookies.get("refresh"));
    if (VueCookies.get("refresh") == "false") {
      router.go();
      VueCookies.set("refresh", "true");
    }
  },
};
</script>
