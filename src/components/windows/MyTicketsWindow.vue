<template>
<div>
<h1>My tickets</h1>

<div v-if=" tickets.message ">
  <span>{{tickets.message}}</span>
</div>

<div v-else-if="this.loaded">
  <div v-for="data in tickets" :key="data._id">
    <Ticket :ticketData="data" />
  </div>
</div>

<Loading v-else />

</div>
</template>

<script>
import Ticket from '@/components/Ticket.vue'
import Loading from '@/components/Loading.vue'

export default {
  props: {
    'api_url': String
  },
  data: () => {
    return {
      tickets: [],
      loaded: false
    }
  },
  mounted() {
    const token = window.localStorage.getItem('token');
    fetch(`${this.api_url}/tickets?token=${token}`)
    .then(response => response.json())
    .then((result) => {
      this.tickets = result;
      console.log(result);
      this.loaded = true;
    });
  },
  name: 'MyTicketsWindow',
  components : {
    Ticket,
    Loading
  }
}
</script>

<style scoped>
span {
  border: 2px solid red;
  background: tan;
  padding: 15px;
}
</style>
