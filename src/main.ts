import { createPinia } from "pinia";
import { createApp } from "vue";
import { router } from "./router";
import { TokenService } from "./services/token/index.service";
import "@unocss/reset/tailwind.css";
import "uno.css";
import ApiService from "./services/api/index.service";
import App from "./App.vue";
import Sidebar from "./components/sidebar/main.vue";
import BottomNavbar from "./components/navbar/panel.vue";
import Header from "./components/common/mobile/VtsHeader.vue";
import Loading from "./components/loading/index.vue";
import Button from "./components/common/VtsButton.vue";
import Empty from "./components/empty/index.vue";
import Card from "./components/card/VtsCard.vue";
import CardPoll from "./components/card/VtsCardPoll.vue";
import Dashboard from "./components/layout/dashboard.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faDashboard,
  faUsers,
  faUser,
  faChartLine,
  faBackspace,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faUserSecret,
  faDashboard,
  faUser,
  faUsers,
  faChartLine,
  faBackspace
);

ApiService.init("https://api-votsu.herokuapp.com/");

if (TokenService.getToken()) {
  ApiService.setHeader();
}

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("Sidebar", Sidebar);
app.component("BottomNavbar", BottomNavbar);
app.component("Loading", Loading);
app.component("Button", Button);
app.component("Empty", Empty);
app.component("Card", Card);
app.component("CardPoll", CardPoll);
app.component("Header", Header);
app.component("Dashboard", Dashboard);

app.mount("#app");
