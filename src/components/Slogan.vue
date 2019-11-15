<template>
  <div>
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <h1>
        <span
          class="t"
          v-for="word in h1.split(' ')"
          v-bind:key="word.key"
        >
          {{ word }}
        </span>
      </h1>
    </transition>
    <h2>{{ h2 }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    h1: String,
    h2: String
  },
  methods: {
    test (string) {
      var words = ''
      words = string.split(' ')
      return words
    }
  }
}
</script>

<style lang="sass" scoped>
h1
  position: relative

.t:nth-child(6)
  color: red
  animation: slogan 7s linear forwards 1.5s
.t:nth-child(5)
  color: green
  animation: slogan 6s linear forwards 1.5s
.t:nth-child(4)
  color: yellow
  animation: slogan 5s linear forwards 1.5s
.t:nth-child(3)
  color: blue
  animation: slogan 4s linear forwards 1.5s
.t:nth-child(2)
  color: white
  animation: slogan 3s linear forwards 1.5s
.t:nth-child(1)
  color: pink
  animation: slogan 2s linear forwards 1.5s

@keyframes slogan
  50%
    cubic-bezier(0.6, 0.04, 0.35, 1.29)
  100%
    transform rotate(30deg)

</style>
