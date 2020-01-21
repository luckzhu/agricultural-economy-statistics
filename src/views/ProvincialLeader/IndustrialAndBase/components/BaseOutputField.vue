<template>
  <div class="base-output">
    <div :id="id" :class="className" :style="{height:height,width:width}" />
  </div>
</template>

<script>
import echarts from "echarts";
import resize from "@/components/Echarts/mixins/resize";

export default {
  mixins: [resize],
  props: {
    chartData: {
      type: Array,
      default() {
        return [
          {
            name: "种植业",
            text: "生产基地 766 万亩\n其中自建 425 万亩",
            unit: "万亩",
            data: [
              {
                name: "其他",
                value: 341
              },
              {
                name: "自建",
                value: 425
              }
            ]
          },
          {
            name: "养畜业",
            text: "生产基地养畜\n 1779 万头\n其中自建养畜\n 1108 万头",
            unit: "万头",
            data: [
              {
                name: "其他养畜",
                value: 671
              },
              {
                name: "自建养畜",
                value: 1108
              }
            ]
          },
          {
            name: "水产业",
            text: "生产基地 63 万亩\n其中自建 38 万亩",
            unit: "万亩",
            data: [
              {
                name: " 其它",
                value: 25
              },
              {
                name: " 自建",
                value: 38
              }
            ]
          },
          {
            name: "养禽业",
            text: "生产基地养禽 \n48929 万只\n其中自建养禽 \n40078 万只",
            unit: "万只",
            data: [
              {
                name: "其它养禽",
                value: 18851
              },
              {
                name: "自建养禽",
                value: 40078
              }
            ]
          }
        ];
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
      const data = this.chartData;
      const colors = this.$store.getters.colors;
      let centers = [
        ["78%", "22%"],
        ["78%", "78%"],
        ["22%", "78%"],
        ["22%", "22%"]
      ];
      let xy = [
        ["74%", "36%"],
        ["74%", "58%"],
        ["18%", "58%"],
        ["18%", "36%"]
      ];
      let xyText = [
        ["84%", "18%"],
        ["84%", "68%"],
        ["2%", "72%"],
        ["4%", "14%"]
      ];
      let series = [];
      let title = [];
      data.forEach((item, i) => {
        series.push({
          type: "pie",
          //roseType:'radius',
          color: ["#ddd", colors[i]],
          radius: "24%",
          center: centers[i],
          data: item.data,
          label: {
            position: "inner",
            formatter(params) {
              if (params.color === "#ddd") {
                return "";
              }
              return `${params.percent}%`;
            },
            textStyle: {
              color: "#fff",
              fontSize: 10
            }
          },
          itemStyle: {
            borderColor: "#fff",
            borderWidth: 4,
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        });
        title.push({
          text: item.name,
          x: xy[i][0],
          y: xy[i][1],
          textStyle: {
            fontSize: 16,
            fontWeight: 500,
            color: colors[i]
          }
        });
        title.push({
          text: item.text,
          x: xyText[i][0],
          y: xyText[i][1],
          textStyle: {
            fontSize: 12,
            fontWeight: 500,
            color: "#fff",
            lineHeight:16,
          }
        });
      });
      this.chart.setOption({
        title: title,
        tooltip: {
          trigger: "item",
          formatter: "{b}: {d}%",
          textStyle: {
            fontSize: 16
          }
        },
        series: series
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>