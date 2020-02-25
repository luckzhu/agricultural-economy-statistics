<template>
  <div class="mian-box">
    <div class="button-group">
      <router-link
        :to="`/provincialLeader${button.path}`"
        v-for="(button,index) in topButtons"
        :key="index"
      >
        <el-button
          type="primary"
          plain
          :class="{'active':currentRoute.indexOf(button.path) !== -1}"
        >· {{button.name}} ·</el-button>
      </router-link>
    </div>
    <div class="main-body">
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  name: "ProvincialLeader",
  data() {
    return {
      topButtons: [
        {
          name: "企业数量",
          path: "/enterpriseNumber"
        },
        {
          name: "规模效益",
          path: "/economiesScale"
        },
        {
          name: "产业结构及基地建设",
          path: "/industrialAndBase"
        },
        {
          name: "加工情况",
          path: "/processingConditions"
        },
        {
          name: "资金及外贸",
          path: "/capitalAndTrade"
        },
        {
          name: "质量保障",
          path: "/qualityAssurance"
        },
        {
          name: "带动情况及企业排名",
          path: "/driveAndRanking"
        }
      ]
    };
  },
  computed: {
    currentRoute() {
      return this.$route.path;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
