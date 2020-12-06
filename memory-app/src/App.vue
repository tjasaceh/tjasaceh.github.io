<template>
  <div id="app">
    <memory-game :title="title" :memory-cards="memoryCards"></memory-game>
  </div>
</template>

<script>
import MemoryGame from './components/MemoryGame.vue'

export default {
  name: 'App',
  components: {
    MemoryGame,
  },
  props: {
	  title: { type: String, required: true },
    memoryCards: { type: Array, required: true },
  },
}
</script>
