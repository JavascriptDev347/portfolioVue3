<template>
  <div class="container">
    <div class="col-md-12 col-sm-12-col-xs-12">
      <div class="section_heading text-center"><strong>Touch</strong>
        <h2>Get In Toch</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus est, finibus ut congue sed,
          faucibus ut dui. Sed congue nisl dolor, id dapibus leo elementum posuere.</p>
        <div class="sm_border"></div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-7 col-sm-12">
        <form id="contact-form" method="post" enctype="multipart/form-data">
          <div class="row">
            <div class="input_padding text-center">
              <div class="form-group col-sm-12"><input type="text" name="name" class="form-control" id="first-name"
                                                       placeholder="Name *" required=""></div>
              <div class="form-group col-sm-6"><input type="email" name="email" class="form-control" id="email"
                                                      placeholder="Email *" required=""></div>
              <div class="form-group col-sm-6"><input type="text" name="subject" class="form-control" id="subject"
                                                      placeholder="Subject *" required=""></div>
              <div class="form-group col-sm-12 mab-none"><textarea rows="8" name="message" class="form-control"
                                                                   id="description"
                                                                   placeholder="Your Message Here ..."
                                                                   required=""></textarea></div>
              <div class="form-group mb0 col-sm-12">
                <div class="actions">
                  <button type="submit" name="submit" id="submitButton" class="btn btn-lg main_btn btn_shadow"
                          title="Submit Your Message!" value="Send message">Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="col-md-5 col-sm-12">
        <div class="contact_widget_area">
          <div class="contact_info"><i class="fa fa-home"></i>
            <div class="contact_info_text"><h5>Home</h5>
              <p> Yunusobod, Toshkent </p></div>
          </div>
          <div class="contact_info"><i class="fa fa-phone"></i>
            <div class="contact_info_text"><h5>Phone</h5>
              <p>+998931020636</p>
              <p>+998330870426</p></div>
          </div>
          <div class="contact_info"><i class="fa fa-envelope"></i>
            <div class="contact_info_text"><h5>Email</h5>
              <p>javascriptdev347@gmail.com</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script></script>