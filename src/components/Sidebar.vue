<template>
  <div class="sidebar pink lighten-4" v-if="shown">
    <button
      class="sidebar-element btn-floating waves-effect waves-teal cyan lighten-5"
      @click="myTicketsClickHandler"
    >
      My tickets
    </button>
    <button
      class="sidebar-element btn-floating waves-effect waves-teal cyan lighten-5"
      @click="sendNewTicketClickHandler"
    >
      Send new ticket
    </button>
  </div>
</template>

<script>
  export default {
    props : {
      'shown' : Boolean,
      'setMainWindow': Function,
      'toggleSidebar': Function
    },
    name: 'Sidebar',
    methods: {
      myTicketsClickHandler() {
        this.setMainWindow('my tickets');
        this.toggleSidebar();
      },
      myCompanyTicketsClickHandler() {
        this.setMainWindow('my company tickets');
        this.toggleSidebar();
      },
      sendNewTicketClickHandler() {
        this.setMainWindow('send new ticket');
        this.toggleSidebar();
      }
    }
  }
</script>

<style scoped>
  .sidebar {
    position: fixed;
    width: 20rem;
    background-color: #EEE;
    border-right: 1px solid #CCC;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 15px;
    border-radius: 0 0 10% 10%;
  }
  .sidebar-element {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    padding: 0.5rem;
    border-bottom: 2px solid #CCC;
    border-top: hidden;
    border-left: hidden;
    border-right: hidden;
    font: Arial;
    border-radius: 0px;
    font-size: 18px;
    color: #000;
  }
</style>
