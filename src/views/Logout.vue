<template>
  <div class="home"></div>
</template>

<script>
import VueCookies from "vue-cookies";
import router from "@/router";
export default {
  methods: {
    logout() {
      VueCookies.set("logado", "false");
      VueCookies.set("refresh", "false");
      VueCookies.remove("token");
      VueCookies.remove("perfil");
      router.push("/login");
      // router.replace('/login');
      console.log("logout realizado com sucesso.");
      return;
    },
  },
   beforeMount() {
    this.logout();
    return;
  },
};
</script>
