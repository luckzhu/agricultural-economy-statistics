<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from "echarts";
import resize from "./mixins/resize";

export default {
  mixins: [resize],
  props: {
    chartData: {
      type: Object,
      default() {
        return {
          title: "700",
          unit: "万户",
          data: [
            { name: "珠三角", value: 345 },
            { name: "山区", value: 175 },
            { name: "西翼", value: 116 },
            { name: "东翼", value: 64 }
          ],
          colors: ["#91ABDB"]
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
      let tempChartData = JSON.parse(JSON.stringify(this.chartData));
      const colors = this.$store.getters.colors
      const compare = function(property) {
        return function(a, b) {
          var value1 = a[property];
          var value2 = b[property];
          return value2 - value1;
        };
      };
      let data = tempChartData.data.sort(compare("value"));
      let dataName = [];
      let dataValue = [];
      data.forEach(element => {
        dataName.push(element.name);
        dataValue.push(element.value);
      });
      this.chart.setOption({
        title: {
          text: `· ${tempChartData.title}`,
          x: "20px",
          y: "20px",
          textStyle: {
            color: "#00F6FB"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: `{b}: {c}${tempChartData.unit}`
        },
        // dataRange: {
        //   show: false,
        //   min: 0,
        //   max: 800,
        //   calculable: true,
        //   color: colors,
        //   y: "center"
        // },
        grid: {
          top: "17%",
          left: 0,
          right: "3%",
          bottom: "4%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            show: true,
            data: dataName,
            axisLabel: {
              color: "#fff"
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            show: false,
            axisLabel: {
              color: "#fff"
            }
          }
        ],
        series: [
          {
            name: tempChartData.title,
            type: "bar",
            barGap: 0.1,
            barWidth: 30,
            // barCategoryGap: 40,
            itemStyle: {
              normal: {
                color: function(params) {
                  // build a color map as your need.
                  let colorList = [...colors, ...colors, ...colors, ...colors];
                  return colorList[params.dataIndex];
                },
                label: {
                  show: true,
                  position: "top",
                  color:"#fff",
                  formatter: "{c}"
                },
                shadowBlur: 80,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            data: dataValue
          }
        ]
      });
    }
  }
};
</script>