<template>
  <div class="container">
    <div class="single_about">
      <div class="row">
        <div class="col-md-5 col-sm-5 col-xs-12">
          <div class="about_image">
            <img src="@/assets/img/profile.jpg" alt="Rustambek Eshbo'riyev" class="img-responsive"/>
          </div>
        </div>

        <div class="col-md-7 col-sm-7 col-xs-12">
          <div class="about_content_area">
            <h4>About Me</h4>
            <h3>Fullstack Developer & Researcher</h3>
            <p>
              Men **Rustambek Eshbo'riyev**, hozirda **Wisestone U** kompaniyasida tadqiqotchi va dasturchi lavozimida faoliyat yuritaman.
              Asosan Vue 3, NestJS va Go ekotizimida murakkab tizimlar, jumladan CRM platformalari va E-learning (Learnhub) loyihalarini ishlab chiqish bilan shug'ullanaman.
              Dasturiy ta'minot arxitekturasi va kiberxavfsizlik yo'nalishlariga qiziqaman.
            </p>

            <div class="about_details">
              <div class="row">
                <div class="col-md-6">
                  <div class="ct_about">
                    <span><i class="fa fa-map-marker"></i> Location </span>
                    : Toshkent (G'uzor, Qashqadaryo)
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="ct_about">
                    <span><i class="fa fa-calendar"></i> Age </span> : 21
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="ct_about">
                    <span><i class="fa fa-code"></i> Stack </span> : Vue 3, NestJS, Go
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="ct_about">
                    <span><i class="fa fa-envelope"></i> Email </span> :
                    javascriptdev347@gmail.com
                  </div>
                </div>
              </div>
            </div>

            <div class="about_btn_group">
               <a href="/resume.pdf" class="btn btn-default main_btn" download>Download CV</a>
               <a href="https://github.com/rustambek-dev" target="_blank" class="btn btn-dark main_btn">GitHub Profile</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style scoped>
/* Bootstrap classlaridan tashqari qo'shimcha stil */
.main_btn {
  margin-right: 10px;
  margin-top: 20px;
  transition: 0.3s;
}
.ct_about span {
  font-weight: bold;
  color: #333;
}
.about_image img {
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}
</style>