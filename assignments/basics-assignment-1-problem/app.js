const app = Vue.createApp({
  data() {
    return {
      name: "nsonb",
      age: 32,
      imgSrc: "https://static.zerochan.net/Psyduck.full.3348586.jpg",
    };
  },
  methods: {
    getNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
