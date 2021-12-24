import Collapse from 'bootstrap/js/dist/collapse';

export default {
  data() {
    return {
      collapse: '',
    };
  },
  methods: {
    toggleCollapse() {
      this.collapse.toggle();
    },
  },
  mounted() {
    this.collapse = new Collapse(this.$refs.bsCollapse, {
      toggle: false,
    });
  },
};
