<template>
  <div>
    <el-row :gutter="10">
      <el-col
        :span="12"
        class="grid-wrapper"
      >
        <border-box1 class="grid-content">
          <presence
            id="shenzhen"
            :chart-data="cityData['深圳市']"
          />
        </border-box1>
        <border-box1 class="grid-content">
          <presence
            id="foshan"
            :chart-data="cityData['佛山市']"
          />
        </border-box1>
      </el-col>
      <el-col
        :span="12"
        class="grid-wrapper"
      >
        <border-box1 class="grid-content">
          <presence
            id="zhuhai"
            :chart-data="cityData['珠海市']"
          />
        </border-box1>
        <border-box1 class="grid-content">
          <presence
            id="guangzhou"
            :chart-data="cityData['云浮市']"
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
        云浮市: {},
        深圳市: {},
        佛山市: {},
        珠海市: {}
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>