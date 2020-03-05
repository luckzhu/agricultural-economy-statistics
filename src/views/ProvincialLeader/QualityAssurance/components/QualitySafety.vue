<template>
  <div class="quality-safety">
    <el-row :gutter="40">
      <div class="top">
        <el-col :span="7">
          <div class="authentication left" :style="{color:colors[0]}">
            <p class="title">{{data1.name}}</p>
            <p class="value">{{data1.value}}家</p>
            <p class="value">{{data1.num}}项</p>
            <svg-icon icon-name="down-arrow" class="down-arrow" />
          </div>
        </el-col>
        <el-col :span="10">
          <div class="icon-wrapper">
            <svg-icon icon-name="sales-company" />
            <svg-icon icon-name="sales-organization" />
          </div>
        </el-col>
        <el-col :span="7">
          <div class="authentication right" :style="{color:colors[1]}">
            <p class="title">{{data2.name}}</p>
            <p class="value">{{data2.value}}家</p>
            <p class="value">{{data2.unitsNum}}个</p>
            <p class="value">{{data2.num}}项</p>
            <svg-icon icon-name="down-arrow" class="down-arrow" />
          </div>
        </el-col>
      </div>
    </el-row>
    <el-row :gutter="160">
      <div class="bottom">
        <el-col :span="12">
          <p
            class="mian-text left"
            :style="{borderColor:colors[0]}"
          >其中：GMP认证{{data1.GMP}}家、GAP认证{{data1.GAP}}家、HACCP认证{{data1.HACCP}}家、ISO系列认证{{data1.ISO}}家、FDA认证{{data1.FDA}}家。</p>
        </el-col>
        <el-col :span="12">
          <p
            class="mian-text right"
            :style="{borderColor:colors[1]}"
          >其中：无公害农产品{{data2.nuisanceLess}}项、有机农产品{{data2.organic}}项、绿色食品{{data2.green}}项、农产品地理标志{{data2.geography}}项、广东省名牌农产品{{data2.famousBrand}}项。</p>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    chartData: {}
  },
  computed: {
    colors() {
      return this.$store.getters.colors;
    },
    data1() {
      return this.chartData.systemCertification[0];
    },
    data2() {
      return this.chartData.certifiedProduct[0];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_handle.scss";
.quality-safety {
  height: 410px;
  .top {
    height: 200px;
  }
  .bottom {
    height: 210px;
  }
}

.authentication {
  display: flex;
  flex-direction: column;
  // justify-content: center;
  position: relative;
  align-items: center;
  border: 4px solid;
  border-radius: 30px;
  height: 210px;
  padding: 20px;
  margin: 20px 30px;
  .title {
    font-size: 30px;
    margin-top: 20px;
  }
  .value {
    font-size: 24px;
    font-weight: 600;
    margin-top: 20px;
  }
  .down-arrow {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 100%;
    font-size: 40px;
  }
}
.icon-wrapper {
  font-size: 180px;
  margin-top: 20px;
  .svg-icon {
    position: relative;
    border-radius: 50%;
    @include font_color("font_color_light");
    // padding: 10px;
    &:nth-child(1) {
      border: 30px solid rgba(146, 208, 80, 0.8);
    }
    &:nth-child(2) {
      border: 30px solid rgba(161, 140, 186, 0.8);
      margin-left: -28px;
    }
  }
}
.mian-text {
  height: 120px;
  border: 4px dashed;
  border-radius: 30px;
  text-align: left;
  padding: 20px;
  margin-top: 70px;
  font-size: 18px;
  line-height: 20px;
  @include font_color("font_color_primary");
  &.left {
    margin-left: 20px;
  }
  &.right {
    margin-right: 20px;
  }
}
</style>