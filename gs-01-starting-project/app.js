Vue.createApp({
  data() {
    return {
      goals: [],
      enterValue: "",
    };
  },

  methods: {
    addGoal() {
      this.goals.push(this.enterValue);
      this.enterValue = "";
    },
  },
}).mount("#app");
