<template>
  <div class="chart-information" :class="{'double':chartInfo.length >=2}" v-if="chartInfo">
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
      type: Array
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
    font-size: 80px;
    font-weight: 700;
    margin-bottom: 22px;
    .unit {
      font-size: 30px;
      font-weight: 600;
    }
  }
  .describe {
    @include font_color("font_color_light");
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
    @include font_color("font_color_light");
    font-size: 30px;
    font-weight: 600;
  }
}
</style>