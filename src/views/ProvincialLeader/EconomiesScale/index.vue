<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="10" class="grid-wrapper">
        <border-box1 class="grid-content"></border-box1>
      </el-col>
      <el-col :span="14" class="grid-wrapper">
        <border-box1 class="grid-content mix-chart-wrapper">
          <bar-normal id="scale-bar" height="25.625rem" :chartData="scaleBarData" />
          <pie-normal
            id="scale-pie"
            height="21.875rem"
            width="21.875rem"
            :chartData="scalePieData"
          />
        </border-box1>
        <border-box1 class="grid-content mix-chart-wrapper">
          <bar-normal id="revenue-bar" height="25.625rem" :chartData="revenueBarData" />
          <pie-normal
            id="revenue-pie"
            height="21.875rem"
            width="21.875rem"
            :chartData="revenuePieData"
          />
        </border-box1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BorderBox1 from "@/components/BorderBox/borderBox1";
import BarNormal from "@/components/Echarts/bar-normal";
import PieNormal from "@/components/Echarts/pie-normal";

export default {
  components: {
    BorderBox1,
    BarNormal,
    PieNormal
  },
  data() {
    return {
      scaleBarData: {
        title: "地区规模",
        unit: "亿元",
        data: [
          { name: "梅州", value: 98 },
          { name: "湛江", value: 312 },
          { name: "茂名", value: 156 },
          { name: "深圳", value: 565 },
          { name: "佛山", value: 176 },
          { name: "惠州", value: 68 },
          { name: "韶关", value: 49 },
          { name: "河源", value: 40 },
          { name: "江门", value: 118 },
          { name: "广州", value: 774 },
          { name: "清远", value: 41 },
          { name: "云浮", value: 683 },
          { name: "汕尾", value: 24 },
          { name: "肇庆", value: 52 },
          { name: "揭阳", value: 26 },
          { name: "汕头", value: 70 },
          { name: "潮州", value: 39 },
          { name: "阳江", value: 21 },
          { name: "东莞", value: 180 },
          { name: "珠海", value: 41 },
          { name: "中山", value: 124 }
        ]
      },
      scalePieData: {
        title: "地区规模",
        unit: "亿元",
        data: [
          { name: "珠三角", value: 2098 },
          { name: "山区", value: 911 },
          { name: "西翼", value: 490 },
          { name: "东翼", value: 159 }
        ]
      },
      revenueBarData: {
        title: "企业营收",
        unit: "亿元",
        data: [
          { name: "梅州", value: 0.7 },
          { name: "湛江", value: 4.1 },
          { name: "茂名", value: 2.3 },
          { name: "深圳", value: 8.8 },
          { name: "佛山", value: 3.4 },
          { name: "惠州", value: 1.3 },
          { name: "韶关", value: 1.0 },
          { name: "河源", value: 0.8 },
          { name: "江门", value: 2.8 },
          { name: "广州", value: 12.9 },
          { name: "清远", value: 1.0 },
          { name: "云浮", value: 19.5 },
          { name: "汕尾", value: 0.8 },
          { name: "肇庆", value: 1.9 },
          { name: "揭阳", value: 1.0 },
          { name: "汕头", value: 2.9 },
          { name: "潮州", value: 1.6 },
          { name: "阳江", value: 1.0 },
          { name: "东莞", value: 9.0 },
          { name: "珠海", value: 2.5 },
          { name: "中山", value: 9.6 }
        ]
      },
      revenuePieData: {
        title: "企业营收",
        unit: "亿元/家",
        data: [
          { name: "珠三角", value: 6.1 },
          { name: "山区", value: 3.0 },
          { name: "西翼", value: 2.9 },
          { name: "东翼", value: 1.6 }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.mix-chart-wrapper {
  position: relative;
  #scale-pie,
  #revenue-pie {
    position: absolute;
    right: 30px;
    top: -20px;
  }
}
</style>