import { createRouter, createWebHistory } from "vue-router";

const newLocal = "../views/home.vue";
const newLocal_1 = "../views/sample.vue";
//ルーティング
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import(newLocal),
    },
    {
      path: "/sample",
      name: "sample",
      component: () => import(newLocal_1),
    },
  ],
});

export default router;
