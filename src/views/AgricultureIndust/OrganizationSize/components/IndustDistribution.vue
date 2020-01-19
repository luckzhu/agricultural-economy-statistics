<template>
  <div class="industDist">
    <div class="chart-title-wrapper">
      <p class="chart-title">· 农业产业化组织产业分布</p>
    </div>

    <div class="percent-bar" v-for="(bar,index) in chartData" :key="index">
      <p class="font-barTitle">{{bar[1]}}</p>
      <div class="item-bar">
        <div
          :style="{width:barWidth(bar[0]),backgroundColor:colors[index],height:'100%'}"
          class="item-bar-color"
        >
          <span class="item-bar-describe">{{bar[0]+'家 '+ '('+barWidth(bar[0])+')'}}</span>
          <p class="item-info">{{bar[2]}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chartData: {
      type: Array
    }
  },
  data() {
    return {
      colors: this.$store.getters.colors
    };
  },
  methods: {
    barWidth(value) {
      let total = 0;
      this.chartData.forEach(item => {
        total += item[0];
      });
      return Math.round((value / total) * 10000) / 100.0 + "%";
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
    color: #00f6fb;
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
  background: #13345e;
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
  color: #1bced4;
  position: absolute;
  left: 0;
  top: 100%;
  // width: 660px;
  margin-top: 6px;
  white-space: nowrap;
}
</style>