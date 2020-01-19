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
          path: "/organizationSize"
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
.mian-box {
  padding: 20px;
}
.button-group {
  height: 50px;
  .el-button {
    margin: 0 18px;
    font-size: 18px;
  }
  .el-button--primary.is-plain {
    color: #00fbff;
    background: #13345e;
    border-color: #00fbff;
    padding: 12px 34px;
  }
  .el-button--primary.is-plain:focus,
  .el-button--primary.is-plain:hover {
    color: #ffffff;
    background: #0090b3;
    border-color: #00fbff;
  }
}
.main-body {
  padding-top: 20px;
  height: 830px;
  width: 100%;
}
</style>
