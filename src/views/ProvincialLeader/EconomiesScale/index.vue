<template>
  <div>
    <el-row :gutter="10">
      <el-col
        :span="10"
        class="grid-wrapper"
      >
        <border-box1 class="grid-content double">
          <overall-scale
            id="overallScale"
            height="51.625rem"
            :chart-data="overallScale"
          />
        </border-box1>
      </el-col>
      <el-col
        :span="14"
        class="grid-wrapper"
      >
        <border-box1 class="grid-content mix-chart-wrapper">
          <bar-normal
            id="size-bar"
            height="25.6rem"
            title="地区规模"
            :chart-data="sectionSize.city"
          />
          <pie-normal
            id="size-pie"
            height="21.875rem"
            width="21.875rem"
            :chart-data="sectionSize.region"
          />
        </border-box1>
        <border-box1 class="grid-content mix-chart-wrapper">
          <bar-normal
            id="revenue-bar"
            height="25.6rem"
            title="企均营收"
            unit="亿元/家"
            :chart-data="averageRevenue.city"
          />
          <pie-normal
            id="revenue-pie"
            height="21.875rem"
            width="21.875rem"
            :chart-data="averageRevenue.region"
          />
        </border-box1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BarNormal from "@/components/Echarts/bar-normal";
import PieNormal from "@/components/Echarts/pie-normal";
import OverallScale from "./components/OverallScale.vue";

import getData from "@/mixin/getData.js";

export default {
  components: {
    BarNormal,
    PieNormal,
    OverallScale
  },
  mixins: [getData],
  data() {
    return {
      tabId: 5,
      graphPage: null,
      sectionSize: {},
      averageRevenue: {},
      overallScale: {},
      fields: ["sectionSize", "averageRevenue", "overallScale"]
    };
  }
};
</script>

<style lang="scss" scoped>
.mix-chart-wrapper {
  position: relative;
  #size-pie,
  #revenue-pie {
    position: absolute;
    right: 30px;
    top: -20px;
  }
}
</style>