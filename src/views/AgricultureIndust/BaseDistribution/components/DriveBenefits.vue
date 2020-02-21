<template>
  <div class="benefit-wrapper" v-if="chartData">
    <el-row :gutter="10">
      <el-col :span="12">
        <bar-benefit id="1" :chartData="chartData.driveFarmer" height="12.5rem" />
      </el-col>
      <el-col :span="12">
        <bar-benefit id="2" :chartData="chartData.raiseIncome" height="12.5rem" />
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12">
        <bar-benefit id="3" :chartData="chartData.AveRaiseIncome" height="12.5rem" />
      </el-col>
      <el-col :span="12" class="order">
        <div class="word">
          <p>订单合作关系中:</p>
          <p>实现年订单总额610亿元</p>
          <p>年履约订单成交额579亿元</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BarBenefit from "./bar-benefit";
export default {
  components: {
    BarBenefit
  },
  props: {
    chartData: {
      type: Object
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_handle.scss";

.order {
  // padding: 20px;
  height: 12.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .word {
    width: 420px;
    height: 10rem;
    text-align: left;
    padding: 20px 40px;
    font-size: 24px;
    @include background_color("background_color_light");
    border-radius: 20px;
    line-height: 40px;
    @include font_color("font_color_light");
  }
}
</style>