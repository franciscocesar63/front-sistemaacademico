<template>
  <div class="container">
    <h1 class="mt-2 mb-4">Login</h1>
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Usuário:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.login"
            type="text"
            placeholder="Digite o seu usuário"
            required
          ></b-form-input>
        </b-form-group>

        <label for="text-password">Senha</label>
        <b-form-input
          type="password"
          id="text-password"
          aria-describedby="password-help-block"
          placeholder="Digite a sua senha"
          v-model="form.senha"
        ></b-form-input>
        <b-button class="mt-5 m-1" type="submit" variant="primary">Login</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueCookies from "vue-cookies";
import router from "@/router";
export default {
  data() {
    return {
      form: {
        login: "",
        senha: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      var url = "http://localhost:8090/auth";

      axios
        .post(url, this.form)
        .then(function (response) {
          var token = response.data.tipo + " " + response.data.token;
          console.log(token);
          if (response.status == 200) {
            VueCookies.set("logado", "true");
            VueCookies.set("token", token);
            VueCookies.set("refresh", "false");
            //dados do usuário que acabou de logar
            var urlUsuario = "http://localhost:8090/api/usuario/";
            axios
              .post(
                urlUsuario,
                { token: token },
                {
                  headers: {
                    Authorization: token,
                  },
                }
              )
              .then(function (response) {
                var perfil = response.data.perfis[0].nome;
                if (perfil != null) {
                  VueCookies.set("perfil", perfil);
                } else {
                  VueCookies.set("perfil", "USER");
                }
              })
              .catch(function (error) {
                console.log(error);
              });
            //redirecionamento
            alert("Login realizado com sucesso!");
            router.push("/");
          } else {
            alert(
              "Ocorreu um erro ao autenticar, tente novamente.\n Erro: " + response.status
            );
          }
        })
        .catch(function (error) {
          console.log(error);
        });

      event.preventDefault();
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  beforeMount() {
    if (VueCookies.get("refresh") == "false") {
      router.go();
      VueCookies.set("refresh", "true");
    }
  },
};
</script>
