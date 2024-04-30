const app = Vue.createApp({
  data() {
    return {
      catLink: "https://google.com",
      cat1sName: "<h3>Atso</h3>",
      cat2sName: "<h2>Azula</h2>",
    };
  },

  methods: {
    outputGoal() {
      const rndom = Math.random();
      if (rndom > 0.5) return this.cat1sName;
      return this.cat2sName;
    },
  },
});

app.mount("#user-goal");
