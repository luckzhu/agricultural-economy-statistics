<template>
  <div class="industDist">
    <div class="chart-title-wrapper">
      <p class="chart-title">· 农业产业化组织产业分布</p>
    </div>

    <div class="percent-bar" v-for="(bar,index) in chartData" :key="index">
      <p class="font-barTitle">{{bar.name}}</p>
      <div class="item-bar">
        <div
          :style="{width:`${bar.percent}%`,backgroundColor:colors[index],height:'100%'}"
          class="item-bar-color"
        >
          <span class="item-bar-describe">{{`${bar.value}家（${bar.percent} %）`}}</span>
          <p class="item-info">{{bar.describe}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: this.$store.getters.colors,
      option: [
        {
          name: "种植业",
          value: "zzy",
          percent: "zzyRate",
          describe: "以种植业产品为对象，实行一体化经营的组织"
        },
        {
          name: "畜牧业",
          value: "xmy",
          percent: "xmyRate",
          describe: "以畜禽产品为对象，实行一体化经营的组织"
        },
        {
          name: "水产业",
          value: "scy",
          percent: "scyRate",
          describe: "以淡水或海水养殖或捕捞产品为对象，实行一体化经营的组织"
        },
        {
          name: "林业",
          value: "ly",
          percent: "lyRate",
          describe: "以木材、竹材、林产品为对象，实行一体化经营的组织"
        },
        {
          name: "其它",
          value: "qty",
          percent: "qtyRate",
          describe: "在种植业、畜牧业、水产业、林业以外的产业化组织"
        }
      ],
      chartData: []
    };
  },
  mounted() {
    this.convertData({ option: this.option, data: this.graphData });
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
      }
    }
  },
  methods: {
    convertData({ option, data }) {
      if (!data) return;
      option.forEach(item => {
        let obj = {};
        obj.name = item.name;
        obj.describe = item.describe;
        obj.value = data[item.value];
        obj.percent = data[item.percent];
        this.chartData.push(obj);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.industDist {
  width: 100%;
}
.chart-title-wrapper {
  padding: 24px 0;
  text-align: left;
  .chart-title {
    font-size: 20px; /*px*/
    color: $primary-font-color;
    font-weight: 600;
    padding-left: 28px;
  }
}

.percent-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  &:not(:last-child) {
    margin-bottom: 40px;
  }
  padding: 0 30px 0 4px;
}
.item-bar {
  height: 30px;
  width: 100%;
  background: $light-background-color;
  position: relative;
}

.font-barTitle {
  width: 80px;
  font-size: 20px; /*px*/
  font-weight: 700;
  color: #fff;
  text-align: left;
  letter-spacing: 0;
  white-space: nowrap;
}
.item-bar-color {
  position: relative;
}
.item-bar-describe {
  position: absolute;
  left: 100%;
  top: 0;
  white-space: nowrap;
  margin-left: 20px;
  font-size: 16px; /*px*/
  font-weight: 500;
  color: #fff;
  line-height: 30px;
}
.item-info {
  font-size: 12px; /*px*/
  line-height: 16px;
  letter-spacing: 1px;
  text-align: left;
  color: $light-font-color;
  position: absolute;
  left: 0;
  top: 100%;
  // width: 660px;
  margin-top: 6px;
  white-space: nowrap;
}
</style>