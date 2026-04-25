<template>

  <div class="container">
    <div class="row">
      <div class="col-md-7 col-sm-12 col-xs-12">
        <div class="banner_content">

          <h1 class="cd-headline clip">
            Salom Men
            <v-typical
                style="display: inline"
                class="blink"
                :steps="[' Rustambek  👋', 1000, ' Web Developer!', 500, 'Student!', 1000]"
                :loop="Infinity"
                :wrapper="'h2'"
            >
            </v-typical>
          </h1>
          <p>
            Men Eshbo'riyev Rustambek TATU 2-kurs talabasiman.
            2 oydan beri Genesis Innovationda stajorlik qilaman.
          </p>
          <ul class="banner_social_link">
            <li>
              <a href="https://t.me/rustambek2604" title="Telegram" target="_blank"><i class="fa fa-telegram"></i></a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/rustambek-eshbo-riyev-636626242/" target="_blank" title="Linkiden"><i
                  class="icon-linkedin-sign"></i></a>
            </li>
            <li>
              <a href="https://github.com/JavascriptDev347" target="_blank" title="Github"><i
                  class="fa fa-github   "></i></a>
            </li>
            <li>

              <a href="https://gitlab.com/javascriptdev347" target="_blank" title="Gitlab"><i
                  class="icon-github-alt"></i></a>
            </li>
            <li>
              <a href="tel:+998931020636"><i class="fa fa-phone"></i></a>
            </li>

          </ul>
        </div>
      </div>
      <div class="col-md-5 col-sm-12 col-xs-12"></div>
    </div>
  </div>
  <canvas
      width="1519"
      height="700"
      style="position: absolute; inset: 0px; z-index: -1"
  ></canvas>

</template>

<script setup>
import VTypical from "vue-typical"
</script>