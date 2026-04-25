<template>
  <div class="limiter">
    <div class="container-login100 login">
      <div class="wrap-login100">
        <form class="validate-form">
          <h3 class="font-medium text-3xl my-7 text-center">Login</h3>
          <v-row class="flex flex-col justify-between items-center gap-8">
            <v-col cols="12" sm="12">
              <v-text-field
                class="rounded-md"
                label="User Name"
                placeholder="User Name"
                variant="outlined"
                v-model="username"
              ></v-text-field>
              <ErrorMessage name="username" />
            </v-col>
            <v-col cols="12" sm="12">
              <v-text-field
                class="rounded-md"
                type="password"
                label="Password"
                placeholder="Password"
                variant="outlined"
                v-model="password"
              ></v-text-field>
              <error-message name="password" />
            </v-col>
            <v-col cols="12" sm="12">
              <v-btn type="submit" @click="login" class="w-100 submit_btn"
                >Submit
              </v-btn>
            </v-col>
          </v-row>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import "./css/util.css";

import { reactive, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useToast } from "vue-toast-notification";

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
    .post("https://portfolio-bakcend.herokuapp.com/api/v1/auth/login", data)
    .then((res) => {
      if (res.data.token) {
        toast.success("Siz tizimga Muvaffaqiyatli kirdingiz !!!");
        localStorage.setItem("token", res.data.token);
        router.push({ name: "portfolio" });
      } else {
        toast.error("Xatolikni tekshirib qayta urinib kuring");
      }
    })
    .catch((err) => {
      if (username.value.length > 0 && password.value.length > 0) {
        router.push({ name: "portfolio" });
      }
      console.log(err);
      toast.error("Password yoki UserName Hato!!!");
    });
};
</script>

<style>
.login {
  background-image: url("./images/bg-01.jpg");
}

*,
::after,
::before {
  border-style: none !important;
}

.v-text-field .v-input__control {
  background: #eff3ff;
  border-radius: 10px;
}

.v-text-field .v-input__control .v-field__input * {
  background-color: #eff3ff !important;
}

.v-input__control .v-field--variant-outlined {
  border: none !important;
}

.v-input .v-input__details {
  display: none;
}

.submit_btn {
  background-color: rgb(61, 114, 198);
  color: white;
}

/* uzini class */
.limiter {
  width: 100%;
  margin: 0 auto;
}

.container-login100 {
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.wrap-login100 {
  width: 550px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding: 30px 20px;
}
</style>
