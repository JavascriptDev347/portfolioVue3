<template>
  <v-form class="register">
    <h3 class="font-medium text-3xl">Register</h3>
    <v-row class="flex flex-col justify-between items-center">
      <v-col cols="12" sm="6" md="6">
        <v-text-field
            class="rounded-md"
            label="First Name"
            placeholder="First Name"
            variant="outlined"
            v-model="fname"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-text-field
            class="rounded-md"
            label="Last Name"
            placeholder="Last Name"
            variant="outlined"
            v-model="lname"
        ></v-text-field>
      </v-col
      >
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
            @click="register"
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

const lname = ref("");
const fname = ref("");
const username = ref("");
const password = ref("");

const register = (e) => {
  e.preventDefault();
  const data = reactive({
    first_name: fname,
    last_name: lname,
    username: username,
    password: password,
  });

  if (fname.value.length === 0 && lname.value.length === 0 && username.value.length === 0 && password.value.length === 0) {
    toast.success("Foydalanuvchi bor");
    router.push({ name: "login" });
  }
  axios
      .post(API_URL + "auth/register", data)
      .then((res) => {
        if (res.data.success === "true") {
          router.push({name: "login"});
          toast.success("Yes Every");
        }
      })
      .catch((err) => {
        if (fname.value.length > 0 && lname.value.length > 0 && username.value.length > 0 && password.value.length > 0) {
          toast.success("Bu user name va passwordli foydalanuvchi bor");
          router.push({name: "login"})
        }
        console.log(err);
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

.register {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 100px;
}
</style>
