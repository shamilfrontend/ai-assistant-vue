<template>
  <div class="chat-landing-page">
    <div class="landing-page-header">
      <header id="home">
        <div class="custom-container">
          <div class="row">
            <div class="col-12">
              <div class="landing-header">
                <div class="main-menu">
                  <nav class="navbar navbar-expand-sm navbar-light">
                    <a
                      class="navbar-brand"
                      href="#"
                    >
                      <img
                        class="img-fluid"
                        src="/images/logo/logo-white.png"
                        alt="logo"
                      >
                    </a>
                    <button
                      class="navbar-toggler d-xl-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNav"
                      aria-controls="navbarNav"
                      aria-expanded="true"
                      aria-label="Toggle navigation"
                    >
                      <span class="navbar-toggler-icon"/>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                        <li class="nav-item active">
                          <a class="nav-link" href="messenger.html">
                            Home<span class="sr-only">(current)</span>
                          </a>
                        </li>
                      </ul>
                      <div class="btn_purchase">
                        <router-link
                          to="/chat"
                          class="btn"
                        >
                          Chat
                        </router-link>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>

    <ul class="page-decore">
      <li class="top">
        <img
          class="img-fluid inner2"
          src="/images/landing/footer/2.png"
          alt="footer-back-img"
        >
      </li>
      <li class="bottom">
        <img
          class="img-fluid inner2"
          src="/images/landing/footer/2.png"
          alt="footer-back-img"
        >
      </li>
    </ul>

    <section class="landing_page_slider">
      <div class="custom-container">
        <div class="row">
          <div class="col-12">
            <div class="landing_page_slider-main text-center">
              <div class="landing_page_slider-contain">
                <h1>Easy To Use Our Chat App</h1>
                <h4>
                  <span>Desktop App</span>– Easy to use our chat app, Attractive and clean design, with many<br>
                  Features:- Dark & light, Recent Chat And many more.......
                </h4>
              </div>
            </div>
          </div>
          <div class="animated-img-1">
            <img
              class="img-fluid slicing-img-4"
              src="/images/landing-page/slicing/vector.png"
              alt="img"
            >
            <img
              class="img-fluid slicing-img-5"
              src="/images/landing-page/slicing/vector1.png"
              alt="img"
            >
            <img
              class="img-fluid slicing-img-6"
              src="/images/landing-page/slicing/vector2.png"
              alt="img"
            >
            <img
              class="img-fluid slicing-img-7"
              src="/images/landing-page/slicing/vector2.png"
              alt="img"
            >
          </div>
          <div class="animated-img-2">
            <div>
              <img
                class="img-fluid slicing-img-1"
                src="/images/landing-page/slicing/11.png"
                alt="img"
              >
              <img
                class="img-fluid slicing-img-2"
                src="/images/landing-page/slicing/21.png"
                alt="img"
              >
              <img
                class="img-fluid slicing-img-3"
                src="/images/landing-page/slicing/22.png"
                alt="img"
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="collaboration-main section-py-space">
      <div class="custom-container">
        <div class="row">
          <div class="col-12">
            <div class="content-title">
              <h2>4 Workable Apps</h2>
              <h1>Put collaboration at your fingertips</h1>
              <h5>Chitchat comes with Many Workable App like Todo List, Files, Notes and Reminder</h5>
            </div>
            <img class="img-fluid chit-chat5" src="/images/landing/header/1.png" alt="inner1">
          </div>
        </div>
      </div>
      <div class="custom-container">
        <div class="row">
          <div class="col-12">
            <div class="collaboration-content">
              <ul class="collab-tab nav nav-pills">
                <li class="nav-item"><a class="nav-link active" data-bs-toggle="pill" href="#tab1">
                  <div class="tab-main">
                    <div class="tab-img"><i class="fa fa-list"></i></div>
                    <div class="tab-content">
                      <h3>To-do</h3>
                      <p>Conversation</p>
                    </div>
                  </div>
                </a></li>
                <li class="nav-item"><a class="nav-link" data-bs-toggle="pill" href="#tab2">
                  <div class="tab-main">
                    <div class="tab-img"><i class="fa fa-file"></i></div>
                    <div class="tab-content">
                      <h3>Files</h3>
                      <p>Share and etc</p>
                    </div>
                  </div>
                </a></li>
                <li class="nav-item"><a class="nav-link" data-bs-toggle="pill" href="#tab3">
                  <div class="tab-main">
                    <div class="tab-img"><i class="fa fa-book"></i></div>
                    <div class="tab-content">
                      <h3>Note</h3>
                      <p>Create Note</p>
                    </div>
                  </div>
                </a></li>
                <li class="nav-item"><a class="nav-link" data-bs-toggle="pill" href="#tab4">
                  <div class="tab-main">
                    <div class="tab-img"><i class="fa fa-clock-o"></i></div>
                    <div class="tab-content">
                      <h3>Reminder</h3>
                      <p>Set Reminder</p>
                    </div>
                  </div>
                </a></li>
              </ul>
            </div>
            <div class="tab-detail">
              <div class="tab-content">
                <div class="tab-pane container active" id="tab1"><a href="messenger.html" target="_blank">
                  <div class="workable-app-img">
                    <div class="doted">
                      <ul>
                        <li><i class="fa fa-circle circle-1" aria-hidden="true"></i></li>
                        <li><i class="fa fa-circle circle-2" aria-hidden="true"></i></li>
                        <li><i class="fa fa-circle circle-3" aria-hidden="true"></i></li>
                      </ul>
                    </div>
                    <div class="workable-title">
                      <div>
                        <h1>To-Do</h1>
                      </div>
                    </div>
                    <img class="img-fluid img-1" src="/images/landing-page/workable-app/01.jpg" alt=""><img
                    class="img-fluid img-2" src="/images/landing-page/workable-app/05.png" alt="">
                  </div>
                </a></div>
                <div class="tab-pane container fade" id="tab2"><a href="messenger.html" target="_blank">
                  <div class="workable-app-img">
                    <div class="doted">
                      <ul>
                        <li><i class="fa fa-circle circle-1" aria-hidden="true"></i></li>
                        <li><i class="fa fa-circle circle-2" aria-hidden="true"></i></li>
                        <li><i class="fa fa-circle circle-3" aria-hidden="true"></i></li>
                      </ul>
                    </div>
                    <div class="workable-title">
                      <div>
                        <h1>Files</h1>
                      </div>
                    </div>
                    <img class="img-fluid img-1" src="/images/landing-page/workable-app/02.jpg" alt=""><img
                    class="img-fluid img-2" src="/images/landing-page/workable-app/05.png" alt="">
                  </div>
                </a></div>
                <div class="tab-pane container fade" id="tab3"><a href="messenger.html" target="_blank">
                  <div class="workable-app-img">
                    <div class="doted">
                      <ul>
                        <li><i class="fa fa-circle circle-1" aria-hidden="true"></i></li>
                        <li><i class="fa fa-circle circle-2" aria-hidden="true"></i></li>
                        <li><i class="fa fa-circle circle-3" aria-hidden="true"></i></li>
                      </ul>
                    </div>
                    <div class="workable-title">
                      <div>
                        <h1>Note</h1>
                      </div>
                    </div>
                    <img class="img-fluid img-1" src="/images/landing-page/workable-app/03.jpg" alt=""><img
                    class="img-fluid img-2" src="/images/landing-page/workable-app/05.png" alt="">
                  </div>
                </a></div>
                <div class="tab-pane container fade" id="tab4"><a href="messenger.html" target="_blank">
                  <div class="workable-app-img">
                    <div class="dot-danger">
                      <ul>
                        <li><i class="fa fa-circle circle-1" aria-hidden="true"></i></li>
                        <li><i class="fa fa-circle circle-2" aria-hidden="true"></i></li>
                        <li><i class="fa fa-circle circle-3" aria-hidden="true"></i></li>
                      </ul>
                    </div>
                    <div class="workable-title">
                      <div>
                        <h1>Reminder</h1>
                      </div>
                    </div>
                    <img class="img-fluid img-1" src="/images/landing-page/workable-app/04.jpg" alt=""><img
                    class="img-fluid img-2" src="/images/landing-page/workable-app/05.png" alt="">
                  </div>
                </a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="rate-us section-py-space">
      <div class="custom-container">
        <div class="row">
          <div class="col-12 mx-auto text-center">
            <div class="rate_us-section"><img class="img-fluid" src="/images/logo/landing-logo.png" alt="logo">
            </div>
          </div>

          <div class="col-12">
            <div class="rate_us-section">
              <h2>IF YOU LIKE OUR PRODUCTS PLEASE RATE US</h2>
            </div>
          </div>

          <div class="col-12">
            <div class="rate_us-section">
              <ul class="rate-section">
                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                <li><i class="fa fa-star" aria-hidden="true"></i></li>
              </ul>
            </div>
          </div>

          <div class="col-12">
            <div class="rate_us-section">
              <a
                class="btn rate_btn"
                href="https://themeforest.net/downloads"
                target="_blank"
              >
                Rate us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="container footer-main">
        <div class="row footer-block">
          <div class="col-lg-3 col-md-6">
            <div class="footer-title footer-mobile-title">
              <h3>About</h3>
            </div>
            <div class="about-payment footer-contant">
              <div class="logo">
                <a href="messenger.html">
                  <img src="/images/logo/landing-logo.png" alt="logo"/>
                </a>
              </div>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece Lorem fugit
                on looked ipsum.</p>
              <ul class="social-group">
                <li>
                  <a class="icon-btn btn-google btn-sm" href="https://www.facebook.com/" target="_blank">
                    <i class="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a class="icon-btn btn-twiter btn-sm" href="https://twitter.com/" target="_blank">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a class="icon-btn btn-linkedin btn-sm" href="https://in.linkedin.com/" target="_blank">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    class="icon-btn btn-instagram btn-sm"
                    href="https://www.instagram.com/"
                    target="_blank"
                  >
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-2 col-md-3">
            <div class="links">
              <div class="footer-title">
                <h3>Useful Links</h3>
              </div>
              <div class="footer-contant">
                <ul>
                  <li><a href="messenger.html">Home</a></li>
                  <li><a href="about.html">About us</a></li>
                  <li><a href="about.html">Services</a></li>
                  <li><a href="blog-page(right-sidebar).html">Blog</a></li>
                  <li><a href="login.html">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-3">
            <div class="links">
              <div class="footer-title">
                <h3>Chitchat Help</h3>
              </div>
              <div class="footer-contant">
                <ul>
                  <li><a href="about.html">Privacy Policy</a></li>
                  <li><a href="faq.html">FAQ</a></li>
                  <li><a href="about.html">Support</a></li>
                  <li><a href="login.html">Contact</a></li>
                  <li><a href="about.html">Tearm</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-4">
            <div class="links">
              <div class="footer-title">
                <h3>Download For</h3>
              </div>
              <div class="footer-contant">
                <ul>
                  <li><a href="#">Windows</a></li>
                  <li><a href="#">Linux</a></li>
                  <li><a href="#">IOS</a></li>
                  <li><a href="#">Android</a></li>
                  <li><a href="#">Mac</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div class="downlaod">
              <div>
                <div class="footer-title">
                  <h3>Download Apps</h3>
                </div>
                <div class="footer-contant">
                  <div class="footer-btn"><a class="btn active" href="#"><i class="fa fa-apple"></i>
                    <div>
                      <h6>Available on the</h6>
                      <h4>App store</h4>
                    </div>
                  </a><a class="btn" href="#"><i class="fa fa-play"></i>
                    <div>
                      <h6>Available on the</h6>
                      <h4>Google play</h4>
                    </div>
                  </a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-back-block">
        <img
          class="img-fluid inner1"
          src="/images/landing/footer/2.png"
          alt="footer-back-img"
        />
        <img
          class="img-fluid inner2"
          src="/images/landing/footer/2.png"
          alt="footer-back-img"
        />
      </div>
      <div class="container copyright-footer">
        <div class="row copyright">
          <div class="col-md-6 col-sm-12">
            <p>© 2023 Chitchat. All Rights Reserved</p>
          </div>
          <div class="col-md-6 col-sm-12 links_horizontal">
            <p class="text-end">Made with <span>&hearts; </span>By Theme Pixelstrap</p>
          </div>
        </div>
      </div>
    </footer>

    <div class="tap-top">
      <div>
        <i class="fa fa-angle-double-up"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
