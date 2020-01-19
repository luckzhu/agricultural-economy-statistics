<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <organization-type :chartData="organizationTypeData" />
        </border-box1>
        <border-box1 class="grid-content">
          <indust-distribution :chartData="industDistributionData" />
        </border-box1>
      </el-col>
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <benefit-bind id="benefitBind" :chartData="benefitBindData" />
        </border-box1>
        <border-box1 class="grid-content">
          <areal-distribution id="ArealDistribution" height="25.625rem" :chartData="arealDistributionData" />
        </border-box1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BorderBox1 from "@/components/BorderBox/borderBox1";
import OrganizationType from "./components/OrganizationType";
import BenefitBind from "./components/BenefitBind";
import IndustDistribution from "./components/IndustDistribution";
import ArealDistribution from "./components/ArealDistribution";

export default {
  components: {
    BorderBox1,
    OrganizationType,
    BenefitBind,
    IndustDistribution,
    ArealDistribution
  },
  data() {
    return {
      benefitBindData: {
        title: "农业产业化组织利益联结方式",
        subTitle: "我省农业产业化组织数量以订单合同方式是3637家，占40%；合作方式（按利润返还）2132家，占23%；股份合作方式856家，占9%；其它方式2609家，占28%。",
        unit: "亿元",
        data: [
          {
            name: "订单合同方式",
            value: 3637,
            percent: 40,
            subText: "通过合同等契约方式向农户收购农副产品，并及时按约定结算，农户按合同要求进行生产"
          },

          {
            name: "合作方式",
            value: 2132,
            percent: 23,
            subText: "将农副产品加工、运销等增值的一部分利润按一定方式返还农户,含二次分配"
          },
          {
            name: "股份合作方式",
            value: 856,
            percent: 9,
            subText: "年交易额2000万元以上的专业批发市场（不含龙头企业）"
          },
          {
            name: "其他方式",
            value: 2609,
            percent: 28,
            subText: "比如租地、吸收就业等"
          }
        ]
      },
      organizationTypeData: {
        title: "农业产业化组织类型",
        subTitle: "我省农业产业化组织共有9234家，其中龙头企业带动型4260家，占46%；合作组织带动型4185家，占45%；专业市场带动型35家，占0.4%；其它类型754家，占8%。",
        unit: "亿元",
        data: [
          {
            name: "龙头企业带动型",
            value: 3805,
            percent: 42,
            subText: "县以上农业产业化主管部门认定的龙头企业"
          },

          {
            name: "合作组织带动型",
            value: 4373,
            percent: 49,
            subText: "县以上农业产业化主管部门认定的农民专业合作示范社"
          },
          {
            name: "专业市场带动型",
            value: 36,
            percent: 0.4,
            subText: "年交易额2000万元以上的专业批发市场（不含龙头企业）"
          },
          {
            name: "其他类型",
            value: 758,
            percent: 8.4,
            subText: "比如协会、联盟等"
          }
        ]
      },
      industDistributionData: [
        [5355, "种植业", "以种植业产品为对象，实行一体化经营的组织"],
        [1375, "畜牧业", "以畜禽产品为对象，实行一体化经营的组织"],
        [786, "水产业", "以淡水或海水养殖或捕捞产品为对象，实行一体化经营的组织"],
        [227, "林业", "以木材、竹材、林产品为对象，实行一体化经营的组织"],
        [1491, "其他", "在种植业、畜牧业、水产业、林业以外的产业化组织"]
      ],
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
.grid-wrapper {
  height: 830px; //
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .grid-content:not(:last-child) {
    margin-bottom: 10px;
  }
}

</style>
