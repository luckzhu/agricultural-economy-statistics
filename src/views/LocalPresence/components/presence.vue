<template>
  <div class="presence" v-if="chartData.name">
    <county-map :id="`${chartData.name}`+'map'" :city="chartData.name" height="25.6rem" />
    <county-pie
      :id="chartData.name"
      :chartData="chartData.industry"
      class="county-pie"
      height="20rem"
      width="20rem"
    />
    <div class="info">
      {{chartData.info}}
    </div>
  </div>
</template>

<script>
import CountyMap from "./county-map";
import CountyPie from "./county-pie";
export default {
  components: {
    CountyMap,
    CountyPie
  },
  props: {
    chartData: {}
  }
};
</script>

<style lang="scss" scoped>
.presence {
  position: relative;
  .county-pie {
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .info {
    position: absolute;
    right: 70px;
    bottom: 30px;
    width: 500px;
    text-align: left;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>