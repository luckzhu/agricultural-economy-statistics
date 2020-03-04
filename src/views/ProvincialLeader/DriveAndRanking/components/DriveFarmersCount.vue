<template>
  <div class="drive-farmers-count">
    <el-row>
      <el-col :span="6">
        <p class="name">带动农户数</p>
        <p class="value">
          610
          <span class="unit">万户</span>
        </p>
      </el-col>
      <el-col :span="6">
        <p>
          其中：本省
          <span class="value">403</span> 万户
        </p>
        <p>
          外省
          <span class="value">208</span> 万户
        </p>
        <p>
          其中：贫困户
          <span class="value">5.7</span> 万户
        </p>
      </el-col>
      <el-col :span="12">
        <p>
          其中：合同关系户
          <span class="value">220</span> 万户（含订单关系
          <span class="value">143</span>万户）
        </p>
        <p>
          按利润返还方式
          <span class="value">68.8</span> 万户
        </p>
        <p>
          按股分红方式
          <span class="value">2.4</span> 万户
        </p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <p class="name">带动农户增收</p>
        <p class="value">
          368
          <span class="unit">亿元</span>
        </p>
      </el-col>
      <el-col :span="18">
        <p>
          其中：按合同价收购比按市场价收购向农民多支付的差价金额
          <span class="value">87.8</span> 亿元
        </p>
        <p>
          实行合作制、股份合作制经营向农民返还或分配的利润金额
          <span class="value">6.7</span> 亿元
        </p>
        <p>
          采取土地租赁经营支付给农民的土地租金金额
          <span class="value">6.9</span> 亿元
        </p>
        <p>
          吸收农民务工支付给农民的工资福利报酬金额
          <span class="value">15.1</span> 亿元
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/styles/_handle.scss";

.drive-farmers-count {
  .el-row {
    height: 200px;
  }
  .el-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      font-size: 18px;
      line-height: 34px;
      @include font_color("font_color_primary");
    }
    .name {
      font-size: 22px;
      font-weight: 500;
    }
    .value {
      font-size: 26px;
      font-weight: 700;
      @include font_color("font_color_light");
      .unit {
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
}
</style>