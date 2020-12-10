<template>
  <div class="sidebar" v-if="shown">
    <button class="sidebar-element" @click="myTicketsClickHandler">
      My tickets
    </button>
    <!--  <button class="sidebar-element" @click="myCompanyTicketsClickHandler">
      My company tickets
    </button>   -->
    <button class="sidebar-element" @click="sendNewTicketClickHandler">
      Send new ticket
    </button>
  </div>
</template>

<script>
  export default {
    props : {
      'shown' : Boolean,
      'setMainWindow': Function
    },
    name: 'Sidebar',
    methods: {
      myTicketsClickHandler() {
        this.setMainWindow('my tickets')
      },
      myCompanyTicketsClickHandler() {
        this.setMainWindow('my company tickets')
      },
      sendNewTicketClickHandler() {
        this.setMainWindow('send new ticket')
      }
    }
  }
</script>

<style scoped>
  .sidebar {
    position: fixed;
    width: 15rem;
    background-color: #EEE;
    border-right: 1px solid #CCC;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 15px;
    border-radius: 0 0 10% 10%;
  }
  .sidebar-element {
    width: 90%;
    padding: 0.5rem;
    border-bottom: 2px solid #CCC;
    border-top: hidden;
    border-left: hidden;
    border-right: hidden;
    font: Arial;
    font-size: 18px;
    color: #000;
  }
</style>
