<template>
<div>
<h1>My company tickets</h1>

<div v-if="this.loaded">
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
      this.loaded = true;
    });
  },
  name: 'MyCompanyTicketsWindow',
  components : {
    Ticket,
    Loading
  }
}
</script>

<style scoped>

</style>
