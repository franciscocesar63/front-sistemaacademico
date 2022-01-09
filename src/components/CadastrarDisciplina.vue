<template>
  <div class="container">
    <h1 class="mb-3 mt-4">Cadastrar Disciplina</h1>

    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <div class="row">
          <div class="col-6">
            <b-form-group id="input-group-1" label="Nome da Disciplina:" label-for="nome">
              <b-form-input
                id="nome"
                v-model="nome"
                type="text"
                placeholder="Digite o nome da Disciplina"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-3">
            <b-form-group id="input-group-1" label="Curso da Disciplina" label-for="nome">
              <b-form-select
                class="form-select"
                v-model="selected"
                :options="cursos"
              ></b-form-select>
            </b-form-group>
          </div>
        </div>

        <b-button class="mt-5 m-1" type="submit" variant="primary">Cadastrar</b-button>
        <b-button class="mt-5 m-1" type="reset" variant="danger">Limpar</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueCookies from "vue-cookies";
import router from '@/router';
export default {
  data() {
    return {
      nome: "",
      cursos: [],
      selected: "",
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      if (this.selected == "") {
        alert("Por favor escolha um Curso!");
        return;
      }
      var enviar = {
        nome: this.nome,
        curso: {
          id: this.selected,
        },
      };
      
      var token = VueCookies.get("token");
      var url = "http://localhost:8090/api/cadastrarDisciplina/";

      axios
        .post(url, enviar, {
          headers: { Authorization: token },
        })
        .then(function (response) {
          console.log(response.status);
          if (response.status == 200) {
            router.go(0);
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
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.nome = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  mounted() {
    var tempCurso = [];
    var token = VueCookies.get("token");
    var url = "http://localhost:8090/api/cursos/";

    axios
      .post(url, this.nome, {
        headers: {
          Authorization: token,
        },
      })
      .then(function (response) {
        response.data.map(function (valor, index) {
          var tempData = {
            text: valor.nome,
            value: valor.id,
          };
          tempCurso.push(tempData);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    tempCurso.push({
      text: "Selecione um Curso",
      value: "",
    });
    this.cursos = tempCurso;
  },
};
</script>
