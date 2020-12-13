<template>
  <div id="app">
    <Navbar
      :toggleSidebar="updateS"
      :setMainWindow="setMainWindow"
    />
    <div class="vertical-align">
      <Sidebar :shown="this.shown" :setMainWindow="setMainWindow" />
      <MainWindow
        :state="mainWindowState"
        :api_url="this.API_URL"
      />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import MainWindow from './components/MainWindow.vue'


export default {
  name: 'App',
  data: ()=>{
    return {
      shown: false,
      mainWindowState : 'home',
      API_URL: 'https://cors-anywhere.herokuapp.com/https://hello-wo.herokuapp.com/api'
      //API_URL: 'http://localhost:1000/api'
    }
  },
  components: {
    Navbar,
    Sidebar,
    MainWindow
  },
  methods: {
    updateS () {
      this.shown = !this.shown;
    },
    setMainWindow(e) {
      this.mainWindowState = e;
      console.log(e)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.vertical-align {
  display: flex;
  flex-direction: row;

}
</style>
