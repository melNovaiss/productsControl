<template>
  <div class="container my-5">
    <div class="d-flex justify-content-between">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb pt-2">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Products</li>
        </ol>
      </nav>
      <a href="products/form" class="btn btn-purple1 text-white mb-2">Adicionar</a>
    </div>
    <div class="card shadow">
      <div class="card-body">
        <div class="d-flex justify-content-end">
          <nav aria-label="Page navigation">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous" @click="previousPage">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li
                class="page-item"
                v-for="page in totalPages"
                :key="page"
                :class="{ active: page === currentPage }"
              >
                <a class="page-link" href="#" @click="changePage(page)">{{ page }}</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next" @click="nextPage">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <table class="table table-striped" v-if="products && products.length > 0">
          <thead>
            <tr>
              <th scope="col">Cód.</th>
              <th scope="col">Produtos</th>
              <th scope="col">R$ Preço</th>
              <th scope="col">R$ Oferta</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="p in filteredProducts" :key="p.id">
              <td>{{ p.id }}</td>
              <td>{{ p.name }}</td>
              <td>{{ p.price }}</td>
              <td>{{ p.oferta }}</td>
              <td class="d-flex justify-content-end">
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                  <button
                    type="button"
                    class="btn btn-sm btn-danger"
                    @click="deleteProduct(p.id)"
                  >
                    <i class="bi bi-trash-fill"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-warning text-white"
                    @click="updateProduct(p.id, p.status)"
                  >
                    <i class="bi bi-pencil-square"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div v-else>
          <span
            ><i class="bi bi-x-circle text-danger"></i> Não há produtos cadastrados.</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "productPage",
  data() {
    return {
      products: [],
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.products.length / this.itemsPerPage);
    },
    filteredProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.products.slice(start, end);
    },
  },
  methods: {
    async getProducts() {
      try {
        const response = await axios.get("http://localhost:8080/products");
        this.products = response.data;
      } catch (error) {
        console.error("Erro ao obter os produtos:", error);
      }
    },
    async updateProduct(id, option) {
      try {
        const response = await axios.patch(`http://localhost:8080/products/${id}`, {
          status: option,
        });
        if (response.status === 200) {
          console.log(response.data);
          this.$router.push({ name: "updateProduct", params: { id } });
        } else {
          console.error("Erro ao atualizar o produto. Status:", response.status);
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    },
    async deleteProduct(id) {
      try {
        await axios.delete(`http://localhost:8080/products/${id}`);
        this.getProducts();
      } catch (error) {
        console.error("Erro ao excluir o produto:", error);
      }
    },
    changePage(page) {
      this.currentPage = page;
    },
    previousPage() {
      this.currentPage = 1;
    },
    nextPage() {
      this.currentPage = this.totalPages;
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style scoped>
a {
  color: #5f4a8c;
}
</style>

<style scoped>
a {
  color: #5f4a8c;
}
</style>
