import Vue from "vue";
import App from "./App.vue";
import routes from "./router";
import VueRouter from "vue-router";
import "./sass/app.scss";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
  linkExactActiveClass: "active", // read documentation
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
