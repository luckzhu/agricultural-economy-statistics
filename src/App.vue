<template>
  <div id="app">
    <full-screen-container>
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
  data() {
    return {
      style: localStorage.getItem("style") || "dark",

      borderBoxColorLight: {
        start: "#333",
        end: "#444"
      },
      borderBoxColorDark: {
        start: "#11eefd",
        end: "#0078d2"
      },
      colorsLight: ["#c1232b", "#27727b", "#fcce10", "#e87c25", "#b5c334", "#fe8463", "#9bca63", "#fad860", "#f3a43b", "#60c0dd", "#d7504b"],
      colorsDark: ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"]
    };
  },
  mounted() {
    window.document.documentElement.setAttribute("data-theme", this.style);
    this.$store.commit("charts/SET_ECHARTS_STYLE", this.style === "dark" ? "dark" : "light");
    this.$store.commit("charts/SET_BORDERBOX_COLOR", this.style === "dark" ? this.borderBoxColorDark : this.borderBoxColorLight);
    this.$store.commit("charts/SET_COLORS", this.style === "dark" ? this.colorsDark : this.colorsLight);
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
