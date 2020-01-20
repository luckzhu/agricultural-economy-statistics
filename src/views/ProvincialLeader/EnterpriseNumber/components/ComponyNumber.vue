<template>
  <div>
    <map-leader :height="height" />
  </div>
</template>

<script>
import MapLeader from "./MapLeader";
export default {
  components: {
    MapLeader
  },
  props: {
    height: {
      type: String,
      default: "350px"
    }
  }
};
</script>

<style lang="scss" scoped>
</style>