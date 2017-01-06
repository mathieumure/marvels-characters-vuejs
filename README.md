# Marvel characters

This application aims to collect marvel's characters through their API.

## Frameworks

This application is based on the following frameworks:

- VueJS: as a core javascript framework
- Materialize: as CSS framework
- Vuex: an implementation of Flux pattern for VueJS
- Vue-resource: for making ajax request
- Karma/mocha: for unit testing

## File structure

All source files are stored into the `src/` folder:

- `src/api/`: all files responsible for api connection
- `src/assets/`: for static assets
- `src/components/`: the components of the application
- `src/store/`: all files responsible for handling flux data

## Architecture

```
App
 |- Characters
        |- Loader
        |- Character
```

### App

It's the base component of the application

### Characters

Component responsible for fetching characters, displaying preloader if no result yet or a list of Character component

### Loader

Component responsible for displaying a preloader

### Character

Component responsible for displaying a character:

- it's name
- it's description
- it's thumbnail


## Test locally

``` bash
# clone this repository
git clone https://github.com/mathieumure/marvels-characters-vuejs

# install dependencies
cd marvels-characters-vuejs/
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run all tests
npm test
```
