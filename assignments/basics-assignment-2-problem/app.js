const app = Vue.createApp({
  data() {
    return {
      inputString: "",
      secondInputString: "",
      confirmedString: "",
    };
  },
  methods: {
    openAlert(input) {
      alert(input);
    },
    updateInputString(event) {
      this.inputString = event.target.value;
    },
    updateSecondInputString(event) {
      this.secondInputString = event.target.value;
    },
    confirmString() {
      this.confirmedString = this.secondInputString;
    },
  },
});

app.mount("#assignment");
