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
    },
    unit: {
      type: String,
      default: "亿元"
    }
  },
  data() {
    return {};
  },
  methods: {
    setOptions(chartData) {
      const { colors, unit } = this;
      this.chart.setOption({
        title: {
          text: "产业化组织\n结构",
          x: "center",
          y: "center",
          textStyle: {
            lineHeight: 20,
            fontSize: 14,
            fontWeight: 500
          }
        },
        color: colors,
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
        tooltip: {
          trigger: "item",
          formatter: "{b} :{d}%",
          textStyle: {
            fontSize: 14
          }
        },
        legend: {
          // left:"35%",
          show: false,
          bottom: "8%",
          textStyle: {
            // color: "#fff",
            fontSize: 16,
            fontWeight: 500
          }
        },
 
        series: [
          {
            type: "pie",
            //roseType:'radius',
            radius: ["45", "45%"],
            center: ["50%", "50%"],
            data: chartData,
            label: {
              normal: {
                position: "outside",
                formatter: `{b}\n{d}%`,
                textStyle: {
                  // color: "#13345e",
                  // color: "#fff",
                  fontSize: 12
                }
              }
            },
            itemStyle: {
              borderColor: "#ddd",
              borderWidth: 4,
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0
                // shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    }
  }
};
</script>