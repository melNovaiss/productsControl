<template>
  <nav class="navbar navbar-expand-lg bg-body-purple shadow">
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
            <a class="nav-link active text-white" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
              <a class="nav-link active text-white" aria-current="page" href="/products">Produtos</a>
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
              <a class="dropdown-item" href="/login"
                ><i class="bi bi-box-arrow-right"></i> Sign Out</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "sidebar",
};
</script>

<style scoped>
.bg-body-purple {
  background-color: #5F4A8C;
}

.bi-person-circle {
  font-size: 1.5em;
}
</style>
