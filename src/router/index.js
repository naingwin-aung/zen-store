import Home from "../views/Home.vue";
import About from "../views/About.vue";

let routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

export default routes;
