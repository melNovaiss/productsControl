<template>
  <form
    class="form"
    @submit.prevent="login"
    :class="{ 'was-validated': formSubmitted && (email === '' || password === '') }"
    novalidate
  >
    <div class="form-floating mb-3">
      <input
        type="email"
        class="form-control shadow"
        id="email"
        v-model="email"
        placeholder="name@example.com"
        required
      />
      <label for="email">Email</label>
    </div>
    <div class="form-floating">
      <input
        type="password"
        class="form-control shadow"
        id="password"
        v-model="password"
        placeholder="Password"
        required
      />
      <label for="password">Senha</label>
    </div>
    <div class="pt-4 text-danger" v-show="loginError">
      <i class="bi bi-x-circle"></i> Email ou senha incorretos.
    </div>
    <button type="submit" class="btn btn-purple1 mt-4 rounded-pill px-4">Entrar</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "loginForm",
  data() {
    return {
      email: "",
      password: "",
      formSubmitted: false,
      loginError: false,
    };
  },
  methods: {
    async login() {
      this.formSubmitted = true;

      if (this.email === "" || this.password === "") {
        return;
      }

      try {
        const response = await axios.post("http://localhost:8080/login", {
          email: this.email,
          password: this.password,
        });

        if (response.status === 200) {
          localStorage.setItem("userLoggedIn", "true");
          this.$router.push("/");
        } else {
          this.showLoginError();
        }
      } catch (error) {
        console.error(error);
        this.showLoginError();
      }
    },
    showLoginError() {
      this.loginError = true;
      this.password = "";
      setTimeout(() => {
        this.loginError = false;
      }, 2000);
    },
  },
};
</script>
