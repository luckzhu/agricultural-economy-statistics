<template>
  <div id="app">
    <full-screen-container>
      <div>
        <button @click="toggleTheme(0)">浅底</button>
        <button @click="toggleTheme(1)">深底</button>
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
      this.$store.commit("charts/SET_ECHARTS_STYLE", index ? "dark" : "light");
      this.$store.commit(
        "charts/SET_BORDERBOX_COLOR",
        index
          ? {
              start: "#11eefd",
              end: "#0078d2"
            }
          : {
              start: "#333",
              end: "#444"
            }
      );
      this.$store.commit(
        "charts/SET_COLORS",
        index
          ? ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"]
          : ["#c1232b", "#27727b", "#fcce10", "#e87c25", "#b5c334", "#fe8463", "#9bca63", "#fad860", "#f3a43b", "#60c0dd", "#d7504b", "#c6e579", "#f4e001", "#f0805a", "#26c0c0"]
      );
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
