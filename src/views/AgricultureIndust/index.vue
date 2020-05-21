<template>
  <div class="mian-box">
    <div class="button-group">
      <router-link
        v-for="(button,index) in topButtons"
        :key="index"
        :to="`/agricultureIndust${button.path}`"
      >
        <el-button
          type="primary"
          plain
          :class="{'active':currentRoute.indexOf(button.path) !== -1}"
        >
          · {{ button.name }} ·
        </el-button>
      </router-link>
    </div>
    <div class="main-body">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "AgricultureIndust",
  data() {
    return {
      //TO DO 应写到the header里，和一级菜单在一起
      topButtons: [
        {
          name: "数量结构",
          path: "/quantityStructure"
        },
        {
          name: "组织规模",
          path: "/organSize"
        },
        {
          name: "基地分布",
          path: "/baseDistribution"
        }
      ]
    };
  },
  computed: {
    currentRoute() {
      return this.$route.path;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
