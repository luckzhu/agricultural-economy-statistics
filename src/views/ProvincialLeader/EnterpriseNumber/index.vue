<template>
  <div>
    <el-row :gutter="10">
      <el-col
        :span="5"
        class="grid-wrapper"
      >
        <border-box1 class="grid-content double">
          <unit-nums
            id="UnitNums"
            height="25.6rem"
            :chart-data="unitNums"
          />
          <div class="unit-word">
            <div
              v-for="item in unitNums"
              :key="item.value"
            >
              <p class="title">
                {{ item.name }}
              </p>
              <p class="value">
                {{ item.value }}
                <span class="unit">家</span>
              </p>
            </div>
          </div>
        </border-box1>
      </el-col>
      <el-col
        :span="14"
        class="grid-wrapper middle"
      >
        <border-box1 class="grid-content double">
          <map-leader
            :chart-data="cityDistNational"
            height="51.625rem"
          />
          <pie-normal
            id="cityDistProvincialRegion"
            class="pie-leading-city"
            height="26rem"
            width="26rem"
            unit="家"
            :chart-data="cityDistProvincialRegion"
          />
          <div class="leading-city-table">
            <div
              v-for="(city,index) in cityDistProvincialCity"
              :key="index"
              class="city-item"
            >
              <p class="name">
                {{ city.name | canonicalName }}
              </p>
              <p class="value">
                {{ city.value }}家
              </p>
            </div>
          </div>
        </border-box1>
      </el-col>
      <el-col
        :span="5"
        class="grid-wrapper"
      >
        <border-box1 class="grid-content double">
          <county-dist
            id="countyDist"
            height="51.625rem"
            :chart-data="countyDist"
          />
        </border-box1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MapLeader from "./components/MapLeader";
import PieNormal from "@/components/Echarts/pie-normal";
import CountyDist from "./components/CountyDist";
import UnitNums from "./components/UnitNums";

import getData from "@/mixin/getData.js";

export default {
  components: {
    MapLeader,
    PieNormal,
    CountyDist,
    UnitNums
  },
  filters: {
    canonicalName(value) {
      if(value){
        return value.replace(/市.*/, "");
      }else {
        return ''
      }
     
    }
  },
  mixins: [getData],
  data() {
    return {
      tabId: 4,
      distributionOfPie: {
        unit: "家",
        data: [
          { name: "珠三角", value: 345 },
          { name: "山区", value: 302 },
          { name: "西翼", value: 166 },
          { name: "东翼", value: 102 }
        ]
      },
      leadingCountries: [
        { name: "梅州", value: 132 },
        { name: "湛江", value: 76 },
        { name: "茂名", value: 69 },
        { name: "深圳", value: 64 },
        { name: "佛山", value: 52 },
        { name: "惠州", value: 51 },
        { name: "韶关", value: 48 },
        { name: "河源", value: 48 },
        { name: "江门", value: 42 },
        { name: "广州", value: 40 },
        { name: "清远", value: 39 },
        { name: "云浮", value: 35 },
        { name: "汕尾", value: 29 },
        { name: "肇庆", value: 27 },
        { name: "揭阳", value: 25 },
        { name: "汕头", value: 24 },
        { name: "潮州", value: 24 },
        { name: "阳江", value: 21 },
        { name: "省直", value: 20 },
        { name: "东莞", value: 20 },
        { name: "珠海", value: 16 },
        { name: "中山", value: 13 }
      ],
      countyDist: [],
      cityDistNational: [],
      cityDistProvincialRegion: [],
      cityDistProvincialCity: [],
      unitNums: [],
      fields: ["countyDist", "cityDist.provincial.region", "cityDist.provincial.city", "cityDist.national", "unitNums"]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_handle.scss";

.middle {
  position: relative;
  .pie-leading-city {
    position: absolute;
    right: 0px;
    top: 50px;
  }
  .leading-city-table {
    width: 540px;
    position: absolute;
    right: 60px;
    bottom: 60px;
    display: flex;
    flex-flow: row wrap;
    background: rgb(0, 59, 81);
    .city-item {
      flex: 16%;
      outline: 1px solid #00fbff;
      .name,
      .value {
        font-size: 18px;
        padding: 6px 20px;
      }
      .name {
        // border-bottom: 1px solid #00fbff;
        background: rgb(10, 39, 50);
        font-weight: 500;
      }
      .value {
        font-size: 18px;
        font-weight: 400;
      }
    }
  }
}
.unit-word {
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .title {
    @include font_color("font_color_primary");
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 40px;
  }
  .value {
    font-size: 80px;
    font-weight: 700;
    margin-bottom: 22px;
    @include font_color("font_color_light");
    .unit {
      font-size: 30px;
      font-weight: 600;
    }
  }
}
</style>