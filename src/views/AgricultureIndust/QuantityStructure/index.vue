<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <organ-type />
        </border-box1>
        <border-box1 class="grid-content">
          <indust-dist />
        </border-box1>
      </el-col>
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <benefit-bind />
        </border-box1>
        <border-box1 class="grid-content">
          <areal-distribution
            id="ArealDistribution"
            height="25.625rem"
            :chartData="arealDistributionData"
          />
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
import ArealDistribution from "./components/ArealDistribution";

export default {
  components: {
    BorderBox1,
    OrganType,
    BenefitBind,
    IndustDist,
    ArealDistribution
  },
  data() {
    return {
      arealDistributionData: {
        title: "农业产业化组织区域分布",
        subTitle: "我省山区地区数量最多，3889 家，占 42%；其次是珠三角地区 2695 家，占 29%；东翼地区 1635 家，占 18%；西翼地区 1015 家，占 11%。",
        unit: "家",
        dataName: ["汕头", "梅州", "河源", "清远", "元浮", "惠州", "肇庆", "江门", "茂名", "韶关", "湛江", "广州", "佛山", "汕尾", "阳江", "深圳", "揭阳", "潮州", "中山", "珠海", "东莞"],
        data: [
          {
            name: "龙头企业带动型",
            value: [95, 680, 251, 206, 218, 314, 177, 125, 151, 202, 172, 223, 167, 76, 100, 118, 50, 62, 49, 35, 37]
          },
          {
            name: "合作组织带动型",
            value: [1068, 343, 638, 271, 500, 326, 210, 406, 252, 227, 138, 75, 57, 141, 118, 0, 67, 47, 25, 17, 11]
          },
          {
            name: "专业场带动型",
            value: [3, 0, 0, 1, 5, 2, 3, 0, 4, 2, 1, 4, 0, 3, 2, 2, 0, 0, 3, 0, 0]
          },
          {
            name: "其他类型",
            value: [0, 4, 6, 312, 20, 9, 219, 0, 75, 3, 2, 5, 8, 6, 0, 65, 17, 0, 1, 2, 0]
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
