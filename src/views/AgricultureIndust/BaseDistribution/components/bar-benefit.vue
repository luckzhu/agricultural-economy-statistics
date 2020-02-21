<template>
  <div class="benefit">
    <div class="word" v-for="info in chartData.info" :key="info.value">
      <p class="value">
        {{info.value}}
        <span class="unit">{{info.unit}}</span>
      </p>
    </div>
    <div class="chart" :id="id" :style="{height:height,width:width}" />
  </div>
</template>

<script>
import echarts from "echarts";
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
  methods: {
    compare(property) {
      return function(a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value2 - value1;
      };
    },
    setOptions(chartData) {
      const { sort, info } = chartData;
      const { unit, name } = info[0];
      const { colors } = this;
      let dataName = [];
      let dataValue = [];
      // 防止重新排序后，watch  的 infinite loop
      const copySort = JSON.parse(JSON.stringify(sort));
      copySort.sort(this.compare("value"));

      copySort.forEach(element => {
        dataName.push(element.region);
        dataValue.push(element.value);
      });

      this.chart.setOption({
        title: {
          text: `· ${name}`,
          // subtext: subTitle,
          x: "20px",
          y: "20px",
          textStyle: {
            // color: "#00F6FB"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
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
        itemStyle: {
          color: function(params) {
            return colors[params.dataIndex];
          }
        },
        grid: {
          top: "28%",
          left: "8%",
          right: "20%",
          bottom: "0%",
          containLabel: true
        },
        nameTextStyle: {
          // color: "#fff"
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
              // color: "#fff",
              fontSize: 16
            }
          }
        },
        series: [
          {
            type: "bar",
            data: dataValue,
            barMaxWidth: 18,
            barGap: -40,
            label: {
              normal: {
                show: true,
                textStyle: {
                  // color: "#fff",
                  fontSize: 16
                },

                position: "right",
                offset: [10, 0],
                formatter: function(params) {
                  return `${params.value} ${unit}`;
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

<style lang="scss" scoped>
@import "@/styles/_handle.scss";

.benefit {
  position: relative;

  .word {
    position: absolute;
    right: 30px;
    bottom: 30px;
    @include font_color("font_color_primary");
    .value {
      font-size: 50px;
      font-weight: 700;
    }
    .unit {
      font-size: 20px;
      font-weight: 600;
    }
  }
}
</style>