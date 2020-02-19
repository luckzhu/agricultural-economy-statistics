<template>
  <div>
    <div class="liquid-fill" :id="id" />
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
import "echarts-liquidfill";

export default {
  name: "BenefitBind",
  mixins: [resize],
  props: {
    chartData: {
      type: Array,
      default: () => {
        return [
          {
            category: "订单合同方式",
            value: 3555,
            percent: 40,
            describe: "通过合同等契约方式向农户收购农副产品，并及时按约定结算，农户按合同要求进行生产"
          }
        ];
      }
    }
  },
  data() {
    return {
      chart: null,
      title: "农业产业化组织利益联结方式",
      unit: "亿元",
      id: "benefitBind"
    };
  },
  computed: {
    graphData() {
      return this.$store.getters.graphData;
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(this.chartData);
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
                color: colors[i],
                // color:'#7fe416',
                insideColor: "#fff"
              }
            }
          },
          backgroundStyle: {
            color: "rgba(4,24,74,0.01)",
            borderWidth: 0.8,
            borderColor: colors[i]
          }
        });
      });
      this.chart.setOption({
        title: {
          text: `· ${title}`,
          x: "20px",
          y: "20px",
          textStyle: {
            // color: "#00F6FB"
          }
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
    //转换数据格式，适应图表
    convertData({ option, data }) {
      if (!data) return;
      let arr = [];
      option.data.forEach(item => {
        let obj = {};
        obj.name = item.name;
        obj.value = data[item.valueField];
        let percent = Number(data[item.percentField].toFixed(0));
        obj.percent = percent;
        if (percent < 1) {
          obj.percent = Number(data[item.percentField].toFixed(1));
        }
        obj.subText = item.subText;
        arr.push(obj);
      });
      this.chartData.title = option.title;
      this.chartData.unit = option.unit;
      this.chartData.data = arr;
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