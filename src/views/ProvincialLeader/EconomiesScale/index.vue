<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="10" class="grid-wrapper">
        <border-box1 class="grid-content">
          <overall-scale id="overallScale" height="51.875rem" :chartData="overallScale" />
        </border-box1>
      </el-col>
      <el-col :span="14" class="grid-wrapper">
        <border-box1 class="grid-content mix-chart-wrapper">
          <bar-normal id="size-bar" height="25.6rem" title="地区规模" :chartData="sectionSize.city" />
          <pie-normal
            id="size-pie"
            height="21.875rem"
            width="21.875rem"
            :chartData="sectionSize.region"
          />
        </border-box1>
        <border-box1 class="grid-content mix-chart-wrapper">
          <bar-normal
            id="revenue-bar"
            height="25.6rem"
            title="企均营收"
            unit="亿元/家"
            :chartData="averageRevenue.city"
          />
          <pie-normal
            id="revenue-pie"
            height="21.875rem"
            width="21.875rem"
            :chartData="averageRevenue.region"
          />
        </border-box1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BorderBox1 from "@/components/BorderBox/borderBox1";
import BarNormal from "@/components/Echarts/bar-normal";
import PieNormal from "@/components/Echarts/pie-normal";
import OverallScale from "./components/OverallScale.vue";

import { getGraph } from "@/api/industrySurvey";

export default {
  components: {
    BorderBox1,
    BarNormal,
    PieNormal,
    OverallScale
  },
  data() {
    return {
      year: 2018,
      tabId: 5,
      graphPage: null,
      sectionSize: {},
      averageRevenue: {},
      overallScale:{}
    };
  },
  mounted() {
    this.getGraphPage().then(() => {
      this.converData("sectionSize");
      this.converData("averageRevenue");
      this.converData("overallScale");
    });
  },
  methods: {
    getGraphPage() {
      const { year, tabId } = this;
      return getGraph({ year, tabId }).then(res => {
        this.graphPage = res.data.info;
        console.log(this.graphPage);
      });
    },
    converData(field) {
      const data = _.get(this.graphPage, field);
      if (field.indexOf(".") !== -1) {
        field = this.dotToCamelCase(field);
      }
      this[field] = data;
    },
    //转成驼峰命名
    dotToCamelCase(sName) {
      return sName.replace(/\.[a-z]/g, function(a, b) {
        return b == 0 ? a.replace(".", "") : a.replace(".", "").toUpperCase();
      });
    }
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