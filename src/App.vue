<template>
  <nav v-if="$route.name !== 'login' && $route.name !== 'register'" class="navbar navbar-expand-lg bg-body-purple shadow">
    <div class="container">
      <a class="navbar-brand text-white" href="/">Product Control</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link text-white" aria-current="page" href="/products"
              >Produtos</a
            >
          </li>
        </ul>
      </div>
      <div class="d-flex">
        <div class="dropdown text-white">
          <a class="nav-link nav-profile" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-person-circle"></i>
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" @click="removeUser" href="/login"
                ><i class="bi bi-box-arrow-right"></i> Sign Out</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "sidebar",
  methods: {
    removeUser() {
      localStorage.clear();
    },
  },
};
</script>

<style>
.bg-body-purple {
  background-color: #5f4a8c;
}

.bi-person-circle {
  font-size: 1.5em;
}

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.btn-purple1 {
  background-color: #5f4a8c;
  color: white;
}
.btn-purple1:hover {
  background-color: #795eb4;
  color: white;
}
a {
  text-decoration: none;
}

.card {
  border: 0;
}
</style>
