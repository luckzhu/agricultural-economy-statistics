<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="24" class="grid-wrapper">
        <border-box1 class="grid-content presence double">
          <presence
            :chartData="cityData['广州市']"
            id="yunfu"
            height="51.2rem"
            pieHeight="40rem"
            pieWidth="40rem"
          />
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
        广州市: {}
      }
    };
  },
  mounted() {
    this.getGraphPage().then(() => {
      this.fields.forEach(field => this.converData(field));
      console.log(this.countyDetail);
      this.convert();
    });
  },
  methods: {
    convert() {
      let arr = this.countyDetail.filter(item => Object.keys(this.cityData).includes(item.name));
      console.log(arr);
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
      console.log(this.cityData);
    },
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
.presence {
  height: 830px;
 
}
</style>