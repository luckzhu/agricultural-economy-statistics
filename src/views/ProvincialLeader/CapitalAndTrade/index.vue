<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <funding-sources :chartData="capitalSource" />
        </border-box1>
        <border-box1 class="grid-content listingProcess">
          <listing-process id="listingProcess" :chartData="listingProcess" height="25.6rem" />
          <div class="mainBoard">
            <p class="value">主板上市省重点农业龙头企业名单</p>
            <div v-for="item in mainBoard" :key="item.name">
              <p class="title">{{item.name}}</p>
            </div>
          </div>
        </border-box1>
      </el-col>
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content expand-container">
          <expand id="expand" :chartData="expand.invested" height="50rem" />
          <div class="info">
            <div v-for="(item,index) in expand.info" :key="index">
              <p class="title">
                {{item.name}}:
                <span class="value">{{item.value}}</span>
                <span class="unit">{{item.unit}}</span>
              </p>
            </div>
          </div>
        </border-box1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BorderBox1 from "@/components/BorderBox/borderBox1";
import FundingSources from "./components/FundingSources";
import ListingProcess from "./components/ListingProcess";
import Expand from "./components/Expand";
import { getGraph } from "@/api/industrySurvey";

export default {
  components: {
    BorderBox1,
    FundingSources,
    ListingProcess,
    Expand
  },
  data() {
    return {
      year: 2018,
      tabId: 8,
      graphPage: null,
      fields: ["capitalSource", "listingProcess", "expand"],
      capitalSource: [],
      listingProcess: [],
      expand: {}
    };
  },
  mounted() {
    this.getGraphPage().then(() => {
      this.fields.forEach(field => this.converData(field));
    });
  },
  computed: {
    mainBoard() {
      return this.listingProcess.filter(item => item.listed === "主板上市");
    }
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
@import "@/styles/_handle.scss";

.listingProcess {
  position: relative;
  .mainBoard {
    position: absolute;
    right: 50px;
    top: 70px;
    .value {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 22px;
      @include font_color("font_color_light");
    }
    .title {
      @include font_color("font_color_primary");
      align-self: flex-start;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 10px;
    }
  }
}
.expand-container {
  position: relative;
  padding: 10px;
  .info {
    position: absolute;
    left: 90px;
    bottom: 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    .title {
      @include font_color("font_color_primary");
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 30px;
    }
    .value {
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 22px;
      margin-left: 10px;
      margin-right: 6px;
      @include font_color("font_color_light");
      .unit {
        font-size: 30px;
        font-weight: 600;
      }
    }
  }
}
</style>