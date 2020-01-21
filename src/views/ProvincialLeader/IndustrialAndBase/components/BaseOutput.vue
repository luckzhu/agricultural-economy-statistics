<template>
  <div class="base-output">
    <div :id="id" :class="className" :style="{height:height,width:width}" :chartData="chartData" />
  </div>
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
      const { data, title, subTitle, unit } = this.chartData;
      const colors = this.$store.getters.colors;
      this.chart.setOption({
        title: [
          {
            text: `· ${title}`,
            // subtext: subTitle,
            x: "20px",
            y: "20px",
            textStyle: {
              color: "#00F6FB"
            },
            subtextStyle: {
              fontSize: 16
            }
          },
          {
            text: "生产基地\n产值结构",
            x: "center",
            y: "center",
            textStyle: {
              lineHeight: 34,
              fontSize: 24,
              fontWeight: 500,
              color: "#fff"
            }
          }
        ],
        color: colors,
        tooltip: {
          trigger: "item",
          formatter: "{b}: {d}%",
          textStyle: {
            fontSize: 16
          }
        },
        legend: {
          // left:"35%",
          bottom: "4%",
          textStyle: {
            color: "#fff",
            fontSize: 16,
            fontWeight: 500
          }
        },

        series: [
          {
            name: "生产基地产值结构",
            type: "pie",
            //roseType:'radius',
            radius: ["40%", "60%"],
            center: ["50%", "50%"],
            data: data,
            label: {
              position: "outside",
              formatter: `{c}${unit}\n{d}%`,
              // formatter: `{d}%`,
              textStyle: {
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                lineHeight: 20
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
          }
        ]
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>