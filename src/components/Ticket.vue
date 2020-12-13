<template>
<div class="card large blue-grey darken-1 waves-effect waves-light my-card">
              <span>type: <i>{{this.ticketData.type}}</i></span>
              <span>To: <i>{{this.ticketData.email_to}}</i></span>
              <span>From: <i>{{this.ticketData.email}}</i></span>
              <span>Files: <i>{{this.ticketData.filenames}}</i></span>
            <pre>{{this.ticketData.text}}</pre>
          <div class="card-action">
            <div v-if="this.ticketData.isYours">
              <button
                @click="removeTicket"
                class="btn-floating waves-effect waves-light lime accent-2"
              >
                Remove ticket
              </button>
            </div>
            <div>
              <button
                @click="sendBackTicket"
                class="btn-floating waves-effect waves-light lime accent-2"
              >
                Send back ticket
              </button>
            </div>
          </div>
</div>
</template>

<script>
export default {
  props: {
    ticketData: Object,
    setTicketId: Function,
    setMainWindow: Function,
    api_url: String
  },
  name: 'Ticket',
  methods: {
    removeTicket() {
      const token = window.localStorage.getItem('token');
      let obj = {action: {type: 'delete'}, ticketId: this.ticketData._id};
      obj.token = token;
      fetch(`${this.api_url}/ticketsUpdate?token=${token}`, {
        method: 'POST',
        //mode: 'no-cors',
        body: JSON.stringify(obj),
        headers: {
          'content-type': 'application/json',
        }
      }).catch(e=>{console.error(e)})
    },
    sendBackTicket() {
      this.setTicketId(this.ticketData._id);
      this.setMainWindow('update ticket');
    }
  },
  mounted() {
    //console.log(this.ticketData);
  }
}
</script>

<style scoped>
span {
  width: 5rem!important;
  border: 1px solid #ccc;
}
* {
  color: #fff;
  text-align: left;
  padding: 5px;
}
button {
  border-radius: 15px;
  border: 1px solid #ccc;
  background: #ff09;
  color: #000;
  padding: 5px;
  width: 150px!important;
  text-align: center;
  height: 50px!important;
}
.my-card {
  width: 50rem!important;
}
</style>
