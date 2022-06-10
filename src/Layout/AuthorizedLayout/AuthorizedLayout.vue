<template>
  <v-app>
    <v-navigation-drawer
        :rail="rail" permanent @click="rail = false"
        theme="dark"
    >
      <v-app-bar-nav-icon @click.stop="rail = !rail"></v-app-bar-nav-icon>
      <v-list color="transparent">
        <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard"></v-list-item>
        <v-list-item prepend-icon="mdi-account-box" title="Account"></v-list-item>
        <v-list-item prepend-icon="mdi-gavel" title="Admin"></v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @сlick="Logout">
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-title>Rustambek</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>

    </v-footer>
  </v-app>
</template>

<script setup>
import {useRouter} from "vue-router"
import {ref} from "vue";

const rail = ref(false)
const router = useRouter();
const Logout = () => {
  localStorage.removeItem("token")
  router.push({name: "login"})
}
</script>