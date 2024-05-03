const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      show: true,
      color: "",
    };
  },
  computed: {
    p1class() {
      return [this.inputClass, this.show ? "visible" : "hidden"];
    },
  },
  methods: {
    toggleParagraph() {
      this.show = !this.show;
    },
  },
});

app.mount("#assignment");
