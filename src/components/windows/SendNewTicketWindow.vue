<template>
<div>
<h1>Send new ticket</h1>

<form @submit.prevent="addTicket" class="ticketForm">
  <div class="row">
    <input type="text" v-model="ticket.filenames" />
    <input type="text" v-model="ticket.type" />
    <input type="text" v-model="ticket.email_to" />
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
    'api_url': String,
    'token': String
  },
  data: ()=>{
    return {
      ticket: {
        mail: '',
        text: 'text',
        type: 'type',
        filenames: 'filenames',
        email_to: 'email to'
      }
    }
  },
  name: 'SendNewTicketWindow',
  methods: {
    addTicket() {
      fetch(`${this.api_url}/tickets?token=${token}`, {
        method: 'POST',
        body: JSON.stringify(this.ticket),
        headers: {
          'content-type': 'application/json',
        }
      }).catch(e=>{console.error(e)})
      this.ticket.filenames = 'filenames';
      this.ticket.text = 'text';
      this.ticket.type = 'type';
      this.ticket.email_to = 'email to';
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
