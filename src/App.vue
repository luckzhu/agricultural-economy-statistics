<template>
  <div id="app">
    <full-screen-container>
      <div>
        <button @click="toggleTheme(1)">浅底</button>
        <button @click="toggleTheme(0)">深底</button>
      </div>
      <router-view />
    </full-screen-container>
  </div>
</template>

<script>
import FullScreenContainer from "@/components/FullScreenContainer";

export default {
  name: "App",
  components: {
    FullScreenContainer
  },
  methods: {
    toggleTheme(index) {
      window.document.documentElement.setAttribute("data-theme", index ? "dark" : "light");
    }
  }
};
</script>



<style lang="scss" scoped>
@import "@/styles/_handle.scss";
</style>

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
