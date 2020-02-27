<template>
  <div :id="id" :style="{height:height,width:width}" :chartData="chartData" />
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
      title: "企业类型"
    };
  },

  methods: {
    setOptions(chartData) {
      let xAxis = [];
      const { output, average, quantity } = chartData;
      if (average) {
        chartData.average.map(item => xAxis.push(item.name));
      }

      const { colors, title } = this;
      this.chart.setOption({
        title: [
          {
            text: `· ${title}`,
            x: "20px",
            y: "20px"
          },
          {
            text: `产值结构`,
            x: "17%",
            y: "36%",
            textStyle: {
              color: "#222"
            }
          },
          {
            text: `数量结构`,
            x: "75%",
            y: "36%",
            textStyle: {
              color: "#222"
            }
          },
          {
            text: `企业平均产值`,
            x: "17%",
            y: "77%",
            textStyle: {
              // color: "#777"
            }
          }
        ],
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
        color: colors,
        tooltip: {
          trigger: "item",
          formatter: "{a} {b} :{d}%",
          textStyle: {
            fontSize: 14
          }
        },
        legend: {
          orient: "vertical",
          top: "20%",
          data: xAxis,
          textStyle: {
            fontSize: 12
          }
        },

        grid: {
          top: "65%",
          left: "30%",
          right: "25%",
          bottom: "2%",
          containLabel: true
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
          // inverse: true,
          data: xAxis,
          axisLine: { show: false },
          axisTick: { show: false },
          nameGap: 30,
          offset: 4,
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 12
            }
          }
        },
        series: [
          {
            name: "产值结构",
            type: "pie",
            radius: "40%",
            center: ["21%", "38%"],
            data: output,
            label: {
              normal: {
                position: "outside",
                formatter: "{d}%",
                textStyle: {
                  fontSize: 14,
                  fontWeight: 600
                }
              }
            },
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 2,
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
            // markPoint: {
            //   symbol: "circle",
            //   symbolSize: 50,
            //   label: {
            //     show: true
            //   }
            // }
          },
          {
            name: "数量结构",
            type: "pie",
            //roseType:'radius',
            radius: "40%",
            center: ["79%", "40%"],
            data: quantity,
            label: {
              normal: {
                position: "outside",
                formatter: "{d}%",
                textStyle: {
                  fontSize: 14,
                  fontWeight: 600
                }
              }
            },
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 2,
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          },
          {
            name: "企业平均产值",

            type: "bar",
            //roseType:'radius',
            tooltip: {
              trigger: "item",
              formatter: "{b}: {c}亿元/家",
              textStyle: {
                fontSize: 14
              }
            },
            itemStyle: {
              color: function(params) {
                return colors[params.dataIndex];
              }
            },
            data: average,
            barMaxWidth: 12,
            barGap: -40,
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 12
                },
                position: "right",
                offset: [10, 0],
                formatter: function(params) {
                  return `${params.value} 亿元/家`;
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