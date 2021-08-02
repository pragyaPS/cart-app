import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requireAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: { authorized: true },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
    meta: { authorized: true },
  },
  {
    path: "/product/:itemId",
    name: "Product",
    meta: { requireAuth: true },

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Product.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  let user = JSON.parse(localStorage.getItem("user"));
  if (to.meta.requireAuth) {
    if (!user) {
      next({ path: "/login" });
    } else {
      next();
    }
  } else if (to.meta.authorized) {
    if (user) {
      next({ path: "/" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
