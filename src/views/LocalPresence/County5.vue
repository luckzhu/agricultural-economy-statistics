<template>
  <div>
    <el-row :gutter="10">
      <el-col
        :span="12"
        class="grid-wrapper"
      >
        <border-box1 class="grid-content">
          <presence
            id="guangzhou"
            :chart-data="cityData['阳江市']"
          />
        </border-box1>
        <border-box1 class="grid-content">
          <presence
            id="shenzhen"
            :chart-data="cityData['湛江市']"
          />
        </border-box1>
      </el-col>
      <el-col
        :span="12"
        class="grid-wrapper"
      >
        <border-box1 class="grid-content">
          <presence
            id="foshan"
            :chart-data="cityData['茂名市']"
          />
        </border-box1>
        <border-box1 class="grid-content">
          <presence
            id="zhuhai"
            :chart-data="cityData['清远市']"
          />
        </border-box1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import localGetData from "./mixin/localGetData";

export default {
  mixins: [localGetData],
  data() {
    return {
      tabId: 11,
      cityData: {
        阳江市: {},
        湛江市: {},
        茂名市: {},
        清远市: {}
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>