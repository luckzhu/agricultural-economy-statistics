<template>
  <div id="app">
    <!-- <full-screen-container> -->
    <router-view />
    <!-- </full-screen-container> -->
  </div>
</template>

<script>
// import FullScreenContainer from "@/components/FullScreenContainer";

export default {
  name: "App",
  components: {
    // FullScreenContainer,
  }
};
</script>

<style lang="scss">
@import "@/styles/reset.scss";

html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
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
