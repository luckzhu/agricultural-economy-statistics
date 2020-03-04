<template>
  <div>
    <div class="chart-title-wrapper">
      <p class="chart-title">· 总体效益</p>
    </div>
    <div class="benefit-table">
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
          <el-table-column prop="2017" label="2017年" align="center" width="100px"></el-table-column>
          <el-table-column prop="2018" label="2018年" align="center" width="100px"></el-table-column>
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
  </div>
</template>

<script>
export default {
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
      ]
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
.benefit-table {
  padding: 24px;
  padding-top: 0;
}
</style>

<style lang="scss">
@import "@/styles/_handle.scss";
.benefit-table {
  .el-table {
    /* 表格字体颜色 */
    @include font_color("font_color_primary");

    /* 表格边框颜色 */
    border: 1px solid;
    @include border_color("font_color_primary");
  }
  .el-table,
  .el-table__expanded-cell {
    background-color: transparent;
    //  @include border_color("font_color_primary");
  }
  .el-table td,
  .el-table th,
  .el-table tr {
    background-color: transparent;
    padding: 4px 0;
    @include border_color("font_color_primary");
  }
  .el-table--enable-row-hover .el-table__body tr:hover > td {
    @include background_color("background_color_light");
  }
}
</style>