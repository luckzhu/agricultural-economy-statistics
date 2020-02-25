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
      default: "350px"
    }
  },
  data() {
    return {
      unit: "家",
      title: "企业数量"
    };
  },
  methods: {
    setOptions(chartData) {
      const { title, unit, colors } = this;
      let series = [];
      let sum = chartData[0].value;
      let radiusArr = [
        ["60%", "75%"],
        ["35%", "50%"],
        ["10%", "25%"]
      ];
      chartData.forEach((item, i) => {
        series.push({
          type: "pie",
          radius: radiusArr[i],
          data: [
            {
              value: item.value,
              name: "全省龙头企业4260家",
              label: {
                show: true,
                position: "inside",
                formatter: "{c}家 {d}%"
              },
              itemStyle: {
                normal: {
                  color: colors[i]
                }
              }
            },
            {
              value: sum - item.value,
              tooltip: {
                show: false
              },
              itemStyle: {
                normal: {
                  color: "rgba(0,0,0,0)",
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                },
                emphasis: {
                  color: "rgba(0,0,0,0)"
                }
              }
            }
          ]
        });
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
              pixelRatio: "5"
            }
          }
        },
        tooltip: {
          show: true,
          formatter: "{b}：{d}%"
        },
        series: series
      });
    }
  }
};
</script>