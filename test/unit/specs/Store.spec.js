import * as types from "src/store/mutation-types";
import {mutations, getters} from "src/store";

const _characters = [
  {
    id: 1,
    name: 'IRON MAN',
    thumbnail: 'http://lorempicsum.com/futurama/350/200/1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aliquid amet deleniti doloribus et illo in inventore laboriosam optio perspiciatis possimus quas tempore veniam, voluptatibus! Amet aperiam assumenda quo.'
  },
  {
    id: 2,
    name: 'THOR',
    thumbnail: 'http://lorempicsum.com/futurama/350/200/2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aliquid amet deleniti doloribus et illo in inventore laboriosam optio perspiciatis possimus quas tempore veniam, voluptatibus! Amet aperiam assumenda quo.'
  },
  {
    id: 3,
    name: 'HULK',
    thumbnail: 'http://lorempicsum.com/futurama/350/200/3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aliquid amet deleniti doloribus et illo in inventore laboriosam optio perspiciatis possimus quas tempore veniam, voluptatibus! Amet aperiam assumenda quo.'
  },
  {
    id: 4,
    name: 'CAPTAIN AMERICA',
    thumbnail: 'http://lorempicsum.com/futurama/350/200/4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aliquid amet deleniti doloribus et illo in inventore laboriosam optio perspiciatis possimus quas tempore veniam, voluptatibus! Amet aperiam assumenda quo.'
  },
  {
    id: 5,
    name: 'SPIDER MAN',
    thumbnail: 'http://lorempicsum.com/futurama/350/200/5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aliquid amet deleniti doloribus et illo in inventore laboriosam optio perspiciatis possimus quas tempore veniam, voluptatibus! Amet aperiam assumenda quo.'
  }
]

describe('Store - mutations', () => {
  it('should not ADD_CHARACTER if not argument passed', () => {
    let state = {characters: []}
    mutations[types.ADD_CHARACTER](state)
    expect(state.characters).to.be.empty
  })

  it('should ADD_CHARACTER ', () => {
    let state = {characters: []}
    _characters.forEach((char) => {
      mutations[types.ADD_CHARACTER](state, char)
    })

    expect(state.characters).to.have.lengthOf(_characters.length)
    expect(state.characters).to.eql(_characters);
  })

  it('should CLEAR_CHARACTERS ', () => {
    let state1 = {characters: []}
    mutations[types.CLEAR_CHARACTERS](state1)
    expect(state1.characters).to.have.lengthOf(0)

    let state2 = {characters: [..._characters]}
    mutations[types.CLEAR_CHARACTERS](state2)
    expect(state2.characters).to.have.lengthOf(0)
  })
})

describe('Store - getters', () => {
  it('should return characters', () => {
    let state = {characters: [..._characters]}
    expect(getters.characters(state)).to.eql(_characters)
  })

  it('should return loading true if no characters', () => {
    let state = {characters: []}
    expect(getters.loading(state)).to.be.true
  })

  it('should return loading false if at least one characters', () => {
    let state = {characters: [..._characters]}
    expect(getters.loading(state)).to.be.false
  })

})
