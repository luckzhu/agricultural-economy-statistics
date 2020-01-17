<template>
  <div id="app">
    <!-- <full-screen-container> -->
    <el-container>
      <el-header height="12.96vh">
        <the-header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
    <!-- </full-screen-container> -->
  </div>
</template>

<script>
// import FullScreenContainer from "@/components/FullScreenContainer";
import TheHeader from "@/components/TheHeader";
export default {
  name: "App",
  components: {
    // FullScreenContainer,
    TheHeader
  }
};
</script>

<style lang="scss">
@import "@/styles/variable.scss";
@import "@/styles/reset.scss";

#app {
  // font-family: MicrosoftYaHei, "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #fff;
  background-color: $primary-background-color;
  .el-header {
    // line-height: 12.96vh;
    padding: 0;
  }
  .el-main {
    padding: 0;
    // line-height: 87.04vh;
  }
}
.xy-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.xy-center-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
