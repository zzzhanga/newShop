<template>
  <div id="app">
   
    <router-view/>
    <FooterGuide v-show="$route.meta.requiresAuth"></FooterGuide>
  </div>
</template>

<script>
 import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  name: 'App',
  components:{
    FooterGuide
  },
  mounted() {
    // this.log()
  },
  methods: {
    log(){
console.log($route.meta.flag);

    }
  },
}

</script>

<style>

</style>
