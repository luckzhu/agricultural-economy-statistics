<template>
  <div class="scale">
    <el-row :gutter="10">
      <el-col :span="12">
        <div class="benefit-table">
          <p class="table-title">· 总体效益</p>
          <el-table
            :data="tableData"
            :span-method="arraySpanMethod"
            :header-cell-style="tableHeaderColor"
            border
            fit
            style="width: 100%"
          >
            <el-table-column prop="Level1" label="一级指标" align="center" width="80px"></el-table-column>
            <el-table-column prop="Level2" label="二级指标" align="center" width="160px"></el-table-column>
            <el-table-column label="省重点农业龙头企业平均值" align="center">
              <el-table-column prop="2017" label="2017年" align="center"></el-table-column>
              <el-table-column prop="2018" label="2018年" align="center"></el-table-column>
            </el-table-column>
            <el-table-column label="2018年全国农林牧渔业企业绩效评价标准值" align="center">
              <el-table-column prop="excellent" label="优秀" align="center"></el-table-column>
              <el-table-column prop="well" label="良好" align="center"></el-table-column>
              <el-table-column prop="average" label="平均" align="center"></el-table-column>
              <el-table-column prop="lower" label="较低" align="center"></el-table-column>
              <el-table-column prop="bad" label="较差" align="center"></el-table-column>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="8" class="chart-wrapper">
        <bar-normal id="scale-bar" height="410px" :chartData="chartData1" />
        <pie-normal id="scale-pie" height="350px" width="350px" :chartData="chartData2" />
      </el-col>
      <el-col :span="8" class="chart-wrapper">
        <bar-normal id="revenue-bar" height="410px" :chartData="chartData3" />
        <pie-normal id="revenue-pie" height="350px" width="350px" :chartData="chartData4" />
      </el-col>
      <el-col :span="8">
        <mix-industrial-structure id="mix-industrial-structure" height="410px" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BarNormal from "@/components/Echarts/bar-normal";
import PieNormal from "@/components/Echarts/pie-normal";
import MixIndustrialStructure from "@/components/Echarts/mix-industrial-structure";

