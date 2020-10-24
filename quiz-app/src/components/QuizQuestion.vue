<template>
  <div class="quiz-question">
    <div class="quiz-question__question">
      <div class="quiz-question__question__shape"></div>
      <div class="quiz-question__question__text">{{ question }}</div>
    </div>
    <div class="quiz-question__answers">
      <div
        class="quiz-question__answers__answer"
        v-for="answer in answers"
        :key="`answer_${answer.answer}`"
        :class="{
          'quiz-question__answers__answer--bacteria': answer.isBacteriaName,
          'quiz-question__answers__answer--answered': !!selectedAnswer,
          'quiz-question__answers__answer--correct': isAnswerSelected(answer) && answer.isCorrect,
          'quiz-question__answers__answer--wrong': isAnswerSelected(answer) && !answer.isCorrect,
        }"
        @click="selectAnswer(answer)"
      >
        {{ answer.answer }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuizQuestion',
  components: {
  },
  props: {
    question: { type: String, required: true },
    answers: { type: Array, required: true },
  },
  data () {
		return {
      selectedAnswer: null,
		}
  },
  methods: {
    selectAnswer (answer) {
      if (this.selectedAnswer) {
        return
      }
      this.selectedAnswer = answer
      this.$emit('answer-selected', answer)
    },
    isAnswerSelected (answer) {
      return this.selectedAnswer && this.selectedAnswer.answer === answer.answer
    }
  },
}
</script>

<style scoped lang="less">
.quiz-question {
  padding: 8px;

  &__question {
    position: relative;
    margin: 8px;

    &__shape {
      position: absolute;
      top: -8px;
      left: -8px;
      width: calc(100% + 16px);
      height: calc(100% + 16px);
      transform: skew(-3deg);
      background-color: #06bde6;
      border-radius: 8px;
      z-index: 0; 
    }

    &__text {
      position: relative;
      background-color: white;
      text-align: center;
      padding: 32px;
      border-radius: 8px;
      margin-bottom: 32px;
      box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
      z-index: 1;
      background-image: url(/static/img/questionmark.png);
      background-repeat: no-repeat;
      background-position: 100% 110%;
    }
  }

  &__answers {
    &__answer {
      cursor: pointer;
      background-color: white;
      margin-bottom: 16px;
      text-align: center;
      padding: 8px 16px;
      border-radius: 8px;
      box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);

      &--answered {
        cursor: not-allowed;
      }

      &--bacteria {
        font-style: italic;
      }

      &--correct {
        background-color: #00d473;
        color: white;
        font-weight: bold;
      }

      &--wrong {
        background-color: #d60014;
        color: white;
        font-weight: bold;
      }
    }
  }
}
</style>
