<template>
  <div id="app">
    <Navbar
      :toggleSidebar="updateS"
      :setMainWindow="setMainWindow"
      :email="email"
    />
    <div class="vertical-align">
      <Sidebar
        :shown="this.shown"
        :toggleSidebar="updateS"
        :setMainWindow="setMainWindow"
      />
      <MainWindow
        :state="mainWindowState"
        :setMainWindow="setMainWindow"
        :api_url="this.API_URL"
        :updateEmail="updateEmail"
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
      email: '',
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
    updateEmail (newEmail) {
      this.email = newEmail;
    },
    setMainWindow(e) {
      this.mainWindowState = e;
      console.log(e)
    }
  },
  mounted() {
    const token = window.localStorage.getItem('token');
    if (token) {
      fetch(`${this.API_URL}/userCheck?token=${token}`/*, {
        method: 'GET',
        mode: 'no-cors'
      }*/
    ).then(response => response.json()
    ).then(result => {
          console.log(result);
          this.email = result;
        });
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
