import echarts from "echarts";
export default {
  props: {
    chartData: {}
  },
  data() {
    return {
      chart: null
    };
  },
  //切换主题
  computed: {
    style() {
      return this.$store.getters.echartsStyle;
    },
    colors() {
      return this.$store.getters.colors;
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val);
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id), this.style);
      this.setOptions(this.chartData);
    }
  }
};
