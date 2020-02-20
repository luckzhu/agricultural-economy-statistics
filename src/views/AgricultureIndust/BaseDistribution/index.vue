<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <drive-benefits :chartData="driveBenefits" v-if="driveBenefits" />
        </border-box1>
        <border-box1 class="grid-content">
          <div class="grid-content">
            <chart-info :chartInfo="employee.info" />
            <bar-horizontal
              id="employee"
              height="25.625rem"
              :chartData="employee.sort"
              title="农业产业化组织从业人员"
              unit="万人"
            />
          </div>
        </border-box1>
      </el-col>
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <base-distribut id="cultivatedArea" :chartData="plantArea" />
          <base-distribut id="animalHusbandry" :chartData="livestockNum" />
          <base-distribut id="poultry" :chartData="poultryNum" />
          <base-distribut id="aquaculture" :chartData="waterArea" />
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

import { getGraph } from "@/api/industrySurvey";

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
      year: 2018,
      tabId: 3,
      graphPage: null,
      waterArea: {
        option: {
          unit: "万亩",
          title: "养殖水面面积",
          symbol: require("@/assets/symbol/fish.svg")
        }
      },
      livestockNum: {
        option: {
          title: "牲畜饲养量",
          symbol: require("@/assets/symbol/pork.svg"),
          unit: "万头"
        }
      },
      poultryNum: {
        option: {
          title: "禽类饲养量",
          unit: "亿只",
          symbol: require("@/assets/symbol/chicken.svg")
        }
      },
      plantArea: {
        option: {
          title: "种植面积",
          unit: "万亩",
          symbol: require("@/assets/symbol/rice.svg")
        }
      },
      employee: {},
      driveBenefits: null
    };
  },
  mounted() {
    this.getGraphPage().then(() => {
      this.converData("employee");
      this.converData("baseDist.waterArea");
      this.converData("baseDist.poultryNum");
      this.converData("baseDist.plantArea");
      this.converData("baseDist.livestockNum");
      this.converData("driveBenefits");
    });
  },
  methods: {
    getGraphPage() {
      const { year, tabId } = this;
      return getGraph({ year, tabId }).then(res => {
        this.graphPage = res.data.info;
      });
    },
    converData(field) {
      let sortAndInfo = _.get(this.graphPage, field);
      if (field.indexOf(".") !== -1) {
        field = field.split(".")[1];
      }
      this[field] = { ...this[field], ...sortAndInfo };
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
.grid-content {
  position: relative;
  .chart-information {
    position: absolute;
    right: 50px;
    bottom: 32px;
  }
}
</style>
