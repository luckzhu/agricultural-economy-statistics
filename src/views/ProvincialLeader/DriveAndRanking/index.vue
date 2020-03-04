<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <drive-farmers-count />
        </border-box1>
        <border-box1 class="grid-content">
          <overall-benefit />
        </border-box1>
      </el-col>
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <drive-farmers id="driveBenefit" :chartData="driveBenefit" height="25.6rem" />
        </border-box1>
        <border-box1 class="grid-content">
          <company-rank id="companyRank" :chartData="companyRank" height="25.6rem" />
        </border-box1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BorderBox1 from "@/components/BorderBox/borderBox1";
import OverallBenefit from "./components/OverallBenefit";
import CompanyRank from "./components/CompanyRank";
import DriveFarmers from "./components/DriveFarmers";
import DriveFarmersCount from "./components/DriveFarmersCount";

import { getGraph } from "@/api/industrySurvey";

export default {
  components: {
    BorderBox1,
    OverallBenefit,
    CompanyRank,
    DriveFarmers,
    DriveFarmersCount
  },
  data() {
    return {
      year: 2018,
      tabId: 10,
      graphPage: null,
      // fields: ["companyRank", "driveBenefit"],
      companyRank: [
        {
          name: "湛江国联水产开发股份有限公司01",
          value: 121.2
        },
        {
          name: "广东温氏食品集团股份有限公司02",
          value: 118.1
        },
        {
          name: "广州酒家集团利口福食品有限公司03",
          value: 117.1
        },
        {
          name: "广东海大集团股份有限公司04",
          value: 116.9
        },
        {
          name: "岭南生态文旅股份有限公司05",
          value: 115.6
        },
        {
          name: "广东壹号食品股份有限公司06",
          value: 114.5
        },
        {
          name: "广东华农温氏畜牧股份有限公司07",
          value: 112.0
        },
        {
          name: "深圳市鑫荣懋农产品股份有限公司08",
          value: 111.3
        },
        {
          name: "广东天农食品有限公司09",
          value: 110.8
        },
        {
          name: "广东威化股份有限公司10",
          value: 110.7
        },
        {
          name: "广东天禾农资股份有限公司11",
          value: 110.4
        },
        {
          name: "广东恒兴饲料实业股份有限公司12",
          value: 109.5
        },
        {
          name: "深圳市粮食集团有限公司13",
          value: 109.2
        },
        {
          name: "清远海贝生物技术有限公司14",
          value: 109.1
        },
        {
          name: "广东汇海农牧科技集团有限公司15",
          value: 108.2
        },
        {
          name: "海霸王（汕头）食品有限公司16",
          value: 107.7
        },
        {
          name: "深圳市光明集团有限公司17",
          value: 105.7
        },
        {
          name: "广东展翠食品股份有限公司18",
          value: 105.6
        },
        {
          name: "广东智威农业科技股份有限公司19",
          value: 105.0
        },
        {
          name: "深圳市澳华集团股份有限公司20",
          value: 104.1
        },
        {
          name: "深圳市康达尔（集团）股份有限公司21",
          value: 104.0
        },
        {
          name: "广东省现代农业集团有限公司22",
          value: 102.8
        },
        {
          name: "东莞市国丰粮油有限公司23",
          value: 102.8
        },
        {
          name: "广东海兴农集团有限公司24",
          value: 102.6
        },
        {
          name: "广东东升农场有限公司25",
          value: 101.5
        }
      ],
      driveBenefit: [
        { name: "水产", value: "22" },
        { name: "种植", value: "28" },
        { name: "养畜", value: "35" },
        { name: "养禽", value: "15" }
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