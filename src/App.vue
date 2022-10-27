<template>
  <div id="app">
    <Navigation></Navigation>
    <transition name="scale" mode="out-in">
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
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
