<template>
  <div class="container">
    <h1 class="mb-3 mt-4">Consultar Diretores</h1>

    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Titulação</th>
            <th scope="col">Nome</th>
            <th scope="col">CPF</th>
            <th scope="col">E-Mail</th>
            <th scope="col">Usuário</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, index) in diretores" :key="index">
            <th scope="row">{{ value.id }}</th>
            <td>{{ value.titulacao }}</td>
            <td>{{ value.pessoa.nome }}</td>
            <td>{{ value.pessoa.cpf }}</td>
            <td>{{ value.pessoa.email }}</td>
            <td>{{ value.pessoa.usuario.username }}</td>
            <td>
              <!-- Editar -->
              <b-button id="show-btn" @click="$bvModal.show(value.id + '')"
                >Editar</b-button
              >

              <b-modal :id="value.id + ''" hide-footer>
                <template #modal-title> Editar Curso: {{ value.nome }} </template>
                <div class="d-block text-center">
                  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <b-card bg-variant="light">
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
                          >Titulação</span
                        >
                        <input
                          id="titulacao"
                          v-model="value.titulacao"
                          type="text"
                          class="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                          placeholder="ID do Curso"
                          required
                        />
                      </div>

                      <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default"
                          >Nome</span
                        >
                        <input
                          id="nome"
                          v-model="value.pessoa.nome"
                          type="text"
                          class="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                          placeholder="Nome"
                          required
                        />
                      </div>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default"
                          >CPF</span
                        >
                        <input
                          id="cpf"
                          v-model="value.pessoa.cpf"
                          type="text"
                          class="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                          placeholder="CPF"
                          required
                        />
                      </div>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default"
                          >E-Mail</span
                        >
                        <input
                          id="email"
                          v-model="value.pessoa.email"
                          type="text"
                          class="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                          placeholder="E-mail"
                          required
                        />
                      </div>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default"
                          >Telefone</span
                        >
                        <input
                          id="telefone"
                          v-model="value.pessoa.telefones[0].numero"
                          type="text"
                          class="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                          placeholder="Telefone"
                          required
                        />
                      </div>

                      <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default"
                          >Login</span
                        >
                        <input
                          id="login"
                          v-model="value.pessoa.usuario.username"
                          type="text"
                          class="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                          placeholder="ID do Curso"
                          required
                          
                        />
                      </div>

                      <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default"
                          >Senha</span
                        >
                        <input
                          id="senha"
                          v-model="value.pessoa.usuario.password"
                          type="password"
                          class="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                          placeholder="senha"
                          required
                        />
                      </div>
                    </b-card>

                    <b-card bg-variant="light">
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default"
                          >Rua</span
                        >
                        <input
                          id="rua"
                          v-model="value.pessoa.endereco.rua"
                          type="text"
                          class="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                          placeholder="Rua"
                          required
                        />
                      </div>

                      <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default"
                          >Bairro</span
                        >
                        <input
                          id="bairro"
                          v-model="value.pessoa.endereco.bairro"
                          type="text"
                          class="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                          placeholder="Bairro"
                          required
                        />
                      </div>

                      <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default"
                          >Numero</span
                        >
                        <input
                          id="numero"
                          v-model="value.pessoa.endereco.numero"
                          type="text"
                          class="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                          placeholder="Numero"
                          required
                        />
                      </div>

                      <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default"
                          >CEP</span
                        >
                        <input
                          id="cep"
                          v-model="value.pessoa.endereco.cep"
                          type="text"
                          class="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                          placeholder="CEP"
                          required
                        />
                      </div>

                      <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default"
                          >Complemento</span
                        >
                        <input
                          id="complemento"
                          v-model="value.pessoa.endereco.complemento"
                          type="text"
                          class="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                          placeholder="Complemento"
                          required
                        />
                      </div>
                    </b-card>
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
      hover: true,
      value: { nome: "", area: "" },
      diretores: [],
      selected: "",
      modalShow: false,
      show: true,
    };
  },
  methods: {
    deletar(id) {
      var diretores = this.diretores;
      var token = VueCookies.get("token");
      var url = "http://localhost:8090/api/deletarDiretor/" + id;
      axios
        .delete(url, {
          headers: {
            Authorization: token,
          },
        })
        .then(function (response) {
          if (response.status == 200) {
            alert("Deletado com Sucesso.");
            for (var i = 0; i < diretores.length; i++) {
              if (diretores[i].id === id) {
                diretores.splice(i, 1);
              }
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      this.diretores = diretores;
    },
    onSubmit(event) {
      var id = document.getElementById("id").value;
      var titulacao = document.getElementById("titulacao").value;
      var nome = document.getElementById("nome").value;
      var cpf = document.getElementById("cpf").value;
      var email = document.getElementById("email").value;
      var telefone = document.getElementById("telefone").value;
      var senha = document.getElementById("senha").value;
      var rua = document.getElementById("rua").value;
      var bairro = document.getElementById("bairro").value;
      var numero = document.getElementById("numero").value;
      var cep = document.getElementById("cep").value;
      var complemento = document.getElementById("complemento").value;
      var login = document.getElementById("login").value;

      var diretor = {
        pessoa: {
          nome: nome,
          cpf: cpf,
          email: email,
          endereco: {
            rua: rua,
            bairro: bairro,
            numero: numero,
            cep: cep,
            complemento: complemento,
          },
          telefones: [
            {
              numero: telefone,
            },
          ],
          usuario: {
                login: login,
                senha: senha,
                password: senha,
                username: login,
          },
        },
        titulacao: titulacao,
        id: id,
      };
      var token = VueCookies.get("token");
      // console.log(token);
      var url = "http://localhost:8090/api/atualizarDiretor/";
      axios
        .put(url, diretor, {
          headers: {
            Authorization: token,
          },
        })
        .then(function (response) {
          console.log(response);
          if (response.status == 200) {
            alert("Diretor Atualizado com Sucesso!");
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
      this.value.titulacao = "";
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
    var url = "http://localhost:8090/api/diretores/";

    axios
      .post(url, temp, {
        headers: {
          Authorization: token,
        },
      })
      .then(function (response) {
        response.data.map(function (valor, index) {
          var tempData = {
            pessoa: {
              id: valor.pessoa.id,
              nome: valor.pessoa.nome,
              cpf: valor.pessoa.cpf,
              email: valor.pessoa.email,
              endereco: {
                id: valor.pessoa.endereco.id,
                rua: valor.pessoa.endereco.rua,
                bairro: valor.pessoa.endereco.bairro,
                numero: valor.pessoa.endereco.numero,
                cep: valor.pessoa.endereco.cep,
                complemento: valor.pessoa.endereco.complemento,
              },
              telefones: [
                {
                  id: valor.pessoa.telefones[0].id,
                  numero: valor.pessoa.telefones[0].numero,
                },
              ],
              usuario: {
                id: valor.pessoa.usuario.id,
                login: valor.pessoa.usuario.login,
                senha: valor.pessoa.usuario.senha,
                perfis: valor.pessoa.usuario.perfis,
                enabled: valor.pessoa.usuario.enabled,
                password: valor.pessoa.usuario.password,
                username: valor.pessoa.usuario.username,
              },
            },
            titulacao: valor.titulacao,
            id: valor.id,
          };
          temp.push(tempData);
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    this.diretores = temp;
  },
};
</script>
