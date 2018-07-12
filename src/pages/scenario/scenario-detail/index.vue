<template>
  <div>
    购票页

  </div>
</template>

<script>

export default {
  data () {
    return {
      scenarioId: null
    }
  },
  onLoad (option) {
    this.scenarioId = option.scenarioId
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
