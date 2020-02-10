<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <funding-sources />
        </border-box1>
        <border-box1 class="grid-content"></border-box1>
      </el-col>
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content"></border-box1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BorderBox1 from "@/components/BorderBox/borderBox1";
import FundingSources from "./components/FundingSources";

export default {
  components: {
    BorderBox1,
    FundingSources
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>