import { createRouter, createWebHistory } from "vue-router";

//ルーティング
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/sample",
      name: "sample",
      component: () => import("../views/Sample.vue"),
    },
  ],
});

export default router;
