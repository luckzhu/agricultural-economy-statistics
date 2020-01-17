<template>
  <div class="the-header">头部</div>
</template>

<script>
// import SvgIcon from "@/components/SvgIcon";
export default {
  components: {
    // SvgIcon
  },
  data() {
    return {
      year: "2018",
      title: "广东省农业产业化基本情况",
      topButtons: [
        { name: "产业化", path: "/industrial" },
        { name: "省龙专题", path: "/leading" },
        { name: "地市风采", path: "/prefecture" }
      ],
      menuList: {
        产业化: "广东省农业产业化基本情况",
        省龙专题: "省重点农业龙头企业发展特点",
        地市风采: "广东省农业产业化地市风采"
      }
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
//测试css
.el-col {
  height: 100%;
  // border: 1px solid yellow;
}
</style>
