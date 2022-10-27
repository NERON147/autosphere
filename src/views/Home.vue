<template>
    <div>
    <Header></Header>
    <Serv></Serv>
    <Footer></Footer>
    </div>
  
</template>

<script>
import Header from '@/components/Home/Header.vue'
import Serv from '@/components/Home/Serv-Section.vue'
import Footer from '@/components/Home/Footer.vue'

export default {
components: {Header,Serv,Footer}
}
</script>

<style>

</style>