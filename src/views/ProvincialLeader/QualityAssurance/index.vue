<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <quality-safety />
        </border-box1>
        <border-box1 class="grid-content"></border-box1>
      </el-col>
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <guarantee />
        </border-box1>
        <border-box1 class="grid-content">
          <format-innovation id="formatInnovation" :chartData="formatInnovation" height="25.6rem" />
        </border-box1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BorderBox1 from "@/components/BorderBox/borderBox1";
import QualitySafety from "./components/QualitySafety";
import Guarantee from "./components/Guarantee";
import FormatInnovation from "./components/FormatInnovation";

import { getGraph } from "@/api/industrySurvey";

export default {
  components: {
    BorderBox1,
    QualitySafety,
    Guarantee,
    FormatInnovation
  },
  data() {
    return {
      year: 2018,
      tabId: 9,
      graphPage: null,
      fields: [],
      formatInnovation: [
        {
          name: "广州市",
          xx1: 1,
          xx2: 2,
          xx3: 3
        }
      ]
    };
  },
  mounted() {
    this.getGraphPage().then(() => {
      this.fields.forEach(field => this.converData(field));
    });
  },
  methods: {
    getGraphPage() {
      const { year, tabId } = this;
      return getGraph({ year, tabId }).then(res => {
        this.graphPage = res.data.info;
        console.log(this.graphPage);
      });
    },
    converData(field) {
      const data = _.get(this.graphPage, field);
      if (field.indexOf(".") !== -1) {
        field = this.dotToCamelCase(field);
      }
      this[field] = data;
    },
    //转成驼峰命名
    dotToCamelCase(sName) {
      return sName.replace(/\.[a-z]/g, function(a, b) {
        return b == 0 ? a.replace(".", "") : a.replace(".", "").toUpperCase();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>