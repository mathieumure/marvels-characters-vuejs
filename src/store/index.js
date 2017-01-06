import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
import charactersApi from '../api/characters'

Vue.use(Vuex)

const state = {
  characters: [],
  offset: 100,
  limit: 20
}

export const mutations = {
  [types.ADD_CHARACTER] (state, character) {
    if (character) {
      state.characters.push(character)
    }
  },
  [types.CLEAR_CHARACTERS] (state) {
    state.characters.splice(0, state.characters.length)
  }
}

export const getters = {
  characters (state) { return state.characters },
  loading (state) { return state.characters.length === 0 }
}

export const actions = {
  getCharacters (store) {
    charactersApi.getCharacters({offset: store.state.offset, limit: store.state.limit}, characters => {
      store.commit(types.CLEAR_CHARACTERS)
      if (Array.isArray(characters)) {
        characters.forEach(character => {
          store.commit(types.ADD_CHARACTER, character)
        })
      }
    })
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: true
})
