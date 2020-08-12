const vue = new Vue({
  el: "#app",
  data: {
    result: "",
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    operations: ["+", "-", "*", "/"],
    isButtonDisabled: false,
  },
  methods: {
    input: function (char) {
      this.isButtonDisabled = false;
      this.result = this.result.toString();
      this.result += char;
      if (
        this.result[this.result.length - 1] === "+" ||
        this.result[this.result.length - 1] === "-" ||
        this.result[this.result.length - 1] === "/" ||
        this.result[this.result.length - 1] === "*"
      ) {
        this.isButtonDisabled = true;
      }
    },
    reset: function () {
      this.result = "";
    },
    calc: function () {
      this.result = eval(this.result);
    },
  },
});
