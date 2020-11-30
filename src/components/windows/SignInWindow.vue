<template>
<div>
<h1>Sign in page</h1>

<div class="selector">
  <button @click="showSignIn">Log in</button>
  <button @click="showSignUp">Register</button>
</div>

<div v-if="this.whatWeDo === 'sign in'">
  <form class="signInForm" @submit.prevent="signIn">
    <input type="email" v-model="email" />
    <input type="password" v-model="password" />
    <button type="submit">Log in</button>
  </form>
</div>

<div v-if="this.whatWeDo === 'sign up'">
  <form class="signUpForm" @submit.prevent="signUp">
    <input type="email" v-model="email" />
    <input type="password" v-model="password" />
    <button type="submit">Register</button>
  </form>
</div>

</div>
</template>

<script>
export default {
  props: {
    'api_url': String
  },
  name: 'SignInWindow',
  data: ()=>({
    email: '',
    password: '',
    token: '',
    whatWeDo: 'sign in'
  }),
  methods: {
    signIn() {
      fetch(`${this.api_url}/users?email=${this.email}&password=${this.password}`)
        .then(response => response.json())
        .then(result => {
          window.localStorage.setItem('token', result)
          console.log(this.token);
        });
    },
    showSignIn() {
      this.whatWeDo = 'sign in';
    },
    showSignUp() {
      this.whatWeDo = 'sign up';
    },
    signUp () {
      fetch(`${this.api_url}/usersReg?email=${this.email}&password=${this.password}`)
        .then(response => response.json())
        .then(result => {
          this.token = result;
          this.setToken(this.token);
          console.log(this.token);
        });
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
input {
  margin: 0.5rem;
}
button {
  color: #FFF;
  background-color: #55F;
  margin: 0.5rem;
}
.selector {
  display: flex;
  flex-direction: row;
}
</style>
