<template>
  <div class="mian-box">
    <div class="button-group">
      <router-link
        :to="`/LocalPresence${button.path}`"
        v-for="(button,index) in topButtons"
        :key="index"
      >
        <el-button
          type="primary"
          plain
          :class="{'active':currentRoute.indexOf(button.path) !== -1}"
        >· {{button.name}} ·</el-button>
      </router-link>
    </div>
    <div class="main-body">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "LocalPresence",
  data() {
    return {
      topButtons: [
        {
          name: "地市风采1",
          path: "/county1"
        },
        {
          name: "地市风采2",
          path: "/county2"
        },
        {
          name: "地市风采3",
          path: "/county3"
        },
        {
          name: "地市风采4",
          path: "/county4"
        },
        {
          name: "地市风采5",
          path: "/county5"
        },
        {
          name: "地市风采6",
          path: "/county6"
        }
      ]
    };
  },
  computed: {
    currentRoute() {
      return this.$route.path;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

