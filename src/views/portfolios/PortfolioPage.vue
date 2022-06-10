<template>
  <p>Portfolio</p>
  <v-btn @click="logout" v-if="store.state.userIsAuthorized">
    LogOut
  </v-btn>
</template>

<script setup>
import store from "@/store"
import {useRouter} from "vue-router"

const router = useRouter();
const logout = () => {
  console.log(store.state.userIsAuthorized);
  localStorage.removeItem("token")
  router.push({name: "login"})
}

</script>
