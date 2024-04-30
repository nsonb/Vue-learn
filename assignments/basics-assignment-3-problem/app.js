const app = Vue.createApp({
  data() {
    return {
      result: 0,
      estimateText: "",
    };
  },
  watch: {
    result(value) {
      const that = this;
      value > 37
        ? (this.estimateText = "Too much")
        : (this.estimateText = "Not there yet");

      if (value === 37) {
        this.estimateText = "just right";
      }
      if (value >= 37) {
        setTimeout(() => {
          that.result = 0;
        }, 5000);
      }
    },
  },
  methods: {
    add(value) {
      this.result = this.result + value;
    },
  },
});

app.mount("#assignment");
