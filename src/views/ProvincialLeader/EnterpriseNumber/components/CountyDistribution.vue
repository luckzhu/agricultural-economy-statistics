<template>
  <div :id="id" :style="{height:height,width:width}" />
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
          color: "#91ABDB"
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
      let colors = this.$store.getters.colors;
      let dataName = [];
      let dataValue = [];
      tempChartData.data.forEach(element => {
        dataName.push(element.name);
        dataValue.push(element.value);
      });

      this.chart.setOption({
        title: {
          text: `· ${tempChartData.title}`,
          x: "20px",
          y: "20px",
          textStyle: {
            color: "#00F6FB"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          },
          formatter: function(params) {
            return `${params[0].value} ${tempChartData.unit}`;
          }
        },
        itemStyle: {
          color: function(params) {
            const colorList = [...colors,...colors,...colors,...colors,...colors]
            return colorList[params.dataIndex];
          }
        },
        grid: {
          top: "7%",
          left: "10%",
          right: "12%",
          bottom: "2%",
          containLabel: true
        },
        nameTextStyle: {
          color: "#fff"
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
              color: "#fff",
              fontSize: 12
            }
          }
        },
        series: [
          {
            type: "bar",
            data: dataValue,
            barMaxWidth: 24,
            barGap: "80%",
            barCategoryGap: "50%",
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#fff",
                  fontSize: 12
                },

                position: "right",
                offset: [10, 0],
                formatter: function(params) {
                  return `${params.value}${tempChartData.unit}`;
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