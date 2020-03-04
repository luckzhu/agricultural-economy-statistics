<template>
  <div class="base-output">
    <div :id="id" :style="{height:height,width:width}" :chartData="chartData" />
  </div>
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
      title: "带动农户",
      unit: "亿元"
    };
  },
  methods: {
    setOptions(chartData) {
      const { title, unit, colors } = this;
      this.chart.setOption({
        title: [
          {
            text: `· ${title}`,
            x: "20px",
            y: "20px"
          },
          {
            text: "带动农户\n发展生产\n产值结构",
            x: "center",
            y: "center",
            textStyle: {
              lineHeight: 34,
              fontSize: 20,
              fontWeight: 500
            }
          }
        ],
        color: colors,
        tooltip: {
          trigger: "item",
          formatter: "{a}: {d}%",
          textStyle: {
            fontSize: 16
          }
        },
        legend: {
          // left:"35%",
          bottom: "4%",
          textStyle: {
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
            data: chartData,
            label: {
              position: "outside",
              formatter: `{b}：{d}%`,
              // formatter: `{d}%`,
              textStyle: {
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