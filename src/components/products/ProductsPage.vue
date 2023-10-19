<template>
  <div class="container my-5">
    <div class="d-flex justify-content-between">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb pt-2">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Products</li>
        </ol>
      </nav>
      <a href="products/form" class="btn btn-purple1 text-white mb-2"
        >Adicionar</a
      >
    </div>
    <div class="card shadow">
      <div class="card-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Produtos</th>
              <th scope="col">R$ Preço</th>
              <th scope="col">R$ Preço</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productPage",
};
</script>

<style scoped>
a {
  color: #5f4a8c;
}
</style>
