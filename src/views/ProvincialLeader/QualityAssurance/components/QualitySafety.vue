<template>
  <div class="quality-safety">
    <el-row :gutter="40">
      <div class="top">
        <el-col :span="7">
          <div class="authentication left">
            <p class="title">体系认证</p>
            <p class="value">478家</p>
            <p class="value">1189项</p>
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
          <div class="authentication right">
            <p class="title">产品认证</p>
            <p class="value">463家</p>
            <p class="value">1539个</p>
            <p class="value">2741项</p>
            <svg-icon icon-name="down-arrow" class="down-arrow" />
          </div>
        </el-col>
      </div>
    </el-row>
    <el-row :gutter="160">
      <div class="bottom">
        <el-col :span="12">
          <p class="mian-text left">其中：GMP认证77家、GAP认证32家、HACCP认证228家、ISO系列认证646家、FDA认证52家。</p>
        </el-col>
        <el-col :span="12">
          <p class="mian-text right">其中：无公害农产品804项、有机农产品436项、绿色食品346项、农产品地理标志74项、广东省名牌农产品1081项。</p>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {};
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
  &.left {
    color: #92d050;
  }
  &.right {
    color: #a18cba;
  }
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
    border-color: #92d050;
    margin-left: 20px;
  }
  &.right {
    border-color: #a18cba;
    margin-right: 20px;
  }
}
</style>