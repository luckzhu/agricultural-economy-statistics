<template>
  <div :id="id" :style="{height:height,width:width}" />
</template>

<script>
import resize from "@/components/Echarts/mixins/resize";
import common from "@/components/Echarts/mixins/common";

export default {
  mixins: [resize, common],
  props: {
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
  methods: {
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
          x: "20px",
          y: "20px"
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {
              type: "png",
              pixelRatio: "5",
              excludeComponents: ["toolbox", "title"]
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
            type: "pictorialBar",
            symbol: `image://${symbol}`,
            symbolRepeat: true,
            symbolSize: ["40%", "40%"],
            barCategoryGap: "40%",
            barWidth: 80,
            data: dataValue,
            symbolClip: true,
            label: {
              normal: {
                show: true,
                textStyle: {
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