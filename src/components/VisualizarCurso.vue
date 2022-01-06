<template>
  <div class="container">
    <h1 class="mb-3 mt-4">Consultar Cursos</h1>

    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Área</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, index) in cursos" :key="index">
            <th scope="row">{{ value.id }}</th>
            <td>{{ value.nome }}</td>
            <td>{{ value.area }}</td>
            <td>
              <!-- Editar -->
              <b-button id="show-btn" @click="$bvModal.show(value.id + '')"
                >Editar</b-button
              >

              <b-modal :id="value.id + ''" hide-footer>
                <template #modal-title> Editar Curso: {{ value.nome }} </template>
                <div class="d-block text-center">
                  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="inputGroup-sizing-default"
                        >ID</span
                      >
                      <input
                        id="id"
                        v-model="value.id"
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="ID do Curso"
                        required
                        disabled
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="inputGroup-sizing-default"
                        >Nome</span
                      >
                      <input
                        id="nome"
                        v-model="value.nome"
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="Nome do Curso"
                        required
                      />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text" id="inputGroup-sizing-default"
                        >Área</span
                      >
                      <input
                        id="area"
                        v-model="value.area"
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="Área do Curso"
                        required
                      />
                    </div>
                    <b-button
                      class="mt-3"
                      style="float: left"
                      block
                      @click="$bvModal.hide(value.id + '')"
                      >Cancelar</b-button
                    >
                    <b-button
                      type="submit"
                      variant="success"
                      class="mt-3"
                      style="float: right"
                      >Salvar</b-button
                    >
                  </b-form>
                </div>
              </b-modal>

              <!-- deletar -->
              <b-button
                type="button"
                style="margin-left: 5px"
                variant="danger"
                @click="deletar(value.id)"
                >Deletar</b-button
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueCookies from "vue-cookies";
// import router from "@/router";
export default {
  data() {
    return {
      hover: true,
      value: { nome: "", area: "" },
      cursos: [],
      fields: ["id", "nome", "area"],
      selected: "",
      modalShow: false,
      show: true,
    };
  },
  methods: {
    deletar(id) {
      var cursos = this.cursos;
      var token = VueCookies.get("token");
      var url = "http://localhost:8090/api/deletarCurso/" + id;
      axios
        .delete(url, {
          headers: {
            Authorization: token,
          },
        })
        .then(function (response) {
          if (response.status == 200) {
            alert("Deletado com Sucesso.");
            for (var i = 0; i < cursos.length; i++) {
              if (cursos[i].id === id) {
                cursos.splice(i, 1);
              }
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      this.cursos = cursos;
    },
    onSubmit(event) {
      var id = document.getElementById("id").value;
      var nome = document.getElementById("nome").value;
      var area = document.getElementById("area").value;
      var curso = {
        id: id,
        nome: nome,
        area: area,
      };
      var token = VueCookies.get("token");
      // console.log(token);
      var url = "http://localhost:8090/api/atualizarCurso/";
      axios
        .put(url, curso, {
          headers: {
            Authorization: token,
          },
        })
        .then(function (response) {
          console.log(response);
          if (response.status == 200) {
            alert("Curso Atualizado com Sucesso!");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      this.$root.$emit("bv::hide::modal", id + "", "#btnShow");
      event.preventDefault();
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.value.nome = "";
      this.value.area = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  mounted() {
    //inicializa o array de cursos com o que está no servidor.
    var temp = [];
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
            nome: valor.nome,
            id: valor.id,
            area: valor.area,
          };
          temp.push(tempData);
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    this.cursos = temp;
  },
};
</script>
