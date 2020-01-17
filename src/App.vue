<template>
  <div id="app">
    <full-screen-container>
      <the-header />
      <router-view />
    </full-screen-container>
  </div>
</template>

<script>
import FullScreenContainer from "@/components/FullScreenContainer";
import TheHeader from "@/components/TheHeader";
export default {
  name: "App",
  components: { FullScreenContainer, TheHeader }
};
</script>
