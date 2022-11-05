<template>
  <header class="fix-nav">
    <div class="container">
      <nav class="nav-wrapper">
        <div class="nav-items">
          <div id="menu">
            <div id="menu-bar" @click="menuOnClick" :class="{ change : mobileMenu }">
              <div id="bar1" class="bar"></div>
              <div id="bar2" class="bar"></div>
              <div id="bar3" class="bar"></div>
            </div>
            <nav class="nav" id="nav" :class="{ change : mobileMenu }" @click="menuOnClick">
              <ul>
                <li>
                  <router-link to="/">Гланая</router-link>
                </li>
                <li>
                  <router-link to="/about">О компании</router-link>
                </li>
                <li>
                  <router-link to="/services">Услуги <img src="@/assets/img/header/arrow-l.svg" alt="" />
                  </router-link>
                </li>
                <li>
                  <router-link to="/contacts">Контакты</router-link>
                </li>
                <li>8 800 666-33-22</li>
              </ul>
            </nav>
          </div>

          <div class="menu-bg" id="menu-bg" :class="{ 'change-bg' : mobileMenu }"></div>
          <div class="null"></div>
          <router-link to="/"><img src="@/assets/img/header/logo.svg" alt="" /></router-link>

          <div class="second-items">
            <router-link to="/about">О компании</router-link>
            <router-link to="/services" class="middle-item">Услуги <img src="@/assets/img/header/arrow-l.svg" alt="" />
            </router-link>
            <router-link to="/contacts">Контакты</router-link>
          </div>

          <div class="third-items">
            <span class="tel">8 800 666-33-22</span>
          </div>

        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileMenu: false
    }
  },
  methods: {
    menuOnClick(){
      this.mobileMenu = !this.mobileMenu
      document.querySelector('body').classList.toggle("scroll-hidden")
    }
  }
}
</script>

<style>
nav a.router-link-exact-active {
  color: rgba(243, 207, 85, 1);
}
</style>