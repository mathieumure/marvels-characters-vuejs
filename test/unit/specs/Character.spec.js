import "babel-polyfill";
import Vue from "vue";
import Character from "src/components/Character";

// helper function that mounts and returns the rendered element
function getRenderedElement (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData }).$mount()
  return vm.$el
}

describe('Character.vue', () => {
  it('should render correctly', () => {

    const _NAME = 'Test Name'
    const _DESCRIPTION = 'Character description'
    const _THUMB_PATH = 'http://path.com'
    const _THUMB_EXTENSION = 'ext'

    let $el = getRenderedElement(Character, {
      character: {
        name: _NAME,
        description: _DESCRIPTION,
        thumbnail: {
          path: _THUMB_PATH,
          extension: _THUMB_EXTENSION
        }
      }
    })


    expect($el.querySelector('.card.horizontal')).to.exist
    expect($el.querySelector('.card-image img').getAttribute('src')).to.equal(
      _THUMB_PATH + '/portrait_xlarge.' + _THUMB_EXTENSION
    )
    expect($el.querySelector('.card-title').textContent).to.equal(_NAME)
    expect($el.querySelector('.card-content p').textContent).to.equal(_DESCRIPTION)
  })
})
