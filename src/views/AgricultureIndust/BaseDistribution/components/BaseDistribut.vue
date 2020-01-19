<template>
  <div class="base-distribut">
    <chart-information :chartInformation="chartData.info" />
    <bar-pictorial :id="id" height="12.5rem" :chartData="chartData" />
  </div>
</template>

<script>
import BarPictorial from "@/components/Echarts/bar-pictorial";
import chartInformation from "./base-chart-information";

export default {
  components: {
    BarPictorial,
    chartInformation
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
    width: 220px;
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
