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
      const { data, title, unit } = this.chartData;
      const colors = this.$store.getters.colors;
      let dataName = [];
      let dataValue = [];
      data.forEach(element => {
        dataName.push(element.name);
        dataValue.push(element.value);
      });

      this.chart.setOption({
        title: {
          text: `· ${title}`,
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
            return `${params[0].value} ${unit}`;
          }
        },
        itemStyle: {
          color: function(params) {
            let colorList = [...colors, ...colors, ...colors, ...colors];
            return colorList[params.dataIndex];
          }
        },
        grid: {
          top: "12%",
          bottom: "2%",
          left: "4%",
          right: "4%",
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
            barMaxWidth: 30,
            barGap: "60%",
            barCategoryGap: "40%",
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