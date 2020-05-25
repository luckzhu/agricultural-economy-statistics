<template>
  <div class="funding-container">
    <div class="chart-title-wrapper">
      <p class="chart-title">
        · 资金来源
      </p>
    </div>
    <div class="source-wrapper">
      <div
        v-for="(item,index) in sources"
        :key="item.id"
        class="source"
        :style="{ color: colors[index] }"
      >
        <div class="figure">
          <div class="border1">
            <svg-icon :icon-name="icons[index]" />
          </div>
          <div class="border2">
            <p
              class="index"
              :style="{ backgroundColor: colors[index] }"
            >
              {{ index+1 }}
            </p>
          </div>
        </div>

        <p class="name">
          {{ item.name }}
        </p>
        <p class="value">
          {{ item.value }}
          <span class="unit">{{ item.unit }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line
    chartData: {
      type: Array
    }
  },
  data() {
    return {
      icons: ["finance", "tax", "bank", "foreign-capital"],
      // sources: [
      //   {
      //     id: 1,
      //     name: "财政资金",
      //     value: 13.1,
      //     unit: "亿元",
      //     iconName: "finance"
      //   },
      //   {
      //     id: 2,
      //     name: "减免税收",
      //     value: 142,
      //     unit: "亿元",
      //     iconName: "tax"
      //   },
      //   {
      //     id: 3,
      //     name: "银行贷款",
      //     value: 596,
      //     unit: "亿元",
      //     iconName: "bank"
      //   },
      //   {
      //     id: 4,
      //     name: "实际利用外资",
      //     value: 8.6,
      //     unit: "亿元",
      //     iconName: "foreign-capital"
      //   }
      // ],
      colors: this.$store.getters.colors
    };
  },
  computed: {
    sources() {
      return this.chartData;
    }
  }
};
</script>

<style lang="scss" scoped>
.funding-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .chart-title-wrapper {
    align-self: flex-start;
  }
}
.source-wrapper {
  display: flex;
}
.source {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.figure {
  padding: 20px;
  display: flex;
  // color: #92d050;
  .border1,
  .border2 {
    height: 170px;
    border: 4px solid;
    background: #13345e;
  }
  .border1 {
    width: 120px;
    border-right: none;
    display: flex;
    justify-content: center;
    align-items: center;
    .svg-icon {
      position: relative;
      width: 120px;
      height: 120px;
      transform: translateX(25%);
      z-index: 2;
    }
  }
  .border2 {
    width: 170px;
    border-radius: 50% / 0 50% 50% 0;
    border-left: none;
    margin-left: -100px;
    // transform: translateX(-50%);
    position: relative;
    .index {
      position: absolute;
      left: 50%;
      transform: translate(-80%, -20%);
      top: 100%;
      font-size: 20px;
      width: 40px;
      height: 40px;
      padding: 10px;
      // background: #92d050;
      color: white;
      border: 4px solid white;
      border-radius: 50%;
    }
  }
}
.name {
  margin-top: 40px;
  font-size: 28px;
  font-weight: 600;
  color: #fff;
}
.value {
  margin-top: 20px;
  font-size: 38px;
  font-weight: 600;
  // color: #92d050;
  .unit {
    font-size: 16px;
    font-weight: 500;
  }
}
</style>