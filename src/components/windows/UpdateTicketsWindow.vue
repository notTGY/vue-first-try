<template>
<div>
  <h1>Send back ticket</h1>

  <div class="input-field">
    <textarea rows="3" class="materialize-textarea" v-model="textResponse" />
  </div>

  <button
    @click="addTicket"
    class="btn-floating waves-effect waves-light blue-grey darken-2"
  >
    send back ticket
  </button>

</div>
</template>

<script>

export default {
  props: {
    'api_url': String,
    'setMainWindow': Function,
    'tid': String
  },
  data: () => {
    return {
      textResponse: ''
    }
  },
  methods: {
    addTicket() {
      const token = window.localStorage.getItem('token');
      let obj = {action: {type: 'sendBack', text: this.textResponse}, ticketId: this.tid};
      obj.token = token;
      fetch(`${this.api_url}/ticketsUpdate?token=${token}`, {
        method: 'POST',
        //mode: 'no-cors',
        body: JSON.stringify(obj),
        headers: {
          'content-type': 'application/json',
        }
      }).catch(e=>{console.error(e)})
      this.setMainWindow('my tickets');
    }
  },
  name: 'UpdateTicketsWindow'
}
</script>

<style scoped>
  textarea {
    margin: 0 auto;
  }
  button {
    width: 9rem;
    height: 3rem!important;
    border-radius: 0px!important;
  }
</style>
