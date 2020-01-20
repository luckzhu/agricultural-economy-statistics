<template>
  <div>
    <div class="liquid-fill" :id="id" />
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
import "echarts-liquidfill";

export default {
  name: "BenefitBind",
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
          type: "liquidFill",
          radius: "55%",
          center: [i * 24 + 14 + "%", "60%"],
          data: [item.percent / 100],
          color: [colors[i]],
          outline: {
            borderDistance: 5,
            itemStyle: {
              borderWidth: 5,
              borderColor: colors[i]
            }
          },
          label: {
            normal: {
              textStyle: {
                fontSize: 36,
                fontWeight: "bold",
                color: "#fff",
                // color:'#7fe416',
                insideColor: "#fff"
              }
            }
          },
          backgroundStyle: {
            color: "rgba(4,24,74,0.1)",
            borderWidth: 0.8,
            borderColor: colors[i]
          }
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
.liquid-fill {
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
    color: #fff;
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