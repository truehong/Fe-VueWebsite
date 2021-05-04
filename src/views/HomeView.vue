<template>
  <div>
    <!-- home -->
    <div id="home">
     <!--  <img src= "@/imgs/main.png" alt="IMG" class="home__avatar" /> -->
      <h1 class="home__title">
        Hello, <br/>
        Welcome to Developer Page
      </h1>
      <h2 id="home__description">A software Engineer currently residing in Soeul, South of Korea</h2>
    </div>

    <!-- about -->
    <section id="about" class="section">
      <h1>About Vue.js</h1>
      <p>
        Vue.js is an open-source progressive JavaScript framework used to create user interfaces for web applications.<br> It is designed to facilitate the introduction of Vue.js to web application projects <br> using different JavaScript libraries, as it is designed to be gradually adopted by Vue.js. <br>Meanwhile, Vue.js is available to build high-performance single-page applications (SPA).
      </p>
      <div class="about__majors">
        <div class="major">
          <div class="major__icon">
            <i class="fab fa-node-js"></i>
          </div>
          <h2 class="major__title">JavaScript</h2>
          <div class="major__desciption">JavaScript framework used to create user interfaces for web</div>
        </div>
        <div class="major">
          <div class="major__icon">
            <i class="fab fa-vuejs"></i>
          </div>
          <h2 class="major__title">Front-end</h2>
          <div class="major__desciption">JavaScript framework used to create user interfaces for web</div>
        </div>
        <div class="major">
          <div class="major__icon">
            <i class="fab fa-vuejs"></i>
          </div>
          <h2 class="major__title">Front-end</h2>
          <div class="major__desciption">JavaScript framework used to create user interfaces for web</div>
        </div>
      </div>
    </section>
   
    <!-- testmonials -->
    <section id="testimonials" class="section">
      <h1> See what they say about dev </h1>
      <h2 style="color:#4d4d4d"> "I think .. "</h2>
      <div class="testimonials">
        <img src="@/imgs/evan.jpg" alt="" class="testimonial__avatar" />
        <div class="testimonial__speech-bubble">
          <p>
            There is no single true framework that makes everyone happy.<br> It's even more important to keep evolving so that the people who actually use it enjoy your framework.<br> Focus on what you believe is the most valuable in your framework. <br>And rather than worrying about comparing yourself to others, <br>be sure you're doing something great
          </p>
          <p>
            <a href="" >Vue.js - Evan You </a>
          </p>
        </div>
      </div>
      <div class="testimonials">
        <img src="@/imgs/guido.jpg" alt="" class="testimonial__avatar" />
        <div class="testimonial__speech-bubble">
          <p>
            "Life is too short, You need Python."
          </p>
          <p>
            <a href=""> Python / guido van rossum </a>
          </p>
        </div>
      </div>
    </section>
    <!-- contact -->
    <section id="contact">
    <div style="padding:20px">
      <h2 class="contact__title">Copyright 2021</h2>
      <h1 class="contact__email">hhhhhongse@gmail.com</h1>
      <!-- <div class="contact__links">
        <a href="" target="__blank">
          <l class="fab fa-github"></l>
        </a>
        <a href="" target="__blank">
          <l class="fab fa-email"></l>
        </a>
      </div> -->
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
  @import '../style.css';
</style>
