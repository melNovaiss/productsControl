<template>
  <div class="container shadow my-5">
    <div class="row">
      <div class="col-6 p-4 cardWelcome">
        <h2 class="text-white py-4">Crie uma conta</h2>
        <div class="text-white">
          <span>Lorem ipsum dolor sit amet. Et adipisci</span><br />
          <span>At officiis dignissimos et dolorem internos ut sapiente</span>
        </div>
      </div>
      <div class="col-6" style="background-color: white">
        <h1 class="pt-3">Registrar</h1>
        <registerForm />
      </div>
    </div>
  </div>
</template>

<script>
import registerForm from "../components/register/Register.vue";

export default {
  name: "registerPage",
  components: {
    registerForm,
  },
};
</script>

<style scoped>
/* #8758a6 */
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
  padding: 0 5em 0 5em;
}
</style>
