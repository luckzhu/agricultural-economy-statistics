<template>
  <div class="benefit-wrapper">
    <el-row :gutter="10">
      <el-col :span="12">
        
      </el-col>
      <el-col :span="12"></el-col>
    </el-row>
    <!-- <div class="benefit" v-for="(item,index) in chartData" :key="index">
      <div class="benefit-word">
        <p class="benefit-title">{{item.title}}</p>
        <p class="benefit-value">
          {{item.value}}
          <span class="benefit-unit">{{item.unit}}</span>
        </p>
      </div>
      <bar-benefit :id="item.title" :chartData="item" width="22.5rem" height="12.5rem" />
    </div>
    <div class="benefit-order">
      <p>订单合作关系中:</p>
      <p>实现年订单总额610亿元</p>
      <p>年履约订单成交额579亿元</p>
    </div>-->
  </div>
</template>

<script>
import BarBenefit from "./bar-benefit";
export default {
  components: {
    BarBenefit
  },
  data() {
    return {
      chartData: [
        {
          title: "带动农户",
          value: "700",
          unit: "万户",
          data: [
            { name: "珠三角", value: 345 },
            { name: "山区", value: 175 },
            { name: "西翼", value: 116 },
            { name: "东翼", value: 64 }
          ]
        },
        {
          title: "带动农户\n增收总额",
          value: "286",
          unit: "亿元",
          data: [
            { name: "珠三角", value: 184 },
            { name: "山区", value: 45 },
            { name: "西翼", value: 42 },
            { name: "东翼", value: 15 }
          ]
        },
        {
          title: "带动农民\n户均增收",
          value: "4088",
          unit: "元",
          data: [
            { name: "珠三角", value: 5347 },
            { name: "山区", value: 3570 },
            { name: "西翼", value: 2575 },
            { name: "东翼", value: 2394 }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
// .benefit-wrapper {
//   display: flex;
//   flex-wrap: wrap;
// }
.benefit {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  width: 50%;
  color: $primary-font-color;
  .benefit-word {
    width: 100px;
    .benefit-title {
      font-size: 20px;
      margin-bottom: 10px;
      line-height: 24px;
      color: $primary-font-color;
    }
    .benefit-value {
      font-size: 20px;
    }
    .benefit-unit {
      font-size: 10px;
    }
  }
}
.benefit-order {
  width: 420px;
  height: 100%;
  text-align: left;
  margin-bottom: 10px;
  padding: 20px;
  font-size: 26px;
  align-items: flex-start;
  background: $light-background-color;
  border-radius: 20px;
  line-height: 50px;
  color: $light-font-color;
}
</style>