Vue.filter("capatilize", (value) => {
  if (!value) return "";
  value = value.toString();
  return value.replace(/\b\w/g, (l) => l.toUpperCase());
});

new Vue({
  el: "#app",
  data: {
    show: false,
    message: "Hello, world super puper",
    cars: [
      { model: "BMW", speed: 250.8 },
      { model: "Audi", speed: 240.21 },
      { model: "Mercedes-Benz", speed: 350.4 },
      { model: "Ford", speed: 168.5 },
    ],
  },
  computed: {
    showMess() {
      return this.message.toUpperCase();
    },
  },
  filters: {
    lowercase(value) {
      return value.toLowerCase();
    },
  },
});
