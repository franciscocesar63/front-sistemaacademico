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
            alert("Login realizado com sucesso!");

            VueCookies.set("logado", "true");
            VueCookies.set("token", token);
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
};
</script>
