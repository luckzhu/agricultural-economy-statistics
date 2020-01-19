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
      this.chart = echarts.init(document.getElementById(this.id));
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
        tooltip: {
          trigger: "shadow"
        },
        color: colors,
        legend: {
          top: "100",
          textStyle: {
            color: "#fff",
            fontSize: 16
          },
          itemGap: 20,
          itemWidth: 20,
          itemHeight: 14
        },
        grid: {
          left: "2%",
          right: "2%",
          top: "12%",
          bottom: "8%"
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