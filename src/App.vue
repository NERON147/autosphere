<template>
  <div id="app">
    <Navigation></Navigation>
    <transition name="fade" mode="out-in" :duration="{ enter: 500, leave: 500 }">
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
  transition: all 0.3s;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
}
</style>
