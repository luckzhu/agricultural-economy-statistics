<template>
  <div class="mian-box">
    <div class="button-group">
      <router-link
        :to="`/agricultureIndust${button.path}`"
        v-for="(button,index) in topButtons"
        :key="index"
      >
        <el-button type="primary" plain>· {{button.name}} ·</el-button>
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
  }
};
</script>

<style lang="scss" scoped>
</style>
