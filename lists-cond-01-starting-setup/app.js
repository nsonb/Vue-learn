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
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
