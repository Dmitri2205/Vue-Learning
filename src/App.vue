<template>
  <div id="app">
    <SideBar />
    <MainScreen/>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue"
import MainScreen from "./components/MainScreen.vue"



export default {
  name: 'app',
  components:{
    SideBar,
    MainScreen
  }
}
</script>

<style lang="scss">
#app {
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
