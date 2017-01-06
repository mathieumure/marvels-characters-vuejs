import "babel-polyfill";
import Vue from "vue";
import Vuex from "vuex";
import Characters from "src/components/Characters";

Vue.use(Vuex)

const mockedStore = {
  state: {
    characters: [],
    offset: 100,
    limit: 20
  },
  actions: {
    getCharacters () {
    }
  },
  getters: {
    characters (state) {
      return state.characters
    },
    loading (state) {
      return state.characters.length === 0
    }
  }

}

describe('Characters.vue', () => {
  it('should display preloader if no characters', function () {
    const vm = new Vue({
      template: '<div><test></test></div>',
      components: {
        'test': Characters
      },
      store: new Vuex.Store(mockedStore)
    }).$mount()
    expect(vm.$el.querySelector('.preloader-container')).to.exist
  })
})

describe('Characters.vue', () => {
  it('should display a list of characters', function () {

    const _NAME = 'Test Name'
    const _DESCRIPTION = 'Character description'
    const _THUMB_PATH = 'http://path.com'
    const _THUMB_EXTENSION = 'ext'

    let character = {
      name: _NAME,
      description: _DESCRIPTION,
      thumbnail: {
        path: _THUMB_PATH,
        extension: _THUMB_EXTENSION
      }
    }

    const mockedStoreWithCharacters = {
      ...mockedStore
    };
    mockedStoreWithCharacters.state.characters.push(character)
    mockedStoreWithCharacters.state.characters.push(character)
    mockedStoreWithCharacters.state.characters.push(character)

    const vm = new Vue({
      template: '<div><test></test></div>',
      components: {
        'test': Characters
      },
      store: new Vuex.Store(mockedStoreWithCharacters)
    }).$mount()
    expect(vm.$el.querySelectorAll('.card')).to.exist
    expect(vm.$el.querySelectorAll('.card')).to.have.lengthOf(3)
  })
})
