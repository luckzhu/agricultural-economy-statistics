<template>
  <div>
    <el-row :gutter="10">
      <el-col
        :span="24"
        class="grid-wrapper"
      >
        <border-box1 class="grid-content presence double">
          <presence
            id="yunfu"
            :chart-data="cityData['广州市']"
            height="51.2rem"
            pie-height="40rem"
            pie-width="40rem"
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
        广州市: {}
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.presence {
  height: 830px;
 
}
</style>