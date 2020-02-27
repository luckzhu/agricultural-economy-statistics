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
      default: "410px"
    }
  },
  data() {
    return {
      title: "农业产业化组织区域分布",
      unit: "家"
    };
  },

  methods: {
    setOptions(chartData = {}) {
      const { title, unit, colors } = this;
      let series = [];
      let dataName = [];
      let sum = [];
      let option = [
        {
          name: "龙头企业带动型",
          field: "ltOrgan",
          xAxis: "cityName",
          value: []
        },
        {
          name: "合作组织带动型",
          field: "coopOragn",
          xAxis: "cityName",
          value: []
        },
        {
          name: "专业市场带动型",
          field: "marketSum",
          xAxis: "cityName",
          value: []
        },
        {
          name: "其他类型",
          field: "otherOrgan",
          xAxis: "cityName",
          value: []
        }
      ];
      option.forEach(item => {
        chartData.forEach(ele => {
          item.value.push(ele[item.field]);
          let xAxis = ele[item.xAxis].replace(/市.*/, "");
          if (!dataName.includes(xAxis)) {
            dataName.push(xAxis);
          }
          if (!sum.includes(ele.sum)) {
            sum.push(ele.sum);
          }
        });
      });
      option.forEach(item => {
        series.push({
          data: item.value,
          name: item.name,
          stack: "one",
          type: "bar"
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
              pixelRatio: "5",
              excludeComponents: ["toolbox", "title"]
            }
          }
        },
        tooltip: {
          trigger: "shadow"
        },
        legend: {
          orient: "vertical",
          top: "70",
          right: "200",
          textStyle: {
            // color: "#fff",
            fontSize: 14
          },
          data: [
            { name: "龙头企业带动型", icon: "roundRect" },
            { name: "合作组织带动型", icon: "roundRect" },
            "\n", //legend强制换行
            { name: "专业市场带动型", icon: "roundRect" },
            { name: "其他类型", icon: "roundRect" }
          ]
        },
        grid: {
          left: "2%",
          right: "2%",
          top: "18%",
          bottom: "9%"
        },
        label: {
          show: true,
          position: "top",
          formatter: params => {
            if (params.componentIndex === 3) {
              return sum[params.dataIndex];
            }
            return "";
          }
        },
        barCategoryGap: "50%",
        xAxis: [
          {
            type: "category",
            data: dataName,
            splitLine: { show: false }
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