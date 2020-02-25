<template>
  <div :id="id" :style="{height:height,width:width}" />
</template>

<script>
import resize from "./mixins/resize";
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
    },
    unit: {
      type: String,
      default: "亿元"
    },
    title: {
      type: String,
      default: "数据图表"
    }
  },
  data() {
    return {};
  },
  methods: {
    setOptions(chartData) {
      if (!chartData) return;
      const { colors, unit, title } = this;
      const compare = function(property) {
        return function(a, b) {
          var value1 = a[property];
          var value2 = b[property];
          return value2 - value1;
        };
      };
      // 防止重新排序后，watch  的 infinite loop
      const copyData = JSON.parse(JSON.stringify(chartData));
      let data = copyData.sort(compare("value"));

      let dataName = [];
      let dataValue = [];
      data.forEach(element => {
        dataName.push(element.name.replace(/市.*/, ""));
        dataValue.push(element.value);
      });
      this.chart.setOption({
        title: {
          text: `· ${title}`,
          x: "20px",
          y: "20px"
        },
        tooltip: {
          trigger: "item",
          formatter: `{b}: {c}${unit}`
        },
        // dataRange: {
        //   show: false,
        //   min: 0,
        //   max: 800,
        //   calculable: true,
        //   color: colors,
        //   y: "center"
        // },
        grid: {
          top: "17%",
          left: 0,
          right: "3%",
          bottom: "4%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            show: true,
            data: dataName
          }
        ],
        yAxis: [
          {
            type: "value",
            show: false
          }
        ],
        series: [
          {
            name: title,
            type: "bar",
            barGap: 0.1,
            barWidth: 30,
            // barCategoryGap: 40,
            itemStyle: {
              normal: {
                color: function(params) {
                  // build a color map as your need.
                  let colorList = [...colors, ...colors, ...colors, ...colors];
                  return colorList[params.dataIndex];
                },
                label: {
                  show: true,
                  position: "top",
                  color: "#fff",
                  formatter: "{c}"
                },
                shadowBlur: 80,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            data: dataValue
          }
        ]
      });
    }
  }
};
</script>