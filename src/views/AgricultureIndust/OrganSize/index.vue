<template>
  <div>
    <el-row :gutter="10">
      <el-col
        :span="12"
        class="grid-wrapper"
      >
        <border-box1 class="grid-content">
          <chart-info :chart-info="fixAssets.info" />
          <bar-horizontal
            id="fixAssets"
            height="25.6rem"
            :chart-data="fixAssets.sort"
          />
        </border-box1>
        <border-box1 class="grid-content">
          <chart-info :chart-info="organSales.info" />
          <bar-horizontal
            id="organSales"
            height="25.6rem"
            :chart-data="organSales.sort"
            title="农业产业化合作组织销售收入"
          />
        </border-box1>
      </el-col>
      <el-col
        :span="12"
        class="grid-wrapper"
      >
        <border-box1 class="grid-content">
          <div class="grid-content">
            <chart-info :chart-info="leadingSales.info" />
            <bar-horizontal
              id="leadingSales"
              height="25.6rem"
              :chart-data="leadingSales.sort"
              title="农业产业化龙头企业销售收入"
            />
          </div>
        </border-box1>
        <border-box1 class="grid-content">
          <chart-info :chart-info="marketTurnover.info" />
          <bar-horizontal
            id="marketTurnover"
            height="25.6rem"
            :chart-data="marketTurnover.sort"
            title="农业产业化专业市场交易额"
          />
        </border-box1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BarHorizontal from "@/components/Echarts/bar-horizontal";
import chartInfo from "@/components/Echarts/chart-info";

import getData from "@/mixin/getData.js";

export default {
  components: {
    BarHorizontal,
    chartInfo
  },
  mixins: [getData],
  data() {
    return {
      tabId: 2,
      fixAssets: {},
      leadingSales: {},
      organSales: {},
      marketTurnover: {},
      fields: ["fixAssets", "leadingSales", "organSales", "marketTurnover"]
    };
  },

};
</script>

<style lang="scss" scoped>
.grid-content {
  position: relative;
  .chart-information {
    position: absolute;
    right: 50px;
    bottom: 32px;
  }
}
</style>
