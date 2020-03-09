<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <presence :chartData="cityData['深圳市']" id="shenzhen" />
        </border-box1>
        <border-box1 class="grid-content">
          <presence :chartData="cityData['佛山市']" id="foshan" />
        </border-box1>
      </el-col>
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <presence :chartData="cityData['珠海市']" id="zhuhai" />
        </border-box1>
        <border-box1 class="grid-content">
          <presence :chartData="cityData['云浮市']" id="guangzhou" />
        </border-box1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BorderBox1 from "@/components/BorderBox/borderBox1";
import Presence from "./components/presence";

import { getGraph } from "@/api/industrySurvey";

export default {
  components: {
    BorderBox1,
    Presence
  },
  data() {
    return {
      year: 2018,
      tabId: 11,
      graphPage: null,
      fields: ["countyDetail"],
      countyDetail: [],
      cityData: {
        云浮市: {},
        深圳市: {},
        佛山市: {},
        珠海市: {}
      }
    };
  },
  mounted() {
    this.getGraphPage().then(() => {
      this.fields.forEach(field => this.converData(field));
      this.convert();
    });
  },
  methods: {
    convert() {
      let arr = this.countyDetail.filter(item => Object.keys(this.cityData).includes(item.name));
      arr.map(item => {
        let obj = {
          name: item.name || "",
          industry: [
            { name: "种植业", value: item.zzy },
            { name: "畜牧业", value: item.xmy },
            { name: "水产业", value: item.scy },
            { name: "其它", value: item.qty },
            { name: "林业", value: item.ly }
          ],
          info: item.info || ""
        };
        this.cityData[item.name] = obj;
      });
    },
    getGraphPage() {
      const { year, tabId } = this;
      return getGraph({ year, tabId }).then(res => {
        this.graphPage = res.data.info;
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