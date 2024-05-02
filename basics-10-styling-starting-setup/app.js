const app = Vue.createApp({
  data() {
    return {
      select1: false,
      select2: false,
      select3: false,
    };
  },
  computed: {
    box1classes() {
      return { demo: true, active: this.select1 };
    },
    box2classes() {
      return ["demo", { active: this.select2 }];
    },
    box3classes() {
      return { demo: true, active: this.select3 };
    },
  },
  methods: {
    selectBox(value) {
      switch (value) {
        case 1:
          this.select1 = !this.select1;
          break;
        case 2:
          this.select2 = !this.select2;
          break;
        case 3:
          this.select3 = !this.select3;
          break;
      }
    },
  },
});

app.mount("#styling");
