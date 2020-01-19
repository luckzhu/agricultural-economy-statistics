<template>
  <div id="app">
    <!-- <full-screen-container> -->
    <el-container>
      <el-header height="140px">
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

html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app {
  // font-family: MicrosoftYaHei, "Avenir", Helvetica, Arial, sans-serif;
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
