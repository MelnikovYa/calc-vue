const vue = new Vue({
  el: "#app",
  data: {
    result: "",
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    operations: ["+", "-", "*", "/"],
    isButtonDisabled: true,
  },
  methods: {
    input: function (char) {
      this.isButtonDisabled = false;
      this.result = this.result.toString();
      this.result += char;
      vue.operations.forEach(function (item) {
        if (vue.result[vue.result.length - 1] === item) {
          vue.isButtonDisabled = true;
        }
      });
    },
    reset: function () {
      this.result = "";
      this.isButtonDisabled = true;
    },
    calc: function () {
      // if (this.result !== "") {
      //   this.result = eval(this.result);
      //   console.log("done");
      // }
      vue.numbers.forEach(function (num) {
        if (vue.result[vue.result.length - 1] == num) {
          vue.result = eval(vue.result);
          console.log("done");
        }
      });
    },
  },
});
