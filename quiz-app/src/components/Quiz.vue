<template>
  <div class="quiz" :class="{ 'quiz--center': isShowingSummary }">
		<div class="quiz__summary" v-if="isShowingSummary">
			<div class="quiz__summary__correct">
				Pravilno odgovorjeni: {{ correctAnswers.length }} / {{ questions.length }}
			</div>
			<div class="quiz__summary__retry">
				<div class="quiz__summary__retry__button button" @click="reset">Poskusi znova?</div>
			</div>
		</div>
		<template v-else>
			<div class="quiz__progress">
				{{ progress }}
			</div>
			<quiz-question
				v-for="(question, idx) in questions"
				v-show="questionIdx === idx"
				:key="`question_${question.question}`"
				:question="question.question"
				:answers="question.answers"
				@answer-selected="onAnswerSelected"
			></quiz-question>
			<div class="quiz__controls">
				<div class="button" @click="nextQuestion" v-show="!showSummaryButton && showNextQuestionButton">Naprej</div>
				<div class="button" @click="showSummary" v-show="showSummaryButton">Povzetek</div>
			</div>
		</template>
  </div>
</template>

<script>
import QuizQuestion from './QuizQuestion'

export default {
  name: 'Quiz',
  components: {
    QuizQuestion,
  },
  props: {
    questions: { type: Array, required: true },
  },
  data () {
		return {
			isShowingSummary: false,
			selectedAnswers: [],
			questionIdx: 0,
		}
	},
	computed: {
		progress () {
			return `Vprašanje ${this.questionIdx + 1} od ${this.questions.length}`
		},
		showNextQuestionButton () {
			return this.selectedAnswers.length > this.questionIdx
		},
		showSummaryButton () {
			return this.selectedAnswers.length === this.questions.length
		},
		correctAnswers () {
			return this.selectedAnswers.filter(a => a.isCorrect)
		},
	},
	methods: {
		nextQuestion () {
			if (this.questionIdx === this.questions.length - 1) {
				return
			}
			this.questionIdx += 1
		},
		onAnswerSelected (answer) {
			this.selectedAnswers.push(answer)
		},
		showSummary () {
			this.isShowingSummary = true
		},
		reset () {
			this.isShowingSummary = false
			this.selectedAnswers = []
			this.questionIdx = 0
		},
	},
}
</script>

<style scoped lang="less">
.button {
	cursor: pointer;
	border-radius: 8px;
	padding: 4px 8px;
	background-color: white;
	box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.75);
}

.quiz {
	padding: 16px;
	box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
		0 2px 2px rgba(0,0,0,0.12), 
		0 4px 4px rgba(0,0,0,0.12), 
		0 8px 8px rgba(0,0,0,0.12),
		0 16px 16px rgba(0,0,0,0.12);
	border-radius: 8px;
	background: rgb(253,212,75);
	background: radial-gradient(circle, rgba(253,212,75,1) 0%, rgba(255,197,0,1) 100%);
	min-height: 420px;
	display: flex;
	flex-direction: column;

	&--center {
		justify-content: center;
	}

	&__controls {
		display: flex;
    	justify-content: flex-end;
	}

	&__summary {
		display: flex;
		flex-direction: column;
		align-items: center;

		&__correct {
			font-weight: bold;
			text-shadow: black 1px 1px;
			font-size: 32px;
			text-align: center;
			color: white;
			margin-bottom: 16px;
		}
	}

	&__progress {
		font-weight: bold;
		text-shadow: black 1px 1px;
		font-size: 32px;
		text-align: center;
		color: white;
	}
}
</style>
