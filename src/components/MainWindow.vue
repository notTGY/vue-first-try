<template>
<div class="mainWindowContainer">
<HomeWindow :token="token" :api_url="this.api_url" v-if="state === 'home'"/>
<MyTicketsWindow :token="token" :api_url="this.api_url" v-else-if="state === 'my tickets'"/>
<MyCompanyTicketsWindow :token="token" :api_url="this.api_url" v-else-if="state === 'my company tickets'"/>
<SendNewTicketWindow :token="token" :api_url="this.api_url" v-else-if="state === 'send new ticket'"/>
<SignInWindow :token="token" :api_url="this.api_url" :setToken="setToken" v-else-if="state === 'sign in'"/>
</div>
</template>

<script>
import HomeWindow from '@/components/windows/HomeWindow.vue'
import MyTicketsWindow from '@/components/windows/MyTicketsWindow.vue'
import MyCompanyTicketsWindow from '@/components/windows/MyCompanyTicketsWindow.vue'
import SendNewTicketWindow from '@/components/windows/SendNewTicketWindow.vue'
import SignInWindow from '@/components/windows/SignInWindow.vue'


export default {
  props: {
    'state' : String,
    'api_url': String,
    'setToken': Function,
    'token': String
  },
  name: 'MainWindow',
  components: {
    HomeWindow,
    MyTicketsWindow,
    MyCompanyTicketsWindow,
    SendNewTicketWindow,
    SignInWindow
  }
}
</script>

<style>
.mainWindowContainer {
  margin: 0 auto;
  background-color: #FFF;
}
</style>
