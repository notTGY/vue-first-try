<template>
<div>
<h1>My tickets</h1>

<div v-for="data in tickets" :key="data._id">
  <Ticket :ticketData="data" />
</div>

</div>
</template>

<script>
import Ticket from '@/components/Ticket.vue'

export default {
  props: {
    'api_url': String
  },
  data: () => {
    return {
      tickets: []
    }
  },
  mounted() {
    fetch(this.api_url+'/tickets').then(response => response.json()).then((result) => {
      this.tickets = result;
    });
  },
  name: 'MyTicketsWindow',
  components : {
    Ticket
  }
}
</script>

<style scoped>

</style>
