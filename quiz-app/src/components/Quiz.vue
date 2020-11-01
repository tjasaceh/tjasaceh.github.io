<template>
  <div class="quiz" :class="{ 'quiz--center': isCentered }">
		<div class="quiz__summary" v-if="step === 'summary'">
			<div class="quiz__summary__correct">
				Pravilno odgovorjeni: {{ correctAnswers.length }} / {{ questions.length }}
			</div>
			<div class="quiz__summary__retry">
				<div class="quiz__summary__retry__button button" @click="reset">Poskusi znova?</div>
			</div>
		</div>
		<template v-else-if="step === 'quiz'">
			<div class="quiz__progress">
				{{ progress }}
			</div>
			<quiz-question
				v-for="(question, idx) in questions"
				v-show="questionIdx === idx"
				:key="`question_${question.question}`"
				:question="question.question"
				:image="question.image"
				:answers="question.answers"
				@answer-selected="onAnswerSelected"
			></quiz-question>
			<div class="quiz__controls">
				<div class="button" @click="nextQuestion" v-show="!showSummaryButton && showNextQuestionButton">Naprej</div>
				<div class="button" @click="showSummary" v-show="showSummaryButton">Povzetek</div>
			</div>
		</template>
		<div class="quiz__welcome" v-else-if="step === 'welcome'">
			<div class="quiz__welcome__title">Dobrodošli v kvizu: {{ title }}!</div>
			<div class="quiz__welcome__num-questions">
				<div class="quiz__welcome__num-questions__text">Preden začnemo, izberite število vprašanj:</div>
				<div class="quiz__welcome__num-questions__wrapper">
					<div
						v-for="num in numQuestions"
						:key="`num_questions_${num}`"
						@click="setNumQuestions(num)"
						class="quiz__welcome__num-questions__wrapper__num button"
						:class="{ 'quiz__welcome__num-questions__wrapper__num--active': selectedNumQuestions === num }"
					>
						{{ num }}
					</div>
				</div>
			</div>
			<div class="button" @click="startQuiz">Začnimo!</div>
		</div>
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
	questionsPool: { type: Array, required: true },
	title: { type: String, required: true },
  },
  data () {
		return {
			step: 'welcome',
			isShowingSummary: false,
			selectedAnswers: [],
			questionIdx: 0,
			numQuestions: [5, 10, 20],
			selectedNumQuestions: 10,
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
		isCentered () {
			return this.step === 'summary' || this.step === 'welcome'
		},
		questions () {
			return this.questionsPool.slice(0, this.selectedNumQuestions)
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
			this.step = 'summary'
		},
		startQuiz () {
			this.step = 'quiz'
		},
		setNumQuestions (numQuestions) {
			this.selectedNumQuestions = numQuestions
		},
		reset () {
			this.step = 'welcome'
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

	&__welcome {
		display: flex;
		flex-direction: column;
		align-items: center;

		&__title {
			font-weight: bold;
			text-shadow: black 1px 1px;
			font-size: 32px;
			text-align: center;
			color: white;
			margin-bottom: 16px;
		}

		&__num-questions {
			display: flex;
			align-items: center;
			margin-bottom: 16px;

			&__text {
				font-size: 20px;
				color: white;
				font-weight: bold;
				text-shadow: black 1px 1px;
			}

			&__wrapper {
				display: flex;

				&__num {
					margin: 8px;
				}

				&__num--active {
					background-color: #00d473;
					color: white;
					font-weight: bold;
				}
			}
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
