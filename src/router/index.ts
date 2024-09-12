import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import FormPage from "@/views/FormPage.vue";
import PreviewPage from "@/views/PreviewPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: FormPage,
  },
  {
    path: "/preview",
    name: "preview",
    component: PreviewPage,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "home" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
