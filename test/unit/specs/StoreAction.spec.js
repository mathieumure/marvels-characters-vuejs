import actionsInjector from "inject!src/store";
import * as types from "src/store/mutation-types";

const _OFFSET = 100
const _LIMIT = 20
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

// create the module with our mocks
const actions = actionsInjector({
  '../api/characters': {
    getCharacters (options, success, error) {
      expect(options.offset).to.equal(_OFFSET)
      expect(options.limit).to.equal(_LIMIT)
      success(_characters)
    }
  }
})

// helper for testing action with expected mutations
const testAction = (action, args, state, expectedMutations, done) => {
  let count = 0

  // mock commit
  const commit = (type, payload) => {
    const mutation = expectedMutations[count]
    expect(mutation.type).to.equal(type)
    if (payload) {
      expect(mutation.payload).to.deep.equal(payload)
    }
    count++
    if (count >= expectedMutations.length) {
      done()
    }
  }

  // call the action with mocked store and arguments
  action({commit, state}, ...args)

  // check if no mutations should have been dispatched
  if (expectedMutations.length === 0) {
    expect(count).to.equal(0)
    done()
  }
}

describe('Store - actions', () => {
  it('should fetch characters through api', (done) => {
    let state = {characters: [{name: 'old character 1', name: 'old character 2'}], offset: _OFFSET, limit: _LIMIT}
    testAction(actions.actions.getCharacters, [], state, [
      {type: types.CLEAR_CHARACTERS},
      {type: types.ADD_CHARACTER, payload: _characters[0]},
      {type: types.ADD_CHARACTER, payload: _characters[1]},
      {type: types.ADD_CHARACTER, payload: _characters[2]},
      {type: types.ADD_CHARACTER, payload: _characters[3]},
      {type: types.ADD_CHARACTER, payload: _characters[4]}
    ], done)
  })

})
