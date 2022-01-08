<template>
  <div class="container">
    <h1 class="mb-3 mt-4">Cadastrar Diretor</h1>

    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-card bg-variant="light">
          <b-form-group
            label-cols-lg="3"
            label="Dados Pessoais do Diretor"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
            label-align="left"
          >
            <b-form-group
              label="Titulação:"
              label-for="nested-street"
              label-cols-sm="3"
              label-align-sm="right"
              label-align="left"
            >
              <b-form-input v-model="form.titulacao" id="nested-street"></b-form-input>
            </b-form-group>
            <b-form-group
              label="Nome:"
              label-for="nested-street"
              label-cols-sm="3"
              label-align-sm="right"
              label-align="left"
            >
              <b-form-input v-model="form.pessoa.nome" id="nested-street"></b-form-input>
            </b-form-group>

            <b-form-group
              label="CPF:"
              label-for="nested-city"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input v-model="form.pessoa.cpf" id="nested-city"></b-form-input>
            </b-form-group>

            <b-form-group
              label="E-Mail:"
              label-for="nested-state"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input
                v-model="form.pessoa.email"
                type="email"
                id="nested-state"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Telefone:"
              label-for="nested-state"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input v-model="numeroTelefone" id="nested-state"></b-form-input>
            </b-form-group>

            <b-form-group
              label="Login:"
              label-for="nested-state"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input
                v-model="form.pessoa.usuario.login"
                id="nested-state"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Senha:"
              label-for="nested-state"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input
                v-model="form.pessoa.usuario.senha"
                id="nested-state"
              ></b-form-input>
            </b-form-group>
          </b-form-group>
        </b-card>

        <b-card bg-variant="light" class="mt-3">
          <b-form-group
            label-cols-lg="3"
            label="Dados do endereço do Diretor"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
            label-align="left"
          >
            <b-form-group
              label="Rua:"
              label-for="nested-street"
              label-cols-sm="3"
              label-align-sm="right"
              label-align="left"
            >
              <b-form-input
                v-model="form.pessoa.endereco.rua"
                id="nested-street"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Bairro:"
              label-for="nested-city"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input
                v-model="form.pessoa.endereco.bairro"
                id="nested-city"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Número:"
              label-for="nested-state"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input
                v-model="form.pessoa.endereco.numero"
                id="nested-state"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="CEP:"
              label-for="nested-state"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input
                v-model="form.pessoa.endereco.cep"
                id="nested-state"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Complemento:"
              label-for="nested-state"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input
                v-model="form.pessoa.endereco.complemento"
                id="nested-state"
              ></b-form-input>
            </b-form-group>
          </b-form-group>
        </b-card>

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
        titulacao: "",
        pessoa: {
          nome: "",
          cpf: "",
          email: "",
          endereco: {
            rua: "",
            bairro: "",
            numero: "",
            cep: "",
            complemento: "",
          },
          telefones: [],
          usuario: {
            login: "",
            senha: "",
          },
        },
      },
      show: true,
      numeroTelefone: "",
    };
  },
  methods: {
    onSubmit(event) {
      //adicionando telefone à lista.
      this.form.pessoa.telefones.push({ numero: this.numeroTelefone });

      var token = VueCookies.get("token");
      var url = "http://localhost:8090/api/cadastrarDiretor/";

      axios
        .post(url, this.form, {
          headers: { Authorization: token },
        })
        .then(function (response) {
          console.log(response.status);
          if (response.status == 200) {
            alert("Cadastrado com Sucesso");
          } else {
            alert(
              "Ocorreu um erro ao cadastrar, contate o administrador do sistema.\n Erro: " +
                response.status
            );
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      event.preventDefault();
      // alert(JSON.stringify(this.form));
      this.form.pessoa.telefones = [];
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      (this.form = {
        titulacao: "",
        pessoa: {
          nome: "",
          cpf: "",
          email: "",
          endereco: {
            rua: "",
            bairro: "",
            numero: "",
            cep: "",
            complemento: "",
          },
          telefones: [],
          usuario: {
            login: "",
            senha: "",
          },
        },
      }),
        // Trick to reset/clear native browser form validation state
        (this.show = false);
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
