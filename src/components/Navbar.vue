<template>
<div class="navbarContainer blue lighten-1">
    <button
      class="name btn-floating waves-effect waves-light blue"
      @click="toggleSidebar"
    >
      Bug Tracker
    </button>

  <div>
    <span v-if="email">
      Logged in as: <i>{{email}}</i>
    </span>

    <button
      @click="clickHandler"
      class="my_button btn-floating waves-effect waves-light"
    >
      Sign up/Sign in
    </button>

    <!--<img alt="Vue logo" src="../assets/logo.png" />-->
  </div>
</div>
</template>

<script>
  export default {
    props: {
      'toggleSidebar' : Function,
      'setMainWindow' : Function,
      'email' : String
    },
    name: 'Navbar',
    methods:{
      clickHandler (){
        this.setMainWindow('sign in')
      }
    }
  }

</script>


<style scoped>
.navbarContainer {
  width: 100%;
  height: 5rem;
  background-color: #348ceb;
  text-align: left;
  display: flex;
  justify-content: space-between;
  margin-top: 0px;
}
.name {
  color: #FFF;
  font: Arial;
  font-size: 40px;
  width: 20rem;
  height: 60px;
  border-radius: 50px;
  display: block;
  margin: 5px;
}
div {
  margin-top: 0px;
  display: flex;
}
span {
  color: #fff;
  margin-top: 1.7rem;
}
img {
  margin-right: 3rem;
  height: 4rem;
  margin-top: 0.5rem;
}
.my_button {
  background-image: linear-gradient(to top right, rgb(101, 115, 255), rgb(111, 114, 247), rgb(120, 114, 239), rgb(130, 113, 231), rgb(139, 112, 223), rgb(149, 111, 215), rgb(158, 111, 208), rgb(168, 110, 200), rgb(177, 109, 192), rgb(187, 108, 184), rgb(196, 108, 176), rgb(206, 107, 168));
  color: #FFF;
  border-radius: 70px;
  border: 1px solid #fff;
  width: 10rem;
  margin: 3rem;
  margin-top: 1rem;
}
</style>
