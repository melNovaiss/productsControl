<template>
  <productPage />
</template>

<script>
import navbar from "../components/Footer.vue";
import productPage from "../components/products/ProductsPage.vue";

export default {
  name: "products",
  components: {
    navbar,
    productPage,
  },
};
</script>
