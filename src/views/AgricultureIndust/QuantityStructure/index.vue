<template>
  <div>
    <el-row :gutter="10">
      <el-col
        :span="12"
        class="grid-wrapper"
      >
        <border-box1 class="grid-content">
          <organ-type :chart-data="organType" />
        </border-box1>
        <border-box1 class="grid-content">
          <indust-dist :chart-data="industryDist" />
        </border-box1>
      </el-col>
      <el-col
        :span="12"
        class="grid-wrapper"
      >
        <border-box1 class="grid-content">
          <benefit-bind :chart-data="benefitBind" />
        </border-box1>
        <border-box1 class="grid-content">
          <areal-dist
            v-if="arealDistcity.length >0"
            id="ArealDist"
            height="25.6rem"
            :chart-data="arealDistcity"
          />
        </border-box1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import OrganType from "./components/OrganType";
import BenefitBind from "./components/BenefitBind";
import IndustDist from "./components/IndustDist";
import ArealDist from "./components/ArealDist";

import getData from "@/mixin/getData.js";

export default {
  components: {
    OrganType,
    BenefitBind,
    IndustDist,
    ArealDist
  },
  mixins: [getData],
  data() {
    return {
      tabId: 1,
      organType: [],
      benefitBind: [],
      industryDist: [],
      arealDistcity: [],
      fields: ["organType", "benefitBind", "industryDist", "arealDist.city"]
    };
  },
  methods: {
    converData(field) {
      const data = _.get(this.graphPage, field, []);
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
