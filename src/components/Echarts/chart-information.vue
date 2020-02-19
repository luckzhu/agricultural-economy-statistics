<template>
  <div class="chart-information" :class="{'double':chartInformation.length >=2}">
    <div class="chart-info-part" v-for="(info,index) in chartInformation" :key="index">
      <p class="value">
        {{info.value}}
        <span class="unit">{{info.unit}}</span>
      </p>
      <span class="describe">{{info.describe}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chartInformation: {
      type: Array,
      default() {
        return [
          {
            value: 1367,
            unit: "亿元",
            describe: "固定资产净值"
          }
        ];
      }
    }
  },
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.chart-information {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: $primary-font-color;

  .value {
    font-size: 80px;
    font-weight: 700;
    margin-bottom: 22px;
    .unit {
      font-size: 30px;
      font-weight: 600;
    }
  }
  .describe {
    color: $light-font-color;
    font-size: 40px;
    font-weight: 600;
  }
}
.chart-information.double {
  .chart-info-part {
    &:first-child {
      margin-bottom: 34px;
    }
  }
  .value {
    font-size: 60px;
    font-weight: 700;
    .unit {
      font-size: 20px;
      font-weight: 600;
    }
  }
  .describe {
    color: $light-font-color;
    font-size: 30px;
    font-weight: 600;
  }
}
</style>