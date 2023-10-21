<template>
  <navbar />
  <div class="container my-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb pt-2">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><a href="/products">Products</a></li>
        <li class="breadcrumb-item active" aria-current="page">Form</li>
      </ol>
    </nav>
    <div class="card shadow">
      <div class="card-body">
        <form class="form" method="POST" @submit.prevent="createProduct" novalidate>
          <div class="row">
            <div class="col-7">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="name"
                  placeholder="name"
                  required="required"
                />
                <label for="name">Nome</label>
              </div>
            </div>
            <div class="col-2 offset-1">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="price"
                  v-model="price"
                  placeholder="0,00"
                  required="required"
                />
                <label for="name">R$ Preço</label>
              </div>
            </div>
            <div class="col-2">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="oferta"
                  v-model="oferta"
                  placeholder="0,00"
                  required="required"
                />
                <label for="oferta">R$ Oferta</label>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-purple1 rounded-pill px-4">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
import navbar from "../Navbar.vue";
import $ from "jquery";

export default {
  data() {
    return {
      name: null,
      price: null,
      oferta: null,
    };
  },
  components: {
    navbar,
  },
  directives: { mask },
  methods: {
    async createProduct(e) {
      if ($("#name").val() === "" || $("#price").val() === "") {
        e.preventDefault();
        e.target.classList.add("was-validated");
      } else {
        const data = {
          name: this.name,
          price: this.price,
          oferta: this.oferta,
        };

        const dataJson = JSON.stringify(data);

        await fetch("http://localhost:3000/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: dataJson,
        });

        window.location.href = "/products";
      }
    },
  },
};
</script>

<style scoped>
a {
  color: #5f4a8c;
}

input {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}
</style>
