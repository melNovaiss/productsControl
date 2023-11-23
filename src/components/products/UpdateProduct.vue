<template>
  <div class="container my-5">
    <div class="card shadow">
      <div class="card-body">
        <form class="form" method="POST" novalidate>
          <div class="row">
            <div class="col-7">
              <div class="form-floating mb-3">
                <input
                  v-model="productData.name"
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="name"
                />
                <label for="name">Nome</label>
              </div>
            </div>
            <div class="col-2 offset-1">
              <div class="form-floating mb-3">
                <input
                  v-model="productData.price"
                  type="text"
                  class="form-control"
                  id="price"
                  placeholder="0,00"
                />
                <label for="name">R$ Preço</label>
              </div>
            </div>
            <div class="col-2">
              <div class="form-floating mb-3">
                <input
                  v-model="productData.oferta"
                  type="text"
                  class="form-control"
                  id="oferta"
                  placeholder="0,00"
                />
                <label for="oferta">R$ Oferta</label>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <button @click="saveProduct" type="button" class="btn btn-purple1 rounded-pill px-4">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      productData: {
        name: "",
        price: "",
        oferta: "",
      },
    };
  },

  beforeRouteEnter(to, from, next) {
    const id = parseInt(to.params.id, 10);
    axios
      .get(`http://localhost:8080/products/form/${id}`)
      .then((response) => {
        next((vm) => {
          vm.productData = response.data;
        });
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
        next();
      });
  },

  methods: {
    async saveProduct() {
      if (!this.productData.name || !this.productData.price || !this.productData.oferta) {
        alert("Preencha todos os campos antes de salvar.");
        return;
      }

      const id = parseInt(this.$route.params.id, 10);

      if (isNaN(id)) {
        console.error("ID inválido.");
        return;
      }

      const data = {
        name: this.productData.name,
        price: this.productData.price,
        oferta: this.productData.oferta,
      };

      console.log(data);

      try {
        await axios.put(`http://localhost:8080/products/form/${id}`, data, {
          headers: { "Content-Type": "application/json" },
        });

        this.$router.push("/products");
      } catch (error) {
        console.error("Erro ao salvar produto:", error);
      }
    },
  },
};
</script>
