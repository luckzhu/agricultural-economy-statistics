<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <company-type height="25.625rem" />
        </border-box1>
        <border-box1 class="grid-content"></border-box1>
      </el-col>
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content"></border-box1>
        <border-box1 class="grid-content"></border-box1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BorderBox1 from "@/components/BorderBox/borderBox1";
import CompanyType from "./components/CompanyType";

export default {
  components: {
    BorderBox1,
    CompanyType
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>