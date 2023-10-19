<template>
  <form class="form" method="POST" @submit.prevent="login" novalidate>
    <div class="form-floating mb-3">
      <input
        type="email"
        class="form-control shadow"
        id="email"
        v-model="email"
        placeholder="name@example.com"
        required="required"
      />
      <label for="floatingInput">Email</label>
    </div>
    <div class="form-floating">
      <input
        type="password"
        class="form-control shadow"
        id="password"
        v-model="password"
        placeholder="Password"
        required="required"
      />
      <label for="floatingPassword">Senha</label>
    </div>
    <div class="pt-4 text-danger d-none" id="errorLogin">
      <i class="bi bi-x-circle"></i> Email e/ou senha inválidos.
      <i class="bi bi-x-circle"></i>
    </div>
    <button type="submit" class="btn btn-purple1 mt-4 rounded-pill px-4">Entrar</button>
  </form>
</template>

<script>
import $ from "jquery";
import db from "../../../db/db.json";

export default {
  name: "loginForm",
  data() {
    return {
      email: "",
      password: "",
      //   isMatch: false,
      //   databaseData: ["a", "b", "c"],
      users: db.users,
    };
  },
  methods: {
    async login(e) {
      if ($("#email").val() === "" || $("#password").val() === "") {
        e.preventDefault();
        e.target.classList.add("was-validated");
      } else {
        this.compareData(this.email, this.password);
      }
    },
    compareData(email, password) {
      let encontrou = false;

      this.users.forEach((user) => {
        if (user.email === email && user.password === password) {
          encontrou = true;
        }
      });

      if (encontrou) {
        window.location.href = "/";
        console.log("Credenciais válidas.");
      } else {
        $("#errorLogin").toggleClass("d-none");
        setTimeout(function () {
          $("#errorLogin").toggleClass("d-none");
        }, 5000);
      }
      //   console.log((this.isMatch = this.db.users.some((user) => user === e)));
      //   this.isMatch = this.databaseData.includes(this.email);
    },
  },
};
</script>
