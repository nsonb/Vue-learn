const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastname: "",
      confirmedName: "",
      // fullName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 30) this.counter = 0;
    },
  },

  computed: {
    fullName() {
      if (this.name === "" || this.lastname === "") return "";
      return this.name + " " + this.lastname;
    },
  },

  methods: {
    confirmInput() {
      console.log(this.name);
      console.log(this.confirmName);
      this.confirmedName = this.name;
    },
    add(value) {
      this.counter = this.counter + value;
    },
    minus(value) {
      this.counter = this.counter - value;
    },
    nameChange(event) {
      this.name = event.target.value;
    },
    reset() {
      this.name = "";
    },
    submitForm(event) {},
  },
});

app.mount("#events");
