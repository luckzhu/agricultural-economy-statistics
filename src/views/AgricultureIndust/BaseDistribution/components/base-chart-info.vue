<template>
  <div class="chart-information" :class="{'double':chartInfo.length >=2}">
    <div class="chart-info-part" v-for="(info,index) in chartInfo" :key="index">
      <p class="value">
        {{info.value}}
        <span class="unit">{{info.unit}}</span>
      </p>
      <span class="describe">{{info.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chartInfo: {
      type: Array,
      default() {
        return [
          {
            value: 1367,
            unit: "亿元",
            name: "固定资产净值"
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
@import "@/styles/_handle.scss";

.chart-information {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @include font_color("font_color_primary");

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
    @include font_color("font_color_light");

    font-size: 19px;
    font-weight: 600;
    white-space: nowrap;
  }
}
</style>