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
      default: () => {}
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
      this.setOptions();
    },
    setOptions({ expectedData, actualData } = {}) {
      const colors = this.$store.getters.colors;
      this.chart.setOption({
        title: {
          text: "· 企业类型",
          // subtext: "从产值来看，农业加工型最高（1652亿元），其次是农产品生产型（1307亿元）",
          x: "20px",
          y: "20px",
          textStyle: {
            color: "#00F6FB"
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
          top: "25%",
          data: ["农产品生产型", "农产品加工型", "农产品流动型", "农产品市场带动型", "农产品科技推广型"],
          textStyle: {
            color: "#fff",
            fontSize: 12
          }
        },

        grid: {
          top: "65%",
          left: "30%",
          right: "25%",
          bottom: "5%",
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
          inverse: true,
          data: ["农产品生产型", "农产品加工型", "农产品流动型", "农产品市场带动型", "农产品科技推广型"],
          axisLine: { show: false },
          axisTick: { show: false },
          // nameGap: 30,
          offset: 4,
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
            name: "产值结构",
            type: "pie",
            //roseType:'radius',
            radius: "40%",
            center: ["21%", "45%"],
            data: [
              { value: 36, name: "农产品生产型" },
              { value: 45, name: "农产品加工型" },
              { value: 13, name: "农产品流动型" },
              { value: 4, name: "农产品市场带动型" },
              { value: 2, name: "农产品科技推广型" }
            ],
            label: {
              normal: {
                position: "outside",
                formatter: "{d}%",
                textStyle: {
                  color: "#fff",
                  fontSize: 14,
                  ntWeight: 600
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
            },
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
            center: ["79%", "45%"],
            data: [
              { value: 50, name: "农产品生产型" },
              { value: 38, name: "农产品加工型" },
              { value: 8, name: "农产品流动型" },
              { value: 2, name: "农产品市场带动型" },
              { value: 2, name: "农产品科技推广型" }
            ],
            label: {
              normal: {
                position: "outside",
                formatter: "{d}%",
                textStyle: {
                  color: "#fff",
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
            data: [3, 5, 7, 8, 4],
            barMaxWidth: 12,
            barGap: -40,
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