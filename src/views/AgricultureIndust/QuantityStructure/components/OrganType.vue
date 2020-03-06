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
import resize from "@/components/Echarts/mixins/resize";
import common from "@/components/Echarts/mixins/common";
export default {
  name: "OrganType",
  mixins: [resize, common],
  data() {
    return {
      unit: "亿元",
      title: "农业产业化组织类型",
      id: "organType"
    };
  },

  methods: {
    setOptions(chartData = {}) {
      const { title, unit, colors } = this;
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
              pixelRatio: "5",
              excludeComponents: ["toolbox", "title"]
            }
          }
        },
        series: series
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.organ-type {
  height: 280px;
  width: 100%;
}
</style>