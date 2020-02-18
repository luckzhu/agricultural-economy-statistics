<template>
  <div class="layout">
    <el-container>
      <el-header height="140px">
        <the-header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
export default {
  name: "Layout",
  components: {
    TheHeader
  }
};
</script>

<style lang="scss" scoped>
.layout {
  // font-family: MicrosoftYaHei, "Avenir", Helvetica, Arial, sans-serif;
  height: 100%;
  text-align: center;
  color: #fff;
  background-color: $primary-background-color;
  line-height: 100%;
  .el-header {
    height: 140px !important;
    padding: 0;
  }
  .el-main {
    padding: 0;
    // line-height: 87.04vh;
  }
}
</style>
