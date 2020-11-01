<template>
  <div id="app">
    <quiz :questions-pool="questionsPool" :title="title"></quiz>
  </div>
</template>

<script>
import Quiz from './components/Quiz.vue'

export default {
  name: 'App',
  props: {
	  title: { type: String, required: true },
    questionsPool: { type: Array, required: true },
  },
  components: {
    Quiz,
  },
}
</script>
