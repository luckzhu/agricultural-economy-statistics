<template>
  <div class="base-output">
    <div
      :id="id"
      :style="{height:height,width:width}"
      :chartData="chartData"
    />
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
      title: "总体规模",
      unit: "亿元"
    };
  },
  methods: {
    setOptions(chartData) {
      if (!chartData.total) return;
      const { title, unit, colors } = this;
      const { total, keyLeading } = chartData;
      const option = ["ltSaleNum", "fixAssets", "netProfit", "tax", "employeeNum"];
      let totalData = [];
      let keyData = [];
      option.map(item => {
        totalData.push(total[item]);
        keyData.push(keyLeading[item]);
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
              pixelRatio: "5",
              excludeComponents: ["toolbox", "title"]
            }
          }
        },
        legend: {
          bottom: "5%",
          data: ["全省农业产业化龙头企业指标值", "省重点龙头企业指标值"]
        },
        radar: {
          radius: "70%",
          name: {
            textStyle: {
              color: "#fff",
              backgroundColor: "#999",
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: "销售收入",  },
            { name: "固定资产净值",  },
            { name: "净利润",  },
            { name: "上缴税金",  },
            { name: "从业人员（万人）", }
          ]
        },
        series: [
          {
            type: "radar",

            label: {
              show: true,
              formatter: function(params) {
                return params.value;
              }
            },
            data: [
              {
                value: totalData,
                name: "全省农业产业化龙头企业指标值"
              },
              {
                value: keyData,
                name: "省重点龙头企业指标值"
              }
            ]
          }
        ]
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>