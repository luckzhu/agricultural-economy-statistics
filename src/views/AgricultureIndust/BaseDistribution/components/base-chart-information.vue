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
  color: #fff;

  .value {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 22px;
    .unit {
      font-size: 20px;
      font-weight: 600;
    }
  }
  .describe {
    color: #1bced4;
    font-size: 20px;
    font-weight: 600;
    white-space: nowrap;
  }
}
</style>