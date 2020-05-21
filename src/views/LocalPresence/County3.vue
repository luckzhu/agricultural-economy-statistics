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
            :chart-data="cityData['肇庆市']"
          />
        </border-box1>
        <border-box1 class="grid-content">
          <presence
            id="shenzhen"
            :chart-data="cityData['揭阳市']"
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
            :chart-data="cityData['潮州市']"
          />
        </border-box1>
        <border-box1 class="grid-content">
          <presence
            id="zhuhai"
            :chart-data="cityData['汕尾市']"
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
        肇庆市: {},
        揭阳市: {},
        潮州市: {},
        汕尾市: {}
      }
    };
  }
};
</script>