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
      type: Array
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
      title: "农业产业化组织固定资产",
      unit: "亿元",
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
    setOptions(chartData = {}) {
      const { title, unit } = this;
      const colors = this.$store.getters.colors;
      
      // chartData = chartData.sort(function(a, b) {
      //   return b.value - a.value;
      // });
      console.log(chartData)
      var yData = [];
      var barData = [];
      for (var i = 0; i < chartData.length; i++) {
        barData.push(chartData[i]);
        yData.push(i + "," + (chartData[i].cityName).replace(/市.*/, ""));
      }

      this.chart.setOption({
        title: {
          text: `· ${title}`,
          // subtext: subTitle,
          x: "20px",
          y: "20px",
          textStyle: {
            // color: "#00F6FB"
          },
          subtextStyle: {
            fontSize: 16,
            lineHeight: 18
          }
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {
              type: "png",
              pixelRatio: "5"
            }
          }
        },
        tooltip: {
          show: true,
          formatter: function(params) {
            var value = parseFloat(params.data["value"]);
            return params.name + "：" + value + unit;
          }
        },
        grid: {
          top: "14%",
          bottom: "0%",
          left: "-36px",
          right: "12%",
          containLabel: true
        },
        xAxis: {
          show: false
          // color: "#fff"
        },
        yAxis: {
          type: "category",
          inverse: true,
          nameGap: 16,
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            interval: 0,
            margin: 75,
            textStyle: {
              // color: "#fff",
              align: "left",
              fontSize: 16
            },
            rich: {
              a: {
                color: "#fff",
                fontSize: 14,
                backgroundColor: "#0090b3",
                width: 22,
                height: 22,
                align: "center",
                borderRadius: 2
              }
            },
            formatter: function(params) {
              var paramsArr = params.split(",");
              var index = paramsArr[0];
              var name = paramsArr[1];
              return ["{a|" + (parseInt(index) + 1) + "}" + "  " + name].join("\n");
            }
          },
          data: yData
        },

        series: [
          {
            type: "bar",
            zlevel: 2,
            barMaxWidth: 16,
            barGap: 10,
            itemStyle: {
              normal: {
                color: function(params) {
                  // build a color map as your need.
                  let colorList = [...colors, ...colors, ...colors, ...colors];
                  return colorList[params.dataIndex];
                },
                barBorderRadius: 15
              }
            },
            data: barData,
            label: {
              normal: {
                show: true,
                textStyle: {
                  // color: "#fff",
                  fontSize: 18
                },
                position: "right",
                offset: [14, 0],
                formatter: function(params) {
                  let value = parseFloat(params.data["value"]);
                  return `${params.data["value"]}${unit}`;
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