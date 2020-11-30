<template>
<div class="mainWindowContainer">
<HomeWindow :api_url="this.api_url" v-if="state === 'home'"/>
<MyTicketsWindow :api_url="this.api_url" v-else-if="state === 'my tickets'"/>
<MyCompanyTicketsWindow :api_url="this.api_url" v-else-if="state === 'my company tickets'"/>
<SendNewTicketWindow :api_url="this.api_url" v-else-if="state === 'send new ticket'"/>
<SignInWindow :api_url="this.api_url" v-else-if="state === 'sign in'"/>
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
    'api_url': String
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
