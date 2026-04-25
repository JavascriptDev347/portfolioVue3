(function (e) {
  function i(i) {
    for (
      var t, c, o = i[0], n = i[1], r = i[2], d = 0, m = [];
      d < o.length;
      d++
    )
      (c = o[d]),
        Object.prototype.hasOwnProperty.call(a, c) && a[c] && m.push(a[c][0]),
        (a[c] = 0);
    for (t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
    u && u(i);
    while (m.length) m.shift()();
    return l.push.apply(l, r || []), s();
  }
  function s() {
    for (var e, i = 0; i < l.length; i++) {
      for (var s = l[i], t = !0, c = 1; c < s.length; c++) {
        var n = s[c];
        0 !== a[n] && (t = !1);
      }
      t && (l.splice(i--, 1), (e = o((o.s = s[0]))));
    }
    return e;
  }
  var t = {},
    a = { app: 0 },
    l = [];
  function c(e) {
    return (
      o.p +
      "js/" +
      ({ about: "about" }[e] || e) +
      "." +
      { about: "94e20234" }[e] +
      ".js"
    );
  }
  function o(i) {
    if (t[i]) return t[i].exports;
    var s = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(s.exports, s, s.exports, o), (s.l = !0), s.exports;
  }
  (o.e = function (e) {
    var i = [],
      s = a[e];
    if (0 !== s)
      if (s) i.push(s[2]);
      else {
        var t = new Promise(function (i, t) {
          s = a[e] = [i, t];
        });
        i.push((s[2] = t));
        var l,
          n = document.createElement("script");
        (n.charset = "utf-8"),
          (n.timeout = 120),
          o.nc && n.setAttribute("nonce", o.nc),
          (n.src = c(e));
        var r = new Error();
        l = function (i) {
          (n.onerror = n.onload = null), clearTimeout(d);
          var s = a[e];
          if (0 !== s) {
            if (s) {
              var t = i && ("load" === i.type ? "missing" : i.type),
                l = i && i.target && i.target.src;
              (r.message =
                "Loading chunk " + e + " failed.\n(" + t + ": " + l + ")"),
                (r.name = "ChunkLoadError"),
                (r.type = t),
                (r.request = l),
                s[1](r);
            }
            a[e] = void 0;
          }
        };
        var d = setTimeout(function () {
          l({ type: "timeout", target: n });
        }, 12e4);
        (n.onerror = n.onload = l), document.head.appendChild(n);
      }
    return Promise.all(i);
  }),
    (o.m = e),
    (o.c = t),
    (o.d = function (e, i, s) {
      o.o(e, i) || Object.defineProperty(e, i, { enumerable: !0, get: s });
    }),
    (o.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, i) {
      if ((1 & i && (e = o(e)), 8 & i)) return e;
      if (4 & i && "object" === typeof e && e && e.__esModule) return e;
      var s = Object.create(null);
      if (
        (o.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: e }),
        2 & i && "string" != typeof e)
      )
        for (var t in e)
          o.d(
            s,
            t,
            function (i) {
              return e[i];
            }.bind(null, t)
          );
      return s;
    }),
    (o.n = function (e) {
      var i =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return o.d(i, "a", i), i;
    }),
    (o.o = function (e, i) {
      return Object.prototype.hasOwnProperty.call(e, i);
    }),
    (o.p = "/"),
    (o.oe = function (e) {
      throw (console.error(e), e);
    });
  var n = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    r = n.push.bind(n);
  (n.push = i), (n = n.slice());
  for (var d = 0; d < n.length; d++) i(n[d]);
  var u = r;
  l.push([0, "chunk-vendors"]), s();
})({
  0: function (e, i, s) {
    e.exports = s("56d7");
  },
  "56d7": function (e, i, s) {
    "use strict";
    s.r(i);
    s("e260"), s("e6cf"), s("cca6"), s("a79d");
    var t = s("7a23");
    function a(e, i, s, a, l, c) {
      var o = Object(t["v"])("master");
      return Object(t["r"])(), Object(t["d"])(o);
    }
    var l = Object(t["g"])(
      '<div class="footer"><div class="container"><div class="row"><div class="col-sm-6"><div class="copy-text"><p>CopyRight © masukmia | MMCE All Rights Reserved-2022</p></div></div><div class="col-sm-6"><ul class="social-link pull-right"><li><a href="#0"><i class="fa fa-google-plus"></i></a></li><li><a href="#0"><i class="fa fa-facebook"></i></a></li><li><a href="#0"><i class="fa fa-twitter"></i></a></li><li><a href="#0"><i class="fa fa-linkedin"></i></a></li><li><a href="#0"><i class="fa fa-pinterest"></i></a></li></ul></div></div></div></div>',
      1
    );
    function c(e, i, s, a, c, o) {
      var n = Object(t["v"])("navbar"),
        r = Object(t["v"])("banner"),
        d = Object(t["v"])("about"),
        u = Object(t["v"])("service"),
        m = Object(t["v"])("cta"),
        v = Object(t["v"])("portfolio"),
        p = Object(t["v"])("counter"),
        b = Object(t["v"])("resume"),
        f = Object(t["v"])("testimonial"),
        g = Object(t["v"])("blog"),
        h = Object(t["v"])("contact");
      return (
        Object(t["r"])(),
        Object(t["e"])(
          t["a"],
          null,
          [
            Object(t["i"])(n),
            Object(t["i"])(r),
            Object(t["i"])(d),
            Object(t["i"])(u),
            Object(t["i"])(m),
            Object(t["i"])(v),
            Object(t["i"])(p),
            Object(t["i"])(b),
            Object(t["i"])(f),
            Object(t["i"])(g),
            Object(t["i"])(h),
            l,
          ],
          64
        )
      );
    }
    var o = { class: "navbar navbar-default navbar-fixed-top menu-top" },
      n = Object(t["g"])(
        '<div class="container"><div class="logo"><a href="index.html" class="navbar-brand"><p>MMCE</p></a><div class="mobile-nav"></div></div><div id="navbar" class="main_menu"><ul class="nav navbar-nav navbar-right"><li><a href="#home">Home</a></li><li><a href="#about">About</a></li><li><a href="#service">Service</a></li><li><a href="#portfolio">Work</a></li><li><a href="#resume">Resume</a></li><li><a href="#blog">Blog</a></li><li><a href="#contact">Contact</a></li></ul></div></div>',
        1
      ),
      r = [n];
    function d(e, i, s, a, l, c) {
      return Object(t["r"])(), Object(t["e"])("div", o, r);
    }
    var u = { name: "Navbar" },
      m = s("6b0d"),
      v = s.n(m);
    const p = v()(u, [["render", d]]);
    var b = p,
      f = { id: "portfolio", class: "section_padding" },
      g = Object(t["g"])(
        '<div class="container"><div class="col-md-12 col-sm-12-col-xs-12"><div class="section_heading text-center"><strong>Works</strong><h2>My Work</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus est, finibus ut congue sed, faucibus ut dui. Sed congue nisl dolor, id dapibus leo elementum posuere.</p><div class="sm_border"></div></div></div><div class="row"><div class="work_filter text-center"><ul><li class="active" data-filter="*">All</li><li data-filter=".design">Design</li><li data-filter=".marketing">Marketing</li><li data-filter=".Photography">Photography</li></ul></div><div class="work_content_area"><div class="col-md-4 col-sm-6 col-xs-12"><div class="item-img"><img src="frontend/images/portfolio/work-1.jpg" alt=""><div class="item-img-overlay"><div class="overlay-info full-width"><p>Photography</p><h5>Creative Web Design</h5><a href="frontend/images/portfolio/work-1.jpg" data-lightbox="images"><span class="icon"><i class="ti-arrow-right"></i></span></a></div></div></div></div><div class="col-md-4 col-sm-6 col-xs-12 element-item design Photography"><div class="item-img"><img src="frontend/images/portfolio/work-2.jpg" alt=""><div class="item-img-overlay"><div class="overlay-info full-width"><p>Photography</p><h5>Creative Web Design</h5><a href="frontend/images/portfolio/work-2.jpg" data-lightbox="images"><span class="icon"><i class="ti-arrow-right"></i></span></a></div></div></div></div><div class="col-md-4 col-sm-6 col-xs-12 element-item Photography marketing"><div class="item-img"><img src="frontend/images/portfolio/work-3.jpg" alt=""><div class="item-img-overlay"><div class="overlay-info full-width"><p>Photography</p><h5>Creative Web Design</h5><a href="frontend/images/portfolio/work-3.jpg" data-lightbox="images"><span class="icon"><i class="ti-arrow-right"></i></span></a></div></div></div></div><div class="col-md-4 col-sm-6 col-xs-12 element-item design Photography"><div class="item-img"><img src="frontend/images/portfolio/work-4.jpg" alt=""><div class="item-img-overlay"><div class="overlay-info full-width"><p>Photography</p><h5>Creative Web Design</h5><a href="frontend/images/portfolio/work-4.jpg" data-lightbox="images"><span class="icon"><i class="ti-arrow-right"></i></span></a></div></div></div></div><div class="col-md-4 col-sm-6 col-xs-12 element-item marketing Photography"><div class="item-img"><img src="frontend/images/portfolio/work-5.jpg" alt=""><div class="item-img-overlay"><div class="overlay-info full-width"><p>Photography</p><h5>Creative Web Design</h5><a href="images/portfolio/work-5.jpg" data-lightbox="images"><span class="icon"><i class="ti-arrow-right"></i></span></a></div></div></div></div><div class="col-md-4 col-sm-6 col-xs-12 element-item design marketing"><div class="item-img"><img src="frontend/images/portfolio/work-6.jpg" alt=""><div class="item-img-overlay"><div class="overlay-info full-width"><p>Photography</p><h5>Creative Web Design</h5><a href="frontend/images/portfolio/work-6.jpg" data-lightbox="images"><span class="icon"><i class="ti-arrow-right"></i></span></a></div></div></div></div></div><div class="port_content_button text-center"><a href="#0" class="btn btn-default main_btn">load more</a></div></div></div>',
        1
      ),
      h = [g];
    function j(e, i, s, a, l, c) {
      return Object(t["r"])(), Object(t["e"])("section", f, h);
    }
    var O = { name: "Portfolio" };
    const _ = v()(O, [["render", j]]);
    var y = _,
      w = { id: "testimonial_area", class: "section_padding pb_70" },
      x = Object(t["g"])(
        '<div class="container"><div class="row"><div class="col-md-12"><div class="testmonial_slider_area text-center owl-carousel"><div class="single_testimonial"><div class="pic"><img src="frontend/images/testimonial/1.jpg" alt=""></div><h5 class="testimonial-title">Masuk Mia</h5><span class="test_designation">Web Developer</span><p class="description"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since </p></div><div class="single_testimonial"><div class="pic"><img src="frontend/images/testimonial/2.jpg" alt=""></div><h5 class="testimonial-title">Masuk Mia</h5><span class="test_designation">Web Developer</span><p class="description"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since </p></div><div class="single_testimonial"><div class="pic"><img src="frontend/images/testimonial/3.jpg" alt=""></div><h5 class="testimonial-title">Masuk Mia</h5><span class="test_designation">Web Developer</span><p class="description"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since </p></div><div class="single_testimonial"><div class="pic"><img src="frontend/images/testimonial/4.jpg" alt=""></div><h5 class="testimonial-title">Masuk Mia</h5><span class="test_designation">Web Developer</span><p class="description"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since </p></div><div class="single_testimonial"><div class="pic"><img src="frontend/images/testimonial/5.jpg" alt=""></div><h5 class="testimonial-title">Masuk Mia</h5><span class="test_designation">Web Developer</span><p class="description"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since </p></div><div class="single_testimonial"><div class="pic"><img src="frontend/images/testimonial/6.jpg" alt=""></div><h5 class="testimonial-title">Masuk Mia</h5><span class="test_designation">Web Developer</span><p class="description"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since </p></div></div></div></div></div>',
        1
      ),
      k = [x];
    function M(e, i, s, a, l, c) {
      return Object(t["r"])(), Object(t["e"])("section", w, k);
    }
    var L = { name: "Testimonial" };
    const q = v()(L, [["render", M]]);
    var P = q,
      S = { id: "about", class: "section_padding" },
      I = Object(t["g"])(
        '<div class="container"><div class="single_about"><div class="row"><div class="col-md-5 col-sm-5 col-xs-12"><div class="about_image"><img src="frontend/images/about.png" alt="about-image"></div></div><div class="col-md-7 col-sm-7 col-xs-12"><div class="about_content_area"><h4>About Me</h4><h3>I&#39;m Professional web Developer having 10 Years Of Experience.</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus est, finibus ut congue sed, faucibus ut dui. Sed congue nisl dolor, id dapibus leo elementum posuere. Ut aliquam metus quis laoreet elementum. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Aliquam porta faucibus arcu, et consequat velit vestibulum in. Donec quis tellus ut urna volutpat posuere quis consectetur quam.</p><div class="about_details"><div class="row"><div class="col-md-6"><div class="ct_about"><span><i class="fa fa-map-marker"></i> Location </span> : shamimabad,sylhet,Bangladesh. </div></div><div class="col-md-6"><div class="ct_about"><span><i class="fa fa-calendar"></i> age </span> : 23 </div></div><div class="col-md-6"><div class="ct_about"><span><i class="fa fa-phone"></i> Phone </span> : +880 172056..... </div></div><div class="col-md-6"><div class="ct_about"><span><i class="fa fa-envelope"></i> Email </span> : dev.masuk@gmail.com </div></div></div></div><a href="#" class="btn btn-default main_btn">Download Resume</a></div></div></div></div></div>',
        1
      ),
      C = [I];
    function W(e, i, s, a, l, c) {
      return Object(t["r"])(), Object(t["e"])("section", S, C);
    }
    var D = { name: "About" };
    const E = v()(D, [["render", W]]);
    var A = E,
      B = { id: "service", class: "gray_bg section_padding pb_70" },
      R = { class: "container" },
      T = Object(t["f"])(
        "div",
        { class: "col-md-12 col-sm-12-col-xs-12" },
        [
          Object(t["f"])("div", { class: "section_heading text-center" }, [
            Object(t["f"])("strong", null, "What We Do"),
            Object(t["f"])("h2", null, "My Services"),
            Object(t["f"])(
              "p",
              null,
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus est, finibus ut congue sed, faucibus ut dui. Sed congue nisl dolor, id dapibus leo elementum posuere."
            ),
            Object(t["f"])("div", { class: "sm_border" }),
          ]),
        ],
        -1
      ),
      z = { class: "row text-center" },
      H = { class: "col-md-4 col-sm-6 col-xs-12" },
      N = { class: "single-service" },
      F = Object(t["f"])("i", { class: "icon-laptop" }, null, -1),
      G = Object(t["f"])("h4", null, "Web Development", -1),
      U = Object(t["h"])(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortor, et congue felis laoreet ac"
      ),
      Y = { class: "col-md-4 col-sm-6 col-xs-12" },
      J = { class: "single-service" },
      K = Object(t["f"])("i", { class: "icon-bargraph" }, null, -1),
      Q = Object(t["f"])("h4", null, "Digital Merketing", -1),
      V = Object(t["h"])(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortor, et congue felis laoreet ac"
      ),
      X = { class: "col-md-4 col-sm-6 col-xs-12" },
      Z = { class: "single-service" },
      $ = Object(t["f"])("i", { class: "icon-piechart" }, null, -1),
      ee = Object(t["f"])("h4", null, "Branding & identity", -1),
      ie = Object(t["h"])(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortor, et congue felis laoreet ac"
      ),
      se = { class: "col-md-4 col-sm-6 col-xs-12" },
      te = { class: "single-service" },
      ae = Object(t["f"])("i", { class: "icon-layers" }, null, -1),
      le = Object(t["f"])("h4", null, "Customizability", -1),
      ce = Object(t["h"])(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortor, et congue felis laoreet ac"
      ),
      oe = { class: "col-md-4 col-sm-6 col-xs-12" },
      ne = { class: "single-service" },
      re = Object(t["f"])("i", { class: "icon-mobile" }, null, -1),
      de = Object(t["f"])("h4", null, "Responsive", -1),
      ue = Object(t["h"])(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortor, et congue felis laoreet ac"
      ),
      me = { class: "col-md-4 col-sm-6 col-xs-12" },
      ve = { class: "single-service" },
      pe = Object(t["f"])("i", { class: "icon-camera" }, null, -1),
      be = Object(t["f"])("h4", null, "Photography", -1),
      fe = Object(t["h"])(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortor, et congue felis laoreet ac"
      );
    function ge(e, i, s, a, l, c) {
      var o = Object(t["v"])("P");
      return (
        Object(t["r"])(),
        Object(t["e"])("section", B, [
          Object(t["f"])("div", R, [
            T,
            Object(t["f"])("div", z, [
              Object(t["f"])("div", H, [
                Object(t["f"])("div", N, [
                  F,
                  G,
                  Object(t["i"])(o, null, {
                    default: Object(t["z"])(function () {
                      return [U];
                    }),
                    _: 1,
                  }),
                ]),
              ]),
              Object(t["f"])("div", Y, [
                Object(t["f"])("div", J, [
                  K,
                  Q,
                  Object(t["i"])(o, null, {
                    default: Object(t["z"])(function () {
                      return [V];
                    }),
                    _: 1,
                  }),
                ]),
              ]),
              Object(t["f"])("div", X, [
                Object(t["f"])("div", Z, [
                  $,
                  ee,
                  Object(t["i"])(o, null, {
                    default: Object(t["z"])(function () {
                      return [ie];
                    }),
                    _: 1,
                  }),
                ]),
              ]),
              Object(t["f"])("div", se, [
                Object(t["f"])("div", te, [
                  ae,
                  le,
                  Object(t["i"])(o, null, {
                    default: Object(t["z"])(function () {
                      return [ce];
                    }),
                    _: 1,
                  }),
                ]),
              ]),
              Object(t["f"])("div", oe, [
                Object(t["f"])("div", ne, [
                  re,
                  de,
                  Object(t["i"])(o, null, {
                    default: Object(t["z"])(function () {
                      return [ue];
                    }),
                    _: 1,
                  }),
                ]),
              ]),
              Object(t["f"])("div", me, [
                Object(t["f"])("div", ve, [
                  pe,
                  be,
                  Object(t["i"])(o, null, {
                    default: Object(t["z"])(function () {
                      return [fe];
                    }),
                    _: 1,
                  }),
                ]),
              ]),
            ]),
          ]),
        ])
      );
    }
    var he = { name: "Service" };
    const je = v()(he, [["render", ge]]);
    var Oe = je,
      _e = { id: "resume", class: "section_padding pb_70" },
      ye = Object(t["g"])(
        '<div class="container"><div class="row"><div class="col-md-6 col-sm-12 col-xs-12"><div class="education-container wow fadeInUp"><ul class="edu-list"><li><strong>2000 - 2005</strong><h5>Computer science</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat, a nemo cumque optio asperiores tempora delectus cupiditate</p></li><li><strong>2006 - 2009</strong><h5>Computer science</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat, a nemo cumque optio asperiores tempora delectus cupiditate</p></li><li><strong>2010 - 2013</strong><h5>Computer science</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat, a nemo cumque optio asperiores tempora delectus cupiditate</p></li></ul></div></div><div class="col-md-6 col-sm-12 col-xs-12"><div class="education-container wow fadeInUp"><ul class="edu-list experience"><li><strong>2014 - 2015</strong><h5>Google company, Melbourne </h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat, a nemo cumque optio asperiores tempora delectus cupiditate</p></li><li><strong>2016 - 2017</strong><h5>Google company, Bangladesh </h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat, a nemo cumque optio asperiores tempora delectus cupiditate</p></li><li><strong>2018 - 2018</strong><h5>Google company, Bangladesh </h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat, a nemo cumque optio asperiores tempora delectus cupiditate</p></li></ul></div></div></div></div>',
        1
      ),
      we = [ye];
    function xe(e, i, s, a, l, c) {
      return Object(t["r"])(), Object(t["e"])("section", _e, we);
    }
    var ke = { name: "Resume" };
    const Me = v()(ke, [["render", xe]]);
    var Le = Me,
      qe = { id: "blog", class: "section_padding pb_70" },
      Pe = Object(t["g"])(
        '<div class="container"><div class="row"><div class="col-md-12 col-sm-12-col-xs-12"><div class="section_heading text-center"><strong>Blog</strong><h2>Latest Blogs</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus est, finibus ut congue sed, faucibus ut dui. Sed congue nisl dolor, id dapibus leo elementum posuere.</p><div class="sm_border"></div></div></div><div class="blog_slide_area"><div class="col-md-4 col-sm-6 col-xs-12"><div class="single_blog"><div class="blog-thumb"><div class="blog-image"><a href="#0"><img src="frontend/images/blog/blog1.jpg" class="img-responsive" alt=""></a></div><div class="blog-info"><small><i class="fa fa-clock-o"></i>March 24 2022</small><span>| lifestyle</span><a href="blog-detail.html"><h4>Beautiful Working Show.</h4></a><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat</p><a href="#0" class="btn btn-default blog_btn main_btn">Read More</a></div></div></div></div><div class="col-md-4 col-sm-6 col-xs-12"><div class="single_blog"><div class="blog-thumb"><div class="blog-image"><a href="#0"><img src="frontend/images/blog/blog2.jpg" class="img-responsive" alt=""></a></div><div class="blog-info"><small><i class="fa fa-clock-o"></i>March 24,2022</small><span>| lifestyle</span><a href="blog-detail.html"><h4>Top Branding Surprise</h4></a><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat</p><a href="#0" class="btn btn-default blog_btn main_btn">Read More</a></div></div></div></div><div class="col-md-4 col-sm-6 col-xs-12"><div class="single_blog"><div class="blog-thumb"><div class="blog-image"><a href="#0"><img src="frontend/images/blog/blog3.jpg" class="img-responsive" alt=""></a></div><div class="blog-info"><small><i class="fa fa-clock-o"></i>March 24,2022</small><span>| lifestyle</span><a href="blog-detail.html"><h4>Our Seo Marketing</h4></a><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet incidunt quidem illum repellat</p><a href="#0" class="btn btn-default blog_btn main_btn">Read More</a></div></div></div></div></div></div></div>',
        1
      ),
      Se = [Pe];
    function Ie(e, i, s, a, l, c) {
      return Object(t["r"])(), Object(t["e"])("section", qe, Se);
    }
    var Ce = { name: "Blog" };
    const We = v()(Ce, [["render", Ie]]);
    var De = We,
      Ee = { id: "contact", class: "section_padding" },
      Ae = Object(t["f"])(
        "div",
        { class: "container" },
        [
          Object(t["f"])("div", { class: "col-md-12 col-sm-12-col-xs-12" }, [
            Object(t["f"])("div", { class: "section_heading text-center" }, [
              Object(t["f"])("strong", null, "Touch"),
              Object(t["f"])("h2", null, "Get In Toch"),
              Object(t["f"])(
                "p",
                null,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus est, finibus ut congue sed, faucibus ut dui. Sed congue nisl dolor, id dapibus leo elementum posuere."
              ),
              Object(t["f"])("div", { class: "sm_border" }),
            ]),
          ]),
          Object(t["f"])("div", { class: "row" }, [
            Object(t["f"])("div", { class: "col-md-7 col-sm-12" }, [
              Object(t["f"])(
                "form",
                {
                  id: "contact-form",
                  method: "post",
                  enctype: "multipart/form-data",
                },
                [
                  Object(t["f"])("div", { class: "row" }, [
                    Object(t["f"])(
                      "div",
                      { class: "input_padding text-center" },
                      [
                        Object(t["f"])(
                          "div",
                          { class: "form-group col-sm-12" },
                          [
                            Object(t["f"])("input", {
                              type: "text",
                              name: "name",
                              class: "form-control",
                              id: "first-name",
                              placeholder: "Name *",
                              required: "required",
                            }),
                          ]
                        ),
                        Object(t["f"])(
                          "div",
                          { class: "form-group col-sm-6" },
                          [
                            Object(t["f"])("input", {
                              type: "email",
                              name: "email",
                              class: "form-control",
                              id: "email",
                              placeholder: "Email *",
                              required: "required",
                            }),
                          ]
                        ),
                        Object(t["f"])(
                          "div",
                          { class: "form-group col-sm-6" },
                          [
                            Object(t["f"])("input", {
                              type: "text",
                              name: "subject",
                              class: "form-control",
                              id: "subject",
                              placeholder: "Subject *",
                              required: "required",
                            }),
                          ]
                        ),
                        Object(t["f"])(
                          "div",
                          { class: "form-group col-sm-12 mab-none" },
                          [
                            Object(t["f"])("textarea", {
                              rows: "8",
                              name: "message",
                              class: "form-control",
                              id: "description",
                              placeholder: "Your Message Here ...",
                              required: "required",
                            }),
                          ]
                        ),
                        Object(t["f"])(
                          "div",
                          { class: "form-group mb0 col-sm-12" },
                          [
                            Object(t["f"])("div", { class: "actions" }, [
                              Object(t["f"])(
                                "button",
                                {
                                  type: "submit",
                                  value: "Send message",
                                  name: "submit",
                                  id: "submitButton",
                                  class: "btn btn-lg main_btn btn_shadow",
                                  title: "Submit Your Message!",
                                },
                                "Send Message"
                              ),
                            ]),
                          ]
                        ),
                      ]
                    ),
                  ]),
                ]
              ),
            ]),
            Object(t["f"])("div", { class: "col-md-5 col-sm-12" }, [
              Object(t["f"])("div", { class: "contact_widget_area" }, [
                Object(t["f"])("div", { class: "contact_info" }, [
                  Object(t["f"])("i", { class: "fa fa-home" }),
                  Object(t["f"])("div", { class: "contact_info_text" }, [
                    Object(t["f"])("h5", null, "Home"),
                    Object(t["f"])("p", null, " shamimabad,Bangladesh "),
                  ]),
                ]),
                Object(t["f"])("div", { class: "contact_info" }, [
                  Object(t["f"])("i", { class: "fa fa-phone" }),
                  Object(t["f"])("div", { class: "contact_info_text" }, [
                    Object(t["f"])("h5", null, "Phone"),
                    Object(t["f"])("p", null, "017205650..."),
                    Object(t["f"])("p", null, "+880 172056..."),
                  ]),
                ]),
                Object(t["f"])("div", { class: "contact_info" }, [
                  Object(t["f"])("i", { class: "fa fa-envelope" }),
                  Object(t["f"])("div", { class: "contact_info_text" }, [
                    Object(t["f"])("h5", null, "Email"),
                    Object(t["f"])("p", null, "dev.masuk@gmail.com"),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ],
        -1
      ),
      Be = [Ae];
    function Re(e, i, s, a, l, c) {
      return Object(t["r"])(), Object(t["e"])("section", Ee, Be);
    }
    var Te = { name: "Contact" };
    const ze = v()(Te, [["render", Re]]);
    var He = ze,
      Ne = {
        id: "home",
        class: "main_banner banner_bg ripple-effect jquery-ripples",
      },
      Fe = Object(t["g"])(
        '<div class="container"><div class="row"><div class="col-md-7 col-sm-12 col-xs-12"><div class="banner_content"><strong>Hello !</strong><h1 class="cd-headline clip"><span class="fw_600">I Am</span><span class="cd-words-wrapper"><b class="is-visible fw_300">Masuk Mia</b><b class="fw_300">Web Designer</b><b class="fw_300">Web Developer</b><b class="fw_300">Photographer</b></span></h1><p>I&#39;m a Web Developer with extensive experience for over 5 years. My expertise is to create and Websites design, graphic design, business card and many more...</p><ul class="banner_social_link"><li><a href="#00"><i class="fa fa-facebook"></i></a></li><li><a href="#0"><i class="fa fa-twitter"></i></a></li><li><a href="#0"><i class="fa fa-linkedin"></i></a></li><li><a href="#0"><i class="fa fa-instagram"></i></a></li><li><a href="#0"><i class="fa fa-behance"></i></a></li></ul></div></div><div class="col-md-5 col-sm-12 col-xs-12"></div></div></div>',
        1
      ),
      Ge = [Fe];
    function Ue(e, i, s, a, l, c) {
      return Object(t["r"])(), Object(t["e"])("section", Ne, Ge);
    }
    var Ye = { name: "Banner" };
    const Je = v()(Ye, [["render", Ue]]);
    var Ke = Je,
      Qe = { class: "cta_section section_padding" },
      Ve = Object(t["g"])(
        '<div class="container"><div class="row"><div class="col-lg-12 text-center"><div class="cta_content"><h3>I Am Available For Freelancer !</h3><a href="#0" class="btn btn-default main_btn"><span>Hire Me</span></a></div></div></div></div>',
        1
      ),
      Xe = [Ve];
    function Ze(e, i, s, a, l, c) {
      return Object(t["r"])(), Object(t["e"])("section", Qe, Xe);
    }
    var $e = { name: "CTA" };
    const ei = v()($e, [["render", Ze]]);
    var ii = ei,
      si = { id: "counter_area", class: "section_padding rs_pb_70" },
      ti = Object(t["g"])(
        '<div class="container"><div class="row text-center"><div class="col-md-3 col-sm-6 col-xs-12"><div class="single_counter"><div class="icon"><i class="icon-happy"></i></div><span class="counter">751</span><h5>Happy Clients</h5></div></div><div class="col-md-3 col-sm-6 col-xs-12"><div class="single_counter border_left"><div class="icon"><i class="icon-briefcase"></i></div><span class="counter">420</span><h5>Successul Projects</h5></div></div><div class="col-md-3 col-sm-6 col-xs-12"><div class="single_counter border_left res_border_none"><div class="icon"><i class="icon-trophy"></i></div><span class="counter">52</span><h5>Awards Received</h5></div></div><div class="col-md-3 col-sm-6 col-xs-12"><div class="single_counter border_left"><div class="icon"><i class="icon-profile-male"></i></div><span class="counter">254</span><h5>Customer</h5></div></div></div></div>',
        1
      ),
      ai = [ti];
    function li(e, i, s, a, l, c) {
      return Object(t["r"])(), Object(t["e"])("section", si, ai);
    }
    var ci = { name: "Counter" };
    const oi = v()(ci, [["render", li]]);
    var ni = oi,
      ri = {
        components: {
          Navbar: b,
          Portfolio: y,
          Testimonial: P,
          About: A,
          Service: Oe,
          Resume: Le,
          Blog: De,
          Contact: He,
          Banner: Ke,
          CTA: ii,
          Counter: ni,
        },
        name: "Master",
      };
    const di = v()(ri, [["render", c]]);
    var ui = di,
      mi = { components: { Master: ui } };
    const vi = v()(mi, [["render", a]]);
    var pi = vi,
      bi = s("9483");
    Object(bi["a"])("".concat("/", "service-worker.js"), {
      ready: function () {
        console.log(
          "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
        );
      },
      registered: function () {
        console.log("Service worker has been registered.");
      },
      cached: function () {
        console.log("Content has been cached for offline use.");
      },
      updatefound: function () {
        console.log("New content is downloading.");
      },
      updated: function () {
        console.log("New content is available; please refresh.");
      },
      offline: function () {
        console.log(
          "No internet connection found. App is running in offline mode."
        );
      },
      error: function (e) {
        console.error("Error during service worker registration:", e);
      },
    });
    s("d3b7"), s("3ca3"), s("ddb0");
    var fi = s("6c02"),
      gi = [
        { path: "/", name: "Master", component: ui },
        {
          path: "/about",
          name: "About",
          component: function () {
            return s.e("about").then(s.bind(null, "f820"));
          },
        },
      ],
      hi = Object(fi["a"])({ history: Object(fi["b"])("/"), routes: gi }),
      ji = hi,
      Oi = s("5502"),
      _i = Object(Oi["a"])({
        state: {},
        mutations: {},
        actions: {},
        modules: {},
      });
    Object(t["c"])(pi).use(_i).use(ji).mount("#app");
  },
});
//# sourceMappingURL=app.53864d20.js.map
