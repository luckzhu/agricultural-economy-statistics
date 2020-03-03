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
    return {};
  },
  methods: {
    setOptions(chartData) {
      if (!chartData) return;
      const { color } = this;

      let geoCoordMap = {};
      const convertData = data => {
        let res = [];
        data.map(item => {
          geoCoordMap[item.name] = item.coordinate;
          res.push({
            name: item.name,
            value: item.coordinate.concat(1)
          });
        });
        return res;
      };
      let series = [];
      let listed = ["主板上市", "中小板上市", "创业板上市", "新三板上市", "新四板上市", "母公司上市"];
      let list = {};
      listed.map(item => {
        let arr = [];
        chartData.map(ele => {
          if (ele.listed === item) {
            arr.push(ele);
          }
        });
        list[item] = arr;
      });
      for (const key in list) {
        series.push({
          name: key,
          type: "scatter",
          coordinateSystem: "geo",
          symbol: "circle",
          symbolOffset: ["10%", "50%"],
          symbolSize: 14,
          hoverAnimation: true,
          label: {
            normal: {
              show: false
            }
          },
          data: convertData(list[key])
        });
      }
      this.chart.setOption({
        title: {
          text: "· 上市进程",
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
          left: "15%",
          bottom: "10%",
          textStyle: {
            fontSize: 16
          }
        },

        geo: {
          show: true,
          map: "广东",
          silent: true, //不触发鼠标事件
          aspectScale: 1, //长宽比
          label: {
            normal: {
              show: true,
              fontSize: 14,
              color: "#333",
              formatter: ({ name }) => {
                return name.replace(/市.*/, "");
              }
            },
            emphasis: {
              show: false
            }
          },
          //固定每个区域的颜色
          regions: [
            {
              name: "梅州市",
              itemStyle: {
                areaColor: "#F3F8E9"
              }
            },
            {
              name: "潮州市",
              itemStyle: {
                areaColor: "#FFF1B5"
              }
            },
            {
              name: "揭阳市",
              itemStyle: {
                areaColor: "#FFFAB5"
              }
            },
            {
              name: "汕头市",
              itemStyle: {
                areaColor: "#B1D9B3"
              }
            },
            {
              name: "汕尾市",
              itemStyle: {
                areaColor: "#F9D7E6"
              }
            },
            {
              name: "河源市",
              itemStyle: {
                areaColor: "#FFF1B5"
              }
            },
            {
              name: "惠州市",
              itemStyle: {
                areaColor: "#F3F8E9"
              }
            },
            {
              name: "韶关市",
              itemStyle: {
                areaColor: "#B1D9B3"
              }
            },
            {
              name: "清远市",
              itemStyle: {
                areaColor: "#D6E7F7"
              }
            },
            {
              name: "广州市",
              itemStyle: {
                areaColor: "#F9D7E6"
              }
            },
            {
              name: "东莞市",
              itemStyle: {
                areaColor: "#FFF9B5"
              }
            },
            {
              name: "深圳市",
              itemStyle: {
                areaColor: "#F9D7E6"
              }
            },
            {
              name: "肇庆市",
              itemStyle: {
                areaColor: "#FFF1B5"
              }
            },
            {
              name: "佛山市",
              itemStyle: {
                areaColor: "#F3F8E9"
              }
            },
            {
              name: "中山市",
              itemStyle: {
                areaColor: "#D6E7F7"
              }
            },
            {
              name: "珠海市",
              itemStyle: {
                areaColor: "#F3F8E9"
              }
            },
            {
              name: "云浮市",
              itemStyle: {
                areaColor: "#B1D9B3"
              }
            },
            {
              name: "江门市",
              itemStyle: {
                areaColor: "#F9D7E6"
              }
            },
            {
              name: "阳江市",
              itemStyle: {
                areaColor: "#FFF1B5"
              }
            },
            {
              name: "茂名市",
              itemStyle: {
                areaColor: "#F8BA63"
              }
            },
            {
              name: "湛江市",
              itemStyle: {
                areaColor: "#F9D7E6"
              }
            }
          ],
          itemStyle: {
            borderColor: "#409EFF",
            borderWidth: 0.2
          },
          left: "5%",
          top: "10%",
          zoom: 1.1,
          roam: false
        },
        series
      });
    }
  }
};
</script>
