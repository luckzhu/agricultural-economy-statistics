<template>
  <div>
    <div class="organ-type" :id="id" />
    <div class="chart-info-wrapper">
      <div class="chart-info" v-for="(chart,index) in chartData" :key="index">
        <p class="font-info1 info-width">{{chart.value}} 家</p>
        <p class="font-info2 info-width">{{chart.category}}</p>
        <p class="font-info3 info-width">{{chart.describe}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import resize from "@/components/Echarts/mixins/resize";
export default {
  name: "OrganType",
  mixins: [resize],
  props: {
    chartData: {
      type: Array,
      default: () => {
        return [
          {
            category: "龙头企业带动型",
            value: 3555,
            percent: 40,
            describe: "县以上农业产业化主管部门认定的龙头企业"
          }
        ];
      }
    }
  },
  data() {
    return {
      chart: null,
      unit: "亿元",
      title: "农业产业化组织类型",
      id: "organType"
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
      this.chart = echarts.init(document.getElementById(this.id), "infographic");
      this.setOptions(this.chartData);
    },
    setOptions(chartData = {}) {
      const { title, unit } = this;
      const colors = this.$store.getters.colors;
      let series = [];
      
      chartData.forEach((item, i) => {
        series.push({
          type: "pie",
          radius: ["40%", "55%"],
          center: [i * 24 + 14 + "%", "60%"],
          avoidLabelOverlap: false,
          hoverAnimation: true,
          itemStyle: {
            normal: {
              show: false,
              labelLine: {
                show: false
              }
            }
          },
          data: [
            {
              value: item.percent,
              name: item.name,
              label: {
                show: true,
                position: "center",
                formatter: `${item.percent}%`,
                textStyle: {
                  baseline: "middle", //垂直对齐方式
                  fontSize: 36,
                  fontWeight: "bold",
                  // color: "#fff",
                  align: "center" //水平对齐方式
                }
              },
              itemStyle: {
                normal: {
                  color: colors[i],
                  labelLine: {
                    //标示线
                    show: false
                  }
                }
              }
            },
            {
              value: 100 - item.percent,
              name: "",
              itemStyle: {
                normal: {
                  color: "#ccc",
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
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
          // textStyle: {
          //   color: "#00F6FB"
          // },
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
        series: series
      });
    },
  }
};
</script>

<style lang="scss" scoped>
.organ-type {
  height: 280px;
  width: 100%;
}
.chart-info-wrapper {
  display: flex;
  justify-content: space-between;
  height: 130px;
  padding: 0 10px;
  .chart-info {
    flex: 1;
  }
  .info-width {
    padding: 0 10px;
    padding-bottom: 10px;
    text-align: center;
  }
  .font-info1 {
    font-size: 24px;
    font-weight: 700;
    color: $primary-font-color;
  }
  .font-info2 {
    font-size: 20px;
    font-weight: 500;
    color: $primary-font-color;
  }

  .font-info3 {
    font-size: 14px;
    font-weight: 500;
    color: $light-font-color;
  }
}
</style>