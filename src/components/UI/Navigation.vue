<template>
  <header>
      <div class="container">
        <nav class="nav-wrapper">
          <div class="nav-items">
            <router-link to="/"><img src="@/assets/img/header/logo.svg" alt="" /></router-link>

            <div class="second-items">
              <router-link to="/about">О компании</router-link>
              <router-link to="/services" class="middle-item">Услуги <img src="@/assets/img/header/arrow-l.svg" alt=""/></router-link>
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

}
</script>

<style>
nav a.router-link-exact-active {
  color: rgba(243, 207, 85, 1);
}
</style>