<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <drive-benefits />
        </border-box1>
        <border-box1 class="grid-content">
          <base-distribut id="cultivatedArea" :chartData="cultivatedAreaData" />
          <base-distribut id="animalHusbandry" :chartData="animalHusbandryData" />
        </border-box1>
      </el-col>
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <div class="grid-content">
            <chart-info :chartInfo="employeeData.info" />
            <bar-horizontal id="salesRevenue" height="25.625rem" :chartData="employeeData" />
          </div>
        </border-box1>
        <border-box1 class="grid-content">
          <base-distribut id="poultry" :chartData="poultryData" />
          <base-distribut id="aquaculture" :chartData="aquacultureData" />
        </border-box1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BorderBox1 from "@/components/BorderBox/borderBox1";
import BarHorizontal from "@/components/Echarts/bar-horizontal";
import chartInfo from "@/components/Echarts/chart-info";
import BaseDistribut from "./components/BaseDistribut";
import DriveBenefits from "./components/DriveBenefits";

export default {
  components: {
    BorderBox1,
    BarHorizontal,
    chartInfo,
    BaseDistribut,
    DriveBenefits
  },
  data() {
    return {
      cultivatedAreaData: {
        info: [
          {
            value: 1345,
            unit: "万亩",
            describe: "种植面积与去年持平"
          }
        ],
        title: "农业产业化组织基地分布",
        subTitle: "种植面积1345万亩，以清远、韶关、云浮等地种植面积最多。",
        unit: "万亩",
        symbol: require("@/assets/symbol/rice.svg"),
        data: [
          {
            name: "清远",
            value: "297"
          },
          {
            name: "韶关",
            value: "136"
          },
          {
            name: "云浮",
            value: "131"
          }
        ]
      },
      animalHusbandryData: {
        info: [
          {
            value: 4987,
            unit: "万头",
            describe: "牲畜饲养量同比增长11%"
          }
        ],
        title: "农业产业化组织基地分布-牲畜饲养量",
        subTitle: "牲畜饲养量4987万头，其中云浮市饲养最多，突破2000万头。",
        unit: "万头",
        symbol: require("@/assets/symbol/pork.svg"),
        data: [
          {
            name: "云浮",
            value: "2087"
          },
          {
            name: "茂名",
            value: "872"
          },
          {
            name: "清远",
            value: "342"
          }
        ]
      },
      poultryData: {
        info: [
          {
            value: 16,
            unit: "亿只",
            describe: "禽类饲养量同比下降1%"
          }
        ],
        title: "农业产业化组织基地分布-禽类饲养量",
        subTitle: "禽类饲养量16亿只，以云浮、佛山、珠海等地企业饲养最多。",
        unit: "亿只",
        symbol: require("@/assets/symbol/chicken.svg"),
        data: [
          {
            name: "云浮",
            value: "7.6"
          },
          {
            name: "佛山",
            value: "1.6"
          },
          {
            name: "珠海",
            value: "1.3"
          }
        ]
      },
      aquacultureData: {
        info: [
          {
            value: 217,
            unit: "万亩",
            describe: "养殖水面面积同比增长13%"
          }
        ],
        title: "农业产业化组织基地分布-养殖水面面积",
        subTitle: "养殖水面面积217万亩，以湛江、深圳、茂名等地企业建设最多。",
        unit: "万亩",
        symbol: require("@/assets/symbol/fish.svg"),
        data: [
          {
            name: "湛江",
            value: "38"
          },
          {
            name: "深圳",
            value: "32"
          },
          {
            name: "茂名",
            value: "23"
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
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.grid-content {
  position: relative;
  .chart-information {
    position: absolute;
    right: 50px;
    bottom: 32px;
  }
}
</style>
