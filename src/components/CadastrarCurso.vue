<template>
  <div class="container">
    <h1 class="mb-3 mt-4">Cadastrar Curso</h1>

    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Nome do Curso:" label-for="nome">
          <b-form-input
            id="nome"
            v-model="form.nome"
            type="text"
            placeholder="Digite o nome do Curso"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class="mt-2"
          id="input-group-2"
          label="Área de Atuação"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.area"
            placeholder="Digite a área do curso"
            required
          ></b-form-input>
        </b-form-group>

        <b-button class="mt-5 m-1" type="submit" variant="primary">Cadastrar</b-button>
        <b-button class="mt-5 m-1" type="reset" variant="danger">Limpar</b-button>
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
        nome: "",
        area: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      var token = VueCookies.get("token");
      // console.log(token);
      var url = "http://localhost:8090/api/cadastrarCurso/";

      axios
        .post(url, this.form, {
          headers: {
            'Authorization': token,
          },
        })
        .then(function (response) {
          console.log(response);
          if(response.status==200){
            alert("Curso cadastrado com Sucesso!")
          }

        })
        .catch(function (error) {
          console.log(error);
        });
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.nome = "";
      this.form.area = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
