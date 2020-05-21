import { getGraph } from "@/api/industrySurvey";

export default {
  data() {
    return {
      fields: [],
      graphPage: null,
    };
  },
  computed: {
    year() {
      return this.$store.getters.year;
    }
  },
  watch: {
    year(newYear) {
      this.getGraphPage().then(() => {
        this.fields.forEach(field => this.converData(field));
      });
    }
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