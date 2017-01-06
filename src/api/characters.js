import Vue from 'vue'

export default {
  getCharacters (options, success, error) {
    Vue.http.get('https://gateway.marvel.com/v1/public/characters', {
      params: {...options}
    })
      .then((response) => {
        response.json().then((data) => {
          success(data.data.results)
        })
      }, error)
  }
}
