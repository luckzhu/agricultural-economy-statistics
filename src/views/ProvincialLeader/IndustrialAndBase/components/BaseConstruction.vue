<template>
  <div class="base-construction">
    <!-- <div class="dataLable">
      <div class="dataLable1" v-for="(item,index) in chartData.data" :key="index">
        <p class="name">{{item.name}}</p>
        <p class="value">
          {{item.value}}
          <span class="unit">{{chartData.unit}}</span>
        </p>
        <p class="percent">{{Number(`${item.value/chartData.total}`*100).toFixed(2)}}%</p>
      </div>
    </div>-->
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
      title: "基地建设",
      unit: "亿元"
    };
  },
  methods: {
    setOptions(chartData) {
      const { title, unit ,colors} = this;
      this.chart.setOption({
        title: {
          text: `· ${title}`,
          x: "20px",
          y: "20px",
        },
        color: colors,
        tooltip: {
          trigger: "item",
          formatter: `{b}: {c}${unit} {d}%`,
          textStyle: {
            fontSize: 16
          }
        },
        legend: {
          // left:"35%",
          bottom: "10%",
          textStyle: {
            fontSize: 14,
            fontWeight: 500
          }
        },

        series: [
          {
            name: title,
            type: "pie",
            //roseType:'radius',
            radius: "50%",
            center: ["50%", "50%"],
            data: chartData,
            label: {
              position: "outside",
              formatter: `{b} : {c} ${unit} ，{d}%`,
              // formatter: `{d}%`,
              textStyle: {
                fontSize: 14,
                fontWeight: 500
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
.base-construction {
  position: relative;
}
// .dataLable1 {
//   border: 2px solid #fff;
//   border-radius: 15px;
//   width: 260px;
//   height: 120px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   position: absolute;

//   &:nth-child(1) {
//     right: 20px;
//     top: 100px;
//   }
//   &:nth-child(2) {
//     left: 20px;
//     bottom: 100px;
//   }
//   &:nth-child(3) {
//     left: 50%;
//     top: 80px;
//     transform: translateX(-50%);
//     flex-direction: row;
//     height: 80px;
//   }
//   &:nth-child(4) {
//     left: 20px;
//     top: 100px;
//   }
//   &:nth-child(5) {
//     right: 20px;
//     bottom: 100px;
//   }
//   .name {
//     font-size: 22px;
//     margin: 16px 0 6px 0;
//     color: #00fbff;
//   }
//   .value {
//     font-size: 40px;
//     color: #fff;
//     .unit {
//       font-size: 20px;
//     }
//   }
//   .percent {
//     background-color: #181d3d;
//     position: absolute;
//     left: 50%;
//     transform: translate(-50%, 50%);
//     bottom: 100%;
//     border: 2px solid #fff;
//     border-radius: 10px;
//     padding: 10px 20px;
//     font-size: 16px;
//   }
// }
</style>