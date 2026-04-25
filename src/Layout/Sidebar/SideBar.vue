<template>
  <div class="sidebar">
    <div class="logo_content">
      <div class="logo">
        <i class="bx bxl-c-plus-plus"></i>
        <div class="logo_name">Portfolio</div>
      </div>
      <i class="bx bx-menu" id="btn" @click="openMenu"></i>
    </div>
    <ul class="nav_list">
      <li>
        <a href="#">
          <i class="bx bx-search" @click="searchBtn"></i>
          <input type="text" placeholder="Search..." id="input" />
        </a>
        <span class="tooltip">Search</span>
      </li>
      <li>
        <router-link to="skills">
          <i class="bx bx-user"></i>
          <span class="links_name"> Skills </span>
        </router-link>
        <span class="tooltip">Dashboard</span>
      </li>
      <li>
        <a href="#">
          <i class="bx bx-chat"></i>
          <span class="links_name">Messages</span>
        </a>
        <span class="tooltip">Dashboard</span>
      </li>
      <li>
        <a href="#">
          <i class="bx bx-pie-chart-alt-2"></i>
          <span class="links_name">Analytics</span>
        </a>
        <span class="tooltip">Dashboard</span>
      </li>
      <li>
        <a href="#">
          <i class="bx bx-folder"></i>
          <span class="links_name">File Manager</span>
        </a>
        <span class="tooltip">Dashboard</span>
      </li>
      <li>
        <a href="#">
          <i class="bx bx-grid-alt"></i>
          <span class="links_name">Dashboard</span>
        </a>
        <span class="tooltip">Dashboard</span>
      </li>
    </ul>
    <div class="profile_content">
      <div class="profile">
        <i class="bx bx-log-out" id="log_out"></i>
      </div>
    </div>
  </div>
  <div class="home_content">
    <router-view></router-view>
  </div>
</template>

<script setup>
const openMenu = () => {
  let sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("activeMenu");
};

const searchBtn = () => {
  let sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("activeMenu");
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  padding: 6px 14px;
  height: 100%;
  width: 78px;
  background-color: #11101d;
  transition: all 0.3s ease;
}

.sidebar.activeMenu {
  width: 240px;
}
.sidebar .logo_content .logo {
  color: #fff;
  display: flex;
  height: 50px;
  width: 100%;
  align-items: center;
  opacity: 0;
  pointer-events: none;
}

.sidebar.activeMenu .logo_content .logo {
  opacity: 1;
  pointer-events: none;
}

.logo_content .logo i {
  font-size: 28px;
  margin-right: 5px;
}

.logo_content .logo .logo_name {
  font-size: 20px;
  font-weight: 400;
}

.sidebar #btn {
  color: #fff;
  position: absolute;
  top: 6px;
  left: 50%;
  font-size: 20px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  transform: translateX(-50%);
}

.sidebar.activeMenu #btn {
  left: 90%;
}

.sidebar ul {
  margin-top: 20px;
}

.sidebar ul li {
  list-style: none;
  height: 50px;
  position: relative;
  margin: 0 5px;
  width: 100%;
  line-height: 50px;
  border-radius: 12px;
}

.sidebar ul li .tooltip {
  position: absolute;
  height: 35px;
  left: 78px;
  top: 18%;
  transform: translateY(-50%, -50%);
  border-radius: 6px;
  width: 122px;
  background-color: #fff;
  line-height: 35px;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: 0s;
  opacity: 0;
  pointer-events: none;
}

.sidebar.activeMenu ul li .tooltip {
  display: none;
}

.sidebar ul li:hover .tooltip {
  opacity: 1;
  top: 50%;
  transition: all 0.5s ease;
}

.sidebar ul li input {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  border-radius: 12px;
  outline: none;
  border: none;
  background: #1d1b31;
  padding-left: 50px;
  font-size: 18px;
  color: #fff;
}

.sidebar ul li .bx-search {
  position: absolute;
  z-index: 99;
  color: #fff;
  font-size: 22px;
  padding-top: 27px;
}

.sidebarul li .bx-search:hover {
  background-color: #fff;
  color: #1d1b31;
}

.sidebar ul li a {
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  border-radius: 12px;
  white-space: nowrap;
}
.sidebar ul li a:hover {
  background: #fff;
  color: #11101d;
}

.sidebar ul li i {
  height: 50px;
  border-radius: 12px;
  line-height: 50px;
  min-width: 50px;
  text-align: center;
}

.sidebar .links_name {
  opacity: 0;
  pointer-events: none;
}

.sidebar.activeMenu .links_name {
  opacity: 1;
  pointer-events: none;
}

.sidebar .profile_content {
  position: absolute;
  color: #fff;
  bottom: 0;
  left: 0;
  width: 100%;
}

.sidebar .profile_content .profile {
  position: relative;
  height: 60px;
  background: #1d1b31;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.profile #log_out {
  font-size: 20px;
}

.home_content {
  position: absolute;
  height: 100%;
  width: calc(100% - 78px);
  left: 78px;
  transform: all 0.5 ease;
  padding: 20px 10px;
}

.home_content .text {
  font-size: 25px;
  font-weight: 500;
  color: #1d1b31;
  margin: 12px;
}

.sidebar.activeMenu ~ .home_content {
  left: 240px;
  width: calc(100% -240px);
}
</style>
