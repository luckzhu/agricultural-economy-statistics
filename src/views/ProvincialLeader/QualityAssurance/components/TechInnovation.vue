<template>
  <div class="tech-innovation">
    <el-row :gutter="10">
      <el-col :span="12" :style="{color:colors[0]}">
        <div class="title">{{org.name}}</div>
        <div class="describe">
          <p>
            有专门研发机构的省重点农业龙头企业{{org.unitsNum}}家（占全部省重点农业龙头数量比重
            <span class="value">{{org.rate}}%</span>）
          </p>
          <p>其中：省级以上机构{{org.provinceUnitsNum}}家</p>
          <p>国家重点实验室{{org.countryUnitsNum}}家</p>
        </div>
      </el-col>
      <el-col :span="12" :style="{color:colors[1]}">
        <div class="title">{{man.name}}</div>
        <div class="describe">
          <p>
            农业技术研究和技术推广人员
            <span class="value">{{man.num}}万人</span>
          </p>
          <p>农业技术人员占从业人员比重{{man.techManRate}}%</p>
          <p>大专及以上人员占从业人员比重{{man.collegeManRate}}%</p>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12" :style="{color:colors[2]}">
        <div class="title">{{result.name}}</div>
        <div class="describe">
          <p>持有专利{{result.patentNumber}}项</p>
          <p>获得省级以上科技奖励或荣誉{{result.provinceNum}}项</p>
          <p>获上述奖励的省重点农业龙头企业{{result.provinceUnitsNum}}家</p>
          <p>
            （占全部省重点农业龙头企业数量
            <span class="value">{{result.provinceUnitsNumRate}}%</span>）
          </p>
          <p>其中：国家高新技术企业{{result.countryUnitsNum}}家</p>
        </div>
      </el-col>
      <el-col :span="12" :style="{color:colors[3]}">
        <div class="title">{{investment.name}}</div>
        <div class="describe">
          <p>
            省重点农业龙头企业科技研发投入
            <span class="value">{{investment.investment}}亿元</span>
          </p>
          <p>占省重点农业龙头企业销售收入比重{{investment.investmentSalesRate}}%</p>
          <p>该比重超过1%的省重点农业龙头企业{{investment.MoreThanProvinceUnitsNum}}家</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    chartData: {}
  },
  computed: {
    colors() {
      return this.$store.getters.colors;
    },
    org() {
      return this.chartData.org;
    },
    man() {
      return this.chartData.man;
    },
    result() {
      return this.chartData.result;
    },
    investment() {
      return this.chartData.investment;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_handle.scss";

.tech-innovation {
  padding: 0 20px;
  .el-row {
    height: 200px;
    .el-col {
      padding: 20px;
    }
    p {
      font-size: 16px;
      line-height: 25px;
      @include font_color("font_color_primary");
    }
  }
  .title {
    font-size: 24px;
    font-weight: 600;
  }
  .describe {
    margin: 10px 20px;
    padding: 10px 20px;
    height: 140px;
    // width: 100%;
    border: 2px solid;
    border-radius: 4px;
    text-align: left;
    .value {
      font-size: 22px;
      font-weight: 700;
      @include font_color("font_color_light");
    }
  }
}
</style>