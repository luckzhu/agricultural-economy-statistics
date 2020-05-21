<template>
  <div>
    <el-row :gutter="10">
      <el-col
        :span="12"
        class="grid-wrapper"
      >
        <border-box1 class="grid-content">
          <drive-farmers-count
            v-if="driveFarmersCount"
            :chart-data="driveFarmersCount"
          />
        </border-box1>
        <border-box1 class="grid-content">
          <overall-benefit :table-data="overallBenefit" />
        </border-box1>
      </el-col>
      <el-col
        :span="12"
        class="grid-wrapper"
      >
        <border-box1 class="grid-content">
          <drive-farmers
            id="driveBenefit"
            :chart-data="driveFarmers.prodStructure"
            height="25.6rem"
          />
        </border-box1>
        <border-box1 class="grid-content">
          <company-rank
            id="companyRank"
            :chart-data="companyRank"
            height="25.6rem"
          />
        </border-box1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import OverallBenefit from "./components/OverallBenefit";
import CompanyRank from "./components/CompanyRank";
import DriveFarmers from "./components/DriveFarmers";
import DriveFarmersCount from "./components/DriveFarmersCount";

import getData from "@/mixin/getData.js";

export default {
  components: {
    OverallBenefit,
    CompanyRank,
    DriveFarmers,
    DriveFarmersCount
  },
  mixins: [getData],
  data() {
    return {
      tabId: 10,
      fields: ["overallBenefit", "driveFarmers", "companyRank", "driveFarmersCount"],
      overallBenefit: [],
      driveFarmers: {
        prodStructure: []
      },
      companyRank: [],
      driveFarmersCount: null
    };
  }
};
</script>

<style lang="scss" scoped>
</style>