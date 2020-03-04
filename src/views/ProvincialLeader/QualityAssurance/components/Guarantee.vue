<template>
  <div class="guarantee">
    <div class="rule" :style="{color:colors[0]}">
      <div class="icon-wrapper">
        <svg-icon icon-name="zhijianjiancha" />
      </div>
      <div class="overview">
        <p class="title">质检机构</p>
        <p class="describe">
          <span class="bold">591家</span>
          建有专门质检机构
          <span class="bold">832个</span>
          其中
          <span class="bold">76家</span>
          通过计量认证机构
          <span class="bold">106个</span>
        </p>
      </div>
    </div>
    <div class="rule" :style="{color:colors[1]}">
      <div class="overview right">
        <p class="title">安全投入</p>
        <p class="describe">
          企业在质检、认证、检疫等保障产品质量安全方面的投入
          <span class="bold">6亿元</span>
        </p>
      </div>
      <div class="icon-wrapper">
        <svg-icon icon-name="zhijian" />
      </div>
    </div>
    <div class="rule" :style="{color:colors[2]}">
      <div class="icon-wrapper">
        <svg-icon icon-name="sifa" />
      </div>
      <div class="overview">
        <p class="title">商标保护</p>
        <p class="describe">
          持有商标注册证723家（8861个）持有省著名商标证
          <span class="bold">177个</span>
          持有国家驰名商标证
          <span class="bold">25个</span>
        </p>
      </div>
    </div>
    <div class="rule" :style="{color:colors[3]}">
      <div class="overview right">
        <p class="title">管理制度</p>
        <p class="describe">
          建立企业质量管理制度和财务制度
          <span class="bold">716家（9988项）</span>
        </p>
      </div>
      <div class="icon-wrapper">
        <svg-icon icon-name="guanli" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    colors() {
      return this.$store.getters.colors;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_handle.scss";

.guarantee {
  height: 410px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.rule {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
  &:not(:first-child) {
    margin-top: -9px;
  }
  &:nth-child(0) {
    z-index: 2;
  }
  // width: 1000px;
  .icon-wrapper {
    border: 6px solid;
    border-radius: 20px;
    padding: 20px;
    .svg-icon {
      position: relative;
      width: 30px;
      height: 30px;
    }
  }
  .overview {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    height: 75px;
    width: 100%;
    padding: 10px 30px;
    border-top: 6px solid;
    border-width: 80%;
    &:nth-child(odd) {
      margin-right: -8px;
    }
    &:nth-child(even) {
      margin-left: -8px;
    }
    .title {
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 10px;
      @include font_color("font_color_primary");
    }
    .describe {
      font-size: 14px;
      @include font_color("font_color_primary");

      text-align: left;
      .bold {
        font-size: 22px;
        font-weight: 600;
        @include font_color("font_color_light");
      }
    }
  }
  .overview.right {
    align-items: flex-end;
  }
}
</style>