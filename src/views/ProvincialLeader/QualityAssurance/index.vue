<template>
  <div>
    <el-row :gutter="10">
      <el-col
        :span="12"
        class="grid-wrapper"
      >
        <border-box1 class="grid-content">
          <quality-safety
            v-if="qualitySafety"
            :chart-data="qualitySafety"
          />
        </border-box1>
        <border-box1 class="grid-content">
          <tech-innovation
            v-if="techInnovation"
            :chart-data="techInnovation"
          />
        </border-box1>
      </el-col>
      <el-col
        :span="12"
        class="grid-wrapper"
      >
        <border-box1 class="grid-content">
          <guarantee
            v-if="guarantee.length > 0"
            :chart-data="guarantee"
          />
        </border-box1>
        <border-box1 class="grid-content">
          <format-innovation
            id="formatInnovation"
            :chart-data="formatInnovation"
            height="25.6rem"
          />
        </border-box1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import QualitySafety from "./components/QualitySafety";
import Guarantee from "./components/Guarantee";
import FormatInnovation from "./components/FormatInnovation";
import TechInnovation from "./components/TechInnovation";

import getData from "@/mixin/getData.js";

export default {
  components: {
    QualitySafety,
    Guarantee,
    FormatInnovation,
    TechInnovation
  },
  mixins: [getData],
  data() {
    return {
      tabId: 9,
      fields: ["formatInnovation", "guarantee", "qualitySafety", "techInnovation"],
      formatInnovation: [],
      guarantee: [],
      qualitySafety: null,
      techInnovation: null
    };
  }
};
</script>

<style lang="scss" scoped>
</style>