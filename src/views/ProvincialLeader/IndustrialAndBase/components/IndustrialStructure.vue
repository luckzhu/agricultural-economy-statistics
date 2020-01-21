<template>
  <div :id="id" :style="{height:height,width:width}" :chartData="chartData" />
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
      this.setOptions(this.chartData);
    },
    setOptions({ expectedData, actualData } = {}) {
      const colors = this.$store.getters.colors;
      const data = this.chartData;
      this.chart.setOption({
        title: {
          text: `· ${data.title}`,
          // subtext: "从产值来看，农业加工型最高（1652亿元），其次是农产品生产型（1307亿元）",
          x: "20px",
          y: "20px",
          textStyle: {
            color: "#00F6FB"
          }
        },
        legend: {
          left: "center",
          top: "20%",
          orient: "vertical",
          textStyle: {
            color: "#fff",
            fontSize: 12
          }
        },
        color: colors,
        tooltip: {},
        dataset: {
          source: data.source
        },
        xAxis: {
          type: "category",
          show: true,
          axisLabel: {
            color: "#fff",
            fontSize: 10
          },
          data: data.xAxis
        },
        yAxis: {
          type: "value",
          show: false
        },
        grid: {
          top: "68%",
          left: "10%",
          right: "10%",
          bottom: "5%",
          containLabel: true
        },
        series: [
          {
            type: "pie",
            radius: "40%",
            center: ["21%", "40%"],
            encode: {
              itemName: "type",
              value: "数量结构"
            },
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
            type: "pie",
            radius: "40%",
            center: ["79%", "40%"],
            encode: {
              itemName: "type",
              value: "产值结构"
            },
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
            type: "bar",
            // name:"平均产值（亿元/家）",
            barWidth: 40,
            label: {
              normal: {
                show: true,
                position: "top",
                formatter: "{c}",
                textStyle: {
                  color: "#fff",
                  fontSize: 12
                }
              }
            },
            itemStyle: {
              normal: {
                color: function(params) {
                  // build a color map as your need.
                  let colorList = [...colors, ...colors, ...colors, ...colors];
                  return colorList[params.dataIndex];
                },

                shadowBlur: 80,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            data: data.average
          }
        ]
      });
    }
  }
};
</script>