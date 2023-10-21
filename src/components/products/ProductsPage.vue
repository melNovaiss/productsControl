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
            <tr v-for="p in products" :key="p.id">
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
                    @click="updateProduct(p.id)"
                  >
                    <i class="bi bi-pencil-square"></i>
                  </button>
                  <button type="button" class="btn btn-sm btn-info text-white">
                    <i class="bi bi-box-seam"></i>
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
export default {
  name: "productPage",
  data() {
    return {
      products: null,
      product_id: null,
      price: null,
      oferta: null,
      status: null,
    };
  },
  methods: {
    async getProducts() {
      const req = await fetch("http://localhost:3000/products");
      const data = await req.json();
      this.products = data;
    },
    async updateProduct(event, id) {
      const option = event.target.value;

      const dataJson = JSON.stringify({ status: option });

      const req = await fetch(`http://localhost:3000/products/form/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      const res = await req.json();
      console.log(res);
    },
    async deleteProduct(id) {
      const req = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });
      await req.json();
      this.getProducts();
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
