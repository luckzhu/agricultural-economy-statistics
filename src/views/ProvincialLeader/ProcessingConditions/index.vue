<template>
  <div>
    <el-row :gutter="10">
      <el-col
        :span="12"
        class="grid-wrapper"
      >
        <border-box1 class="grid-content output double">
          <process-output
            :chart-data="output.city"
            height="51.2rem"
          />
          <div class="rank">
            <div
              v-for="(item,index) in output.rank"
              :key="item.coordinate[0]"
            >
              <p class="title">
                NO.{{ index+1 }} {{ item.name }}
                <span class="value">{{ item.value }}</span>
                <span class="unit">亿元</span>
              </p>
            </div>
          </div>
        </border-box1>
      </el-col>
      <el-col
        :span="12"
        class="grid-wrapper"
      >
        <border-box1 class="grid-content">
          <processing-county
            id="largeCounty"
            height="25.6rem"
            :chart-data="largeCounty"
          />
        </border-box1>
        <border-box1 class="grid-content">
          <ul class="category-wrapper">
            <li
              v-for="(cate,index) in total"
              :key="index"
              class="category"
            >
              <div class="category-title">
                <p class="name">
                  {{ cate.name }}
                </p>
                <p class="value">
                  {{ cate.value }}
                  <span class="unit">{{ cate.unit }}</span>
                </p>
              </div>
              <svg-icon
                icon-class="category-icon"
                :icon-name="`${icons[index]}`"
              />
            </li>
          </ul>
        </border-box1>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ProcessingCounty from "./components/ProcessingCounty";
import ProcessOutput from "./components/ProcessOutput";

import getData from "@/mixin/getData.js";

export default {
  components: {
    ProcessingCounty,
    ProcessOutput
  },
  mixins: [getData],
  data() {
    return {
      tabId: 7,
      fields: ["largeCounty", "output", "total"],
      icons: ["daogu", "xiaomai", "yumi", "you", "mianhua", "tangliao", "shucai", "shuiguo", "zhu", "qin", "naizhipin", "shuichan"],
      largeCounty: [],
      total: [],
      output: {}
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_handle.scss";

.output {
  position: relative;
  .rank {
    position: absolute;
    right: 50px;
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
      @include font_color("font_color_light");
      .unit {
        font-size: 30px;
        font-weight: 600;
      }
    }
  }
}

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
      @include font_color("font_color_primary");
    }
    .value {
      font-size: 24px;
      font-weight: 500;
      @include font_color("font_color_primary");
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
    border: 2px dashed;
    @include border_color("font_color_primary");
    border-radius: 50%;
    @include font_color("font_color_light");
  }
}
</style>