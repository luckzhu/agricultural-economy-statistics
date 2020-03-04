<template>
  <div class="presence">
    <county-map :id="`${chartData.name}`+'map'" :city="chartData.name" height="25.6rem" />
    <county-pie
      :id="chartData.name"
      :chartData="chartData.industry"
      class="county-pie"
      height="20rem"
      width="20rem"
    />
    <div class="info">
      通过贷款貼息政策对农业经营主体贷款进行利息补助，通过以“以奖代
      补”方式对设施建设和设备购置进行扶持；为农业企业提供贷款担保，
      推动白云区试点开展“政保银”项目，为符合现代条件的农业经营主体
      提供快捷、便利、低成本的融资渠道。
    </div>
  </div>
</template>

<script>
import CountyMap from "./county-map";
import CountyPie from "./county-pie";
export default {
  components: {
    CountyMap,
    CountyPie
  },
  props: {
    chartData: {}
  }
};
</script>

<style lang="scss" scoped>
.presence {
  position: relative;
  .county-pie {
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .info {
    position: absolute;
    right: 70px;
    bottom: 30px;
    width: 500px;
    text-align: left;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>