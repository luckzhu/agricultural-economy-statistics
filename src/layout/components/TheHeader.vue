<template>
  <div class="the-header">
    <el-col :span="5" class="the-header-left">
      <svg-icon icon-name="toLeft"></svg-icon>
      <p class="current-year">{{ currentYear }}年度</p>
      <svg-icon icon-name="toRight"></svg-icon>
    </el-col>
    <el-col :span="14" class="menu-title">
      <p class="title">{{ title }}</p>
      <div class="menu">
        <div class="top-menu xy-center">
          <router-link v-for="(button,index) in topButtons" :to="`${button.path}`" :key="index">
            <el-button type="primary" plain @click="onTopMenu(button.name)">{{button.name}}</el-button>
          </router-link>
        </div>
      </div>
    </el-col>
    <el-col :span="5" class="xy-center">
      <svg-icon icon-name="exit"></svg-icon>
    </el-col>
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon";

export default {
  components: {
    SvgIcon
  },
  data() {
    return {
      currentYear: "2018",
      title: "广东省农业产业化基本情况",
      topButtons: [
        { name: "农业产业化", path: "/agricultureIndust" },
        { name: "省龙专题", path: "/provincialLeader" },
        { name: "地市风采", path: "/localPresence" },
        { name: "标杆企业", path: "/benchmarking" }
      ],
      menuList: {
        农业产业化: "广东省农业产业化基本情况",
        省龙专题: "省重点农业龙头企业发展特点",
        地市风采: "广东省农业产业化地市风采",
        标杆企业: "广东省农业标杆企业"
      }
    };
  },
  methods: {
    onTopMenu(name) {
      this.title = this.menuList[name];
    },
  }
};
</script>

<style lang="scss" >
// @import "@/styles/variable.scss";
.the-header {
  height: 100%;

  .svg-icon,
  .current-year,
  .title {
    font-size: $primary-font-size;
    color: $primary-font-color;
    font-weight: 600;
    white-space: nowrap;
  }
}
.the-header-left {
  display: flex;
  justify-content: center;
  align-items: center;
}
.current-year {
  margin: 0 20px;
}

.menu-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .top-menu {
    .el-button {
      margin: 15px 20px 0 20px;
      font-size: 22px;
      font-weight: 500;
    }
    .el-button--primary.is-plain {
      color: $primary-title-color;
      background: $light-background-color;
      border-color: $primary-title-color;
      padding: 10px 28px;
    }
    .el-button--primary.is-plain:focus,
    .el-button--primary.is-plain:hover {
      color: $primary-font-color;
      background: $menu-font-color;
      border-color: $primary-title-color;
    }
  }
  .menu {
    transform: translateY(30px);
  }
}
//测试css
.el-col {
  height: 100%;
  // border: 1px solid yellow;
}
</style>
