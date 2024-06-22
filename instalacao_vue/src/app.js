const MyNameApp = {
  data() {
    return {
      name: "",
      age: 30,
      input_name: "",
    };
  },
  methods: {
    submirForm(e) {
      e.preventDefault();
      console.log(this.input_name);
      this.name = this.input_name;
    },
  },
};

Vue.createApp(MyNameApp).mount("#app");
