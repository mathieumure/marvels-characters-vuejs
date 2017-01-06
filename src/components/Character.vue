<template>
  <div>
    <div class="card horizontal">
      <div class="card-image">
        <img :src="thumbnailUrl">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <span class="card-title">{{ character.name }}</span>
          <p>{{ character.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
  const IMAGE_DIMENSION = 'portrait_xlarge'
  export default{
    props: ['character'],
    computed: {
      thumbnailUrl () {
        return this.character.thumbnail.path + '/' + IMAGE_DIMENSION + '.' + this.character.thumbnail.extension
      }
    }
  }
</script>
