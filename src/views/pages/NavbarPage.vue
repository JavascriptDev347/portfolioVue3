<template>
  <div class="navbar navbar-default navbar-fixed-top menu-top">
    <div class="container">
      <div class="logo">
        <a href="index.html" class="navbar-brand"><p>MMCE</p></a>
        <div class="mobile-nav">
          <div class="slicknav_menu">
            <a
              href="#"
              aria-haspopup="true"
              role="button"
              tabindex="0"
              class="slicknav_btn slicknav_collapsed"
              style="outline: none"
              ><span class="slicknav_menutxt"></span
              ><span class="slicknav_icon slicknav_no-text"
                ><span class="slicknav_icon-bar"></span
                ><span class="slicknav_icon-bar"></span
                ><span class="slicknav_icon-bar"></span></span
            ></a>
            <div
              class="slicknav_nav slicknav_hidden"
              aria-hidden="true"
              role="menu"
              style="display: none"
            >
              <ul class="nav navbar-nav navbar-right">
                <li class="active"><a href="#home" role="menuitem">Home</a></li>
                <li><a href="#about" role="menuitem">About</a></li>
                <li><a href="#service" role="menuitem">Service</a></li>
                <li><a href="#portfolio" role="menuitem">Work</a></li>
                <li><a href="#resume" role="menuitem">Resume</a></li>
                <li><a href="#blog" role="menuitem">Blog</a></li>
                <li><a href="#contact" role="menuitem">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="navbar" class="main_menu">
        <ul class="nav navbar-nav navbar-right">
          <li class="active"><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#portfolio">Work</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "NavbarPage",
};
</script>
