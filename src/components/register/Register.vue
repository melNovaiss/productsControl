<template>
  <form
    class="form"
    method="POST"
    @submit.prevent="createUser"
    :class="{ 'was-validated': formValidated }"
    novalidate
  >
    <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control shadow"
        id="name"
        name="name"
        v-model="name"
        placeholder="name"
        required="required"
      />
      <label for="name">Nome</label>
    </div>
    <div class="form-floating mb-3">
      <input
        type="email"
        class="form-control shadow"
        id="email"
        name="email"
        v-model="email"
        placeholder="name@example.com"
        required="required"
      />
      <label for="email">Email</label>
    </div>

    <div class="row">
      <div class="col-6">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control shadow"
            id="cel"
            name="cel"
            v-model="cel"
            v-mask="'(##) #####-####'"
            placeholder="cel"
            required="required"
          />
          <label for="cel">Celular</label>
        </div>
      </div>
      <div class="col-6">
        <div class="form-floating">
          <input
            type="password"
            class="form-control shadow"
            id="password"
            name="password"
            v-model="password"
            placeholder="Password"
            required="required"
          />
          <label for="password">Senha</label>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control shadow"
            id="cep"
            @input="searchAddress"
            v-model="cep"
            placeholder="cep"
            required="required"
          />
          <label for="cep">Cep</label>
        </div>
      </div>
      <div class="col-6">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control shadow"
            id="num"
            v-model="address.num"
            placeholder="num"
            required="required"
          />
          <label for="num">Nº</label>
        </div>
      </div>
    </div>
    <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control shadow"
        id="end"
        v-model="address.logradouro"
        placeholder="end"
        required="required"
      />
      <label for="end">Endereço</label>
    </div>
    <div class="row">
      <div class="col-8">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control shadow"
            id="brr"
            v-model="address.bairro"
            placeholder="brr"
            required="required"
          />
          <label for="brr">Bairro</label>
        </div>
      </div>
      <div class="col-4">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control shadow"
            id="localidade"
            v-model="address.localidade"
            placeholder="localidade"
            required="required"
          />
          <label for="localidade">Cidade</label>
        </div>
      </div>
    </div>

    <button type="submit" class="btn btn-purple1 rounded-pill px-4 mb-3">Salvar</button>
  </form>
</template>

<script>
import $ from "jquery";
import { mask } from "vue-the-mask";
import axios from "axios";

export default {
  name: "registerForm",
  data() {
    return {
      name: "",
      email: "",
      password: null,
      cel: "",
      address: [
        {
          logradouro: "",
          bairro: "",
          localidade: "",
          num: "",
        },
      ],
      formValidated: false,
    };
  },
  directives: { mask },
  methods: {
    removeMask(value) {
      return value.replace(/[\(\)\-\s]/g, "");
    },
    async createUser() {
      this.formValidated = true;

      if (this.validateForm()) {
        try {
          const data = {
            name: this.name,
            email: this.email,
            password: this.password,
            cel: this.removeMask(this.cel),
            address: this.address,
          };

          const response = await axios.post("http://localhost:8080/register", data, {
            headers: { "Content-Type": "application/json" },
          });

          if (response.status === 201) {
            this.$router.push("/login");
          } else {
            console.error("Erro ao criar o usuário:", response.statusText);
          }
        } catch (error) {
          console.error("Erro ao criar o usuário:", error);
        }
      }
    },
    async searchAddress() {
      if (this.cep && this.cep.length === 8) {
        try {
          const response = await axios.get(`https://viacep.com.br/ws/${this.cep}/json/`);
          const addressData = response.data;
          this.address = {
            cep: addressData.cep,
            logradouro: addressData.logradouro || "",
            bairro: addressData.bairro || "",
            localidade: addressData.localidade || "",
            num: "",
          };
          this.$refs.numInput.focus();
          console.log("Endereço encontrado:", this.address);
        } catch (error) {
          console.error("Erro ao buscar endereço:", error);
        }
      }
    },
    validateForm() {
      return (
        this.name &&
        this.email &&
        this.password &&
        this.cel &&
        this.cep &&
        this.address.logradouro &&
        this.address.bairro &&
        this.address.localidade &&
        this.address.num
      );
    },
  },
};
</script>
