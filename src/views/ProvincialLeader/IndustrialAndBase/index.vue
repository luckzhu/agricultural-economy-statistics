<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <div class="title-wrapper">
            <p class="title-1">产值结构</p>
            <p class="title-2">数量结构</p>
            <p class="title-3">企业平均产值</p>
          </div>
          <company-type id="companyType" height="25.625rem" :chartData="companyTypeData" />
        </border-box1>
        <border-box1 class="grid-content"></border-box1>
      </el-col>
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <div class="title-wrapper industrial">
            <p class="title-1">产值结构</p>
            <p class="title-2">数量结构</p>
            <p class="title-3">平均产值（单位：亿元/家）</p>
          </div>
          <industrial-structure id="industrialStructure" height="25.625rem"  :chartData="IndustrialStructureData"/>
        </border-box1>
        <border-box1 class="grid-content"></border-box1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BorderBox1 from "@/components/BorderBox/borderBox1";
import CompanyType from "./components/CompanyType";
import IndustrialStructure from "./components/IndustrialStructure";

export default {
  components: {
    BorderBox1,
    CompanyType,
    IndustrialStructure
  },
  data() {
    return {
      companyTypeData: {
        title: "企业类型",
        xAxis: ["农产品生产型", "农产品加工型", "农产品流动型", "农产品市场带动型", "农产品科技推广型"],
        production: [
          { value: 36, name: "农产品生产型" },
          { value: 45, name: "农产品加工型" },
          { value: 13, name: "农产品流动型" },
          { value: 4, name: "农产品市场带动型" },
          { value: 2, name: "农产品科技推广型" }
        ],
        count: [
          { value: 50, name: "农产品生产型" },
          { value: 38, name: "农产品加工型" },
          { value: 8, name: "农产品流动型" },
          { value: 2, name: "农产品市场带动型" },
          { value: 2, name: "农产品科技推广型" }
        ],
        average: [3, 5, 7, 8, 4]
      },
      IndustrialStructureData: {
        title: "产业结构",
        xAxis: ["畜牧养殖及其加工", "林业种植及其加工", "其他", "水产养殖及其加工", "农产品种植及其加工"],
        source: [
          ["type", "数量结构", "产值结构", "平均产值"],
          ["畜牧养殖及其加工", 24, 43, 7.2],
          ["林业种植及其加工", 4, 7, 5.9],
          ["其他", 10, 12, 4.9],
          ["水产养殖及其加工", 12, 8, 2.9],
          ["农产品种植及其加工", 50, 30, 2.4]
        ],
        average: [7.2, 5.9, 4.9, 2.9, 2.4]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.title-wrapper {
  position: relative;
  font-size: 18px;
  font-weight: 600;
  color: $light-font-color;
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
</style>