import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/agricultureIndust",
    redirect: "/agricultureIndust/quantityStructure",
    component: () => import("@/views/AgricultureIndust/index.vue"),
    children: [
      {
        path: "quantityStructure",
        name: "QuantityStructure",
        component: () => import("@/views/AgricultureIndust/QuantityStructure/index.vue")
      },
      {
        path: "organizationSize",
        name: "OrganizationSize",
        component: () => import("@/views/AgricultureIndust/OrganizationSize/index.vue")
      },
      {
        path: "baseDistribution",
        name: "BaseDistribution",
        component: () => import("@/views/AgricultureIndust/BaseDistribution/index.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
