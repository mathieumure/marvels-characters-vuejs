import "babel-polyfill";
import Vue from "vue";
import Loader from "src/components/Loader";

describe('Loader.vue', () => {
  it('should render materialize preloader', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Loader)
    })
    expect(vm.$el.querySelector('.preloader-wrapper')).to.exist
  })
})
