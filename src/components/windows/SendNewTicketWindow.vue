<template>
<div>
<h1>Send new ticket</h1>

<form @submit.prevent="addTicket" class="ticketForm">
  <div class="row">
    <div class="input-field">
      <input type="text" v-model="ticket.filenames" />
    </div>


    <select class="browser-default teal lighten-5" v-model="ticket.type">
      <option value="bug" selected>bug</option>
      <option value="feature request">feature request</option>
      <option value="other mistake">other mistake</option>
      <option value="hack">hack</option>
    </select>


    <div class="input-field">
        <input type="text" v-model="ticket.email_to" />
    </div>

  </div>
  <div class="row">

    <div class="input-field">
      <textarea rows="3" v-model="ticket.text" class="materialize-textarea" />
    </div>

    <button
      type="submit"
      class="btn-floating waves-effect waves-light brown darken-1"
    >
      Add ticket
    </button>
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
        type: 'bug',
        filenames: 'filenames',
        email_to: 'email to'
      }
    }
  },
  name: 'SendNewTicketWindow',
  methods: {
    addTicket() {
      const token = window.localStorage.getItem('token');
      let obj = this.ticket;
      obj.token = token;
      fetch(`${this.api_url}/tickets?token=${token}`, {
        method: 'POST',
        //mode: 'no-cors',
        body: JSON.stringify(obj),
        headers: {
          'content-type': 'application/json',
        }
      }).catch(e=>{console.error(e)})
      this.ticket.filenames = 'filenames';
      this.ticket.text = 'text';
      this.ticket.type = 'bug';
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
  width: 8rem;
  height: 4rem;
  border-radius: 10px;
}
input {
  margin-right: 1rem;
}
select {
  width: 10rem;
  margin: 2rem;
  border: 1px solid #000;
}
textarea {
  margin-left: 0px;
}
</style>
