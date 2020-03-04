<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <presence :chartData="guangzhou" id="guangzhou" />
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
import Presence from "./components/presence";

export default {
  components: {
    BorderBox1,
    Presence
  },
  data() {
    return {
      guangzhou: {
        name: "广州市",
        info: "",
        industry: [
          { name: "种植业", value: "40" },
          { name: "畜牧业", value: "8" },
          { name: "水产业", value: "8" },
          { name: "其它", value: "43" },
          { name: "林业", value: "1" }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>