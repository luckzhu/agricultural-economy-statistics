<template>
  <div>
    <el-row :gutter="10">
      <el-col
        :span="12"
        class="grid-wrapper"
      >
        <border-box1 class="grid-content">
          <drive-benefits
            v-if="driveBenefits"
            :chart-data="driveBenefits"
          />
        </border-box1>
        <border-box1 class="grid-content">
          <div class="grid-content">
            <chart-info :chart-info="employee.info" />
            <bar-horizontal
              id="employee"
              height="25.6rem"
              :chart-data="employee.sort"
              title="农业产业化组织从业人员"
              unit="万人"
            />
          </div>
        </border-box1>
      </el-col>
      <el-col
        :span="12"
        class="grid-wrapper"
      >
        <border-box1 class="grid-content double">
          <base-distribut
            id="cultivatedArea"
            :chart-data="plantArea"
          />
          <base-distribut
            id="animalHusbandry"
            :chart-data="livestockNum"
          />
          <base-distribut
            id="poultry"
            :chart-data="poultryNum"
          />
          <base-distribut
            id="aquaculture"
            :chart-data="waterArea"
          />
        </border-box1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BarHorizontal from "@/components/Echarts/bar-horizontal";
import chartInfo from "@/components/Echarts/chart-info";
import BaseDistribut from "./components/BaseDistribut";
import DriveBenefits from "./components/DriveBenefits";

import getData from "@/mixin/getData.js";

export default {
  components: {
    BarHorizontal,
    chartInfo,
    BaseDistribut,
    DriveBenefits
  },
  mixins: [getData],
  data() {
    return {
      tabId: 3,
      waterArea: {
        option: {
          unit: "万亩",
          title: "养殖水面面积",
          symbol: "fish",
          index: 3
        }
      },
      livestockNum: {
        option: {
          title: "牲畜饲养量",
          symbol: "pork",
          unit: "万头",
          index: 1
        }
      },
      poultryNum: {
        option: {
          title: "禽类饲养量",
          unit: "亿只",
          symbol: "chicken",
          index: 2
        }
      },
      plantArea: {
        option: {
          title: "种植面积",
          unit: "万亩",
          symbol: "rice",
          index: 0
        }
      },
      employee: {},
      driveBenefits: null,
      fields: ["fixAsemployeesets", 'employee',"baseDist.waterArea", "baseDist.poultryNum", "baseDist.plantArea", "baseDist.livestockNum", "driveBenefits"]
    };
  },
  methods: {
    converData(field) {
      let sortAndInfo = _.get(this.graphPage, field);
      if (field.indexOf(".") !== -1) {
        field = field.split(".")[1];
      }
      this[field] = { ...this[field], ...sortAndInfo };
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
