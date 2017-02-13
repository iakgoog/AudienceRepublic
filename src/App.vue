<template>
  <div id="app">
    <!--img src="./assets/logo.png"-->
    <ar-header></ar-header>
    <ar-hero-image></ar-hero-image>
    <ar-content></ar-content>
    <ar-footer></ar-footer>
    <ar-modal></ar-modal>
  </div>
</template>

<script>
import ArHeader from './components/Header'
import ArHeroImage from './components/HeroImage'
import ArContent from './components/Content'
import ArFooter from './components/Footer'
import ArModal from './components/Modal'

export default {
  components: {
    ArHeader,
    ArHeroImage,
    ArContent,
    ArFooter,
    ArModal
  },
  name: 'app'
}
</script>

<style>
/* #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// } */
</style>