export default {
  components: {
    BarNormal,
    PieNormal,
    MixIndustrialStructure
  },
  data() {
    return {
      tableData: [
        {
          Level1: "盈利能力",
          Level2: "净资产收益率（%）",
          2017: "11.5",
          2018: "6.9",
          excellent: 13.5,
          well: 8.9,
          average: 4.0,
          lower: -2.6,
          bad: -8.5
        },
        {
          Level1: "盈利能力",
          Level2: "总资产报酬率（%）",
          2017: "7.4",
          2018: "6.5",
          excellent: 9.5,
          well: 6.7,
          average: 2.4,
          lower: -2.5,
          bad: -8.4
        },
        {
          Level1: "盈利能力",
          Level2: "销售收入利润率（%）",
          2017: "7.4",
          2018: "5.1",
          excellent: 19.1,
          well: 13.8,
          average: 7.6,
          lower: 2.4,
          bad: -4.5
        },
        {
          Level1: "营运能力",
          Level2: "总资产周转率（次）",
          2017: "1.5",
          2018: "1.4",
          excellent: 1.8,
          well: 1.2,
          average: 0.8,
          lower: 0.4,
          bad: 0.2
        },
        {
          Level1: "营运能力",
          Level2: "流动资产周转率（%）",
          2017: "3.2",
          2018: "3.5",
          excellent: 2.3,
          well: 1.8,
          average: 1.0,
          lower: 0.8,
          bad: 0.6
        },
        {
          Level1: "成长能力",
          Level2: "销售收入增长率（%）",
          2017: "12.8",
          2018: "13.19",
          excellent: 21.6,
          well: 12.2,
          average: 5.7,
          lower: -4.1,
          bad: -14.4
        },
        {
          Level1: "成长能力",
          Level2: "总资产增长率（%）",
          2017: "15.0",
          2018: "8.7",
          excellent: 16.6,
          well: 10.9,
          average: 5.2,
          lower: -2.2,
          bad: -7.1
        },
        {
          Level1: "偿债能力",
          Level2: "资产负债率（%）",
          2017: "38.2",
          2018: "40.2",
          excellent: 54.5,
          well: 59.5,
          average: 64.5,
          lower: 74.5,
          bad: 89.5
        }
      ],
      chartData1: {
        title: "地区规模",
        unit: "亿元",
        data: [
          { name: "梅州", value: 98 },
          { name: "湛江", value: 312 },
          { name: "茂名", value: 156 },
          { name: "深圳", value: 565 },
          { name: "佛山", value: 176 },
          { name: "惠州", value: 68 },
          { name: "韶关", value: 49 },
          { name: "河源", value: 40 },
          { name: "江门", value: 118 },
          { name: "广州", value: 774 },
          { name: "清远", value: 41 },
          { name: "云浮", value: 683 },
          { name: "汕尾", value: 24 },
          { name: "肇庆", value: 52 },
          { name: "揭阳", value: 26 },
          { name: "汕头", value: 70 },
          { name: "潮州", value: 39 },
          { name: "阳江", value: 21 },
          { name: "东莞", value: 180 },
          { name: "珠海", value: 41 },
          { name: "中山", value: 124 }
        ],
        colors: ["#92D050", "#A18CBA", "#FFC000", "#64D3B2", "#64B8D4", "#FF9898"]
      },
      chartData2: {
        title: "地区规模",
        unit: "亿元",
        data: [
          { name: "珠三角", value: 2098 },
          { name: "山区", value: 911 },
          { name: "西翼", value: 490 },
          { name: "东翼", value: 159 }
        ],
        colors: ["#92D050", "#A18CBA", "#FFC000", "#64D3B2", "#64B8D4", "#FF9898"]
      },
      chartData3: {
        title: "企业营收",
        unit: "亿元",
        data: [
          { name: "梅州", value: 0.7 },
          { name: "湛江", value: 4.1 },
          { name: "茂名", value: 2.3 },
          { name: "深圳", value: 8.8 },
          { name: "佛山", value: 3.4 },
          { name: "惠州", value: 1.3 },
          { name: "韶关", value: 1.0 },
          { name: "河源", value: 0.8 },
          { name: "江门", value: 2.8 },
          { name: "广州", value: 12.9 },
          { name: "清远", value: 1.0 },
          { name: "云浮", value: 19.5 },
          { name: "汕尾", value: 0.8 },
          { name: "肇庆", value: 1.9 },
          { name: "揭阳", value: 1.0 },
          { name: "汕头", value: 2.9 },
          { name: "潮州", value: 1.6 },
          { name: "阳江", value: 1.0 },
          { name: "东莞", value: 9.0 },
          { name: "珠海", value: 2.5 },
          { name: "中山", value: 9.6 }
        ],
        colors: ["#92D050", "#A18CBA", "#FFC000", "#64D3B2", "#64B8D4", "#FF9898"]
      },
      chartData4: {
        title: "企业营收",
        unit: "亿元/家",
        data: [
          { name: "珠三角", value: 6.1 },
          { name: "山区", value: 3.0 },
          { name: "西翼", value: 2.9 },
          { name: "东翼", value: 1.6 }
        ],
        colors: ["#92D050", "#A18CBA", "#FFC000", "#64D3B2", "#64B8D4", "#FF9898"]
      },
      chartData5: {}
    };
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex === 0) {
          return {
            rowspan: 3,
            colspan: 1
          };
        } else if (rowIndex === 3) {
          return {
            rowspan: 2,
            colspan: 1
          };
        } else if (rowIndex === 5) {
          return {
            rowspan: 2,
            colspan: 1
          };
        } else if (rowIndex === 7) {
          return {
            rowspan: 1,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    },
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0 || rowIndex === 1) {
        return "background-color: #F79646;color: white;font-weight: 700;";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.scale {
  .el-row {
    height: 410px;
    &:first-child {
      margin-bottom: 10px;
    }
  }
}
.benefit-table {
  // height: 410px;
  .table-title {
    font-size: 20px;
    font-weight: 600;
    padding-left: 20px;
    color: #00fbff;
    text-align: left;
    letter-spacing: 0;
    margin-bottom: 6px;
  }
}
.chart-wrapper {
  position: relative;
  #scale-pie,
  #revenue-pie {
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>

<style lang="scss">
.benefit-table {
  .el-table {
    /* 表格字体颜色 */
    color: white;
    /* 表格边框颜色 */
    border: 0.5px solid #758a99;
  }
  .el-table,
  .el-table__expanded-cell {
    background-color: transparent;
  }
  .el-table td,
  .el-table th,
  .el-table tr {
    background-color: transparent;
    padding: 7px 0;
  }
  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background: #13345e;
  }
}
</style>