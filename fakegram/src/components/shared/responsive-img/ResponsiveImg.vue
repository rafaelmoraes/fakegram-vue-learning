<template>
  <img :src="src" :alt="alt">
</template>

<script>
export default {
  props: ['src', 'alt']
}
</script>

<style scoped>
img {
  width: 100%;
  margin: 0;
  background-color: #FFF;
}
</style>
