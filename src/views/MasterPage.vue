<template>
  <NavbarPage/>

  <!--  Home Page-->
  <section
      id="home"
      class="main_banner banner_bg ripple-effect jquery-ripples"
      style="background-image: none"
  >
    <HomePage/>
  </section>

  <!--  AboutPage-->
  <section id="about" class="section_padding">
    <AboutPage/>
  </section>

  <!--  ServicesPage-->
  <section id="service" class="gray_bg section_padding pb_70">
    <ServicePage/>
  </section>

  <!--  portfolio-->
  <section id="portfolio" class="section_padding">
    <PortfolioPage/>
  </section>

  <!--  ResumePage-->
  <section id="resume" class="section_padding pb_70">
    <ResumePage/>
  </section>

  <!--  TestimonialPage-->
  <section id="testimonial_area" class="section_padding pb_70">
    <TestimonialPage/>
  </section>

  <!--  BlogPage-->
  <section id="blog" class="section_padding pb_70">
    <BlogPage/>
  </section>

  <!--  Contact Page-->
  <section id="contact" class="section_padding">
    <ContactPage/>
  </section>

  <FooterPage/>
</template>

<script>
import HomePage from "./pages/HomePage.vue";
import NavbarPage from "@/views/pages/NavbarPage";
import AboutPage from "@/views/pages/AboutPage";
import ServicePage from "@/views/pages/ServicePage";
// import CounterPage from "@/views/pages/CounterPage";
import ResumePage from "@/views/pages/ResumePage";
import TestimonialPage from "@/views/pages/TestimonialPage";
import BlogPage from "@/views/pages/BlogPage";
import ContactPage from "@/views/pages/ContactPage";
import FooterPage from "@/views/pages/FooterPage";
import PortfolioPage from "@/views/pages/PortfolioPage";

export default {
  name: "MasterPage",
  components: {
    PortfolioPage,
    FooterPage,
    ContactPage,
    BlogPage,
    TestimonialPage,
    ResumePage,
    ServicePage,
    AboutPage,
    NavbarPage,
    HomePage,
  },
};
</script>
