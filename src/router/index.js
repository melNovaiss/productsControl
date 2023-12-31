import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../views/ProductsView.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/products/form",
    name: "productForm",
    component: () => import("../components/products/ProductForm.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/products/form/:id",
    name: "updateProduct",
    component: () => import("../components/products/ProductForm.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("userLoggedIn");

  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login");
    alert("Faça o login para acesar a página.")
  } else {
    next();
  }
});

export default router;
