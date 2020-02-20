<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from "echarts";
import resize from "@/components/Echarts/mixins/resize";

export default {
  mixins: [resize],
  props: {
    chartData: {
      type: Object,
      default() {
        return {
          title: "700",
          unit: "万户",
          data: [
            { name: "珠三角", value: 345 },
            { name: "山区", value: 175 },
            { name: "西翼", value: 116 },
            { name: "东翼", value: 64 }
          ],
          color: ["#91ABDB"]
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
      this.chart = echarts.init(document.getElementById(this.id),'infographic');
      this.setOptions(this.chartData);
    },
    setOptions({ expectedData, actualData } = {}) {
      let tempChartData = JSON.parse(JSON.stringify(this.chartData));
      let data = tempChartData.data;
      let colors = this.$store.getters.colors;
      let dataName = [];
      let dataValue = [];
      tempChartData.data.forEach(element => {
        dataName.push(element.name);
        dataValue.push(element.value);
      });

      this.chart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        itemStyle: {
          color: function(params) {
            return colors[params.dataIndex];
          }
        },
        grid: {
          top: "8%",
          left: "3%",
          right: "28%",
          bottom: "8%",
          containLabel: true
        },
        nameTextStyle: {
          // color: "#fff"
        },

        xAxis: {
          type: "value",
          splitLine: { show: false },
          axisLabel: { show: false },
          axisTick: { show: false },
          axisLine: { show: false }
        },

        yAxis: {
          type: "category",
          inverse: true,
          data: dataName,
          axisLine: { show: false },
          axisTick: { show: false },
          // nameGap: 30,
          offset: 10,
          axisLabel: {
            show: true,
            textStyle: {
              // color: "#fff",
              fontSize: 16
            }
          }
        },
        series: [
          // {
          //   // For shadow
          //   type: "bar",
          //   itemStyle: {
          //     normal: { color: "rgba(0,0,0,0.05)" }
          //   },
          //   barGap: "-100%",
          //   barCategoryGap: "40%",
          //   barWidth: 45,
          //   // data: dataValue,
          //   animation: false
          // },
          {
            type: "bar",
            data: dataValue,
            barMaxWidth: 18,
            barGap: -40,
            label: {
              normal: {
                show: true,
                textStyle: {
                  // color: "#fff",
                  fontSize: 16
                },

                position: "right",
                offset: [10, 0],
                formatter: function(params) {
                  return `${params.value} ${tempChartData.unit}`;
                }
              }
            }
          }
        ]
      });
    }
  }
};
</script>