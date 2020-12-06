<template>
  <div class="memory-card" @click="$emit('card-clicked', card)">
    <div class="memory-card__inner" :class="{ 'memory-card__inner--open': isOpen }" >
      <div class="memory-card__inner__front">
        <img src="/static/img/memory-card-back.jpg" />
      </div>
      <div class="memory-card__inner__back">
        <img :src="image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemoryCard',
  props: {
    card: { type: Object, required: true },
    image: { type: String, required: true },
    isOpen: { type: Boolean, required: true },
  },
}
</script>

<style lang="less" scoped>
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

.memory-card {
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-color: transparent;
  perspective: 1000px;

  &__inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.25s;
    transform-style: preserve-3d;

    &--open {
      transform: rotateY(180deg);
    }

    &__back {
      transform: rotateY(180deg);
    }

    &__front,
    &__back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden; /* Safari */
      backface-visibility: hidden;
    }
  }
}
</style>
