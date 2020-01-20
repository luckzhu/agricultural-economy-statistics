<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="5" class="grid-wrapper">
        <border-box1 class="grid-content"></border-box1>
      </el-col>
      <el-col :span="14" class="grid-wrapper">
        <border-box1 class="grid-content middle">
          <compony-number height="51.875rem" />
          <pie-normal
            id="pie-leading-country"
            class="pie-leading-country"
            height="420px"
            width="420px"
            :chartData="distributionOfPie"
          />
        </border-box1>
      </el-col>
      <el-col :span="5" class="grid-wrapper">
        <border-box1 class="grid-content"></border-box1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BorderBox1 from "@/components/BorderBox/borderBox1";
import ComponyNumber from "./components/ComponyNumber";
import PieNormal from "@/components/Echarts/pie-normal";

export default {
  components: {
    BorderBox1,
    ComponyNumber,
    PieNormal
  },
  data() {
    return {
      distributionOfPie: {
        unit: "家",
        data: [
          { name: "珠三角", value: 345 },
          { name: "山区", value: 302 },
          { name: "西翼", value: 166 },
          { name: "东翼", value: 102 }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.middle {
  position: relative;
  .pie-leading-country {
    position: absolute;
    right: 0px;
    top: 50px;
  }
}
</style>