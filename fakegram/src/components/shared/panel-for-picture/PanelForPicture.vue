<template>
  <figure class="panel-for-picture">
    <figcaption @click="show = !show" >
      {{ title }}
    </figcaption>
    <transition name="panel-fade">
      <div v-show="show" class="panel-content">
        <slot/>
      </div>
    </transition>
  </figure>
</template>

<script>
export default {
  props: ["title"],

  data() {
    return {
      show: true
    };
  }
};
</script>

<style scoped>
.panel-for-picture {
  padding: 0 auto;
  border: solid 0.1em#35495e;
  margin: 5px;
  box-shadow: 5px 5px 10px #35495e;
  width: 17em;
  height: 100%;
  vertical-align: top;
  text-align: center;
}

.panel-for-picture figcaption {
  text-align: center;
  border-bottom: solid 0.01em #35495e;
  background-color: #41b883;
  margin: 0 0 0.95em 0;
  padding: 0.7em;
  text-transform: uppercase;
  font-size: 1.3em;
  font-weight: bold;
  color: #35495e;
  text-shadow: 2px 3px 2px #35495ec5;
  cursor: pointer;
}

.panel-fade-enter,
.panel-fade-leave-active {
  opacity: 0;
}

.panel-fade-enter-active,
.panel-fade-leave-active {
  transition: opacity 0.5s;
}

.panel-for-picture {
  overflow: hidden;
}

.panel-content {
  display: flex;
  flex-flow: column;
}
</style>
