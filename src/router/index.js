import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Layout from "@/layout/index";

const routes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },
  {
    path: "/",
    component: Layout,
    redirect: "/agricultureIndust/quantityStructure",
    children: [
      {
        path: "agricultureIndust",
        redirect: "/agricultureIndust/quantityStructure",
        component: () => import("@/views/AgricultureIndust/index.vue"),
        children: [
          {
            path: "quantityStructure",
            name: "QuantityStructure",
            component: () => import("@/views/AgricultureIndust/QuantityStructure/index.vue")
          },
          {
            path: "organSize",
            name: "OrganSize",
            component: () => import("@/views/AgricultureIndust/OrganSize/index.vue")
          },
          {
            path: "baseDistribution",
            name: "BaseDistribution",
            component: () => import("@/views/AgricultureIndust/BaseDistribution/index.vue")
          }
        ]
      },
      {
        path: "provincialLeader",
        redirect: "/provincialLeader/enterpriseNumber",
        component: () => import("@/views/ProvincialLeader/index.vue"),
        children: [
          {
            path: "enterpriseNumber",
            name: "EnterpriseNumber",
            component: () => import("@/views/ProvincialLeader/EnterpriseNumber/index.vue")
          },
          {
            path: "economiesScale",
            name: "EconomiesScale",
            component: () => import("@/views/ProvincialLeader/EconomiesScale/index.vue")
          },
          {
            path: "industrialAndBase",
            name: "IndustrialAndBase",
            component: () => import("@/views/ProvincialLeader/IndustrialAndBase/index.vue")
          },
          {
            path: "processingConditions",
            name: "ProcessingConditions",
            component: () => import("@/views/ProvincialLeader/ProcessingConditions/index.vue")
          },
          {
            path: "capitalAndTrade",
            name: "CapitalAndTrade",
            component: () => import("@/views/ProvincialLeader/CapitalAndTrade/index.vue")
          },
          {
            path: "qualityAssurance",
            name: "QualityAssurance",
            component: () => import("@/views/ProvincialLeader/QualityAssurance/index.vue")
          },
          {
            path: "driveAndRanking",
            name: "DriveAndRanking",
            component: () => import("@/views/ProvincialLeader/DriveAndRanking/index.vue")
          }
        ]
      },
      {
        path: "localPresence",
        redirect: "/localPresence/county1",
        component: () => import("@/views/LocalPresence/index.vue"),
        children: [
          {
            path: "county1",
            name: "County1",
            component: () => import("@/views/LocalPresence/County1.vue")
          },
          {
            path: "county2",
            name: "County2",
            component: () => import("@/views/LocalPresence/County2.vue")
          },
          {
            path: "county3",
            name: "County3",
            component: () => import("@/views/LocalPresence/County3.vue")
          },
          {
            path: "county4",
            name: "County4",
            component: () => import("@/views/LocalPresence/County4.vue")
          },
          {
            path: "county5",
            name: "County5",
            component: () => import("@/views/LocalPresence/County5.vue")
          },
          {
            path: "county6",
            name: "County6",
            component: () => import("@/views/LocalPresence/County6.vue")
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
