<template>
  <v-form class="login">
    <h3 class="font-medium text-3xl">Login</h3>
    <v-row class="flex flex-col justify-between items-center">
      <v-col cols="12" sm="6" md="6">
        <v-text-field
            class="rounded-md"
            label="User Name"
            placeholder="User Name"
            variant="outlined"
            v-model="username"
        ></v-text-field>
      </v-col
      >
      <v-col cols="12" sm="6" md="6">
        <v-text-field
            class="rounded-md"
            type="password"
            label="Password"
            placeholder="Password"
            variant="outlined"
            v-model="password"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-btn
            type="submit"
            @click="login"
            class="w-100 text-[white] bg-[#5f5fd6]"
        >Submit
        </v-btn
        >
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup>
import {reactive, ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";
import API_URL from "@/const/const.js";
import {useToast} from "vue-toast-notification";

const toast = useToast();
const router = useRouter();

const username = ref("");
const password = ref("");

const login = (e) => {
  e.preventDefault();
  const data = reactive({
    username: username,
    password: password,
  });
  axios
      .post(API_URL + "auth/login", data)
      .then((res) => {
        if (res.data.token) {
          toast.success("Siz tizimga Muvaffaqiyatli kirdingiz !!!");
          router.push({name: "portfolio"});
          localStorage.setItem("token", res.data.token)
        } else {
          toast.error("Xatolikni tekshirib qayta urinib kuring");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Password yoki UserName Hato!!!")
      });
};
</script>

<style>
*,
::after,
::before {
  border-style: none !important;
}

.v-text-field .v-input__control {
  background: #eff3ff;
  border-radius: 10px;
}

.v-input__control .v-field--variant-outlined {
  border: none !important;
}

.v-input .v-input__details {
  display: none;
}

.login {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 100px;
}
</style>
