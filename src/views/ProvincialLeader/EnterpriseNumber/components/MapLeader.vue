<template>
  <div :id="id" :style="{height:height,width:width}" />
</template>

<script>
import echarts from "echarts";
import resize from "@/components/Echarts/mixins/resize";
import guangdong from "@/assets/map/guangdong.json";

export default {
  mixins: [resize],
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
      chart: null
    };
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val);
      }
    }
  },
  mounted() {
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
      echarts.registerMap("广东", guangdong);
      this.setOptions(this.chartData);
    },
    setOptions({ expectedData, actualData } = {}) {
      let data = [
        { name: "广州市", value: 5 },
        { name: "东莞市", value: 3 },
        { name: "深圳市", value: 7 },
        { name: "韶关市", value: 1 },
        { name: "清远市", value: 1 },
        { name: "云浮市", value: 1 },
        { name: "肇庆市", value: 0 },
        { name: "茂名市", value: 1 },
        { name: "湛江市", value: 6 },
        { name: "阳江市", value: 2 },
        { name: "江门市", value: 1 },
        { name: "佛山市", value: 2 },
        { name: "河源市", value: 3 },
        { name: "惠州市", value: 3 },
        { name: "中山市", value: 2 },
        { name: "珠海市", value: 2 },
        { name: "梅州市", value: 2 },
        { name: "潮州市", value: 3 },
        { name: "汕头市", value: 4 },
        { name: "揭阳市", value: 1 },
        { name: "汕尾市", value: 1 }
      ];
      var geoCoordMap = {
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
      var max = 10,
        min = 0;
      var maxSize4Pin = 10,
        minSize4Pin = 1;

      var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
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
          text: "· 省重点农业龙头企业地市分布",
          // subtext:
          //   "  省重点农业龙头企业数量以梅州最多，132家，其次是湛江和茂名，分别为76家和69家；其中，国家农业产业化龙头企业集中在珠三角片区。",
          x: "20px",
          y: "20px",
          textStyle: {
            color: "#00F6FB"
          },
          subtextStyle: {
            fontSize: 16
          }
        },
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            if (typeof params.value[2] == "undefined") {
              return params.name + " : " + params.value;
            } else {
              return params.name + " : " + params.value[2];
            }
          }
        },
        // legend: {
        //   orient: "vertical",
        //   y: "bottom",
        //   x: "right",
        //   data: ["地市分布"],
        //   textStyle: {
        //     color: "#fff"
        //   }
        // },
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
            color: [
              // "#92D050",
              "#A18CBA",
              // "#FFC000",
              "#64D3B2",
              "#64B8D4",
              "#FF9898"
            ] // 黑紫黑
          }
        },
        geo: {
          show: true,
          map: "广东",
          label: {
            normal: {
              show: true,
              fontSize: 16,
              color: "#fff"
            },
            emphasis: {
              show: false
            }
          },
         
          left:20,
          top:100,
          zoom:0.95,
          roam: true,
          itemStyle: {
            normal: {
              areaColor: "#ddd",
              borderColor: "#00fbff",
              color: "#333"
            },
            emphasis: {
              show: false,
              areaColor: "#01fea8"
            }
          }
        },
        series: [
          {
            name: "地市分布",
            type: "scatter",
            coordinateSystem: "geo",
            data: convertData(data),
            symbolSize: 4,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: false
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "#fff"
              }
            }
          },
          {
            type: "map",
            map: "广东",
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: "#fff"
                }
              }
            },
            roam: true,

            animation: false,
            data: data
          },
          {
            name: "点",
            type: "scatter",
            coordinateSystem: "geo",
            symbol: "pin",
            symbolSize: [50, 50],
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#fff",
                  fontSize: 14
                },
                formatter(value) {
                  if (value.data.value[2] === 0) {
                    return "";
                  }
                  return value.data.value[2];
                }
              }
            },
            itemStyle: {
              normal: {
                color: "#13345e" //标志颜色
              }
            },
            zlevel: 6,
            data: convertData(data)
          }
        ]
      });
    }
  }
};
</script>
