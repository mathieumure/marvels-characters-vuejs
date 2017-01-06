<template>
  <div>
    <div class="col s12 m7" v-show="loading">
      <loader></loader>
    </div>
    <div class="col s12 m7" v-for="character in characters">
      <character :character="character"></character>
    </div>
  </div>
</template>

<script>
import Character from './Character.vue'
import Loader from './Loader.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'characters',
  components: {
    Character,
    Loader
  },
  computed: mapGetters({
    characters: 'characters',
    loading: 'loading'
  }),
  methods: mapActions([
    'getCharacters'
  ]),
  created () {
    this.$store.dispatch('getCharacters')
  }
}
</script>

<style>
</style>
