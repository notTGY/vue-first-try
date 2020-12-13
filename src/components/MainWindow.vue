<template>
<div class="mainWindowContainer teal lighten-5">
<HomeWindow :api_url="this.api_url" v-if="state === 'home'"/>
<MyTicketsWindow
  :setMainWindow="this.setMainWindow"
  :setTicketId="setTicketId"
  :api_url="this.api_url"
  v-else-if="state === 'my tickets'"
/>
<UpdateTicketsWindow
  :setMainWindow="this.setMainWindow"
  :tid="this.ticket_id"
  :api_url="this.api_url"
  v-else-if="state === 'update ticket'"
/>
<SendNewTicketWindow :api_url="this.api_url" v-else-if="state === 'send new ticket'"/>
<SignInWindow
  :api_url="this.api_url"
  :updateEmail="updateEmail"
  v-else-if="state === 'sign in'"
/>
</div>
</template>

<script>
import HomeWindow from '@/components/windows/HomeWindow.vue'
import MyTicketsWindow from '@/components/windows/MyTicketsWindow.vue'
import UpdateTicketsWindow from '@/components/windows/UpdateTicketsWindow.vue'
import SendNewTicketWindow from '@/components/windows/SendNewTicketWindow.vue'
import SignInWindow from '@/components/windows/SignInWindow.vue'


export default {
  props: {
    'state' : String,
    'api_url': String,
    'setMainWindow': Function,
    'updateEmail': Function
  },
  data: ()=>{
    return {
      ticket_id: ''
    }
  },
  name: 'MainWindow',
  methods: {
    setTicketId(newId) {
      this.ticket_id = newId
    }
  },
  components: {
    HomeWindow,
    MyTicketsWindow,
    UpdateTicketsWindow,
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
