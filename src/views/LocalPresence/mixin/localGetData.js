
import Presence from "../components/presence";
import { getGraph } from "@/api/industrySurvey";

export default {
  components: {
    Presence
  },
  data() {
    return {
      tabId: 11,
      graphPage: null,
      fields: ["countyDetail"],
      countyDetail: [],
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
        this.convert();
      });
    }
  },
  mounted() {
    this.getGraphPage().then(() => {
      this.fields.forEach(field => this.converData(field));
      this.convert();
    });
  },
  methods: {
    convert() {
      let arr = this.countyDetail.filter(item => Object.keys(this.cityData).includes(item.name));
      arr.map(item => {
        let obj = {
          name: item.name || "",
          industry: [
            { name: "种植业", value: item.zzy },
            { name: "畜牧业", value: item.xmy },
            { name: "水产业", value: item.scy },
            { name: "其它", value: item.qty },
            { name: "林业", value: item.ly }
          ],
          info: item.info || ""
        };
        this.cityData[item.name] = obj;
      });
    },
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