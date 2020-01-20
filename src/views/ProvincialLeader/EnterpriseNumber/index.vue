<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="5" class="grid-wrapper">
        <border-box1 class="grid-content"></border-box1>
      </el-col>
      <el-col :span="14" class="grid-wrapper">
        <border-box1 class="grid-content middle">
          <map-leader height="51.875rem" />
          <pie-normal
            id="pie-leading-country"
            class="pie-leading-country"
            height="26rem"
            width="26rem"
            :chartData="distributionOfPie"
          />
          <div class="leading-country-table">
            <div class="country-item" v-for="(country,index) in leadingCountries" :key="index">
              <p class="name">{{country.name}}</p>
              <p class="value">{{country.value}}家</p>
            </div>
          </div>
        </border-box1>
      </el-col>
      <el-col :span="5" class="grid-wrapper">
        <border-box1 class="grid-content">
          <county-distribution
            id="countyDistribution"
            height="51.875rem"
            :chartData="countyDistributionData"
          />
        </border-box1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BorderBox1 from "@/components/BorderBox/borderBox1";
import MapLeader from "./components/MapLeader";
import PieNormal from "@/components/Echarts/pie-normal";
import CountyDistribution from "./components/CountyDistribution";

export default {
  components: {
    BorderBox1,
    MapLeader,
    PieNormal,
    CountyDistribution
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
      countyDistributionData: {
        title: "省重点农业龙头企业县区分布",
        unit: "家",
        data: [
          { name: "梅州市大埔县", value: 31 },
          { name: "梅州市兴宁县", value: 23 },
          { name: "梅州市梅县区", value: 22 },
          { name: "梅州市五华县", value: 20 },
          { name: "梅州市高州市", value: 20 },
          { name: "河源市东源县", value: 20 },
          { name: "惠州市惠东县", value: 18 },
          { name: "佛山市顺德区", value: 17 },
          { name: "茂名市电白区", value: 16 },
          { name: "汕尾市海丰区", value: 15 },
          { name: "广东省天河区", value: 14 },
          { name: "茂名市茂南区", value: 14 },
          { name: "佛山市南海区", value: 14 },
          { name: "湛江市麻章区", value: 13 },
          { name: "惠州市惠城区", value: 13 },
          { name: "深圳市罗湖区", value: 12 },
          { name: "深证市龙岗区", value: 12 },
          { name: "深圳市福田区", value: 12 },
          { name: "清远市英德市", value: 12 },
          { name: "潮州市饶平县", value: 12 },
          { name: "湛江市吴川市", value: 11 },
          { name: "云浮市新兴县", value: 11 },
          { name: "云浮市罗定市", value: 11 },
          { name: "清远市连州市", value: 11 },
          { name: "梅州市梅江区", value: 11 },
          { name: "揭阳市揭东区", value: 11 },
          { name: "惠州市博罗县", value: 11 },
          { name: "湛江市遂溪县", value: 10 },
          { name: "湛江市雷州市", value: 10 },
          { name: "深圳市南山区", value: 10 },
          { name: "韶关市始兴县", value: 10 },
          { name: "汕头市金平区", value: 10 },
          { name: "梅州市丰顺县", value: 10 },
          { name: "佛山市三水区", value: 10 }
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
  .leading-country-table {
    width: 540px;
    position: absolute;
    right: 60px;
    bottom: 60px;
    display: flex;
    flex-flow: row wrap;
    background: rgb(0, 59, 81);
    .country-item {
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
</style>