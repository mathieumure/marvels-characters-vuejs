<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper black">
        <img src="./assets/logo.png" class="responsive-img brand-logo">
      </div>
    </nav>
    <div class="container">
      <characters></characters>
    </div>
  </div>
</template>

<script>
import Characters from './components/Characters'

export default {
  name: 'app',
  components: {
    Characters
  }
}
</script>

<style>
  html, #app {
    background-color: #eeeeee;
  }
  nav .brand-logo {
    height: 100%;
  }
</style>
