<template>
  <div class="ticket-list">
    我的自取
    <p class="card">
      {{text}}
    </p>
  </div>
</template>

<script>

export default {
  name: 'MyInPickupTickets',
  props: ['text']
}
</script>