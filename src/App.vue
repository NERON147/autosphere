<template>
  <div id="app">
    <Navigation></Navigation>
    <transition name="fade" mode="out-in" >
      <router-view></router-view>
    </transition>
  </div> 
</template>

<script>
import Navigation from "./components/UI/Navigation.vue";

export default {
  components: { Navigation },
};
</script>



<style>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
