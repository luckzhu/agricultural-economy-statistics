<template>
  <div>
    <el-row :gutter="10">
      <el-col
        :span="12"
        class="grid-wrapper"
      >
        <border-box1 class="grid-content">
          <industrial-structure
            id="industryStructure"
            height="25.6rem"
            :chart-data="industryStructure"
          />
        </border-box1>
        <border-box1 class="grid-content">
          <base-construction
            id="baseConstruction"
            height="25.6rem"
            :chart-data="baseConstruction"
          />
        </border-box1>
      </el-col>
      <el-col
        :span="12"
        class="grid-wrapper"
      >
        <border-box1 class="grid-content">
          <company-type
            id="companyType"
            height="25.6rem"
            :chart-data="companyType"
          />
        </border-box1>
        <border-box1 class="grid-content">
          <base-output
            id="baseOutputOutput"
            height="25.6rem"
            :chart-data="baseOutputOutput"
          />
          <!-- <base-output-field
            id="baseOutputField"
            height="25.6rem"
            width="58.4375rem"
            class="base-output-field"
          />-->
        </border-box1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CompanyType from "./components/CompanyType";
import IndustrialStructure from "./components/IndustrialStructure";
import BaseConstruction from "./components/BaseConstruction";
import BaseOutput from "./components/BaseOutput";

import getData from "@/mixin/getData.js";

export default {
  components: {
    CompanyType,
    IndustrialStructure,
    BaseConstruction,
    BaseOutput,
  },
  mixins: [getData],
  data() {
    return {
      tabId: 6,
      fields: ["baseConstruction", "baseOutput.output", "industryStructure", "companyType", "industryStructure"],
      baseConstruction: [],
      baseOutputOutput: [],
      industryStructure: {},
      companyType: {}
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_handle.scss";

.title-wrapper {
  position: relative;
  font-size: 18px;
  font-weight: 600;
  @include font_color("font_color_primary");
  .title-1 {
    position: absolute;
    top: 260px;
    left: 160px;
  }
  .title-2 {
    position: absolute;
    top: 260px;
    right: 160px;
  }
  .title-3 {
    position: absolute;
    top: 320px;
    left: 160px;
  }
  &.industrial {
    .title-1 {
      top: 50px;
    }
    .title-2 {
      top: 50px;
    }
    .title-3 {
      top: 260px;
      left: 370px;
    }
  }
}
.grid-content {
  position: relative;
  .base-output-field {
    position: absolute;
    left: 0;
    top: 0;
    // z-index: 2;
  }
}
</style>