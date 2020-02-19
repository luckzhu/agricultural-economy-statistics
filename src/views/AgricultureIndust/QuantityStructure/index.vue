<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <organ-type :chartData="organType" />
        </border-box1>
        <border-box1 class="grid-content">
          <indust-dist :chartData="industryDist" />
        </border-box1>
      </el-col>
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <benefit-bind :chartData="benefitBind" />
        </border-box1>
        <border-box1 class="grid-content">
          <areal-dist id="ArealDist" height="25.625rem" :chartData="arealDistcity" />
        </border-box1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BorderBox1 from "@/components/BorderBox/borderBox1";
import OrganType from "./components/OrganType";
import BenefitBind from "./components/BenefitBind";
import IndustDist from "./components/IndustDist";
import ArealDist from "./components/ArealDist";

import { getGraph } from "@/api/industrySurvey";

export default {
  components: {
    BorderBox1,
    OrganType,
    BenefitBind,
    IndustDist,
    ArealDist
  },
  data() {
    return {
      year: 2018,
      tabId: 1,
      graphPage1: null,
      organType: [],
      benefitBind: [],
      industryDist: [],
      arealDistcity: []
    };
  },
  mounted() {
    this.getGraphPage1().then(() => {
      this.converData("organType");
      this.converData("benefitBind");
      this.converData("industryDist");
      this.converData("arealDist.city");
    });
  },
  methods: {
    getGraphPage1() {
      const { year, tabId } = this;
      return getGraph({ year, tabId }).then(res => {
        this.graphPage1 = res.data.info;
      });
    },
    converData(field) {
      const data = _.get(this.graphPage1, field, []);
      this[field] = Object.values(data).filter(data => data.value !== 9233); //TO DO 后台删掉总数这个字段为佳
      this[field].sort(this.compare("value"));

      //判断是不是数组
      if (Object.prototype.toString.call(data).slice(8, -1) === "Array") {
        this[field.replace(".", "")] = data;
      }
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
</style>
