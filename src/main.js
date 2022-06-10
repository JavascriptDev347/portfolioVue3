import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import {loadFonts} from "./plugins/webfontloader";
import "vue-toast-notification/dist/theme-sugar.css";
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import "./index.css";

loadFonts();

createApp(App)
    .use(router)
    .use(store).use(VueSidebarMenu)
    .use(vuetify)

    .mount("#app");
