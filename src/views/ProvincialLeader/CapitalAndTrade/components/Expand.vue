<template>
  <div
    :id="id"
    :style="{height:height,width:width}"
  />
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

      let geoCoordMap = {
        "中国（广东）": [113.26434464, 23.12907658]
      };
      let BJData = [];
      chartData.map(item => {
        geoCoordMap[item.name] = item.coordinate;
        BJData.push([
          {
            name: item.name,
            value: 1
          },
          {
            name: "中国（广东）"
          }
        ]);
      });
      var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];
          var fromCoord = geoCoordMap[dataItem[0].name];
          var toCoord = geoCoordMap[dataItem[1].name];
          if (fromCoord && toCoord) {
            res.push([
              {
                coord: fromCoord,
                value: dataItem[0].value
              },
              {
                coord: toCoord
              }
            ]);
          }
        }
        return res;
      };

      var series = [];
      [["中国（广东）", BJData]].forEach(function(item, i) {
        series.push(
          {
            type: "lines",
            zlevel: 2,
            effect: {
              show: true,
              period: 4, //箭头指向速度，值越小速度越快
              trailLength: 0.6, //特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: "arrow", //箭头图标
              symbolSize: 5 //图标大小
            },
            lineStyle: {
              normal: {
                width: 1,
                opacity: 0.03,
                curveness: 0.1
              }
            },

            data: convertData(item[1])
          },
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
              //涟漪特效
              period: 4, //动画时间，值越小速度越快
              brushType: "stroke", //波纹绘制方式 stroke, fill
              scale: 4 //波纹圆环最大限制，值越大波纹越大
            },
            label: {
              normal: {
                show: true,
                position: "right", //显示位置
                offset: [5, 0], //偏移设置
                formatter: "{b}", //圆环显示文字
                fontSize: 16
              },
              emphasis: {
                show: true
              }
            },
            symbol: "circle",
            symbolSize: function(val) {
              return 4 + val[2] / 1000; //圆环大小
            },
            itemStyle: {
              normal: {
                show: false
              }
            },
            data: item[1].map(function(dataItem) {
              return {
                name: dataItem[0].name,
                value: geoCoordMap[dataItem[0].name] ? geoCoordMap[dataItem[0].name].concat([dataItem[0].value]) : ""
              };
            })
          },
          //被攻击点
          {
            type: "scatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
              period: 4,
              brushType: "stroke",
              scale: 4
            },
            label: {
              normal: {
                show: true,
                position: "right",
                // color: "#00ffff",
                formatter: "{b}",
                textStyle: {
                  fontSize: 16
                  // color: "#0bc7f3"
                }
              },
              emphasis: {
                show: true
              }
            },
            symbol: "pin",
            symbolSize: 30,
            itemStyle: {
              normal: {
                show: true
                // color: "#9966cc"
              }
            },
            data: [
              {
                name: item[0],
                value: geoCoordMap[item[0]].concat([100])
              }
            ]
          }
        );
      });
      this.chart.setOption({
        title: {
          text: "· 对外拓展",
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

        geo: {
          map: "世界",
          label: {
            emphasis: {
              show: false
            }
          },

          roam: true, //是否允许缩放
          layoutCenter: ["0%", "30%"], //地图位置
          layoutSize: "250%",
          itemStyle: {
            normal: {
              areaColor: "#323c48",
              borderColor: "#8F98A6"
            },
            emphasis: {
              areaColor: "#2a333d"
            }
          }
        },

        series: series
      });
    }
  }
};
</script>
