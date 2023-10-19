<template>
  <form class="form" method="POST" @submit.prevent="createUser" novalidate>
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
          <input type="text" class="form-control shadow" id="cep" placeholder="cep" />
          <label for="cep">Cep</label>
        </div>
      </div>
      <div class="col-6">
        <div class="form-floating mb-3">
          <input type="text" class="form-control shadow" id="num" placeholder="num" />
          <label for="num">Nº</label>
        </div>
      </div>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control shadow" id="end" placeholder="end" />
      <label for="end">Endereço</label>
    </div>
    <div class="row">
      <div class="col-8">
        <div class="form-floating mb-3">
          <input type="text" class="form-control shadow" id="brr" placeholder="brr" />
          <label for="brr">Bairro</label>
        </div>
      </div>
      <div class="col-4">
        <div class="form-floating mb-3">
          <input type="text" class="form-control shadow" id="uf" placeholder="uf" />
          <label for="uf">UF</label>
        </div>
      </div>
    </div>

    <button type="submit" class="btn btn-purple1 rounded-pill px-4 mb-3">
      Salvar
    </button>
  </form>
</template>

<script>
import $ from "jquery";

export default {
  name: "registerForm",
  data() {
    return {
      name: null,
      email: null,
      password: null,
      phoneNumber: "",
    };
  },
  methods: {
    async createUser(e) {
      if (
        $("#name").val() === "" ||
        $("#email").val() === "" ||
        $("#password").val() === ""
      ) {
        e.preventDefault();
        e.target.classList.add("was-validated");
      } else {
        const data = {
          name: this.name,
          email: this.email,
          password: this.password,
        };

        const dataJson = JSON.stringify(data);

        await fetch("http://localhost:3000/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: dataJson,
        });

        window.location.href = "/login";
      }
    },
  },
};
</script>
