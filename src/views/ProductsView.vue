<template>
  <navbar />
  <productPage />
</template>

<script>
import navbar from "../components/Navbar.vue";
import productPage from "../components/products/ProductsPage.vue";

export default {
  name: "products",
  components: {
    navbar,
    productPage,
  },
};
</script>
