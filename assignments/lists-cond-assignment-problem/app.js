const app = Vue.createApp({
  data() {
    return {
      currentTask: "",
      tasks: [],
      showList: true,
    };
  },
  computed: {
    showButtonText() {
      return this.showList ? "Hide list" : "Show list";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.currentTask);
      this.currentTask = "";
    },
    toggleList() {
      this.showList = !this.showList;
    },
  },
});

app.mount("#assignment");
