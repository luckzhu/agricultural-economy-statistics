<template>
  <div :id="id" :style="{height:height,width:width}" />
</template>

<script>
import resize from "@/components/Echarts/mixins/resize";
import common from "@/components/Echarts/mixins/common";

export default {
  mixins: [resize, common],
  props: {
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
      unit: "家",
      title: "县区分布"
    };
  },
  methods: {
    setOptions(chartData) {
      const { title, unit, colors } = this;
      let dataName = [];
      let dataValue = [];
      chartData
        .filter(item => item.value >= 10)
        .forEach(element => {
          dataName.push(element.name);
          dataValue.push(element.value);
        });

      this.chart.setOption({
        title: {
          text: `· ${title}`,
          x: "20px",
          y: "20px"
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
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          },
          formatter: function(params) {
            return `${params[0].value} ${unit}`;
          }
        },
        itemStyle: {
          color: function(params) {
            const colorList = [...colors, ...colors, ...colors, ...colors];
            return colorList[params.dataIndex];
          }
        },
        grid: {
          top: "7%",
          left: "10%",
          right: "12%",
          bottom: "2%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          splitLine: { show: false },
          axisLabel: { show: false },
          axisTick: { show: false },
          axisLine: { show: false }
        },
        yAxis: {
          type: "category",
          inverse: true,
          data: dataName,
          axisLine: { show: false },
          axisTick: { show: false },
          // nameGap: 30,
          offset: 10,
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 12
            }
          }
        },
        series: [
          {
            type: "bar",
            data: dataValue,
            barMaxWidth: 24,
            barGap: "80%",
            barCategoryGap: "50%",
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 12
                },
                position: "right",
                offset: [10, 0],
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