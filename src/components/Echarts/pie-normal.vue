<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from "echarts";
import resize from "./mixins/resize";

export default {
  mixins: [resize],
  props: {
    chartData: {
      type: Object,
      default() {
        return {
          title: "龙头企业数量",
          unit: "家",
          data: [
            { name: "珠三角", value: 345 },
            { name: "山区", value: 302 },
            { name: "西翼", value: 166 },
            { name: "东翼", value: 102 }
          ]
        };
      }
    },
    className: {
      type: String,
      default: "chart"
    },
    id: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "350px"
    }
  },
  data() {
    return {
      chart: null
    };
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val);
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id));
      this.setOptions(this.chartData);
    },
    setOptions({ expectedData, actualData } = {}) {
      let tempChartData = JSON.parse(JSON.stringify(this.chartData));
      let data = tempChartData.data;
      const colors = this.$store.getters.colors;
      this.chart.setOption({
        color: colors,
        tooltip: {
          trigger: "item",
          formatter: "{a} {b} :{d}%",
          textStyle: {
            fontSize: 14
          }
        },
        legend: {
          // left:"35%",
          bottom: "8%",
          textStyle: {
            color: "#fff",
            fontSize: 16,
            fontWeight: 500
          }
        },

        series: [
          {
            name: tempChartData.title,
            type: "pie",
            //roseType:'radius',

            radius: "45%",
            center: ["50%", "45%"],
            data: data,
            label: {
              normal: {
                position: "outside",
                formatter: `{c}${tempChartData.unit}\n{d}%`,
                textStyle: {
                  // color: "#13345e",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 500
                }
              }
            },
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 4,
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    }
  }
};
</script>