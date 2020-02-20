<template>
  <div class="base-distribut" >
    <chart-info :chartInfo="chartData.info" v-if="chartData.info"/>
    <bar-pictorial :id="id" height="12.9rem" :chartData="chartData" v-if="chartData.sort" />
  </div>
</template>

<script>
import BarPictorial from "@/components/Echarts/bar-pictorial";
import chartInfo from "./base-chart-info";

export default {
  components: {
    BarPictorial,
    chartInfo
  },
  props: {
    id: {
      type: String,
      default: "chart"
    },
    chartData: {
      type: Object
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.base-distribut {
  position: relative;
  .chart-information {
    width: 230px;
    position: absolute;
    left: 20px;
    top: 60%;
    transform: translateY(-50%);
  }
}
</style>
