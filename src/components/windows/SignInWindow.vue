<template>
<div>
<h1>Sign in page</h1>
<div v-if="!this.areWeDone">
  <div class="selector">
    <button
      @click="showSignIn"
      class="btn-floating waves-effect waves-light blue-grey"
    >
      Log in
    </button>
    <button
      @click="showSignUp"
      class="btn-floating waves-effect waves-light blue-grey"
    >
      Register
    </button>
  </div>

  <div v-if="this.whatWeDo === 'sign in'">
    <form class="signInForm" @submit.prevent="signIn">
      <input type="email" v-model="email" />
      <input type="password" v-model="password" />
      <button
        type="submit"
        class="btn-floating waves-effect waves-light blue-grey"
      >
        Log in
      </button>
    </form>
  </div>

  <div v-if="this.whatWeDo === 'sign up'">
    <form class="signUpForm" @submit.prevent="signUp">
      <input type="email" v-model="email" />
      <input type="password" v-model="password" />
      <button
        type="submit"
        class="btn-floating waves-effect waves-light blue-grey darken-2"
      >
        Register
      </button>
    </form>
  </div>
</div>
<div v-else>
  <h2>You are successfully logged in!</h2>
</div>

</div>
</template>

<script>
export default {
  props: {
    'api_url': String,
    'updateEmail': Function
  },
  name: 'SignInWindow',
  data: ()=>({
    email: '',
    password: '',
    token: '',
    whatWeDo: 'sign in',
    areWeDone: false
  }),
  methods: {
    signIn() {
      fetch(`${this.api_url}/users?email=${this.email}&password=${this.password}`/*,{
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Origin' : 'localhost'
        }
      }*/)
        .then(response => response.json())
        .then(result => {
          window.localStorage.setItem('token', result)
          this.updateEmail(this.email);
          this.areWeDone = true;
        });
    },
    showSignIn() {
      this.whatWeDo = 'sign in';
    },
    showSignUp() {
      this.whatWeDo = 'sign up';
    },
    signUp () {
      fetch(`${this.api_url}/usersReg?email=${this.email}&password=${this.password}`, {
        method: 'GET',
        mode: 'no-cors'
      })
        .then(response => response.json())
        .then(result => {
          this.token = result;
          this.setToken(this.token);
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
  width: 5rem;
  border-radius: 10px;
  border: 1px solid #FFF;
}
.selector {
  display: flex;
  flex-direction: row;
}
</style>
