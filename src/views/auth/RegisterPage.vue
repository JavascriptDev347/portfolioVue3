<template>
  <div class="reg">
    <v-form class="register">
      <v-row class="register_row">
        <v-col cols="12" sm="12" md="6">
          <v-text-field
              class="rounded-md"
              label="First Name"
              placeholder="First Name"
              variant="outlined"
              v-model="first_name"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
              class="rounded-md"
              label="Last Name"
              placeholder="Last Name"
              variant="outlined"
              v-model="last_name"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
              class="rounded-md"
              label="User Name"
              placeholder="User Name"
              variant="outlined"
              v-model="username"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
              class="rounded-md"
              type="password"
              label="Password"
              placeholder="Password"
              variant="outlined"
              v-model="password"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-btn
              type="submit"
              @click="register"
              class="text-[white] w-100 button"
          >Submit
          </v-btn>
        </v-col>
        <v-col cols="12" sm="12" md="8" class="text-center text-xl text-[blue]">
          <router-link to="/login">Login</router-link>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";
import {useToast} from "vue-toast-notification";

const toast = useToast();
const router = useRouter();

const last_name = ref("");
const first_name = ref("");
const username = ref("");
const password = ref("");

const register = (e) => {
  e.preventDefault();
  const data = reactive({
    first_name: first_name.value,
    last_name: last_name.value,
    username: username.value,
    password: password.value,
  });
  console.log(data);

  if (
      first_name.value.length === 0 &&
      last_name.value.length === 0 &&
      username.value.length === 0 &&
      password.value.length === 0
  ) {
    toast.warning("Ma'lumotlarni to'diring");
  }

  axios
      .post("https://portfolio-bakcend.herokuapp.com/api/v1/auth/register", data)
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          router.push({name: "login"});
          toast.success("Yes Every");
        }
      })
      .catch((err) => {
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

.reg {
  /* background-color: aqua; */
  background: url("@/assets/bg.webp");
}

.register {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 85%;
}

.register_row {
  flex-direction: column;
  align-items: center;
}

.button {
  width: 140px;
  height: 45px !important;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

.button:hover {
  background-color: #2ee59d;
  box-shadow: 0px 15px 20px rgba(46, 200, 157, 0);
  color: #fff;
  transform: translateY(-7px);
}
</style>
