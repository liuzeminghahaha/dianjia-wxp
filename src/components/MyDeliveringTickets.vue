<template>
  <div class="ticket-list">
    我的快递
    <p class="card">
      {{text}}
    </p>
  </div>
</template>

<script>

export default {
  name: 'MyDeliveringTickets',
  props: ['text']
}
</script>