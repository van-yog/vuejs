Vue.component("app-car", {
  data: function () {
    return {
      cars: [{ model: "BMW" }, { model: "Cherry" }, { model: "Lada" }, { model: "Mercedes" }, { model: "Audi" }],
    };
  },
  template: `  
  <div>
    <div class="car" v-for="car in cars">
      <p>{{car.model}}</p>
    </div>
  </div>`,
});

Vue.component("app-bike", {
  data: () => {
    return { bikes: [{ model: "suzuki" }, { model: "yava" }, { model: "Karpaty" }] };
  },
  template: `
  <div>
    <div class="car" v-for="bike in bikes" >
      <p>{{bike.model}}</p>
    </div>
    <button class="btn-center">Удалить байки</button>
  </div>
  `,
});

Vue.component("app-3", {
  template: "<h2>app3</h2>",
});

new Vue({
  el: "#app",
  data: {},
});

new Vue({
  el: "#app2",
  data: {},
});

new Vue({
  el: "#app3",
});
