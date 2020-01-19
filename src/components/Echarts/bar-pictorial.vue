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
      type: Object,
      default() {
        return {
          info: [
            {
              value: 1345,
              unit: "万亩",
              describe: "种植面积与去年持平"
            }
          ],
          title: "农业产业化组织基地分布",
          subTitle: "种植面积1345万亩，以清远、韶关、云浮等地种植面积最多。",
          unit: "万亩",
          symbol: require("@/assets/symbol/rice.svg"),
          data: [
            {
              name: "清远",
              value: "297"
            },
            {
              name: "韶关",
              value: "136"
            },
            {
              name: "云浮",
              value: "131"
            }
          ]
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
      default: "200px"
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
     // var rocket = 'path://M-244.396,44.399c0,0,0.47-2.931-2.427-6.512c2.819-8.221,3.21-15.709,3.21-15.709s5.795,1.383,5.795,7.325C-237.818,39.679-244.396,44.399-244.396,44.399z M-260.371,40.827c0,0-3.881-12.946-3.881-18.319c0-2.416,0.262-4.566,0.669-6.517h17.684c0.411,1.952,0.675,4.104,0.675,6.519c0,5.291-3.87,18.317-3.87,18.317H-260.371z M-254.745,18.951c-1.99,0-3.603,1.676-3.603,3.744c0,2.068,1.612,3.744,3.603,3.744c1.988,0,3.602-1.676,3.602-3.744S-252.757,18.951-254.745,18.951z M-255.521,2.228v-5.098h1.402v4.969c1.603,1.213,5.941,5.069,7.901,12.5h-17.05C-261.373,7.373-257.245,3.558-255.521,2.228zM-265.07,44.399c0,0-6.577-4.721-6.577-14.896c0-5.942,5.794-7.325,5.794-7.325s0.393,7.488,3.211,15.708C-265.539,41.469-265.07,44.399-265.07,44.399z M-252.36,45.15l-1.176-1.22L-254.789,48l-1.487-4.069l-1.019,2.116l-1.488-3.826h8.067L-252.36,45.15z';
      const tempChartData = JSON.parse(JSON.stringify(this.chartData));
      const { symbol, title, subTitle, unit } = tempChartData;
      console.log(symbol)
      let dataName = [];
      let dataValue = [];
      tempChartData.data.forEach(element => {
        dataName.push(element.name);
        dataValue.push(element.value);
      });
      this.chart.setOption({
        // title: {
        //   text: `· ${title}`,
        //   // subtext: subTitle,
        //   x: "20px",
        //   y: "20px",
        //   textStyle: {
        //     color: "#00F6FB"
        //   },
        //   subtextStyle: {
        //     fontSize: 16
        //   }
        // },
        tooltip: {
          // trigger: "axis",
          // axisPointer: {
          //   type: "shadow"
          // }
        },
        grid: {
          containLabel: true,
          left: "28%",
          top: "10%",
          right: "16%",
          bottom: "10%"
        },
        nameTextStyle: {
          color: "#fff"
        },
        axisLabel: {
          color: "#fff"
        },
        yAxis: {
          data: dataName,
          inverse: true,
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            margin: 18,
            textStyle: {
              fontSize: 20
            }
          },
          axisPointer: {
            label: {
              show: true,
              margin: 20
            }
          }
        },
        xAxis: {
          splitLine: { show: false },
          axisLabel: { show: false },
          axisTick: { show: false },
          axisLine: { show: false }
        },
        series: [
          {
            name: "种植面积",
            type: "pictorialBar",
            symbol: `image://${symbol}`,
            symbolRepeat: true,
            symbolSize: ["40%", "40%"],
            barCategoryGap: "40%",
            barWidth: 80,
            data: dataValue,
            color: "#FFF",
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#fff",
                  fontSize: 20
                },
                position: "right",
                offset: [12, 0],
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