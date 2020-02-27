<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <process-output :chartData="processOutput" height="51.875rem" />
        </border-box1>
      </el-col>
      <el-col :span="12" class="grid-wrapper">
        <border-box1 class="grid-content">
          <processing-county
            id="processingCounty"
            height="25.6rem"
            :chartData="processingCountyData"
          />
        </border-box1>
        <border-box1 class="grid-content">
          <ul class="category-wrapper">
            <li class="category" v-for="(cate,index) in categoryData" :key="index">
              <div class="category-title">
                <p class="name">{{ cate.name }}</p>
                <p class="value">
                  {{cate.value}}
                  <span class="unit">{{cate.unit}}</span>
                </p>
              </div>
              <svg-icon icon-class="category-icon" :icon-name="`${cate.iconName}`"></svg-icon>
            </li>
          </ul>
        </border-box1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BorderBox1 from "@/components/BorderBox/borderBox1";
import ProcessingCounty from "./components/ProcessingCounty";
import ProcessOutput from "./components/ProcessOutput";

export default {
  components: {
    BorderBox1,
    ProcessingCounty,
    ProcessOutput
  },
  data() {
    return {
      processingCountyData: {
        title: "加工大县",
        unit: "亿元",
        data: [
          {
            name: "广州市番禺区",
            value: 367
          },
          {
            name: "深圳市宝安区",
            value: 125
          },
          {
            name: "广州市天河区",
            value: 96
          },
          {
            name: "湛江市廉江市",
            value: 59
          },
          {
            name: "深圳市龙岗区",
            value: 42
          },
          {
            name: "佛山市顺德区",
            value: 33
          },
          {
            name: "深圳市罗湖区",
            value: 33
          },
          {
            name: "江门市蓬江区",
            value: 29
          },
          {
            name: "湛江市霞山区",
            value: 27
          },
          {
            name: "云浮市新兴县",
            value: 27
          },
          {
            name: "佛山市南海区",
            value: 25
          },
          {
            name: "深圳市福田区",
            value: 23
          },
          {
            name: "珠海市斗门区",
            value: 23
          },
          {
            name: "江门市台山市",
            value: 23
          },
          {
            name: "汕头市金平区",
            value: 22
          },
          {
            name: "湛江经济技术开发区",
            value: 22
          },
          {
            name: "深圳市光明区",
            value: 21
          },
          {
            name: "梅州市梅江区",
            value: 20
          }
        ]
      },
      categoryData: [
        {
          name: "禽",
          value: "4583",
          unit: "万只",
          iconName: "qin"
        },
        {
          name: "猪",
          value: "306",
          unit: "万头",
          iconName: "zhu"
        },
        {
          name: "小麦",
          value: "298",
          unit: "万吨",
          iconName: "xiaomai"
        },
        {
          name: "糖料",
          value: "296",
          unit: "万吨",
          iconName: "tangliao"
        },
        {
          name: "稻谷",
          value: "275",
          unit: "万吨",
          iconName: "daogu"
        },
        {
          name: "玉米",
          value: "247",
          unit: "万吨",
          iconName: "yumi"
        },
        {
          name: "水果",
          value: "144",
          unit: "万吨",
          iconName: "shuiguo"
        },
        {
          name: "蔬菜",
          value: "98",
          unit: "万吨",
          iconName: "shucai"
        },
        {
          name: "水产品",
          value: "74",
          unit: "万吨",
          iconName: "shuichan"
        },
        {
          name: "油料",
          value: "67",
          unit: "万吨",
          iconName: "you"
        },
        {
          name: "原料奶",
          value: "14",
          unit: "万吨",
          iconName: "naizhipin"
        },
        {
          name: "棉花",
          value: "0.2",
          unit: "万吨",
          iconName: "mianhua"
        }
      ],
      processOutput: [
        { name: "广州市", value: 5 },
        { name: "东莞市", value: 3 },
        { name: "深圳市", value: 7 },
        { name: "韶关市", value: 1 },
        { name: "清远市", value: 1 },
        { name: "云浮市", value: 1 },
        { name: "肇庆市", value: 0 },
        { name: "茂名市", value: 1 },
        { name: "湛江市", value: 6 },
        { name: "阳江市", value: 2 },
        { name: "江门市", value: 1 },
        { name: "佛山市", value: 2 },
        { name: "河源市", value: 3 },
        { name: "惠州市", value: 3 },
        { name: "中山市", value: 2 },
        { name: "珠海市", value: 2 },
        { name: "梅州市", value: 2 },
        { name: "潮州市", value: 3 },
        { name: "汕头市", value: 4 },
        { name: "揭阳市", value: 1 },
        { name: "汕尾市", value: 1 }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.category-wrapper {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-flow: row wrap;
  padding: 20px;
}
.category {
  display: flex;
  justify-content: space-around;
  height: 123px;
  flex: 25%;
  align-items: center;
  outline: 1px dashed #ccc;

  .category-title {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    .name {
      font-size: 28px;
      font-weight: 600;
      padding-bottom: 20px;
      color: $primary-font-color;
    }
    .value {
      font-size: 24px;
      font-weight: 500;
    }
    .unit {
      margin-left: 2px;
      font-size: 12px;
    }
  }
  .category-icon {
    position: relative;
    width: 70px;
    height: 70px;
    padding: 4px;
    border: 2px dashed $primary-font-color;
    border-radius: 50%;
    fill: $menu-font-color;
  }
}
</style>