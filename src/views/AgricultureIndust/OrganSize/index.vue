<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <chart-info :chartInfo="fixAssets.info" />
          <bar-horizontal id="fixAssets" height="25.625rem" :chartData="fixAssets.sort" />
        </border-box1>
        <border-box1 class="grid-content">
          <chart-info :chartInfo="organSales.info" />
          <bar-horizontal id="organSales" height="25.625rem" :chartData="organSales.sort" />
        </border-box1>
      </el-col>
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <div class="grid-content">
            <chart-info :chartInfo="leadingSales.info" />
            <bar-horizontal id="leadingSales" height="25.625rem" :chartData="leadingSales.sort" />
          </div>
        </border-box1>
        <border-box1 class="grid-content">
          <chart-info :chartInfo="marketTurnover.info" />
          <bar-horizontal id="marketTurnover" height="25.625rem" :chartData="marketTurnover.sort" />
        </border-box1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BorderBox1 from "@/components/BorderBox/borderBox1";
import BarHorizontal from "@/components/Echarts/bar-horizontal";
import chartInfo from "@/components/Echarts/chart-info";

import { getGraph } from "@/api/industrySurvey";

export default {
  components: {
    BorderBox1,
    BarHorizontal,
    chartInfo
  },
  data() {
    return {
      year: 2018,
      tabId: 2,
      graphPage2: null,
      fixAssets: {},
      leadingSales: {},
      organSales: {},
      marketTurnover: {}
    };
  },
  mounted() {
    this.getGraphPage2().then(() => {
      this.converData("fixAssets");
      this.converData("leadingSales");
      this.converData("organSales");
      this.converData("marketTurnover");
    });
  },
  methods: {
    getGraphPage2() {
      const { year, tabId } = this;
      return getGraph({ year, tabId }).then(res => {
        this.graphPage2 = res.data.info;
      });
    },
    converData(field) {
      this[field] = this.graphPage2[field];
    },
    compare(property) {
      return function(a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value2 - value1;
      };
    }
  }
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
