<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from "echarts";
import resize from "@/components/Echarts/mixins/resize";

export default {
  mixins: [resize],
  props: {
    chartData: {
      type: Object
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
      default: "410px"
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
      this.chart = echarts.init(document.getElementById(this.id), "infographic");
      this.setOptions(this.chartData);
    },
    setOptions({ expectedData, actualData } = {}) {
      let tempChartData = JSON.parse(JSON.stringify(this.chartData));
      const { data, title, subTitle, unit, dataName } = tempChartData;
      const colors = this.$store.getters.colors;
      let series = [];
      data.forEach(item => {
        series.push({
          data: item.value,
          name: item.name,
          stack: "one",
          type: "bar",
          label: {
            // show: true
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
        tooltip: {
          trigger: "shadow"
        },
        color: colors,
        legend: {
          orient: "vertical",
          top: "70",
          left: "200",
          textStyle: {
            // color: "#fff",
            fontSize: 14
          },
          data: [
            { name: "龙头企业带动型", icon: "roundRect" },
            { name: "合作组织带动型", icon: "roundRect" },
            "\n", //legend强制换行
            { name: "专业场带动型", icon: "roundRect" },
            { name: "其他类型", icon: "roundRect" }
          ]
        },
        grid: {
          left: "2%",
          right: "2%",
          top: "14%",
          bottom: "10%"
        },
        nameTextStyle: {
          color: "#fff"
        },
        axisLabel: {
          color: "#fff"
        },
        barCategoryGap: "50%",
        xAxis: [
          {
            type: "category",
            // axisLine: { show: false },
            // axisTick: { show: false },
            data: dataName
          }
        ],
        yAxis: [
          {
            type: "value",
            splitLine: { show: false },
            axisLabel: { show: false },
            axisTick: { show: false },
            axisLine: { show: false }
          }
        ],
        series: series
      });
    }
  }
};
</script>