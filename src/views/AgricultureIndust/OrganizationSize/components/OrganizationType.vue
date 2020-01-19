<template>
  <div>
      <div class="organization-type" :id="id" />
      <div class="chart-info-wrapper">
        <div class="chart-info" v-for="(chart,index) in chartData.data" :key="index">
          <p class="font-info1 info-width">{{chart.value}} 家</p>
          <p class="font-info2 info-width">{{chart.name}}</p>
          <p class="font-info3 info-width">{{chart.subText}}</p>
        </div>
      </div>
  </div>
</template>

<script>
import echarts from "echarts";
import resize from "@/components/Echarts/mixins/resize";
export default {
  name: "OrganizationType",
  mixins: [resize],
  props: {
    chartData: {
      type: Object,
      default: () => {}
    },
    id: {
      type: String,
      default: "chart"
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
      const { data, title, subTitle, unit } = tempChartData;
      const colors = this.$store.getters.colors;
      let series = [];
      data.forEach((item, i) => {
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
                  color: "#fff",
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
        series: series
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.organization-type {
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
    font-size: 24px; /*px*/
    font-weight: 700;
    color: #fff;
  }
  .font-info2 {
    font-size: 20px; /*px*/
    font-weight: 500;
    color: #00fbff;
  }

  .font-info3 {
    font-size: 14px; /*px*/
    font-weight: 500;
    color: #1bced4;
  }
}
</style>