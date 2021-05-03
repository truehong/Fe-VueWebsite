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
      <button class="home__contact">Contact Me</button>
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
      <h1> testmonials </h1>
      <h3>See what they say about Vue</h3>
      <div class="testimonials">
        <img src="@/imgs/abata.jpg" alt="" class="testimonial__avatar" />
        <div class="testimonial__speech-bubble">
          <p>
            Vue.js is an open-source progressive JavaScript framework used to create user interfaces for web applications. It is designed to
            facilitate the introduction of Vue.js to web application projects using different JavaScript libraries, as it is designed to be gradually
            adopted by Vue.js
          </p>
          <p>
            <a href=""> test/test </a>
          </p>
        </div>
      </div>
      <div class="testimonials">
        <img src="@/imgs/abata.jpg" alt="" class="testimonial__avatar" />
        <div class="testimonial__speech-bubble">
          <p>
            Vue.js is an open-source progressive JavaScript framework used to create user interfaces for web applications. It is designed to
            facilitate the introduction of Vue.js to web application projects using different JavaScript libraries, as it is designed to be gradually
            adopted by Vue.js
          </p>
          <p>
            <a href=""> test/test </a>
          </p>
        </div>
      </div>
    </section>
    <!-- contact -->
    <section id="contact">
    <div style="padding:20px">
      <h2 class="contact__title">Let's talk</h2>
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
