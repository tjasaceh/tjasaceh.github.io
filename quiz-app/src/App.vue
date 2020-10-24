<template>
  <div id="app">
    <quiz :questions="questions"></quiz>
  </div>
</template>

<script>
import Quiz from './components/Quiz.vue'

export default {
  name: 'App',
  props: {
    questions: { type: Array, required: true },
  },
  components: {
    Quiz,
  },
}
</script>
