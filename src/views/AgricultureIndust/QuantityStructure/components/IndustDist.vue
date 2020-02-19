<template>
  <div class="industDist">
    <div class="chart-title-wrapper">
      <p class="chart-title">· 农业产业化组织产业分布</p>
    </div>

    <div class="percent-bar" v-for="(bar,index) in chartData" :key="index">
      <p class="font-barTitle">{{bar.category}}</p>
      <div class="item-bar">
        <div
          :style="{width:`${bar.percent}%`,backgroundColor:colors[index],height:'100%'}"
          class="item-bar-color"
        >
          <span class="item-bar-describe">{{`${bar.value}家（${bar.percent}%）`}}</span>
          <p class="item-info">{{bar.describe}}</p>
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

  methods: {}
};
</script>

<style lang="scss" scoped>
.industDist {
  width: 100%;
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
  border-radius: 4px;
}

.font-barTitle {
  width: 80px;
  font-size: 20px; /*px*/
  font-weight: 700;
  color: $primary-title-color;
  text-align: left;
  letter-spacing: 0;
  white-space: nowrap;
}
.item-bar-color {
  position: relative;
  border-radius: 4px;
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