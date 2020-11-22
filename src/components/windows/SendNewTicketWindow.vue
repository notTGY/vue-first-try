<template>
<div>
<h1>Send new ticket</h1>

<form @submit.prevent="addTicket" class="ticketForm">
  <div class="row">
    <input type="text" v-model="ticket.filenames" />
    <input type="text" v-model="ticket.type" />
  </div>
  <div class="row">
    <textarea rows="3" v-model="ticket.text" />
    <button type="submit"> Add ticket </button>
  </div>
</form>

</div>
</template>

<script>
export default {
  props: {
    'api_url': String
  },
  data: ()=>{
    return {
      ticket: {
        mail: '',
        text: 'text',
        type: 'type',
        filenames: 'filenames'
      }
    }
  },
  name: 'SendNewTicketWindow',
  methods: {
    addTicket() {
      fetch(this.api_url+'/tickets', {
        method: 'POST',
        body: JSON.stringify(this.ticket),
        headers: {
          'content-type': 'application/json',
        }
      });
      this.ticket.filenames = 'filenames';
      this.ticket.text = 'text';
      this.ticket.type = 'type';
    }
  }
}
</script>


<style scoped>
.ticketForm {
  display: flex;
  flex-direction: column;

}
.row {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}
button {
  margin-left: 2rem;
  width: 5rem;
  height: 2rem;
}
input {
  margin-right: 1rem;
}
</style>
