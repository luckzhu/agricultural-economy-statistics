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
          info: [
            {
              value: 1345,
              unit: "万亩",
              describe: "种植面积与去年持平"
            }
          ],
          title: "农业产业化组织基地分布",
          subTitle: "种植面积1345万亩，以清远、韶关、云浮等地种植面积最多。",
          unit: "万亩",
          symbol: require("@/assets/symbol/rice.svg"),
          data: [
            {
              name: "清远",
              value: "297"
            },
            {
              name: "韶关",
              value: "136"
            },
            {
              name: "云浮",
              value: "131"
            }
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
      this.chart = echarts.init(document.getElementById(this.id));
      this.setOptions(this.chartData);
    },
    setOptions({ expectedData, actualData } = {}) {
      const tempChartData = JSON.parse(JSON.stringify(this.chartData));
      const { symbol, title, subTitle, unit } = tempChartData;
      let dataName = [];
      let dataValue = [];
      tempChartData.data.forEach(element => {
        dataName.push(element.name);
        dataValue.push(element.value);
      });
      this.chart.setOption({
        // title: {
        //   text: `· ${title}`,
        //   // subtext: subTitle,
        //   x: "20px",
        //   y: "20px",
        //   textStyle: {
        //     color: "#00F6FB"
        //   },
        //   subtextStyle: {
        //     fontSize: 16
        //   }
        // },
        tooltip: {
          // trigger: "axis",
          // axisPointer: {
          //   type: "shadow"
          // }
        },
        grid: {
          containLabel: true,
          left: "28%",
          top: "10%",
          right: "16%",
          bottom: "10%"
        },
        nameTextStyle: {
          color: "#fff"
        },
        axisLabel: {
          color: "#fff"
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
            name: "种植面积",
            type: "pictorialBar",
            symbol: `image://${symbol}`,
            symbolRepeat: true,
            symbolSize: ["40%", "40%"],
            barCategoryGap: "40%",
            barWidth: 80,
            data: dataValue,
            color: "#FFF",
            // itemStyle: {
            //   normal: {
            //     opacity: 0
            //   }
            // },
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#fff",
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