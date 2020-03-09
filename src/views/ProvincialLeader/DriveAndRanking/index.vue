<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <drive-farmers-count :chartData="driveFarmersCount" v-if="driveFarmersCount" />
        </border-box1>
        <border-box1 class="grid-content">
          <overall-benefit :tableData="overallBenefit" />
        </border-box1>
      </el-col>
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <drive-farmers
            id="driveBenefit"
            :chartData="driveFarmers.prodStructure"
            height="25.6rem"
          />
        </border-box1>
        <border-box1 class="grid-content">
          <company-rank id="companyRank" :chartData="companyRank" height="25.6rem" />
        </border-box1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BorderBox1 from "@/components/BorderBox/borderBox1";
import OverallBenefit from "./components/OverallBenefit";
import CompanyRank from "./components/CompanyRank";
import DriveFarmers from "./components/DriveFarmers";
import DriveFarmersCount from "./components/DriveFarmersCount";

import { getGraph } from "@/api/industrySurvey";

export default {
  components: {
    BorderBox1,
    OverallBenefit,
    CompanyRank,
    DriveFarmers,
    DriveFarmersCount
  },
  data() {
    return {
      year: 2018,
      tabId: 10,
      graphPage: null,
      fields: ["overallBenefit", "driveFarmers", "companyRank", "driveFarmersCount"],
      overallBenefit: [],
      driveFarmers: {
        prodStructure: []
      },
      companyRank: [],
      driveFarmersCount: null
    };
  },
  mounted() {
    this.getGraphPage().then(() => {
      this.fields.forEach(field => this.converData(field));
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
</style>