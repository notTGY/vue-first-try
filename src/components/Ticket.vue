<template>
<div class="wrapper">
  <div class="top">
    <span>type: {{this.ticketData.type}}</span>
    <span>To: {{this.ticketData.email_to}}</span>
    <span>From: {{this.ticketData.email}}</span>
  </div>
  <div class="top-middle">
    Files: {{this.ticketData.filenames}}
  </div>
  <div class="middle">
    {{this.ticketData.text}}
  </div>
  <div class="bottom">
    <div v-if="this.ticketData.isYours">
      <button @click="removeTicket">Remove ticket</button>
      <button @click="sendBackTicket">Send back ticket</button>
    </div>
    <div>
      <button @click="sendBackTicket">Send back ticket</button>
    </div>
  </div>

</div>
</template>

<script>
export default {
  props: {
    ticketData: Object
  },
  name: 'Ticket',
  methods: {
    removeTicket() {
      console.log('fine');
    },
    sendBackTicket() {
      console.log('fine');
    }
  },
  mounted() {
    console.log(this.ticketData);
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #3fa;
  background: linear-gradient(to left, #ccf, #77f);
}
.top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 750px;
  border: 2px solid #3fa;
}
span {
  width: 250px;
  border: 1px solid #0f9;
}
.middle {
  padding: 10px;
  text-align: left;
  width: 730px;
}
.top-middle {
  border: 1px solid #0f9;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: right;
  width: 752px;
}
.bottom {
  padding: 10px;
  text-align: right;
  width: 730px;
}
button {
  border-radius: 15px;
  border: 1px solid #ccc;
  background: #ff09;
  color: #000;
  padding: 5px;
}
</style>
