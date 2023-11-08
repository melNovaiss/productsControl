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
    </div>
    <button type="submit" class="btn btn-purple1 mt-4 rounded-pill px-4">Entrar</button>
  </form>
</template>

<script>
import $ from "jquery";
import axios from 'axios';
import db from "../../../db/db.json";

export default {
  name: "loginForm",
  data() {
    return {
      email: "",
      password: "",
      users: db.users,
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();
      if (this.email === "" || this.password === "") {
        e.target.classList.add("was-validated");
        return;
      }

      try {
        const response = await axios.post("http://localhost:8080/login", {
          email: this.email,
          password: this.password,
        });

        if (response.status === 200) {
          localStorage.setItem("userLoggedIn", "true");
          window.location.href = "/";
        } else {
          this.showLoginError();
        }
      } catch (error) {
        console.log(error);
        this.showLoginError();
      }
    },
    showLoginError() {
      $("#errorLogin").removeClass("d-none");
      $("#password").val("");
      setTimeout(function () {
        $("#errorLogin").addClass("d-none");
      }, 2000);
    },
  },
};
</script>
