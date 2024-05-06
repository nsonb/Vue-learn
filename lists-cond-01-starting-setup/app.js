const app = Vue.createApp({
  data() {
    return {
      goals: [],
      currentGoal: "",
      // display: "",
    };
  },
  watch: {},
  computed: {
    // display() {
    //   return this.goals.length === 0
    //     ? "No goals have been added yet - please start adding some!"
    //     : "";
    // },
  },
  methods: {
    addGoal() {
      this.goals.push(this.currentGoal);
      this.currentGoal = "";
    },
  },
});

app.mount("#user-goals");
