<template>
  <div class="container">
    <h1>Bem vindo</h1>
  </div>
</template>

<script>
import navbar from "../components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    navbar,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 91vh;
}

h1 {
  font-size: 4em;
  color: #5f4a8c;
  animation: motion 3s infinite;
}

@keyframes motion {
  30% {
    letter-spacing: 30px;
  }
}
</style>
