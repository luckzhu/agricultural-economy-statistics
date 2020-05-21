<template>
  <div class="the-header">
    <el-col
      :span="5"
      class="the-header-left"
    >
      <svg-icon
        icon-class="arrow"
        icon-name="toLeft"
        @click.native="toLastYear"
      />
      <p class="current-year">
        {{ currentYear }}年度
      </p>
      <svg-icon
        icon-class="arrow"
        icon-name="toRight"
        @click.native="toNextYear"
      />
    </el-col>
    <el-col
      :span="14"
      class="menu-title"
    >
      <p class="title">
        {{ title }}
      </p>
      <div class="menu">
        <div class="top-menu xy-center button-group">
          <router-link
            v-for="(button,index) in topButtons"
            :key="index"
            :to="`${button.path}`"
          >
            <el-button
              type="primary"
              plain
              :class="{'active':currentRoute.indexOf(button.path) !== -1}"
              @click="onTopMenu(button.name)"
            >
              {{ button.name }}
            </el-button>
          </router-link>
        </div>
      </div>
    </el-col>
    <el-col
      :span="5"
      class="xy-center right-icon"
    >
      <screenfull
        id="screenfull"
        class="screenfull"
      />
      <svg-icon
        icon-name="exit"
        @click.native="onLogout"
      />
    </el-col>
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon";
import Screenfull from "@/components/Screenfull";

export default {
  components: {
    SvgIcon,
    Screenfull
  },
  data() {
    return {
      title: "广东省农业产业化基本情况",
      topButtons: [
        {
          name: "农业产业化",
          path: "/agricultureIndust",
          children: [
            {
              name: "数量结构",
              path: "/quantityStructure"
            },
            {
              name: "组织规模",
              path: "/organSize"
            },
            {
              name: "基地分布",
              path: "/baseDistribution"
            }
          ]
        },
        { name: "省龙专题", path: "/provincialLeader" },
        { name: "地市风采", path: "/localPresence" }
        // { name: "标杆企业", path: "/benchmarking" }
      ],
      menuList: {
        农业产业化: "广东省农业产业化基本情况",
        省龙专题: "省重点农业龙头企业发展特点",
        地市风采: "广东省农业产业化地市风采"
        // 标杆企业: "广东省农业标杆企业"
      }
    };
  },
  computed: {
    currentRoute() {
      return this.$route.path;
    },
    currentYear() {
      return this.$store.getters.year;
    }
  },
  methods: {
    onTopMenu(name) {
      this.title = this.menuList[name];
    },
    onLogout() {
      this.$router.push("/login");
    },
    toLastYear() {
      this.$store.commit("year/SET_YEAR", this.currentYear - 1);
    },
    toNextYear() {
      this.$store.commit("year/SET_YEAR", this.currentYear + 1);
    }
  }
};
</script>

<style lang="scss" >
// @import "@/styles/variable.scss";
@import "@/styles/_handle.scss";

.the-header {
  height: 100%;

  .svg-icon,
  .current-year,
  .title {
    font-size: 48px;
    @include font_color("font_color_title");
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
.right-icon {
  justify-content: space-around;
  .screenfull {
    margin-right: -160px;
  }
}

.arrow {
  cursor: pointer;
}
</style>
