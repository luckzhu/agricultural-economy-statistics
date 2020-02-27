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
      // let chartData = [
      //   { name: "广州市", value: 5 },
      //   { name: "东莞市", value: 3 },
      //   { name: "深圳市", value: 7 },
      //   { name: "韶关市", value: 1 },
      //   { name: "清远市", value: 1 },
      //   { name: "云浮市", value: 1 },
      //   { name: "肇庆市", value: 0 },
      //   { name: "茂名市", value: 1 },
      //   { name: "湛江市", value: 6 },
      //   { name: "阳江市", value: 2 },
      //   { name: "江门市", value: 1 },
      //   { name: "佛山市", value: 2 },
      //   { name: "河源市", value: 3 },
      //   { name: "惠州市", value: 3 },
      //   { name: "中山市", value: 2 },
      //   { name: "珠海市", value: 2 },
      //   { name: "梅州市", value: 2 },
      //   { name: "潮州市", value: 3 },
      //   { name: "汕头市", value: 4 },
      //   { name: "揭阳市", value: 1 },
      //   { name: "汕尾市", value: 1 }
      // ];
      const geoCoordMap = {
        广州市: [113.500637, 23.425178],
        东莞市: [113.946262, 22.946237],
        深圳市: [114.185947, 22.547],
        韶关市: [113.591544, 24.801322],
        清远市: [113.051227, 24.2],
        云浮市: [111.744439, 22.929801],
        肇庆市: [112.272529, 23.551546],
        茂名市: [110.919229, 22.059751],
        湛江市: [110.124977, 21.174898],
        阳江市: [111.975107, 21.859222],
        江门市: [112.594942, 22.190431],
        佛山市: [112.922717, 23.028762],
        河源市: [114.807802, 23.946266],
        惠州市: [114.412599, 23.279404],
        中山市: [113.382391, 22.521113],
        珠海市: [113.553986, 22.124979],
        梅州市: [116.117582, 24.299112],
        潮州市: [116.732301, 23.761701],
        汕头市: [116.708463, 23.37102],
        揭阳市: [116.055733, 23.343778],
        汕尾市: [115.464238, 22.974485]
      };
      // var max = 10,
      //   min = 0;
      // var maxSize4Pin = 10,
      //   minSize4Pin = 1;

      const convertData = data => {
        let res = [];
        for (let i = 0; i < data.length; i++) {
          let geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            });
          }
        }
        return res;
      };
      this.chart.setOption({
        title: {
          text: "· 加工产值",
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
        // tooltip: {
        //   trigger: "item",
        //   formatter: function(params) {
        //     if (typeof params.value[2] == "undefined") {
        //       return params.name + " : " + params.value;
        //     } else {
        //       return params.name + " : " + params.value[2];
        //     }
        //   }
        // },
        legend: {
          orient: "vertical",
          selectedMode: false,
          bottom: "15%",
          left: "30%",
          data: ["省重点农业龙头企业"],
          textStyle: {
            fontSize: 16
          }
        },
        visualMap: {
          show: false,
          min: 0,
          max: 10,
          left: "left",
          top: "bottom",
          // text: ["高", "低"], // 文本，默认为数值文本
          calculable: true,
          seriesIndex: [1],
          inRange: {
            // color: ['#3B5077', '#031525'] // 蓝黑
            // color: ['#ffc0cb', '#800080'] // 红紫
            // color: ['#3C3B3F', '#605C3C'] // 黑绿
            // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
            // color: ['#23074d', '#cc5333'] // 紫红
            // color: ['#1488CC', '#2B32B2'] // 浅蓝
            // color: ["#00467F", "#A5CC82", "#ffc0cb"] // 蓝绿红
            // color: ['#00467F', '#A5CC82'] // 蓝绿
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
              color: "#333"
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
          left: "10%",
          top: "15%",
          zoom: 1.1,
          roam: false
        },
        series: [
          {
            type: "map",
            map: "广东",
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: "#fff"
                }
              }
            },
            itemStyle: {
              normal: {
                areaColor: "#031525",
                borderColor: "#3B5077"
              },
              emphasis: {
                areaColor: "#2B91B7"
              }
            },
            roam: true,
            animation: false,
            data: chartData
          },
          {
            name: "省重点农业龙头企业",
            type: "scatter",
            coordinateSystem: "geo",
            symbol: "circle",
            symbolOffset: ["10%", "50%"],
            symbolSize: function(val) {
              return Math.sqrt(val[2]) * 20;
            },

            hoverAnimation: true,
            label: {
              normal: {
                show: true,
                textStyle: {
                  // color: "#fff",
                  fontSize: 14
                },
                formatter(value) {
                  if (value.data.value[2] === 0) {
                    // return "";
                  }
                  return value.data.value[2];
                }
              }
            },
            itemStyle: {
              normal: {
                color: "rgba(248,169,118,.8)" //标志颜色
              }
            },
            zlevel: 6,
            data: convertData(chartData)
          }
        ]
      });
    }
  }
};
</script>
