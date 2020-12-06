<template>
  <div class="memory-game">
    <template v-if="step === 'welcome'">
      <div class="memory-game__welcome">
        <div class="memory-game__welcome__title">Dobrodošli v igri spomina: {{ title }}!</div>
        <div class="memory-game__welcome__grid-size">
          <div class="memory-game__welcome__grid-size__text">Preden začnemo, izberite velikost igre:</div>
          <div class="memory-game__welcome__grid-size__wrapper">
            <div
              v-for="num in gridSizes"
              :key="`grid_size_${num}`"
              @click="setGridSize(num)"
              class="memory-game__welcome__grid-size__wrapper__num button"
              :class="{ 'memory-game__welcome__grid-size__wrapper__num--active': selectedGridSize === num }"
            >
              {{ num }}&times;{{ num }}
            </div>
          </div>
        </div>
        <div class="button" @click="startMemoryGame">Začnimo!</div>
      </div>
    </template>
    <template v-else-if="step === 'game'">
      <div class="memory-game__header">
        <div class="memory-game__header__correct-pairs">
          Najdeni pari: {{ correctPairs }} / {{ allPairs }}
        </div>
        <div class="memory-game__header__seconds-left">
          Preostali čas: {{ secondsLeft }}s
        </div>
      </div>
      <div class="memory-game__cards">
        <div
          class="memory-game__cards__row"
          v-for="(row, rowIndex) in grid"
          :key="`${rowIndex}_memory_row`"
        >
          <div
            class="memory-game__cards__row__column"
            :class="`memory-game__cards__row__column--${selectedGridSize}`"
            v-for="(card, columnIndex) in row"
            :key="`${rowIndex}_${columnIndex}_column`"
          >
            <memory-card
              :card="card"
              :image="card.image"
              :is-open="isCardOpen(card)"
              @card-clicked="onCardClick"
            >
            </memory-card>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="step === 'summary'">
      <div class="memory-game__summary">
        <div class="memory-game__summary__text" v-if="correctPairs === allPairs">Čestitke, našli ste vse pare!</div>
        <div class="memory-game__summary__text" v-else>Našli ste {{ correctPairs }} od {{ allPairs }} možnih parov.</div>
        <div class="memory-game__summary__retry">
          <div class="memory-game__summary__retry__button button" @click="reset">Poskusi znova?</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import MemoryCard from './MemoryCard.vue'

export default {
  name: 'MemoryGame',
  components: {
    MemoryCard,
  },
  props: {
    title: { type: String, required: true },
    memoryCards: { type: Array, required: true },
  },
  data () {
    return {
      step: 'welcome',
      gridSizes: [2, 4, 6],
      secondsLeftPerGridSize: {
        2: 30,
        4: 90,
        6: 120,
      },
      selectedGridSize: 2,
      secondsLeft: 0,
      correctCards: [],
      selectedCards: [],
    }
  },
  computed: {
    grid () {
      const selectedMemoryCards = this.memoryCards.slice(0, Math.floor(this.selectedGridSize * this.selectedGridSize / 2))
      const selectedMemoryCardsGrid = selectedMemoryCards.concat(selectedMemoryCards)
      shuffle(selectedMemoryCardsGrid)
      const grid = []
      for (let i = 0; i < this.selectedGridSize; i++) {
        const row = []
        for (let j = 0; j < this.selectedGridSize; j++) {
          const card = selectedMemoryCardsGrid[i * this.selectedGridSize + j]
          row.push({ ...card, computedId: `${card.id}_${i}_${j}` })
        }
        grid.push(row)
      }
      return grid
    },
    correctPairs () {
      return Math.round(this.correctCards.length / 2)
    },
    allPairs () {
      return Math.round(this.selectedGridSize * this.selectedGridSize / 2)
    },
  },
  watch: {
    selectedCards () {
      if (this.selectedCards.length !== 2) {
        return
      }
      setTimeout(() => {
        if (this.selectedCards[0].id === this.selectedCards[1].id) {
          this.correctCards = this.correctCards.concat(this.selectedCards)
        }
        this.selectedCards = []
      }, 500)
    },
    secondsLeft () {
      if (this.secondsLeft <= 0) {
        this.endGame()
      }
    },
    correctPairs () {
      if (this.correctPairs === this.allPairs) {
        this.endGame()
      }
    },
  },
  mounted () {
    this.gameInterval = null
  },
  methods: {
    setGridSize (gridSize) {
      this.selectedGridSize = gridSize
    },
    startMemoryGame () {
      this.secondsLeft = this.secondsLeftPerGridSize[this.selectedGridSize]
      this.gameInterval = setInterval(this.onGameInterval, 1000)
      this.step = 'game'
    },
    isCardOpen (card) {
      return this.selectedCards.concat(this.correctCards).find(c => c.computedId === card.computedId)
    },
    onCardClick (card) {
      if (this.selectedCards.length === 2 || this.correctCards.length === this.selectedGridSize * this.selectedGridSize) {
        return
      }
      this.selectedCards.push(card)
    },
    onGameInterval () {
      this.secondsLeft -= 1
    },
    endGame () {
      clearInterval(this.gameInterval)
      this.gameInterval = null
      this.step = 'summary'
    },
    reset () {
      this.step = 'welcome'
      this.correctCards = []
      this.selectedCards = []
    },
  },
}
</script>

<style lang="less" scoped>
.button {
	cursor: pointer;
	border-radius: 8px;
	padding: 4px 8px;
	background-color: white;
	box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.75);
}

.memory-game {
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
  justify-content: center;

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

    &__grid-size {
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

  &__header {
    display: flex;
    justify-content: space-between;
    font-size: 22px;
  }

  &__cards {
    &__row {
      display: flex;
      flex-direction: row;
      flex: 0 1 auto;
      flex-wrap: wrap;

      &__column {
        margin: 4px;
        flex-grow: 1;
        flex-basis: 0;
        max-width: 100%;
        min-height: 120px;

        &--2 {
          min-height: 170px;
        }
      }
    }
  }

  &__summary {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__text {
      text-align: center;
      margin-bottom: 16px;
      text-shadow: black 1px 1px;
			font-size: 32px;
			color: white;
    }
  }
}

@media only screen and (max-width: 500px) {
  .memory-game__header {
    flex-direction: column;
  }
  .memory-game__cards {
    &__row {
      &__column {
        margin: 1px;
        min-height: 80px;

        &--2 {
          min-height: 100px;
        }
      }
    }
  }
}
</style>
