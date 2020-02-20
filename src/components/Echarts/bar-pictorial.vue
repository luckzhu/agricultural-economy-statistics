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
      type: Object
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
      default: "200px"
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
      this.chart = echarts.init(document.getElementById(this.id), "infographic");
      this.setOptions(this.chartData);
    },
    setOptions(chartData) {
      const { option, sort } = chartData;
      const { title, symbol, unit } = option;
      let dataName = [];
      let dataValue = [];
      sort.forEach(element => {
        dataName.push(element.cityName);
        dataValue.push(element.value);
      });
      this.chart.setOption({
        title: {
          text: `· ${title}`,
          // subtext: subTitle,
          x: "20px",
          y: "20px",
          textStyle: {
            // color: "#00F6FB"
          }
        },
        // tooltip: {
        //   // trigger: "axis",
        //   // axisPointer: {
        //   //   type: "shadow"
        //   // }
        // },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {
              type: "png",
              pixelRatio: "5"
            }
          }
        },
        grid: {
          containLabel: true,
          left: "28%",
          top: "10%",
          right: "14%",
          bottom: "0%"
        },
        nameTextStyle: {
          // color: "#fff"
        },
        axisLabel: {
          // color: "#fff"
        },
        yAxis: {
          data: dataName,
          inverse: true,
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            margin: 18,
            textStyle: {
              fontSize: 20
            }
          },
          axisPointer: {
            label: {
              show: true,
              margin: 20
            }
          }
        },
        xAxis: {
          splitLine: { show: false },
          axisLabel: { show: false },
          axisTick: { show: false },
          axisLine: { show: false }
        },
        series: [
          {
            // name: "种植面积",
            type: "pictorialBar",
            symbol: `image://${symbol}`,
            symbolRepeat: true,
            symbolSize: ["40%", "40%"],
            barCategoryGap: "40%",
            barWidth: 80,
            data: dataValue,
            // color: "#FFF",
            symbolClip: true,
            label: {
              normal: {
                show: true,
                textStyle: {
                  // color: "#fff",
                  fontSize: 20
                },
                position: "right",
                offset: [12, 0],
                formatter: function(params) {
                  return `${params.value}${unit}`;
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