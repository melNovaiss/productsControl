<template>
  <div class="container shadow my-5">
    <div class="row">
      <div class="col-6 p-4 cardWelcome">
        <h2 class="text-white py-4">Bem vindo de volta!</h2>
        <div class="text-white">
          <span>Lorem ipsum dolor sit amet. Et adipisci voluptate</span><br />
          <span
            >At officiis dignissimos et dolorem internos ut sapiente perspiciatis</span
          >
        </div>
      </div>
      <div class="col-6" style="background-color: white">
        <h1 class="pt-5">Login</h1>
        <loginForm />
        <div class="py-3">
          <router-link to="/register"><a>Criar conta</a></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loginForm from "../components/login/Login.vue";

export default {
  name: "loginPage",
  components: {
    loginForm,
  },
};
</script>

<style scoped>
.cardWelcome {
  display: flex;
  background-color: #5F4A8C;
  flex-direction: column;
  justify-content: center;
}

a {
  color: #5F4A8C;
  text-decoration: none;
}
a:hover {
  color: #5F4A8C;
  text-decoration: none;
}

.form {
  padding: 5em 5em 0 5em;
}
</style>
