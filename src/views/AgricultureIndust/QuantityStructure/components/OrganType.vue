<template>
  <div>
    <div class="organ-type" :id="id" />
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
export default {
  name: "OrganType",
  mixins: [resize],
  data() {
    return {
      chart: null,
      option: {
        title: "农业产业化组织类型",
        unit: "亿元",
        data: [
          {
            name: "龙头企业带动型",
            valueField: "ltOrgan",
            percentField: "ltOrganRate",
            subText: "县以上农业产业化主管部门认定的龙头企业"
          },
          {
            name: "合作组织带动型",
            valueField: "coopOragn",
            percentField: "coopOragnRate",
            subText: "县以上农业产业化主管部门认定的农民专业合作示范社"
          },
          {
            name: "专业市场带动型",
            valueField: "marketSum",
            percentField: "marketSumRate",
            subText: "年交易额2000万元以上的专业批发市场（不含龙头企业）"
          },
          {
            name: "其他类型",
            valueField: "otherOrgan",
            percentField: "otherOrganRate",
            subText: "比如协会、联盟等"
          }
        ]
      },
      id: "organType",
      chartData: {
        title: "",
        unit: "",
        data: []
      }
    };
  },
  computed: {
    graphData() {
      return this.$store.getters.graphData;
    }
  },
  watch: {
    graphData: {
      deep: true,
      handler(val) {
        this.convertData({ option: this.option, data: val });
        this.setOptions(this.chartData);
      }
    }
  },
  mounted() {
    this.convertData({ option: this.option, data: this.graphData });
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
    setOptions(chartData = {}) {
      const { data, title, subTitle, unit } = chartData;
      const colors = this.$store.getters.colors;
      let series = [];
      data.forEach((item, i) => {
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
                  color: "#fff",
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
       console.log(this.chart)
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
    },
    //转换数据格式，适应图表
    convertData({ option, data }) {
      let arr = [];
      console.log(data);
      option.data.forEach(item => {
        let obj = {};
        obj.name = item.name;
        obj.value = data[item.valueField];
        let percent = Number((data[item.percentField] * 100).toFixed(0));
        obj.percent = percent;
        if (percent < 1) {
          obj.percent = Number((data[item.percentField] * 100).toFixed(1));
        }
        obj.subText = item.subText;
        arr.push(obj);
      });
      this.chartData.title = option.title;
      this.chartData.unit = option.unit;
      this.chartData.data = arr;
      console.log(this.chartData);
    }
  }
};
</script>

<style lang="scss" scoped>
.organ-type {
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