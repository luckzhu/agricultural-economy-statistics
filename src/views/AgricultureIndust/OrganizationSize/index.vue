<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <chart-information :chartInformation="fixedAssetsData.info" />
          <bar-horizontal id="fixedAssets" height="25.625rem" :chartData="fixedAssetsData" />
        </border-box1>
        <border-box1 class="grid-content">
          <chart-information :chartInformation="organizationSalesRevenueData.info" />
          <bar-horizontal
            id="organizationSalesRevenue"
            height="25.625rem"
            :chartData="organizationSalesRevenueData"
          />
        </border-box1>
      </el-col>
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <div class="grid-content">
            <chart-information :chartInformation="enterpriseSalesRevenueData.info" />
            <bar-horizontal
              id="salesRevenue"
              height="25.625rem"
              :chartData="enterpriseSalesRevenueData"
            />
          </div>
        </border-box1>
        <border-box1 class="grid-content">
          <chart-information :chartInformation="marketTurnoverData.info" />
          <bar-horizontal id="marketTurnover" height="25.625rem" :chartData="marketTurnoverData" />
        </border-box1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BorderBox1 from "@/components/BorderBox/borderBox1";
import BarHorizontal from "@/components/Echarts/bar-horizontal";
import chartInformation from "@/components/Echarts/chart-information";

export default {
  components: {
    BorderBox1,
    BarHorizontal,
    chartInformation
  },
  data() {
    return {
      fixedAssetsData: {
        info: [
          {
            value: 1367,
            unit: "亿元",
            describe: "固定资产净值"
          }
        ],
        title: "农业产业化组织固定资产",
        subTitle: "全省农业产业化组织固定资产净值合计1367亿元，同比增长4%；其中，深圳、湛江和广州地区名列前茅，且平均每家农业产业化\n组织固定资产净值均在5000万元以上。",
        unit: "亿元",
        data: [
          {
            name: "深圳",
            value: 237
          },
          {
            name: "湛江",
            value: 221
          },
          {
            name: "广州",
            value: 160
          },
          {
            name: "云浮",
            value: 141
          },
          {
            name: "梅州",
            value: 78
          },
          {
            name: "茂名",
            value: 64
          },
          {
            name: "惠州",
            value: 56
          },
          {
            name: "肇庆",
            value: 54
          },
          {
            name: "清远",
            value: 47
          },
          {
            name: "韶关",
            value: 46
          }
        ]
      },
      employeeData: {
        info: [
          {
            value: 101,
            unit: "万人",
            describe: "年末从业人员"
          }
        ],
        title: "农业产业化组织从业人员",
        subTitle: "全省农业产业化组织年末从业人数合计10万人，同比下降2%。其中，湛江、茂名、云浮等地农业产业化组织带动就业明显。",
        unit: "万人",
        data: [
          {
            name: "湛江",
            value: 17.8
          },
          {
            name: "茂名",
            value: 12.5
          },
          {
            name: "云浮",
            value: 8.6
          },
          {
            name: "韶关",
            value: 6.5
          },
          {
            name: "肇庆",
            value: 6.5
          },
          {
            name: "梅州",
            value: 6.4
          },
          {
            name: "广州",
            value: 6.3
          },
          {
            name: "深圳",
            value: 5.6
          },
          {
            name: "惠州",
            value: 5.5
          },
          {
            name: "清远",
            value: 5.0
          }
        ]
      },
      enterpriseSalesRevenueData: {
        info: [
          {
            value: 5366,
            unit: "亿元",
            describe: "年销售收入"
          },
          {
            value: 1.3,
            unit: "亿元/家",
            describe: "企业平均年收入"
          }
        ],
        title: "农业产业化龙头企业销售收入",
        subTitle: "全省4260家龙头企业年销售收入合计5366亿元，同比增长12%，平均年收入1.3亿元/家；其中，深圳、广州、云浮等地龙头企业\n销售收入名列前茅。",
        unit: "亿元",
        data: [
          {
            name: "深圳",
            value: 1279
          },
          {
            name: "广州",
            value: 889
          },
          {
            name: "云浮",
            value: 644
          },
          {
            name: "中山",
            value: 530
          },
          {
            name: "湛江",
            value: 313
          },
          {
            name: "佛山",
            value: 230
          },
          {
            name: "茂名",
            value: 223
          },
          {
            name: "东莞",
            value: 189
          },
          {
            name: "梅州",
            value: 185
          },
          {
            name: "江门",
            value: 157
          }
        ]
      },
      organizationSalesRevenueData: {
        info: [
          {
            value: 133,
            unit: "亿元",
            describe: "年销售收入"
          },
          {
            value: 0.03,
            unit: "亿元/家",
            describe: "合作组织平均年收入"
          }
        ],
        title: "农业产业化龙头合作组织销售收入",
        subTitle: "全省4185家农业产业化合作组织年销售收入合计133亿元，同比增长3%，平均年收入300万元/家；其中，湛江、茂名、韶关\n等地农业产业化合作组织规模位于全省前列。",
        unit: "亿元",
        data: [
          {
            name: "湛江",
            value: 33
          },
          {
            name: "茂名",
            value: 14
          },
          {
            name: "韶关",
            value: 14
          },
          {
            name: "云浮",
            value: 12
          },
          {
            name: "梅州",
            value: 8
          },
          {
            name: "汕头",
            value: 8
          },
          {
            name: "清远",
            value: 7
          },
          {
            name: "惠州",
            value: 7
          },
          {
            name: "肇庆",
            value: 6
          },
          {
            name: "阳江",
            value: 4
          }
        ]
      },
      marketTurnoverData: {
        info: [
          {
            value: 1383,
            unit: "亿元",
            describe: "年交易额"
          },
          {
            value: 40,
            unit: "亿元/家",
            describe: "平均年交易额"
          }
        ],
        title: "农业产业化专业市场交易额",
        subTitle: "全省35家专业市场带动型组织年交易额合计1383亿元，前三名地市为佛山、广州、湛江。",
        unit: "亿元",
        data: [
          {
            name: "佛山",
            value: 462
          },
          {
            name: "广州",
            value: 332
          },
          {
            name: "湛江",
            value: 186
          },
          {
            name: "珠海",
            value: 105
          },
          {
            name: "东莞",
            value: 95
          },
          {
            name: "中山",
            value: 67
          },
          {
            name: "汕头",
            value: 59
          },
          {
            name: "茂名",
            value: 27
          },
          {
            name: "肇庆",
            value: 15
          },
          {
            name: "阳江",
            value: 12
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
.grid-content {
  position: relative;
  .chart-information {
    position: absolute;
    right: 50px;
    bottom: 32px;
  }
}
</style>
